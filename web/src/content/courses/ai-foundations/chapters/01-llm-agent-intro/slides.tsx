"use client";

import { PresentationDeck, type DeckSlide, SlideFrame, SlideTakeaway } from "@/components/presentation";
import {
  AgentLoop,
  AgentStateBoard,
  AgentTriangle,
  ApplicationLayers,
  CaseWorkbench,
  ChatAgentTimeline,
  ConceptExplorer,
  ContextFunnel,
  ContextPipeline,
  CoverVisual,
  EvidenceTimeline,
  FailureBranches,
  ModelBoundaryQuadrants,
  ModelStage,
  QuizPanels,
  RelationshipNest,
  ResponsibilitySwimlanes,
  ScenarioMatrix,
  SummaryChain,
  TaskBriefComparison,
  ToolActions,
  ToolCallConsole,
} from "./chapter-visuals";

const readerHref = "/courses/ai-foundations/llm-agent-intro";

const slides: DeckSlide[] = [
  {
    id: "cover",
    title: "大模型与智能体初识",
    steps: 3,
    notes: "约 40 秒。今天不是 WorkBuddy 操作课，而是借助真实软件建立共同语言：模型负责生成，工具负责执行，智能体负责推进，人负责验收。",
    content: <SlideFrame eyebrow="30 MIN · 全员认知培训" title="大模型与智能体：从理解到行动" lead="沿一项可以验收的办公任务，看懂智能软件内部如何协作。" className="justify-center"><CoverVisual /></SlideFrame>,
  },
  {
    id: "case",
    title: "两份材料，怎样变成一份可以验收的汇报？",
    steps: 3,
    notes: "约 1 分 30 秒。先锁定贯穿案例。数字、归纳和建议的正确性要求不同，后面所有概念都回到这项任务。",
    content: <SlideFrame eyebrow="01 · 先看任务" title="两份材料，怎样变成一份可以验收的汇报？" lead="两份真实形态的材料，经软件处理后变成一份有明确验收条件的产物。"><CaseWorkbench /><SlideTakeaway>任务同时包含必须算准的数字、必须有依据的归纳，以及需要人判断的建议。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "chat-vs-agent",
    title: "智能体软件不是一个更大的聊天框",
    steps: 2,
    notes: "约 1 分 20 秒。传统对话主要交付一次回答；智能体软件还需要保存状态、调用工具，并根据执行结果继续推进。",
    content: <SlideFrame eyebrow="02 · 软件差异" title="智能体软件不是一个更大的聊天框" lead="同样从一句需求开始，两类软件后面的任务长度完全不同。"><ChatAgentTimeline /><SlideTakeaway>差异不只在回答方式，而在软件是否把理解、行动、观察和检查连接起来。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "application",
    title: "你打开的是一个软件，不是直接面对一个模型",
    steps: 4,
    notes: "约 1 分 20 秒。相同模型放进不同应用，文件能力、权限范围、工具和任务记录都可能完全不同。",
    content: <SlideFrame eyebrow="03 · AI 应用" title="你打开的是一个软件，不是直接面对一个模型" lead="从用户看到的界面一直向下，才是完整的软件运行结构。"><ApplicationLayers /><SlideTakeaway>WorkBuddy 是 AI 应用实例；大模型只是应用内部的一项能力。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "concept-map",
    title: "五个概念分别出现在哪里？",
    steps: 4,
    notes: "约 1 分 20 秒。五个概念分别从定义、软件位置、案例对应和不能混淆四个角度解释。",
    content: <SlideFrame eyebrow="04 · 概念定位" title="五个概念分别出现在哪里？" lead="它们处在智能软件的不同层次，承担不同职责。"><ConceptExplorer /></SlideFrame>,
  },
  {
    id: "context-mechanism",
    title: "文件放进软件，不等于模型已经知道内容",
    steps: 3,
    notes: "约 1 分 30 秒。模型默认看不到磁盘文件。软件先读取和解析，再选择片段，最终组织成模型输入。",
    content: <SlideFrame eyebrow="05 · 上下文机制" title="文件放进软件，不等于模型已经知道内容" lead="文件、工具结果和模型上下文，是三个不同阶段。"><ContextPipeline /><SlideTakeaway>模型能力决定会不会做；上下文决定这一次根据什么做。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "context-boundary",
    title: "上下文不是资料仓库，也不是越多越好",
    steps: 3,
    notes: "约 1 分 10 秒。上下文有容量、相关性和安全边界。放太多无关材料会稀释重点，也可能暴露不该出现的信息。",
    content: <SlideFrame eyebrow="06 · 上下文边界" title="上下文不是资料仓库，也不是越多越好" lead="资料需要经过相关性、授权和可追溯性筛选，才形成当前上下文。"><ContextFunnel /><SlideTakeaway>好的上下文不是“尽可能多”，而是相关、充分、可追溯且经过授权。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "model-io",
    title: "大模型接收输入，再逐步生成输出",
    steps: 3,
    notes: "约 2 分钟。区分训练形成的通用能力与当前任务输入。模型不是去数据库取固定答案，而是在当前输入条件下逐步生成。",
    content: <SlideFrame eyebrow="07 · 大模型基础" title="最基本的理解：接收输入，再逐步生成输出" lead="训练形成通用能力；当前输入决定这一次具体处理什么。"><ModelStage /><SlideTakeaway>输出形式可以很规整，但仍然是生成结果，可能遗漏、误解或出错。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "model-boundary",
    title: "大模型擅长生成，但不天然拥有事实和行动能力",
    steps: 4,
    notes: "约 1 分 30 秒。把能力和边界成对讲。模型擅长语言与模式处理，但内部事实、精确计算、外部动作和责任需要其他机制。",
    content: <SlideFrame eyebrow="08 · 大模型边界" title="大模型擅长生成，但不天然拥有事实和行动能力"><ModelBoundaryQuadrants /><SlideTakeaway>“模型能生成”不等于“它知道事实、拥有权限、已经执行或能够负责”。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "tool-nature",
    title: "复杂工具可以从读、写、改、执行理解",
    steps: 4,
    notes: "约 1 分 20 秒。这四个动作是理解工具本质的入口，不代表软件只有四个工具；专业工具是它们与业务规则的组合。",
    content: <SlideFrame eyebrow="09 · 工具的本质" title="复杂工具可以从“读、写、改、执行”理解" lead="四类动作围绕外部对象展开，专业工具则在此基础上加入规则与权限。"><ToolActions /><SlideTakeaway>表格分析、PPT 生成等专业工具，是基础动作、业务规则和权限检查的组合。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "tool-call",
    title: "一次真实工具调用经历四个阶段",
    steps: 4,
    notes: "约 2 分钟。展示模型意图、平台检查、工具执行和结果返回。强调每个阶段留下的证据不同。",
    content: <SlideFrame eyebrow="10 · 工具调用" title="一次真实工具调用经历四个阶段" lead="这不是一句“帮我读表格”，而是一条有参数、有检查、有结果的调用记录。"><ToolCallConsole /><SlideTakeaway>调用意图 ≠ 已获授权 ≠ 执行成功 ≠ 业务结果正确。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "agent-definition",
    title: "智能体不是另一个模型，而是一套任务推进机制",
    steps: 3,
    notes: "约 1 分 20 秒。智能体至少包含目标、状态和循环。没有工具也可以有简单智能体，但能做的动作会很有限。",
    content: <SlideFrame eyebrow="11 · 智能体定义" title="智能体不是另一个模型，而是一套任务推进机制" lead="目标、状态和循环形成三角关系，模型和工具在其中提供能力。"><AgentTriangle /><SlideTakeaway>大模型提供判断和生成能力；智能体把能力组织成可以持续推进的过程。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "agent-state",
    title: "智能体一边推进，一边维护当前任务状态",
    steps: 5,
    notes: "约 1 分 30 秒。用当前案例解释五类状态。状态不是聊天记录的另一种叫法，而是决定下一步行动的任务事实。",
    content: <SlideFrame eyebrow="12 · 智能体状态" title="智能体一边推进，一边维护当前任务状态"><AgentStateBoard /><SlideTakeaway>状态让每一步有依据，也让失败后能够继续、检查和接管。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "agent-loop",
    title: "智能体通过“判断—行动—观察—更新”继续推进",
    steps: 4,
    notes: "约 1 分 30 秒。不是模型一次规划完所有步骤；每次工具返回都可能改变下一步。循环必须有停止条件和重试边界。",
    content: <SlideFrame eyebrow="13 · 智能体循环" title="智能体通过“判断—行动—观察—更新”继续推进"><AgentLoop /><SlideTakeaway>可靠循环必须有停止条件、重试上限和人工接管点。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "relationship",
    title: "AI 应用、大模型和智能体不在同一层",
    steps: 3,
    notes: "约 1 分 20 秒。应用是产品和运行环境，模型是能力，智能体是应用内部可选的任务推进机制。一个应用不一定包含智能体。",
    content: <SlideFrame eyebrow="14 · 概念关系" title="AI 应用、大模型和智能体不在同一层"><RelationshipNest /><SlideTakeaway>AI 应用可以只有普通对话，也可以在内部运行一个或多个智能体。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "boundaries",
    title: "生成、执行、推进和负责，是四件不同的事",
    steps: 4,
    notes: "约 1 分 30 秒。通过四种角色留下的证据解释职责。最终责任不能从业务人员转移给软件。",
    content: <SlideFrame eyebrow="15 · 分工与边界" title="生成、执行、推进和负责，是四件不同的事"><ResponsibilitySwimlanes /><SlideTakeaway>模型会生成，工具会执行，智能体会推进，人负责目标、权限和验收。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "complete-flow",
    title: "把概念连成一条有证据的任务链",
    steps: 6,
    notes: "约 2 分钟。每一步都讲输入、动作和留下的证据。不是只看到最终 PPT，而是能够追溯整条任务链。",
    content: <SlideFrame eyebrow="16 · 软件如何工作" title="把概念连成一条有证据的任务链" lead="每个节点都留下不同证据，最终结果才能回溯。"><EvidenceTimeline /><SlideTakeaway>每一步都应该能看到输入、动作、返回结果、当前状态和验收依据。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "failures",
    title: "任何一环都可能停下来",
    steps: 5,
    notes: "约 1 分 30 秒。失败不是抽象风险。讲清系统何时可以重试，何时必须等待授权或人工判断。",
    content: <SlideFrame eyebrow="17 · 失败与接管" title="智能体会推进任务，但任何一环都可能停下来" lead="正常流程旁边始终存在失败分支，可靠软件必须知道怎样停止。"><FailureBranches /><SlideTakeaway>可靠的软件允许观察、停止、补充、重试和人工接管。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "task-definition",
    title: "同一个目标，为什么结果可能完全不同？",
    steps: 2,
    notes: "约 1 分 30 秒。复杂任务不是靠神奇提示词，而是靠完整任务说明和可检查的验收条件。",
    content: <SlideFrame eyebrow="18 · 软件需要什么输入" title="同一个目标，为什么结果可能完全不同？"><TaskBriefComparison /><SlideTakeaway>目标 · 上下文 · 工具权限 · 产物 · 验收，共同决定任务结果。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "scenarios",
    title: "不同部门材料不同，但任务结构相同",
    steps: 3,
    notes: "约 1 分 30 秒。每一行同时出现两个场景，因为它们共享相同讲解层级；财务、制度和决策类结果尤其需要人工复核。",
    content: <SlideFrame eyebrow="19 · 典型场景" title="不同部门材料不同，但任务结构相同" lead="把部门名称放到一边，真正稳定的是“输入材料 → 处理动作 → 可验收产物”。"><ScenarioMatrix /><SlideTakeaway>识别任务时先找：材料、动作、产物、权限和验收标准。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "quiz",
    title: "三个说法，检验是否真正理解边界",
    steps: 3,
    notes: "约 1 分钟。邀请大家先判断，再逐项出现解释。三项都是错误说法。",
    content: <SlideFrame eyebrow="20 · 快速判断" title="三个说法，检验是否真正理解边界"><QuizPanels /></SlideFrame>,
  },
  {
    id: "summary",
    title: "理解智能体，从理解边界开始",
    steps: 6,
    notes: "约 40 秒。用五句话收束，并在最后连接成完整责任链。不要承诺下一次课程。",
    content: <SlideFrame eyebrow="本次带走" title="理解智能体，从理解边界开始" lead="五句话对应五个核心概念，最后重新连成一条责任链。"><SummaryChain /><SlideTakeaway>把工作交给 AI 软件，不等于把责任交出去。</SlideTakeaway></SlideFrame>,
  },
];

export function IntroDeck() {
  return <PresentationDeck slides={slides} readerHref={readerHref} />;
}

export const introSlideCount = slides.length;
