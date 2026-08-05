import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("the first chapter separates detailed MDX from the 22-slide presentation", async () => {
  const article = await read("src/content/courses/ai-foundations/chapters/01-llm-agent-intro/article.mdx");
  const deck = await read("src/content/courses/ai-foundations/chapters/01-llm-agent-intro/slides.tsx");
  const visuals = await read("src/content/courses/ai-foundations/chapters/01-llm-agent-intro/chapter-visuals.tsx");

  assert.match(article, /大模型：接收当前输入，再逐步生成输出/);
  assert.match(article, /模型负责生成，工具负责执行，智能体负责推进，人负责目标、授权和验收/);
  assert.match(article, /上下文不是越多越好/);
  assert.match(article, /tool: analyze_spreadsheet/);
  assert.match(article, /智能体循环怎样推进/);
  assert.match(article, /怎样给智能软件一份完整任务说明/);
  assert.doesNotMatch(article, /export const slides/);

  const slideIds = deck.match(/^    id: "/gm) ?? [];
  assert.equal(slideIds.length, 22);
  assert.match(visuals, /function ConceptExplorer/);
  assert.match(visuals, /function ToolCallConsole/);
  assert.match(visuals, /function ResponsibilitySwimlanes/);
  assert.match(visuals, /function EvidenceTimeline/);
  assert.match(visuals, /function ContextFunnel/);
  assert.match(visuals, /function AgentStateBoard/);
  assert.match(visuals, /function FailureBranches/);
  assert.doesNotMatch(deck, /SlideCard/);
  assert.match(deck, /id: "task-definition"/);
  assert.match(deck, /id: "agent-loop"/);
  assert.match(deck, /PresentationDeck/);
});

test("course registry exposes reader and presentation components", async () => {
  const registry = await read("src/lib/courses/registry.ts");
  const readerRoute = await read("src/app/courses/[course]/[chapter]/page.tsx");
  const presentRoute = await read("src/app/courses/[course]/[chapter]/present/page.tsx");

  assert.match(registry, /Article: IntroArticle/);
  assert.match(registry, /Deck: IntroDeck/);
  assert.match(readerRoute, /<Article \/>/);
  assert.match(presentRoute, /<Deck \/>/);
});

test("speaker notes and learning notes are separate per-slide panels", async () => {
  const presenter = await read("src/components/presentation/presentation-deck.tsx");
  const deck = await read("src/content/courses/ai-foundations/chapters/01-llm-agent-intro/slides.tsx");

  assert.match(presenter, /learningNotes\?:/);
  assert.match(presenter, /aria-label="演讲者备注"/);
  assert.match(presenter, /aria-label="学习笔记"/);
  assert.match(presenter, /SPEAKER NOTES/);
  assert.match(presenter, /LEARNING NOTES/);
  assert.match(deck, /id: "cover",[\s\S]*?learningNotes:/);
  assert.match(deck, /id: "case",[\s\S]*?learningNotes:/);
  assert.match(deck, /准确性：汇报中的人数和统计结果必须与源文件一致/);
  assert.match(deck, /诚实边界：材料没有提供的信息不能自行补全/);
});

test("page changes reset reveal state atomically without reusing visible nodes", async () => {
  const presenter = await read("src/components/presentation/presentation-deck.tsx");

  assert.match(presenter, /setPosition\(\{\s*index: safeIndex,/);
  assert.match(presenter, /RevealProvider key=\{current\.id\} step=\{step\}/);
  assert.doesNotMatch(presenter, /setIndex\(/);
  assert.doesNotMatch(presenter, /setStep\(/);
});

test("reveal steps follow semantic groups and match each slide declaration", async () => {
  const deck = await read("src/content/courses/ai-foundations/chapters/01-llm-agent-intro/slides.tsx");
  const visuals = await read("src/content/courses/ai-foundations/chapters/01-llm-agent-intro/chapter-visuals.tsx");
  const stepsFor = (id) => Number(deck.match(new RegExp(`id: "${id}",[\\s\\S]*?steps: (\\d+)`))?.[1]);

  assert.equal(stepsFor("cover"), 1);
  assert.equal(stepsFor("case"), 2);
  assert.equal(stepsFor("concept-map"), 4);
  assert.equal(stepsFor("scenarios"), 3);
  assert.equal(stepsFor("summary"), 6);
  assert.match(visuals, /order=\{Math\.floor\(index \/ 2\) \+ 1\}/);
  assert.match(visuals, /export function SummaryChain[\s\S]*order=\{6\}/);
});

test("the presentation uses a light canvas without full-slide dark surfaces", async () => {
  const deck = await read("src/content/courses/ai-foundations/chapters/01-llm-agent-intro/slides.tsx");
  const visuals = await read("src/content/courses/ai-foundations/chapters/01-llm-agent-intro/chapter-visuals.tsx");
  const shell = await read("src/components/presentation/presentation.css");
  const presenter = await read("src/components/presentation/presentation-deck.tsx");

  assert.doesNotMatch(deck, /<SlideFrame[^>]*\sdark/);
  assert.doesNotMatch(deck, /<SlideTakeaway dark/);
  assert.doesNotMatch(visuals, /bg-\[#07101f\]/);
  assert.match(shell, /#eaf0f8/);
  assert.match(presenter, /bg-white\/94/);
});

test("quick page navigation opens only when the progress bar is clicked", async () => {
  const presenter = await read("src/components/presentation/presentation-deck.tsx");
  const shell = await read("src/components/presentation/presentation.css");

  assert.match(presenter, /aria-label="打开页面快速跳转"/);
  assert.match(presenter, /aria-expanded=\{jumpOpen\}/);
  assert.match(presenter, /onClick=\{\(\) => setJumpOpen\(\(value\) => !value\)\}/);
  assert.match(presenter, /absolute inset-x-0 bottom-0 flex h-4/);
  assert.match(presenter, /presentation-progress-fill/);
  assert.doesNotMatch(presenter, /<Progress /);
  assert.doesNotMatch(presenter, /aria-label="上一步"/);
  assert.doesNotMatch(presenter, /aria-label="下一步"/);
  assert.doesNotMatch(presenter, /max-w-xs/);
  assert.match(shell, /linear-gradient\(90deg, #30c6f4, #4c78ff, #8657f4, #ff8366\)/);
  assert.doesNotMatch(presenter, /onMouseEnter=\{\(\) => setJumpOpen\(true\)\}/);
  assert.doesNotMatch(presenter, /onMouseLeave=\{\(\) => setJumpOpen\(false\)\}/);
});

test("presentation pages do not contain keyboard, mouse, or switching instructions", async () => {
  const presenter = await read("src/components/presentation/presentation-deck.tsx");
  const slides = await read("src/content/courses/ai-foundations/chapters/01-llm-agent-intro/slides.tsx");
  const visuals = await read("src/content/courses/ai-foundations/chapters/01-llm-agent-intro/chapter-visuals.tsx");
  const visiblePresentationSources = `${presenter}\n${slides}\n${visuals}`;

  for (const instruction of ["按空格", "方向键翻页", "点击左侧", "鼠标移入", "按 Enter", "快捷键提示"]) {
    assert.doesNotMatch(visiblePresentationSources, new RegExp(instruction));
  }
  assert.match(slides, /lead="它们处在智能软件的不同层次，承担不同职责。"/);
});

test("the case workbench reserves space above the takeaway", async () => {
  const visuals = await read("src/content/courses/ai-foundations/chapters/01-llm-agent-intro/chapter-visuals.tsx");

  assert.match(visuals, /export function CaseWorkbench[\s\S]*grid-rows-\[minmax\(0,1fr\)\][\s\S]*pb-\[4%\]/);
  assert.match(visuals, /Reveal className="min-h-0" order=\{2\}/);
  assert.match(visuals, /h-full overflow-hidden rounded-\[2rem\][\s\S]*p-\[6%\]/);
});

test("application layers use four constrained grid rows instead of absolute offsets", async () => {
  const visuals = await read("src/content/courses/ai-foundations/chapters/01-llm-agent-intro/chapter-visuals.tsx");
  const section = visuals.match(/export function ApplicationLayers\(\)[\s\S]*?\n}\n/)?.[0] ?? "";

  assert.match(section, /grid-rows-\[repeat\(4,minmax\(0,1fr\)\)\]/);
  assert.match(section, /Reveal className="min-h-0"/);
  assert.doesNotMatch(section, /absolute flex/);
  assert.doesNotMatch(section, /top-\[/);
});

test("the concept explorer keeps click selection and deck steps synchronized", async () => {
  const visuals = await read("src/content/courses/ai-foundations/chapters/01-llm-agent-intro/chapter-visuals.tsx");
  const primitives = await read("src/components/presentation/slide-primitives.tsx");

  assert.match(primitives, /export function useRevealStep/);
  assert.match(primitives, /export function useRevealStepSetter/);
  assert.match(visuals, /const revealStep = useRevealStep\(\)/);
  assert.match(visuals, /const setRevealStep = useRevealStepSetter\(\)/);
  assert.match(visuals, /Math\.min\(revealStep, concepts\.length - 1\)/);
  assert.match(visuals, /data-deck-space-advance/);
  assert.match(visuals, /onClick=\{\(\) => setRevealStep \? setRevealStep\(index\) : setManualSelection\(index\)\}/);
  assert.match(visuals, /grid-cols-\[\.36fr_\.64fr\]/);
  assert.match(visuals, /text-\[clamp\(34px,3\.4vw,66px\)\]/);
  assert.match(visuals, /grid h-\[43%\] grid-cols-3/);
  assert.match(visuals, /px-\[5%\] py-\[2%\]/);
  assert.match(visuals, /flex min-w-0 flex-col justify-center/);
});

test("presentation typography is sized for projection instead of dense web reading", async () => {
  const visuals = await read("src/content/courses/ai-foundations/chapters/01-llm-agent-intro/chapter-visuals.tsx");
  const primitives = await read("src/components/presentation/slide-primitives.tsx");
  const source = `${visuals}\n${primitives}`;
  const maximumSizes = [...source.matchAll(/text-\[clamp\([^,]+,[^,]+,(\d+)px\)\]/g)].map((match) => Number(match[1]));

  assert.ok(maximumSizes.filter((size) => size <= 14).length <= 10);
  assert.ok(maximumSizes.filter((size) => size >= 18).length >= 70);
  assert.match(primitives, /text-\[clamp\(16px,1\.25vw,24px\)\]/);
  assert.match(primitives, /text-\[clamp\(13px,0\.95vw,18px\)\]/);
  assert.match(visuals, /grid h-\[88%\] grid-rows-6/);
});

test("the clean stack contains only the intended site foundation", async () => {
  const packageJson = JSON.parse(await read("package.json"));

  assert.equal(packageJson.dependencies.next.replace(/^\^/, "").startsWith("16"), true);
  assert.ok(packageJson.devDependencies.tailwindcss);
  assert.ok(packageJson.dependencies.shadcn);
  assert.ok(packageJson.dependencies["@next/mdx"]);
  assert.equal(packageJson.dependencies.cmdk, undefined);
});
