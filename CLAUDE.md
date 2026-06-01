# CLAUDE.md — Insights-Business/

> Planning, GTM, decisions, research notes for the UpSight project.
> NOT a place for tasks (Beads owns those) or sales pipeline (UpSight owns those).

---

## What lives here

- `00-control/` — priorities (narrative), decisions log, backlog, north-star
- `10-build/` — repo index (pointers to `../Insights/docs/`), light build context
- `20-gtm/` — messaging, content drafts, campaigns
- `30-research/` — themes, evidence log, ICP (curated views; source of truth is UpSight MCP)
- `40-ops/` — agents manual, weekly review template, weekly-reports, dogfooding log
- `99-archive/` — superseded files with date prefix

## What does NOT live here

- **Tasks** → Beads. If you find yourself making a task list in markdown, stop and create Beads issues instead.
- **Sales pipeline** → UpSight (MCP). Don't track deals here.
- **Customer evidence** → UpSight (MCP). The `evidence-log.md` file is a curated cache for fast access, not source of truth.
- **Code** → `../Insights/`

## Before starting work in this directory

1. Read `00-control/priorities.md` — narrative direction this week
2. Read `40-ops/agents.md` — your role
3. Read `00-control/decisions.md` — settled calls

## After finishing a session

1. Append dated entry to `00-control/status.md`: Shipped / Stuck / Decided / Surfaced
2. If you made a strategic decision, add one-line entry to `00-control/decisions.md`
3. If you hit UpSight friction while working, append to `40-ops/dogfooding-log.md`

## House rules

- **Append-only:** `status.md`, `decisions.md`, `dogfooding-log.md`. Newest at top.
- **No new top-level folders** without entry in `decisions.md` explaining why.
- **Numbered prefixes are intentional** (00-, 10-, 20-...) — don't reorganize.
- **Confirm before moving files to `99-archive/`** — show what you're moving and why.

## When in doubt

- Operating manual: `40-ops/agents.md`
- Weekly ritual: `40-ops/weekly-review.md`
- These two files are the system's self-documentation.
