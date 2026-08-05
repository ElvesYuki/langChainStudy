import type { ComponentType } from "react";

export type ChapterStatus = "published" | "draft";

export interface ChapterMeta {
  course: string;
  slug: string;
  order: number;
  title: string;
  description: string;
  duration: number;
  audience: string;
  updatedAt: string;
  status: ChapterStatus;
  objectives: string[];
  sections: Array<{ id: string; title: string }>;
}

export interface CourseMeta {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
}

export interface ChapterEntry {
  meta: ChapterMeta;
  Article: ComponentType;
  Deck: ComponentType;
}

export interface CourseEntry extends CourseMeta {
  chapters: ChapterEntry[];
}
