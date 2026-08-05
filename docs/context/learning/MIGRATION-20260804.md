---
owner: elves
last_updated: 2026-08-04
status: completed
source_project: /Users/elves/myproject/py_template/py_template
target_project: /Users/elves/myproject/study/langChainStudy
---

# Agent 工程化学习资料迁移说明

## 1. 迁移目的

将个人 Agent 工程化学习资料从 PEF 产品项目分离到当前学习项目，建立“学习项目唯一写入、PEF 只读参考”的边界。

## 2. 已迁移资料

- `docs/context/learning/README.md`
- `docs/context/learning/Agent工程化系统学习总纲-课程与PEF项目映射-20260804.md`
- 当前学习项目的边界规则 `AGENTS.md`
- 当前学习状态记录 `docs/context/learning/progress.md`

## 3. 源侧事实

首次迁移检查时，PEF 的 `docs/context/learning/` 只有学习入口和系统学习总纲两份文件，在 PEF 中没有找到：

- `AGL-01-01` 独立讲解笔记
- 独立学习进度文件
- 其他专题讲解文档
- 更早的迁移说明

首次迁移没有伪造不存在于 PEF 的讲解笔记。随后用户提供了上次学习的完整原文，已作为历史快照补迁入：

- `docs/context/learning/topics/AGL-01-01-模型生命周期-D1讲解.md`

该原文保留讲解开始前的“未开始”表述；当前权威状态依据讲解已经发生、但尚未自测和复述的明确事实，仍登记为“学习中”。

## 4. PEF 处理方式

- 本次仅将资料复制到当前学习项目。
- 未删除或修改 PEF 源文件。
- 未修改 PEF 的 Todo、History、代码、数据库、配置、测试或 Git 状态。
- 后续学习资料和状态只更新当前学习项目。

## 5. 后续规则

- PEF 中残留的学习资料只作为迁移来源快照，不再作为学习状态权威来源。
- 当前项目的 `docs/context/learning/` 是学习资料和状态的唯一权威位置。
- 如果后续找到旧讲解内容，应以新增迁移记录的方式导入，不覆盖已形成的学习事实。
