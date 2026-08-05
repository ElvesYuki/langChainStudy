import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpenText, Clock3, Presentation } from "lucide-react";

import { SiteHeader } from "@/components/layout/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { courses, getCourse } from "@/lib/courses/registry";

export function generateStaticParams() {
  return courses.map((course) => ({ course: course.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ course: string }> }): Promise<Metadata> {
  const { course: slug } = await params;
  const course = getCourse(slug);
  return course ? { title: course.title, description: course.description } : {};
}

export default async function CoursePage({ params }: { params: Promise<{ course: string }> }) {
  const { course: slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-20">
        <Badge variant="outline" className="border-blue-200 bg-blue-50 text-blue-700">{course.eyebrow}</Badge>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-slate-950">{course.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{course.description}</p>

        <div className="mt-12 space-y-4">
          {course.chapters.map(({ meta }) => (
            <Card className="py-0 shadow-none" key={meta.slug}>
              <CardContent className="grid items-center gap-6 p-6 md:grid-cols-[auto_1fr_auto] md:p-8">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-slate-950 font-mono text-sm text-cyan-300">{String(meta.order).padStart(2, "0")}</div>
                <div><div className="flex flex-wrap items-center gap-3"><h2 className="text-2xl font-semibold tracking-tight">{meta.title}</h2><Badge variant="secondary">已发布</Badge></div><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">{meta.description}</p><div className="mt-3 flex gap-4 text-xs text-slate-500"><span className="flex items-center gap-1"><Clock3 className="size-3.5" />{meta.duration} 分钟</span><span>{meta.audience}</span></div></div>
                <div className="flex flex-wrap gap-2"><Button variant="outline" render={<Link href={`/courses/${course.slug}/${meta.slug}`} />}><BookOpenText />阅读</Button><Button render={<Link href={`/courses/${course.slug}/${meta.slug}/present`} />}><Presentation />演讲<ArrowRight /></Button></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
