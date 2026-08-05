from typing import TypedDict

from langgraph.graph import END, START, StateGraph


class WeatherState(TypedDict, total=False):
    question: str
    city: str
    need_weather: bool
    weather: str
    answer: str


def analyze_question(state: WeatherState) -> WeatherState:
    question = state["question"]
    need_weather = "天气" in question or "weather" in question.lower()
    print("\n=== analyze_question ===")
    print({"question": question, "need_weather": need_weather})
    return {"need_weather": need_weather}


def extract_city(state: WeatherState) -> WeatherState:
    question = state["question"]

    if "上海" in question:
        city = "上海"
    elif "北京" in question:
        city = "北京"
    elif "sf" in question.lower() or "san francisco" in question.lower():
        city = "San Francisco"
    else:
        city = "你所在的城市"

    print("\n=== extract_city ===")
    print({"city": city})
    return {"city": city}


def get_weather(state: WeatherState) -> WeatherState:
    city = state["city"]
    weather_map = {
        "上海": "多云，30 度",
        "北京": "晴天，33 度",
        "San Francisco": "sunny, 18 degrees",
        "你所在的城市": "天气数据暂时未知，但看起来适合出门走走",
    }
    weather = weather_map.get(city, "天气数据暂时未知")
    print("\n=== get_weather ===")
    print({"city": city, "weather": weather})
    return {"weather": weather}


def answer_weather(state: WeatherState) -> WeatherState:
    city = state["city"]
    weather = state["weather"]
    answer = f"{city} 的天气是：{weather}。"
    print("\n=== answer_weather ===")
    print({"answer": answer})
    return {"answer": answer}


def answer_general(state: WeatherState) -> WeatherState:
    answer = "这个 graph 只演示天气问答流程；如果不是天气问题，就走普通回答分支。"
    print("\n=== answer_general ===")
    print({"answer": answer})
    return {"answer": answer}


def route_after_analysis(state: WeatherState) -> str:
    return "extract_city" if state["need_weather"] else "answer_general"


graph_builder = StateGraph(WeatherState)

graph_builder.add_node("analyze_question", analyze_question)
graph_builder.add_node("extract_city", extract_city)
graph_builder.add_node("get_weather", get_weather)
graph_builder.add_node("answer_weather", answer_weather)
graph_builder.add_node("answer_general", answer_general)

graph_builder.add_edge(START, "analyze_question")
graph_builder.add_conditional_edges(
    "analyze_question",
    route_after_analysis,
    {
        "extract_city": "extract_city",
        "answer_general": "answer_general",
    },
)
graph_builder.add_edge("extract_city", "get_weather")
graph_builder.add_edge("get_weather", "answer_weather")
graph_builder.add_edge("answer_weather", END)
graph_builder.add_edge("answer_general", END)

graph = graph_builder.compile()


def run_demo(question: str) -> None:
    print("\n" + "=" * 20)
    print(f"question: {question}")
    result = graph.invoke({"question": question})
    print("\n=== final state ===")
    print(result)


run_demo("上海今天天气怎么样？")
run_demo("帮我总结一下这个仓库学什么")
