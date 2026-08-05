# AI UI System Architecture

这份文档给出一套面向 `后台 / 门户 / 工作台` 的智能体系统设计方案。

目标不是让 AI 直接生成整套前端代码，而是让 AI 在一套受控的前端能力体系里做调度、编排和返回结构化 UI 指令。

适用场景：

- 已有 `Vue / Element` 或类似前端系统
- 已有 `FastAPI` 或类似后端业务系统
- 希望引入自然语言入口
- 希望 AI 可以根据用户意图跳转页面、打开弹框、刷新数据、生成局部看板
- 希望后续能逐步演进到更完整的智能体工作台

不优先解决的场景：

- 从零生成整套前端页面代码
- 完全开放式、无限制的 UI 生成
- 绕过原有业务权限和数据权限的智能体执行

## 1. 设计目标

这套系统的核心目标有 6 个：

1. 让用户可以通过自然语言驱动现有系统能力
2. 保持前端页面、弹框、抽屉、区块等能力可控
3. 保持后端业务逻辑、权限、审计和数据访问不被 AI 绕开
4. 让系统可以先轻量落地，再逐步演进到复杂智能体
5. 让页面调度、局部渲染、聊天式结果展示可以共存
6. 保证每一步都可解释、可回放、可追踪

一句话概括：

`AI 负责理解和编排，前后端负责受控执行。`

## 2. 核心设计原则

### 2.1 AI 不生成整页代码

AI 输出的是结构化指令、UI 配置或工具调用计划，不直接输出 Vue/React 代码作为生产执行结果。

### 2.2 业务能力必须走既有后端服务

AI 不直接写数据库。

所有创建、修改、查询、审批、发送、导出等动作，都要通过现有 `service` / `domain service` / `repository` 体系执行。

### 2.3 UI 能力必须白名单化

AI 只能调度事先注册好的：

- 路由
- 弹框
- 抽屉
- 区块组件
- 工具能力

### 2.4 参数必须结构化

AI 返回的所有参数都必须走结构化 schema，而不是拼接任意 URL、任意 SQL、任意组件名。

### 2.5 系统要支持渐进演进

第一版可以只做：

- 意图识别
- 返回路由命令
- 打开页面 / 打开弹框

后面再逐步增加：

- 工具调用
- 创建后自动确认
- DSL 看板
- LangGraph 多步编排

## 3. 总体架构

整体分成 4 层：

1. `Frontend Capability Layer`
2. `Backend Business Layer`
3. `AI Orchestration Layer`
4. `Observability & Governance Layer`

```text
User
  ->
Chat Input / Natural Language Entry
  ->
AI Gateway / Orchestrator
  ->
Structured Result
  -> Frontend Command Executor
  -> DSL Renderer
  -> Generative UI Renderer
  ->
Existing Pages / Dialogs / Drawers / Blocks
  ->
Business APIs / Domain Services / Database
```

## 4. 三种 UI 返回模式

这套架构支持 3 类结果模式，它们可以并存。

### 4.1 路由调度模式

适合：

- 后台
- 门户
- 工作台
- 列表页
- 详情页
- 创建后确认流程

AI 返回结构化命令，例如：

```json
{
  "commands": [
    {
      "command": "navigate",
      "target": "user_list",
      "params": {
        "city": "shanghai",
        "verified": false
      }
    },
    {
      "command": "openDialog",
      "target": "user_detail_dialog",
      "params": {
        "userId": "10086",
        "mode": "confirm_created"
      }
    }
  ]
}
```

系统含义：

- 页面还是既有页面
- AI 只是调度去哪、开哪个浮层、带哪些参数

### 4.2 DSL / Schema 渲染模式

适合：

- 运营面板
- BI 看板
- 门户首页区块
- 动态工作台
- 组合式结果展示

AI 返回界面描述 JSON，例如：

```json
{
  "type": "dashboard",
  "title": "高价值用户运营看板",
  "blocks": [
    {
      "type": "stat_cards",
      "items": [
        { "label": "总人数", "metric": "user_count" },
        { "label": "近7日活跃", "metric": "active_7d" }
      ]
    },
    {
      "type": "table",
      "title": "重点用户列表",
      "dataSource": "user_segment",
      "filters": { "tag": "vip" },
      "columns": ["name", "level", "last_login_at"]
    }
  ]
}
```

系统含义：

