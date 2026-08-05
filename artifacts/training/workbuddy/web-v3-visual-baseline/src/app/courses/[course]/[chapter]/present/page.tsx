import { notFound } from "next/navigation";

import { courses, getChapter } from "@/lib/courses/registry";

export function generateStaticParams() {
  return courses.flatMap((course) => course.chapters.map((chapter) => ({ course: course.slug, chapter: chapter.meta.slug })));
}

export default async function PresentPage({ params }: { params: Promise<{ course: string; chapter: string }> }) {
  const { course, chapter } = await params;
  const entry = getChapter(course, chapter);
  if (!entry) notFound();
  const Deck = entry.Deck;
  return <Deck />;
}
