"use client";

import Link from "next/link";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Expand, FileText, StickyNote, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { RevealProvider } from "./slide-primitives";
import "./presentation.css";

export interface DeckSlide {
  id: string;
  title: string;
  notes: string;
  steps: number;
  content: ReactNode;
}

export function PresentationDeck({
  slides,
  readerHref,
}: {
  slides: DeckSlide[];
  readerHref: string;
}) {
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [notesOpen, setNotesOpen] = useState(false);
  const [jumpOpen, setJumpOpen] = useState(false);

  const goTo = useCallback((nextIndex: number, finalStep = 0) => {
    const safeIndex = Math.max(0, Math.min(slides.length - 1, nextIndex));
    setIndex(safeIndex);
    setStep(finalStep ? slides[safeIndex].steps : 0);
  }, [slides]);

  const forward = useCallback(() => {
    const maxStep = slides[index].steps;
    if (step < maxStep) setStep((value) => value + 1);
    else if (index < slides.length - 1) goTo(index + 1);
  }, [goTo, index, slides, step]);

  const backward = useCallback(() => {
    if (step > 0) setStep((value) => value - 1);
    else if (index > 0) goTo(index - 1, 1);
  }, [goTo, index, step]);

  const toggleFullscreen = useCallback(async () => {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (["ArrowRight", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        forward();
      } else if (["ArrowLeft", "PageUp"].includes(event.key)) {
        event.preventDefault();
        backward();
      } else if (event.key === "Home") goTo(0);
      else if (event.key === "End") goTo(slides.length - 1, 1);
      else if (event.key.toLowerCase() === "n") setNotesOpen((value) => !value);
      else if (event.key.toLowerCase() === "f") void toggleFullscreen();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [backward, forward, goTo, slides.length, toggleFullscreen]);

  const progress = ((index + (slides[index].steps ? step / (slides[index].steps + 1) : 0)) / slides.length) * 100;
  const current = slides[index];

  return (
    <main className="presentation-shell fixed inset-0 z-50 flex items-center justify-center overflow-hidden p-2 text-white">
      <div className="deck-canvas relative overflow-hidden rounded-[2.25rem] bg-white">
        <RevealProvider step={step}>{current.content}</RevealProvider>
      </div>

      <div className="fixed left-3 top-3 flex items-center gap-2 md:left-5 md:top-5">
        <Tooltip><TooltipTrigger render={<Button size="icon-sm" variant="secondary" render={<Link href={readerHref} aria-label="返回阅读模式" />}><FileText /></Button>} /><TooltipContent>返回阅读模式</TooltipContent></Tooltip>
        <span className="hidden rounded-full bg-white/10 px-3 py-1.5 text-xs text-slate-300 backdrop-blur md:block">方向键翻页 · N 备注 · F 全屏</span>
      </div>

      <div className="fixed right-3 top-3 flex items-center gap-2 md:right-5 md:top-5">
        <Tooltip><TooltipTrigger render={<Button size="icon-sm" variant="secondary" onClick={() => setNotesOpen((value) => !value)} aria-label="演讲者备注"><StickyNote /></Button>} /><TooltipContent>演讲者备注（N）</TooltipContent></Tooltip>
        <Tooltip><TooltipTrigger render={<Button size="icon-sm" variant="secondary" onClick={() => void toggleFullscreen()} aria-label="全屏"><Expand /></Button>} /><TooltipContent>全屏（F）</TooltipContent></Tooltip>
      </div>

      <div className="group fixed inset-x-0 bottom-0 z-60 px-3 pb-2 pt-14 md:px-6" onMouseEnter={() => setJumpOpen(true)} onMouseLeave={() => setJumpOpen(false)}>
        <nav className={cn("mx-auto mb-3 flex max-w-5xl items-center justify-center gap-1 rounded-2xl border border-white/10 bg-slate-950/92 p-2 shadow-2xl backdrop-blur transition-all", jumpOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0")} aria-label="快速跳转">
          <Button size="icon-sm" variant="ghost" onClick={() => goTo(0)} aria-label="跳到最前"><ChevronsLeft /></Button>
          <div className="flex min-w-0 gap-1 overflow-x-auto">
            {slides.map((slide, slideIndex) => (
              <button className={cn("size-8 shrink-0 rounded-lg font-mono text-xs transition", slideIndex === index ? "bg-blue-500 text-white" : "text-slate-400 hover:bg-white/10 hover:text-white")} key={slide.id} onClick={() => goTo(slideIndex)} aria-label={`第 ${slideIndex + 1} 页：${slide.title}`}>{slideIndex + 1}</button>
            ))}
          </div>
          <Button size="icon-sm" variant="ghost" onClick={() => goTo(slides.length - 1, 1)} aria-label="跳到最后"><ChevronsRight /></Button>
        </nav>
        <div className="mx-auto flex max-w-5xl items-center gap-3 rounded-full border border-white/10 bg-slate-950/88 px-3 py-2 shadow-xl backdrop-blur">
          <Button size="icon-sm" variant="ghost" onClick={backward} disabled={index === 0 && step === 0} aria-label="上一步"><ChevronLeft /></Button>
          <Progress value={progress} className="h-1.5 flex-1 bg-white/12" />
          <span className="w-16 text-center font-mono text-xs text-slate-300">{String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
          <Button size="icon-sm" variant="ghost" onClick={forward} disabled={index === slides.length - 1 && step === slides[index].steps} aria-label="下一步"><ChevronRight /></Button>
        </div>
      </div>

      {notesOpen && (
        <aside className="fixed bottom-20 right-4 z-70 w-[min(28rem,calc(100vw-2rem))] rounded-2xl border border-white/10 bg-slate-950/96 p-5 shadow-2xl backdrop-blur">
          <div className="mb-3 flex items-start justify-between gap-4"><div><span className="font-mono text-xs text-cyan-300">SPEAKER NOTES</span><h2 className="mt-1 font-semibold">{current.title}</h2></div><Button size="icon-sm" variant="ghost" onClick={() => setNotesOpen(false)} aria-label="关闭备注"><X /></Button></div>
          <p className="text-sm leading-6 text-slate-300">{current.notes}</p>
        </aside>
      )}
    </main>
  );
}
