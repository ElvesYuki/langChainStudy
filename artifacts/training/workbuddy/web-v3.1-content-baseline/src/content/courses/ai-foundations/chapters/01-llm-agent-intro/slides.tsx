"use client";

import { useState, type ReactNode } from "react";
import {
  AppWindow,
  ArrowRight,
  Bot,
  BrainCircuit,
  CircleAlert,
  Eye,
  FileInput,
  FileOutput,
  FileSearch,
  KeyRound,
  LockKeyhole,
  MessageSquareText,
  Play,
  RefreshCw,
  ScanSearch,
  ShieldCheck,
  SquareFunction,
  Wrench,
} from "lucide-react";

import {
  PresentationDeck,
  type DeckSlide,
  Reveal,
  SlideCard,
  SlideFrame,
  SlideList,
  SlideTakeaway,
} from "@/components/presentation";
import { cn } from "@/lib/utils";

const readerHref = "/courses/ai-foundations/llm-agent-intro";

function Grid({ columns = 3, children }: { columns?: 2 | 3 | 4 | 5; children: ReactNode }) {
  const styles = { 2: "grid-cols-2", 3: "grid-cols-3", 4: "grid-cols-4", 5: "grid-cols-5" };
  return <div className={`grid h-[82%] ${styles[columns]} gap-[1.4%]`}>{children}</div>;
}

function FlowArrow() {
  return <div className="flex items-center justify-center"><ArrowRight className="size-[42%] text-blue-400" /></div>;
}

function Metric({ value, label }: { value: string; label: string }) {
  return <div className="rounded-[1.2rem] border border-white/10 bg-white/6 p-[5%] text-center"><strong className="block text-[clamp(17px,2vw,40px)] tracking-tight text-white">{value}</strong><span className="mt-[3%] block text-[clamp(8px,0.67vw,13px)] leading-relaxed text-slate-400">{label}</span></div>;
}

