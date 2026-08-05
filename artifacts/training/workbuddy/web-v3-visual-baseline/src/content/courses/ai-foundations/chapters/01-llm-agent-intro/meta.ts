import type { ChapterMeta } from "@/lib/courses/types";

export const chapterMeta = {
  course: "ai-foundations",
  slug: "llm-agent-intro",
  order: 1,
  title: "大模型与智能体初识",
  description: "借助一项跨部门培训需求分析任务，看懂智能软件如何从接收材料走向执行与交付。",
  duration: 30,
  audience: "公司多部门同事",
  updatedAt: "2026-08-05",
  status: "published",
  objectives: [
    "用输入与输出解释大模型的基本工作方式",
    "区分 AI 应用、上下文、模型、工具和智能体",
    "说清模型生成调用意图与工具真实执行的区别",
    "判断智能体能做什么，以及什么时候必须由人接管",
  ],
  sections: [
    { id: "先从一项真实工作任务开始", title: "贯穿案例" },
    { id: "你打开的是-ai-应用不是直接面对一个模型", title: "AI 应用" },
    { id: "上下文模型这一次真正拿到的信息", title: "上下文" },
    { id: "大模型接收当前输入再逐步生成输出", title: "大模型" },
    { id: "工具真正读取计算写入和执行", title: "工具" },
    { id: "智能体围绕目标持续推进任务", title: "智能体" },
    { id: "ai-应用大模型和智能体是什么关系", title: "概念关系" },
    { id: "最重要的职责边界", title: "职责边界" },
    { id: "为什么一定需要人接管", title: "失败与接管" },
    { id: "放回不同部门的工作中", title: "部门场景" },
    { id: "最后检查一下", title: "快速判断" },
  ],
} satisfies ChapterMeta;
