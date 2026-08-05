from langchain.agents import create_agent
from langchain_openai import ChatOpenAI
import os
from dotenv import load_dotenv
from dataclasses import dataclass
from langchain.tools import tool, ToolRuntime
from langchain.agents.structured_output import ToolStrategy

load_dotenv()
openai_api_base = os.getenv("OPENAI_API_BASE")

SYSTEM_PROMPT = """You are an expert weather forecaster, who speaks in puns.

You have access to two tools:

- get_weather_for_location: use this to get the weather for a specific location
- get_user_location: use this to get the user's location

If a user asks you for the weather, make sure you know the location. If you can tell from the question that they mean wherever they are, use the get_user_location tool to find their location."""

@tool
def get_weather_for_location(city: str) -> str:
    """Get weather for a given city."""
    result = f"It's always sunny in {city}!"
    print(f"[tool] get_weather_for_location(city={city!r}) -> {result!r}")
    return result

@dataclass
class Context:
    """Custom runtime context schema."""
    user_id: str

@tool
def get_user_location(runtime: ToolRuntime[Context]) -> str:
    """Retrieve user information based on user ID."""
    user_id = runtime.context.user_id
    result = "Florida" if user_id == "1" else "SF"
    print(f"[tool] get_user_location(user_id={user_id!r}) -> {result!r}")
    return result

llm = ChatOpenAI(
    model=os.getenv("LLM_MODEL", "deepseek-chat"),
    api_key=os.getenv("OPENAI_API_KEY"),
    openai_api_base=openai_api_base,
    temperature=0.1,
)

# We use a dataclass here, but Pydantic models are also supported.
@dataclass
class ResponseFormat:
    """Response schema for the agent."""
    # A punny response (always required)
    punny_response: str
    # Any interesting information about the weather if available
    weather_conditions: str | None = None

agent = create_agent(
    model=llm,
    system_prompt=SYSTEM_PROMPT,
    tools=[get_user_location, get_weather_for_location],
    context_schema=Context,
    response_format=ToolStrategy(ResponseFormat),
)


def print_agent_trace(response: dict, label: str) -> None:
    print(f"\n=== {label} ===")
    for index, message in enumerate(response["messages"], start=1):
        message_type = type(message).__name__
        print(f"[{index}] {message_type}")

        if getattr(message, "content", None):
            print(f"content: {message.content}")

        tool_calls = getattr(message, "tool_calls", None)
        if tool_calls:
            print(f"tool_calls: {tool_calls}")

        if message_type == "ToolMessage":
            print(f"tool_name: {message.name}")
            print(f"tool_call_id: {message.tool_call_id}")

        finish_reason = getattr(message, "response_metadata", {}).get("finish_reason")
        if finish_reason:
            print(f"finish_reason: {finish_reason}")

        print("-" * 40)


def print_final_response(response: dict) -> None:
    structured = response.get("structured_response")
    if structured is not None:
        print(structured)
        return

    print("[warn] structured_response not found; falling back to final AI message.")
    for message in reversed(response["messages"]):
        if type(message).__name__ == "AIMessage" and getattr(message, "content", None):
            print(message.content)
            return

    print("[warn] no final AI message content found.")

response = agent.invoke(
    {"messages": [{"role": "user", "content": "what is the weather outside?"}]},
    context=Context(user_id="1")
)

print_agent_trace(response, "Trace 1")
print_final_response(response)

response = agent.invoke(
    {"messages": [{"role": "user", "content": "thank you!"}]},
    context=Context(user_id="1")
)

print_agent_trace(response, "Trace 2")
print_final_response(response)
