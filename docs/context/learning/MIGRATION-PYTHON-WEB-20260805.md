---
date: 2026-08-05
scope: Python 示例目录与公司培训网站
status: completed
---

# Python 与培训网站目录迁移说明

## 1. 迁移目标

- 将散落在项目根目录的 Python 学习示例按主题整理。
- 将一次性 HTML 演讲稿升级为可扩展的 React + Next.js + MDX 多章节课程站。
- 保留旧版培训产物，避免历史版本与当前编辑源混在一起。
- 不改变个人学习总纲、稳定编号和学习状态。

## 2. Python 文件映射

| 原位置 | 新位置 |
| --- | --- |
| `openai_study.py` | `python/examples/model_calls/openai_chat.py` |
| `prompt_study.py` | `python/examples/prompts/prompt_template.py` |
| `chat_prompt_study.py` | `python/examples/prompts/chat_prompt.py` |
| `sequential_chain_study.py` | `python/examples/chains/sequential_chain.py` |
| `runnable_study.py` | `python/examples/chains/runnable.py` |
| `langchain_agent_study.py` | `python/examples/agents/minimal_agent.py` |
| `real-world-agent.py` | `python/examples/agents/real_world_agent.py` |
| `langgraph_study.py` | `python/examples/graphs/weather_graph.py` |
| `pgvector_rag_study.py` | `python/examples/rag/pgvector_rag.py` |
| `rag_memory_study.py` | `python/examples/rag/rag_memory.py` |
| `ollama_study.py` | `python/apps/ollama_rag/app.py` |
| `templates/` | `python/apps/ollama_rag/templates/` |
| `OneFlower/` | `python/data/one_flower/` |
| `flowers_with_descriptions.csv` | `python/outputs/flowers_with_descriptions.csv` |
| `requirements.txt` | `python/requirements.txt` |

同时新增 `python/pyproject.toml`、`python/src/agent_learning/paths.py` 和 `python/README.md`，用于说明运行方式并集中表达路径规则。涉及模型、Ollama 或 PostgreSQL 的示例没有在迁移时直接执行，避免产生外部调用、计费或数据库副作用。

## 3. 培训内容迁移

> 本节记录 2026-08-05 的第二版原型结构。当前第三版网站结构见 `MIGRATION-WEB-V3-20260805.md`。

第二版原型当时的培训内容现已归档到：

`artifacts/training/workbuddy/web-v2-prototype/content/courses/agent-engineering/llm-agent-intro.mdx`

这份内容同时服务于：

- 文章式阅读页面；
- 16:9 全屏演讲页面；
- 后续章节目录和课程导航。

现有第一章以“大模型、AI 应用、上下文、工具、智能体与人的边界”为主线，结合真实工作场景解释软件内部如何从理解走向执行。

## 4. 历史产物归档

旧版 HTML、PPTX、旧 Web 工程及其 Vinext/Cloudflare 构建产物统一归档到：

`artifacts/training/workbuddy/legacy/`

这些文件仅用于回看和对比，不再作为当前培训内容的维护入口。

## 5. 权威边界与学习状态

- `docs/context/learning/` 仍是个人学习计划与状态的唯一权威位置。
- `web/` 是公司培训内容与展示程序，不替代个人学习总纲。
- PEF 项目仍只作为只读生产案例，本次没有修改 PEF。
- 当前学习状态保持不变：`AGL-01-01`、`D1 了解`、`学习中`。
