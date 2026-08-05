# Study Guide

这个仓库适合按“从模型调用到完整应用”的顺序学习。

## 学习主线

1. [openai_chat.py](/Users/elves/myproject/study/langChainStudy/python/examples/model_calls/openai_chat.py)
   学最基础的 `ChatOpenAI` 调用、消息格式和 `invoke()`。

2. [prompt_template.py](/Users/elves/myproject/study/langChainStudy/python/examples/prompts/prompt_template.py)
   学 `PromptTemplate`、结构化输出解析、批量生成和 CSV 保存。

3. [sequential_chain.py](/Users/elves/myproject/study/langChainStudy/python/examples/chains/sequential_chain.py)
   学多步骤链式编排、状态字典传递、`RunnableLambda` 的作用。

4. [runnable.py](/Users/elves/myproject/study/langChainStudy/python/examples/chains/runnable.py)
   学 `RunnablePassthrough`、`assign` 和 `|` 管道如何把多个字段在链里继续往后传。

5. [chat_prompt.py](/Users/elves/myproject/study/langChainStudy/python/examples/prompts/chat_prompt.py)
   学 `ChatPromptTemplate`、`MessagesPlaceholder` 和“消息列表 prompt”是怎么组织的。

6. [minimal_agent.py](/Users/elves/myproject/study/langChainStudy/python/examples/agents/minimal_agent.py)
   学最小 Agent 形态：`LLM + Tool + system prompt`。

7. [weather_graph.py](/Users/elves/myproject/study/langChainStudy/python/examples/graphs/weather_graph.py)
   学最小 LangGraph 形态：`StateGraph`、节点、边、条件分支、状态更新。

8. [real_world_agent.py](/Users/elves/myproject/study/langChainStudy/python/examples/agents/real_world_agent.py)
   学更真实的 Agent：`@tool`、`context`、结构化输出、trace 观察。

9. [Ollama RAG App](/Users/elves/myproject/study/langChainStudy/python/apps/ollama_rag/app.py)
   学基础 RAG：文档读取、切块、embedding、向量库、检索问答、Flask 页面。

10. [pgvector_rag.py](/Users/elves/myproject/study/langChainStudy/python/examples/rag/pgvector_rag.py)
   学 `PostgreSQL + pgvector` 版 RAG：向量入库、相似度检索、基于检索结果生成答案。

11. [rag_memory.py](/Users/elves/myproject/study/langChainStudy/python/examples/rag/rag_memory.py)
   学最简单的“RAG + 对话记忆”：同一个追问在单轮和多轮场景下会有什么差别。

## 每节最值得记住的对象

- `openai_chat.py`: `ChatOpenAI`
- `prompt_template.py`: `PromptTemplate`
- `sequential_chain.py`: `RunnableLambda`
- `runnable.py`: `RunnablePassthrough.assign`
- `chat_prompt.py`: `MessagesPlaceholder`
- `minimal_agent.py`: `create_agent`
- `weather_graph.py`: `StateGraph`
- `real_world_agent.py`: `@tool`
- `apps/ollama_rag/app.py`: `RetrievalQA`
- `pgvector_rag.py`: `psycopg`
- `rag_memory.py`: `chat_history`

## 两周学习建议

### 第 1 周

1. 跑通并读懂 `openai_chat.py`
2. 跑通并读懂 `prompt_template.py`
3. 重点理解 `sequential_chain.py` 里的变量传递
4. 观察 `runnable.py` 中间状态是怎么一步步扩展的
5. 观察 `chat_prompt.py` 里消息列表 prompt 的最终结构
6. 观察 `minimal_agent.py` 的工具调用流程
7. 跑一遍 `weather_graph.py`，看状态是怎么沿着节点流转的

### 第 2 周

1. 重点观察 `real_world_agent.py` 的 trace 输出
2. 理解 `context` 和 `structured_response` 的区别
3. 阅读 `apps/ollama_rag/app.py`，重点关注 RAG 主流程
4. 阅读 `pgvector_rag.py`，理解“向量数据库版 RAG”和内存向量库的差别
5. 阅读 `rag_memory.py`，观察“追问”为什么需要历史上下文
6. 记录一份自己的总结：模型调用、链、Graph、Agent、RAG、多轮对话各自解决什么问题

## 复习口诀

模型调用 -> 模板化 -> 链式编排 -> Agent -> Graph 编排 -> 更真实的 Agent -> RAG -> pgvector 持久化检索 -> 多轮对话记忆
