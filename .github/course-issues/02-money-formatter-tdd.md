---
title: "[Lab 02] Implement course money formatter with TDD (superpowers)"
labels: lab-02, course-stub, tdd
lab: 02
---

## Context

Use obra/superpowers skills: brainstorming → writing-plans → TDD → subagent-driven-development.

## Task

Implement `course/src/moneyFormat.ts` so tests in `course/tests/moneyFormat.test.ts` pass.

Required API:

- `formatTHB(satangOrNumber: number): string` — formats as Thai Baht style with `฿` and two decimals for display from major units (baht).
- `parseLooseAmount(input: string): number | null` — parses `"1,234.50"`, `"1234"`, rejects empty/invalid.

## Acceptance criteria

- [ ] `node --test course/tests/moneyFormat.test.ts` (or the script in `course/package.json`) is green.
- [ ] PR includes a short plan (from writing-plans / Plan mode).
- [ ] No secrets committed.

## Out of scope

- Wiring into Actual UI (optional stretch only).
