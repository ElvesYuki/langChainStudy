import os

import psycopg
from dotenv import load_dotenv
from langchain_core.prompts import PromptTemplate
from langchain_ollama import OllamaEmbeddings
from langchain_openai import ChatOpenAI

load_dotenv()

openai_api_base = os.getenv("OPENAI_API_BASE")
table_name = os.getenv("PGVECTOR_TABLE_NAME", "langchain_study_pgvector_documents")


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


def build_search_query(question: str, chat_history: list[dict]) -> str:
    if not chat_history:
        return question

    history_lines = []
    for item in chat_history[-2:]:
        history_lines.append(f"用户问题：{item['question']}")
        history_lines.append(f"助手回答：{item['answer']}")

    history_text = "\n".join(history_lines)
    return f"{history_text}\n当前问题：{question}"


def search_similar_documents(connection, search_query: str, embeddings: OllamaEmbeddings, top_k: int) -> list[dict]:
    query_vector = embeddings.embed_query(search_query)
    query_vector_text = vector_to_string(query_vector)

    with connection.cursor() as cursor:
        cursor.execute(
            f"""
            SELECT content, source, embedding <=> %s::vector AS distance
            FROM {table_name}
            ORDER BY embedding <=> %s::vector
            LIMIT %s
            """,
            (query_vector_text, query_vector_text, top_k),
        )
        rows = cursor.fetchall()

    return [
        {"content": row[0], "source": row[1], "distance": row[2]}
        for row in rows
    ]


def format_history(chat_history: list[dict]) -> str:
    if not chat_history:
        return "无"

    history_lines = []
    for index, item in enumerate(chat_history, start=1):
        history_lines.append(f"第 {index} 轮用户问题：{item['question']}")
        history_lines.append(f"第 {index} 轮助手回答：{item['answer']}")

    return "\n".join(history_lines)


def format_context(retrieved_documents: list[dict]) -> str:
    return "\n\n".join(
        [
            f"资料 {index + 1}（来源：{document['source']}）\n{document['content']}"
            for index, document in enumerate(retrieved_documents)
        ]
    )


def ask_with_history(
    question: str,
    chat_history: list[dict],
    connection,
    embeddings: OllamaEmbeddings,
    chat_model: ChatOpenAI,
    top_k: int,
) -> tuple[str, list[dict], str]:
    search_query = build_search_query(question, chat_history)
    retrieved_documents = search_similar_documents(connection, search_query, embeddings, top_k)

    prompt = PromptTemplate.from_template(
        """你是花店知识库助手，请结合对话历史和检索到的资料来回答当前问题。
如果资料中没有明确答案，就直接回答“我暂时无法从资料中确定答案”。

对话历史：
{history}

检索到的资料：
{context}

当前问题：
{question}
"""
    )

    prompt_text = prompt.format(
        history=format_history(chat_history),
        context=format_context(retrieved_documents),
        question=question,
    )

    response = chat_model.invoke(prompt_text)
    return response.content, retrieved_documents, search_query


def ensure_table_has_data(connection) -> bool:
    with connection.cursor() as cursor:
        cursor.execute("SELECT to_regclass(%s)", (table_name,))
        table_exists = cursor.fetchone()[0]

        if table_exists is None:
            return False

        cursor.execute(f"SELECT COUNT(*) FROM {table_name}")
        row_count = cursor.fetchone()[0]
        return row_count > 0


def print_documents(label: str, retrieved_documents: list[dict]) -> None:
    print(f"\n=== {label} ===")
    for index, document in enumerate(retrieved_documents, start=1):
        print(f"[{index}] source={document['source']}")
        print(f"distance={document['distance']}")
        print(document["content"][:180])
        print("-" * 40)


def main() -> None:
    connection = get_connection()

    if not ensure_table_has_data(connection):
        print("当前 pgvector 表里没有可检索数据。")
        print("请先在项目根目录运行：uv run --project python python python/examples/rag/pgvector_rag.py")
        connection.close()
        return

    embeddings = OllamaEmbeddings(
        base_url=os.getenv("OLLAMA_EMBED_BASE_URL"),
        model=os.getenv("OLLAMA_EMBED_MODEL"),
    )

    chat_model = ChatOpenAI(
        model=os.getenv("LLM_MODEL"),
        temperature=0.2,
        openai_api_base=openai_api_base,
        api_key=os.getenv("OPENAI_API_KEY"),
    )

    top_k = int(os.getenv("PGVECTOR_TOP_K", "3"))
    chat_history = []

    first_question = "员工手册里对服务态度有什么要求？"
    first_answer, first_documents, first_search_query = ask_with_history(
        first_question,
        chat_history,
        connection,
        embeddings,
        chat_model,
        top_k,
    )

    print("=== Round 1 ===")
    print(f"question: {first_question}")
    print(f"search_query: {first_search_query}")
    print_documents("Round 1 Retrieved Documents", first_documents)
    print("answer:")
    print(first_answer)

    chat_history.append({"question": first_question, "answer": first_answer})

    follow_up_question = "那如果违反这些要求，会怎么处理？"

    single_turn_answer, single_turn_documents, single_turn_search_query = ask_with_history(
        follow_up_question,
        [],
        connection,
        embeddings,
        chat_model,
        top_k,
    )

    memory_answer, memory_documents, memory_search_query = ask_with_history(
        follow_up_question,
        chat_history,
        connection,
        embeddings,
        chat_model,
        top_k,
    )

    print("\n=== Round 2 Compare ===")
    print(f"follow_up_question: {follow_up_question}")

    print(f"\n[without memory] search_query: {single_turn_search_query}")
    print_documents("Without Memory Retrieved Documents", single_turn_documents)
    print("answer:")
    print(single_turn_answer)

    print(f"\n[with memory] search_query: {memory_search_query}")
    print_documents("With Memory Retrieved Documents", memory_documents)
    print("answer:")
    print(memory_answer)

    connection.close()


if __name__ == "__main__":
    main()
