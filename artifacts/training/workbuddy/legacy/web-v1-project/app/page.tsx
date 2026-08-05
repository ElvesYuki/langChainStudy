"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const TOTAL = 10;
const fragments = [2, 3, 3, 3, 5, 4, 3, 4, 3, 1];

const speakerNotes = [
  "约 1 分钟｜开场不解释技术名词。先问大家：我们最近使用 AI，是在问问题，还是已经开始把工作交给它？今天只建立一套共同语言。",
  "约 3 分钟｜从聊天框、AI 助手到智能体软件。强调变化不在于回答更长，而在于软件开始围绕目标连续推进。",
  "约 4 分钟｜统一三个概念：大模型是能力引擎；AI 应用把模型包装成软件；上下文是这次任务真正提供的信息。",
  "约 4 分钟｜工具调用意图不等于权限。智能体是角色，工具是动作，授权与验收构成边界。",
  "约 4 分钟｜按输入、判断、行动、观察、验证讲循环。失败或未通过时会回到前面，而不是一条直线。",
  "约 6 分钟｜现场用 WorkBuddy 演示。每按一次空格推进一个阶段：读取材料、制定计划、执行、生成产物。最终一定回到原始材料验收。",
  "约 3 分钟｜邀请三个部门各举一个任务。材料和工具不同，但结构相同：目标、上下文、工具、产物、验收。",
  "约 3 分钟｜不要只教提示词技巧。复杂任务要把完成标准说清楚。让大家记住页面底部的五个动词。",
  "约 1.5 分钟｜快速判断题。三个说法都不对：应用不等于模型；调用意图不等于权限；生成产物不等于完成任务。",
  "约 0.5 分钟｜用五句话收束，并预告下一次可以进入 WorkBuddy 实操、任务设计和安全边界。",
];

const show = (step: number, need: number) =>
  `reveal ${step >= need ? "is-visible" : ""}`;

function Brand({ page }: { page: number }) {
  return (
    <>
      <div className="brand">AI WORK SOFTWARE · 01</div>
      <div className="page-number">{String(page + 1).padStart(2, "0")}</div>
    </>
  );
}

function SlideTitle({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <header className="slide-title">
      <span>{eyebrow}</span>
      <h2>{children}</h2>
    </header>
  );
}

function Cover({ step }: { step: number }) {
  return (
    <div className="cover-layout">
      <div className="cover-copy">
        <div className="cover-kicker">30 MIN · 全员认知培训</div>
        <h1>大模型与智能体<br /><em>工作软件初识</em></h1>
        <p className={show(step, 1)}>从理解概念开始，学会把任务交给 AI 软件。</p>
        <div className={`cover-meta ${show(step, 2)}`}>
          <span>概念统一</span><i /> <span>WorkBuddy 演示</span><i /> <span>跨部门迁移</span>
        </div>
      </div>
      <div className="agent-orbit" aria-hidden="true">
        <div className="orbit orbit-a"><span>DOC</span><span>XLS</span><span>PPT</span></div>
        <div className="orbit orbit-b"><span>计划</span><span>执行</span><span>验收</span></div>
        <div className="agent-core"><b>AI</b><small>AGENT</small></div>
        <div className="signal signal-a" /><div className="signal signal-b" />
      </div>
      <div className="cover-hint">按空格键开始 <kbd>SPACE</kbd></div>
    </div>
  );
}

function Evolution({ step }: { step: number }) {
  const items = [
    { no: "01", title: "聊天", desc: "提出问题，得到回答", accent: "cyan" },
    { no: "02", title: "助手", desc: "在软件中完成某一步", accent: "blue" },
    { no: "03", title: "智能体", desc: "围绕目标连续推进", accent: "violet" },
  ];
  return (
    <>
      <Brand page={1} />
      <SlideTitle eyebrow="01 · 软件变化">AI 软件正在从“回答问题”走向“交付结果”</SlideTitle>
      <div className="evolution-line" />
      <div className="evolution-grid">
        {items.map((item, i) => (
          <article className={`evolution-card ${item.accent} ${show(step, i + 1)}`} key={item.no}>
            <span>{item.no}</span><h3>{item.title}</h3><p>{item.desc}</p>
            {i < 2 && <div className="flow-arrow">→</div>}
          </article>
        ))}
      </div>
      <div className={show(step, 3) + " takeaway"}>变化的关键：从生成内容，走向围绕目标连续执行。</div>
    </>
  );
}

