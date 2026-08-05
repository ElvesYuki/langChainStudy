import logging
import os
from pathlib import Path

from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain_core.documents import Document

from pypdf import PdfReader
import docx2txt

from langchain_text_splitters import RecursiveCharacterTextSplitter

from langchain_qdrant import Qdrant
from langchain_ollama import OllamaEmbeddings

from langchain_classic.retrievers.multi_query import MultiQueryRetriever
from langchain_classic.chains.retrieval_qa.base import RetrievalQA

from flask import Flask, request, render_template

# os.environ["LANGCHAIN_DEBUG"] = "true"

load_dotenv()
openai_api_base = os.getenv("OPENAI_API_BASE")

base_dir = Path(__file__).resolve().parents[2] / "data" / "one_flower"
documents = []
for file in os.listdir(base_dir):
    file_path = base_dir / file
    if file.endswith(".pdf"):
        reader = PdfReader(str(file_path))
        text = ""
        for page in reader.pages:
            text += page.extract_text() or ""
        documents.append(Document(page_content=text, metadata={"source": str(file_path)}))
    elif file.endswith(".docx"):
        text = docx2txt.process(str(file_path))
        documents.append(Document(page_content=text, metadata={"source": str(file_path)}))
    elif file.endswith(".txt"):
        with file_path.open("r", encoding="utf-8") as f:
            text = f.read()
        documents.append(Document(page_content=text, metadata={"source": str(file_path)}))

print(f"Loaded {len(documents)} source documents from {base_dir}")

text_splitter = RecursiveCharacterTextSplitter(chunk_size=200, chunk_overlap=20)
chunked_documents = text_splitter.split_documents(documents)

print(f"Split documents into {len(chunked_documents)} chunks")

vectorstore = Qdrant.from_documents(
    documents=chunked_documents,
    embedding=OllamaEmbeddings(
        base_url=os.getenv("OLLAMA_EMBED_BASE_URL", "http://192.168.88.12:11434"),
        model=os.getenv("OLLAMA_EMBED_MODEL", "nomic-embed-text:latest"),
    ),
    location=":memory:",
    collection_name="my_documents",
)

logging.basicConfig(
    level=logging.DEBUG,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)

chat_model = ChatOpenAI(
    model=os.getenv("LLM_MODEL"),
    temperature=0.8,
    openai_api_base=openai_api_base,
    api_key=os.getenv("OPENAI_API_KEY"),
)

retriever_from_llm = MultiQueryRetriever.from_llm(
    retriever=vectorstore.as_retriever(),
    llm=chat_model,
)

qa_chain = RetrievalQA.from_chain_type(llm=chat_model, retriever=retriever_from_llm)

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        question = request.form.get("question")
        result = qa_chain.invoke({"query": question})
        return render_template("index.html", result=result)

    return render_template("index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=5000)
