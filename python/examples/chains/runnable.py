import os

from dotenv import load_dotenv
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import PromptTemplate
from langchain_core.runnables import RunnableLambda, RunnablePassthrough
from langchain_openai import ChatOpenAI

load_dotenv()

openai_api_base = os.getenv("OPENAI_API_BASE")

chat_model = ChatOpenAI(
    model=os.getenv("LLM_MODEL"),
    temperature=0.6,
    openai_api_base=openai_api_base,
    api_key=os.getenv("OPENAI_API_KEY"),
)

introduction_prompt = PromptTemplate.from_template(
    """你是一位花店文案策划。请根据花名和颜色，写一段 80 字左右的产品介绍。

花名：{name}
颜色：{color}
产品介绍："""
)

ad_copy_prompt = PromptTemplate.from_template(
    """你是一位社交媒体运营。请根据下面的产品介绍，写一句适合发朋友圈的宣传文案。

产品介绍：
{introduction}

宣传文案："""
)


def print_step(label: str):
    def _printer(payload):
        print(f"\n=== {label} ===")
        print(payload)
        return payload

    return RunnableLambda(_printer)


def build_result(payload: dict) -> dict:
    return {
        "name": payload["name"],
        "color": payload["color"],
        "introduction": payload["introduction"],
        "ad_copy": payload["ad_copy"],
    }


introduction_chain = (
    introduction_prompt
    | chat_model.with_config({"run_name": "introduction_model"})
    | StrOutputParser()
)

ad_copy_chain = (
    ad_copy_prompt
    | chat_model.with_config({"run_name": "ad_copy_model"})
    | StrOutputParser()
)

overall_chain = (
    RunnablePassthrough()
    | print_step("Step 1: Original Input")
    | RunnablePassthrough.assign(
        introduction=introduction_chain,
    )
    | print_step("Step 2: After assign introduction")
    | RunnablePassthrough.assign(
        ad_copy=RunnableLambda(lambda payload: {"introduction": payload["introduction"]})
        | ad_copy_chain
    )
    | print_step("Step 3: After assign ad_copy")
    | RunnableLambda(build_result)
)

input_data = {
    "name": "向日葵",
    "color": "金黄色",
}

result = overall_chain.invoke(input_data)

print("\n=== Final Result ===")
print(result)
