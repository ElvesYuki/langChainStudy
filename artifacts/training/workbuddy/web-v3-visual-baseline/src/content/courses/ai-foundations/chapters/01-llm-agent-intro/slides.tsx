"use client";

import { ArrowRight, Bot, BrainCircuit, Check, CircleAlert, FileInput, FileOutput, Hand, LockKeyhole, RefreshCw, Wrench } from "lucide-react";

import { PresentationDeck, type DeckSlide, Reveal, SlideCard, SlideFrame, SlideList, SlideTakeaway } from "@/components/presentation";

const readerHref = "/courses/ai-foundations/llm-agent-intro";

function Grid({ columns = 3, children }: { columns?: 2 | 3 | 4 | 5; children: React.ReactNode }) {
  const styles = { 2: "grid-cols-2", 3: "grid-cols-3", 4: "grid-cols-4", 5: "grid-cols-5" };
  return <div className={`grid h-[82%] ${styles[columns]} gap-[1.4%]`}>{children}</div>;
}

function FlowArrow() {
  return <div className="flex items-center justify-center"><ArrowRight className="size-[42%] text-blue-400" /></div>;
}

function Metric({ value, label }: { value: string; label: string }) {
  return <div className="rounded-[1.2rem] border border-white/10 bg-white/6 p-[5%] text-center"><strong className="block text-[clamp(20px,2.5vw,48px)] tracking-tight text-white">{value}</strong><span className="mt-[2%] block text-[clamp(8px,0.7vw,14px)] text-slate-400">{label}</span></div>;
}

