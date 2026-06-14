# Priorities — Week of 2026-05-11

> **Narrative only.** What matters this week and why.
> Actual tasks live in Beads (label `priority:p0` for top-5 work).
> Sales pipeline lives in UpSight + `00-control/traction.md`. Daily updates use the in-app pipeline dashboard (shipped 5/8); `pipeline.md` is now a weekly snapshot.

---

## Update for 6-1 week
- onboard and make interns productive. primarily give nessa tasks
- Nessa
	- research event organizers and startups in apollo
- Rick GTM
	- demo script & record
	- get cytodyme and TAS onboarded


## The thesis for this week

**Weekend land is done. This week: dogfood the brain, kick off v4 page migrations, force decisions on every stale deal, and ship the data-loss fix.**

Two-week review gap closed today. The chief-of-staff loop works — `Insights-a176.2` (brain icon + BAML `RecommendNextMove`) landed 5/9 with reasoning over real project state and a fast-path executor backed by 15 routing tests. CRM foundation got a massive shore-up over the past two weeks (5/7 ADR step 1+2, 5/9 import wizard, v4 left-rail layout, gen-ui canvas pattern with 7 fast paths). Build is in good shape. The gap is GTM: every active deal is 10–14 days stale while the foundation got built. Now: prove the loop on real work, start v4 page migrations under the codex spec, and clear the GTM debt.

## What matters

1. **Dogfood the brain icon — find prompt issues on real work.** Use it on Cytodyme prep + SSD demo + Patricia outreach this week. Capture surprises (wrong recommendations, missing context, slow renders, prompt-vs-output mismatch) into Beads as you hit them; log dogfooding friction in `10-ops/dogfooding-log.md`. The classifier shipped but is unproven on production state — the loop only matters if it's right.

2. **v4 web migration: kick off /people.** New epic `Insights-skhq` (Direction-C v4 web). First domino in the codex spec phased plan. Build the generic TanStack DataTable (`app/components/data-table/DataTable.tsx`), register it + page-chrome widgets in the gen-ui registry, then migrate `PeopleDataTable`. Sets the pattern for /orgs and /opportunities. Sibling epic `Insights-9p5j` (gen-ui fixes) — every v4 page must follow gen-ui principles, treat them as paired.

3. **P0 survey bug `Insights-kla8` — ship the fix.** Still open. Respondent email dropped when `respondent_fields=[]`. Production data loss + sales-killer if a prospect notices first. Stop the bleeding before any new GTM push.

4. **Cytodyme — force a decision.** Today (5/9) was the stated close target with no signal. Ping DJ today; if silent by Tue 5/12, ask for the "no" reason and qualify out. Use the brain icon for prep — it's the natural dogfood pairing with #1. Bead `Insights-prto`. *#gtm*

5. **SSD video + Patricia + Paul — clear the stale outreach.** Three GTM moves stale 12–14 days, each <1 hour. SSD video Mon 5/11 (`Insights-fr1u`). Patricia Loom Tue 5/12. Paul DM Wed 5/13. *#gtm*

## Why this set
- 2 build (#1 dogfood, #2 v4 migration), 1 build/sales (#3 data-loss fix that's also a deal-killer), 2 GTM (#4 sales-first, #5 batch outreach)
- #gtm: 2 priorities + 5 GTM beads (Cytodyme, SSD, Patricia, Paul, content). Rule satisfied.
- Sales-first nuance: Cytodyme is #4 (not #1) only because brain dogfood is the highest-leverage build move and naturally pairs with Cytodyme prep. Mon morning, brain dogfood + Cytodyme follow-up are the same workstream.
- Pipeline dashboard (5/8) is now the canonical pipeline view — `pipeline.md` shifts to weekly snapshot.

## Killed / deferred this week
- `Insights-a176.3` SessionIntent storage layer — defer unless dogfood surfaces "we need history search now" signal. Storage decision (Mastra Memory vs. parallel `session_intents` table) noted in the bead; lean Mastra Memory.
- `Insights-a176.1` smart suggestions loop — depends on dogfood feedback before specifying further.
- `Insights-eifx` token cost reduction — concrete TODOs documented; P2; backlog.
- `Insights-e1y6` person profile editable affiliations — important but not blocking sales or v4.
- `Insights-jp4q` Focus26 wave 2; `Insights-j490` + `Insights-xldh` LinkedIn 3+4 — defer until Cytodyme has a decision.
- Lenses/CRM additional org-scoping polish — 5/7 ADR was the right depth.
- Pricing page refresh, AgentCRM publishing — backlog.

---

## Where things actually live

| What | Where | Why |
|---|---|---|
| Tasks (build + GTM) | Beads | Structured, queryable, agent-friendly |
| Sales pipeline (daily) | In-app pipeline dashboard (5/8) | Dogfood it; real data |
| Sales pipeline (weekly snapshot) | `00-control/pipeline.md` | Reconcile from MCP at weekly review |
| Customer evidence + themes | UpSight | First-class data model |
| Strategy, decisions, narrative | This vault | Append-only narrative |
| Code + build artifacts | Repo | As before |

## Rules of engagement
- **Sales-first:** if a sales deal needs unblocking, it's #1.
- **#gtm minimum:** at least 2 GTM items (counted across Beads `#gtm` p0 tasks).
- **Time-box stuck items:** anything stuck >4 hours either gets unstuck, parked, or killed.
- **Dogfood log:** every UpSight friction point captured in `10-ops/dogfooding-log.md`. Don't fix on the fly — log first, decide later.
- **Friday EOD status writes:** the 3-week status.md gap was the warning; close it weekly.

## Notes for next review
- Themes file 12 days stale — refresh from MCP before Cytodyme follow-up.
- Evidence-log DJ entry placeholder — fill from real call notes.
- Roll out `app/lib/loader-timing.server.ts` to slow loaders during page migrations to find bottlenecks.
- Decide SessionIntent storage path (Mastra Memory vs. table) before writing migrations.