- 页面结构由 schema 决定
- 前端渲染器负责把 schema 渲染成真实 UI

### 4.3 Generative UI 模式

适合：

- 聊天助手
- 工具结果卡片
- 短生命周期交互组件
- 对话中的确认表单

AI 返回聊天中的组件结果，例如：

```json
{
  "component": "UserCreateResultCard",
  "props": {
    "status": "success",
    "user": {
      "userId": "10086",
      "name": "张三"
    },
    "actions": [
      { "type": "open_user_list", "label": "查看用户列表" }
    ]
  }
}
```

系统含义：

- 主容器是聊天流
- 返回的是本轮消息里的可交互组件

## 5. 推荐主策略

对于典型 `后台 / 门户 / 工作台` 项目，建议主策略是：

1. 主方案：`路由调度`
2. 补充方案：`局部 DSL 渲染`
3. 聊天结果：`小范围 Generative UI`

推荐原因：

- 路由调度最适合接已有系统
- DSL 更适合看板和区块
- Generative UI 更适合聊天结果预览

## 6. 前端架构设计

假设前端技术栈为：

- `Vue 3`
- `Vue Router`
- `Pinia`
- `Element Plus`

### 6.1 前端能力拆分

前端能力建议分 4 类注册。

#### 6.1.1 路由级能力

例如：

- `user_list`
- `user_detail`
- `order_list`
- `campaign_dashboard`

建议维护一个路由能力注册表：

```ts
export const routeRegistry = {
  user_list: {
    routeName: 'UserList',
    paramSchema: ['city', 'verified', 'sortBy', 'order', 'highlightUserId'],
  },
  user_detail: {
    routeName: 'UserDetail',
    paramSchema: ['userId'],
  },
}
```

#### 6.1.2 浮层级能力

例如：

- `user_create_dialog`
- `user_detail_dialog`
- `segment_preview_drawer`

```ts
export const overlayRegistry = {
  user_detail_dialog: {
    type: 'dialog',
    component: 'UserDetailDialog',
    paramSchema: ['userId', 'mode'],
  },
}
```

#### 6.1.3 区块级能力

例如：

- `user_table`
- `stat_cards`
- `line_chart`
- `activity_card_list`

这类能力主要供 DSL 渲染器使用。

#### 6.1.4 动作级能力

例如：

- `navigate`
- `openDialog`
- `openDrawer`
- `refresh`
- `highlightRow`
- `showToast`

### 6.2 前端执行器

前端需要一个统一的 `Agent Command Executor`。

职责：

- 校验 AI 返回结果是否合法
- 将 `target` 映射到白名单路由或组件
- 执行导航、弹层、刷新、局部更新
- 管理执行顺序

示意：

```ts
type AgentCommand =
  | { command: 'navigate'; target: string; params?: Record<string, unknown> }
  | { command: 'openDialog'; target: string; params?: Record<string, unknown> }
  | { command: 'openDrawer'; target: string; params?: Record<string, unknown> }
  | { command: 'refresh'; target: string }
  | { command: 'showToast'; message: string; level?: 'success' | 'warning' | 'error' }
```

### 6.3 路由参数化

所有高价值页面都建议支持参数驱动。

例如：

- 用户列表页从 `route.query` 读取筛选条件
- 详情页从 `route.params` 或 `query` 读取主键
- 创建成功后支持 `highlightUserId`

这样 AI 的返回结果就能稳定驱动现有页面。

### 6.4 弹框与路由关系

推荐采用：

- 主页面由路由决定
- 弹框由局部 UI 状态决定

后续如果需要支持“刷新恢复弹框状态”，可以将弹框状态也路由化，例如：

```text
/users/list?dialog=user_detail&userId=10086&mode=confirm_created
```

## 7. 后端架构设计

假设后端技术栈为：

- `FastAPI`
- `Pydantic`
- `SQLAlchemy / SQLModel / ORM`
- 既有业务 service / repository 层

### 7.1 后端接口分层

建议分成两类接口。

#### 7.1.1 业务接口

例如：

- `POST /users`
- `PUT /users/{id}`
- `GET /users`
- `GET /users/{id}`

这些接口是真正的业务能力入口。

#### 7.1.2 AI 编排接口

例如：

- `POST /ai/chat`
- `POST /ai/command`
- `POST /ai/ui-plan`

这些接口负责：

- 接收自然语言
- 调用 LLM 或 agent
- 返回 command / DSL / Generative UI 结果

