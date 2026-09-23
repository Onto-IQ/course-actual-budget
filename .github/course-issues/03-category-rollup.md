---
title: "[Lab 03] Category rollup helper via OpenCode Plan + @subagent"
labels: lab-03, course-stub, backend
lab: 03
---

## Context

OpenCode Build/Plan and `@` subagents; reuse skills from `.claude/skills` if superpowers is installed for OpenCode too.

## Task

Implement `course/src/categoryRollup.ts`:

- `rollupByCategory(rows: { category: string; amount: number }[]): Record<string, number>`
- Amounts are major units; ignore blank categories by bucket `uncategorized`.

## Acceptance criteria

- [ ] Tests in `course/tests/categoryRollup.test.ts` pass.
- [ ] PR created with OpenCode session notes (what Plan decided vs what Build did).
- [ ] PR targets learner repo only.

## Out of scope

- Real bank import.
