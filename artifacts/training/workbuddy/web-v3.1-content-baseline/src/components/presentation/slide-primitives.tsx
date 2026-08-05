"use client";

import { createContext, useContext, type ReactNode } from "react";

import { cn } from "@/lib/utils";

const RevealContext = createContext(Number.POSITIVE_INFINITY);

export function RevealProvider({ step, children }: { step: number; children: ReactNode }) {
  return <RevealContext.Provider value={step}>{children}</RevealContext.Provider>;
}

export function Reveal({ order, children, className }: { order: number; children: ReactNode; className?: string }) {
  const currentStep = useContext(RevealContext);
  return <div className={cn("deck-reveal", className)} data-visible={currentStep >= order}>{children}</div>;
}

export function SlideFrame({
  eyebrow,
  title,
  lead,
  dark = false,
  children,
  className,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  dark?: boolean;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative flex h-full flex-col overflow-hidden rounded-[2.25rem] p-[4.2%]", dark ? "bg-slate-950 text-white" : "bg-[#f7f9fc] text-slate-950", className)}>
      <div className="absolute right-[4%] top-[4%] size-[12%] rounded-full bg-blue-500/8 blur-2xl" />
      <header className="relative shrink-0">
        <span className={cn("font-mono text-[clamp(8px,0.7vw,14px)] font-semibold tracking-[0.18em]", dark ? "text-cyan-300" : "text-blue-600")}>{eyebrow}</span>
        <h1 className="mt-[1.2%] max-w-[92%] text-[clamp(24px,3.1vw,60px)] font-semibold leading-[1.08] tracking-[-0.045em]">{title}</h1>
        {lead && <p className={cn("mt-[1.1%] max-w-[76%] text-[clamp(11px,1.05vw,21px)] leading-relaxed", dark ? "text-slate-300" : "text-slate-500")}>{lead}</p>}
      </header>
      <div className="relative mt-[3%] min-h-0 flex-1">{children}</div>
    </section>
  );
}

const slideTone = {
  blue: "border-blue-200 bg-blue-50 text-blue-950",
  cyan: "border-cyan-200 bg-cyan-50 text-cyan-950",
  violet: "border-violet-200 bg-violet-50 text-violet-950",
  green: "border-emerald-200 bg-emerald-50 text-emerald-950",
  amber: "border-amber-200 bg-amber-50 text-amber-950",
  rose: "border-rose-200 bg-rose-50 text-rose-950",
  dark: "border-white/10 bg-white/8 text-white",
  neutral: "border-slate-200 bg-white text-slate-950",
};

export function SlideCard({
  label,
  title,
  children,
  tone = "neutral",
  className,
}: {
  label?: string;
  title: string;
  children?: ReactNode;
  tone?: keyof typeof slideTone;
  className?: string;
}) {
  return (
    <article className={cn("h-full rounded-[1.4rem] border p-[6%] shadow-sm shadow-slate-950/4", slideTone[tone], className)}>
      {label && <span className="font-mono text-[clamp(7px,0.58vw,11px)] font-semibold tracking-[0.16em] opacity-55">{label}</span>}
      <h2 className="mt-[2%] text-[clamp(13px,1.35vw,26px)] font-semibold leading-tight tracking-[-0.025em]">{title}</h2>
      {children && <div className="mt-[4%] text-[clamp(9px,0.83vw,16px)] leading-[1.55] opacity-75">{children}</div>}
    </article>
  );
}

export function SlideTakeaway({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className={cn("absolute bottom-[3.4%] left-[4.2%] right-[4.2%] rounded-full px-[2%] py-[0.9%] text-center text-[clamp(8px,0.72vw,14px)] font-medium", dark ? "bg-white/8 text-slate-300" : "bg-blue-600/8 text-blue-900")}>
      {children}
    </div>
  );
}

export function SlideList({ items }: { items: string[] }) {
  return <ul className="space-y-[2.5%]">{items.map((item) => <li className="flex gap-[3%]" key={item}><span className="mt-[0.65em] size-[0.34em] shrink-0 rounded-full bg-current" />{item}</li>)}</ul>;
}