### 7.2 后端职责边界

后端 AI 层不能绕过业务层。

正确链路应为：

```text
AI Orchestrator
  -> Domain Service
  -> Repository
  -> Database
```

而不是：

```text
AI Orchestrator
  -> Raw SQL / Direct DB Mutation
```

### 7.3 典型创建用户流程

示例：

1. 用户输入“帮我创建一个叫张三的用户，手机号 138...”
2. AI 提取字段
3. 后端校验字段
4. 调用 `user_service.create_user()`
5. 返回：
   - 创建结果
   - 前端 command

例如：

```json
{
  "business_result": {
    "userId": "10086",
    "name": "张三"
  },
  "ui_result": {
    "commands": [
      { "command": "refresh", "target": "user_list" },
      {
        "command": "openDialog",
        "target": "user_detail_dialog",
        "params": { "userId": "10086", "mode": "confirm_created" }
      }
    ]
  }
}
```

## 8. AI 编排层设计

### 8.1 第一阶段：不依赖 LangGraph 的轻量编排

第一版推荐先使用：

- `LLM`
- `Prompt`
- `Structured Output`
- `Tool Calling`（可选）

这时 AI 层只需实现：

- 意图识别
- 参数抽取
- 输出结构化 command

适合场景：

- 跳转页面
- 打开弹框
- 简单筛选列表
- 基础确认流程

### 8.2 第二阶段：引入工具调用

当系统开始需要：

- 查询数据
- 创建实体
- 修改信息
- 生成确认结果

可以引入工具调用层。

推荐把工具映射到后端业务 service，而不是直接映射数据库。

### 8.3 第三阶段：引入 LangGraph

当系统出现以下复杂性时，建议引入 `LangGraph`：

- 多步判断
- 字段缺失时追问
- 多工具协作
- 失败重试
- 不同 UI 返回分支
- 长流程状态编排
- 人工确认节点

#### 8.3.1 LangGraph 的作用

`LLM` 负责理解。

`LangGraph` 负责流程状态、分支和节点编排。

#### 8.3.2 典型图结构

```text
START
-> parse_request
-> classify_intent
-> extract_fields
-> validate_fields
-> if fields_missing -> ask_followup
-> if fields_ready -> call_business_tool
-> build_ui_command
-> END
```

#### 8.3.3 示例状态结构

```python
class AgentState(TypedDict, total=False):
    user_input: str
    intent: str
    fields: dict
    validation_errors: list[str]
    tool_result: dict
    ui_result: dict
```

### 8.4 AI 输出协议

建议统一支持 3 类返回：

1. `commands`
2. `view_schema`
3. `chat_component`

统一响应示例：

```json
{
  "mode": "commands",
  "commands": [
    { "command": "navigate", "target": "user_list", "params": { "city": "shanghai" } }
  ],
  "meta": {
    "intent": "user_filter",
    "reasoning_summary": "用户希望查看上海用户列表"
  }
}
```

## 9. DSL 设计建议

### 9.1 DSL 适合的范围

建议把 DSL 用在：

- 门户首页区块
- 工作台看板
- 运营分析页面
- 组合式结果页

不建议第一版用 DSL 替代所有路由页。

### 9.2 第一版 DSL 组件白名单

第一版可以只支持：

- `table`
- `stat_cards`
- `detail_card`
- `line_chart`
- `bar_chart`
- `filter_panel`
- `alert`

### 9.3 DSL 渲染器

前端需要一个统一渲染器：

```ts
if (block.type === 'table') {
  return <UserTableBlock config={block} />
}
if (block.type === 'stat_cards') {
  return <StatCardsBlock config={block} />
}
```

### 9.4 DSL 数据源

每个 block 都不能直接写任意接口地址。

推荐使用受控 `dataSourceKey`：

```json
{
  "type": "table",
  "dataSourceKey": "user_segment",
  "filters": {
    "tag": "vip"
  }
}
```

前端或后端再将 `dataSourceKey` 映射到合法数据源。

## 10. Generative UI 设计建议

Generative UI 最适合放在聊天面板中做短生命周期结果展示。

例如：

- 查询结果预览卡片
- 创建成功确认卡片
- 推荐项卡片
- 下一步操作按钮

不要让它直接承担复杂后台长流程的主容器角色。

推荐用途：

- 在对话框里先返回预览
- 点击后再触发路由调度或打开弹框

