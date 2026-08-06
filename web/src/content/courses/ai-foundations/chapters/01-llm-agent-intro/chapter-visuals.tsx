"use client";

import Image from "next/image";
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
  const journey = ["一句任务要求", "软件处理过程", "可验收结果"];

  return (
    <section className="relative h-full overflow-hidden rounded-[2.25rem] bg-[#f7f9fc] text-slate-950">
      <div className="pointer-events-none absolute -right-[4%] -top-[18%] size-[62%] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,.12),transparent_68%)]" />
      <div className="pointer-events-none absolute bottom-[-28%] left-[24%] size-[48%] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,.08),transparent_70%)]" />

      <div className="grid h-full grid-cols-[1.04fr_.96fr] items-center gap-[3%] px-[5%] py-[4.2%]">
        <div className="relative z-10 max-w-[96%]">
          <h1 className="mt-[4%] text-[clamp(48px,4.9vw,94px)] font-semibold leading-[.98] tracking-[-.065em]">
            大模型与智能体
            <span className="mt-[2%] block bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500 bg-clip-text text-transparent">从理解到行动</span>
          </h1>

          <div>
            <p className="mt-[7%] max-w-[96%] text-[clamp(20px,1.6vw,31px)] font-medium leading-[1.35] tracking-[-.025em] text-slate-800">
              <span className="block">一项办公任务，怎样从一句要求</span>
              <span className="block">变成可以验收的结果？</span>
            </p>
            <p className="mt-[3%] max-w-[88%] text-[clamp(14px,1.08vw,21px)] leading-relaxed text-slate-500">
              从报名表和访谈材料出发，看懂智能软件内部如何协作。
            </p>
          </div>

          <Reveal className="mt-[8%]" order={1}>
            <div className="relative grid max-w-[92%] grid-cols-3 gap-[6%]">
              <span className="absolute left-[8%] right-[8%] top-[14px] h-px bg-gradient-to-r from-cyan-300 via-blue-400 to-emerald-300" />
              {journey.map((item, index) => (
                <div className="relative z-10" key={item}>
                  <span className={cn("block size-[29px] rounded-full border-[7px] border-[#f7f9fc] shadow-[0_0_0_1px_rgba(148,163,184,.25)]", index === 0 ? "bg-cyan-400" : index === 1 ? "bg-blue-500" : "bg-emerald-500")} />
                  <strong className="mt-[8%] block text-[clamp(13px,1vw,19px)] font-medium text-slate-700">{item}</strong>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative flex h-full items-center justify-center" aria-hidden="true">
          <div className="relative aspect-square w-[min(31vw,560px)] -translate-x-[5%]">
            <div className="absolute inset-[3%] rounded-full border border-blue-200/80 bg-white/45 shadow-[0_32px_90px_rgba(59,130,246,.12)] backdrop-blur-sm cover-orbit-track cover-orbit-outer">
              <span className="cover-orbit-tag cover-orbit-tag-outer left-[43%] top-[-18px]">XLS</span>
              <span className="cover-orbit-tag cover-orbit-tag-outer right-[-18px] top-[55%]">DOC</span>
              <span className="cover-orbit-tag cover-orbit-tag-outer bottom-[3%] left-[5%]">PPT</span>
            </div>

            <div className="absolute inset-[20%] rounded-full border border-dashed border-violet-300/70 bg-white/25 cover-orbit-track cover-orbit-inner">
              <span className="cover-orbit-tag cover-orbit-tag-inner left-[-19px] top-[13%]">理解</span>
              <span className="cover-orbit-tag cover-orbit-tag-inner right-[-27px] top-[48%]">行动</span>
              <span className="cover-orbit-tag cover-orbit-tag-inner bottom-[-18px] left-[42%]">检查</span>
            </div>

            <div className="absolute inset-[32%] grid -rotate-6 place-content-center rounded-[31%] border border-white/80 bg-[linear-gradient(145deg,rgba(255,255,255,.96),rgba(226,239,255,.9))] text-center shadow-[0_26px_80px_rgba(59,130,246,.22),inset_0_1px_0_rgba(255,255,255,1)]">
              <strong className="bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-500 bg-clip-text text-[clamp(54px,5.2vw,100px)] leading-none tracking-[-.08em] text-transparent">AI</strong>
              <span className="mt-[7%] font-mono text-[clamp(9px,.7vw,14px)] font-semibold tracking-[.28em] text-slate-500">SOFTWARE</span>
            </div>

            <span className="absolute right-[15%] top-[9%] size-3 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,.9)]" />
            <span className="absolute bottom-[13%] left-[16%] size-2.5 rounded-full bg-violet-500 shadow-[0_0_24px_rgba(139,92,246,.75)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function CaseWorkbench() {
  return <div className="grid h-full grid-cols-[1.08fr_.2fr_.92fr] grid-rows-[minmax(0,1fr)] items-stretch gap-[3%] pb-[4%]">
    <div className="grid grid-cols-2 gap-[4%]">
      <DocumentSheet icon={FileSpreadsheet} name="培训报名统计.xlsx" meta="128 条 · 部门字段 · 需要统计" accent="cyan" />
      <DocumentSheet icon={FileText} name="需求访谈记录.docx" meta="6 段访谈 · 需要找到原文依据" accent="violet" />
    </div>
    <Reveal className="min-h-0" order={1}><div className="flex h-full flex-col items-center justify-center gap-[7%] text-blue-500"><ArrowRight className="size-[34%]" /><span className="font-mono text-[clamp(9px,.68vw,13px)] tracking-[.15em] [writing-mode:vertical-rl]">PROCESS</span></div></Reveal>
    <Reveal className="min-h-0" order={2}><div className="relative h-full overflow-hidden rounded-[2rem] border border-emerald-200 bg-emerald-50 p-[6%] text-emerald-950 shadow-xl shadow-emerald-950/5"><FileOutput className="size-[12%] text-emerald-600" /><h2 className="mt-[3%] text-[clamp(18px,1.6vw,31px)] font-semibold">5 页培训需求汇报</h2><div className="mt-[4%] space-y-[2%]">{["数字与源文件一致", "每个结论都有依据", "缺失信息标记为待确认", "每条建议对应具体问题"].map((item) => <div className="flex items-center gap-[4%] rounded-xl border border-emerald-100 bg-white/85 px-[5%] py-[2.5%] text-[clamp(12px,1vw,19px)] text-slate-600" key={item}><CheckCircle2 className="size-[1.2em] text-emerald-600" />{item}</div>)}</div><span className="absolute bottom-[4%] right-[6%] font-mono text-[clamp(10px,.85vw,16px)] text-emerald-700/45">ACCEPTANCE</span></div></Reveal>
  </div>;
}

export function WorkBuddyOverview() {
  const revealStep = Math.min(useRevealStep(), 2);
  const setRevealStep = useRevealStepSetter();
  const [manualSelection, setManualSelection] = useState(0);
  const panels = [
    {
      order: 1,
      eyebrow: "TASK WORKSPACE",
      title: "任务工作区",
      image: "/images/workbuddy/task-home.png",
      alt: "WorkBuddy 任务首页，包含任务、工作空间、模型选择、文件与权限入口",
      caption: "从任务入口选择模型、添加材料，并在工作空间与权限范围内推进。",
      chips: ["任务入口", "模型选择", "文件与权限"],
      observations: ["左侧组织任务与工作空间", "中部组合模型、材料和输入", "底部明确工作空间与权限"],
      activeClass: "border-cyan-300 shadow-[0_24px_70px_rgba(8,145,178,.14)]",
      accentClass: "bg-cyan-500",
      chipClass: "border-cyan-200 bg-cyan-50 text-cyan-800",
      textClass: "text-cyan-700",
    },
    {
      order: 2,
      eyebrow: "CAPABILITY CATALOG",
      title: "能力目录",
      image: "/images/workbuddy/capability-market.png",
      alt: "WorkBuddy 专家、技能与连接器页面，展示多种场景化能力入口",
      caption: "专家、技能和连接器，把常见任务与外部能力封装成可选择的入口。",
      chips: ["专家", "技能", "连接器"],
      observations: ["顶部区分专家、技能和连接器", "场景覆盖内容、数据、法律等工作", "入口背后组合模型、规则与工具"],
      activeClass: "border-violet-300 shadow-[0_24px_70px_rgba(124,58,237,.13)]",
      accentClass: "bg-violet-500",
      chipClass: "border-violet-200 bg-violet-50 text-violet-800",
      textClass: "text-violet-700",
    },
  ];
  const selectedIndex = setRevealStep ? (revealStep >= 2 ? 1 : 0) : manualSelection;
  const selected = panels[selectedIndex];

  return (
    <div className="grid h-full min-h-0 grid-cols-[.21fr_minmax(0,1fr)_.29fr] gap-[1.8%] pb-[4.5%]">
      <aside className="flex min-h-0 flex-col rounded-[1.6rem] border border-slate-200 bg-white px-[7%] py-[6%] shadow-[0_16px_45px_rgba(15,23,42,.06)]">
        <Kicker>REAL INTERFACE</Kicker>
        <strong className="mt-[4%] text-[clamp(17px,1.35vw,26px)] tracking-[-.025em] text-slate-950">两个观察窗口</strong>
        <div className="mt-[10%] space-y-[6%]">
          {panels.map((panel, index) => {
            const active = selectedIndex === index;
            return <button className={cn("relative w-full overflow-hidden rounded-[1.1rem] border px-[7%] py-[7%] text-left transition-all", active ? panel.activeClass : "border-slate-200 bg-slate-50 text-slate-400")} data-deck-space-advance key={panel.title} onClick={() => setRevealStep ? setRevealStep(panel.order) : setManualSelection(index)}><span className={cn("absolute inset-y-0 left-0 w-1", active ? panel.accentClass : "bg-slate-200")} /><span className="font-mono text-[clamp(10px,.68vw,15px)]">0{panel.order}</span><strong className="mt-[4%] block whitespace-nowrap text-[clamp(13px,1vw,19px)] text-slate-900">{panel.title}</strong><span className="mt-[3%] block text-[clamp(10px,.72vw,15px)]">{panel.eyebrow}</span></button>;
          })}
        </div>
        <p className="mt-auto border-t border-slate-100 pt-[7%] text-[clamp(10px,.78vw,15px)] leading-relaxed text-slate-400">界面会随版本变化，本页只观察稳定的软件结构。</p>
      </aside>

      <figure className={cn("relative min-h-0 overflow-hidden rounded-[1.6rem] border bg-white p-[.8%] transition-[border-color,box-shadow] duration-500", selected.activeClass)}>
        <Image alt={selected.alt} className="object-contain" fill priority sizes="(max-width: 1200px) 66vw, 1040px" src={selected.image} />
      </figure>

      <aside className="flex min-h-0 flex-col rounded-[1.6rem] border border-slate-200 bg-white px-[7%] py-[6%] shadow-[0_16px_45px_rgba(15,23,42,.06)]">
        <div className="flex items-center justify-between gap-[4%]"><Kicker>{selected.eyebrow}</Kicker><span className="shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-[4%] py-[1.5%] text-[clamp(10px,.7vw,15px)] text-emerald-700">完整界面 · 未裁切</span></div>
        <h2 className="mt-[4%] text-[clamp(21px,1.75vw,34px)] font-semibold tracking-[-.035em] text-slate-950">{selected.title}</h2>
        <Reveal className="mt-[3%]" order={selected.order}>
          <p className="text-[clamp(13px,1vw,19px)] leading-relaxed text-slate-600">{selected.caption}</p>
          <div className="mt-[5%] flex flex-wrap gap-2">
            {selected.chips.map((chip) => <span className={cn("rounded-full border px-[4%] py-[1.6%] text-[clamp(10px,.76vw,15px)] font-medium", selected.chipClass)} key={chip}>{chip}</span>)}
          </div>
        </Reveal>

        <Reveal className="mt-auto border-t border-slate-100 pt-[6%]" order={selected.order}>
          <span className="font-mono text-[clamp(10px,.7vw,15px)] tracking-[.12em] text-slate-400">画面中可以观察</span>
          <ul className="mt-[5%] space-y-[4%]">
            {selected.observations.map((item) => <li className="flex gap-[4%] text-[clamp(11px,.88vw,17px)] leading-snug text-slate-600" key={item}><CheckCircle2 className={cn("mt-[.1em] size-[1.05em] shrink-0", selected.textClass)} />{item}</li>)}
          </ul>
        </Reveal>
      </aside>
    </div>
  );
}

function TimelineRow({ label, items, active }: { label: string; items: string[]; active?: boolean }) {
  return <div className={cn("grid grid-cols-[11rem_1fr] items-center gap-[4%] rounded-[1.4rem] border px-[4%] py-[3%]", active ? "border-blue-200 bg-blue-50" : "border-slate-200 bg-white")}><strong className={cn("text-[clamp(14px,1.2vw,23px)]", active ? "text-blue-950" : "text-slate-700")}>{label}</strong><div className="relative flex items-center justify-between"><div className={cn("absolute left-0 right-0 top-1/2 h-px", active ? "bg-blue-300" : "bg-slate-200")} />{items.map((item, index) => <div className="relative z-10 flex w-[22%] flex-col items-center text-center" key={item}><span className={cn("flex size-[clamp(20px,2vw,38px)] items-center justify-center rounded-full font-mono text-[clamp(10px,.85vw,16px)]", active ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-500")}>{index + 1}</span><span className="mt-[7%] text-[clamp(11px,.92vw,18px)] leading-tight text-slate-600">{item}</span></div>)}</div></div>;
}

export function ChatAgentTimeline() {
  return <div className="flex h-full flex-col justify-center gap-[7%]"><Reveal order={1}><TimelineRow label="一次性对话" items={["提出问题", "生成回答", "人工复制或操作", "人工决定下一步"]} /></Reveal><Reveal order={2}><TimelineRow active label="任务型智能体" items={["给出目标和边界", "软件维护状态", "工具真实执行", "观察结果并继续"]} /></Reveal></div>;
}

export function ApplicationLayers() {
  const layers = [
    { label: "使用层", question: "你在操作什么？", text: "界面接收目标和材料，展示处理过程、结果与待确认项。", icon: AppWindow, className: "w-[94%] bg-cyan-50 border-cyan-200" },
    { label: "能力层", question: "模型本次依据什么生成？", text: "软件整理当前上下文，再调用模型生成内容或下一步意图。", icon: BrainCircuit, className: "w-[88%] bg-blue-50 border-blue-200" },
    { label: "行动层", question: "软件实际上能做什么？", text: "工具在真实权限范围内读取、计算、写入和执行。", icon: Wrench, className: "w-[82%] bg-violet-50 border-violet-200" },
    { label: "运行层", question: "任务怎样持续和追踪？", text: "状态与记录保存进度、结果、错误和待确认问题。", icon: Database, className: "w-[76%] bg-slate-100 border-slate-300 text-slate-950" },
  ];
  return <div className="grid h-full grid-rows-[repeat(4,minmax(0,1fr))] gap-[2%] pb-[4%]">{layers.map(({ label, question, text, icon: Icon, className }, index) => <Reveal className="min-h-0" key={label} order={index + 1}><div className={cn("mx-auto grid h-full grid-cols-[.82fr_1.18fr_auto] items-center gap-[4%] rounded-[1.3rem] border px-[4%] shadow-lg shadow-slate-950/5", className)}><div><Kicker>{label}</Kicker><strong className="mt-[1%] block text-[clamp(15px,1.3vw,25px)]">{question}</strong></div><p className="text-[clamp(13px,1vw,19px)] leading-relaxed text-slate-600">{text}</p><Icon className="size-[clamp(30px,3.2vw,60px)] opacity-40" /></div></Reveal>)}</div>;
}

const concepts = [
  { label: "AI 应用", en: "APPLICATION", color: "cyan", icon: AppWindow, definition: "用户实际操作的完整软件产品。", detail: "组合界面、模型、文件、工具、权限和任务记录。", caseText: "WorkBuddy 接收材料、展示过程并保存产物。", boundary: "连接模型不代表所有功能都由模型完成。" },
  { label: "上下文", en: "CONTEXT", color: "blue", icon: MessageSquareText, definition: "这一次真正交给模型的信息。", detail: "目标、历史消息、工具结果、原文片段和规则。", caseText: "人数统计、相关访谈片段和 5 页限制进入当前输入。", boundary: "文件存在，不等于内容已经进入上下文。" },
  { label: "大模型", en: "MODEL", color: "violet", icon: BrainCircuit, definition: "根据当前输入逐步生成输出的能力。", detail: "可以生成文字、结构、分类结果和工具调用意图。", caseText: "归纳问题、形成汇报结构和待确认项。", boundary: "输出可能错误；提出行动不等于已经执行。" },
  { label: "工具", en: "TOOLS", color: "amber", icon: Wrench, definition: "真正读取、计算、写入和操作外部对象的能力。", detail: "读、写、改、执行及其与业务规则的专业组合。", caseText: "读取报名表、统计、生成 PPT、检查页数。", boundary: "受权限和参数限制，执行成功也不等于业务正确。" },
  { label: "智能体", en: "AGENT", color: "green", icon: Bot, definition: "围绕目标维护状态，并根据结果持续推进的运行方式。", detail: "判断、行动、观察、更新，以及继续、询问或停止。", caseText: "先统计，再读访谈，再生成和检查。", boundary: "不承担最终责任，缺少信息时应停下来询问。" },
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
            <dt className="text-[clamp(10px,.78vw,15px)] font-semibold text-slate-900">具体包括</dt>
            <dd className="mt-[8%] text-[clamp(12px,1vw,19px)] leading-[1.55] text-slate-600">{concept.detail}</dd>
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
  return <div className={cn("relative flex h-full flex-col rounded-[1.6rem] border p-[7%] shadow-sm shadow-slate-950/4", tone[color])}><div className="flex items-center justify-between"><Kicker>{label}</Kicker><Icon className="size-[14%] opacity-45" /></div><strong className="mt-[8%] text-[clamp(18px,1.65vw,32px)] leading-tight tracking-[-.025em]">{title}</strong><div className="mt-auto space-y-[5%]">{items.map((item) => <div className="border-t border-current/10 pt-[4%] text-[clamp(13px,1.04vw,20px)] leading-snug opacity-75" key={item}>{item}</div>)}</div></div>;
}

export function ContextPipeline() {
  return <div className="grid h-full grid-cols-[1fr_.16fr_1fr_.16fr_1fr] gap-[1%]">
    <PipelineNode
      icon={FileInput}
      label="FILES · 文件"
      title="文件存在"
      color="slate"
      items={["报名统计.xlsx", "需求访谈记录.docx", "模型还看不到文件内容"]}
    />
    <Reveal className="flex items-center justify-center" order={1}><ArrowRight className="text-violet-300" /></Reveal>
    <Reveal order={1}>
      <PipelineNode
        icon={FileSearch}
        label="TOOL RESULT · 工具结果"
        title="读取、解析并返回"
        color="violet"
        items={["四个部门共 128 人", "提取 6 段访谈及来源", "筛选与任务相关的信息"]}
      />
    </Reveal>
    <Reveal className="flex items-center justify-center" order={2}><ArrowRight className="text-blue-300" /></Reveal>
    <Reveal order={2}>
      <PipelineNode
        icon={MessageSquareText}
        label="CONTEXT · 当前上下文"
        title="组织为本次输入"
        color="blue"
        items={["目标：形成 5 页汇报", "相关数据与原文片段", "规则、状态与验收条件"]}
      />
    </Reveal>
  </div>;
}

export function ContextFunnel() {
  const revealStep = Math.min(useRevealStep(), 3);
  const standards = [
    { step: 1, icon: Eye, label: "相关", text: "直接支持当前任务" },
    { step: 1, icon: Settings2, label: "充分", text: "足以判断，但不是全部资料" },
    { step: 2, icon: ShieldCheck, label: "已授权", text: "只使用允许且必要的信息" },
    { step: 3, icon: ScanSearch, label: "可追溯", text: "数字和结论能回到来源" },
  ];

  return <div className="grid h-full grid-cols-[.7fr_.3fr] gap-[5%] pb-[clamp(46px,3vw,58px)]">
    <div className="flex min-h-0 flex-col items-center justify-center gap-[clamp(4px,.35vw,7px)]">
      <div className="w-[96%] shrink-0 rounded-[1.35rem] border border-slate-200 bg-white px-[5%] py-[clamp(11px,.78vw,15px)] shadow-sm">
        <div className="flex items-center justify-between gap-[4%]">
          <div><Kicker>SOURCE POOL · 可访问资料池</Kicker><strong className="mt-[2%] block text-[clamp(15px,1.3vw,25px)]">软件能访问，不代表本次都要使用</strong></div>
          <span className="shrink-0 font-mono text-[clamp(10px,.78vw,15px)] text-slate-400">5 类资料</span>
        </div>
        <div className="mt-[1.3%] flex flex-wrap gap-[2%] text-[clamp(11px,.88vw,17px)] text-slate-600">
          {["报名表", "培训访谈", "员工联系方式", "薪酬表", "历史制度"].map((item) => <span className="rounded-full bg-slate-100 px-[3%] py-[clamp(4px,.3vw,6px)]" key={item}>{item}</span>)}
        </div>
      </div>

      <Reveal className="flex w-[82%] shrink-0 flex-col items-center gap-1" order={1}>
        <ArrowDown className="size-[clamp(14px,1.1vw,21px)] shrink-0 text-blue-300" />
        <div className="w-full rounded-[1.25rem] border border-blue-200 bg-blue-50 px-[6%] py-[clamp(9px,.6vw,12px)] text-blue-950">
          <div className="flex items-center justify-between gap-[4%]"><strong className="text-[clamp(15px,1.25vw,24px)]">按任务筛选</strong><span className="font-mono text-[clamp(10px,.78vw,15px)] text-blue-500">KEEP WHAT MATTERS</span></div>
          <div className="mt-[1%] flex items-center justify-between gap-[4%] text-[clamp(11px,.9vw,17px)]"><span>保留：部门人数、培训访谈</span><span className="rounded-full bg-rose-50 px-[3%] py-[.7%] text-rose-600">排除：薪酬表、无关制度</span></div>
        </div>
      </Reveal>

      <Reveal className="flex w-[68%] shrink-0 flex-col items-center gap-1" order={2}>
        <ArrowDown className="size-[clamp(14px,1.1vw,21px)] shrink-0 text-violet-300" />
        <div className="w-full rounded-[1.25rem] border border-violet-200 bg-violet-50 px-[7%] py-[clamp(9px,.6vw,12px)] text-violet-950">
          <div className="flex items-center justify-between gap-[4%]"><strong className="text-[clamp(15px,1.25vw,24px)]">按权限与最小必要处理</strong><ShieldCheck className="size-[7%] text-violet-500" /></div>
          <p className="mt-[1%] text-[clamp(11px,.9vw,17px)] text-violet-800/75">去掉姓名、电话等个人信息；保留部门汇总和带来源的片段。</p>
        </div>
      </Reveal>

      <Reveal className="flex w-[54%] shrink-0 flex-col items-center gap-1" order={3}>
        <ArrowDown className="size-[clamp(14px,1.1vw,21px)] shrink-0 text-cyan-300" />
        <div className="w-full rounded-[1.25rem] border border-cyan-200 bg-cyan-50 px-[8%] py-[clamp(7px,.48vw,10px)] text-center text-cyan-950 shadow-sm">
          <Kicker>CONTEXT · 本次上下文</Kicker>
          <p className="mt-[2%] text-[clamp(11px,.9vw,17px)] leading-relaxed">128 人 · 6 段访谈 · 5 页限制 · 来源与验收规则</p>
        </div>
      </Reveal>
    </div>

    <div className="flex flex-col justify-center gap-[clamp(9px,.75vw,15px)] border-l border-slate-200 pl-[10%]">
      <div><Kicker>QUALITY CHECK · 四项标准</Kicker><p className="mt-[2%] text-[clamp(11px,.88vw,17px)] text-slate-400">不是越多，而是范围刚好</p></div>
      {standards.map(({ step, icon: Icon, label, text }) => {
        const active = revealStep >= step;
        return <div className={cn("flex items-center gap-[5%] rounded-[1.1rem] border px-[5%] py-[4%] transition-all duration-300", active ? "border-blue-200 bg-white text-slate-950 shadow-sm" : "border-transparent text-slate-400")} key={label}>
          <span className={cn("flex size-[clamp(34px,3vw,56px)] shrink-0 items-center justify-center rounded-full", active ? "bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-300")}><Icon className="size-[46%]" /></span>
          <div><strong className="block text-[clamp(14px,1.1vw,21px)]">{label}</strong><span className="mt-[1%] block text-[clamp(11px,.88vw,17px)] leading-snug opacity-65">{text}</span></div>
        </div>;
      })}
    </div>
  </div>;
}

export function ModelStage() {
  const outputTypes = ["自然语言", "JSON / 表格结构", "分类结果", "工具调用意图", "待确认问题"];

  return <div className="flex h-full flex-col gap-[clamp(10px,.8vw,16px)] pb-[clamp(16px,1.2vw,24px)]">
    <div className="grid shrink-0 grid-cols-2 overflow-hidden rounded-[1.2rem] border border-slate-200 bg-white shadow-sm">
      <div className="border-r border-slate-200 px-[4%] py-[clamp(9px,.65vw,13px)]">
        <Kicker>TRAINING · 使用前</Kicker>
        <p className="mt-[1%] text-[clamp(12px,.95vw,18px)] text-slate-600"><strong className="text-slate-950">训练阶段：</strong>从大量示例中形成语言、结构和模式处理能力。</p>
      </div>
      <div className="px-[4%] py-[clamp(9px,.65vw,13px)]">
        <Kicker>USE · 当前任务</Kicker>
        <p className="mt-[1%] text-[clamp(12px,.95vw,18px)] text-slate-600"><strong className="text-slate-950">使用阶段：</strong>当前上下文进入模型，生成这一次的具体输出。</p>
      </div>
    </div>

    <div className="grid min-h-0 flex-1 grid-cols-[.86fr_.08fr_1.26fr_.08fr_.86fr] gap-[1%]">
      <div className="h-full min-h-0 overflow-hidden rounded-[1.6rem] border border-cyan-200 bg-cyan-50 p-[6%] text-cyan-950 shadow-sm">
        <Kicker>INPUT · 当前输入</Kicker>
        <div className="mt-[5%] space-y-[3%]">
          {["目标：形成 5 页汇报", "工具结果：四部门共 128 人", "访谈片段：安全、场景、准确性", "规则：材料外事实待确认"].map((item) => <div className="rounded-xl border border-cyan-100 bg-white/80 px-[5%] py-[clamp(9px,.7vw,14px)] text-[clamp(12px,1vw,19px)] leading-snug" key={item}>{item}</div>)}
        </div>
      </div>

      <Reveal className="flex items-center justify-center" order={1}><ArrowRight className="text-violet-300" /></Reveal>
      <Reveal className="min-h-0" order={1}>
        <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[1.6rem] border border-violet-200 bg-violet-50 px-[4%] py-[3%] text-violet-950 shadow-sm">
          <div className="flex items-center justify-between"><Kicker>GENERATE · 逐步生成</Kicker><RefreshCw className="size-[9%] text-violet-500" /></div>
          <p className="mt-[2%] text-[clamp(12px,.95vw,18px)] leading-relaxed text-violet-800/75">模型每次只推进一小步，再把新结果带入下一轮。</p>
          <div className="my-auto rounded-[1.15rem] border border-violet-200 bg-white/80 p-[3%]">
            <div className="flex items-center justify-between"><span className="font-mono text-[clamp(10px,.78vw,15px)] text-violet-500">一次生成循环</span><span className="text-[clamp(10px,.78vw,15px)] text-slate-400">概率仅作示意</span></div>
            <div className="mt-[4%] grid grid-cols-[.86fr_auto_1.12fr_auto_1.08fr] items-stretch gap-[2%]">
              <div className="rounded-xl bg-slate-50 p-[8%]">
                <span className="font-mono text-[clamp(10px,.78vw,15px)] text-slate-400">01 · 已有内容</span>
                <strong className="mt-[12%] block text-[clamp(13px,1.05vw,20px)] leading-snug text-slate-900">培训需求</strong>
              </div>
              <div className="flex items-center justify-center"><ArrowRight className="size-[clamp(14px,1.1vw,21px)] text-violet-300" /></div>
              <div className="rounded-xl bg-violet-50 p-[7%]">
                <span className="font-mono text-[clamp(10px,.78vw,15px)] text-violet-400">02 · 候选片段</span>
                <div className="mt-[7%] space-y-[5%] text-[clamp(10px,.82vw,16px)]">
                  <div className="flex justify-between rounded-md bg-violet-600 px-[7%] py-[4%] font-medium text-white"><span>主要集中在</span><span>46%</span></div>
                  <div className="flex justify-between px-[7%] text-violet-700/65"><span>包括</span><span>21%</span></div>
                  <div className="flex justify-between px-[7%] text-violet-700/65"><span>涉及</span><span>8%</span></div>
                </div>
              </div>
              <div className="flex items-center justify-center"><ArrowRight className="size-[clamp(14px,1.1vw,21px)] text-violet-300" /></div>
              <div className="rounded-xl border border-violet-200 bg-white p-[8%]">
                <span className="font-mono text-[clamp(10px,.78vw,15px)] text-violet-400">03 · 追加结果</span>
                <strong className="mt-[10%] block text-[clamp(13px,1.05vw,20px)] leading-snug text-violet-950"><span className="block">培训需求</span><span className="block text-violet-600">主要集中在<span className="ml-1 animate-pulse text-violet-400">▍</span></span></strong>
              </div>
            </div>
            <div className="mt-[4%] flex items-center justify-center gap-[3%] rounded-full bg-violet-50 px-[5%] py-[2.5%] text-[clamp(11px,.86vw,16px)] text-violet-700"><RefreshCw className="size-[1.1em]" />新结果成为“已有内容”，继续下一轮</div>
          </div>
        </div>
      </Reveal>

      <Reveal className="flex items-center justify-center" order={2}><ArrowRight className="text-emerald-300" /></Reveal>
      <Reveal className="min-h-0" order={2}>
        <div className="h-full min-h-0 overflow-hidden rounded-[1.6rem] border border-emerald-200 bg-emerald-50 p-[6%] text-emerald-950 shadow-sm">
          <Kicker>OUTPUT · 多种输出</Kicker>
          <div className="mt-[5%] grid grid-cols-2 gap-[4%]">
            {outputTypes.map((item, index) => <div className={cn("flex min-h-[clamp(54px,4.5vw,86px)] items-center justify-center rounded-xl border border-emerald-200 bg-white px-[5%] text-center text-[clamp(12px,1vw,19px)] font-medium leading-snug", index === outputTypes.length - 1 && "col-span-2")} key={item}>{item}</div>)}
          </div>
          <p className="mt-[5%] border-t border-emerald-200 pt-[4%] text-[clamp(11px,.86vw,16px)] leading-relaxed text-emerald-800/70">结构可以很规整，但仍然属于模型生成的内容。</p>
        </div>
      </Reveal>
    </div>
  </div>;
}

export function ModelBoundaryQuadrants() {
  const items = [
    { order: 0, label: "MODEL · 模型生成", title: "语言与结构", example: "把 6 段访谈归纳为 3 个培训主题", boundary: "适合生成草稿，结果仍需核对", color: "border-emerald-200 bg-emerald-50 text-emerald-950", iconTone: "bg-emerald-100 text-emerald-600", icon: BrainCircuit },
    { order: 1, label: "CONTEXT · 事实需要上下文", title: "当前内部事实", example: "四部门共 128 人、制度原文和当前任务状态", boundary: "没有进入输入的信息，模型不能可靠依据", color: "border-cyan-200 bg-cyan-50 text-cyan-950", iconTone: "bg-cyan-100 text-cyan-600", icon: MessageSquareText },
    { order: 2, label: "TOOLS · 行动交给工具", title: "可验证计算与真实动作", example: "按部门统计、生成 PPT、检查页数", boundary: "工具仍受参数、权限和运行环境限制", color: "border-violet-200 bg-violet-50 text-violet-950", iconTone: "bg-violet-100 text-violet-600", icon: Wrench },
    { order: 3, label: "HUMAN · 最终由人决定", title: "业务取舍与责任", example: "建议是否合规、可行，以及是否正式采用", boundary: "最终决定、验收和责任不会转移给模型", color: "border-amber-200 bg-amber-50 text-amber-950", iconTone: "bg-amber-100 text-amber-600", icon: UserRoundCheck },
  ];
  return <div className="grid h-full grid-cols-2 grid-rows-2 gap-[2%] pb-[clamp(34px,2.4vw,46px)]">
    {items.map(({ order, label, title, example, boundary, color, iconTone, icon: Icon }, index) => <Reveal className="min-h-0" key={label} order={order}>
      <article className={cn("relative flex h-full min-h-0 flex-col overflow-hidden rounded-[1.5rem] border px-[4%] py-[clamp(14px,1vw,20px)] shadow-sm", color)}>
        <span className="absolute right-[4%] top-[2%] font-mono text-[clamp(42px,4vw,76px)] font-semibold opacity-[.035]">0{index + 1}</span>
        <div className="relative flex items-center gap-[3%]"><span className={cn("flex size-[clamp(38px,3.4vw,64px)] shrink-0 items-center justify-center rounded-[1rem]", iconTone)}><Icon className="size-[48%]" /></span><div><Kicker>{label}</Kicker><h2 className="mt-[2%] text-[clamp(18px,1.45vw,28px)] font-semibold leading-tight tracking-[-.025em]">{title}</h2></div></div>
        <div className="relative mt-[clamp(8px,.6vw,12px)] rounded-[1rem] border border-white/80 bg-white/75 px-[4%] py-[clamp(8px,.55vw,11px)]">
          <span className="font-mono text-[clamp(10px,.78vw,15px)] opacity-45">案例任务</span>
          <p className="mt-[1%] text-[clamp(13px,1.02vw,20px)] font-medium leading-snug">{example}</p>
        </div>
        <p className="relative mt-auto flex items-center gap-[2%] border-t border-current/10 pt-[clamp(7px,.5vw,10px)] text-[clamp(11px,.88vw,17px)] leading-snug opacity-70"><CircleAlert className="size-[1.1em] shrink-0" />{boundary}</p>
      </article>
    </Reveal>)}
  </div>;
}

export function ToolActions() {
  const actions = [
    { order: 0, label: "READ", icon: Eye, title: "读", text: "取得已有内容或当前状态", object: "报名统计.xlsx", result: "返回 128 条记录", boundary: "通常不改变原对象", color: "border-cyan-200 bg-cyan-50 text-cyan-950", iconTone: "bg-cyan-500" },
    { order: 1, label: "WRITE", icon: FileOutput, title: "写", text: "创建新的文件、记录或内容", object: "培训需求汇报.pptx", result: "新建交付文件", boundary: "产生一个新对象", color: "border-blue-200 bg-blue-50 text-blue-950", iconTone: "bg-blue-600" },
    { order: 2, label: "EDIT", icon: FilePenLine, title: "改", text: "在明确范围内调整已有对象", object: "汇报第 3 页", result: "补充访谈来源", boundary: "改变已有对象", color: "border-violet-200 bg-violet-50 text-violet-950", iconTone: "bg-violet-600" },
    { order: 3, label: "EXECUTE", icon: Play, title: "执行", text: "运行计算、检查或授权操作", object: "部门人数与 PPT", result: "返回统计和检查结果", boundary: "可能成功，也可能报错", color: "border-emerald-200 bg-emerald-50 text-emerald-950", iconTone: "bg-emerald-600" },
  ];
  const files = [
    { name: "报名统计.xlsx", meta: "原始数据", icon: FileSpreadsheet, tone: "bg-emerald-100 text-emerald-600" },
    { name: "需求访谈记录.docx", meta: "原始材料", icon: FileText, tone: "bg-blue-100 text-blue-600" },
    { name: "培训需求汇报.pptx", meta: "交付产物", icon: FileOutput, tone: "bg-violet-100 text-violet-600" },
  ];

  return <div className="grid h-full grid-rows-[minmax(0,1fr)_auto] gap-[clamp(10px,.8vw,16px)] pb-[clamp(50px,3.4vw,66px)]">
    <div className="grid min-h-0 grid-cols-[.32fr_.68fr] gap-[2%]">
      <section className="relative flex min-h-0 flex-col overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white px-[7%] py-[clamp(16px,1.25vw,24px)] shadow-[0_20px_55px_rgba(15,23,42,.07)]">
        <div className="absolute -right-[12%] -top-[18%] size-[55%] rounded-full bg-blue-100/55 blur-2xl" />
        <div className="relative"><Kicker>CASE WORKSPACE · 外部对象</Kicker><h2 className="mt-[2%] text-[clamp(19px,1.65vw,32px)] font-semibold tracking-[-.035em]">工具实际接触的对象</h2></div>
        <div className="relative mt-[clamp(12px,1vw,20px)] space-y-[clamp(7px,.55vw,11px)]">
          {files.map(({ name, meta, icon: Icon, tone }) => <div className="flex items-center gap-[4%] rounded-[1rem] border border-slate-200/80 bg-slate-50/80 px-[4%] py-[clamp(7px,.52vw,10px)]" key={name}><span className={cn("flex size-[clamp(34px,2.8vw,54px)] shrink-0 items-center justify-center rounded-xl", tone)}><Icon className="size-[46%]" /></span><div className="min-w-0"><strong className="block truncate text-[clamp(12px,1vw,19px)]">{name}</strong><span className="text-[clamp(10px,.78vw,15px)] text-slate-400">{meta}</span></div></div>)}
        </div>
        <p className="relative mt-auto border-t border-slate-200 pt-[clamp(8px,.6vw,12px)] text-[clamp(11px,.86vw,16px)] leading-snug text-slate-500">工具接收明确对象与参数，再留下结果或错误。</p>
      </section>

      <div className="grid min-h-0 grid-cols-2 grid-rows-2 gap-[2.5%]">
        {actions.map(({ order, label, icon: Icon, title, text, object, result, boundary, color, iconTone }) => <Reveal className="min-h-0" key={title} order={order}>
          <article className={cn("flex h-full min-h-0 flex-col rounded-[1.45rem] border px-[5%] py-[clamp(12px,.9vw,18px)] shadow-sm", color)}>
            <div className="flex items-center gap-[4%]"><span className={cn("flex size-[clamp(36px,3vw,58px)] shrink-0 items-center justify-center rounded-[1rem] text-white shadow-sm", iconTone)}><Icon className="size-[46%]" /></span><div><Kicker>{label}</Kicker><strong className="mt-[1%] block text-[clamp(19px,1.65vw,32px)] leading-none">{title}</strong></div><span className="ml-auto text-[clamp(11px,.86vw,16px)] opacity-55">{text}</span></div>
            <div className="mt-[clamp(8px,.6vw,12px)] grid grid-cols-[1fr_auto_1fr] items-center gap-[3%] rounded-[.9rem] border border-white/80 bg-white/75 px-[4%] py-[clamp(7px,.5vw,10px)] text-[clamp(11px,.88vw,17px)] font-medium"><span>{object}</span><ArrowRight className="size-[1.1em] opacity-35" /><span>{result}</span></div>
            <span className="mt-auto border-t border-current/10 pt-[clamp(6px,.42vw,8px)] text-[clamp(10px,.78vw,15px)] opacity-60">{boundary}</span>
          </article>
        </Reveal>)}
      </div>
    </div>

    <Reveal order={4}>
      <div className="grid grid-cols-[.42fr_1fr_1fr] items-center gap-[2%] rounded-[1.15rem] border border-slate-200 bg-white px-[2.5%] py-[clamp(8px,.55vw,11px)] shadow-sm">
        <div><Kicker>PROFESSIONAL TOOLS</Kicker><strong className="mt-[1%] block text-[clamp(12px,.95vw,18px)]">专业工具的组合</strong></div>
        <div className="rounded-full bg-emerald-50 px-[4%] py-[2.5%] text-center text-[clamp(11px,.86vw,16px)] font-medium text-emerald-900">表格分析 = 读 + 执行统计</div>
        <div className="rounded-full bg-violet-50 px-[4%] py-[2.5%] text-center text-[clamp(11px,.86vw,16px)] font-medium text-violet-900">PPT 生成 = 写 + 改 + 执行检查</div>
      </div>
    </Reveal>
  </div>;
}

export function ToolCallConsole() {
  const revealStep = Math.min(useRevealStep(), 4);
  const stages = [
    {
      order: 1,
      code: "REQUESTED",
      label: "MODEL INTENT",
      title: "模型提出调用",
      headline: "请求读取并分析报名表",
      summary: "模型生成工具名称与参数，但外部动作还没有发生。",
      icon: BrainCircuit,
      tone: "text-cyan-600",
      line: "bg-cyan-500",
      visual: <div className="flex h-full flex-col rounded-[1.35rem] bg-slate-950 p-[6%] text-cyan-100 shadow-[0_24px_65px_rgba(15,23,42,.2)]"><div className="flex items-center justify-between text-[clamp(11px,.82vw,16px)] text-slate-400"><span>TOOL REQUEST</span><span>intent only</span></div><pre className="my-auto whitespace-pre-wrap text-[clamp(16px,1.35vw,26px)] leading-[1.7]">{"analyze_spreadsheet\nfile: 报名统计.xlsx\ngroup_by: 部门"}</pre><div className="flex gap-[3%] text-[clamp(11px,.82vw,16px)] text-slate-400"><span>tool ✓</span><span>arguments ✓</span><span>permission ?</span></div></div>,
    },
    {
      order: 2,
      code: "VALIDATED",
      label: "RUNTIME CHECK",
      title: "应用检查",
      headline: "运行环境决定能不能执行",
      summary: "软件检查工具、文件权限和参数，而不是模型自己获得权限。",
      icon: KeyRound,
      tone: "text-blue-600",
      line: "bg-blue-600",
      visual: <div className="grid h-full grid-rows-3 divide-y divide-slate-200 border-y border-slate-200">{[["工具存在","analyze_spreadsheet","AVAILABLE"],["文件路径允许访问","报名统计.xlsx","ALLOWED"],["参数格式有效","group_by: 部门","VALID"]].map(([title,detail,status]) => <div className="grid grid-cols-[auto_1fr_auto] items-center gap-[5%] px-[5%]" key={title}><span className="flex size-[clamp(34px,3vw,58px)] items-center justify-center rounded-full bg-blue-50 text-blue-600"><CheckCircle2 className="size-[48%]" /></span><div><strong className="block text-[clamp(15px,1.25vw,24px)] text-slate-900">{title}</strong><span className="mt-[1%] block font-mono text-[clamp(11px,.85vw,16px)] text-slate-400">{detail}</span></div><span className="font-mono text-[clamp(11px,.82vw,16px)] text-blue-600">{status}</span></div>)}</div>,
    },
    {
      order: 3,
      code: "RUNNING",
      label: "EXECUTION",
      title: "工具执行",
      headline: "真正打开文件并完成统计",
      summary: "工具打开文件后确认“部门”列存在，再读取记录、检查空值并计算分组结果。",
      icon: SquareFunction,
      tone: "text-violet-600",
      line: "bg-violet-600",
      visual: <div className="flex h-full flex-col justify-between border-y border-violet-200 bg-violet-50/55 p-[6%]"><div className="flex items-center gap-[5%]"><span className="flex size-[clamp(48px,4.5vw,86px)] items-center justify-center rounded-full bg-violet-600 text-white"><FileSpreadsheet className="size-[42%]" /></span><div><Kicker>报名统计.xlsx</Kicker><strong className="mt-[2%] block text-[clamp(18px,1.55vw,30px)]">读取 Sheet1 · 部门列</strong></div></div><div><div className="mb-[3%] flex items-center justify-between text-[clamp(12px,.9vw,17px)] text-violet-700"><span>正在统计并检查空值</span><span className="font-mono">128 rows</span></div><div className="h-2 overflow-hidden rounded-full bg-violet-100"><div className="h-full w-[86%] rounded-full bg-gradient-to-r from-violet-500 to-blue-500" /></div></div><div className="grid grid-cols-3 divide-x divide-violet-200 border-y border-violet-200 py-[3%] text-center text-[clamp(12px,.92vw,18px)] text-violet-800"><span>字段已定位</span><span>记录已读取</span><span>空值检查中</span></div></div>,
    },
    {
      order: 4,
      code: "RETURNED",
      label: "TOOL RESULT",
      title: "结果返回",
      headline: "工具返回结果，模型才能继续",
      summary: "执行结果进入当前任务状态；来源、口径和业务正确性仍需核对。",
      icon: CheckCircle2,
      tone: "text-emerald-600",
      line: "bg-emerald-500",
      visual: <div className="grid h-full grid-cols-[.42fr_.58fr] border-y border-emerald-200 bg-emerald-50/45"><div className="flex flex-col items-center justify-center border-r border-emerald-200"><span className="font-mono text-[clamp(11px,.82vw,16px)] tracking-[.16em] text-emerald-700">TOTAL</span><strong className="bg-gradient-to-br from-emerald-500 to-blue-600 bg-clip-text text-[clamp(76px,7.4vw,142px)] leading-none tracking-[-.08em] text-transparent">128</strong><span className="mt-[3%] text-[clamp(13px,1vw,19px)] text-slate-500">条参与统计的记录</span></div><div className="grid grid-cols-2 grid-rows-2">{[["销售","46"],["产品","31"],["研发","27"],["职能","24"]].map(([name,value],index) => <div className={cn("flex flex-col items-center justify-center", index % 2 === 0 && "border-r border-emerald-200", index < 2 && "border-b border-emerald-200")} key={name}><strong className="text-[clamp(26px,2.4vw,46px)] text-slate-950">{value}</strong><span className="mt-[2%] text-[clamp(12px,.92vw,18px)] text-slate-500">{name}</span></div>)}</div></div>,
    },
  ];
  const runtimeStates = [
    { code: "WAITING", fact: "等待模型提出工具调用", boundary: "还没有发生外部动作" },
    { code: "REQUESTED", fact: "收到分析报名表的调用意图", boundary: "意图不代表已获授权" },
    { code: "VALIDATED", fact: "工具、权限和参数检查完成", boundary: "运行环境允许执行" },
    { code: "RUNNING", fact: "正在读取“报名统计.xlsx”", boundary: "等待工具真实返回" },
    { code: "RETURNED", fact: "已收到工具返回：四部门共 128 人", boundary: "仍需核对来源、口径和业务正确性" },
  ];
  const activeStage = revealStep > 0 ? stages[revealStep - 1] : null;
  const runtimeState = runtimeStates[revealStep];

  return (
    <div className="h-full overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white p-[2.7%] font-mono text-slate-950 shadow-xl shadow-slate-950/5">
      <div className="flex h-[7%] items-start gap-2 border-b border-slate-200">
        <span className="size-2 rounded-full bg-rose-400" />
        <span className="size-2 rounded-full bg-amber-400" />
        <span className="size-2 rounded-full bg-emerald-400" />
        <span className="ml-3 text-[clamp(10px,.76vw,15px)] text-slate-400">task-run / tool-call-01</span>
        <span className="ml-auto text-[clamp(10px,.76vw,15px)] tracking-[.12em] text-slate-300">TYPICAL SUCCESS PATH</span>
      </div>

      <div className="relative grid h-[14%] grid-cols-4 border-b border-slate-200">
        <span className="absolute left-[5%] right-[5%] top-[58%] h-px bg-slate-200" />
        {stages.map((stage) => {
          const active = revealStep === stage.order;
          const completed = revealStep > stage.order;
          const StageIcon = stage.icon;
          return (
            <div className="relative z-10 flex items-center gap-[6%] px-[8%]" key={stage.code}>
              <span className={cn("flex size-[clamp(26px,2.2vw,42px)] shrink-0 items-center justify-center rounded-full border bg-white transition-all duration-500", active ? cn("scale-110 border-current shadow-[0_0_0_7px_rgba(37,99,235,.08)]", stage.tone) : completed ? "border-slate-300 text-slate-500" : "border-slate-200 text-slate-300")}><StageIcon className="size-[44%]" /></span>
              <div className={cn("transition-colors duration-500", active ? stage.tone : completed ? "text-slate-600" : "text-slate-300")}>
                <span className="block text-[clamp(10px,.76vw,15px)] tracking-[.12em]">0{stage.order}</span>
                <strong className="font-sans text-[clamp(12px,.98vw,19px)]">{stage.title}</strong>
              </div>
            </div>
          );
        })}
      </div>

      <div aria-live="polite" className="h-[55%] py-[2.5%]">
        {activeStage ? (
          <div className="grid h-full grid-cols-[.34fr_.66fr] gap-[5%] animate-in fade-in-0 slide-in-from-bottom-3 duration-500" key={activeStage.code}>
            <div className="flex flex-col justify-center">
              <span className={cn("text-[clamp(11px,.8vw,16px)] tracking-[.18em]", activeStage.tone)}>{activeStage.label}</span>
              <strong className="mt-[5%] font-sans text-[clamp(24px,2.15vw,42px)] leading-tight tracking-[-.045em]">{activeStage.headline}</strong>
              <p className="mt-[6%] font-sans text-[clamp(13px,1vw,19px)] leading-relaxed text-slate-500">{activeStage.summary}</p>
              <span className={cn("mt-[10%] h-1.5 w-[30%] rounded-full", activeStage.line)} />
            </div>
            <div className="min-h-0">{activeStage.visual}</div>
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center text-center animate-in fade-in-0 duration-500">
            <span className="text-[clamp(11px,.8vw,16px)] tracking-[.18em] text-blue-600">CONTROLLED EXECUTION</span>
            <strong className="mt-[3%] font-sans text-[clamp(28px,2.6vw,50px)] tracking-[-.05em]">工具调用，不是一句话。</strong>
            <p className="mt-[3%] font-sans text-[clamp(14px,1.08vw,21px)] text-slate-500">它是一段有意图、有检查、有执行、有返回的过程。</p>
          </div>
        )}
      </div>

      <div className="grid h-[18%] grid-cols-[.24fr_1.12fr_.82fr] items-center border-t border-slate-200 px-[1%] pt-[1.5%]">
        <div>
          <span className="text-[clamp(10px,.76vw,15px)] tracking-[.16em] text-blue-600">RUNTIME STATUS</span>
          <strong className="mt-[3%] block text-[clamp(14px,1.05vw,20px)] text-slate-950">{runtimeState.code}</strong>
        </div>
        <div className="border-l border-slate-200 px-[7%]">
          <span className="text-[clamp(10px,.76vw,15px)] text-slate-400">运行事实</span>
          <strong className="mt-[1.5%] block font-sans text-[clamp(15px,1.22vw,23px)] tracking-[-.02em] text-slate-900">{runtimeState.fact}</strong>
        </div>
        <div className="border-l border-slate-200 pl-[8%]">
          <span className="text-[clamp(10px,.76vw,15px)] text-slate-400">边界</span>
          <span className="mt-[2%] block font-sans text-[clamp(13px,1vw,19px)] text-slate-600">{runtimeState.boundary}</span>
        </div>
      </div>
    </div>
  );
}

export function AgentTriangle() {
  const stateItems = [
    { label: "DONE", title: "人数统计完成", detail: "四部门共 128 人", tone: "bg-emerald-100 text-emerald-700" },
    { label: "NOW", title: "正在读取访谈", detail: "建立结论与来源关系", tone: "bg-blue-100 text-blue-700" },
    { label: "WAIT", title: "一段来源待确认", detail: "必要时停止并询问", tone: "bg-amber-100 text-amber-700" },
  ];

  return <div className="grid h-full grid-rows-[auto_minmax(0,1fr)_auto] gap-[clamp(10px,.8vw,16px)] pb-[clamp(50px,3.4vw,66px)]">
    <section className="grid grid-cols-[.18fr_1fr_auto] items-center gap-[3%] rounded-[1.3rem] border border-cyan-200 bg-cyan-50 px-[3%] py-[clamp(10px,.72vw,14px)] text-cyan-950 shadow-sm">
      <div><Kicker>GOAL · 目标</Kicker><strong className="mt-[1%] block text-[clamp(14px,1.1vw,21px)]">可验收的交付</strong></div>
      <p className="text-[clamp(15px,1.2vw,23px)] font-semibold tracking-[-.02em]">形成一份有依据、数字可追溯的 5 页培训需求汇报</p>
      <span className="rounded-full border border-cyan-200 bg-white/75 px-[clamp(14px,1.2vw,23px)] py-[clamp(6px,.42vw,8px)] text-[clamp(11px,.86vw,16px)] font-medium text-cyan-800">完成条件明确</span>
    </section>

    <div className="grid min-h-0 grid-cols-[.31fr_.38fr_.31fr] gap-[2%]">
      <Reveal className="min-h-0" order={1}>
        <section className="flex h-full min-h-0 flex-col rounded-[1.55rem] border border-slate-200 bg-white px-[6%] py-[clamp(14px,1vw,20px)] shadow-[0_18px_45px_rgba(15,23,42,.06)]">
          <div><Kicker>STATE · 当前任务状态</Kicker><h2 className="mt-[2%] text-[clamp(18px,1.45vw,28px)] font-semibold tracking-[-.03em]">现在做到哪里？</h2></div>
          <div className="mt-[clamp(10px,.7vw,14px)] space-y-[clamp(7px,.5vw,10px)]">
            {stateItems.map(({ label, title, detail, tone }) => <div className="grid grid-cols-[auto_1fr] items-center gap-[4%] border-t border-slate-100 pt-[clamp(7px,.5vw,10px)]" key={label}><span className={cn("rounded-full px-[10px] py-[4px] font-mono text-[clamp(10px,.78vw,15px)]", tone)}>{label}</span><div><strong className="block text-[clamp(12px,1vw,19px)]">{title}</strong><span className="text-[clamp(11px,.82vw,16px)] text-slate-400">{detail}</span></div></div>)}
          </div>
        </section>
      </Reveal>

      <section className="relative flex min-h-0 flex-col items-center justify-center overflow-hidden rounded-[1.65rem] border border-blue-200 bg-gradient-to-b from-blue-50 to-white px-[8%] text-center shadow-[0_24px_60px_rgba(37,99,235,.09)]">
        <div className="absolute inset-x-[14%] top-[14%] h-[32%] rounded-full bg-blue-200/35 blur-3xl" />
        <span className="relative flex size-[clamp(54px,5vw,96px)] items-center justify-center rounded-[1.45rem] bg-blue-600 text-white shadow-[0_18px_35px_rgba(37,99,235,.24)]"><RefreshCw className="size-[44%]" /></span>
        <Kicker>AGENT RUNTIME · 智能体运行机制</Kicker>
        <h2 className="mt-[2%] text-[clamp(22px,2vw,38px)] font-semibold tracking-[-.045em] text-slate-950">任务推进器</h2>
        <p className="mt-[3%] max-w-[92%] text-[clamp(12px,.98vw,19px)] leading-relaxed text-slate-500">读取目标和当前状态，组织能力完成下一步，再依据真实结果更新任务。</p>
        <div className="mt-[6%] grid w-full grid-cols-3 items-center text-[clamp(11px,.86vw,16px)] font-medium text-blue-900"><span>围绕目标</span><span className="border-x border-blue-100">维护状态</span><span>持续推进</span></div>
      </section>

      <Reveal className="min-h-0" order={2}>
        <section className="flex h-full min-h-0 flex-col rounded-[1.55rem] border border-slate-200 bg-white px-[6%] py-[clamp(14px,1vw,20px)] shadow-[0_18px_45px_rgba(15,23,42,.06)]">
          <div><Kicker>CAPABILITIES · 能力来源</Kicker><h2 className="mt-[2%] text-[clamp(18px,1.45vw,28px)] font-semibold tracking-[-.03em]">智能体调用什么？</h2></div>
          <div className="mt-[clamp(12px,.9vw,17px)] grid flex-1 grid-rows-2 gap-[5%]">
            <div className="flex items-center gap-[5%] rounded-[1rem] border border-violet-200 bg-violet-50 px-[5%]"><span className="flex size-[clamp(38px,3.1vw,60px)] shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600"><BrainCircuit className="size-[48%]" /></span><div><Kicker>MODEL</Kicker><strong className="mt-[1%] block text-[clamp(13px,1.05vw,20px)] text-violet-950">判断与生成</strong><span className="text-[clamp(11px,.82vw,16px)] text-violet-800/60">决定下一步，形成内容</span></div></div>
            <div className="flex items-center gap-[5%] rounded-[1rem] border border-emerald-200 bg-emerald-50 px-[5%]"><span className="flex size-[clamp(38px,3.1vw,60px)] shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600"><Wrench className="size-[48%]" /></span><div><Kicker>TOOLS</Kicker><strong className="mt-[1%] block text-[clamp(13px,1.05vw,20px)] text-emerald-950">读取与执行</strong><span className="text-[clamp(11px,.82vw,16px)] text-emerald-800/60">接触文件，返回结果</span></div></div>
          </div>
        </section>
      </Reveal>
    </div>

    <Reveal order={3}>
      <section className="grid grid-cols-[.8fr_2fr_1fr] items-center gap-[2%] rounded-[1.2rem] border border-slate-200 bg-white px-[2.5%] py-[clamp(8px,.55vw,11px)] shadow-sm">
        <div><Kicker>LOOP · 循环</Kicker><strong className="mt-[1%] block text-[clamp(12px,.95vw,18px)]">根据结果决定下一步</strong></div>
        <div className="flex items-center justify-center gap-[2%] text-[clamp(11px,.86vw,16px)] font-medium text-slate-700"><span>读取状态</span><ArrowRight className="size-[1em] text-slate-300" /><span>决定下一步</span><ArrowRight className="size-[1em] text-slate-300" /><span>调用能力</span><ArrowRight className="size-[1em] text-slate-300" /><span>更新状态</span></div>
        <div className="flex justify-end gap-[3%] text-[clamp(11px,.82vw,16px)] font-medium"><span className="rounded-full bg-blue-50 px-[8%] py-[4%] text-blue-700">继续</span><span className="rounded-full bg-amber-50 px-[8%] py-[4%] text-amber-700">询问</span><span className="rounded-full bg-slate-100 px-[8%] py-[4%] text-slate-600">停止</span></div>
      </section>
    </Reveal>
  </div>;
}

export function AgentStateBoard() {
  const revealStep = Math.min(useRevealStep(), 3);
  const status = [
    { code: "READY", tone: "border-slate-200 bg-slate-100 text-slate-600" },
    { code: "RUNNING", tone: "border-blue-200 bg-blue-100 text-blue-700" },
    { code: "WAITING_INPUT", tone: "border-amber-200 bg-amber-100 text-amber-800" },
    { code: "WAITING_INPUT", tone: "border-amber-200 bg-amber-100 text-amber-800" },
  ][revealStep];
  const progressRows = [
    { label: "已完成", code: "DONE", title: "已收到报名表统计结果", detail: "工具返回：四部门共 128 人", tone: "bg-emerald-100 text-emerald-700", icon: CheckCircle2 },
    { label: "当前", code: "NOW", title: "正在处理 6 段访谈", detail: "建立结论与原文来源关系", tone: "bg-blue-100 text-blue-700", icon: RefreshCw },
    { label: "待完成", code: "TODO", title: "形成建议并生成 PPT", detail: "还要检查数字、来源和页数", tone: "bg-violet-100 text-violet-700", icon: ListChecks },
  ];

  return <div className="grid h-full grid-cols-[.62fr_.38fr] gap-[2%] pb-[clamp(50px,3.4vw,66px)]">
    <section className="flex min-h-0 flex-col overflow-hidden rounded-[1.65rem] border border-slate-200 bg-white shadow-[0_20px_55px_rgba(15,23,42,.07)]">
      <header className="flex items-center justify-between border-b border-slate-200 bg-slate-50/80 px-[4%] py-[clamp(8px,.55vw,11px)]">
        <div><Kicker>TASK STATE · report-001</Kicker><strong className="mt-[1%] block text-[clamp(14px,1.1vw,21px)]">培训需求汇报</strong></div>
        <span aria-live="polite" className={cn("rounded-full border px-[clamp(12px,1vw,19px)] py-[clamp(5px,.36vw,7px)] font-mono text-[clamp(10px,.78vw,15px)] transition-colors duration-500", status.tone)}>{status.code}</span>
      </header>

      <div className="grid grid-cols-[.18fr_1fr] items-center gap-[3%] border-b border-cyan-100 bg-cyan-50/65 px-[4%] py-[clamp(7px,.5vw,10px)]">
        <div><Kicker>GOAL · 目标</Kicker><strong className="mt-[1%] block text-[clamp(12px,.95vw,18px)] text-cyan-950">完成条件</strong></div>
        <p className="text-[clamp(13px,1.08vw,21px)] font-semibold text-cyan-950">形成一份有依据、数字可追溯的 5 页培训需求汇报</p>
      </div>

      <Reveal order={1}>
        <div className="divide-y divide-slate-100 px-[4%]">
          {progressRows.map(({ label, code, title, detail, tone, icon: Icon }) => <div className="grid grid-cols-[.18fr_auto_1fr] items-center gap-[3%] py-[clamp(6px,.42vw,8px)]" key={label}><div><Kicker>{label}</Kicker><span className={cn("mt-[3%] inline-block rounded-full px-[9px] py-[3px] font-mono text-[clamp(10px,.78vw,15px)]", tone)}>{code}</span></div><span className={cn("flex size-[clamp(34px,2.8vw,54px)] items-center justify-center rounded-xl", tone)}><Icon className="size-[46%]" /></span><div><strong className="block text-[clamp(13px,1.08vw,21px)]">{title}</strong><span className="mt-[1%] block text-[clamp(11px,.86vw,16px)] text-slate-500">{detail}</span></div></div>)}
        </div>
      </Reveal>

      <Reveal className="mx-[4%] mb-[clamp(10px,.7vw,14px)] mt-auto" order={2}>
        <div className="grid grid-cols-[.18fr_auto_1fr] items-center gap-[3%] rounded-[1rem] border border-amber-200 bg-amber-50 px-[3%] py-[clamp(6px,.42vw,8px)] text-amber-950">
          <div><Kicker>待确认</Kicker><span className="mt-[3%] inline-block rounded-full bg-amber-100 px-[9px] py-[3px] font-mono text-[clamp(10px,.78vw,15px)] text-amber-700">BLOCKED</span></div>
          <span className="flex size-[clamp(34px,2.8vw,54px)] items-center justify-center rounded-xl bg-amber-100 text-amber-600"><CircleAlert className="size-[46%]" /></span>
          <div><strong className="block text-[clamp(13px,1.08vw,21px)]">一段访谈缺少来源部门</strong><span className="mt-[1%] block text-[clamp(11px,.86vw,16px)] text-amber-800/65">信息不足，暂停并等待人工确认</span></div>
        </div>
      </Reveal>

    </section>

    <div className="flex min-h-0 flex-col gap-[3%]">
      <section className="flex min-h-0 flex-1 flex-col rounded-[1.65rem] border border-slate-200 bg-slate-50 px-[6%] py-[clamp(15px,1.15vw,22px)]">
        <div><Kicker>STATE → NEXT ACTION</Kicker><h2 className="mt-[2%] text-[clamp(20px,1.75vw,34px)] font-semibold tracking-[-.04em]">状态怎样决定下一步？</h2></div>
        <div className="mt-[clamp(14px,1vw,20px)] space-y-[clamp(9px,.66vw,13px)]">
          <Reveal order={1}><div className="grid grid-cols-[auto_1fr] items-center gap-[4%] rounded-[1rem] border border-emerald-200 bg-white px-[4%] py-[clamp(9px,.66vw,13px)]"><span className="flex size-[clamp(34px,2.8vw,54px)] items-center justify-center rounded-xl bg-emerald-100 text-emerald-600"><ArrowRight className="size-[45%]" /></span><div><Kicker>DONE + NOW</Kicker><strong className="mt-[1%] block text-[clamp(12px,1vw,19px)]">不重复统计，继续读取访谈</strong></div></div></Reveal>
          <Reveal order={2}><div className="grid grid-cols-[auto_1fr] items-center gap-[4%] rounded-[1rem] border border-amber-200 bg-white px-[4%] py-[clamp(9px,.66vw,13px)]"><span className="flex size-[clamp(34px,2.8vw,54px)] items-center justify-center rounded-xl bg-amber-100 text-amber-600"><CircleStop className="size-[45%]" /></span><div><Kicker>BLOCKED</Kicker><strong className="mt-[1%] block text-[clamp(12px,1vw,19px)]">暂停任务，询问来源部门</strong></div></div></Reveal>
          <Reveal order={3}><div className="grid grid-cols-[auto_1fr] items-center gap-[4%] rounded-[1rem] border border-blue-200 bg-white px-[4%] py-[clamp(9px,.66vw,13px)]"><span className="flex size-[clamp(34px,2.8vw,54px)] items-center justify-center rounded-xl bg-blue-100 text-blue-600"><Database className="size-[45%]" /></span><div><Kicker>CHECKPOINT</Kicker><strong className="mt-[1%] block text-[clamp(12px,1vw,19px)]">恢复进度，或交给人工接管</strong></div></div></Reveal>
        </div>
      </section>

      <Reveal order={3}>
        <section className="rounded-[1.2rem] border border-violet-200 bg-violet-50 px-[6%] py-[clamp(10px,.72vw,14px)] text-violet-950"><Kicker>STATE ≠ CONTEXT</Kicker><div className="mt-[2%] flex items-center justify-between gap-[4%] text-[clamp(11px,.88vw,17px)] font-medium"><span>完整任务状态</span><ArrowRight className="size-[1.1em] text-violet-400" /><span>筛选相关部分</span><ArrowRight className="size-[1.1em] text-violet-400" /><span>本次模型上下文</span></div></section>
      </Reveal>
    </div>
  </div>;
}

export function AgentLoop() {
  const nodes = [
    { order: 1, label: "DECIDE", title: "判断", question: "下一步是什么？", text: "读取目标、当前状态和已有结果", accent: "from-cyan-400 to-blue-500", tone: "text-cyan-700" },
    { order: 2, label: "ACT", title: "行动", question: "调用什么能力？", text: "读取、统计、生成或检查", accent: "from-blue-500 to-indigo-500", tone: "text-blue-700" },
    { order: 3, label: "OBSERVE", title: "观察", question: "实际发生了什么？", text: "接收结果、错误和权限反馈", accent: "from-indigo-500 to-violet-500", tone: "text-indigo-700" },
    { order: 4, label: "UPDATE", title: "更新", question: "继续还是停止？", text: "更新状态，重试、询问或完成", accent: "from-violet-500 to-fuchsia-500", tone: "text-violet-700" },
  ];
  const revealStep = Math.min(useRevealStep(), nodes.length);
  const states = [
    { code: "READY", title: "人数统计完成，访谈材料待处理", next: "判断怎样建立来源关系" },
    { code: "DECIDED", title: "决定读取 6 段访谈及来源", next: "调用文档读取工具" },
    { code: "RUNNING", title: "工具正在提取访谈与来源字段", next: "等待真实执行结果" },
    { code: "OBSERVED", title: "发现 1 段访谈缺少来源部门", next: "把缺失信息写入任务状态" },
    { code: "WAITING_INPUT", title: "状态已更新：来源信息不完整", next: "暂停并询问来源部门" },
  ];
  const state = states[revealStep];

  return (
    <div className="relative mx-auto flex h-full w-[94%] flex-col overflow-hidden">
      <div className="pointer-events-none absolute left-[24%] top-[8%] h-[52%] w-[52%] rounded-full bg-gradient-to-r from-cyan-200/35 via-blue-200/25 to-violet-200/35 blur-[80px]" />

      <div className="relative grid h-[68%] grid-cols-4 border-y border-slate-200">
        <div className="absolute left-[3%] right-[3%] top-[52%] h-px bg-slate-200" />
        <div className="absolute left-[3%] top-[52%] h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 transition-[width] duration-700" style={{ width: `${Math.max(0, revealStep - 1) * 31}%` }} />
        <div className={cn("pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center text-center transition-all duration-500", revealStep === 0 ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0")}>
          <span className="font-mono text-[clamp(11px,.78vw,15px)] tracking-[.2em] text-blue-600">AGENT LOOP</span>
          <strong className="mt-[2%] text-[clamp(28px,3vw,58px)] tracking-[-.055em] text-slate-950">真实结果，会改变下一步。</strong>
        </div>

        {nodes.map(({ order, label, title, question, text, accent, tone }) => {
        const active = revealStep === order;
        const completed = revealStep > order;
        return (
          <Reveal className="relative h-full border-l border-slate-200 first:border-l-0" key={title} order={order}>
            <div className={cn(
              "relative flex h-full flex-col px-[10%] pb-[8%] pt-[7%] transition-all duration-700",
              active ? "bg-white/55" : completed ? "opacity-65" : "opacity-35",
            )}>
              <span className={cn("font-mono text-[clamp(11px,.8vw,16px)] font-semibold tracking-[.18em]", active ? tone : "text-slate-400")}>0{order} · {label}</span>
              <div className="mt-[4%] flex items-end justify-between">
                <strong className="text-[clamp(28px,2.7vw,52px)] tracking-[-.06em] text-slate-950">{title}</strong>
                <span className={cn("mb-[3%] size-2.5 rounded-full transition-all duration-500", active ? "scale-125 bg-blue-600 shadow-[0_0_0_8px_rgba(37,99,235,.1)]" : "bg-slate-300")} />
              </div>
              <div className="mt-auto">
                <span className={cn("mb-[8%] block h-1.5 w-[30%] rounded-full bg-gradient-to-r", accent)} />
                <strong className="block text-[clamp(14px,1.1vw,21px)] font-medium text-slate-800">{question}</strong>
                <p className="mt-[4%] text-[clamp(13px,.95vw,18px)] leading-relaxed text-slate-500">{text}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
      </div>

      <div className="relative mt-auto grid h-[25%] grid-cols-[.28fr_1.2fr_.9fr] items-center border-b border-slate-200 px-[2%]">
        <div>
          <span className="font-mono text-[clamp(10px,.76vw,15px)] tracking-[.18em] text-blue-600">LIVE TASK</span>
          <div className="mt-[7%] flex items-center gap-[7%] text-[clamp(12px,.9vw,17px)] text-slate-400"><RefreshCw className={cn("size-[1.1em] transition-transform duration-700", revealStep > 0 && "rotate-180")} />{state.code}</div>
        </div>
        <div className="border-l border-slate-200 px-[8%]">
          <span className="text-[clamp(11px,.78vw,15px)] text-slate-400">当前状态</span>
          <strong className="mt-[2%] block text-[clamp(18px,1.55vw,30px)] leading-tight tracking-[-.035em] text-slate-950">{state.title}</strong>
        </div>
        <div className="border-l border-slate-200 pl-[10%]">
          <span className="text-[clamp(11px,.78vw,15px)] text-slate-400">接下来</span>
          <strong className="mt-[3%] block text-[clamp(14px,1.05vw,20px)] font-medium text-slate-700">{state.next}</strong>
        </div>
      </div>
    </div>
  );
}

export function RelationshipNest() {
  const revealStep = Math.min(useRevealStep(), 3);
  const sharedCapabilities = [
    { label: "界面", icon: AppWindow },
    { label: "文件", icon: FileText },
    { label: "权限", icon: KeyRound },
    { label: "任务记录", icon: Database },
  ];

  return <div className="h-full pb-[clamp(50px,3.4vw,66px)]">
    <section className="flex h-full min-h-0 flex-col overflow-hidden rounded-[1.8rem] border border-cyan-200 bg-slate-50 shadow-[0_22px_60px_rgba(15,23,42,.07)]">
      <header className="grid grid-cols-[1fr_1.25fr] items-center gap-[4%] border-b border-slate-200 bg-white px-[4%] py-[clamp(9px,.62vw,12px)]">
        <div className="flex min-w-0 items-center gap-[4%]"><span className="flex size-[clamp(42px,3.2vw,62px)] shrink-0 items-center justify-center rounded-[1rem] bg-cyan-100 text-cyan-600"><AppWindow className="size-[46%]" /></span><div className="min-w-0"><Kicker>AI APPLICATION · AI 应用</Kicker><h2 className="mt-[1%] whitespace-nowrap text-[clamp(18px,1.38vw,27px)] font-semibold tracking-[-.035em]">WorkBuddy · 完整产品与运行环境</h2></div></div>
        <div className="grid grid-cols-4 gap-[2%]">{sharedCapabilities.map(({ label, icon: Icon }) => <div className="flex items-center justify-center gap-[7%] rounded-full border border-slate-200 bg-slate-50 px-[5%] py-[clamp(7px,.5vw,10px)] text-[clamp(11px,.86vw,16px)] font-medium text-slate-600" key={label}><Icon className="size-[1.1em] text-slate-400" />{label}</div>)}</div>
      </header>

      <div className="relative grid min-h-0 flex-1 grid-cols-2 grid-rows-1 gap-[2%] p-[2.2%]">
        <div className={cn("pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center text-center transition-all duration-500", revealStep === 0 ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0")}><Kicker>TWO WAYS TO ORGANIZE AI CAPABILITIES</Kicker><strong className="mt-[2%] text-[clamp(24px,2.2vw,42px)] tracking-[-.045em] text-slate-950">同一个应用，可以采用不同运行方式。</strong><p className="mt-[2%] text-[clamp(13px,1vw,19px)] text-slate-500">普通功能可以直接调用模型；复杂任务可以选择运行智能体。</p></div>

        <Reveal className="h-full min-h-0" order={1}>
          <article className="flex h-full min-h-0 flex-col rounded-[1.45rem] border border-violet-200 bg-white px-[5%] py-[clamp(11px,.78vw,15px)] shadow-sm">
            <div className="flex items-start justify-between"><div><Kicker>PATH A · 普通对话</Kicker><h3 className="mt-[1%] text-[clamp(18px,1.5vw,29px)] font-semibold tracking-[-.03em]">应用直接调用大模型</h3></div><span className="rounded-full bg-slate-100 px-[4%] py-[2%] text-[clamp(10px,.78vw,15px)] font-medium text-slate-500">不需要智能体</span></div>
            <div className="my-auto grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-[2%] py-[2%] text-center">
              <div className="rounded-[1rem] border border-blue-200 bg-blue-50 px-[5%] py-[7%] text-blue-950"><MessageSquareText className="mx-auto size-[clamp(30px,2.6vw,50px)] text-blue-500" /><strong className="mt-[4%] block text-[clamp(12px,1vw,19px)]">当前上下文</strong></div><ArrowRight className="text-slate-300" />
              <div className="rounded-[1rem] border border-violet-200 bg-violet-50 px-[5%] py-[7%] text-violet-950"><BrainCircuit className="mx-auto size-[clamp(30px,2.6vw,50px)] text-violet-500" /><strong className="mt-[4%] block text-[clamp(12px,1vw,19px)]">大模型</strong></div><ArrowRight className="text-slate-300" />
              <div className="rounded-[1rem] border border-slate-200 bg-slate-50 px-[5%] py-[7%] text-slate-950"><FileOutput className="mx-auto size-[clamp(30px,2.6vw,50px)] text-slate-400" /><strong className="mt-[4%] block text-[clamp(12px,1vw,19px)]">一次回答</strong></div>
            </div>
            <p className="border-t border-slate-100 pt-[clamp(8px,.58vw,11px)] text-[clamp(11px,.86vw,16px)] text-slate-500">应用组织一次输入，模型生成一次输出，下一步通常由用户决定。</p>
          </article>
        </Reveal>

        <Reveal className="h-full min-h-0" order={2}>
          <article className="flex h-full min-h-0 flex-col rounded-[1.45rem] border border-emerald-200 bg-white px-[5%] py-[clamp(11px,.78vw,15px)] shadow-sm">
            <div className="flex items-start justify-between"><div><Kicker>PATH B · 多步任务</Kicker><h3 className="mt-[1%] text-[clamp(18px,1.5vw,29px)] font-semibold tracking-[-.03em]">应用内部运行智能体</h3></div><span className="rounded-full bg-emerald-100 px-[4%] py-[2%] text-[clamp(10px,.78vw,15px)] font-medium text-emerald-700">可选机制</span></div>
            <div className="my-auto grid grid-cols-[.9fr_1.1fr] gap-[3%]">
              <div className="flex flex-col items-center justify-center rounded-[1rem] border border-emerald-200 bg-emerald-50 px-[6%] text-center text-emerald-950"><RefreshCw className="size-[clamp(34px,3.3vw,64px)] text-emerald-500" /><strong className="mt-[5%] text-[clamp(14px,1.18vw,23px)]">智能体运行机制</strong><span className="mt-[3%] text-[clamp(11px,.86vw,16px)] text-emerald-800/60">目标 · 状态 · 循环</span></div>
              <div className="grid grid-rows-2 gap-[5%]"><div className="flex items-center gap-[5%] rounded-[1rem] border border-violet-200 bg-violet-50 px-[6%]"><BrainCircuit className="size-[clamp(32px,2.8vw,54px)] text-violet-500" /><div><Kicker>MODEL</Kicker><strong className="mt-[1%] block text-[clamp(12px,1vw,19px)] text-violet-950">判断与生成</strong></div></div><div className="flex items-center gap-[5%] rounded-[1rem] border border-blue-200 bg-blue-50 px-[6%]"><Wrench className="size-[clamp(32px,2.8vw,54px)] text-blue-500" /><div><Kicker>TOOLS</Kicker><strong className="mt-[1%] block text-[clamp(12px,1vw,19px)] text-blue-950">读取与执行</strong></div></div></div>
            </div>
            <p className="border-t border-slate-100 pt-[clamp(8px,.58vw,11px)] text-[clamp(11px,.86vw,16px)] text-slate-500">智能体组织模型、工具和状态持续推进；一个应用可以运行一个或多个智能体。</p>
          </article>
        </Reveal>
      </div>

      <Reveal order={3}>
        <footer className="grid grid-cols-3 divide-x divide-slate-200 border-t border-slate-200 bg-white px-[4%] py-[clamp(8px,.55vw,11px)]">
          <div className="pr-[6%]"><Kicker>APPLICATION · 产品</Kicker><strong className="mt-[1%] block text-[clamp(12px,.98vw,19px)]">用户操作的完整软件</strong></div>
          <div className="px-[6%]"><Kicker>MODEL · 能力</Kicker><strong className="mt-[1%] block text-[clamp(12px,.98vw,19px)]">普通功能和智能体都可以调用</strong></div>
          <div className="pl-[6%]"><Kicker>AGENT · 机制</Kicker><strong className="mt-[1%] block text-[clamp(12px,.98vw,19px)]">应用内部可选的任务推进方式</strong></div>
        </footer>
      </Reveal>
    </section>
  </div>;
}

export function ResponsibilitySwimlanes() {
  const revealStep = Math.min(useRevealStep(), 4);
  const lanes = [
    { order: 1, label: "MODEL", role: "大模型", verb: "生成", detail: "给出内容与调用意图", evidence: ["问题归纳", "建议草稿", "调用意图"], check: "结论有依据吗？", icon: BrainCircuit, tone: "border-cyan-200 bg-cyan-50", iconTone: "bg-cyan-500 text-white", accent: "text-cyan-700" },
    { order: 2, label: "TOOLS", role: "工具", verb: "执行", detail: "真正接触文件和系统", evidence: ["读取 128 行", "report.pptx", "success / error"], check: "动作真的成功吗？", icon: Wrench, tone: "border-violet-200 bg-violet-50", iconTone: "bg-violet-500 text-white", accent: "text-violet-700" },
    { order: 3, label: "AGENT", role: "智能体", verb: "推进", detail: "组织步骤并维护状态", evidence: ["当前步骤 3 / 5", "已重试 1 次", "待确认 3 项"], check: "流程完整且会停止吗？", icon: Bot, tone: "border-blue-200 bg-blue-50", iconTone: "bg-blue-600 text-white", accent: "text-blue-700" },
    { order: 4, label: "HUMAN", role: "人", verb: "负责", detail: "定义边界并验收结果", evidence: ["任务目标", "授权范围", "验收结论"], check: "结果可用且可负责吗？", icon: UserRoundCheck, tone: "border-amber-200 bg-amber-50", iconTone: "bg-amber-500 text-white", accent: "text-amber-700" },
  ];
  return <div className="h-full pb-[clamp(50px,3.4vw,66px)]">
    <div className="grid h-full min-h-0 grid-cols-[.32fr_.68fr] overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,23,42,.07)]">
      <aside className="relative flex min-h-0 flex-col overflow-hidden border-r border-slate-200 bg-slate-950 px-[7%] py-[5%] text-white">
        <div className="absolute right-[2%] top-[-10%] size-[46%] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative"><Kicker>CASE · 培训需求汇报</Kicker><span className="mt-[clamp(12px,1vw,19px)] flex size-[clamp(44px,3.2vw,62px)] items-center justify-center rounded-[1rem] bg-white/10 text-cyan-300 ring-1 ring-white/10"><FileOutput className="size-[46%]" /></span><h2 className="mt-[clamp(12px,.95vw,18px)] text-[clamp(19px,1.58vw,30px)] font-semibold leading-tight tracking-[-.04em]">文件已经生成，<br />分别是谁做了什么？</h2><p className="mt-[clamp(8px,.62vw,12px)] text-[clamp(12px,.92vw,18px)] leading-relaxed text-slate-400">动作、证据和责任不能混在一起。</p></div>
        <dl className="relative mt-auto grid grid-cols-2 gap-[4%] border-t border-white/10 pt-[4%] text-[clamp(11px,.82vw,16px)]"><div><dt className="font-mono text-[clamp(10px,.76vw,15px)] tracking-[.15em] text-slate-500">TASK</dt><dd className="mt-[2%] leading-snug text-slate-200">汇总报名表与访谈</dd></div><div><dt className="font-mono text-[clamp(10px,.76vw,15px)] tracking-[.15em] text-slate-500">DELIVERABLE</dt><dd className="mt-[2%] leading-snug text-slate-200">5 页内需求汇报</dd></div></dl>
        <div className="relative mt-[4%] rounded-[.9rem] border border-amber-300/20 bg-amber-300/10 px-[5%] py-[3%] text-[clamp(11px,.86vw,16px)] font-medium leading-relaxed text-amber-100">做出了动作，不等于承担了责任。</div>
      </aside>

      <section className="grid min-h-0 grid-rows-[auto_1fr] bg-slate-50/70">
        <header className="flex items-center justify-between border-b border-slate-200 bg-white px-[4%] py-[clamp(8px,.55vw,11px)]"><div className="flex items-baseline gap-[clamp(14px,1.2vw,23px)]"><Kicker>FOUR RESPONSIBILITY RECEIPTS</Kicker><strong className="text-[clamp(15px,1.12vw,22px)]">四类角色，留下四种不同凭证</strong></div><span className="font-mono text-[clamp(10px,.78vw,15px)] text-slate-400">{String(revealStep).padStart(2, "0")} / 04</span></header>
        <div className="grid min-h-0 grid-rows-4 gap-[1.5%] p-[1.8%]">
          {lanes.map(({ order, label, role, verb, detail, evidence, check, icon: Icon, tone, iconTone, accent }) => <article className={cn("grid min-h-0 grid-cols-[1fr_1.32fr_.88fr] items-center gap-[2.5%] rounded-[1.05rem] border px-[2.5%] transition-all duration-300", tone, revealStep >= order ? "opacity-100 shadow-sm" : "opacity-30 grayscale")} key={role}>
            <div className="flex min-w-0 items-center gap-[5%]"><span className={cn("flex size-[clamp(38px,2.75vw,53px)] shrink-0 items-center justify-center rounded-[.9rem] shadow-sm", iconTone)}><Icon className="size-[46%]" /></span><div className="min-w-0"><Kicker>{label} · {role}</Kicker><div className="flex min-w-0 items-baseline gap-[7%]"><strong className={cn("block shrink-0 whitespace-nowrap text-[clamp(18px,1.4vw,27px)] tracking-[-.04em]", accent)}>{verb}</strong><span className="truncate text-[clamp(10px,.76vw,15px)] text-slate-500">{detail}</span></div></div></div>
            <Reveal className="min-w-0" order={order}><div><span className="font-mono text-[clamp(10px,.76vw,15px)] font-semibold tracking-[.14em] text-slate-400">本次任务留下的证据</span><div className="mt-[2%] flex flex-nowrap gap-[2%]">{evidence.map(item => <span className="whitespace-nowrap rounded-full border border-white bg-white/85 px-[3%] py-[1.5%] text-[clamp(10px,.76vw,15px)] font-medium text-slate-700 shadow-sm" key={item}>{item}</span>)}</div></div></Reveal>
            <Reveal order={order}><div className="rounded-[.8rem] border border-white bg-white/80 px-[6%] py-[4%]"><Kicker>CHECK</Kicker><strong className="mt-[2%] block text-[clamp(11px,.86vw,16px)] leading-snug text-slate-700">{check}</strong></div></Reveal>
          </article>)}
        </div>
      </section>
    </div>
  </div>;
}

export function EvidenceTimeline() {
  const revealStep = Math.min(useRevealStep(), 6);
  const status = [
    ["READY", "等待任务"],
    ["RECEIVED", "任务已登记"],
    ["READ", "事实已读取"],
    ["CONTEXT", "上下文已组装"],
    ["DRAFT", "草稿已生成"],
    ["REVIEWED", "可提交验收"],
    ["ACCEPTED", "验收完成"],
  ][revealStep];
  const runtimeStages = [
    { order: 2, label: "TOOL", title: "工具读取", subtitle: "读取真实材料", icon: FileSearch, tone: "border-violet-200 bg-violet-50", iconTone: "bg-violet-500", evidence: ["128 行报名数据 · 6 段访谈", "来源位置"] },
    { order: 3, label: "CONTEXT", title: "上下文快照", subtitle: "组织本次输入", icon: MessageSquareText, tone: "border-blue-200 bg-blue-50", iconTone: "bg-blue-500", evidence: ["数字事实 · 相关原文", "规则与当前状态"] },
    { order: 4, label: "MODEL", title: "模型草稿", subtitle: "生成结构和内容", icon: BrainCircuit, tone: "border-cyan-200 bg-cyan-50", iconTone: "bg-cyan-500", evidence: ["3 个问题 · 对应依据", "3 条建议 · 3 项待确认"] },
  ];

  return <div className="h-full pb-[clamp(50px,3.4vw,66px)]">
    <section className="grid h-full min-h-0 grid-rows-[auto_1fr] overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,23,42,.07)]">
      <header className="flex items-center justify-between border-b border-slate-200 bg-slate-950 px-[3%] py-[clamp(9px,.62vw,12px)] text-white"><div className="flex items-center gap-[clamp(14px,1.2vw,23px)]"><span className="flex size-[clamp(34px,2.5vw,48px)] items-center justify-center rounded-[.8rem] bg-white/10 text-cyan-300"><AppWindow className="size-[48%]" /></span><div><Kicker>TASK RUN · WB-014</Kicker><strong className="mt-[1%] block text-[clamp(15px,1.18vw,23px)]">培训需求汇报</strong></div></div><div className="flex items-center gap-[clamp(18px,2vw,38px)]"><span className="text-[clamp(11px,.86vw,16px)] text-slate-400">报名表.xlsx · 访谈记录.docx</span><span className="rounded-full border border-white/10 bg-white/10 px-[clamp(12px,1.15vw,22px)] py-[clamp(5px,.36vw,7px)] font-mono text-[clamp(10px,.78vw,15px)] text-cyan-200">{status[0]} · {status[1]}</span></div></header>

      <div className="grid min-h-0 grid-cols-[.88fr_auto_2.5fr_auto_.88fr] items-stretch gap-[1.4%] p-[2%]">
        <article className={cn("flex min-h-0 flex-col rounded-[1.3rem] border border-blue-200 bg-blue-50 p-[5%] transition-all duration-300", revealStep >= 1 ? "opacity-100 shadow-md" : "opacity-30 grayscale")}>
          <div className="flex items-center justify-between"><span className="flex size-[clamp(36px,2.7vw,52px)] items-center justify-center rounded-[.9rem] bg-blue-600 text-white"><AppWindow className="size-[46%]" /></span><span className="font-mono text-[clamp(10px,.78vw,15px)] text-blue-400">01</span></div>
          <Kicker>APPLICATION INPUT</Kicker><h3 className="mt-[1%] text-[clamp(17px,1.35vw,26px)] font-semibold tracking-[-.035em] text-blue-950">任务单</h3><p className="mt-[2%] text-[clamp(11px,.84vw,16px)] leading-relaxed text-blue-900/60">登记目标、材料、权限和验收标准。</p>
          <Reveal className="mt-auto" order={1}><div className="space-y-[3%] border-t border-blue-200 pt-[4%]">{["生成 5 页内需求汇报", "2 份指定材料", "4 项验收标准"].map(item => <div className="flex items-start gap-[4%] text-[clamp(11px,.86vw,16px)] font-medium text-blue-950" key={item}><CheckCircle2 className="mt-[.15em] size-[1em] shrink-0 text-blue-500" />{item}</div>)}</div></Reveal>
        </article>

        <ArrowRight className="my-auto size-[clamp(20px,1.6vw,31px)] text-slate-300" />

        <section className="flex min-h-0 flex-col overflow-hidden rounded-[1.4rem] border border-emerald-200 bg-emerald-50/45">
          <header className="flex shrink-0 items-center justify-between border-b border-emerald-200 bg-white/75 px-[3%] py-[clamp(6px,.42vw,8px)]"><div className="flex min-w-0 flex-1 items-center gap-[3%]"><span className="flex size-[clamp(30px,2.15vw,41px)] shrink-0 items-center justify-center rounded-[.7rem] bg-emerald-500 text-white"><Bot className="size-[50%]" /></span><div className="flex min-w-0 items-baseline gap-[clamp(12px,1vw,19px)]"><Kicker>AGENT RUNTIME</Kicker><strong className="whitespace-nowrap text-[clamp(13px,1vw,19px)] text-emerald-950">智能体组织中间过程</strong></div></div><span className="shrink-0 rounded-full bg-emerald-100 px-[3%] py-[1.2%] text-[clamp(10px,.78vw,15px)] font-medium text-emerald-700">目标 · 状态 · 循环</span></header>

          <div className="grid min-h-0 flex-1 grid-cols-3 gap-[2%] p-[2%]">
            {runtimeStages.map(({ order, label, title, icon: Icon, tone, iconTone, evidence }) => <article className={cn("flex min-h-0 flex-col rounded-[1.05rem] border p-[4%] transition-all duration-300", tone, revealStep >= order ? "opacity-100 shadow-sm" : "opacity-30 grayscale")} key={title}><div className="flex items-center gap-[5%]"><span className={cn("flex size-[clamp(32px,2.25vw,43px)] shrink-0 items-center justify-center rounded-[.75rem] text-white", iconTone)}><Icon className="size-[48%]" /></span><div className="min-w-0"><Kicker>0{order} · {label}</Kicker><h3 className="mt-[1%] text-[clamp(15px,1.12vw,22px)] font-semibold tracking-[-.03em]">{title}</h3></div></div><Reveal className="mt-auto" order={order}><div className="space-y-[2%] border-t border-black/5 pt-[4%]">{evidence.map(item => <div className="flex items-center gap-[4%] text-[clamp(10px,.78vw,15px)] font-medium leading-snug text-slate-700" key={item}><span className={cn("size-1.5 shrink-0 rounded-full", iconTone)} />{item}</div>)}</div></Reveal></article>)}
          </div>

          <div className={cn("mx-[2%] mb-[2%] flex shrink-0 items-center justify-between rounded-[.9rem] border border-emerald-200 bg-white px-[3%] py-[1.6%] transition-all duration-300", revealStep >= 5 ? "opacity-100 shadow-sm" : "opacity-30 grayscale")}><div className="flex min-w-0 items-center gap-[3%]"><RefreshCw className={cn("size-[clamp(21px,1.6vw,31px)] shrink-0 text-emerald-500 transition-transform duration-700", revealStep >= 5 && "rotate-180")} /><div className="min-w-0"><Kicker>05 · AGENT CONTROL</Kicker><strong className="mt-[1%] block whitespace-nowrap text-[clamp(11px,.88vw,17px)] text-emerald-950">观察结果 → 继续 / 重试 / 停止</strong></div></div><Reveal order={5}><div className="flex shrink-0 gap-[clamp(6px,.55vw,11px)] text-[clamp(10px,.78vw,15px)]"><span className="rounded-full bg-slate-100 px-[clamp(9px,.75vw,14px)] py-[clamp(4px,.3vw,6px)] text-slate-600">step 4 / 5</span><span className="rounded-full bg-amber-100 px-[clamp(9px,.75vw,14px)] py-[clamp(4px,.3vw,6px)] text-amber-700">3 项待确认</span></div></Reveal></div>
        </section>

        <ArrowRight className="my-auto size-[clamp(20px,1.6vw,31px)] text-slate-300" />

        <article className={cn("flex min-h-0 flex-col rounded-[1.3rem] border border-amber-200 bg-amber-50 p-[5%] transition-all duration-300", revealStep >= 6 ? "opacity-100 shadow-md" : "opacity-30 grayscale")}><div className="flex items-center justify-between"><span className="flex size-[clamp(36px,2.7vw,52px)] items-center justify-center rounded-[.9rem] bg-amber-500 text-white"><UserRoundCheck className="size-[46%]" /></span><span className="font-mono text-[clamp(10px,.78vw,15px)] text-amber-400">06</span></div><Kicker>HUMAN ACCEPTANCE</Kicker><h3 className="mt-[1%] text-[clamp(17px,1.35vw,26px)] font-semibold tracking-[-.035em] text-amber-950">验收单</h3><p className="mt-[2%] text-[clamp(11px,.84vw,16px)] leading-relaxed text-amber-900/60">核对原件与过程记录后决定交付。</p><Reveal className="mt-auto" order={6}><div className="space-y-[3%] border-t border-amber-200 pt-[4%]">{["数字与源文件一致", "结论能够回到原文", "待确认事项已标记"].map(item => <div className="flex items-start gap-[4%] text-[clamp(11px,.86vw,16px)] font-medium text-amber-950" key={item}><ClipboardCheck className="mt-[.15em] size-[1em] shrink-0 text-amber-500" />{item}</div>)}<div className="rounded-full bg-emerald-500 px-[5%] py-[2%] text-center text-[clamp(11px,.86vw,16px)] font-semibold text-white">允许交付</div></div></Reveal></article>
      </div>
    </section>
  </div>;
}

export function FailureBranches() {
  const strategies = [
    { order: 1, title: "补充信息", status: "等待输入", trigger: "3 条记录缺少部门", response: "标记待确认，询问材料负责人", tone: "border-cyan-200 bg-cyan-50", accent: "bg-cyan-500", text: "text-cyan-950", icon: FileInput },
    { order: 2, title: "有限重试", status: "最多 2 次", trigger: "表格字段名称不一致", response: "调整字段映射；仍失败则接管", tone: "border-amber-200 bg-amber-50", accent: "bg-amber-500", text: "text-amber-950", icon: RefreshCw },
    { order: 3, title: "等待授权", status: "暂停执行", trigger: "访谈文件无读取权限", response: "申请授权，不绕过权限继续", tone: "border-violet-200 bg-violet-50", accent: "bg-violet-500", text: "text-violet-950", icon: LockKeyhole },
    { order: 4, title: "停止并接管", status: "阻止交付", trigger: "结论无依据或数字不一致", response: "返回修改，由人决定是否交付", tone: "border-rose-200 bg-rose-50", accent: "bg-rose-500", text: "text-rose-950", icon: Hand },
  ];
  return <div className="h-full pb-[4.5%]">
    <div className="grid h-[24%] grid-cols-[1fr_.13fr_1fr_.13fr_1.15fr] items-center gap-[1.5%]">
      <div className="flex h-full items-center gap-[5%] rounded-[1.3rem] border border-emerald-200 bg-emerald-50 px-[7%] text-emerald-950 shadow-sm"><span className="flex size-[clamp(42px,3.5vw,66px)] shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white"><Play className="size-[42%]" /></span><div><Kicker>TASK RUNNING</Kicker><strong className="mt-[2%] block text-[clamp(16px,1.3vw,25px)]">按当前状态推进</strong></div></div>
      <ArrowRight className="mx-auto size-[48%] text-slate-300" />
      <div className="flex h-full items-center gap-[5%] rounded-[1.3rem] border border-rose-200 bg-rose-50 px-[7%] text-rose-950 shadow-sm"><span className="flex size-[clamp(42px,3.5vw,66px)] shrink-0 items-center justify-center rounded-full bg-rose-500 text-white"><CircleAlert className="size-[42%]" /></span><div><Kicker>OBSERVATION</Kicker><strong className="mt-[2%] block text-[clamp(16px,1.3vw,25px)]">发现结果与预期不同</strong></div></div>
      <ArrowRight className="mx-auto size-[48%] text-slate-300" />
      <div className="flex h-full items-center gap-[5%] rounded-[1.3rem] border border-slate-300 bg-white px-[7%] text-slate-950 shadow-sm"><span className="flex size-[clamp(42px,3.5vw,66px)] shrink-0 items-center justify-center rounded-full bg-slate-800 text-white"><CircleStop className="size-[42%]" /></span><div><Kicker>CONTROL POINT</Kicker><strong className="mt-[2%] block text-[clamp(16px,1.3vw,25px)]">先判断，不盲目继续</strong></div></div>
    </div>

    <div className="relative mt-[3%] grid h-[68%] grid-cols-4 gap-[2%]">
      <span className="absolute left-[6%] right-[6%] top-0 h-px bg-[linear-gradient(90deg,#67e8f9,#fcd34d,#c4b5fd,#fda4af)]" />
      {strategies.map(({ order, title, status, trigger, response, tone, accent, text, icon: Icon }) => <Reveal className="min-h-0 pt-[4%]" key={title} order={order}><article className={cn("relative flex h-full min-h-0 flex-col overflow-hidden rounded-[1.35rem] border p-[5.5%] shadow-[0_14px_40px_rgba(15,23,42,.06)]", tone, text)}><span className={cn("absolute inset-x-0 top-0 h-1", accent)} /><div className="flex items-center justify-between gap-[5%]"><span className={cn("flex size-[clamp(36px,2.7vw,52px)] items-center justify-center rounded-[.8rem] text-white", accent)}><Icon className="size-[46%]" /></span><span className="rounded-full border border-current/15 bg-white/70 px-[4%] py-[1.5%] text-[clamp(10px,.76vw,15px)] font-medium">{status}</span></div><Kicker>0{order} · RESPONSE</Kicker><h3 className="mt-[1%] text-[clamp(18px,1.4vw,27px)] font-semibold tracking-[-.035em]">{title}</h3><div className="mt-auto space-y-[3%] border-t border-current/10 pt-[4%]"><div><span className="text-[clamp(10px,.76vw,15px)] opacity-50">系统发现</span><p className="mt-[1%] text-[clamp(12px,.95vw,18px)] font-medium leading-snug">{trigger}</p></div><div><span className="text-[clamp(10px,.76vw,15px)] opacity-50">下一步</span><p className="mt-[1%] text-[clamp(12px,.95vw,18px)] leading-snug opacity-75">{response}</p></div></div></article></Reveal>)}
    </div>
  </div>;
}

function BriefSheet({ good }: { good?: boolean }) {
  const rows = good
    ? [["目标","形成培训需求汇报"],["材料","报名表 + 访谈；结论保留来源"],["边界","只读指定文件；缺失信息待确认"],["产物","不超过 5 页 PPT；包含统计、问题和建议"],["验收","数字对原件；结论能够回到原文"]]
    : [["目标","形成培训需求汇报"],["材料","“这些材料”范围不明"],["边界","未说明"],["产物","“一份汇报”形式不明"],["验收","未说明"]];
  return <div className={cn("flex h-full flex-col rounded-[1.8rem] border bg-white p-[4.5%] shadow-xl", good ? "border-emerald-200" : "border-rose-200")}><div className="flex items-center justify-between"><Kicker>{good ? "STRUCTURED TASK BRIEF" : "VAGUE REQUEST"}</Kicker>{good ? <ListChecks className="size-[9%] text-emerald-500" /> : <CircleAlert className="size-[9%] text-rose-400" />}</div><h2 className="mt-[3%] text-[clamp(17px,1.55vw,30px)] font-semibold">{good ? "同一目标，补全执行条件" : "“根据这些材料，帮我做一份培训需求汇报”"}</h2><dl className="mt-[4%] space-y-[1.5%]">{rows.map(([label,value]) => <div className="grid grid-cols-[4.5rem_1fr] border-t border-slate-100 pt-[1.8%] text-[clamp(12px,1vw,19px)]" key={label}><dt className="font-semibold text-slate-800">{label}</dt><dd className={good ? "text-slate-500" : label === "目标" ? "text-slate-500" : "text-rose-400"}>{value}</dd></div>)}</dl><p className={cn("mt-auto rounded-lg px-[4%] py-[1.6%] text-center text-[clamp(12px,.95vw,18px)] font-medium", good ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-800")}>{good ? "可执行 · 可停止 · 可验收" : "信息不足：系统只能猜测，或者先停下来询问"}</p></div>;
}

export function TaskBriefComparison() {
  return <div className="grid h-full grid-cols-[1fr_.16fr_1fr] gap-[2%] pb-[clamp(48px,3.2vw,62px)]"><Reveal order={1}><BriefSheet /></Reveal><div className="flex flex-col items-center justify-center text-slate-300"><ArrowRight className="size-[40%]" /><span className="mt-[15%] font-mono text-[clamp(9px,.68vw,13px)] [writing-mode:vertical-rl]">DEFINE THE TASK</span></div><Reveal order={2}><BriefSheet good /></Reveal></div>;
}

export function MaterialWorkflow() {
  const sources = [
    { label: "Word / 普通 PDF", detail: "文字与版式", icon: FileText },
    { label: "Excel / CSV", detail: "字段、数字与公式", icon: FileSpreadsheet },
    { label: "图片 / 扫描件", detail: "文字与视觉位置", icon: ScanSearch },
  ];
  const workingCopies = [
    { label: "Markdown / 文本", detail: "标题 · 原文 · 来源位置", icon: FilePenLine, itemTone: "border-blue-200 bg-blue-50 text-blue-950" },
    { label: "Excel / CSV", detail: "字段 · 公式 · 统计口径", icon: FileSpreadsheet, itemTone: "border-emerald-200 bg-emerald-50 text-emerald-950" },
    { label: "OCR + 原图", detail: "识别文字 · 页码 · 视觉依据", icon: ScanSearch, itemTone: "border-amber-200 bg-amber-50 text-amber-950" },
  ];

  return <div className="grid h-full grid-cols-[.9fr_.1fr_1.32fr_.1fr_.9fr] items-center gap-[1.2%] pb-[clamp(48px,3.2vw,62px)]">
    <Reveal order={1}><div className="h-[84%] rounded-[1.8rem] border border-slate-200 bg-white p-[7%] shadow-lg"><Kicker>ORIGINALS · 权威依据</Kicker><div className="mt-[6%] space-y-[4%]">{sources.map(({ label, detail, icon: Icon }) => <div className="flex items-center gap-[6%]" key={label}><span className="flex size-[clamp(36px,3vw,56px)] shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600"><Icon className="size-[46%]" /></span><div><strong className="block text-[clamp(13px,1.06vw,20px)]">{label}</strong><span className="text-[clamp(11px,.86vw,16px)] text-slate-400">{detail}</span></div></div>)}</div><p className="mt-[6%] border-t border-slate-100 pt-[5%] text-[clamp(11px,.86vw,16px)] leading-relaxed text-slate-500">原件不覆盖、不丢弃，始终作为格式、数据和来源依据。</p></div></Reveal>
    <ArrowRight className="mx-auto text-slate-300" />
    <Reveal order={2}><div className="h-[94%] rounded-[2rem] border border-blue-200 bg-white p-[5%] shadow-xl"><div className="flex items-center justify-between"><Kicker>WORKING COPY · 中间表示</Kicker><Settings2 className="size-[7%] text-blue-500" /></div><h3 className="mt-[2%] text-[clamp(18px,1.45vw,28px)] font-semibold tracking-[-.035em]">按内容类型选择工作副本</h3><p className="mt-[1.5%] text-[clamp(11px,.86vw,16px)] text-slate-500">为了分析临时整理，不是新的权威原件。</p><div className="mt-[4%] grid grid-cols-3 gap-[2.5%]">{workingCopies.map(({ label, detail, icon: Icon, itemTone }) => <div className={cn("rounded-[1.1rem] border p-[7%]", itemTone)} key={label}><Icon className="size-[20%]" /><strong className="mt-[6%] block text-[clamp(12px,.98vw,19px)] leading-tight">{label}</strong><span className="mt-[4%] block text-[clamp(10px,.76vw,15px)] leading-snug opacity-65">{detail}</span></div>)}</div><div className="mt-[4%] grid grid-cols-[1fr_auto_1.25fr] items-center gap-[3%] rounded-[1rem] bg-violet-50 px-[4%] py-[2.6%] text-[clamp(11px,.84vw,16px)] font-medium text-violet-800"><span className="flex items-center justify-center gap-[5%]"><BrainCircuit className="size-[1.2em]" />模型归纳与写作</span><span className="text-violet-300">＋</span><span className="flex items-center justify-center gap-[5%]"><SquareFunction className="size-[1.2em]" />工具读取、计算与检查</span></div></div></Reveal>
    <ArrowRight className="mx-auto text-slate-300" />
    <Reveal order={3}><div className="h-[84%] rounded-[1.8rem] border border-emerald-200 bg-emerald-50 p-[7%] text-emerald-950 shadow-lg"><Kicker>DELIVER & VERIFY</Kicker><FileOutput className="mt-[8%] size-[20%] text-emerald-600" /><strong className="mt-[6%] block text-[clamp(17px,1.4vw,27px)]">Word · Excel · PPT</strong><p className="mt-[4%] text-[clamp(11px,.9vw,17px)] leading-relaxed text-emerald-900/65">按业务场景生成最终产物，再回到原件核对数字、原文、来源和版式。</p><div className="mt-[7%] flex items-center gap-[4%] rounded-xl bg-white/75 px-[6%] py-[3.5%] text-[clamp(11px,.86vw,16px)] font-semibold"><ClipboardCheck className="size-[1.2em]" />工作副本不是验收结果</div></div></Reveal>
  </div>;
}

export function ScenarioMatrix() {
  const groups = [
    {
      label: "汇总与沟通",
      items: [
        { department: "行政 / 人事", material: "名单、制度、模板", action: "汇总、对照、起草", output: "名单、通知、待确认项", check: "人员和制度准确", icon: UserRoundCheck, tone: "border-cyan-200 bg-cyan-50/70", iconTone: "bg-cyan-500" },
        { department: "管理者", material: "周报、纪要、计划", action: "合并、比较、提取", output: "进度、风险、决策项", check: "信息完整、范围合适", icon: ListChecks, tone: "border-slate-200 bg-slate-50/80", iconTone: "bg-slate-600" },
      ],
    },
    {
      label: "分析与归纳",
      items: [
        { department: "市场 / 运营", material: "活动数据、用户反馈", action: "统计、聚类、归纳", output: "复盘、问题、建议", check: "数据口径和原文依据", icon: ScanSearch, tone: "border-blue-200 bg-blue-50/70", iconTone: "bg-blue-500" },
        { department: "产品", material: "访谈、需求池、历史版本", action: "分类、找冲突、追溯", output: "分类、冲突点、优先级草案", check: "不改变原意，优先级由人判断", icon: FileSearch, tone: "border-violet-200 bg-violet-50/70", iconTone: "bg-violet-500" },
      ],
    },
    {
      label: "精确与变更",
      items: [
        { department: "财务", material: "费用明细、预算规则", action: "计算、核对、找异常", output: "异常清单、核查结果", check: "公式、口径和数字复核", icon: SquareFunction, tone: "border-amber-200 bg-amber-50/70", iconTone: "bg-amber-500" },
        { department: "研发", material: "代码、日志、接口说明", action: "搜索、定位、测试", output: "原因、修改方案、测试清单", check: "测试通过、影响范围明确", icon: Wrench, tone: "border-emerald-200 bg-emerald-50/70", iconTone: "bg-emerald-500" },
      ],
    },
  ];
  return <div className="flex h-full min-h-0 flex-col pb-[clamp(48px,3.2vw,62px)]">
    <div className="grid min-h-0 flex-1 grid-rows-3 gap-[2%]">
      {groups.map((group, index) => <Reveal className="min-h-0" key={group.label} order={index + 1}><div className="grid h-full grid-cols-2 gap-[2%]">{group.items.map(({ department, material, action, output, check, icon: Icon, tone, iconTone }) => <article className={cn("flex h-full min-h-0 flex-col overflow-hidden rounded-[1.25rem] border px-[clamp(18px,1.35vw,26px)] py-[clamp(6px,.45vw,9px)] shadow-[0_10px_32px_rgba(15,23,42,.05)]", tone)} key={department}><div className="flex items-center justify-between gap-[3%]"><div className="flex min-w-0 items-center gap-[clamp(9px,.65vw,13px)]"><span className={cn("flex size-[clamp(30px,1.9vw,36px)] shrink-0 items-center justify-center rounded-[.65rem] text-white", iconTone)}><Icon className="size-[48%]" /></span><strong className="whitespace-nowrap text-[clamp(15px,1vw,19px)] tracking-[-.025em] text-slate-950">{department}</strong></div><span className="shrink-0 rounded-full border border-white/80 bg-white/75 px-[clamp(10px,.8vw,15px)] py-[clamp(2px,.16vw,3px)] text-[clamp(10px,.65vw,15px)] font-medium leading-none text-slate-500">{group.label}</span></div><div className="mt-[clamp(2px,.16vw,3px)] grid grid-cols-[.9fr_.9fr_1.2fr] gap-[3%] border-y border-slate-900/5 py-[clamp(2px,.16vw,3px)]">{[["材料", material], ["动作", action], ["产物", output]].map(([label, value]) => <div className="min-w-0" key={label}><span className="font-mono text-[clamp(9px,.6vw,15px)] leading-none tracking-[.12em] text-slate-400">{label}</span><p className={cn("truncate text-[clamp(11px,.78vw,15px)] leading-none", label === "产物" ? "font-medium text-blue-700" : "text-slate-600")}>{value}</p></div>)}</div><div className="mt-auto flex min-w-0 items-center gap-[clamp(6px,.45vw,9px)] pt-[clamp(2px,.16vw,3px)] text-[clamp(10px,.72vw,15px)] leading-none text-slate-600"><ClipboardCheck className="size-[1.05em] shrink-0 text-emerald-500" /><span className="shrink-0 font-medium text-slate-800">重点验收</span><span className="truncate">{check}</span></div></article>)}</div></Reveal>)}
    </div>
    <div className="mt-[2%] flex shrink-0 items-center justify-center gap-[2%] rounded-full border border-violet-200 bg-violet-50 px-[4%] py-[1.2%] text-[clamp(11px,.88vw,17px)] text-violet-900"><KeyRound className="size-[1.15em]" /><strong>共同边界</strong><span>默认只处理已授权材料；发送、修改系统或执行代码，需要明确授权。</span></div>
  </div>;
}

export function QuizPanels() {
  const revealStep = useRevealStep();
  const items = [
    { order: 1, label: "A", domain: "产品", title: "WorkBuddy 就是一个大模型", boundary: "AI 应用 ≠ 大模型", reason: "它还组合了文件、工具、界面、权限和任务记录。", icon: AppWindow, accent: "text-cyan-600", panel: "border-cyan-200 bg-cyan-50" },
    { order: 2, label: "B", domain: "权限", title: "模型提出调用，就拥有权限", boundary: "调用意图 ≠ 实际权限", reason: "执行权由软件规则、账号权限和运行环境决定。", icon: KeyRound, accent: "text-violet-600", panel: "border-violet-200 bg-violet-50" },
    { order: 3, label: "C", domain: "验收", title: "生成了 PPT，任务就完成", boundary: "文件生成 ≠ 任务完成", reason: "内容、数据、来源和版式仍要符合业务验收标准。", icon: ScanSearch, accent: "text-amber-600", panel: "border-amber-200 bg-amber-50" },
  ];
  return <div className="h-full pb-[clamp(48px,3.2vw,62px)]"><div className="grid h-full grid-cols-3 gap-[2%]">{items.map(({ order, label, domain, title, boundary, reason, icon: Icon, accent, panel }) => <article className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white px-[7%] py-[6%] text-slate-950 shadow-[0_20px_55px_rgba(15,23,42,.08)]" key={label}><span className="absolute right-[5%] top-[-4%] font-mono text-[clamp(82px,8vw,150px)] font-semibold text-slate-950/[.035]">{label}</span><div className="relative flex items-center justify-between"><span className={cn("flex size-[clamp(42px,3.6vw,68px)] items-center justify-center rounded-[1.15rem] bg-current/8", accent)}><Icon className="size-[44%]" /></span><span className="rounded-full border border-slate-200 bg-slate-50 px-[4%] py-[1.5%] font-mono text-[clamp(10px,.76vw,15px)] tracking-[.12em] text-slate-500">判断 {label} · {domain}</span></div><strong className="relative mt-[8%] max-w-[92%] text-[clamp(19px,1.62vw,31px)] leading-[1.25] tracking-[-.025em]">{title}</strong><p className="mt-[3%] text-[clamp(12px,.92vw,18px)] text-slate-400">这句话成立吗？</p><div className={cn("relative mt-auto h-[43%] min-h-0 overflow-hidden rounded-[1.4rem] border p-[6%]", panel)}>{revealStep < order && <div className="flex h-full items-center justify-center gap-[5%] text-slate-400"><span className="font-mono text-[clamp(28px,2.5vw,48px)] font-light">?</span><span className="text-[clamp(12px,.95vw,18px)]">先保留你的判断</span></div>}<Reveal className="h-full" order={order}><div className="flex h-full min-h-0 flex-col"><div className="flex items-center gap-[3%] text-rose-600"><CircleAlert className="size-[1.15em]" /><strong className="text-[clamp(14px,1.08vw,21px)]">错误</strong></div><strong className={cn("mt-[5%] text-[clamp(15px,1.2vw,23px)] leading-tight", accent)}>{boundary}</strong><p className="mt-[4%] text-[clamp(12px,.95vw,18px)] leading-relaxed text-slate-600">{reason}</p></div></Reveal></div></article>)}</div></div>;
}

export function SummaryChain() {
  const core = [
    { label: "上下文", text: "本次可见信息", icon: MessageSquareText, tone: "border-blue-200 bg-blue-50 text-blue-700" },
    { label: "大模型", text: "生成内容与意图", icon: BrainCircuit, tone: "border-violet-200 bg-violet-50 text-violet-700" },
    { label: "工具", text: "真实读、写、改、执行", icon: Wrench, tone: "border-amber-200 bg-amber-50 text-amber-700" },
  ];
  return <div className="h-full pb-[clamp(48px,3.2vw,62px)]"><div className="grid h-full min-h-0 grid-cols-[.2fr_auto_.56fr_auto_.18fr] items-center gap-[1.6%]"><Reveal className="h-[78%] min-h-0" order={4}><aside className="flex h-full min-h-0 flex-col rounded-[1.8rem] border border-amber-200 bg-gradient-to-b from-amber-50 to-white p-[9%] shadow-[0_18px_48px_rgba(15,23,42,.07)]"><span className="flex size-[clamp(46px,4vw,76px)] items-center justify-center rounded-[1.25rem] bg-amber-500 text-white"><Hand className="size-[44%]" /></span><span className="mt-[10%] font-mono text-[clamp(10px,.72vw,15px)] tracking-[.14em] text-amber-700">HUMAN</span><strong className="mt-[3%] text-[clamp(19px,1.55vw,30px)] text-slate-950">人</strong><p className="mt-[5%] text-[clamp(12px,.95vw,18px)] leading-relaxed text-slate-500">提出目标并承担最终责任</p><div className="mt-auto grid grid-cols-2 gap-[5%] text-center text-[clamp(11px,.82vw,16px)] font-medium text-amber-900">{["目标", "材料", "授权", "验收"].map((item) => <span className="rounded-full border border-amber-200 bg-white px-[4%] py-[5%]" key={item}>{item}</span>)}</div></aside></Reveal><Reveal order={4}><ArrowRight className="size-[clamp(24px,2vw,38px)] text-amber-400" /></Reveal><Reveal className="h-full min-h-0" order={1}><section className="flex h-full min-h-0 flex-col overflow-hidden rounded-[2rem] border border-cyan-200 bg-white p-[4.5%] shadow-[0_24px_65px_rgba(15,23,42,.09)]"><div className="flex shrink-0 items-center justify-between"><div className="flex items-center gap-[3%]"><span className="flex size-[clamp(42px,3.5vw,66px)] items-center justify-center rounded-[1.1rem] bg-cyan-500 text-white"><AppWindow className="size-[45%]" /></span><div><span className="font-mono text-[clamp(10px,.72vw,15px)] tracking-[.14em] text-cyan-600">APPLICATION</span><strong className="block text-[clamp(19px,1.55vw,30px)] text-slate-950">AI 应用</strong></div></div><span className="text-[clamp(11px,.86vw,17px)] text-slate-400">用户实际操作的完整软件</span></div><Reveal className="mt-[4%] min-h-0 flex-1" order={2}><div className="grid h-full min-h-0 grid-rows-[minmax(0,1fr)_auto] gap-[clamp(6px,.5vw,10px)] rounded-[1.5rem] border border-slate-200 bg-slate-50/70 px-[3%] py-[clamp(9px,.72vw,14px)]"><div className="grid min-h-0 grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-[2%]">{core.map(({ label, text, icon: Icon, tone }, index) => <div className="contents" key={label}><div className={cn("flex min-w-0 flex-col items-center justify-center rounded-[1.2rem] border px-[5%] text-center", tone)}><Icon className="size-[clamp(26px,2vw,38px)]" /><strong className="mt-[clamp(4px,.35vw,7px)] text-[clamp(15px,1.15vw,22px)] leading-none text-slate-950">{label}</strong><span className="mt-[clamp(3px,.25vw,5px)] text-[clamp(11px,.82vw,16px)] leading-none opacity-75">{text}</span></div>{index < core.length - 1 && <ArrowRight className="self-center text-slate-300" />}</div>)}</div><div className="flex shrink-0 items-center justify-center gap-[2%] rounded-full bg-white px-[4%] py-[clamp(3px,.25vw,5px)] text-[clamp(10px,.78vw,15px)] leading-none text-slate-500"><RefreshCw className="size-[1.1em] text-blue-500" />工具结果返回，成为下一步的新信息</div></div></Reveal><Reveal className="mt-[3%] shrink-0" order={3}><div className="flex items-center gap-[4%] rounded-[1.35rem] border border-emerald-200 bg-emerald-50 px-[4%] py-[2.5%]"><span className="flex size-[clamp(36px,3vw,56px)] shrink-0 items-center justify-center rounded-[1rem] bg-emerald-600 text-white"><Bot className="size-[48%]" /></span><div className="min-w-0 flex-1"><div className="flex min-w-0 items-baseline gap-[3%]"><strong className="shrink-0 whitespace-nowrap text-[clamp(15px,1.2vw,23px)] text-emerald-950">智能体</strong><span className="min-w-0 truncate text-[clamp(11px,.82vw,16px)] text-emerald-700">围绕目标维护状态并持续推进</span></div><div className="mt-[2%] flex items-center gap-[2%] whitespace-nowrap text-[clamp(10px,.76vw,15px)] text-emerald-800">判断<ArrowRight className="size-[1em] shrink-0" />行动<ArrowRight className="size-[1em] shrink-0" />观察<ArrowRight className="size-[1em] shrink-0" />更新<span className="ml-[2%] text-emerald-600">继续、询问或停止</span></div></div></div></Reveal></section></Reveal><Reveal order={4}><ArrowRight className="size-[clamp(24px,2vw,38px)] text-emerald-400" /></Reveal><Reveal className="h-[62%] min-h-0" order={4}><aside className="flex h-full min-h-0 flex-col items-center justify-center rounded-[1.8rem] border border-emerald-200 bg-gradient-to-b from-emerald-50 to-white p-[10%] text-center shadow-[0_18px_48px_rgba(15,23,42,.07)]"><span className="flex size-[clamp(50px,4.4vw,84px)] items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-900/15"><ShieldCheck className="size-[48%]" /></span><span className="mt-[10%] font-mono text-[clamp(10px,.72vw,15px)] tracking-[.14em] text-emerald-700">DELIVERABLE</span><strong className="mt-[3%] text-[clamp(17px,1.4vw,27px)] leading-tight text-slate-950">可验收结果</strong><p className="mt-[7%] text-[clamp(11px,.86vw,17px)] leading-relaxed text-slate-500">内容正确<br />依据清楚<br />格式符合要求</p></aside></Reveal></div></div>;
}
