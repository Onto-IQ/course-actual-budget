# Onto-IQ Course Overlay — Paper Budget (Actual)

This repository is a **pinned fork** of [actualbudget/actual](https://github.com/actualbudget/actual) for the course **Build AI Multi-Agent with Claude Code (VIBE-CODE-L2)**.

## For learners

1. Do **not** Fork this repo for class work.
2. Click **Use this template** → create **your own** repo (public or private).
3. Clone **your** repo, then follow setup in the companion lab repo: `build-ai-multi-agent-lab` → `SETUP.md`.
4. Run `node scripts/create-course-issues.mjs` once to open the prepared issues in **your** repo.
5. Open PRs only against **your** default branch. Never open PRs to `actualbudget/actual` or `Onto-IQ/course-actual-budget` unless the instructor asks.

## Pin

- Upstream: `actualbudget/actual`
- Pinned commit at course freeze: `4e263d983da82f3cfed7e9cf5ce0d14c1585f7b9`
- License: MIT (keep upstream `LICENSE`)

## What counts as the product

- Merged PRs in **your** repo with tests/CI green
- Local Actual running with **demo/sample data only** (no real bank sync, no real credentials)
- Capstone feature unique to you + a **public URL** (Fly.io / PikaPods / instructor-approved host)

## Watch vs product

Command Center (if used) is **optional observability**. It is never the acceptance criteria for a lab.

## Community tools (not room-made harness)

Use native Claude Code / OpenCode features plus community add-ons (superpowers, oh-my-openagent, GitHub MCP, Playwright MCP). Do not invent a custom orchestration layer between the two CLIs except for **cross-model review** (Lab 07).
