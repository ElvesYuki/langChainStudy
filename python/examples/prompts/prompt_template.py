import os
from pathlib import Path

from dotenv import load_dotenv
from langchain_core.prompts import PromptTemplate
from langchain_openai import ChatOpenAI

from langchain_classic.output_parsers import StructuredOutputParser, ResponseSchema

load_dotenv()

openai_api_base = os.getenv("OPENAI_API_BASE")

chat_model = ChatOpenAI(
    model=os.getenv("LLM_MODEL"),
    temperature=0.8,
    openai_api_base=openai_api_base,
    api_key=os.getenv("OPENAI_API_KEY"),
)

response_schemas = [
    ResponseSchema(name="description", description="鲜花的描述文案"),
    ResponseSchema(name="reason", description="问什么要这样写这个文案"),
]

output_parser = StructuredOutputParser.from_response_schemas(response_schemas)

format_instructions = output_parser.get_format_instructions()

prompt_template = """您是一位专业的鲜花店文案撰写员。对于售价为 {price} 元的 {flower_name} ，您能提供一个吸引人的简短描述吗？{format_instructions}"""
prompt = PromptTemplate.from_template(prompt_template, partial_variables={"format_instructions": format_instructions})

print(prompt)

# 数据准备
flowers = ["玫瑰", "百合", "康乃馨"]
prices = ["50", "30", "20"]

# 创建一个空的DataFrame用于存储结果
import pandas as pd

df = pd.DataFrame(columns=["flower", "price", "description", "reason"])  # 先声明列名

for flower, price in zip(flowers, prices):
    #   根据提示准备模型的输入
    prompt_text = prompt.format(flower_name=flower, price=price)

    print(prompt_text)

    # 获取模型的输出
    output = chat_model.invoke([prompt_text])

    print(output)

    # 解析模型的输出（这是一个字典结构）
    parsed_output = output_parser.parse(output.content)


    # 在解析后的输出中添加“flower”和“price”
    parsed_output["flower"] = flower
    parsed_output["price"] = price

    # 将解析后的输出添加到DataFrame中
    df.loc[len(df)] = parsed_output

# 打印字典
print(df.to_dict(orient='records'))

# 保存DataFrame到CSV文件
output_path = Path(__file__).resolve().parents[2] / "outputs" / "flowers_with_descriptions.csv"
output_path.parent.mkdir(parents=True, exist_ok=True)
df.to_csv(output_path, index=False)
print(f"saved: {output_path}")
