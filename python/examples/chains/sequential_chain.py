import os

from dotenv import load_dotenv
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import PromptTemplate
from langchain_core.runnables import RunnableLambda
from langchain_openai import ChatOpenAI

load_dotenv()

openai_api_base = os.getenv("OPENAI_API_BASE")

# 初始化模型，只需要初始化一次
chat_model = ChatOpenAI(
    model=os.getenv("LLM_MODEL"),
    temperature=0.8,
    openai_api_base=openai_api_base,
    api_key=os.getenv("OPENAI_API_KEY"),
)

# 第一个链：生成鲜花介绍
introduction_template = """
你是一个植物学家。给定花的名称和类型，你需要为这种花写一个200字左右的介绍。

花名: {name}
颜色: {color}
植物学家: 这是关于上述花的介绍:"""
introduction_prompt = PromptTemplate(input_variables=["name", "color"], template=introduction_template)
introduction_chain = (
    introduction_prompt
    | chat_model.with_config({"run_name": "introduction_chain"})
    | StrOutputParser()
    | RunnableLambda(lambda text: {"introduction": text})
)

# 第二个链：生成鲜花评论
review_template = """
你是一位鲜花评论家。给定一种花的介绍，你需要为这种花写一篇200字左右的评论。

鲜花介绍:
{introduction}
花评人对上述花的评论:"""
review_prompt = PromptTemplate(input_variables=["introduction"], template=review_template)
review_generation_chain = (
    review_prompt
    | chat_model.with_config({"run_name": "review_chain"})
    | StrOutputParser()
)


def attach_review(payload: dict) -> dict:
    review = review_generation_chain.invoke({"introduction": payload["introduction"]})
    return {
        **payload,
        "review": review,
    }


review_chain = RunnableLambda(attach_review)

# 第三个链：生成社交媒体文案
social_post_template = """
你是一家花店的社交媒体经理。给定一种花的介绍和评论，你需要为这种花写一篇社交媒体的帖子，300字左右。

鲜花介绍:
{introduction}
花评人对上述花的评论:
{review}

社交媒体帖子:
"""
social_post_prompt = PromptTemplate(input_variables=["introduction", "review"], template=social_post_template)
social_post_chain = social_post_prompt | chat_model.with_config({"run_name": "social_post_chain"}) | StrOutputParser()

# 输入数据
input_data = {"name": "玫瑰", "color": "黑色"}

# 总的链，按顺序运行三个链
overall_chain = introduction_chain | review_chain | social_post_chain

result = overall_chain.invoke(input_data)

print(result)
