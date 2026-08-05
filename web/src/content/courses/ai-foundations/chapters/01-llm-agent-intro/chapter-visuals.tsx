"use client";

import { useState, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  ArrowDown,
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  CircleAlert,
  CircleStop,
  ClipboardCheck,
  Database,
  Eye,
  FileInput,
  FileOutput,
  FilePenLine,
  FileSearch,
  FileSpreadsheet,
  FileText,
  Hand,
  KeyRound,
  ListChecks,
  LockKeyhole,
  MessageSquareText,
  Play,
  RefreshCw,
  ScanSearch,
  Settings2,
  ShieldCheck,
  SquareFunction,
  UserRoundCheck,
  Wrench,
} from "lucide-react";

import { Reveal, useRevealStep, useRevealStepSetter } from "@/components/presentation";
import { cn } from "@/lib/utils";

const tone = {
  cyan: "border-cyan-200 bg-cyan-50 text-cyan-950",
  blue: "border-blue-200 bg-blue-50 text-blue-950",
  violet: "border-violet-200 bg-violet-50 text-violet-950",
  amber: "border-amber-200 bg-amber-50 text-amber-950",
  green: "border-emerald-200 bg-emerald-50 text-emerald-950",
  rose: "border-rose-200 bg-rose-50 text-rose-950",
  slate: "border-slate-200 bg-white text-slate-950",
};

function Kicker({ children }: { children: ReactNode }) {
  return <span className="font-mono text-[clamp(10px,.75vw,14px)] font-semibold tracking-[.16em] opacity-55">{children}</span>;
}

function DocumentSheet({ icon: Icon, name, meta, accent }: { icon: LucideIcon; name: string; meta: string; accent: "cyan" | "violet" }) {
  const accents = { cyan: "bg-cyan-400 text-cyan-950", violet: "bg-violet-400 text-violet-950" };
  return <div className="relative h-full rotate-[-1.5deg] rounded-[1.4rem] border border-slate-200 bg-white p-[7%] shadow-[0_18px_50px_rgba(15,23,42,.1)]"><div className={cn("flex size-[18%] items-center justify-center rounded-xl", accents[accent])}><Icon className="size-[52%]" /></div><div className="mt-[8%] space-y-[5%]"><div className="h-2 w-[72%] rounded-full bg-slate-200" /><div className="h-2 w-[88%] rounded-full bg-slate-100" /><div className="h-2 w-[58%] rounded-full bg-slate-100" /></div><strong className="absolute bottom-[16%] left-[7%] right-[7%] text-[clamp(14px,1.2vw,23px)]">{name}</strong><span className="absolute bottom-[7%] left-[7%] text-[clamp(12px,.95vw,18px)] text-slate-400">{meta}</span></div>;
}

export function CoverVisual() {
  const nodes = [
    { icon: BrainCircuit, label: "模型生成", text: "理解当前输入", color: "text-cyan-600" },
    { icon: Wrench, label: "工具执行", text: "接触文件和系统", color: "text-violet-600" },
    { icon: Bot, label: "智能体推进", text: "观察结果并继续", color: "text-emerald-600" },
  ];
  return <div className="relative mx-auto mt-[5%] h-[55%] w-[82%]"><div className="absolute left-[11%] right-[11%] top-1/2 h-px bg-gradient-to-r from-cyan-400/20 via-violet-400/60 to-emerald-400/20" />{nodes.map(({ icon: Icon, label, text, color }, index) => <Reveal className={cn("absolute top-[8%] h-[84%] w-[26%]", index === 0 ? "left-0" : index === 1 ? "left-[37%]" : "right-0")} key={label} order={index + 1}><div className="flex h-full flex-col justify-between rounded-[2rem] border border-slate-200 bg-white/90 p-[10%] shadow-xl shadow-slate-950/5 backdrop-blur"><div className={cn("flex size-[27%] items-center justify-center rounded-full border border-current/20 bg-current/5", color)}><Icon className="size-[42%]" /></div><div><strong className="block text-[clamp(18px,1.65vw,32px)] text-slate-950">{label}</strong><span className="mt-[4%] block text-[clamp(12px,1vw,19px)] text-slate-500">{text}</span></div><span className="font-mono text-[clamp(10px,.85vw,16px)] text-slate-300">0{index + 1}</span></div></Reveal>)}</div>;
}

export function CaseWorkbench() {
  return <div className="grid h-full grid-cols-[1.08fr_.2fr_.92fr] grid-rows-[minmax(0,1fr)] items-stretch gap-[3%] pb-[4%]">
    <div className="grid grid-cols-2 gap-[4%]">
      <Reveal className="min-h-0" order={1}><DocumentSheet icon={FileSpreadsheet} name="培训报名统计.xlsx" meta="128 条 · 部门字段 · 需要统计" accent="cyan" /></Reveal>
      <Reveal className="min-h-0" order={2}><DocumentSheet icon={FileText} name="需求访谈记录.docx" meta="6 段访谈 · 需要找到原文依据" accent="violet" /></Reveal>
    </div>
    <div className="flex flex-col items-center justify-center gap-[7%] text-blue-500"><ArrowRight className="size-[34%]" /><span className="font-mono text-[clamp(9px,.68vw,13px)] tracking-[.15em] [writing-mode:vertical-rl]">PROCESS</span></div>
    <Reveal className="min-h-0" order={3}><div className="relative h-full overflow-hidden rounded-[2rem] border border-emerald-200 bg-emerald-50 p-[6%] text-emerald-950 shadow-xl shadow-emerald-950/5"><FileOutput className="size-[12%] text-emerald-600" /><h2 className="mt-[3%] text-[clamp(18px,1.6vw,31px)] font-semibold">5 页培训需求汇报</h2><div className="mt-[4%] space-y-[2%]">{["人数合计等于 128", "结论有数据或原文", "未知事实明确标记", "建议与问题对应"].map((item) => <div className="flex items-center gap-[4%] rounded-xl border border-emerald-100 bg-white/85 px-[5%] py-[2.5%] text-[clamp(12px,1vw,19px)] text-slate-600" key={item}><CheckCircle2 className="size-[1.2em] text-emerald-600" />{item}</div>)}</div><span className="absolute bottom-[4%] right-[6%] font-mono text-[clamp(10px,.85vw,16px)] text-emerald-700/45">ACCEPTANCE</span></div></Reveal>
  </div>;
}

