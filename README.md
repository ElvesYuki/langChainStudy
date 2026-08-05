# Agent 工程化学习项目

本仓库用于学习和练习大模型、LangChain、LangGraph、Agent、RAG 与相关工程化能力，同时维护面向公司同事的 AI 基础培训网站。

当前项目分为三条内容线：

- [`python/`](python/README.md)：Python 教学示例、实验应用、数据和输出。
- [`web/`](web/README.md)：多章节培训网站，提供文章阅读和全屏演讲两种模式。
- [`docs/context/learning/`](docs/context/learning/README.md)：个人学习总纲、专题讲解和学习进度的唯一权威位置。

生产项目 PEF 只作为只读案例参考，本仓库中的整理和培训内容不会修改 PEF。

## 项目结构

```text
langChainStudy/
├── python/                    # Python 示例、应用、数据与输出
├── web/                       # Next.js 培训网站
├── docs/context/learning/     # 学习总纲、专题与进度
├── artifacts/training/        # 历史 HTML、PPT 和网页原型
├── AGENTS.md                  # 项目协作与学习规则
└── STUDY_GUIDE.md             # Python 示例学习顺序
```

## 培训网站

### 技术方案

当前 V3.3 培训网站采用：

```text
Next.js App Router
+ TypeScript
+ Tailwind CSS v4
+ shadcn/ui
+ MDX
```

设计原则：

- 内容优先：文章使用 MDX 编写，不把正文塞进页面配置数组。
- 阅读与演讲分开：两种模式共用章节元数据和课程注册，但分别按照适合的媒介编排。
- 保持轻量：暂不引入数据库、登录、CMS 或全局状态框架。
- 组件分层：通用 UI、知识表达组件和演讲组件相互独立。

### 本地启动

```bash
cd web
npm install
npm run dev
```

默认访问：

- 首页：`http://localhost:3000/`
- 课程目录：`http://localhost:3000/courses/ai-foundations`
- 第一章阅读：`http://localhost:3000/courses/ai-foundations/llm-agent-intro`
- 第一章演讲：`http://localhost:3000/courses/ai-foundations/llm-agent-intro/present`

### 当前课程

第一章为《大模型与智能体初识》，面向公司多部门同事，计划时长约 30 分钟。

内容围绕一项“根据报名表和访谈记录形成培训需求汇报”的贯穿案例，解释：

- AI 应用、大模型、上下文、工具和智能体分别是什么；
- 大模型如何接收输入并生成不同形式的输出；
- 文件如何通过工具读取后进入上下文；
- 工具调用意图、系统权限和实际执行之间的区别；
- 智能体如何维护任务状态并持续推进；
- 模型、工具、智能体和人的职责与验收边界。

演讲模式目前包含 22 页。内容以第二版为最低基线，并增加上下文边界、模型边界、真实工具调用、智能体循环和概念关系。V3.2 不再使用统一卡片模板，而是根据内容分别使用工作台、时间线、分层剖面、信息漏斗、输入输出舞台、调用控制台、状态看板、泳道和异常分支；V3.3 进一步统一为白色画布、浅蓝灰环境和小面积强调色。演讲功能支持：

- 16:9 全屏显示；
- 内容逐项出现；
- 键盘翻页；
- 演讲者备注；
- 全屏快捷键；
- 点击底部进度条打开页码快速跳转；
- 跳到最前和最后。

### 课程内容结构

每一章由三个文件组成：

```text
web/src/content/courses/<course>/chapters/<chapter>/
├── meta.ts       # 标题、顺序、时长、学习目标和目录
├── article.mdx   # 文章式讲义
└── slides.tsx    # 现场演讲稿
```

当前第一章位于：

```text
web/src/content/courses/ai-foundations/chapters/01-llm-agent-intro/
```

课程和章节统一登记在：

```text
web/src/lib/courses/registry.ts
```

新增章节时：

1. 在对应课程的 `chapters/` 下新建章节目录。
2. 添加 `meta.ts`、`article.mdx` 和 `slides.tsx`。
3. 在 `web/src/lib/courses/registry.ts` 中显式注册。
4. 执行 `npm run check` 验证内容、类型和生产构建。

### Web 验证

```bash
cd web
npm run check
```

该命令依次执行 ESLint、内容结构测试和 Next.js 生产构建。当前验证结果为测试 10/10 通过，依赖审计 0 项漏洞。

更详细的网站维护说明见 [`web/README.md`](web/README.md)。

## Python 示例

安装依赖：

```bash
uv sync --project python --extra dev
```

运行示例：

```bash
uv run --project python python python/examples/model_calls/openai_chat.py
uv run --project python python python/examples/agents/minimal_agent.py
uv run --project python python python/examples/graphs/weather_graph.py
```

涉及模型服务、Ollama 或 PostgreSQL 的示例可能产生网络请求或外部副作用，运行前应先检查环境变量和对应脚本。详细说明见 [`python/README.md`](python/README.md)。

## 学习状态

当前个人学习状态保持不变：

- 知识点：`AGL-01-01 模型生命周期`；
- 目标深度：`D1 了解`；
- 当前状态：`学习中`；
- 尚未完成自测和复述，未进入 `AGL-01-02`。

培训网站内容与个人学习状态相互独立。修改课程文章或演讲稿不会自动更新学习进度。

## 历史培训版本

历史文件只用于回看和回退，不再作为当前编辑入口：

```text
artifacts/training/workbuddy/legacy/           # HTML、PPT 和第一版网页工程
artifacts/training/workbuddy/web-v2-prototype/ # 第二版 Next.js + MDX 原型完整备份
```

工程重构记录见 [`docs/context/learning/MIGRATION-WEB-V3-20260805.md`](docs/context/learning/MIGRATION-WEB-V3-20260805.md)，内容增强记录见 [`docs/context/learning/MIGRATION-WEB-V3.1-CONTENT-20260805.md`](docs/context/learning/MIGRATION-WEB-V3.1-CONTENT-20260805.md)，演讲视觉改版见 [`docs/context/learning/MIGRATION-WEB-V3.2-VISUAL-20260805.md`](docs/context/learning/MIGRATION-WEB-V3.2-VISUAL-20260805.md)，浅色主题调整见 [`docs/context/learning/MIGRATION-WEB-V3.3-LIGHT-THEME-20260805.md`](docs/context/learning/MIGRATION-WEB-V3.3-LIGHT-THEME-20260805.md)。
