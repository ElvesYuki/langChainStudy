import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("the first chapter separates detailed MDX from the 22-slide presentation", async () => {
  const article = await read("src/content/courses/ai-foundations/chapters/01-llm-agent-intro/article.mdx");
  const deck = await read("src/content/courses/ai-foundations/chapters/01-llm-agent-intro/slides.tsx");

  assert.match(article, /大模型：接收当前输入，再逐步生成输出/);
  assert.match(article, /模型负责生成，工具负责执行，智能体负责推进，人负责目标、授权和验收/);
  assert.match(article, /上下文不是越多越好/);
  assert.match(article, /tool: analyze_spreadsheet/);
  assert.match(article, /智能体循环怎样推进/);
  assert.match(article, /怎样给智能软件一份完整任务说明/);
  assert.doesNotMatch(article, /export const slides/);

  const slideIds = deck.match(/^    id: "/gm) ?? [];
  assert.equal(slideIds.length, 22);
  assert.match(deck, /function ConceptExplorer/);
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

test("page changes reset reveal state atomically without reusing visible nodes", async () => {
  const presenter = await read("src/components/presentation/presentation-deck.tsx");

  assert.match(presenter, /setPosition\(\{\s*index: safeIndex,/);
  assert.match(presenter, /RevealProvider key=\{current\.id\} step=\{step\}/);
  assert.doesNotMatch(presenter, /setIndex\(/);
  assert.doesNotMatch(presenter, /setStep\(/);
});

test("reveal steps follow semantic groups and match each slide declaration", async () => {
  const deck = await read("src/content/courses/ai-foundations/chapters/01-llm-agent-intro/slides.tsx");
  const starts = [...deck.matchAll(/^    id: "([^"]+)",/gm)];
  const slideOrders = new Map();

  for (let index = 0; index < starts.length; index += 1) {
    const start = starts[index];
    const end = starts[index + 1]?.index ?? deck.indexOf("];", start.index);
    const chunk = deck.slice(start.index, end);
    const orders = [...chunk.matchAll(/<Reveal order=\{(\d+)\}/g)].map((match) => Number(match[1]));
    const declaredSteps = Number(chunk.match(/steps: (\d+)/)?.[1] ?? 0);
    const maximumOrder = orders.length ? Math.max(...orders) : 0;

    assert.equal(maximumOrder, declaredSteps, `${start[1]} reveal steps do not match its declaration`);
    slideOrders.set(start[1], orders);
  }

  assert.deepEqual(slideOrders.get("cover"), [1, 2, 3]);
  assert.deepEqual(slideOrders.get("scenarios"), [1, 1, 2, 2, 3, 3]);
  assert.deepEqual(slideOrders.get("summary"), [1, 2, 3, 4, 5, 6]);
});

test("the clean stack contains only the intended site foundation", async () => {
  const packageJson = JSON.parse(await read("package.json"));

  assert.equal(packageJson.dependencies.next.replace(/^\^/, "").startsWith("16"), true);
  assert.ok(packageJson.devDependencies.tailwindcss);
  assert.ok(packageJson.dependencies.shadcn);
  assert.ok(packageJson.dependencies["@next/mdx"]);
  assert.equal(packageJson.dependencies.cmdk, undefined);
});
