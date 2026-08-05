# Agent Learning Studio

面向公司内部培训的多章节课程网站。技术栈为 Next.js App Router、TypeScript、Tailwind CSS v4、shadcn/ui 和 MDX。

## 本地启动

```bash
npm install
npm run dev
```

默认访问 `http://localhost:3000`。

当前工程为 V3.1：V3 完成全量工程重构，V3.1 在不改变干净架构的前提下恢复并增强第二版的内容密度。

## 当前页面

- `/`：课程首页。
- `/courses/ai-foundations`：课程目录。
- `/courses/ai-foundations/llm-agent-intro`：第一章阅读模式。
- `/courses/ai-foundations/llm-agent-intro/present`：第一章演讲模式。

第一章演讲稿共 22 页，支持概念点击切换、渐进显示、键盘翻页、全屏、演讲者备注、底部页码跳转以及跳到最前和最后。

## 内容组织

每章拆成三个明确入口：

```text
src/content/courses/<course>/chapters/<chapter>/
├── meta.ts       # 标题、顺序、学习目标和目录
├── article.mdx   # 文章式讲义
└── slides.tsx    # 现场演讲稿
```

课程统一登记在 `src/lib/courses/registry.ts`。阅读和演讲共用课程元数据与路由，但分别按照各自媒介组织内容。

## 组件边界

- `src/components/ui/`：实际使用的 shadcn/ui 基础组件。
- `src/components/content/`：概念卡、案例、流程和边界表等知识表达组件。
- `src/components/presentation/`：16:9 幻灯片、渐进展示、演讲者备注和页码跳转。
- `src/components/layout/`：网站级导航和布局。

## 验证

```bash
npm run check
```

该命令依次运行 ESLint、内容结构测试和生产构建。

当前测试数量为 3 个，依赖审计为 0 项漏洞。
