import type { ReactNode } from "react";
import { ArrowRight, CheckCircle2, CircleAlert, Layers3 } from "lucide-react";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const toneStyles = {
  blue: "border-blue-200 bg-blue-50/70 text-blue-950",
  violet: "border-violet-200 bg-violet-50/70 text-violet-950",
  amber: "border-amber-200 bg-amber-50/70 text-amber-950",
  green: "border-emerald-200 bg-emerald-50/70 text-emerald-950",
  neutral: "border-slate-200 bg-white text-slate-950",
};

type Tone = keyof typeof toneStyles;

export function ConceptCard({
  label,
  title,
  tone = "neutral",
  children,
}: {
  label: string;
  title: string;
  tone?: Tone;
  children: ReactNode;
}) {
  return (
    <Card className={cn("my-6 overflow-hidden shadow-none", toneStyles[tone])}>
      <CardHeader className="gap-2 pb-2">
        <span className="font-mono text-xs font-semibold tracking-[0.18em] opacity-65">{label}</span>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="leading-7 text-current/80">{children}</CardContent>
    </Card>
  );
}

export function CaseStudy({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="my-8 rounded-3xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-950/10 md:p-8">
      <div className="mb-4 flex items-center gap-3 text-cyan-300">
        <Layers3 className="size-5" />
        <span className="font-mono text-xs font-semibold tracking-[0.2em]">贯穿案例</span>
      </div>
      <h3 className="mb-4 text-2xl font-semibold tracking-tight">{title}</h3>
      <div className="case-study-content text-slate-300">{children}</div>
    </section>
  );
}

export function WorkBuddyGallery() {
  const screenshots = [
    {
      src: "/images/workbuddy/task-home.png",
      alt: "WorkBuddy 任务首页，展示任务、工作空间、材料、权限和模型入口",
      label: "任务工作区",
      description: "观察任务记录、工作空间、材料入口、权限设置和模型选择。",
    },
    {
      src: "/images/workbuddy/capability-market.png",
      alt: "WorkBuddy 能力市场，展示专家、技能和连接器入口",
      label: "能力入口",
      description: "观察专家、技能和连接器怎样扩展软件能够完成的动作。",
    },
  ];

  return (
    <div className="my-8 grid gap-6">
      {screenshots.map((screenshot) => (
        <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm" key={screenshot.src}>
          <div className="relative aspect-[1252/837] bg-slate-100">
            <Image
              alt={screenshot.alt}
              className="object-contain"
              fill
              sizes="(min-width: 1024px) 48rem, 100vw"
              src={screenshot.src}
            />
          </div>
          <figcaption className="border-t border-slate-100 px-5 py-4">
            <strong className="block text-sm text-slate-950">{screenshot.label}</strong>
            <span className="mt-1 block text-sm leading-6 text-slate-500">{screenshot.description}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function Comparison({
  leftTitle,
  rightTitle,
  left,
  right,
}: {
  leftTitle: string;
  rightTitle: string;
  left: ReactNode;
  right: ReactNode;
}) {
  return (
    <div className="my-8 grid gap-4 md:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <h3 className="mb-3 text-lg font-semibold text-slate-700">{leftTitle}</h3>
        <div className="text-slate-600">{left}</div>
      </div>
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
        <h3 className="mb-3 text-lg font-semibold text-blue-950">{rightTitle}</h3>
        <div className="text-blue-950/75">{right}</div>
      </div>
    </div>
  );
}

export function ProcessFlow({
  steps,
}: {
  steps: Array<{ title: string; description: string }>;
}) {
  return (
    <ol className="my-8 grid gap-3 md:grid-cols-2">
      {steps.map((step, index) => (
        <li className="relative rounded-2xl border bg-white p-5" key={step.title}>
          <div className="mb-3 flex items-center gap-3">
            <span className="flex size-8 items-center justify-center rounded-full bg-blue-600 font-mono text-sm font-semibold text-white">
              {index + 1}
            </span>
            <h3 className="font-semibold">{step.title}</h3>
          </div>
          <p className="m-0 text-sm leading-6 text-slate-600">{step.description}</p>
          {index < steps.length - 1 && (
            <ArrowRight className="absolute -bottom-3 left-1/2 z-10 hidden size-5 rounded-full bg-white text-blue-500 md:block" />
          )}
        </li>
      ))}
    </ol>
  );
}

export function Callout({
  type = "key",
  title,
  children,
}: {
  type?: "key" | "warning";
  title: string;
  children: ReactNode;
}) {
  const Icon = type === "warning" ? CircleAlert : CheckCircle2;
  return (
    <aside
      className={cn(
        "my-7 flex gap-4 rounded-2xl border p-5",
        type === "warning"
          ? "border-amber-200 bg-amber-50 text-amber-950"
          : "border-emerald-200 bg-emerald-50 text-emerald-950",
      )}
    >
      <Icon className="mt-0.5 size-5 shrink-0" />
      <div>
        <strong className="block">{title}</strong>
        <div className="mt-1 text-sm leading-6 opacity-80">{children}</div>
      </div>
    </aside>
  );
}

export function BoundaryTable() {
  const rows = [
    ["大模型", "生成", "内容、结构、判断或工具调用意图", "事实是否有依据"],
    ["工具", "执行", "读取结果、计算结果、文件或错误", "动作是否成功"],
    ["智能体", "推进", "步骤、状态、重试和待确认项", "流程是否完整"],
    ["人", "负责", "目标、授权、业务判断和最终验收", "结果是否可用"],
  ];

  return (
    <div className="my-8 overflow-x-auto rounded-2xl border bg-white">
      <table className="w-full min-w-175 border-collapse text-left text-sm">
        <thead className="bg-slate-950 text-white">
          <tr>{["角色", "核心职责", "留下什么", "主要检查"].map((cell) => <th className="px-5 py-4 font-medium" key={cell}>{cell}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr className="border-t" key={row[0]}>{row.map((cell, index) => <td className={cn("px-5 py-4", index === 0 && "font-semibold text-slate-950")} key={cell}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
