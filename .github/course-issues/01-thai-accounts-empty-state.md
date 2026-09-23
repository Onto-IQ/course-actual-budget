---
title: "[Lab 01] Add Thai empty-state copy for accounts list"
labels: lab-01, good-first-issue, frontend
lab: 01
---

## Context

Learners practice Claude Code Plan mode + Explore + GitHub MCP vs `gh`.

## Task

When the accounts list has **zero accounts**, show a clear empty-state message that includes Thai text:

`ยังไม่มีบัญชี — เพิ่มบัญชีตัวอย่างเพื่อเริ่มงบประมาณกระดาษ`

Prefer a small, reviewable change under `packages/desktop-client` (or document the exact file you changed in the PR).

## Acceptance criteria

- [ ] Empty state is visible in the UI with the Thai sentence above (or instructor-approved equivalent).
- [ ] No TypeScript / lint regressions in touched files.
- [ ] PR opened against **this learner repo** with a short plan in the PR body.
- [ ] Issue closed by the PR or linked with `Fixes #N`.

## Out of scope

- Bank sync, OAuth, real credentials.
- Command Center / monitoring UI.