## 11. 权限、安全与治理

这是整套系统里最不能省的一层。

### 11.1 路由白名单

AI 不返回任意 URL。

必须返回受控 `target key`，由前端映射成真实路由。

### 11.2 组件白名单

AI 只能打开注册过的弹框、抽屉、区块。

### 11.3 参数白名单

每个 target 只允许固定参数。

例如 `user_detail_dialog` 只允许：

- `userId`
- `mode`

### 11.4 数据权限

AI 即使识别出用户意图，也必须经过后端数据权限校验。

例如：

- 只能看自己部门的数据
- 某些字段不能返回
- 某些用户不能查看手机号

### 11.5 工具权限

AI 工具也要分级：

- 只读工具
- 创建工具
- 修改工具
- 高风险工具

高风险工具建议加人工确认。

### 11.6 审计日志

至少记录：

- 用户输入
- 模型输出
- 结构化结果
- 执行的 command
- 调用的工具
- 最终业务结果

## 12. 可观测性

建议建设以下能力：

- AI 请求日志
- Prompt 与模型版本记录
- 工具调用 trace
- 前端 command 执行日志
- 页面命令回放
- 错误监控

如果后面引入 LangGraph，建议保留：

- graph trace
- 节点输入输出
- 分支选择结果

## 13. 演进路线

### Phase 1：最小闭环

目标：

- 自然语言 -> 路由跳转 / 弹框打开

实现：

- LLM + structured output
- route / dialog registry
- frontend command executor

### Phase 2：接业务工具

目标：

- AI 可以执行“创建用户、修改用户、查询列表”等业务能力

实现：

- tool calling
- service layer integration
- 创建成功后的 UI 联动

### Phase 3：引入 LangGraph

目标：

- 多步编排
- 追问补字段
- 分支处理
- 失败重试

实现：

- LangGraph state model
- tool nodes
- validation nodes
- UI command builder nodes

### Phase 4：引入 DSL

目标：

- 动态工作台
- 门户首页区块化
- 运营看板

实现：

- schema definition
- renderer
- block registry

### Phase 5：引入 Generative UI

目标：

- 对话面板中的结果卡片
- 聊天内预览与确认

实现：

- chat component protocol
- action bridge to route / dialog

## 14. 推荐最小技术栈

前端：

- `Vue 3`
- `Vue Router`
- `Pinia`
- `Element Plus`

后端：

- `FastAPI`
- `Pydantic`
- `SQLAlchemy / SQLModel`

AI：

- `ChatOpenAI` 或 OpenAI 兼容模型网关
- `Structured Output`
- `Tool Calling`
- `LangGraph`（第二或第三阶段引入）

治理：

- 日志系统
- 审计系统
- 权限系统
- command / schema validator

## 15. 什么时候必须上 LangGraph

以下情况下，建议明确引入 LangGraph：

- 一个请求内有多个阶段
- 中间需要决策分支
- 需要追问用户补字段
- 需要调用多个工具
- 需要失败重试
- 需要根据结果生成不同 UI 命令
- 需要长期保留 agent 状态

以下情况下，不必一开始就上：

- 只是做“自然语言 -> 打开某个页面”
- 只是做“自然语言 -> 返回一个简单筛选列表”
- 只是做“对话里返回卡片并跳转”

## 16. 最终建议

对于一个已有前后端系统，推荐的主路线是：

1. 先把前端能力打散成可调度单元
2. 先做 `route/dialog` 调度，不急着全上 DSL
3. AI 第一版先做 structured output，不急着一开始就上 LangGraph
4. 当业务流程复杂度明显提升时，再引入 LangGraph 做编排
5. 当工作台和看板需求增多时，再补 DSL
6. 当聊天入口的重要性增大时，再补 Generative UI

一句话总结：

`先做受控调度，再做复杂编排，最后做动态拼装。`

## 17. 后续结合真实项目时建议先收集的信息

后面如果要结合你的真实项目分析，建议先准备这些信息：

- 前端技术栈与目录结构
- 路由定义方式
- 弹框/抽屉的现有封装方式
- 后端模块边界
- 用户、订单、活动等核心业务对象
- 权限模型
- 哪些页面最常被自然语言驱动
- 哪些操作风险最高
- 是否已经有聊天入口
- 是否需要门户和后台复用同一套 AI 协议

有了这些信息，就能进一步把这份通用设计收敛成你的项目专属方案。
