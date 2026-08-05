import os
from dotenv import load_dotenv
load_dotenv()

from langchain_openai import ChatOpenAI

openai_api_base = os.getenv("OPENAI_API_BASE")

chat = ChatOpenAI(
    model=os.getenv("LLM_MODEL"),
    temperature=0.8,
    max_tokens=60,
    openai_api_base=openai_api_base,
    api_key=os.getenv("OPENAI_API_KEY"),
)

from langchain_core.messages import (
    HumanMessage,
    SystemMessage
)

messages = [
    SystemMessage(content="你是一个很棒的智能助手"),
    HumanMessage(content="请给我的花店起个名")
]

response = chat.invoke(messages)
print(response)
