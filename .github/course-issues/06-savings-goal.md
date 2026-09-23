---
title: "[Lab 06] Monthly savings goal progress (OpenCode orchestration)"
labels: lab-06, course-stub, opencode
lab: 06
---

## Context

oh-my-openagent (pinned) or native OpenCode `@` subagents as fallback.

## Task

Implement `course/src/savingsGoal.ts`:

- `goalProgress(saved: number, target: number): { pct: number; remaining: number; status: 'empty' | 'active' | 'done' }`
- Clamp pct to 0–100; `done` when saved >= target and target > 0.

## Acceptance criteria

- [ ] `course/tests/savingsGoal.test.ts` green.
- [ ] PR describes orchestration path used (plugin vs native fallback).
- [ ] No room-made dispatch layer.

## Out of scope

- Real bank transfers.
