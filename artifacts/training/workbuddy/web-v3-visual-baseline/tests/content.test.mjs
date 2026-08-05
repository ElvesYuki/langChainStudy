import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("the first chapter separates readable MDX from presentation TSX", async () => {
  const article = await read("src/content/courses/ai-foundations/chapters/01-llm-agent-intro/article.mdx");
  const deck = await read("src/content/courses/ai-foundations/chapters/01-llm-agent-intro/slides.tsx");

  assert.match(article, /大模型：接收当前输入，再逐步生成输出/);
  assert.match(article, /模型负责生成，工具负责执行，智能体负责推进，人负责目标、授权和验收/);
  assert.doesNotMatch(article, /export const slides/);

  const slideIds = deck.match(/^    id: "/gm) ?? [];
  assert.equal(slideIds.length, 16);
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

test("the clean stack contains only the intended site foundation", async () => {
  const packageJson = JSON.parse(await read("package.json"));

  assert.equal(packageJson.dependencies.next.replace(/^\^/, "").startsWith("16"), true);
  assert.ok(packageJson.devDependencies.tailwindcss);
  assert.ok(packageJson.dependencies.shadcn);
  assert.ok(packageJson.dependencies["@next/mdx"]);
  assert.equal(packageJson.dependencies.cmdk, undefined);
});
