# Priorities — Week of 2026-04-27

> **Narrative only.** What matters this week and why.
> Actual tasks live in Beads (label `priority:p0` for top-5 work).
> Sales pipeline lives in UpSight (this is a CRM — we dogfood it).

---

## The thesis for this week

**Close Cytodyme (or qualify out by Friday), send SSD demo video, and keep the build unblocked.**

Two named deals in motion at the same time. Cytodyme is the deeper eval — DJ is hands-on, close date May 9, needs Recall.ai working. SSD is a warm outbound play — they already have an UpSight workspace, a good demo video is all it takes to open the conversation. If both are progressing by Friday, GTM is healthy.

## What matters

1. **Cytodyme — close or qualify out.** Demo Wednesday Apr 29. DJ is evaluating as Apollo replacement. Blocker: Recall.ai Electron + Trigger.dev env vars (media sync broken). UpSight opportunity: `b71c41a8`. Every friction point → `40-ops/dogfooding-log.md`. Bead: `Insights-prto`.

2. **SSD demo video — record and send.** Startup San Diego (startupsd.org) has an active UpSight workspace. Angle: member/cohort intelligence for nonprofit accelerators. One good Loom-style walkthrough of their workspace. UpSight opportunity: `a7665c2f`. Bead: `Insights-fr1u`.

3. **Fix Recall.ai / Trigger.dev blockers.** Directly unblocks (1). `Insights-le1v` (Trigger.dev RECALL_API_KEY missing) and `Insights-6x12` (Windows Recall SDK empty transcripts) are the two P0 build issues.

4. **Revalidation bug fixed — ship it.** `/priorities` task list now revalidates correctly when status changes. Commit and push. Bead: `build:dogfooding-fix`.

5. **LinkedIn content + Patricia Sinay follow-up.** GTM minimum: at least 2 GTM items. Patricia gets a personalized video demo (nonprofit AI angle). LinkedIn post 3 or 4. Bead: `Insights-3idx`.

## Why this set
- 2 sales / 1 build fix / 1 content — GTM heavy intentionally, two deals in motion
- Sales is #1 and #2 — discipline kept
- Build work (#3, #4) directly enables sales or is already done

## Killed this week
- Focus26 wave 2 deprioritized in favor of SSD (warmer, faster path)
- OpenClaw Tailscale auth parked (time-box expired, escalate separately)

---

## Where things actually live

| What | Where | Why |
|---|---|---|
| Tasks (build + GTM) | Beads | Structured, queryable, agent-friendly |
| Sales pipeline | UpSight | We're a CRM. Dogfood it. |
| Customer evidence + themes | UpSight | First-class data model |
| Strategy, decisions, narrative | This vault | Append-only narrative |
| Code + build artifacts | Repo | As before |

## Rules of engagement
- **Sales-first:** if a sales deal needs unblocking, it's #1.
- **#gtm minimum:** at least 2 GTM items (counted across Beads `#gtm` p0 tasks).
- **Time-box stuck items:** anything stuck >4 hours either gets unstuck, parked, or killed.
- **Dogfood log:** every UpSight friction point captured in `40-ops/dogfooding-log.md`. Don't fix on the fly — log first, decide later.
