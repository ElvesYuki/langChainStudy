---
date: 2026-08-05
scope: 公司培训网站第三版重构
status: completed
---

# 培训网站第三版重构说明

## 1. 重构原因

第二版验证了阅读模式和演讲模式可以并存，但课程内容主要写在 MDX 导出的幻灯片配置数组中。新增章节仍然像编写页面配置，不够适合作为长期课程内容入口。

第三版采用全新工程，不继承旧版 Vinext、Cloudflare、Drizzle、默认资源或嵌套 Git 记录。

## 2. 当前技术栈

- Next.js App Router 与 TypeScript；
- Tailwind CSS v4；
- shadcn/ui，仅保留实际使用的基础组件；
- MDX，用于文章式课程讲义；
- 自研演讲组件，用于 16:9 页面、渐进显示、备注与页码导航。

## 3. 当前内容结构

```text
web/src/content/courses/ai-foundations/
├── course.ts
└── chapters/01-llm-agent-intro/
    ├── meta.ts
    ├── article.mdx
    └── slides.tsx
```

- `meta.ts`：两种模式共享的标题、顺序、目标和目录。
- `article.mdx`：课后阅读与知识沉淀。
- `slides.tsx`：现场演讲的节奏、布局和演讲者备注。
- `web/src/lib/courses/registry.ts`：课程与章节的显式注册入口。

## 4. 页面

- `/`：课程首页；
- `/courses/ai-foundations`：课程目录；
- `/courses/ai-foundations/llm-agent-intro`：第一章阅读模式；
- `/courses/ai-foundations/llm-agent-intro/present`：第一章演讲模式；V3 初版为 16 页，当前 V3.1 已扩展为 22 页。

## 5. 历史版本

- 早期 HTML、PPT 与第一版 Web 工程：`artifacts/training/workbuddy/legacy/`；
- 第二版 Next.js + MDX 原型完整备份：`artifacts/training/workbuddy/web-v2-prototype/`。

归档包含源码和原始工程记录，可以回退；这些文件不再作为当前内容维护入口。

## 6. 学习状态边界

本次工作只重构公司培训网站。个人学习状态仍保持：`AGL-01-01`、`D1 了解`、`学习中`，没有自动进入下一知识点。
