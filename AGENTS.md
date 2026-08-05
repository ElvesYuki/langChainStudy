# Agent 工程化学习项目协作规则

## 1. 项目定位与写入边界

- 当前项目 `/Users/elves/myproject/study/langChainStudy` 是 Agent 工程化学习资料、学习记录、练习代码和专题文档的唯一写入位置。
- PEF 只作为生产级代码案例和架构参考，绝对路径为 `/Users/elves/myproject/py_template/py_template`。
- 未经用户明确授权，不得修改 PEF 的代码、数据库、配置、测试、文档、Todo 或 Git 状态。
- 分析 PEF 时只允许搜索、打开代码以及执行无副作用的只读检查。
- 不得把学习事项写入 PEF 的 `docs/context/todo-board.md` 或 `docs/context/history/`。
- 不得因为课程涉及 Memory、MCP、A2A、Workflow、Realtime、GraphRAG 等能力，就自动启动 PEF 对应产品功能。

## 2. 开始学习前的读取顺序

先完整阅读当前学习项目中的：

1. `AGENTS.md`
2. `docs/context/learning/README.md`
3. `docs/context/learning/Agent工程化系统学习总纲-课程与PEF项目映射-20260804.md`
4. `docs/context/learning/progress.md`
5. 当前知识点已有的专题文档和迁移说明

然后只读确认 PEF 当前事实：

1. `/Users/elves/myproject/py_template/py_template/AGENTS.md`
2. `/Users/elves/myproject/py_template/py_template/docs/context/project-facts.md`
3. `/Users/elves/myproject/py_template/py_template/docs/context/todo-board.md`
4. `/Users/elves/myproject/py_template/py_template/docs/context/index.md`
5. 与当前知识点直接相关的 PEF 代码、测试、Spec 和历史事实

如果讲义中的路径、类名、方法名或项目事实已经过时，以 PEF 当前工作区为准，明确说明差异；不得为了维护旧讲义而修改 PEF。

## 3. 学习方式

- 按总纲稳定编号逐点学习，不重新编号。
- 每个知识点开始前先确认目标深度：`D1 了解`、`D2 读码`、`D3 编码`、`D4 架构`。
- 未经用户确认，不自动进入下一个知识点。
- 不能只讲框架 API，必须结合原理、协议、数据结构和 PEF 真实代码。
- 先描述完整调用链，再进入具体文件。
- 说明输入、输出、状态变化、异常分支和设计原因。
- 区分教学 Demo、框架默认实现与生产实现。
- PEF 存在不足、技术债或协议缺口时应如实指出，但不得自动修改。
- 时效性强的模型、API 和框架信息只使用官方文档或原始论文，并给出链接。
- 当前项目中的练习必须明确标注为教学实现，不得描述成 PEF 生产实现。

## 4. 单点讲解统一结构

1. 本节目标
2. 为什么需要这个能力
3. 核心概念和术语
4. 底层协议或数据结构
5. 最小实现或伪代码
6. 常见框架如何实现
7. PEF 对应代码入口
8. PEF 真实调用链
9. 教学实现、框架默认实现与生产实现的差异
10. 超时、取消、并发、重复、崩溃和 unknown 等失败场景
11. 权限、Secret、Prompt Injection 和项目隔离等安全问题
12. 常见误区
13. 面试时如何表达
14. 自测问题
15. 可选编码练习

## 5. PEF 代码讲解要求

- PEF 文件引用必须使用绝对路径。
- 沿真实调用链搜索，不根据旧文档猜测。
- 区分模型原始响应、PEF Runtime 协议对象和数据库权威事实。
- 说明哪些状态只存在于内存、LangGraph State 或 Checkpoint，哪些进入 PostgreSQL。
- 说明重试是否可能造成重复调用、重复计费或副作用。
- 涉及 Tool 时区分“模型调用意图”和“平台实际权限”。
- 涉及推理模型时区分 reasoning 内容、最终 content 和 ToolCall。
- 生产缺口只形成学习结论或改进建议，不自动修改 PEF。

## 6. 学习状态规则

状态仅使用：`未开始`、`学习中`、`已复述`、`已练习`、`已掌握`。

- 只有用户明确表示已经理解、完成复述、自测通过或完成练习，才能更新状态。
- 状态变化记录在 `docs/context/learning/`。
- 阅读完成不等于掌握。
- 每条记录至少包含：
  - 知识点
  - 目标深度
  - 我能解释
  - 我能定位的 PEF 代码
  - 我能说明的失败场景
  - 我完成的练习或测试
  - 仍不确定的问题
  - 当前状态

## 7. 当前学习交接状态

- `AGL-01-01` 的 D1 讲解已经进行过。
- 尚未完成自测和复述。
- 不得标记为已复述、已练习或已掌握。
- 未经用户确认，不进入 `AGL-01-02`。

## 8. 项目目录边界

- `python/`：Python 教学示例、应用练习、数据和输出文件。
- `web/`：Next.js + Tailwind CSS + shadcn/ui + MDX 培训网站；文章与演讲共用元数据和课程注册，分别维护适合各自媒介的内容。
- `docs/context/learning/`：个人学习总纲、专题讲解和学习状态的唯一权威位置。
- `artifacts/training/`：旧版 HTML、PPTX 和历史 Web 工程，只用于追溯，不作为当前编辑源。
- 培训网站面向公司知识普及，不替代个人 Agent 工程化学习计划；修改培训内容不得自动更新学习状态。
