import Link from "next/link";
import { BookOpen, Presentation } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link className="flex items-center gap-3" href="/">
          <span className="flex size-9 items-center justify-center rounded-xl bg-slate-950 text-cyan-300"><BookOpen className="size-4.5" /></span>
          <span><strong className="block text-sm tracking-tight">Agent Learning Studio</strong><span className="hidden text-xs text-slate-500 sm:block">大模型与智能体培训</span></span>
        </Link>
        <nav className="flex items-center gap-2" aria-label="主导航">
          <Button variant="ghost" render={<Link href="/courses/ai-foundations" />}>课程目录</Button>
          <Button render={<Link href="/courses/ai-foundations/llm-agent-intro/present" />}><Presentation />演讲模式</Button>
        </nav>
      </div>
    </header>
  );
}
