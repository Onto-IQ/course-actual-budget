---
title: "[Lab 01] Add Thai empty-state copy for accounts list"
labels: lab-01, good-first-issue, frontend
lab: 01
---

## Context

Learners practice Claude Code Plan mode + Explore + GitHub MCP vs `gh`.

## Task

Edit `packages/desktop-client/src/components/accounts/AccountEmptyMessage.tsx`.

When the accounts list is empty, show Thai text (keep the existing Add account button):

`ยังไม่มีบัญชี — เพิ่มบัญชีตัวอย่างเพื่อเริ่มงบประมาณกระดาษ`

## Acceptance criteria

- [ ] The Thai sentence appears in `AccountEmptyMessage` (or an instructor-approved equivalent path).
- [ ] No TypeScript / lint regressions in touched files.
- [ ] PR opened against **this learner repo** with a short plan in the PR body + MCP vs `gh` note.
- [ ] Issue closed by the PR or linked with `Fixes #N`.
- [ ] UI check at http://localhost:3001/ when the app initializes. On Windows, if you hit `loot-core ... spawn yarn ENOENT` / `BackendInitFailure`, document it in the PR; the code change alone still counts for Lab 01.

## Out of scope

- Bank sync, OAuth, real credentials.
- Command Center / monitoring UI.
