---
title: "[Lab 04] Permission boundary — block .env and real bank sync prompts"
labels: lab-04, security, permissions
lab: 04
---

## Context

Configure native permissions/hooks in Claude Code and OpenCode. Continue V2 "paper-only" idea without a room-made skill.

## Task

1. Add / update `.claude/settings.json` deny rules for reading/writing `.env*` and for shell that starts bank-sync style commands if present.
2. Add OpenCode permission config that refuses editing lockfiles and `.env*`.
3. Document in PR how you proved an agent was blocked (paste sanitized transcript excerpt).
4. MCP: allow GitHub tools that open PRs; deny merge/delete-branch style tools if configurable.

## Acceptance criteria

- [ ] Config files committed (no secrets inside).
- [ ] Evidence that a forbidden action was denied.
- [ ] README or PR note: "demo data only / no real bank credentials".

## Out of scope

- Building a custom MCP bus between Claude and OpenCode.