function Concepts({ step }: { step: number }) {
  const rows = [
    ["01", "大模型", "能力引擎", "负责理解、生成和判断；擅长生成，不代表事实已经验证。"],
    ["02", "AI 应用", "软件产品", "把模型、界面、规则、数据和工具组合成可以使用的软件。"],
    ["03", "上下文", "工作材料", "当前任务真正提供的信息：任务、文件、规则和执行结果。"],
  ];
  return (
    <>
      <Brand page={2} />
      <SlideTitle eyebrow="02 · 概念统一">先分清：模型、应用与上下文不是一回事</SlideTitle>
      <div className="concept-stack">
        {rows.map((row, i) => (
          <div className={`concept-row ${show(step, i + 1)}`} key={row[0]}>
            <b>{row[0]}</b><h3>{row[1]}</h3><span>{row[2]}</span><p>{row[3]}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function Boundaries({ step }: { step: number }) {
  const cards = [
    { key: "TOOL", title: "工具", desc: "读取文件、搜索信息、生成文档或执行系统操作", foot: "回答 → 行动", c: "cyan" },
    { key: "AGENT", title: "智能体", desc: "围绕目标选择步骤、调用工具并根据结果继续推进", foot: "单步 → 循环", c: "violet" },
    { key: "GUARD", title: "边界", desc: "系统授权决定能做什么，人工验收决定是否真正完成", foot: "意图 ≠ 权限", c: "coral" },
  ];
  return (
    <>
      <Brand page={3} />
      <SlideTitle eyebrow="03 · 行动与边界">工具让模型行动，循环让任务持续，边界让执行可信</SlideTitle>
      <div className="boundary-grid">
        {cards.map((card, i) => (
          <article className={`boundary-card ${card.c} ${show(step, i + 1)}`} key={card.key}>
            <div className="boundary-code">{card.key}</div><h3>{card.title}</h3><p>{card.desc}</p><strong>{card.foot}</strong>
          </article>
        ))}
      </div>
    </>
  );
}

function AgentLoop({ step }: { step: number }) {
  const loop = ["输入", "判断", "行动", "观察", "验证"];
  return (
    <>
      <Brand page={4} />
      <SlideTitle eyebrow="04 · 智能体循环">一次智能体任务，本质上是有边界的执行循环</SlideTitle>
      <div className="loop-stage">
        <div className="loop-ring" />
        {loop.map((item, i) => (
          <div className={`loop-node node-${i + 1} ${show(step, Math.min(i + 1, 4))}`} key={item}>
            <span>{i + 1}</span><b>{item}</b>
          </div>
        ))}
        <div className={`loop-center ${show(step, 5)}`}><b>未通过？</b><span>回到输入或等待人工补充</span></div>
      </div>
      <div className={show(step, 5) + " loop-caption"}>智能体不是“一次想完”，而是在结果与目标之间持续校正。</div>
    </>
  );
}

function WorkBuddyDemo({ step, advance }: { step: number; advance: () => void }) {
  const status = ["等待材料", "已读取 2 份材料", "计划已生成，等待确认", "正在分析并生成", "产物已就绪，等待验收"][step];
  return (
    <>
      <Brand page={5} />
      <SlideTitle eyebrow="05 · 软件演示">把一次培训需求分析交给 WorkBuddy</SlideTitle>
      <div className="demo-shell">
        <aside className="demo-side">
          <div className="demo-logo"><i />WORKBUDDY</div>
          <span>任务材料</span>
          <div className={`file-item ${step >= 1 ? "active" : ""}`}><b>表</b><p>培训报名统计.xlsx<small>部门 · 经验 · 关注问题</small></p></div>
          <div className={`file-item ${step >= 1 ? "active" : ""}`}><b>文</b><p>需求访谈记录.docx<small>产品 · 运营 · 研发 · 行政</small></p></div>
        </aside>
        <section className="demo-main">
          <div className="demo-top"><span>任务 / 培训需求分析</span><em className={`status s-${step}`}>{status}</em></div>
          <div className="prompt-card">
            <small>你交给它的任务</small>
            <p>统计各部门报名情况，总结最关注的问题，提出培训建议，并生成 5 页以内的汇报 PPT。无法确认的信息标记为“待确认”。</p>
          </div>
          <div className="agent-activity">
            <div className={step >= 2 ? "done" : ""}><i>1</i><p><b>制定处理计划</b><small>统计 → 归纳 → 建议 → 生成 → 检查</small></p></div>
            <div className={step >= 3 ? "done" : ""}><i>2</i><p><b>调用工具执行</b><small>读取表格和文档，形成结构化结论</small></p></div>
            <div className={step >= 4 ? "done" : ""}><i>3</i><p><b>生成并等待验收</b><small>培训需求分析.pptx · 5 页</small></p></div>
          </div>
          <button className="demo-next" onClick={(event) => { event.stopPropagation(); advance(); }} disabled={step >= 4}>
            {step >= 4 ? "等待人工验收" : "演示下一步"}<span>→</span>
          </button>
        </section>
      </div>
      <div className="demo-observe">只观察四件事：<b>上下文</b><i />计划<i />工具执行<i />人工验收</div>
    </>
  );
}

function Roles({ step }: { step: number }) {
  const roles = [
    ["文", "文档工作", "会议记录、制度", "纪要、报告"],
    ["数", "数据工作", "表格、指标", "分析、图表"],
    ["研", "研发工作", "代码、日志", "变更、测试"],
  ];
  return (
    <>
      <Brand page={6} />
      <SlideTitle eyebrow="06 · 跨部门迁移">岗位不同，任务结构相同</SlideTitle>
      <div className="role-table">
        <div className="role-head"><span>岗位</span><span>上下文</span><span>产物</span><span>共同结构</span></div>
        {roles.map((r, i) => (
          <div className={`role-row ${show(step, i + 1)}`} key={r[0]}>
            <div><i>{r[0]}</i><b>{r[1]}</b></div><p>{r[2]}</p><p>{r[3]}</p><strong>目标 → 工具 → 验收</strong>
          </div>
        ))}
      </div>
    </>
  );
}

function Delegation({ step }: { step: number }) {
  const rows = [
    ["01", "目标与产物", "最终完成什么？交付报告、表格还是 PPT？"],
    ["02", "材料与上下文", "参考哪些文件和数据？缺什么必须先询问？"],
    ["03", "约束与权限", "不能做什么？允许读取、修改或执行什么？"],
    ["04", "验收与确认", "怎样判断合格？哪些操作必须人工批准？"],
  ];
  return (
    <>
      <Brand page={7} />
      <SlideTitle eyebrow="07 · 任务委派">任务越复杂，越需要把“怎么才算完成”说清楚</SlideTitle>
      <div className="delegate-list">
        {rows.map((row, i) => (
          <div className={show(step, i + 1)} key={row[0]}><span>{row[0]}</span><b>{row[1]}</b><p>{row[2]}</p></div>
        ))}
      </div>
      <div className={show(step, 4) + " delegate-formula"}>说清目标 · 给足材料 · 明确边界 · 约定产物 · 设置验收</div>
    </>
  );
}

function Misunderstandings({ step }: { step: number }) {
  const items = [
    ["A", "WorkBuddy 就是一个大模型", "它是使用模型、数据和工具构建的 AI 应用。"],
    ["B", "模型提出调用工具，就代表拥有权限", "调用意图不等于系统授权。"],
    ["C", "生成了 PPT，就代表任务正确完成", "产物仍需依据和人工验收。"],
  ];
  return (
    <>
      <Brand page={8} />
      <SlideTitle eyebrow="08 · 快速判断">三个说法，检验我们是否真正理解智能体</SlideTitle>
      <div className="mis-list">
        {items.map((item, i) => (
          <article className={show(step, i + 1)} key={item[0]}><i>{item[0]}</i><div><h3>{item[1]}</h3><p><b>错误：</b>{item[2]}</p></div><strong>×</strong></article>
        ))}
      </div>
    </>
  );
}

function Summary({ step }: { step: number }) {
  const points = ["大模型是能力引擎", "上下文决定它能看到什么", "工具让回答走向行动", "循环让任务持续推进", "人负责目标、权限和验收"];
  return (
    <div className="summary-layout">
      <div className="summary-copy">
        <span>带走这五句话</span><h2>理解智能体，<br />从理解边界开始</h2>
        <p>下一次：WorkBuddy 实操、任务设计与安全边界。</p>
      </div>
      <div className={`summary-grid ${show(step, 1)}`}>
        {points.map((p, i) => <div key={p}><span>0{i + 1}</span><b>{p}</b></div>)}
      </div>
    </div>
  );
}

export default function Home() {
  const [page, setPage] = useState(0);
  const [step, setStep] = useState(0);
  const [notesOpen, setNotesOpen] = useState(false);
  const touchX = useRef<number | null>(null);

  const next = useCallback(() => {
    if (step < fragments[page]) setStep((value) => value + 1);
    else if (page < TOTAL - 1) { setPage((value) => value + 1); setStep(0); }
  }, [page, step]);

  const previous = useCallback(() => {
    if (step > 0) setStep((value) => value - 1);
    else if (page > 0) { const nextPage = page - 1; setPage(nextPage); setStep(fragments[nextPage]); }
  }, [page, step]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (["ArrowRight", "PageDown", " "].includes(event.key)) { event.preventDefault(); next(); }
      if (["ArrowLeft", "PageUp"].includes(event.key)) { event.preventDefault(); previous(); }
      if (event.key.toLowerCase() === "f") document.documentElement.requestFullscreen?.();
      if (event.key.toLowerCase() === "n") setNotesOpen((value) => !value);
      if (event.key === "Home") { setPage(0); setStep(0); }
      if (event.key === "End") { setPage(TOTAL - 1); setStep(fragments[TOTAL - 1]); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, previous]);

  const current = [
    <Cover step={step} key="cover" />,
    <Evolution step={step} key="evolution" />,
    <Concepts step={step} key="concepts" />,
    <Boundaries step={step} key="boundaries" />,
    <AgentLoop step={step} key="loop" />,
    <WorkBuddyDemo step={step} advance={next} key="demo" />,
    <Roles step={step} key="roles" />,
    <Delegation step={step} key="delegation" />,
    <Misunderstandings step={step} key="misunderstandings" />,
    <Summary step={step} key="summary" />,
  ][page];

  return (
    <main
      className={`presentation slide-${page}`}
      onTouchStart={(event) => { touchX.current = event.touches[0].clientX; }}
      onTouchEnd={(event) => {
        if (touchX.current === null) return;
        const delta = event.changedTouches[0].clientX - touchX.current;
        if (delta < -60) next(); if (delta > 60) previous(); touchX.current = null;
      }}
    >
      <section className="slide-canvas" aria-live="polite">{current}</section>
      <nav className="controls" aria-label="演讲控制">
        <button onClick={previous} disabled={page === 0 && step === 0} aria-label="上一步">←</button>
        <button className="notes-button" onClick={() => setNotesOpen((value) => !value)} aria-label="演讲者备注">N</button>
        <button onClick={() => document.documentElement.requestFullscreen?.()} aria-label="全屏">F</button>
        <button onClick={next} disabled={page === TOTAL - 1 && step >= fragments[page]} aria-label="下一步">→</button>
      </nav>
      <div className="progress" aria-hidden="true"><span style={{ width: `${((page + Math.min(step / Math.max(fragments[page], 1), .95)) / (TOTAL - 1)) * 100}%` }} /></div>
      <div className="shortcut-hint"><span>← → 翻页</span><span>F 全屏</span><span>N 备注</span></div>
      {notesOpen && <aside className="speaker-notes"><button onClick={() => setNotesOpen(false)}>×</button><span>演讲者备注 · {page + 1}/{TOTAL}</span><p>{speakerNotes[page]}</p></aside>}
    </main>
  );
}
