# Python 学习与实验

本目录保存 LangChain、LangGraph、Agent 和 RAG 的教学示例。示例用于学习，不能描述为 PEF 生产实现。

## 目录

- `examples/model_calls/`：基础模型调用。
- `examples/prompts/`：Prompt、消息模板和结构化输出。
- `examples/chains/`：Runnable 与多步骤链式编排。
- `examples/agents/`：最小 Agent 与较完整的 Tool 示例。
- `examples/graphs/`：LangGraph 状态、节点和条件分支。
- `examples/rag/`：Ollama、pgvector 与对话记忆实验。
- `apps/ollama_rag/`：带 Flask 界面的 RAG 教学应用。
- `data/`：教学资料。
- `outputs/`：示例生成物。
- `src/agent_learning/`：多个示例可复用的公共代码。

## 安装

在仓库根目录执行：

```bash
uv sync --project python --extra dev
```

环境变量仍从仓库根目录 `.env` 读取；示例配置参考根目录 `.env.example`。

## 运行示例

```bash
uv run --project python python python/examples/model_calls/openai_chat.py
uv run --project python python python/examples/agents/minimal_agent.py
uv run --project python python python/examples/graphs/weather_graph.py
uv run --project python python python/examples/rag/pgvector_rag.py
uv run --project python python python/apps/ollama_rag/app.py
```

`pgvector_rag.py` 会创建并重建演示表，运行前必须确认数据库配置。仅做目录或语法验证时不要执行它。

