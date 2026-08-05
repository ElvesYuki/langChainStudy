import Link from "next/link";
import { ArrowRight, BookOpenText, Layers3, Presentation, Route } from "lucide-react";

import { SiteHeader } from "@/components/layout/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { courses } from "@/lib/courses/registry";

export default function Home() {
  const course = courses[0];
  const chapter = course.chapters[0].meta;

  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(37,99,235,.13),transparent_30rem)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-28">
            <div>
              <Badge variant="outline" className="mb-6 border-blue-200 bg-blue-50 text-blue-700">公司内部培训 · 持续更新</Badge>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.055em] text-slate-950 md:text-7xl">看懂智能软件，<br /><span className="text-blue-600">从一次真实任务开始。</span></h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">不从抽象名词开始堆知识。沿材料、模型、工具、状态与验收的完整链路，建立跨部门都能使用的共同语言。</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button size="lg" render={<Link href={`/courses/${course.slug}/${chapter.slug}`} />}>开始阅读<ArrowRight /></Button>
                <Button size="lg" variant="outline" render={<Link href={`/courses/${course.slug}/${chapter.slug}/present`} />}><Presentation />进入演讲模式</Button>
              </div>
            </div>
            <div className="self-end rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-2xl shadow-slate-950/15">
              <div className="flex items-center justify-between"><span className="font-mono text-xs tracking-[0.2em] text-cyan-300">LEARNING PATH</span><span className="text-xs text-slate-500">01 / 持续扩展</span></div>
              <div className="mt-12 space-y-3">
                {[{ icon: BookOpenText, label: "阅读", text: "完整概念与案例" }, { icon: Presentation, label: "演讲", text: "16:9 全屏与备注" }, { icon: Route, label: "路径", text: "按章节持续积累" }].map(({ icon: Icon, label, text }) => <div className="flex items-center gap-4 rounded-2xl border border-white/8 bg-white/5 p-4" key={label}><span className="flex size-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300"><Icon className="size-4.5" /></span><div><strong className="block text-sm">{label}</strong><span className="text-xs text-slate-400">{text}</span></div></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="mb-8 flex items-end justify-between"><div><span className="font-mono text-xs font-semibold tracking-[0.2em] text-blue-600">COURSES</span><h2 className="mt-2 text-3xl font-semibold tracking-tight">课程目录</h2></div><Button variant="ghost" render={<Link href={`/courses/${course.slug}`} />}>查看课程<ArrowRight /></Button></div>
          <Card className="overflow-hidden border-slate-200 py-0 shadow-sm">
            <CardContent className="grid gap-0 p-0 lg:grid-cols-[.72fr_1.28fr]">
              <div className="flex min-h-70 flex-col justify-between bg-blue-600 p-8 text-white"><Layers3 className="size-8 text-cyan-200" /><div><span className="font-mono text-xs tracking-[0.16em] text-blue-200">{course.eyebrow}</span><h3 className="mt-3 text-3xl font-semibold tracking-tight">{course.title}</h3><p className="mt-3 text-sm leading-6 text-blue-100">{course.description}</p></div></div>
              <div className="p-8"><div className="flex items-center justify-between text-xs text-slate-500"><span>已发布章节</span><span>{course.chapters.length} 章</span></div><Link className="group mt-6 flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50/50" href={`/courses/${course.slug}/${chapter.slug}`}><div><span className="font-mono text-xs text-blue-600">CHAPTER {String(chapter.order).padStart(2, "0")}</span><h4 className="mt-2 text-xl font-semibold tracking-tight">{chapter.title}</h4><p className="mt-2 text-sm text-slate-500">{chapter.duration} 分钟 · {chapter.audience}</p></div><ArrowRight className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600" /></Link></div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
