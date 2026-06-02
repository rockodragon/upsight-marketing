# Weekly reports

> Auto-generated Friday evenings. Read Sunday during weekly review.
> Filename: `YYYY-MM-DD.md` (Friday's date).

---

## How they're generated

A Claude Code script pulls and synthesizes:

1. **From UpSight MCP**
   - `fetch_opportunities` — open deals, stage changes since last Friday
   - `fetch_research_pulse` — week-over-week metrics
   - `fetch_top_themes_with_people` — top 5 themes, mention deltas
   - `fetch_evidence` — new evidence captured this week

2. **From Beads**
   - Issues closed this week (build + GTM split)
   - Issues opened this week
   - Issues stuck >7 days
   - P0 items still open

3. **From the vault**
   - New `decisions.md` entries
   - New `dogfooding-log.md` entries

Output → `10-ops/weekly-reports/YYYY-MM-DD.md`

## Template structure

```markdown
# Weekly report — YYYY-MM-DD

## Sales pipeline (from UpSight)
- Open opportunities: N
- Stage changes this week: ...
- Stuck >7 days: ...

## Build (from Beads, label:#build)
- Shipped: ...
- Stuck: ...
- New: ...

## GTM (from Beads, label:#gtm)
- Shipped: ...
- Stuck: ...
- New: ...

## Customer signal (from UpSight)
- Top themes (with delta): ...
- New evidence highlights: ...

## Dogfooding (from vault)
- New friction logged: N entries
- P0 friction: ...

## Decisions made
- ...

## Suggested focus areas
(Claude Code reasons over the data and proposes 3-5 themes for next week)
```

## What you do with it

Sunday weekly review:
1. Read the report (5 min)
2. Skim suggestions
3. Rewrite `priorities.md` narrative (10 min)
4. Update Beads `priority:p0` labels to match
5. File the report — no edits needed

## Manual run prompt (until automated)

> "Generate this week's weekly report. Pull open opportunities and research pulse from UpSight MCP. Pull issues from Beads filtered by closed/opened/stuck this week, split by `#build` / `#gtm` label. Read new entries in `00-control/decisions.md` and `10-ops/dogfooding-log.md` since last Friday. Write to `10-ops/weekly-reports/YYYY-MM-DD.md` using the template structure. End with 3-5 suggested focus areas based on the data."

## Automation path (later)
- Cron via launchd on Friday 5pm
- Claude Code in headless mode
- Slack/email notification when ready
- Don't automate until you've run it manually 3 weeks and the format is stable
