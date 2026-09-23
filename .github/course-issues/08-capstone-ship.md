---
title: "[Lab 08] Capstone — your finance feature + public URL"
labels: lab-08, capstone, ship
lab: 08
---

## Context

Personal feature so each learner's product differs. Full workflow: issue → plan → multi-agent build → test → cross-model review → ship.

## Task

Propose and implement **one** feature, for example:

- Thai monthly spending report (text or HTML)
- Import parser for a **sample** Thai bank CSV (fixture only)
- Dashboard widget for a specific persona (student / freelancer / family)
- Exchange-rate helper using a **public** API (e.g. BOT rates) with key in env only
- Optional advanced: tiny MCP server wrapping a course helper (not required)

Prefer implementing under `course/` and/or a clearly scoped Actual UI touch.

## Acceptance criteria

- [ ] New issue written by the learner (can extend this one) with acceptance criteria.
- [ ] Tests green + PR merged to learner default branch.
- [ ] **Public URL** of the running app or capstone page (Fly.io / PikaPods / Vercel for static report — instructor-approved).
- [ ] Do not claim deploy success without a real URL.

## Out of scope

- Real bank credentials, live trading, wallet connect.
