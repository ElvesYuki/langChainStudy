import os

from dotenv import load_dotenv
from langchain_core.messages import AIMessage, HumanMessage
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_openai import ChatOpenAI

load_dotenv()

openai_api_base = os.getenv("OPENAI_API_BASE")

chat_model = ChatOpenAI(
    model=os.getenv("LLM_MODEL"),
    temperature=0.5,
    openai_api_base=openai_api_base,
    api_key=os.getenv("OPENAI_API_KEY"),
)

prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            "你是一位花店客服助手，回答要简洁、友好，并优先结合上下文理解用户追问。",
        ),
        MessagesPlaceholder("chat_history"),
        ("human", "{question}"),
    ]
)

chat_history = [
    HumanMessage(content="我想送朋友一束花，有什么推荐？"),
    AIMessage(content="如果是送朋友，我会优先推荐向日葵，整体感觉阳光、鼓励、积极。"),
    HumanMessage(content="那送长辈呢？"),
    AIMessage(content="送长辈的话，百合和康乃馨都很合适，百合更显温和祝福，康乃馨更偏感谢和关怀。"),
]

formatted_messages = prompt.invoke(
    {
        "chat_history": chat_history,
        "question": "预算低一点的话呢？",
    }
)

print("=== Formatted Messages ===")
for index, message in enumerate(formatted_messages.to_messages(), start=1):
    print(f"[{index}] {type(message).__name__}")
    print(message.content)
    print("-" * 40)

chain = prompt | chat_model | StrOutputParser()

result = chain.invoke(
    {
        "chat_history": chat_history,
        "question": "预算低一点的话呢？",
    }
)

print("\n=== Final Answer ===")
print(result)
