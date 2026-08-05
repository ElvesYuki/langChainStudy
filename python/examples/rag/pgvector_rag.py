import os
import sys
from pathlib import Path

import docx2txt
import psycopg
from dotenv import load_dotenv
from langchain_core.documents import Document
from langchain_core.prompts import PromptTemplate
from langchain_ollama import OllamaEmbeddings
from langchain_openai import ChatOpenAI
from langchain_text_splitters import RecursiveCharacterTextSplitter
from pypdf import PdfReader

load_dotenv()

openai_api_base = os.getenv("OPENAI_API_BASE")
table_name = os.getenv("PGVECTOR_TABLE_NAME", "langchain_study_pgvector_documents")


def load_source_documents() -> list[Document]:
    base_dir = Path(__file__).resolve().parents[2] / "data" / "one_flower"
    documents = []

    for file_name in os.listdir(base_dir):
        file_path = base_dir / file_name

        if file_name.endswith(".pdf"):
            reader = PdfReader(str(file_path))
            text = ""
            for page in reader.pages:
                text += page.extract_text() or ""
            documents.append(Document(page_content=text, metadata={"source": str(file_path)}))
        elif file_name.endswith(".docx"):
            text = docx2txt.process(str(file_path))
            documents.append(Document(page_content=text, metadata={"source": str(file_path)}))
        elif file_name.endswith(".txt"):
            with file_path.open("r", encoding="utf-8") as file:
                text = file.read()
            documents.append(Document(page_content=text, metadata={"source": str(file_path)}))

    return documents


def get_connection():
    return psycopg.connect(
        host=os.getenv("PGVECTOR_HOST"),
        port=os.getenv("PGVECTOR_PORT", "5432"),
        dbname=os.getenv("PGVECTOR_DATABASE", "postgres"),
        user=os.getenv("PGVECTOR_USER", "postgres"),
        password=os.getenv("PGVECTOR_PASSWORD"),
    )


def vector_to_string(vector: list[float]) -> str:
    return "[" + ",".join(str(value) for value in vector) + "]"


def prepare_database(connection, vector_size: int) -> None:
    with connection.cursor() as cursor:
        cursor.execute("CREATE EXTENSION IF NOT EXISTS vector")
        cursor.execute(f"DROP TABLE IF EXISTS {table_name}")
        cursor.execute(
            f"""
            CREATE TABLE {table_name} (
                id BIGSERIAL PRIMARY KEY,
                content TEXT NOT NULL,
                source TEXT,
                embedding VECTOR({vector_size}) NOT NULL
            )
            """
        )
    connection.commit()


def insert_documents(connection, documents: list[Document], embeddings: OllamaEmbeddings) -> None:
    texts = [document.page_content for document in documents]
    vectors = embeddings.embed_documents(texts)

    prepare_database(connection, len(vectors[0]))

    with connection.cursor() as cursor:
        for document, vector in zip(documents, vectors):
            cursor.execute(
                f"""
                INSERT INTO {table_name} (content, source, embedding)
                VALUES (%s, %s, %s::vector)
                """,
                (
                    document.page_content,
                    document.metadata.get("source"),
                    vector_to_string(vector),
                ),
            )
    connection.commit()


def search_similar_documents(connection, question: str, embeddings: OllamaEmbeddings, top_k: int) -> list[dict]:
    question_vector = embeddings.embed_query(question)
    question_vector_text = vector_to_string(question_vector)

    with connection.cursor() as cursor:
        cursor.execute(
            f"""
            SELECT content, source, embedding <=> %s::vector AS distance
            FROM {table_name}
            ORDER BY embedding <=> %s::vector
            LIMIT %s
            """,
            (question_vector_text, question_vector_text, top_k),
        )
        rows = cursor.fetchall()

    return [
        {"content": row[0], "source": row[1], "distance": row[2]}
        for row in rows
    ]


def build_answer(question: str, retrieved_documents: list[dict], chat_model: ChatOpenAI):
    context = "\n\n".join(
        [
            f"资料 {index + 1}（来源：{document['source']}）\n{document['content']}"
            for index, document in enumerate(retrieved_documents)
        ]
    )

    prompt = PromptTemplate.from_template(
        """你是花店知识库助手，请只根据提供的资料回答问题。
如果资料中没有明确答案，就直接回答“我暂时无法从资料中确定答案”。

资料：
{context}

问题：
{question}
"""
    )

    prompt_text = prompt.format(context=context, question=question)
    return chat_model.invoke(prompt_text)


def main() -> None:
    source_documents = load_source_documents()
    print(f"Loaded {len(source_documents)} source documents")

    text_splitter = RecursiveCharacterTextSplitter(chunk_size=300, chunk_overlap=50)
    chunked_documents = text_splitter.split_documents(source_documents)
    print(f"Split documents into {len(chunked_documents)} chunks")

    embedding_model = OllamaEmbeddings(
        base_url=os.getenv("OLLAMA_EMBED_BASE_URL"),
        model=os.getenv("OLLAMA_EMBED_MODEL"),
    )

    chat_model = ChatOpenAI(
        model=os.getenv("LLM_MODEL"),
        temperature=0.2,
        openai_api_base=openai_api_base,
        api_key=os.getenv("OPENAI_API_KEY"),
    )

    connection = get_connection()
    insert_documents(connection, chunked_documents, embedding_model)
    print(f"Inserted {len(chunked_documents)} chunks into pgvector table: {table_name}")

    question = sys.argv[1] if len(sys.argv) > 1 else "员工手册里对服务态度有什么要求？"
    top_k = int(os.getenv("PGVECTOR_TOP_K", "3"))

    retrieved_documents = search_similar_documents(connection, question, embedding_model, top_k)

    print("\n=== Retrieved Documents ===")
    for index, document in enumerate(retrieved_documents, start=1):
        print(f"[{index}] source={document['source']}")
        print(f"distance={document['distance']}")
        print(document["content"][:200])
        print("-" * 40)

    response = build_answer(question, retrieved_documents, chat_model)

    print("\n=== Final Answer ===")
    print(response.content)

    connection.close()


if __name__ == "__main__":
    main()