function IconLabel({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return <div className="flex items-center gap-[3%] font-medium">{icon}{children}</div>;
}

function EvidenceRow({ label, value, tone = "blue" }: { label: string; value: string; tone?: "blue" | "green" | "amber" }) {
  const tones = { blue: "bg-blue-50 text-blue-950 border-blue-200", green: "bg-emerald-50 text-emerald-950 border-emerald-200", amber: "bg-amber-50 text-amber-950 border-amber-200" };
  return <div className={cn("grid grid-cols-[7.5rem_1fr] items-center gap-[3%] rounded-xl border px-[4%] py-[2.7%] text-[clamp(8px,0.75vw,14px)]", tones[tone])}><strong>{label}</strong><span className="opacity-75">{value}</span></div>;
}

const concepts = [
  { key: "application", label: "AI 应用", english: "AI APPLICATION", tone: "cyan", definition: "用户真正打开和操作的软件产品。", inside: "组合界面、文件、模型、工具、权限和任务记录。", case: "WorkBuddy 接收两份材料，展示过程并保存产物。", boundary: "连接了大模型，不代表所有功能都由模型完成。" },
  { key: "context", label: "上下文", english: "CONTEXT", tone: "blue", definition: "本次请求真正交给模型的信息。", inside: "用户要求、历史消息、工具结果、原文片段和规则。", case: "四部门人数、6 段访谈、5 页限制进入本次输入。", boundary: "文件存在于磁盘，不等于内容已经进入上下文。" },
  { key: "model", label: "大模型", english: "MODEL", tone: "violet", definition: "根据当前输入逐步生成输出的能力。", inside: "生成文字、结构、分类、判断和工具调用意图。", case: "归纳三个关注问题，形成汇报结构和待确认项。", boundary: "输出可能错误；提出行动不等于行动已经执行。" },
  { key: "tools", label: "工具", english: "TOOLS", tone: "amber", definition: "真正接触文件、数据和外部系统的能力。", inside: "读、写、改、执行，以及它们组合成的专业操作。", case: "读取报名表、按部门计数、生成 PPT、检查页数。", boundary: "工具受权限和参数限制，执行成功也可能业务上不正确。" },
  { key: "agent", label: "智能体", english: "AGENT", tone: "green", definition: "围绕目标维护状态并持续推进任务的机制。", inside: "判断下一步、调用工具、观察结果、更新状态、决定继续或停止。", case: "先统计，再读访谈，再生成汇报，最后按标准检查。", boundary: "智能体不承担最终业务责任，缺少信息时应停下来询问。" },
] as const;

function ConceptExplorer() {
  const [selected, setSelected] = useState(0);
  const concept = concepts[selected];
  const selectedTone = { cyan: "border-cyan-300 bg-cyan-50 text-cyan-950", blue: "border-blue-300 bg-blue-50 text-blue-950", violet: "border-violet-300 bg-violet-50 text-violet-950", amber: "border-amber-300 bg-amber-50 text-amber-950", green: "border-emerald-300 bg-emerald-50 text-emerald-950" }[concept.tone];
  return (
    <div className="grid h-[79%] grid-cols-[.36fr_.64fr] gap-[2%]">
      <div className="flex flex-col gap-[2%]">
        {concepts.map((item, index) => <button className={cn("flex flex-1 items-center justify-between rounded-xl border px-[7%] text-left transition", selected === index ? "border-slate-950 bg-slate-950 text-white shadow-lg" : "border-slate-200 bg-white text-slate-500 hover:border-blue-300")} key={item.key} onClick={() => setSelected(index)}><span><small className="block font-mono text-[clamp(6px,.5vw,10px)] tracking-[.14em] opacity-55">{item.english}</small><strong className="mt-[2%] block text-[clamp(11px,1vw,19px)]">{item.label}</strong></span><span className="font-mono text-[clamp(8px,.6vw,12px)] opacity-45">0{index + 1}</span></button>)}
      </div>
      <div className={cn("rounded-[1.8rem] border p-[6%]", selectedTone)}>
        <span className="font-mono text-[clamp(7px,.58vw,11px)] font-semibold tracking-[.18em] opacity-55">{concept.english}</span>
        <h2 className="mt-[2%] text-[clamp(20px,2.2vw,43px)] font-semibold tracking-[-.04em]">{concept.label}</h2>
        <p className="mt-[2%] text-[clamp(11px,1vw,19px)] font-medium">{concept.definition}</p>
        <div className="mt-[6%] grid gap-[3%] text-[clamp(8px,.76vw,15px)] leading-relaxed">
          <EvidenceRow label="软件内部" value={concept.inside} />
          <EvidenceRow label="案例对应" value={concept.case} tone="green" />
          <EvidenceRow label="不能混淆" value={concept.boundary} tone="amber" />
        </div>
      </div>
    </div>
  );
}

const slides: DeckSlide[] = [
  {
    id: "cover",
    title: "大模型与智能体初识",
    steps: 3,
    notes: "约 40 秒。今天不是 WorkBuddy 操作课，而是借助真实软件建立共同语言：模型负责生成，工具负责执行，智能体负责推进，人负责验收。",
    content: <SlideFrame eyebrow="30 MIN · 全员认知培训" title="大模型与智能体：从理解到行动" lead="沿一项可以验收的办公任务，看懂智能软件内部如何协作。" dark className="justify-center"><div className="mt-[7%] grid max-w-[74%] grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-[3%]"><Reveal order={1}><SlideCard label="MODEL" title="理解与生成" tone="dark"><BrainCircuit className="mb-[8%] size-[18%] text-cyan-300" />根据当前输入生成内容、结构和下一步意图。</SlideCard></Reveal><ArrowRight className="text-slate-600" /><Reveal order={2}><SlideCard label="TOOLS" title="执行与观察" tone="dark"><Wrench className="mb-[8%] size-[18%] text-violet-300" />真正读取文件、计算数据和生成产物。</SlideCard></Reveal><ArrowRight className="text-slate-600" /><Reveal order={3}><SlideCard label="AGENT" title="推进与检查" tone="dark"><Bot className="mb-[8%] size-[18%] text-emerald-300" />维护任务状态，根据结果继续、停止或询问。</SlideCard></Reveal></div></SlideFrame>,
  },
  {
    id: "case",
    title: "两份材料，怎样变成一份可以验收的汇报？",
    steps: 3,
    notes: "约 1 分 30 秒。先锁定贯穿案例。数字、归纳和建议的正确性要求不同，后面所有概念都回到这项任务。",
    content: <SlideFrame eyebrow="01 · 先看任务" title="两份材料，怎样变成一份可以验收的汇报？" lead="贯穿案例使用演示数据，但处理结构与真实办公任务一致。"><Grid columns={3}><Reveal order={1}><SlideCard label="INPUT 01" title="培训报名统计.xlsx" tone="cyan"><SlideList items={["128 条报名记录", "研发 46、运营 31", "行政 27、产品 24", "需要检查空值和合计"]} /></SlideCard></Reveal><Reveal order={2}><SlideCard label="INPUT 02" title="需求访谈记录.docx" tone="violet"><SlideList items={["6 段跨部门访谈", "资料怎样被处理", "哪些工作适合 AI", "结果怎样核对"]} /></SlideCard></Reveal><Reveal order={3}><SlideCard label="ACCEPTANCE" title="四项验收条件" tone="green"><SlideList items={["部门人数合计等于 128", "每个结论有数据或原文", "未知事实标记待确认", "汇报不超过 5 页"]} /></SlideCard></Reveal></Grid><SlideTakeaway>任务同时包含必须算准的数字、必须有依据的归纳，以及需要人判断的建议。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "chat-vs-agent",
    title: "智能体软件不是一个更大的聊天框",
    steps: 2,
    notes: "约 1 分 20 秒。传统对话主要交付一次回答；智能体软件还需要保存状态、调用工具，并根据执行结果继续推进。",
    content: <SlideFrame eyebrow="02 · 软件差异" title="智能体软件不是一个更大的聊天框"><Grid columns={2}><Reveal order={1}><SlideCard label="TRADITIONAL CHAT" title="传统 AI 对话"><SlideList items={["你提出一个问题", "模型生成一段回答", "你自己复制、整理和操作文件", "下一步仍由你决定"]} /></SlideCard></Reveal><Reveal order={2}><SlideCard label="AGENT SOFTWARE" title="智能体软件" tone="blue"><SlideList items={["你给出目标、材料和边界", "软件保存当前任务状态", "调用工具读取或生成文件", "观察结果后继续、停止或询问"]} /></SlideCard></Reveal></Grid><SlideTakeaway>差异不只在回答方式，而在软件是否把理解、行动、观察和检查连接起来。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "application",
    title: "你打开的是一个软件，不是直接面对一个模型",
    steps: 4,
    notes: "约 1 分 20 秒。相同模型放进不同应用，文件能力、权限范围、工具和任务记录都可能完全不同。",
    content: <SlideFrame eyebrow="03 · AI 应用" title="你打开的是一个软件，不是直接面对一个模型"><Grid columns={4}><Reveal order={1}><SlideCard label="使用层" title="界面与文件" tone="cyan">接收目标和材料，展示过程、结果与待确认项。</SlideCard></Reveal><Reveal order={2}><SlideCard label="能力层" title="模型与上下文" tone="blue">组织本次信息，调用模型生成内容或下一步。</SlideCard></Reveal><Reveal order={3}><SlideCard label="行动层" title="工具与权限" tone="amber">提供可执行动作，并限制可以访问的对象。</SlideCard></Reveal><Reveal order={4}><SlideCard label="运行层" title="状态与记录" tone="green">保存步骤、工具结果、错误和当前进度。</SlideCard></Reveal></Grid><SlideTakeaway>WorkBuddy 是 AI 应用实例；大模型只是应用内部的一项能力。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "concept-map",
    title: "五个概念分别出现在哪里？",
    steps: 0,
    notes: "约 1 分 20 秒。点击左侧五个标签切换。每个概念都从定义、软件位置、案例对应和不能混淆四个角度解释。",
    content: <SlideFrame eyebrow="04 · 概念定位" title="五个概念分别出现在哪里？" lead="点击标签切换；它们不是五种同类产品，而是智能软件中的不同层次。"><ConceptExplorer /></SlideFrame>,
  },
  {
    id: "context-mechanism",
    title: "文件放进软件，不等于模型已经知道内容",
    steps: 3,
    notes: "约 1 分 30 秒。模型默认看不到磁盘文件。软件先读取和解析，再选择片段，最终组织成模型输入。",
    content: <SlideFrame eyebrow="05 · 上下文机制" title="文件放进软件，不等于模型已经知道内容"><div className="grid h-[76%] grid-cols-[1fr_.17fr_1fr_.17fr_1fr] gap-[1%]"><Reveal order={1}><SlideCard label="FILE" title="文件仍在磁盘" tone="neutral"><FileInput className="mb-[7%] size-[19%] text-slate-400" /><SlideList items={["Excel 有 128 条记录", "Word 有 6 段访谈", "模型此时还没看到内容"]} /></SlideCard></Reveal><FlowArrow /><Reveal order={2}><SlideCard label="TOOLS" title="读取与解析" tone="violet"><FileSearch className="mb-[7%] size-[19%]" /><SlideList items={["读取工作表和字段", "提取段落和来源", "返回结构化结果"]} /></SlideCard></Reveal><FlowArrow /><Reveal order={3}><SlideCard label="CONTEXT" title="组织为本次输入" tone="blue"><MessageSquareText className="mb-[7%] size-[19%]" /><SlideList items={["用户目标", "工具返回结果", "相关原文片段", "规则和验收条件"]} /></SlideCard></Reveal></div><SlideTakeaway>模型能力决定会不会做；上下文决定这一次根据什么做。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "context-boundary",
    title: "上下文不是资料仓库，也不是越多越好",
    steps: 3,
    notes: "约 1 分 10 秒。上下文有容量、相关性和安全边界。放太多无关材料会稀释重点，也可能暴露不该出现的信息。",
    content: <SlideFrame eyebrow="06 · 上下文边界" title="上下文不是资料仓库，也不是越多越好"><Grid columns={3}><Reveal order={1}><SlideCard label="相关性" title="只放当前需要的信息" tone="cyan">分析培训需求，不需要把整个公司云盘都交给模型。</SlideCard></Reveal><Reveal order={2}><SlideCard label="容量与注意力" title="信息过多会稀释重点" tone="blue">长文件需要筛选、分段和检索，不能简单全部塞入。</SlideCard></Reveal><Reveal order={3}><SlideCard label="安全与权限" title="能读取不等于应该提供" tone="amber">个人信息、合同和敏感数据需要最小化暴露和授权。</SlideCard></Reveal></Grid><SlideTakeaway>好的上下文不是“尽可能多”，而是相关、充分、可追溯且经过授权。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "model-io",
    title: "大模型接收输入，再逐步生成输出",
    steps: 3,
    notes: "约 2 分钟。区分训练形成的通用能力与当前任务输入。模型不是去数据库取固定答案，而是在当前输入条件下逐步生成。",
    content: <SlideFrame eyebrow="07 · 大模型基础" title="最基本的理解：接收输入，再逐步生成输出" lead="训练形成通用能力；当前输入决定这一次具体处理什么。"><div className="grid h-[76%] grid-cols-[1fr_.18fr_1.08fr_.18fr_1fr] gap-[1%]"><Reveal order={1}><SlideCard label="INPUT" title="当前输入" tone="cyan"><SlideList items={["目标：形成 5 页汇报", "工具结果：四部门共 128 人", "访谈片段：安全、场景、准确性", "规则：材料外事实待确认"]} /></SlideCard></Reveal><FlowArrow /><Reveal order={2}><SlideCard label="MODEL" title="逐步计算与生成" tone="violet"><BrainCircuit className="mb-[6%] size-[22%]" /><p>把输入转换成内部表示，并不断计算接下来更合适生成什么。</p><p className="mt-[5%] font-semibold">不是一次取出整段固定答案。</p></SlideCard></Reveal><FlowArrow /><Reveal order={3}><SlideCard label="OUTPUT" title="多种输出" tone="green"><SlideList items={["自然语言和摘要", "JSON、表格等结构", "分类与判断结果", "下一步工具调用意图", "需要人确认的问题"]} /></SlideCard></Reveal></div><SlideTakeaway>输出形式可以很规整，但仍然是生成结果，可能遗漏、误解或出错。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "model-boundary",
    title: "大模型擅长生成，但不天然拥有事实和行动能力",
    steps: 4,
    notes: "约 1 分 30 秒。把能力和边界成对讲。模型擅长语言与模式处理，但内部事实、精确计算、外部动作和责任需要其他机制。",
    content: <SlideFrame eyebrow="08 · 大模型边界" title="大模型擅长生成，但不天然拥有事实和行动能力"><Grid columns={4}><Reveal order={1}><SlideCard label="擅长" title="语言与结构" tone="green">改写、归纳、分类、提取、生成大纲和结构化草稿。</SlideCard></Reveal><Reveal order={2}><SlideCard label="需要材料" title="公司内部事实" tone="cyan">没有进入上下文的报名数据、制度和项目状态，模型并不知道。</SlideCard></Reveal><Reveal order={3}><SlideCard label="需要工具" title="精确计算与外部动作" tone="violet">模型可以提出公式或调用，但真正计算、读取和写入由工具完成。</SlideCard></Reveal><Reveal order={4}><SlideCard label="需要人" title="业务判断与责任" tone="amber">建议是否合规、可行、值得执行，仍需要责任人判断。</SlideCard></Reveal></Grid><SlideTakeaway>“模型能生成”不等于“它知道事实、拥有权限、已经执行或能够负责”。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "tool-nature",
    title: "复杂工具可以从读、写、改、执行理解",
    steps: 4,
    notes: "约 1 分 20 秒。这四个动作是理解工具本质的入口，不代表软件只有四个工具；专业工具是它们与业务规则的组合。",
    content: <SlideFrame eyebrow="09 · 工具的本质" title="复杂工具可以从“读、写、改、执行”理解"><Grid columns={4}><Reveal order={1}><SlideCard label="READ" title="读" tone="cyan"><Eye className="mb-[8%] size-[19%]" />读取文件、数据库、网页或系统当前状态。</SlideCard></Reveal><Reveal order={2}><SlideCard label="WRITE" title="写" tone="blue"><FileOutput className="mb-[8%] size-[19%]" />创建文档、表格、邮件草稿、图片或代码。</SlideCard></Reveal><Reveal order={3}><SlideCard label="EDIT" title="改" tone="violet"><Wrench className="mb-[8%] size-[19%]" />修改已有内容，通常需要明确目标和变更范围。</SlideCard></Reveal><Reveal order={4}><SlideCard label="EXECUTE" title="执行" tone="green"><Play className="mb-[8%] size-[19%]" />运行计算、脚本、检查或经过授权的外部操作。</SlideCard></Reveal></Grid><SlideTakeaway>表格分析、PPT 生成等专业工具，是基础动作、业务规则和权限检查的组合。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "tool-call",
    title: "一次真实工具调用经历四个阶段",
    steps: 4,
    notes: "约 2 分钟。展示模型意图、平台检查、工具执行和结果返回。强调每个阶段留下的证据不同。",
    content: <SlideFrame eyebrow="10 · 工具调用" title="一次真实工具调用经历四个阶段"><div className="grid h-[76%] grid-cols-4 gap-[1.4%]"><Reveal order={1}><SlideCard label="01 · MODEL INTENT" title="模型提出调用" tone="cyan"><div className="rounded-lg bg-slate-950 p-[5%] font-mono text-[clamp(7px,.62vw,12px)] leading-relaxed text-cyan-200">analyze_spreadsheet<br />file: 报名统计.xlsx<br />group_by: 部门</div><p className="mt-[5%]">这只是结构化意图。</p></SlideCard></Reveal><Reveal order={2}><SlideCard label="02 · RUNTIME CHECK" title="应用检查" tone="blue"><SlideList items={["工具是否存在", "文件是否在允许范围", "用户是否授权", "字段与参数是否合法"]} /></SlideCard></Reveal><Reveal order={3}><SlideCard label="03 · TOOL EXECUTION" title="工具执行" tone="violet"><SquareFunction className="mb-[7%] size-[18%]" />真正打开文件，定位“部门”列，统计并检查空值。</SlideCard></Reveal><Reveal order={4}><SlideCard label="04 · TOOL RESULT" title="结果返回" tone="green"><div className="rounded-lg bg-emerald-950 p-[5%] font-mono text-[clamp(7px,.62vw,12px)] leading-relaxed text-emerald-200">status: success<br />研发: 46 · 运营: 31<br />行政: 27 · 产品: 24<br />total: 128</div><p className="mt-[5%]">结果重新进入上下文。</p></SlideCard></Reveal></div><SlideTakeaway>调用意图 ≠ 已获授权 ≠ 执行成功 ≠ 业务结果正确。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "agent-definition",
    title: "智能体不是另一个模型，而是一套任务推进机制",
    steps: 3,
    notes: "约 1 分 20 秒。智能体至少包含目标、状态和循环。没有工具也可以有简单智能体，但能做的动作会很有限。",
    content: <SlideFrame eyebrow="11 · 智能体定义" title="智能体不是另一个模型，而是一套任务推进机制"><Grid columns={3}><Reveal order={1}><SlideCard label="GOAL" title="围绕目标" tone="cyan">不是只回答当前一句话，而是持续判断距离交付还差什么。</SlideCard></Reveal><Reveal order={2}><SlideCard label="STATE" title="维护状态" tone="blue">记录已完成、当前步骤、工具结果、待完成和待确认。</SlideCard></Reveal><Reveal order={3}><SlideCard label="LOOP" title="形成循环" tone="green">判断下一步、调用工具、观察结果，再继续、重试、停止或询问。</SlideCard></Reveal></Grid><SlideTakeaway>大模型提供判断和生成能力；智能体把能力组织成可以持续推进的过程。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "agent-state",
    title: "智能体一边推进，一边维护当前任务状态",
    steps: 5,
    notes: "约 1 分 30 秒。用当前案例解释五类状态。状态不是聊天记录的另一种叫法，而是决定下一步行动的任务事实。",
    content: <SlideFrame eyebrow="12 · 智能体状态" title="智能体一边推进，一边维护当前任务状态" dark><Grid columns={5}><Reveal order={1}><SlideCard label="目标" title="要完成什么" tone="dark">生成有依据、可验收的 5 页培训需求汇报。</SlideCard></Reveal><Reveal order={2}><SlideCard label="已完成" title="返回了什么" tone="dark">报名表读取完成；四部门合计 128 人。</SlideCard></Reveal><Reveal order={3}><SlideCard label="当前步骤" title="正在做什么" tone="dark">读取 6 段访谈，建立“结论—依据”关系。</SlideCard></Reveal><Reveal order={4}><SlideCard label="待完成" title="后面做什么" tone="dark">形成建议、生成 PPT、检查数字、依据和页数。</SlideCard></Reveal><Reveal order={5}><SlideCard label="待确认" title="何时停下" tone="dark">一段访谈缺少来源部门，等待人工确认。</SlideCard></Reveal></Grid><SlideTakeaway dark>状态让每一步有依据，也让失败后能够继续、检查和接管。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "agent-loop",
    title: "智能体通过“判断—行动—观察—更新”继续推进",
    steps: 4,
    notes: "约 1 分 30 秒。不是模型一次规划完所有步骤；每次工具返回都可能改变下一步。循环必须有停止条件和重试边界。",
    content: <SlideFrame eyebrow="13 · 智能体循环" title="智能体通过“判断—行动—观察—更新”继续推进"><div className="relative mx-auto flex h-[75%] w-[82%] items-center justify-center"><div className="absolute size-[37%] rounded-full border-[clamp(10px,1.5vw,28px)] border-blue-100" /><div className="relative z-10 flex size-[24%] flex-col items-center justify-center rounded-full bg-slate-950 text-center text-white"><RefreshCw className="mb-[5%] size-[20%] text-cyan-300" /><strong className="text-[clamp(11px,1vw,20px)]">任务状态</strong><span className="mt-[3%] text-[clamp(7px,.62vw,12px)] text-slate-400">每轮都会更新</span></div><Reveal order={1} className="absolute left-[2%] top-[9%] w-[28%]"><SlideCard label="01" title="判断下一步" tone="cyan">根据目标、当前状态和已有结果，决定现在最需要做什么。</SlideCard></Reveal><Reveal order={2} className="absolute right-[2%] top-[9%] w-[28%]"><SlideCard label="02" title="调用工具" tone="violet">读取访谈、统计数据、生成文件或执行检查。</SlideCard></Reveal><Reveal order={3} className="absolute bottom-[2%] right-[2%] w-[28%]"><SlideCard label="03" title="观察结果" tone="blue">成功、失败、权限拒绝、字段缺失，都会影响后续判断。</SlideCard></Reveal><Reveal order={4} className="absolute bottom-[2%] left-[2%] w-[28%]"><SlideCard label="04" title="更新与停止" tone="green">保存结果，继续、重试、请求确认，或满足验收后停止。</SlideCard></Reveal></div><SlideTakeaway>可靠循环必须有停止条件、重试上限和人工接管点。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "relationship",
    title: "AI 应用、大模型和智能体不在同一层",
    steps: 3,
    notes: "约 1 分 20 秒。应用是产品和运行环境，模型是能力，智能体是应用内部可选的任务推进机制。一个应用不一定包含智能体。",
    content: <SlideFrame eyebrow="14 · 概念关系" title="AI 应用、大模型和智能体不在同一层"><div className="relative mx-auto flex h-[78%] w-[88%] items-center justify-center rounded-[2rem] border-2 border-dashed border-cyan-300 bg-cyan-50/70 p-[4%]"><span className="absolute left-[3%] top-[4%] flex items-center gap-2 font-mono text-[clamp(8px,.75vw,14px)] font-semibold tracking-[.16em] text-cyan-700"><AppWindow className="size-[1.2em]" />AI APPLICATION · 用户使用的软件产品与运行环境</span><Reveal order={1} className="h-[68%] w-[29%]"><SlideCard label="MODEL" title="大模型" tone="violet"><BrainCircuit className="mb-[8%] size-[20%]" />提供生成、归纳、判断和调用意图。</SlideCard></Reveal><ArrowRight className="mx-[3%] text-slate-400" /><Reveal order={2} className="h-[68%] w-[29%]"><SlideCard label="AGENT" title="智能体" tone="green"><RefreshCw className="mb-[8%] size-[20%]" />组织模型、工具和状态，持续推进任务。</SlideCard></Reveal><ArrowRight className="mx-[3%] text-slate-400" /><Reveal order={3} className="h-[68%] w-[29%]"><SlideCard label="RESULT" title="可验收产物" tone="blue"><FileOutput className="mb-[8%] size-[20%]" />文件、结论、记录和待确认问题。</SlideCard></Reveal></div><SlideTakeaway>AI 应用可以只有普通对话，也可以在内部运行一个或多个智能体。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "boundaries",
    title: "生成、执行、推进和负责，是四件不同的事",
    steps: 4,
    notes: "约 1 分 30 秒。通过四种角色留下的证据解释职责。最终责任不能从业务人员转移给软件。",
    content: <SlideFrame eyebrow="15 · 分工与边界" title="生成、执行、推进和负责，是四件不同的事"><Grid columns={4}><Reveal order={1}><SlideCard label="MODEL" title="大模型：生成" tone="cyan">留下归纳、建议、结构和调用意图。<p className="mt-[7%] font-semibold">检查：结论能回到数据或原文吗？</p></SlideCard></Reveal><Reveal order={2}><SlideCard label="TOOLS" title="工具：执行" tone="violet">留下参数、返回值、错误和文件。<p className="mt-[7%] font-semibold">检查：执行状态与结果正确吗？</p></SlideCard></Reveal><Reveal order={3}><SlideCard label="AGENT" title="智能体：推进" tone="blue">留下步骤、状态、重试和待确认项。<p className="mt-[7%] font-semibold">检查：是否遗漏步骤，何时停止？</p></SlideCard></Reveal><Reveal order={4}><SlideCard label="HUMAN" title="人：负责" tone="amber">负责目标、材料授权和最终业务判断。<p className="mt-[7%] font-semibold">检查：数字准确、依据充分、建议可用吗？</p></SlideCard></Reveal></Grid><SlideTakeaway>模型会生成，工具会执行，智能体会推进，人负责目标、权限和验收。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "complete-flow",
    title: "把概念连成一条有证据的任务链",
    steps: 6,
    notes: "约 2 分钟。每一步都讲输入、动作和留下的证据。不是只看到最终 PPT，而是能够追溯整条任务链。",
    content: <SlideFrame eyebrow="16 · 软件如何工作" title="把概念连成一条有证据的任务链" dark><div className="grid h-[72%] grid-cols-3 gap-[1.4%]"><Reveal order={1}><SlideCard label="01 · 应用接收" title="目标、材料和边界" tone="dark">两份文件、5 页产物要求、四项验收条件。</SlideCard></Reveal><Reveal order={2}><SlideCard label="02 · 工具读取" title="取得真实材料" tone="dark">表格返回四部门人数；文档返回 6 段访谈和来源。</SlideCard></Reveal><Reveal order={3}><SlideCard label="03 · 上下文组织" title="只提供相关信息" tone="dark">目标、工具结果、原文片段、规则和当前状态。</SlideCard></Reveal><Reveal order={4}><SlideCard label="04 · 模型生成" title="形成内容与意图" tone="dark">三个关注问题、对应依据、建议、页面结构和待确认项。</SlideCard></Reveal><Reveal order={5}><SlideCard label="05 · 智能体检查" title="按状态持续推进" tone="dark">检查数字、依据、页数；异常则重试、停止或询问。</SlideCard></Reveal><Reveal order={6}><SlideCard label="06 · 人工验收" title="决定是否可用" tone="dark">确认材料授权、数字准确、结论有依据、建议适合执行。</SlideCard></Reveal></div><SlideTakeaway dark>每一步都应该能看到输入、动作、返回结果、当前状态和验收依据。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "failures",
    title: "任何一环都可能停下来",
    steps: 5,
    notes: "约 1 分 30 秒。失败不是抽象风险。讲清系统何时可以重试，何时必须等待授权或人工判断。",
    content: <SlideFrame eyebrow="17 · 失败与接管" title="智能体会推进任务，但任何一环都可能停下来"><Grid columns={5}><Reveal order={1}><SlideCard label="材料" title="信息不完整" tone="cyan">128 条中 3 条部门为空，现有部门只能合计 125。</SlideCard></Reveal><Reveal order={2}><SlideCard label="生成" title="结论无依据" tone="blue">材料没有财务数据，却声称“财务最关注安全”。</SlideCard></Reveal><Reveal order={3}><SlideCard label="权限" title="访问被拒绝" tone="violet"><LockKeyhole className="mb-[7%] size-[17%]" />permission_denied：必须等待授权，不能假装已读取。</SlideCard></Reveal><Reveal order={4}><SlideCard label="执行" title="工具异常" tone="amber">field_not_found：需要改参数、转换文件或接管。</SlideCard></Reveal><Reveal order={5}><SlideCard label="验收" title="产物不合格" tone="rose">PPT 有 5 页，但一条建议没有依据，任务仍未完成。</SlideCard></Reveal></Grid><SlideTakeaway>可靠的软件允许观察、停止、补充、重试和人工接管。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "task-definition",
    title: "同一个目标，为什么结果可能完全不同？",
    steps: 2,
    notes: "约 1 分 30 秒。恢复第二版的重要内容。复杂任务不是靠神奇提示词，而是靠完整任务说明和可检查的验收条件。",
    content: <SlideFrame eyebrow="18 · 软件需要什么输入" title="同一个目标，为什么结果可能完全不同？"><Grid columns={2}><Reveal order={1}><SlideCard label="信息不足" title="“帮我做一份培训需求分析”" tone="rose"><SlideList items={["没有真实材料", "没有说明最终产物", "没有权限边界", "没有验收标准"]} /><p className="mt-[7%] font-semibold">模型只能补全一个看起来合理的答案。</p></SlideCard></Reveal><Reveal order={2}><SlideCard label="任务定义清楚" title="目标、材料和验收都可检查" tone="green"><SlideList items={["基于报名表和访谈记录", "统计、归纳并生成 5 页汇报", "材料外事实标记待确认", "数字和结论必须可追溯"]} /><p className="mt-[7%] font-semibold">这不是神奇提示词，而是一份完整任务说明。</p></SlideCard></Reveal></Grid><SlideTakeaway>目标 · 上下文 · 工具权限 · 产物 · 验收，共同决定任务结果。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "scenarios",
    title: "不同部门材料不同，但任务结构相同",
    steps: 3,
    notes: "约 1 分 30 秒。每个场景都说明输入和产出，避免只剩标签。财务、制度和决策类结果尤其需要人工复核。",
    content: <SlideFrame eyebrow="19 · 典型场景" title="不同部门材料不同，但任务结构相同"><div className="grid h-[72%] grid-cols-3 gap-[1.4%]"><Reveal order={1}><SlideCard label="行政 / 人事" title="制度与名单" tone="cyan"><strong>输入：</strong>报名表、制度和模板<br /><strong>产出：</strong>名单汇总、通知草稿、待确认项</SlideCard></Reveal><Reveal order={1}><SlideCard label="市场 / 运营" title="活动复盘" tone="blue"><strong>输入：</strong>活动数据和用户反馈<br /><strong>产出：</strong>问题归纳、复盘报告、后续建议</SlideCard></Reveal><Reveal order={2}><SlideCard label="产品" title="需求整理" tone="violet"><strong>输入：</strong>访谈、需求池、历史版本<br /><strong>产出：</strong>分类、冲突点、优先级建议</SlideCard></Reveal><Reveal order={2}><SlideCard label="财务" title="明细核查" tone="amber"><strong>输入：</strong>费用明细、口径、预算规则<br /><strong>产出：</strong>异常清单；数字必须复核</SlideCard></Reveal><Reveal order={3}><SlideCard label="研发" title="问题定位" tone="green"><strong>输入：</strong>代码、日志、接口说明<br /><strong>产出：</strong>定位建议、修改方案、测试清单</SlideCard></Reveal><Reveal order={3}><SlideCard label="管理者" title="项目摘要"><strong>输入：</strong>周报、纪要和计划<br /><strong>产出：</strong>进度、风险、待决策问题</SlideCard></Reveal></div><SlideTakeaway>识别任务时先找：材料、动作、产物、权限和验收标准。</SlideTakeaway></SlideFrame>,
  },
  {
    id: "quiz",
    title: "三个说法，检验是否真正理解边界",
    steps: 3,
    notes: "约 1 分钟。邀请大家先判断，再逐项出现解释。三项都是错误说法。",
    content: <SlideFrame eyebrow="20 · 快速判断" title="三个说法，检验是否真正理解边界" dark><Grid columns={3}><Reveal order={1}><SlideCard label="A · 错误" title="WorkBuddy 就是一个大模型" tone="dark"><CircleAlert className="mb-[7%] size-[17%] text-rose-300" />它是组合模型、数据、工具、界面、权限和运行记录的 AI 应用。</SlideCard></Reveal><Reveal order={2}><SlideCard label="B · 错误" title="模型提出调用，就拥有权限" tone="dark"><KeyRound className="mb-[7%] size-[17%] text-rose-300" />模型生成的是调用意图，实际权限由应用和运行环境决定。</SlideCard></Reveal><Reveal order={3}><SlideCard label="C · 错误" title="生成了 PPT，任务就完成" tone="dark"><ScanSearch className="mb-[7%] size-[17%] text-rose-300" />文件生成只代表工具动作发生，业务结果仍要按材料和标准验收。</SlideCard></Reveal></Grid></SlideFrame>,
  },
  {
    id: "summary",
    title: "理解智能体，从理解边界开始",
    steps: 6,
    notes: "约 40 秒。用第二版的五句话收束，并保留第三版的过程检查意识。不要承诺下一次课程。",
    content: <SlideFrame eyebrow="本次带走" title="理解智能体，从理解边界开始" lead="五句话，重新对应本次出现的五个核心概念。" dark><div className="grid h-[56%] grid-cols-5 gap-[1.5%]"><Reveal order={1}><Metric value="模型" label="是能力引擎：根据输入逐步生成输出" /></Reveal><Reveal order={2}><Metric value="上下文" label="决定这一次模型真正能看到什么" /></Reveal><Reveal order={3}><Metric value="工具" label="让生成走向读取、计算和实际行动" /></Reveal><Reveal order={4}><Metric value="状态与循环" label="让智能体能够持续推进、停止和接管" /></Reveal><Reveal order={5}><Metric value="人" label="负责目标、材料授权和最终业务验收" /></Reveal></div><Reveal order={6} className="mt-[4%]"><div className="mx-auto flex w-[82%] items-center justify-center gap-[2.5%] rounded-full border border-cyan-300/20 bg-cyan-300/8 px-[3%] py-[1.6%] text-center text-[clamp(10px,1vw,19px)] text-cyan-100"><IconLabel icon={<BrainCircuit className="size-[1.2em]" />}>模型生成</IconLabel><ArrowRight /><IconLabel icon={<Wrench className="size-[1.2em]" />}>工具执行</IconLabel><ArrowRight /><IconLabel icon={<Bot className="size-[1.2em]" />}>智能体推进</IconLabel><ArrowRight /><IconLabel icon={<ShieldCheck className="size-[1.2em]" />}>人验收</IconLabel></div></Reveal><SlideTakeaway dark>把工作交给 AI 软件，不等于把责任交出去。</SlideTakeaway></SlideFrame>,
  },
];

export function IntroDeck() {
  return <PresentationDeck slides={slides} readerHref={readerHref} />;
}

export const introSlideCount = slides.length;
