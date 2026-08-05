# 公司培训内容维护入口

培训网站的可编辑源文件已经统一迁移到：

- Web 项目：`/Users/elves/myproject/study/langChainStudy/web`
- 第一章元数据：`web/src/content/courses/ai-foundations/chapters/01-llm-agent-intro/meta.ts`
- 第一章文章：`web/src/content/courses/ai-foundations/chapters/01-llm-agent-intro/article.mdx`
- 第一章演讲：`web/src/content/courses/ai-foundations/chapters/01-llm-agent-intro/slides.tsx`
- 阅读模式：`/courses/ai-foundations/llm-agent-intro`
- 演讲模式：`/courses/ai-foundations/llm-agent-intro/present`

当前第一章为 V3.2，共 22 页演讲内容。V3.1 负责内容增强，V3.2 根据文件、流程、层级、状态、职责和异常等不同关系采用不同构图。核心解释直接放在页面中，演讲者备注只补充节奏和讲法。

文章与演讲按照各自媒介独立编排，共用章节元数据和课程注册。新增章节时，在对应课程的 `chapters/` 下创建 `meta.ts`、`article.mdx` 和 `slides.tsx`，然后在 `web/src/lib/courses/registry.ts` 中登记。

旧版 HTML、PPTX 和旧 Web 工程保存在：

`/Users/elves/myproject/study/langChainStudy/artifacts/training/workbuddy/legacy`

第二版 Next.js + MDX 原型完整保存在：

`/Users/elves/myproject/study/langChainStudy/artifacts/training/workbuddy/web-v2-prototype`

V3 内容增强前的视觉与工程基线保存在：

`/Users/elves/myproject/study/langChainStudy/artifacts/training/workbuddy/web-v3-visual-baseline`

V3.2 视觉改版前的 V3.1 基线保存在：

`/Users/elves/myproject/study/langChainStudy/artifacts/training/workbuddy/web-v3.1-content-baseline`

`artifacts/` 仅用于历史追溯，不再作为内容编辑入口。培训材料与个人学习进度相互独立，修改培训网站不会自动改变 `docs/context/learning/progress.md` 中的学习状态。