function TimelineRow({ label, items, active }: { label: string; items: string[]; active?: boolean }) {
  return <div className={cn("grid grid-cols-[9rem_1fr] items-center gap-[4%] rounded-[1.4rem] border px-[4%] py-[3%]", active ? "border-blue-200 bg-blue-50" : "border-slate-200 bg-white")}><strong className={cn("text-[clamp(14px,1.2vw,23px)]", active ? "text-blue-950" : "text-slate-700")}>{label}</strong><div className="relative flex items-center justify-between"><div className={cn("absolute left-0 right-0 top-1/2 h-px", active ? "bg-blue-300" : "bg-slate-200")} />{items.map((item, index) => <div className="relative z-10 flex w-[22%] flex-col items-center text-center" key={item}><span className={cn("flex size-[clamp(20px,2vw,38px)] items-center justify-center rounded-full font-mono text-[clamp(10px,.85vw,16px)]", active ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-500")}>{index + 1}</span><span className="mt-[7%] text-[clamp(11px,.92vw,18px)] leading-tight text-slate-600">{item}</span></div>)}</div></div>;
}

export function ChatAgentTimeline() {
  return <div className="flex h-full flex-col justify-center gap-[7%]"><Reveal order={1}><TimelineRow label="传统 AI 对话" items={["提出问题", "生成回答", "人工复制", "人工决定下一步"]} /></Reveal><Reveal order={2}><TimelineRow active label="智能体软件" items={["给出任务", "保存状态", "调用工具", "根据结果继续"]} /></Reveal></div>;
}

export function ApplicationLayers() {
  const layers = [
    { label: "使用层", title: "界面、文件、过程与结果", icon: AppWindow, className: "w-[84%] bg-cyan-50 border-cyan-200" },
    { label: "能力层", title: "模型与当前上下文", icon: BrainCircuit, className: "w-[72%] bg-blue-50 border-blue-200" },
    { label: "行动层", title: "工具、参数与实际权限", icon: Wrench, className: "w-[60%] bg-violet-50 border-violet-200" },
    { label: "运行层", title: "任务状态、错误与执行记录", icon: Database, className: "w-[48%] bg-slate-100 border-slate-300 text-slate-950" },
  ];
  return <div className="grid h-full grid-rows-[repeat(4,minmax(0,1fr))] gap-[2%] pb-[4%]">{layers.map(({ label, title, icon: Icon, className }, index) => <Reveal className="min-h-0" key={label} order={index + 1}><div className={cn("mx-auto flex h-full items-center justify-between rounded-[1.3rem] border px-[4%] shadow-lg shadow-slate-950/5", className)}><div><Kicker>{label}</Kicker><strong className="mt-[1%] block text-[clamp(15px,1.35vw,26px)]">{title}</strong></div><Icon className="size-[8%] opacity-45" /></div></Reveal>)}</div>;
}

const concepts = [
  { label: "AI 应用", en: "APPLICATION", color: "cyan", icon: AppWindow, definition: "用户实际操作的软件产品。", location: "组合界面、模型、文件、工具、权限和任务记录。", caseText: "WorkBuddy 接收材料、展示过程并保存产物。", boundary: "连接模型不代表所有功能都由模型完成。" },
  { label: "上下文", en: "CONTEXT", color: "blue", icon: MessageSquareText, definition: "本次真正交给模型的信息。", location: "目标、历史消息、工具结果、原文片段和规则。", caseText: "人数、访谈和 5 页限制进入当前输入。", boundary: "文件存在，不等于内容已经进入上下文。" },
  { label: "大模型", en: "MODEL", color: "violet", icon: BrainCircuit, definition: "根据当前输入逐步生成输出。", location: "生成文字、结构、分类、判断和调用意图。", caseText: "归纳问题、形成汇报结构和待确认项。", boundary: "输出可能错误；提出行动不等于已执行。" },
  { label: "工具", en: "TOOLS", color: "amber", icon: Wrench, definition: "真正接触文件和系统的能力。", location: "读、写、改、执行及其专业组合。", caseText: "读取报名表、统计、生成 PPT、检查页数。", boundary: "受权限和参数限制，成功也可能业务上不正确。" },
  { label: "智能体", en: "AGENT", color: "green", icon: Bot, definition: "围绕目标维护状态并持续推进。", location: "判断、行动、观察、更新、继续或停止。", caseText: "先统计，再读访谈，再生成和检查。", boundary: "不承担最终责任，缺信息时应停下来询问。" },
] as const;

export function ConceptExplorer() {
  const revealStep = useRevealStep();
  const setRevealStep = useRevealStepSetter();
  const [manualSelection, setManualSelection] = useState(0);
  const selected = setRevealStep ? Math.min(revealStep, concepts.length - 1) : manualSelection;
  const concept = concepts[selected];
  const ConceptIcon = concept.icon;
  const activeNavTones = {
    cyan: "border-cyan-300 bg-cyan-50 text-cyan-950 shadow-cyan-950/10",
    blue: "border-blue-300 bg-blue-50 text-blue-950 shadow-blue-950/10",
    violet: "border-violet-300 bg-violet-50 text-violet-950 shadow-violet-950/10",
    amber: "border-amber-300 bg-amber-50 text-amber-950 shadow-amber-950/10",
    green: "border-emerald-300 bg-emerald-50 text-emerald-950 shadow-emerald-950/10",
  };
  const iconTones = {
    cyan: "bg-cyan-500 text-white",
    blue: "bg-blue-600 text-white",
    violet: "bg-violet-600 text-white",
    amber: "bg-amber-500 text-white",
    green: "bg-emerald-600 text-white",
  };
  const panelTones = {
    cyan: "border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-white text-cyan-950",
    blue: "border-blue-200 bg-gradient-to-br from-blue-50 via-white to-white text-blue-950",
    violet: "border-violet-200 bg-gradient-to-br from-violet-50 via-white to-white text-violet-950",
    amber: "border-amber-200 bg-gradient-to-br from-amber-50 via-white to-white text-amber-950",
    green: "border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white text-emerald-950",
  };
  const accentTones = { cyan: "bg-cyan-500", blue: "bg-blue-600", violet: "bg-violet-600", amber: "bg-amber-500", green: "bg-emerald-600" };

  return (
    <div className="grid h-full grid-cols-[.36fr_.64fr] gap-[2.5%]">
      <div className="grid min-h-0 grid-rows-5 gap-[2.3%]">
        {concepts.map((item, index) => {
          const ItemIcon = item.icon;
          const active = selected === index;
          return (
            <button
              className={cn(
                "group grid min-h-0 grid-cols-[auto_1fr_auto] items-center gap-[3.5%] overflow-hidden rounded-[1.25rem] border px-[5%] py-[2%] text-left transition-all",
                active ? cn(activeNavTones[item.color], "translate-x-[1.5%] shadow-lg") : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50",
              )}
              data-deck-space-advance
              key={item.label}
              onClick={() => setRevealStep ? setRevealStep(index) : setManualSelection(index)}
            >
              <span className={cn("flex size-[clamp(34px,2.8vw,52px)] items-center justify-center rounded-xl", active ? iconTones[item.color] : "bg-slate-100 text-slate-400")}><ItemIcon className="size-[48%]" /></span>
              <span className="flex min-w-0 flex-col justify-center">
                <small className="block font-mono text-[clamp(10px,.72vw,14px)] leading-none tracking-[.12em] opacity-45">{item.en}</small>
                <strong className="mt-1 block text-[clamp(15px,1.35vw,26px)] leading-none">{item.label}</strong>
                <span className="mt-1 block truncate text-[clamp(11px,.85vw,16px)] leading-none opacity-65">{item.definition}</span>
              </span>
              <span className="font-mono text-[clamp(9px,.72vw,14px)] opacity-35">0{index + 1}</span>
            </button>
          );
        })}
      </div>

      <div className={cn("relative flex min-h-0 flex-col overflow-hidden rounded-[1.8rem] border p-[5%] shadow-[0_22px_60px_rgba(15,23,42,.08)]", panelTones[concept.color])}>
        <span className={cn("absolute inset-x-0 top-0 h-1.5", accentTones[concept.color])} />
        <span className="absolute -right-[2%] -top-[8%] font-mono text-[clamp(90px,10vw,190px)] font-semibold opacity-[.035]">0{selected + 1}</span>

        <div className="relative flex items-start justify-between gap-[6%]">
          <div>
            <span className="font-mono text-[clamp(10px,.72vw,14px)] font-semibold tracking-[.18em] opacity-55">{concept.en}</span>
            <h2 className="mt-[2%] text-[clamp(34px,3.4vw,66px)] font-semibold leading-none tracking-[-.055em]">{concept.label}</h2>
            <p className="mt-[4%] text-[clamp(16px,1.35vw,26px)] font-medium leading-snug">{concept.definition}</p>
          </div>
          <span className={cn("flex size-[clamp(62px,6vw,112px)] shrink-0 items-center justify-center rounded-[1.4rem] shadow-lg shadow-slate-950/10", iconTones[concept.color])}><ConceptIcon className="size-[46%]" /></span>
        </div>

        <dl className="relative mt-auto grid h-[43%] grid-cols-3 gap-[2.2%]">
          <div className="rounded-[1.25rem] border border-slate-200/80 bg-white/80 p-[7%] shadow-sm">
            <dt className="text-[clamp(10px,.78vw,15px)] font-semibold text-slate-900">软件内部</dt>
            <dd className="mt-[8%] text-[clamp(12px,1vw,19px)] leading-[1.55] text-slate-600">{concept.location}</dd>
          </div>
          <div className="rounded-[1.25rem] border border-blue-200/80 bg-blue-50/75 p-[7%] shadow-sm">
            <dt className="text-[clamp(10px,.78vw,15px)] font-semibold text-blue-900">案例对应</dt>
            <dd className="mt-[8%] text-[clamp(12px,1vw,19px)] leading-[1.55] text-blue-800/75">{concept.caseText}</dd>
          </div>
          <div className="rounded-[1.25rem] border border-amber-200/90 bg-amber-50/80 p-[7%] shadow-sm">
            <dt className="text-[clamp(10px,.78vw,15px)] font-semibold text-amber-900">不能混淆</dt>
            <dd className="mt-[8%] text-[clamp(12px,1vw,19px)] leading-[1.55] text-amber-900/75">{concept.boundary}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

function PipelineNode({ icon: Icon, label, title, items, color }: { icon: LucideIcon; label: string; title: string; items: string[]; color: keyof typeof tone }) {
  return <div className={cn("relative flex h-full flex-col rounded-[1.6rem] border p-[7%]", tone[color])}><div className="flex items-center justify-between"><Kicker>{label}</Kicker><Icon className="size-[14%] opacity-45" /></div><strong className="mt-[8%] text-[clamp(17px,1.55vw,30px)]">{title}</strong><div className="mt-auto space-y-[5%]">{items.map((item) => <div className="border-t border-current/10 pt-[4%] text-[clamp(12px,1vw,19px)] opacity-70" key={item}>{item}</div>)}</div></div>;
}

export function ContextPipeline() {
  return <div className="grid h-full grid-cols-[1fr_.16fr_1fr_.16fr_1fr] gap-[1%]"><Reveal order={1}><PipelineNode icon={FileInput} label="FILES" title="文件仍在磁盘" color="slate" items={["Excel：128 条记录", "Word：6 段访谈", "模型还没看到内容"]} /></Reveal><div className="flex items-center justify-center"><ArrowRight className="text-slate-300" /></div><Reveal order={2}><PipelineNode icon={FileSearch} label="TOOLS" title="读取与解析" color="violet" items={["定位工作表和字段", "提取段落及来源", "返回结构化结果"]} /></Reveal><div className="flex items-center justify-center"><ArrowRight className="text-slate-300" /></div><Reveal order={3}><PipelineNode icon={MessageSquareText} label="CONTEXT" title="组织为本次输入" color="blue" items={["用户目标", "工具返回和原文", "规则、状态、验收条件"]} /></Reveal></div>;
}

export function ContextFunnel() {
  const stages = [
    { order: 1, label: "全部可访问资料", note: "报名表、访谈、制度、历史文件……", width: "w-[92%]", color: "bg-slate-200 text-slate-600" },
    { order: 2, label: "与任务相关", note: "只留下培训需求所需材料", width: "w-[72%]", color: "bg-blue-100 text-blue-700" },
    { order: 3, label: "经过授权和筛选", note: "去除无关与不应暴露的信息", width: "w-[52%]", color: "bg-violet-100 text-violet-700" },
  ];
  return <div className="grid h-full grid-cols-[.68fr_.32fr] gap-[6%]"><div className="flex flex-col items-center justify-center gap-[4%]">{stages.map((stage) => <Reveal className={stage.width} key={stage.label} order={stage.order}><div className={cn("rounded-[1.3rem] px-[6%] py-[4%] text-center", stage.color)}><strong className="block text-[clamp(15px,1.3vw,25px)]">{stage.label}</strong><span className="text-[clamp(12px,.95vw,18px)] opacity-65">{stage.note}</span></div></Reveal>)}<ArrowDown className="size-[7%] text-slate-300" /><div className="w-[38%] rounded-full border border-blue-200 bg-blue-100 px-[5%] py-[3%] text-center text-[clamp(13px,1.05vw,20px)] font-semibold text-blue-950">本次上下文</div></div><div className="flex flex-col justify-center gap-[5%] border-l border-slate-200 pl-[10%]">{[[Eye,"相关","只放当前任务需要的信息"],[Settings2,"充分","足以支持判断和生成"],[ShieldCheck,"安全","经过授权并最小化暴露"],[ScanSearch,"可追溯","能回到工具结果或原文"]].map(([Icon,label,text]) => { const C=Icon as LucideIcon; return <div className="flex gap-[5%]" key={String(label)}><C className="size-[11%] text-blue-600" /><div><strong className="block text-[clamp(13px,1.05vw,20px)]">{String(label)}</strong><span className="text-[clamp(12px,.95vw,18px)] text-slate-500">{String(text)}</span></div></div>; })}</div></div>;
}

export function ModelStage() {
  return <div className="grid h-full grid-cols-[1fr_.9fr_1fr] items-center gap-[4%]"><Reveal order={1}><div className="h-[83%] rounded-[1.8rem] border border-cyan-200 bg-cyan-50 p-[8%]"><Kicker>INPUT · 当前输入</Kicker><div className="mt-[8%] space-y-[5%]">{["目标：形成 5 页汇报","工具结果：四部门共 128 人","访谈：安全、场景、准确性","规则：材料外事实待确认"].map((item) => <div className="rounded-lg bg-white/70 px-[5%] py-[3%] text-[clamp(12px,1vw,19px)] text-cyan-950" key={item}>{item}</div>)}</div></div></Reveal><Reveal order={2}><div className="relative mx-auto flex aspect-square w-[92%] flex-col items-center justify-center rounded-full border border-violet-200 bg-violet-100 text-center text-violet-950 shadow-[0_0_0_1.2rem_rgba(139,92,246,.06),0_20px_55px_rgba(76,29,149,.12)]"><BrainCircuit className="size-[22%] text-violet-600" /><strong className="mt-[5%] text-[clamp(15px,1.45vw,28px)]">逐步计算与生成</strong><span className="mt-[3%] max-w-[68%] text-[clamp(12px,.95vw,18px)] leading-relaxed text-violet-700/70">不断计算接下来更合适生成什么，而不是取出整段固定答案</span></div></Reveal><Reveal order={3}><div className="h-[83%] rounded-[1.8rem] border border-emerald-200 bg-emerald-50 p-[8%]"><Kicker>OUTPUT · 多种输出</Kicker><div className="mt-[8%] grid grid-cols-2 gap-[5%]">{["自然语言","JSON / 表格","分类判断","工具调用","待确认项"].map((item) => <div className="flex aspect-[1.7] items-center justify-center rounded-xl border border-emerald-200 bg-white text-center text-[clamp(12px,1vw,19px)] font-medium text-emerald-950" key={item}>{item}</div>)}</div></div></Reveal></div>;
}

export function ModelBoundaryQuadrants() {
  const items = [
    { order: 1, label: "模型擅长", title: "语言与结构", text: "改写、归纳、分类、提取、大纲和结构化草稿", color: "border-emerald-300 bg-emerald-50", icon: BrainCircuit },
    { order: 2, label: "需要上下文", title: "公司内部事实", text: "没有进入输入的报名数据、制度和状态，模型并不知道", color: "border-cyan-300 bg-cyan-50", icon: MessageSquareText },
    { order: 3, label: "需要工具", title: "精确计算与动作", text: "真正统计、读取、写入和执行由工具完成", color: "border-violet-300 bg-violet-50", icon: Wrench },
    { order: 4, label: "需要人", title: "业务判断与责任", text: "建议是否合规、可行和值得执行由责任人判断", color: "border-amber-300 bg-amber-50", icon: UserRoundCheck },
  ];
  return <div className="relative grid h-full grid-cols-2 grid-rows-2 gap-[2%]"><div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-slate-200" /><div className="pointer-events-none absolute left-0 top-1/2 h-px w-full bg-slate-200" />{items.map(({ order, label, title, text, color, icon: Icon }) => <Reveal key={label} order={order}><div className={cn("flex h-full items-center gap-[6%] rounded-[1.6rem] border-l-[6px] p-[6%]", color)}><Icon className="size-[14%] opacity-55" /><div><Kicker>{label}</Kicker><strong className="mt-[2%] block text-[clamp(15px,1.45vw,28px)]">{title}</strong><p className="mt-[2%] text-[clamp(11px,.92vw,18px)] leading-relaxed text-slate-600">{text}</p></div></div></Reveal>)}</div>;
}

export function ToolActions() {
  const actions = [
    { order: 1, icon: Eye, title: "读", text: "文件、数据库、网页和系统状态", pos: "left-[4%] top-[7%]", color: "bg-cyan-500" },
    { order: 2, icon: FileOutput, title: "写", text: "文档、表格、草稿、图片和代码", pos: "right-[4%] top-[7%]", color: "bg-blue-600" },
    { order: 3, icon: FilePenLine, title: "改", text: "调整已有内容和明确范围的变更", pos: "bottom-[7%] left-[4%]", color: "bg-violet-600" },
    { order: 4, icon: Play, title: "执行", text: "计算、脚本、检查和授权后的操作", pos: "bottom-[7%] right-[4%]", color: "bg-emerald-600" },
  ];
  return <div className="relative mx-auto h-full w-[88%]"><div className="absolute left-1/2 top-1/2 flex size-[30%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-[10px] border-slate-100 bg-white shadow-xl"><FileText className="size-[25%] text-slate-400" /><strong className="mt-[4%] text-[clamp(15px,1.3vw,25px)]">外部对象</strong><span className="text-[clamp(10px,.78vw,15px)] text-slate-400">文件 · 数据 · 系统</span></div>{actions.map(({ order, icon: Icon, title, text, pos, color }) => <Reveal className={cn("absolute h-[34%] w-[32%]", pos)} key={title} order={order}><div className="flex h-full items-center gap-[7%] rounded-[1.5rem] border border-slate-200 bg-white p-[7%] shadow-lg shadow-slate-950/5"><span className={cn("flex size-[31%] items-center justify-center rounded-full text-white", color)}><Icon className="size-[42%]" /></span><div><strong className="text-[clamp(16px,1.7vw,33px)]">{title}</strong><p className="mt-[3%] text-[clamp(11px,.92vw,18px)] leading-relaxed text-slate-500">{text}</p></div></div></Reveal>)}</div>;
}

export function ToolCallConsole() {
  const stages = [
    { order: 1, label: "MODEL INTENT", icon: BrainCircuit, title: "模型提出调用", content: <pre>analyze_spreadsheet{`\n`}file: 报名统计.xlsx{`\n`}group_by: 部门</pre>, color: "text-cyan-600" },
    { order: 2, label: "RUNTIME CHECK", icon: KeyRound, title: "应用检查", content: <ul><li>工具存在</li><li>文件允许访问</li><li>参数与字段有效</li></ul>, color: "text-blue-600" },
    { order: 3, label: "EXECUTION", icon: SquareFunction, title: "工具执行", content: <p>打开文件，定位“部门”列，统计并检查空值。</p>, color: "text-violet-600" },
    { order: 4, label: "TOOL RESULT", icon: CheckCircle2, title: "结果返回", content: <pre>status: success{`\n`}46 · 31 · 27 · 24{`\n`}total: 128</pre>, color: "text-emerald-600" },
  ];
  return <div className="h-full overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white p-[3%] font-mono text-slate-950 shadow-xl shadow-slate-950/5"><div className="mb-[3%] flex items-center gap-2 border-b border-slate-200 bg-slate-50/80 pb-[2%]"><span className="size-2 rounded-full bg-rose-400" /><span className="size-2 rounded-full bg-amber-400" /><span className="size-2 rounded-full bg-emerald-400" /><span className="ml-3 text-[clamp(9px,.68vw,13px)] text-slate-400">task-run / tool-call-01</span></div><div className="grid h-[82%] grid-cols-4 gap-[1.5%]">{stages.map(({ order, label, icon: Icon, title, content, color }) => <Reveal key={label} order={order}><div className="h-full border-l border-slate-200 px-[8%]"><div className={cn("flex items-center gap-[5%]", color)}><Icon className="size-[13%]" /><Kicker>{label}</Kicker></div><strong className="mt-[10%] block font-sans text-[clamp(15px,1.3vw,25px)]">{title}</strong><div className="mt-[8%] text-[clamp(12px,.95vw,18px)] leading-[1.8] text-slate-500 [&_pre]:rounded-lg [&_pre]:bg-slate-950 [&_pre]:p-[7%] [&_pre]:text-cyan-100 [&_pre]:whitespace-pre-wrap [&_ul]:space-y-2">{content}</div></div></Reveal>)}</div></div>;
}

export function AgentTriangle() {
  const nodes = [
    { order: 1, label: "GOAL", title: "围绕目标", text: "持续判断距离交付还差什么", pos: "left-1/2 top-[2%] -translate-x-1/2", color: "bg-cyan-500" },
    { order: 2, label: "STATE", title: "维护状态", text: "记录完成、当前、结果和待确认", pos: "bottom-[4%] left-[8%]", color: "bg-blue-600" },
    { order: 3, label: "LOOP", title: "形成循环", text: "判断、行动、观察、继续或停止", pos: "bottom-[4%] right-[8%]", color: "bg-emerald-600" },
  ];
  return <div className="relative mx-auto h-full w-[76%]"><div className="absolute left-1/2 top-[22%] h-[46%] w-[54%] -translate-x-1/2 [clip-path:polygon(50%_0,100%_100%,0_100%)] bg-slate-100" /><div className="absolute left-1/2 top-1/2 flex size-[21%] -translate-x-1/2 -translate-y-[30%] items-center justify-center rounded-full border border-emerald-200 bg-emerald-100 text-emerald-800"><Bot className="size-[35%]" /></div>{nodes.map(({ order, label, title, text, pos, color }) => <Reveal className={cn("absolute w-[31%]", pos)} key={label} order={order}><div className="rounded-[1.5rem] border border-slate-200 bg-white p-[8%] shadow-xl"><span className={cn("mb-[6%] block h-1.5 w-[28%] rounded-full", color)} /><Kicker>{label}</Kicker><strong className="mt-[2%] block text-[clamp(15px,1.45vw,28px)]">{title}</strong><p className="mt-[3%] text-[clamp(11px,.92vw,18px)] text-slate-500">{text}</p></div></Reveal>)}</div>;
}

export function AgentStateBoard() {
  const columns = [
    { order: 1, label: "目标", title: "要完成什么", text: "有依据、可验收的 5 页培训需求汇报", color: "border-cyan-300" },
    { order: 2, label: "已完成", title: "工具返回什么", text: "报名表读取完成，四部门合计 128", color: "border-emerald-300" },
    { order: 3, label: "当前", title: "正在做什么", text: "读取 6 段访谈，建立结论—依据关系", color: "border-blue-300" },
    { order: 4, label: "待完成", title: "后面做什么", text: "形成建议、生成 PPT、检查数字与页数", color: "border-violet-300" },
    { order: 5, label: "待确认", title: "何时停下", text: "一段访谈缺少来源部门，等待人工确认", color: "border-amber-300" },
  ];
  return <div className="h-full rounded-[1.6rem] border border-slate-200 bg-slate-50 p-[3%]"><div className="mb-[3%] flex items-center justify-between"><Kicker>TASK STATE · 培训需求汇报</Kicker><span className="rounded-full border border-amber-200 bg-amber-100 px-[2%] py-[.7%] text-[clamp(10px,.85vw,16px)] text-amber-800">等待 1 项确认</span></div><div className="grid h-[82%] grid-cols-5 gap-[1.2%]">{columns.map(({ order, label, title, text, color }) => <Reveal key={label} order={order}><div className={cn("h-full rounded-[1.1rem] border border-slate-200 border-t-[5px] bg-white p-[8%] text-slate-950 shadow-sm", color)}><Kicker>{label}</Kicker><strong className="mt-[12%] block text-[clamp(14px,1.2vw,23px)]">{title}</strong><p className="mt-[8%] text-[clamp(12px,.95vw,18px)] leading-relaxed text-slate-500">{text}</p><div className="mt-[14%] h-px bg-slate-100" /></div></Reveal>)}</div></div>;
}

export function AgentLoop() {
  const nodes = [
    { order: 1, title: "判断下一步", text: "根据目标、状态和已有结果", pos: "left-[2%] top-[6%]", color: "border-cyan-300" },
    { order: 2, title: "调用工具", text: "读取、统计、生成或检查", pos: "right-[2%] top-[6%]", color: "border-violet-300" },
    { order: 3, title: "观察结果", text: "成功、失败和权限都会影响后续", pos: "bottom-[3%] right-[2%]", color: "border-blue-300" },
    { order: 4, title: "更新与停止", text: "继续、重试、询问或完成", pos: "bottom-[3%] left-[2%]", color: "border-emerald-300" },
  ];
  return <div className="relative mx-auto h-full w-[82%]"><div className="absolute left-1/2 top-1/2 size-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[clamp(10px,1.2vw,22px)] border-blue-100" /><div className="absolute left-1/2 top-1/2 flex size-[23%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-blue-200 bg-blue-100 text-center text-blue-950"><RefreshCw className="size-[25%] text-blue-600" /><strong className="mt-[4%] text-[clamp(15px,1.3vw,25px)]">任务状态</strong><span className="text-[clamp(11px,.85vw,16px)] text-blue-700/65">每一轮都会更新</span></div>{nodes.map(({ order, title, text, pos, color }) => <Reveal className={cn("absolute w-[31%]", pos)} key={title} order={order}><div className={cn("rounded-[1.3rem] border-l-[5px] bg-white p-[7%] shadow-lg", color)}><span className="font-mono text-[clamp(10px,.78vw,15px)] text-slate-400">0{order}</span><strong className="ml-[5%] text-[clamp(15px,1.3vw,25px)]">{title}</strong><p className="mt-[4%] text-[clamp(12px,.95vw,18px)] text-slate-500">{text}</p></div></Reveal>)}</div>;
}

export function RelationshipNest() {
  return <div className="relative mx-auto h-full w-[88%] rounded-[2rem] border-2 border-dashed border-cyan-300 bg-cyan-50 p-[5%]"><div className="absolute left-[3%] top-[4%] flex items-center gap-2 text-cyan-700"><AppWindow className="size-[1.2em]" /><Kicker>AI APPLICATION · 产品与运行环境</Kicker></div><div className="flex h-full items-center justify-center gap-[4%] pt-[4%]"><Reveal className="h-[62%] w-[27%]" order={1}><div className="flex h-full flex-col justify-between rounded-full border border-violet-200 bg-violet-100 p-[12%] text-center text-violet-950"><BrainCircuit className="mx-auto size-[28%]" /><div><strong className="text-[clamp(15px,1.45vw,28px)]">大模型</strong><p className="mt-[4%] text-[clamp(12px,.95vw,18px)] opacity-65">生成、归纳、判断与调用意图</p></div></div></Reveal><ArrowRight className="text-slate-300" /><Reveal className="h-[74%] w-[31%]" order={2}><div className="flex h-full flex-col justify-between rounded-[2rem] border border-emerald-200 bg-emerald-100 p-[10%] text-center text-emerald-950"><Bot className="mx-auto size-[26%]" /><div><strong className="text-[clamp(15px,1.45vw,28px)]">智能体</strong><p className="mt-[4%] text-[clamp(12px,.95vw,18px)] opacity-65">组织模型、工具和状态持续推进</p></div><div className="flex justify-center gap-[5%]"><Wrench className="size-[13%]" /><Database className="size-[13%]" /><RefreshCw className="size-[13%]" /></div></div></Reveal><ArrowRight className="text-slate-300" /><Reveal className="h-[62%] w-[27%]" order={3}><div className="flex h-full flex-col justify-between rounded-[1rem] border border-blue-200 bg-blue-100 p-[12%] text-center text-blue-950"><FileOutput className="mx-auto size-[28%]" /><div><strong className="text-[clamp(15px,1.45vw,28px)]">可验收产物</strong><p className="mt-[4%] text-[clamp(12px,.95vw,18px)] opacity-65">文件、结论、记录和待确认问题</p></div></div></Reveal></div></div>;
}

export function ResponsibilitySwimlanes() {
  const lanes = [
    { order: 1, label: "MODEL", role: "大模型", verb: "生成", output: "归纳、建议、结构、调用意图", check: "结论有依据吗？", color: "bg-cyan-500" },
    { order: 2, label: "TOOLS", role: "工具", verb: "执行", output: "参数、返回值、错误和文件", check: "执行真的成功吗？", color: "bg-violet-500" },
    { order: 3, label: "AGENT", role: "智能体", verb: "推进", output: "步骤、状态、重试和待确认", check: "流程完整且会停止吗？", color: "bg-blue-600" },
    { order: 4, label: "HUMAN", role: "人", verb: "负责", output: "目标、授权、业务判断和验收", check: "结果可用且可负责吗？", color: "bg-amber-500" },
  ];
  return <div className="h-full overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white"><div className="grid grid-cols-[.58fr_.9fr_1.25fr_1.1fr] border-b border-slate-200 bg-slate-100 px-[3%] py-[2%] text-[clamp(12px,.95vw,18px)] font-medium text-slate-500"><span>角色</span><span>核心动作</span><span>留下的证据</span><span>主要检查</span></div><div className="grid h-[83%] grid-rows-4">{lanes.map(({ order, label, role, verb, output, check, color }) => <Reveal key={role} order={order}><div className="grid h-full grid-cols-[.58fr_.9fr_1.25fr_1.1fr] items-center border-b border-slate-100 px-[3%]"><div><Kicker>{label}</Kicker><strong className="mt-[1%] block text-[clamp(14px,1.2vw,23px)]">{role}</strong></div><div className="flex items-center gap-[6%]"><span className={cn("size-2.5 rounded-full", color)} /><strong className="text-[clamp(12px,1.15vw,22px)]">{verb}</strong></div><span className="text-[clamp(11px,.92vw,18px)] text-slate-500">{output}</span><span className="rounded-full bg-slate-100 px-[6%] py-[4%] text-[clamp(12px,.95vw,18px)] text-slate-600">{check}</span></div></Reveal>)}</div></div>;
}

export function EvidenceTimeline() {
  const events = [
    { order: 1, title: "应用接收", evidence: "目标 · 两份文件 · 四项验收", icon: AppWindow },
    { order: 2, title: "工具读取", evidence: "人数结果 · 6 段访谈 · 来源", icon: FileSearch },
    { order: 3, title: "上下文组织", evidence: "相关片段 · 规则 · 当前状态", icon: MessageSquareText },
    { order: 4, title: "模型生成", evidence: "问题 · 依据 · 建议 · 待确认", icon: BrainCircuit },
    { order: 5, title: "智能体检查", evidence: "步骤 · 错误 · 重试 · 停止", icon: Bot },
    { order: 6, title: "人工验收", evidence: "授权 · 准确 · 可用 · 负责", icon: UserRoundCheck },
  ];
  return <div className="relative flex h-full items-center"><div className="absolute left-[4%] right-[4%] top-[44%] h-px bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400" /><div className="grid w-full grid-cols-6 gap-[1.2%]">{events.map(({ order, title, evidence, icon: Icon }) => <Reveal key={title} order={order}><div className="relative flex h-[70%] min-h-44 flex-col items-center text-center"><span className="flex size-[clamp(36px,4vw,72px)] items-center justify-center rounded-full border-4 border-blue-100 bg-white text-blue-700 shadow-md"><Icon className="size-[38%]" /></span><strong className="mt-[12%] text-[clamp(13px,1.05vw,20px)] text-slate-950">{title}</strong><span className="mt-[5%] text-[clamp(11px,.88vw,17px)] leading-relaxed text-slate-500">{evidence}</span><span className="mt-auto font-mono text-[clamp(9px,.68vw,13px)] text-slate-300">EVIDENCE 0{order}</span></div></Reveal>)}</div></div>;
}

export function FailureBranches() {
  const failures = [
    { order: 1, title: "材料不完整", code: "125 / 128", action: "标记待确认", color: "border-cyan-300", icon: FileInput },
    { order: 2, title: "结论无依据", code: "unsupported", action: "删除或说明未覆盖", color: "border-blue-300", icon: BrainCircuit },
    { order: 3, title: "权限被拒绝", code: "permission_denied", action: "等待授权", color: "border-violet-300", icon: LockKeyhole },
    { order: 4, title: "工具执行异常", code: "field_not_found", action: "改参数或接管", color: "border-amber-300", icon: Wrench },
    { order: 5, title: "验收未通过", code: "evidence_missing", action: "补充依据后再交付", color: "border-rose-300", icon: ClipboardCheck },
  ];
  return <div className="grid h-full grid-cols-[.26fr_.74fr] gap-[5%]"><div className="flex flex-col items-center justify-center"><div className="flex aspect-square w-[62%] flex-col items-center justify-center rounded-full border border-emerald-200 bg-emerald-100 text-center text-emerald-950"><Play className="size-[24%] text-emerald-600" /><strong className="mt-[5%] text-[clamp(14px,1.18vw,23px)]">正常推进</strong></div><ArrowDown className="my-[8%] text-slate-300" /><div className="flex w-[75%] items-center justify-center rounded-full bg-amber-100 px-[6%] py-[4%] text-center text-[clamp(12px,1vw,19px)] font-semibold text-amber-900"><CircleStop className="mr-2 size-[1.2em]" />停止或接管</div></div><div className="relative flex flex-col justify-between py-[2%]"><div className="absolute bottom-[8%] left-0 top-[8%] w-px bg-slate-200" />{failures.map(({ order, title, code, action, color, icon: Icon }) => <Reveal key={title} order={order}><div className={cn("relative ml-[6%] grid grid-cols-[2.2rem_1fr_1.1fr] items-center gap-[4%] rounded-xl border-l-[5px] bg-white px-[4%] py-[2.4%] shadow-sm", color)}><span className="absolute -left-[7.1%] size-2.5 rounded-full bg-slate-400" /><Icon className="size-[55%] text-slate-500" /><div><strong className="block text-[clamp(13px,1.05vw,20px)]">{title}</strong><code className="text-[clamp(10px,.75vw,14px)] text-slate-400">{code}</code></div><span className="text-[clamp(12px,.95vw,18px)] text-slate-500">→ {action}</span></div></Reveal>)}</div></div>;
}

function BriefSheet({ good }: { good?: boolean }) {
  const rows = good ? [["目标","形成培训需求汇报"],["材料","报名表 + 访谈记录"],["权限","只读取指定文件"],["产物","不超过 5 页 PPT"],["验收","数字和结论可追溯"]] : [["目标","帮我分析一下"],["材料","未提供"],["权限","未说明"],["产物","未说明"],["验收","未说明"]];
  return <div className={cn("relative h-full rounded-[1.8rem] border bg-white p-[5.5%] shadow-xl", good ? "border-emerald-200" : "border-rose-200")}><div className="flex items-center justify-between"><Kicker>{good ? "STRUCTURED TASK BRIEF" : "VAGUE REQUEST"}</Kicker>{good ? <ListChecks className="size-[11%] text-emerald-500" /> : <CircleAlert className="size-[11%] text-rose-400" />}</div><h2 className="mt-[4%] text-[clamp(17px,1.55vw,30px)] font-semibold">{good ? "目标、材料和验收都可检查" : "“帮我做一份培训需求分析”"}</h2><dl className="mt-[5%] space-y-[2%]">{rows.map(([label,value]) => <div className="grid grid-cols-[4.5rem_1fr] border-t border-slate-100 pt-[2.5%] text-[clamp(12px,1vw,19px)]" key={label}><dt className="font-semibold text-slate-800">{label}</dt><dd className={good ? "text-slate-500" : "text-rose-400"}>{value}</dd></div>)}</dl><p className={cn("absolute bottom-[5%] left-[5.5%] right-[5.5%] rounded-lg px-[4%] py-[2%] text-center text-[clamp(12px,.95vw,18px)] font-medium", good ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-800")}>{good ? "一份可以执行和验收的任务说明" : "模型只能补全一个看起来合理的答案"}</p></div>;
}

export function TaskBriefComparison() {
  return <div className="grid h-full grid-cols-[1fr_.16fr_1fr] gap-[2%]"><Reveal order={1}><BriefSheet /></Reveal><div className="flex flex-col items-center justify-center text-slate-300"><ArrowRight className="size-[40%]" /><span className="mt-[15%] font-mono text-[clamp(9px,.68vw,13px)] [writing-mode:vertical-rl]">DEFINE THE TASK</span></div><Reveal order={2}><BriefSheet good /></Reveal></div>;
}

export function ScenarioMatrix() {
  const rows = [
    ["行政 / 人事","报名表、制度、模板","名单汇总、通知、待确认"],
    ["市场 / 运营","活动数据、用户反馈","复盘、问题归纳、建议"],
    ["产品","访谈、需求池、历史版本","分类、冲突点、优先级"],
    ["财务","费用明细、口径、预算规则","异常清单；数字必须复核"],
    ["研发","代码、日志、接口说明","定位、修改方案、测试清单"],
    ["管理者","周报、纪要和计划","进度、风险、待决策问题"],
  ];
  return <div className="h-full overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white"><div className="grid grid-cols-[.55fr_1fr_1fr] border-b border-slate-200 bg-slate-100 px-[4%] py-[1.5%] text-[clamp(12px,.95vw,18px)] font-medium text-slate-500"><span>部门</span><span>输入材料</span><span>可能产物</span></div><div className="grid h-[88%] grid-rows-6">{rows.map(([department,input,output], index) => <Reveal className="min-h-0" key={department} order={Math.floor(index / 2) + 1}><div className="grid h-full grid-cols-[.55fr_1fr_1fr] items-center border-b border-slate-100 px-[4%]"><strong className="text-[clamp(13px,1.08vw,21px)] text-slate-900">{department}</strong><span className="text-[clamp(12px,.95vw,18px)] leading-snug text-slate-500">{input}</span><span className="text-[clamp(12px,.95vw,18px)] leading-snug text-blue-700">{output}</span></div></Reveal>)}</div></div>;
}

export function QuizPanels() {
  const items = [
    { order: 1, label: "A", title: "WorkBuddy 就是一个大模型", reason: "它是组合模型、数据、工具、界面、权限和记录的 AI 应用。", icon: AppWindow },
    { order: 2, label: "B", title: "模型提出调用，就拥有权限", reason: "模型生成的是调用意图，实际权限由运行环境决定。", icon: KeyRound },
    { order: 3, label: "C", title: "生成了 PPT，任务就完成", reason: "文件存在只代表动作发生，业务结果仍然需要验收。", icon: ScanSearch },
  ];
  return <div className="grid h-full grid-cols-3 gap-[2%]">{items.map(({ order, label, title, reason, icon: Icon }) => <Reveal key={label} order={order}><div className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-[9%] text-slate-950 shadow-xl shadow-slate-950/5"><span className="absolute right-[5%] top-[1%] font-mono text-[clamp(70px,8vw,150px)] font-semibold text-rose-500/[.05]">{label}</span><Icon className="size-[17%] text-rose-500" /><span className="mt-[10%] font-mono text-[clamp(10px,.78vw,15px)] text-rose-500">错误判断 {label}</span><strong className="mt-[4%] text-[clamp(17px,1.55vw,30px)] leading-tight">{title}</strong><div className="mt-auto border-t border-slate-100 pt-[7%]"><span className="text-[clamp(10px,.78vw,15px)] text-slate-400">为什么错误</span><p className="mt-[3%] text-[clamp(12px,1vw,19px)] leading-relaxed text-slate-600">{reason}</p></div></div></Reveal>)}</div>;
}

export function SummaryChain() {
  const items = [
    { order: 1, label: "模型", text: "根据输入逐步生成输出", icon: BrainCircuit, color: "text-cyan-600" },
    { order: 2, label: "上下文", text: "决定这一次能看到什么", icon: MessageSquareText, color: "text-blue-600" },
    { order: 3, label: "工具", text: "让生成走向实际行动", icon: Wrench, color: "text-violet-600" },
    { order: 4, label: "状态与循环", text: "让任务持续推进和停止", icon: RefreshCw, color: "text-emerald-600" },
    { order: 5, label: "人", text: "负责目标、授权和验收", icon: Hand, color: "text-amber-600" },
  ];
  return <div className="relative h-full"><div className="absolute left-[6%] right-[6%] top-[35%] h-px bg-slate-200" /><div className="grid h-[58%] grid-cols-5 gap-[1.5%]">{items.map(({ order, label, text, icon: Icon, color }) => <Reveal key={label} order={order}><div className="flex h-full flex-col items-center text-center"><span className={cn("flex size-[clamp(42px,4.8vw,88px)] items-center justify-center rounded-full border border-current/20 bg-current/5", color)}><Icon className="size-[38%]" /></span><strong className="mt-[10%] text-[clamp(15px,1.3vw,25px)] text-slate-950">{label}</strong><span className="mt-[4%] text-[clamp(12px,.95vw,18px)] leading-relaxed text-slate-500">{text}</span></div></Reveal>)}</div><Reveal className="absolute bottom-[6%] left-[8%] right-[8%]" order={6}><div className="flex items-center justify-center gap-[3%] rounded-full border border-blue-200 bg-blue-50 px-[4%] py-[2%] text-[clamp(13px,1.05vw,20px)] text-blue-900"><BrainCircuit className="size-[1.15em]" />模型生成<ArrowRight /><Wrench className="size-[1.15em]" />工具执行<ArrowRight /><Bot className="size-[1.15em]" />智能体推进<ArrowRight /><ShieldCheck className="size-[1.15em]" />人验收</div></Reveal></div>;
}
