import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock3, Presentation, Users } from "lucide-react";

import { SiteHeader } from "@/components/layout/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { courses, getChapter } from "@/lib/courses/registry";

export function generateStaticParams() {
  return courses.flatMap((course) => course.chapters.map((chapter) => ({ course: course.slug, chapter: chapter.meta.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ course: string; chapter: string }> }): Promise<Metadata> {
  const { course, chapter } = await params;
  const entry = getChapter(course, chapter);
  return entry ? { title: entry.meta.title, description: entry.meta.description } : {};
}

export default async function ChapterPage({ params }: { params: Promise<{ course: string; chapter: string }> }) {
  const { course, chapter } = await params;
  const entry = getChapter(course, chapter);
  if (!entry) notFound();
  const { meta, Article } = entry;

  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[15rem_minmax(0,48rem)] lg:justify-center">
          <aside className="hidden lg:block"><div className="sticky top-26 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2"><Link className="mb-7 flex items-center gap-2 text-sm text-slate-500 hover:text-slate-950" href={`/courses/${course}`}><ArrowLeft className="size-4" />返回课程目录</Link><span className="font-mono text-xs font-semibold tracking-[0.16em] text-slate-400">本章目录</span><nav className="mt-4 border-l border-slate-200" aria-label="本章目录">{meta.sections.map((section) => <a className="block border-l-2 border-transparent py-2 pl-4 text-sm text-slate-500 transition hover:border-blue-500 hover:text-blue-700" href={`#${section.id}`} key={section.id}>{section.title}</a>)}</nav></div></aside>

          <article>
            <header className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10">
              <Badge variant="outline" className="border-blue-200 bg-blue-50 text-blue-700">CHAPTER {String(meta.order).padStart(2, "0")}</Badge>
              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.045em] text-slate-950 md:text-6xl">{meta.title}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{meta.description}</p>
              <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-slate-500"><span className="flex items-center gap-2"><Clock3 className="size-4" />{meta.duration} 分钟</span><span className="flex items-center gap-2"><Users className="size-4" />{meta.audience}</span><Button className="sm:ml-auto" render={<Link href={`/courses/${course}/${chapter}/present`} />}><Presentation />进入演讲模式</Button></div>
            </header>

            <details className="mt-5 rounded-2xl border bg-white p-5 lg:hidden"><summary className="cursor-pointer font-medium">查看本章目录</summary><nav className="mt-4 grid gap-2">{meta.sections.map((section) => <a className="text-sm text-slate-600" href={`#${section.id}`} key={section.id}>{section.title}</a>)}</nav></details>

            <section className="mt-8 rounded-[2rem] border border-blue-100 bg-blue-50 p-6 md:p-8"><span className="font-mono text-xs font-semibold tracking-[0.16em] text-blue-600">学习目标</span><div className="mt-4 grid gap-3 md:grid-cols-2">{meta.objectives.map((objective) => <div className="flex gap-3 text-sm leading-6 text-blue-950" key={objective}><span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-600" />{objective}</div>)}</div></section>

            <div className="article-content mt-10"><Article /></div>
            <footer className="mt-12 flex items-center justify-between border-t py-8"><Button variant="ghost" render={<Link href={`/courses/${course}`} />}><ArrowLeft />返回课程目录</Button><Button render={<Link href={`/courses/${course}/${chapter}/present`} />}><Presentation />打开演讲稿</Button></footer>
          </article>
        </div>
      </main>
    </div>
  );
}