function IconLabel({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return <div className="flex items-center gap-[3%] font-medium">{icon}{children}</div>;
}

const slides: DeckSlide[] = [
  {
    id: "cover",
    title: "大模型与智能体初识",
    steps: 2,
    notes: "约 1 分钟。今天不是软件操作课，而是借助真实工作软件建立共同语言：模型负责什么，工具负责什么，智能体又负责什么。",
    content: (
      <SlideFrame eyebrow="30 MIN · 全员认知培训" title="大模型与智能体：从理解到行动" lead="沿一项可以验收的办公任务，看懂智能软件内部如何协作。" dark className="justify-center">
        <div className="mt-[7%] grid max-w-[72%] grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-[3%]">
          <Reveal order={1}><div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/8 p-[8%]"><BrainCircuit className="mb-[8%] size-[18%] text-cyan-300" /><strong className="text-[clamp(12px,1.2vw,23px)]">理解与生成</strong><p className="mt-[3%] text-[clamp(8px,0.72vw,14px)] text-slate-400">模型处理当前输入</p></div></Reveal>
          <ArrowRight className="text-slate-600" />
          <Reveal order={2}><div className="rounded-2xl border border-violet-300/20 bg-violet-300/8 p-[8%]"><Wrench className="mb-[8%] size-[18%] text-violet-300" /><strong className="text-[clamp(12px,1.2vw,23px)]">执行与观察</strong><p className="mt-[3%] text-[clamp(8px,0.72vw,14px)] text-slate-400">工具接触文件和系统</p></div></Reveal>
          <ArrowRight className="text-slate-600" />
          <Reveal order={2}><div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/8 p-[8%]"><Bot className="mb-[8%] size-[18%] text-emerald-300" /><strong className="text-[clamp(12px,1.2vw,23px)]">推进与检查</strong><p className="mt-[3%] text-[clamp(8px,0.72vw,14px)] text-slate-400">智能体维护任务状态</p></div></Reveal>
        </div>
      </SlideFrame>
    ),
  },
  {
    id: "case",
    title: "两份材料，怎样变成一份可以验收的汇报？",
    steps: 3,
    notes: "约 2 分钟。介绍两份输入和四项验收条件。强调数字、归纳和建议三类结果的正确性要求不同。",
    content: (
      <SlideFrame eyebrow="01 · 先看任务" title="两份材料，怎样变成一份可以验收的汇报？" lead="贯穿案例使用演示数据，但处理结构与真实办公任务一致。">
        <Grid columns={3}>
          <Reveal order={1}><SlideCard label="INPUT 01" title="培训报名统计.xlsx" tone="cyan"><SlideList items={["128 条报名记录", "研发 46、运营 31", "行政 27、产品 24"]} /></SlideCard></Reveal>
          <Reveal order={2}><SlideCard label="INPUT 02" title="需求访谈记录.docx" tone="violet"><SlideList items={["6 段跨部门访谈", "资料安全", "适用场景", "结果如何核对"]} /></SlideCard></Reveal>
          <Reveal order={3}><SlideCard label="ACCEPTANCE" title="四项验收条件" tone="green"><SlideList items={["部门合计必须等于 128", "结论回到数据或原文", "未知事实明确标记", "汇报不超过 5 页"]} /></SlideCard></Reveal>
        </Grid>
        <SlideTakeaway>任务同时包含必须算准的数字、必须有依据的归纳，以及需要人判断的建议。</SlideTakeaway>
      </SlideFrame>
    ),
  },
  {
    id: "chat-vs-agent",
    title: "智能体软件不是一个更大的聊天框",
    steps: 2,
    notes: "约 2 分钟。传统对话主要交付一次回答；智能体软件还要保存状态、调用工具，并根据执行结果继续推进。",
    content: (
      <SlideFrame eyebrow="02 · 软件差异" title="智能体软件不是一个更大的聊天框">
        <Grid columns={2}>
          <Reveal order={1}><SlideCard label="TRADITIONAL CHAT" title="传统 AI 对话"><SlideList items={["你提出一个问题", "模型生成一段回答", "你自己复制和操作文件", "下一步仍由你决定"]} /></SlideCard></Reveal>
          <Reveal order={2}><SlideCard label="AGENT SOFTWARE" title="智能体软件" tone="blue"><SlideList items={["你提供目标、材料和边界", "软件安排多步过程", "调用工具读写文件", "观察结果后继续或停止"]} /></SlideCard></Reveal>
        </Grid>
        <SlideTakeaway>差异不只在回答方式，而在软件是否把理解、行动、观察和检查连接起来。</SlideTakeaway>
      </SlideFrame>
    ),
  },
  {
    id: "concept-map",
    title: "五个概念分别出现在哪里？",
    steps: 5,
    notes: "约 2 分钟。先建立位置感：应用是产品和运行环境，上下文是当前信息，模型负责生成，工具负责动作，智能体负责组织过程。",
    content: (
      <SlideFrame eyebrow="03 · 概念定位" title="一次任务里，五个概念分别出现在哪里？" lead="它们不是五种同类产品，而是智能软件中的不同层次。">
        <Grid columns={5}>
          <Reveal order={1}><SlideCard label="AI APPLICATION" title="AI 应用" tone="cyan">组合界面、数据、模型、工具、权限和记录。</SlideCard></Reveal>
          <Reveal order={2}><SlideCard label="CONTEXT" title="上下文" tone="blue">本次真正交给模型的信息，包括工具返回值。</SlideCard></Reveal>
          <Reveal order={3}><SlideCard label="MODEL" title="大模型" tone="violet">根据当前输入生成内容、结构和行动意图。</SlideCard></Reveal>
          <Reveal order={4}><SlideCard label="TOOLS" title="工具" tone="amber">真正读取、计算、写入和执行。</SlideCard></Reveal>
          <Reveal order={5}><SlideCard label="AGENT" title="智能体" tone="green">围绕目标维护状态并持续推进任务。</SlideCard></Reveal>
        </Grid>
      </SlideFrame>
    ),
  },
  {
    id: "application",
    title: "你打开的是一个软件，不是直接面对一个模型",
    steps: 4,
    notes: "约 2 分钟。从外到内解释 AI 应用。相同模型放进不同应用，文件能力、权限和任务记录都可能完全不同。",
    content: (
      <SlideFrame eyebrow="04 · AI 应用" title="你打开的是一个软件，不是直接面对一个模型">
        <Grid columns={4}>
          <Reveal order={1}><SlideCard label="使用层" title="界面与文件" tone="cyan">接收目标和材料，展示过程、结果和待确认项。</SlideCard></Reveal>
          <Reveal order={2}><SlideCard label="能力层" title="模型与上下文" tone="blue">组织本次信息，调用模型生成下一步内容。</SlideCard></Reveal>
          <Reveal order={3}><SlideCard label="行动层" title="工具与权限" tone="amber">提供可执行动作，并限制能够访问的对象。</SlideCard></Reveal>
          <Reveal order={4}><SlideCard label="运行层" title="状态与记录" tone="green">保存步骤、工具结果、错误和任务进度。</SlideCard></Reveal>
        </Grid>
        <SlideTakeaway>WorkBuddy 是 AI 应用实例；大模型只是应用内部的一项能力。</SlideTakeaway>
      </SlideFrame>
    ),
  },
  {
    id: "context",
    title: "文件放进软件，不等于模型已经知道内容",
    steps: 2,
    notes: "约 2 分钟。模型默认看不到磁盘文件。软件先通过工具读取，再把提取结果和规则组织成上下文。",
    content: (
      <SlideFrame eyebrow="05 · 上下文" title="文件放进软件，不等于模型已经知道内容">
        <Grid columns={2}>
          <Reveal order={1}><SlideCard label="尚未读取" title="模型只收到一句要求"><p className="mb-[5%] rounded-lg bg-slate-100 p-[4%] font-mono">“分析培训需求并给出建议。”</p><SlideList items={["没有报名人数", "没有访谈原文", "没有验收条件"]} /></SlideCard></Reveal>
          <Reveal order={2}><SlideCard label="读取之后" title="模型收到可处理的信息" tone="blue"><SlideList items={["四部门人数及合计 128", "6 段访谈原文", "结论必须注明依据", "材料外事实标记待确认"]} /></SlideCard></Reveal>
        </Grid>
        <SlideTakeaway>模型能力决定会不会做；上下文决定这一次根据什么做。</SlideTakeaway>
      </SlideFrame>
    ),
  },
  {
    id: "model",
    title: "大模型接收输入，再逐步生成输出",
    steps: 3,
    notes: "约 3 分钟。区分训练获得的通用能力和当前任务输入。输出可以是文字、结构或工具调用意图，但不代表外部动作已经发生。",
    content: (
      <SlideFrame eyebrow="06 · 大模型" title="最基本的理解：接收输入，再逐步生成输出" lead="训练形成通用能力；当前输入决定这一次具体处理什么。">
        <div className="grid h-[78%] grid-cols-[1fr_.2fr_1.05fr_.2fr_1fr] gap-[1%]">
          <Reveal order={1}><SlideCard label="INPUT" title="当前输入" tone="cyan"><SlideList items={["目标：形成 5 页汇报", "统计：四部门共 128 人", "访谈：安全、场景、准确性", "规则：材料外事实待确认"]} /></SlideCard></Reveal>
          <FlowArrow />
          <Reveal order={2}><SlideCard label="MODEL" title="逐步生成" tone="violet"><div className="flex h-full flex-col items-center justify-center text-center"><BrainCircuit className="mb-[8%] size-[26%]" /><p>不断计算下一段更合适出现的内容或结构</p></div></SlideCard></Reveal>
          <FlowArrow />
          <Reveal order={3}><SlideCard label="OUTPUT" title="多种输出" tone="green"><SlideList items={["结构化结果", "有依据的归纳", "工具调用意图", "待确认问题"]} /></SlideCard></Reveal>
        </div>
        <SlideTakeaway>模型不是从公司数据库取固定答案；生成内容仍然可能遗漏或错误。</SlideTakeaway>
      </SlideFrame>
    ),
  },
  {
    id: "tools",
    title: "模型提出行动，工具才真正接触文件和系统",
    steps: 4,
    notes: "约 2.5 分钟。走完整调用链：模型提出意图，应用检查权限和参数，工具执行，返回结果重新进入上下文。",
    content: (
      <SlideFrame eyebrow="07 · 工具" title="模型提出行动，工具才真正接触文件和系统">
        <Grid columns={4}>
          <Reveal order={1}><SlideCard label="01 · 意图" title="提出调用" tone="cyan">读取报名表，按照“部门”字段计数。</SlideCard></Reveal>
          <Reveal order={2}><SlideCard label="02 · 检查" title="权限与参数" tone="blue">工具是否存在？文件允许访问吗？字段有效吗？</SlideCard></Reveal>
          <Reveal order={3}><SlideCard label="03 · 执行" title="读、写、改、执行" tone="violet"><SlideList items={["读：获取内容", "写：创建产物", "改：调整内容", "执行：计算和检查"]} /></SlideCard></Reveal>
          <Reveal order={4}><SlideCard label="04 · 返回" title="结构化结果" tone="green">研发 46、运营 31、行政 27、产品 24；合计 128。</SlideCard></Reveal>
        </Grid>
        <SlideTakeaway>调用意图 ≠ 已获授权 ≠ 执行成功 ≠ 业务结果正确。</SlideTakeaway>
      </SlideFrame>
    ),
  },
  {
    id: "agent",
    title: "智能体一边推进，一边维护任务状态",
    steps: 5,
    notes: "约 2.5 分钟。重点解释状态：目标、已完成、当前、待完成和待确认。智能体不是另一种大模型。",
    content: (
      <SlideFrame eyebrow="08 · 智能体" title="智能体一边推进，一边维护任务状态" dark>
        <Grid columns={5}>
          <Reveal order={1}><SlideCard label="目标" title="要完成什么" tone="dark">生成有依据的 5 页培训需求汇报。</SlideCard></Reveal>
          <Reveal order={2}><SlideCard label="已完成" title="返回了什么" tone="dark">报名表读取完成，四部门合计 128 人。</SlideCard></Reveal>
          <Reveal order={3}><SlideCard label="当前" title="正在做什么" tone="dark">读取访谈，建立“结论—依据”关系。</SlideCard></Reveal>
          <Reveal order={4}><SlideCard label="待完成" title="后面做什么" tone="dark">形成建议、生成 PPT、检查数字和页数。</SlideCard></Reveal>
          <Reveal order={5}><SlideCard label="待确认" title="何时停下" tone="dark">一段访谈缺少来源部门，等待人工确认。</SlideCard></Reveal>
        </Grid>
        <SlideTakeaway dark>智能体是组织模型、工具、上下文和状态循环的运行机制。</SlideTakeaway>
      </SlideFrame>
    ),
  },
  {
    id: "relationship",
    title: "应用、模型和智能体不在同一层",
    steps: 3,
    notes: "约 2 分钟。AI 应用是用户使用的软件；模型是能力；智能体是应用内部可选的任务推进机制。一个应用不一定包含智能体。",
    content: (
      <SlideFrame eyebrow="09 · 概念关系" title="AI 应用、模型和智能体不在同一层">
        <div className="relative mx-auto flex h-[78%] w-[88%] items-center justify-center rounded-[2rem] border-2 border-dashed border-cyan-300 bg-cyan-50/70 p-[4%]">
          <span className="absolute left-[3%] top-[4%] font-mono text-[clamp(8px,0.75vw,14px)] font-semibold tracking-[0.18em] text-cyan-700">AI APPLICATION · 用户使用的软件产品</span>
          <Reveal order={1} className="h-[68%] w-[29%]"><SlideCard label="MODEL" title="大模型" tone="violet"><BrainCircuit className="mb-[8%] size-[20%]" />提供生成、归纳和判断能力。</SlideCard></Reveal>
          <ArrowRight className="mx-[3%] text-slate-400" />
          <Reveal order={2} className="h-[68%] w-[29%]"><SlideCard label="AGENT" title="智能体" tone="green"><RefreshCw className="mb-[8%] size-[20%]" />组织模型、工具和状态，持续推进任务。</SlideCard></Reveal>
          <ArrowRight className="mx-[3%] text-slate-400" />
          <Reveal order={3} className="h-[68%] w-[29%]"><SlideCard label="RESULT" title="可验收产物" tone="blue"><FileOutput className="mb-[8%] size-[20%]" />文件、结论、记录和待确认问题。</SlideCard></Reveal>
        </div>
        <SlideTakeaway>AI 应用可以只有普通对话，也可以在内部运行一个或多个智能体。</SlideTakeaway>
      </SlideFrame>
    ),
  },
  {
    id: "boundaries",
    title: "生成、执行、推进和负责，是四件不同的事",
    steps: 4,
    notes: "约 2.5 分钟。检查四种角色留下的不同证据。最终责任不能从人转移给软件。",
    content: (
      <SlideFrame eyebrow="10 · 分工与边界" title="生成、执行、推进和负责，是四件不同的事">
        <Grid columns={4}>
          <Reveal order={1}><SlideCard label="MODEL" title="大模型：生成" tone="cyan">归纳、建议、结构、工具调用意图。<p className="mt-[8%] font-semibold">检查：结论有依据吗？</p></SlideCard></Reveal>
          <Reveal order={2}><SlideCard label="TOOLS" title="工具：执行" tone="violet">参数、返回值、错误、生成的文件。<p className="mt-[8%] font-semibold">检查：动作成功了吗？</p></SlideCard></Reveal>
          <Reveal order={3}><SlideCard label="AGENT" title="智能体：推进" tone="blue">步骤、状态、重试和待确认问题。<p className="mt-[8%] font-semibold">检查：流程完整吗？</p></SlideCard></Reveal>
          <Reveal order={4}><SlideCard label="HUMAN" title="人：负责" tone="amber">目标、授权、业务判断和最终验收。<p className="mt-[8%] font-semibold">检查：结果可用吗？</p></SlideCard></Reveal>
        </Grid>
      </SlideFrame>
    ),
  },
  {
    id: "flow",
    title: "把概念重新连成一条完整任务链",
    steps: 4,
    notes: "约 3 分钟。沿输入、工具、模型、智能体和人的顺序复盘。每一步都应该看得到输入、动作、返回结果和验收依据。",
    content: (
      <SlideFrame eyebrow="11 · 软件如何工作" title="把概念重新连成一条完整任务链" dark>
        <div className="grid h-[70%] grid-cols-[1fr_.18fr_1fr_.18fr_1fr_.18fr_1fr] gap-[1%]">
          <Reveal order={1}><SlideCard label="01" title="接收任务" tone="dark"><FileInput className="mb-[8%] size-[18%] text-cyan-300" />目标、两份文件和四项验收条件进入应用。</SlideCard></Reveal>
          <FlowArrow />
          <Reveal order={2}><SlideCard label="02" title="工具读取" tone="dark"><Wrench className="mb-[8%] size-[18%] text-violet-300" />返回部门人数和 6 段访谈原文。</SlideCard></Reveal>
          <FlowArrow />
          <Reveal order={3}><SlideCard label="03" title="模型生成" tone="dark"><BrainCircuit className="mb-[8%] size-[18%] text-blue-300" />形成关注问题、依据、建议和待确认项。</SlideCard></Reveal>
          <FlowArrow />
          <Reveal order={4}><SlideCard label="04" title="检查交付" tone="dark"><Check className="mb-[8%] size-[18%] text-emerald-300" />智能体检查过程，人按照标准验收。</SlideCard></Reveal>
        </div>
        <SlideTakeaway dark>可靠的软件让过程可观察，而不是只展示最终文件。</SlideTakeaway>
      </SlideFrame>
    ),
  },
  {
    id: "failures",
    title: "任何一环都可能停下来",
    steps: 5,
    notes: "约 2 分钟。失败不是抽象风险。讲清楚系统什么时候可以重试，什么时候必须等待授权或人工判断。",
    content: (
      <SlideFrame eyebrow="12 · 失败与接管" title="智能体会推进任务，但任何一环都可能停下来">
        <Grid columns={5}>
          <Reveal order={1}><SlideCard label="材料" title="信息不完整" tone="cyan">3 条部门为空，只能合计 125，必须标记待确认。</SlideCard></Reveal>
          <Reveal order={2}><SlideCard label="生成" title="结论无依据" tone="blue">材料没有财务数据，却声称“财务最关注安全”。</SlideCard></Reveal>
          <Reveal order={3}><SlideCard label="权限" title="访问被拒绝" tone="violet"><LockKeyhole className="mb-[8%] size-[18%]" />返回 permission_denied，不能假装已经读取。</SlideCard></Reveal>
          <Reveal order={4}><SlideCard label="执行" title="工具异常" tone="amber">返回 field_not_found，需要调整参数或人工处理。</SlideCard></Reveal>
          <Reveal order={5}><SlideCard label="验收" title="产物不合格" tone="rose">PPT 已生成，但一条建议没有任何材料依据。</SlideCard></Reveal>
        </Grid>
        <SlideTakeaway>可靠的软件允许观察、停止、补充、重试和人工接管。</SlideTakeaway>
      </SlideFrame>
    ),
  },
  {
    id: "scenarios",
    title: "不同部门材料不同，但任务结构相同",
    steps: 3,
    notes: "约 2 分钟。不同部门只是在替换材料、动作和产物。识别任务时统一找材料、动作、产物、权限与验收。",
    content: (
      <SlideFrame eyebrow="13 · 典型场景" title="不同部门材料不同，但任务结构相同">
        <div className="grid h-[72%] grid-cols-3 gap-[1.4%]">
          <Reveal order={1}><SlideCard label="行政 / 人事" title="制度与名单" tone="cyan">名单汇总、通知草稿、缺失信息确认。</SlideCard></Reveal>
          <Reveal order={1}><SlideCard label="市场 / 运营" title="活动复盘" tone="blue">数据分析、反馈归纳、后续建议。</SlideCard></Reveal>
          <Reveal order={2}><SlideCard label="产品" title="需求整理" tone="violet">需求分类、冲突点、优先级建议。</SlideCard></Reveal>
          <Reveal order={2}><SlideCard label="财务" title="明细核查" tone="amber">异常清单和口径检查，数字必须复核。</SlideCard></Reveal>
          <Reveal order={3}><SlideCard label="研发" title="问题定位" tone="green">代码与日志分析、修改方案、测试清单。</SlideCard></Reveal>
          <Reveal order={3}><SlideCard label="管理者" title="项目摘要">进度、风险和需要决策的问题。</SlideCard></Reveal>
        </div>
        <SlideTakeaway>识别任务时先找：材料、动作、产物、权限和验收标准。</SlideTakeaway>
      </SlideFrame>
    ),
  },
  {
    id: "quiz",
    title: "三个说法，检验是否真正理解边界",
    steps: 3,
    notes: "约 2 分钟。逐项让大家先判断，再出现解释。三项都是错误说法。",
    content: (
      <SlideFrame eyebrow="14 · 快速判断" title="三个说法，检验是否真正理解边界" dark>
        <Grid columns={3}>
          <Reveal order={1}><SlideCard label="错误" title="WorkBuddy 就是一个大模型" tone="dark"><CircleAlert className="mb-[7%] size-[17%] text-rose-300" />它是组合模型、数据、工具、界面、权限和记录的 AI 应用。</SlideCard></Reveal>
          <Reveal order={2}><SlideCard label="错误" title="模型提出调用，就拥有权限" tone="dark"><CircleAlert className="mb-[7%] size-[17%] text-rose-300" />模型只生成调用意图，实际权限由运行环境决定。</SlideCard></Reveal>
          <Reveal order={3}><SlideCard label="错误" title="生成了 PPT，任务就完成" tone="dark"><CircleAlert className="mb-[7%] size-[17%] text-rose-300" />文件存在只代表动作发生，业务结果仍需验收。</SlideCard></Reveal>
        </Grid>
      </SlideFrame>
    ),
  },
  {
    id: "summary",
    title: "看懂智能软件，沿任务检查五件事",
    steps: 5,
    notes: "约 1.5 分钟。最后收束共同语言。不要承诺下一次课程，只保留本次可以带走的检查框架。",
    content: (
      <SlideFrame eyebrow="15 · 本次带走" title="看懂智能软件，沿任务检查五件事" lead="不要只看最终回答，要看整个过程留下了什么证据。" dark>
        <div className="grid h-[58%] grid-cols-5 gap-[1.5%]">
          <Reveal order={1}><Metric value="输入" label="模型真正拿到了什么" /></Reveal>
          <Reveal order={2}><Metric value="生成" label="哪些内容来自模型" /></Reveal>
          <Reveal order={3}><Metric value="执行" label="工具实际做了什么" /></Reveal>
          <Reveal order={4}><Metric value="状态" label="智能体如何继续推进" /></Reveal>
          <Reveal order={5}><Metric value="验收" label="最后由谁承担责任" /></Reveal>
        </div>
        <Reveal order={5} className="mt-[4%]"><div className="mx-auto flex w-[78%] items-center justify-center gap-[3%] rounded-full border border-cyan-300/20 bg-cyan-300/8 px-[3%] py-[1.6%] text-center text-[clamp(11px,1.08vw,21px)] text-cyan-100"><IconLabel icon={<BrainCircuit className="size-[1.2em]" />}>模型生成</IconLabel><ArrowRight /><IconLabel icon={<Wrench className="size-[1.2em]" />}>工具执行</IconLabel><ArrowRight /><IconLabel icon={<Bot className="size-[1.2em]" />}>智能体推进</IconLabel><ArrowRight /><IconLabel icon={<Hand className="size-[1.2em]" />}>人负责</IconLabel></div></Reveal>
      </SlideFrame>
    ),
  },
];

export function IntroDeck() {
  return <PresentationDeck slides={slides} readerHref={readerHref} />;
}

export const introSlideCount = slides.length;
