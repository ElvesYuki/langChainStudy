import IntroArticle from "@/content/courses/ai-foundations/chapters/01-llm-agent-intro/article.mdx";
import { chapterMeta as introMeta } from "@/content/courses/ai-foundations/chapters/01-llm-agent-intro/meta";
import { IntroDeck } from "@/content/courses/ai-foundations/chapters/01-llm-agent-intro/slides";
import { courseMeta } from "@/content/courses/ai-foundations/course";
import type { CourseEntry } from "@/lib/courses/types";

export const courses: CourseEntry[] = [
  {
    ...courseMeta,
    chapters: [
      {
        meta: introMeta,
        Article: IntroArticle,
        Deck: IntroDeck,
      },
    ],
  },
];

export function getCourse(courseSlug: string) {
  return courses.find((course) => course.slug === courseSlug);
}

export function getChapter(courseSlug: string, chapterSlug: string) {
  return getCourse(courseSlug)?.chapters.find(
    (chapter) => chapter.meta.slug === chapterSlug,
  );
}
