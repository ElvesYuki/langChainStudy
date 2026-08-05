"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronsLeft, ChevronsRight, Expand, FileText, StickyNote, X } from "lucide-react";

import { Button } from "@/components/ui/button";
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
  const [{ index, step }, setPosition] = useState({ index: 0, step: 0 });
  const [notesOpen, setNotesOpen] = useState(false);
  const [jumpOpen, setJumpOpen] = useState(false);
  const jumpAreaRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((nextIndex: number, finalStep = 0) => {
    const safeIndex = Math.max(0, Math.min(slides.length - 1, nextIndex));
    setPosition({
      index: safeIndex,
      step: finalStep ? slides[safeIndex].steps : 0,
    });
    setJumpOpen(false);
  }, [slides]);

  const forward = useCallback(() => {
    const maxStep = slides[index].steps;
    if (step < maxStep) setPosition({ index, step: step + 1 });
    else if (index < slides.length - 1) goTo(index + 1);
  }, [goTo, index, slides, step]);

  const setCurrentStep = useCallback((nextStep: number) => {
    const maxStep = slides[index].steps;
    setPosition({ index, step: Math.max(0, Math.min(maxStep, nextStep)) });
  }, [index, slides]);

  const backward = useCallback(() => {
    if (step > 0) setPosition({ index, step: step - 1 });
    else if (index > 0) goTo(index - 1, 1);
  }, [goTo, index, step]);

  const toggleFullscreen = useCallback(async () => {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isInteractive = target?.closest("button, a, input, textarea, select");
      const advancesDeck = target?.closest("[data-deck-space-advance]");
      if (isInteractive && event.key === " " && !advancesDeck) return;
      if (["ArrowRight", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        forward();
      } else if (["ArrowLeft", "PageUp"].includes(event.key)) {
        event.preventDefault();
        backward();
      } else if (event.key === "Home") goTo(0);
      else if (event.key === "End") goTo(slides.length - 1, 1);
      else if (event.key === "Escape") setJumpOpen(false);
      else if (event.key.toLowerCase() === "n") setNotesOpen((value) => !value);
      else if (event.key.toLowerCase() === "f") void toggleFullscreen();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [backward, forward, goTo, slides.length, toggleFullscreen]);

  useEffect(() => {
    const closeJumpOnOutsideClick = (event: PointerEvent) => {
      if (!jumpAreaRef.current?.contains(event.target as Node)) setJumpOpen(false);
    };
    document.addEventListener("pointerdown", closeJumpOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeJumpOnOutsideClick);
  }, []);

  const progress = ((index + (slides[index].steps ? step / (slides[index].steps + 1) : 0)) / slides.length) * 100;
  const current = slides[index];

  return (
    <main className="presentation-shell fixed inset-0 z-50 flex items-center justify-center overflow-hidden p-2 text-slate-950">
      <div className="deck-canvas relative overflow-hidden rounded-[2.25rem] bg-white">
        <RevealProvider key={current.id} step={step} onStepChange={setCurrentStep}>{current.content}</RevealProvider>
      </div>

      <div className="fixed left-3 top-3 flex items-center gap-2 md:left-5 md:top-5">
        <Tooltip><TooltipTrigger render={<Button size="icon-sm" variant="secondary" render={<Link href={readerHref} aria-label="返回阅读模式" />}><FileText /></Button>} /><TooltipContent>返回阅读模式</TooltipContent></Tooltip>
      </div>

      <div className="fixed right-3 top-3 flex items-center gap-2 md:right-5 md:top-5">
        <Tooltip><TooltipTrigger render={<Button size="icon-sm" variant="secondary" onClick={() => setNotesOpen((value) => !value)} aria-label="演讲者备注"><StickyNote /></Button>} /><TooltipContent>演讲者备注（N）</TooltipContent></Tooltip>
        <Tooltip><TooltipTrigger render={<Button size="icon-sm" variant="secondary" onClick={() => void toggleFullscreen()} aria-label="全屏"><Expand /></Button>} /><TooltipContent>全屏（F）</TooltipContent></Tooltip>
      </div>

      <div ref={jumpAreaRef} className="pointer-events-none fixed inset-x-0 bottom-0 z-60">
        <div className="px-3 pb-4 pt-14 md:px-6">
          <nav className={cn("mx-auto flex max-w-5xl items-center justify-center gap-1 rounded-2xl border border-slate-200 bg-white/94 p-2 shadow-xl backdrop-blur transition-all", jumpOpen ? "pointer-events-auto translate-y-0 opacity-100" : "translate-y-4 opacity-0")} aria-label="快速跳转">
            <Button size="icon-sm" variant="ghost" onClick={() => goTo(0)} aria-label="跳到最前"><ChevronsLeft /></Button>
            <div className="flex min-w-0 gap-1 overflow-x-auto">
              {slides.map((slide, slideIndex) => (
                <button className={cn("size-8 shrink-0 rounded-lg font-mono text-xs transition", slideIndex === index ? "bg-blue-600 text-white" : "text-slate-400 hover:bg-slate-100 hover:text-slate-950")} key={slide.id} onClick={() => goTo(slideIndex)} aria-label={`第 ${slideIndex + 1} 页：${slide.title}`}>{slideIndex + 1}</button>
              ))}
            </div>
            <Button size="icon-sm" variant="ghost" onClick={() => goTo(slides.length - 1, 1)} aria-label="跳到最后"><ChevronsRight /></Button>
          </nav>
        </div>
        <button type="button" className="pointer-events-auto absolute inset-x-0 bottom-0 flex h-4 cursor-pointer items-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500" onClick={() => setJumpOpen((value) => !value)} aria-label="打开页面快速跳转" aria-expanded={jumpOpen}>
          <span className="presentation-progress-track block h-1 w-full" role="progressbar" aria-label="演讲进度" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress)}>
            <span className="presentation-progress-fill block h-full" style={{ width: `${progress}%` }} />
          </span>
        </button>
      </div>

      {notesOpen && (
        <aside className="fixed bottom-20 right-4 z-70 w-[min(28rem,calc(100vw-2rem))] rounded-2xl border border-slate-200 bg-white/96 p-5 shadow-2xl backdrop-blur">
          <div className="mb-3 flex items-start justify-between gap-4"><div><span className="font-mono text-xs text-blue-600">SPEAKER NOTES</span><h2 className="mt-1 font-semibold">{current.title}</h2></div><Button size="icon-sm" variant="ghost" onClick={() => setNotesOpen(false)} aria-label="关闭备注"><X /></Button></div>
          <p className="text-sm leading-6 text-slate-600">{current.notes}</p>
        </aside>
      )}
    </main>
  );
}
