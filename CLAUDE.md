# CLAUDE.md — Course Paper Budget (Actual)

## Repo purpose

Pinned Actual Budget fork used as a **GitHub Template** for a multi-agent coding course. Learners work only in repos created from this template.

## Hard rules

- PRs target **this learner repo only** (`gh repo set-default` to the learner's own remote).
- Never open a PR to `actualbudget/actual` or the Onto-IQ template unless the instructor says so.
- **Paper-only finance:** do not configure real bank sync, do not ask for or store real bank credentials, use demo/sample data only.
- Do not commit secrets (`.env`, tokens, passwords). Reference env vars from MCP config.
- Prefer fixing/implementing items described in GitHub issues created from `.github/course-issues/`.

## Ownership hints

- UI / desktop client: `packages/desktop-client`
- Sync server: `packages/sync-server`
- Core logic: `packages/loot-core` (touch carefully; prefer smaller course stubs when issues say so)
- Course-only stubs and tests: `course/`

## Workflow

Interview → Plan → Build → Test → Ship. Stop when the issue's acceptance criteria pass (tests + UI), not when a round quota is hit.

## Tools

- Use GitHub MCP or `gh` for issues/PRs.
- Use Playwright MCP for UI evidence on multi-agent labs.
- Cross-CLI dispatch is only for **independent review by another model**, not as a custom bus.
