# Thread B handoff — EOS restructure (Portfolio / Pipeline / Goal-detail)

> **Date:** 2026-05-21
> **Branch:** `feat/portfolio-pipeline-pages` (local-only, NOT pushed)
> **Worktree:** `/Users/richardmoy/Code/ai/Insights/.claude/worktrees/eager-mccarthy-bec80e`
> **Epic:** `Insights-8vkz` (EPIC: Align EOS surface to Direction-C v4 redesign)
> **Coordination bead:** `Insights-rtoj` (closed)
> **Spec:** `docs/10-architecture/design-reference/redesign-2026-05-21/02-EOS-restructure-handoff.md`

## TL;DR

Eight commits stage the EOS-restructure spec in three usable surfaces — `/portfolio`, `/pipeline-v2`, and `/g/:goalId` — with two slices of inline-affordance work (Thread A's Q3 staging) already shipped. Branch is ready for verification on a Node-24 checkout; **do not push** until the smoke-test week per `Insights-sxls` plays out.

## Commit log

| SHA | Scope |
|---|---|
| `cb2caea5` | `/portfolio` + `/pipeline-v2` wired to PortfolioBoard / PipelineBoard widgets |
| `873106f8` | Mapping-helper unit tests (14 specs) |
| `70ecbecf` | Owner filter + last-touch signal now functional |
| `31840ea0` | `/g/:goalId` Goal/Deal detail page (sectioned, BlockHead, no tabs) |
| `f9f6663c` | Portfolio rollup card + loader test + fixtures + parity tests |
| `93abb4f6` | Inline sibling-link nav strip (stopgap until V4Shell's EosZoomStrip) |
| `92e35d01` | **Slice 1**: inline + Add task + Log a touch on `/g/:goalId` |
| `d58df827` | **Slice 2**: inline + Add stakeholder on `/g/:goalId` |

Total LOC delta: ~2,700 added (most in `app/features/eos/`, plus a refactor in `opportunities/` that extracts shared stakeholder helpers).

## What's live on the branch

### `/a/:account/:project/portfolio`
- Goals = root tasks with at least one child.
- Stream column from `task.cluster` (sales / marketing / product / trust-risk / other).
- Urgency tint from `due_date` proximity with priority as tiebreaker.
- Rollup card picks dominant-urgency headline + urgent/soon counts.

### `/a/:account/:project/pipeline-v2`
- Deals = opportunities. Stages from account config; type derived from id (`closed-*` gated, `prospect/lead/inbound` passive, else active).
- Owner filter buckets via `deriveOwnerKind(opp.owner_id, currentUserId)`: me / delegated / team.
- `lastTouchDays` from `opportunities.updated_at` so the stuck signal can fire.

### `/a/:account/:project/g/:goalId`
- Resolver tries opportunity first, then root task, then 404.
- BlockHead-sectioned content, no tabs (per spec §"things to double-check" §1).
- Opportunity lens: Path-to-close dot row, Stakeholders (inline + Add via LinkPersonDialog), Tasks (inline + Add via TaskCreateModal, task_links join), Activity (inline Log a touch + recent 5).
- Task lens: Subtasks (inline + Add via parent_task_id), Context, Deadline, Activity.

## Decisions captured (from Insights-rtoj coordination with Thread A)

| Q | Decision | Action |
|---|---|---|
| EosZoomStrip now or wait? | **Wait** — build with V4Shell. Stopgap: 4-line inline `<nav>` per page, marked `Insights-rtoj` for trivial deletion. | ✅ Done (`93abb4f6`) |
| Swap `/pipeline-v2` → `/pipeline`? | **Swap after 1 work-week of staging dogfooding.** Move legacy to `/pipeline-old` for 1 sprint, then delete. | ⏸ Tracked in `Insights-sxls` |
| `/g/:goalId` affordances inline or link-out? | **Inline, staged.** Slice 1 (+ Add task / Log a touch). Slice 2 (+ Add stakeholder). Slice 3 (Edit path) deferred. | ✅ Slices 1+2 done. Slice 3 = `Insights-ctz4` (P3 deferred). |

## Open beads on the epic

| Bead | Status | Why |
|---|---|---|
| `Insights-sxls` | open, P2 | Awaiting smoke-test week before `/pipeline-v2` → `/pipeline` rename |
| `Insights-ctz4` | open, P3 | Edit path / Graph reorder; needs product call on drag-inline vs modal + likely schema change before code |

## Files Thread A (or anyone else) should know about

### New files
- `app/features/eos/pages/portfolio.tsx`
- `app/features/eos/pages/pipeline-v2.tsx`
- `app/features/eos/pages/goal-detail.tsx`
- `app/features/eos/lib/portfolio-mapping.ts`
- `app/features/eos/lib/pipeline-mapping.ts`
- `app/features/eos/lib/goal-resolver.ts`
- `app/features/eos/__fixtures__/portfolio.fixture.ts`
- `app/features/eos/__fixtures__/pipeline.fixture.ts`
- `app/features/eos/routes.ts`
- `app/features/opportunities/server/stakeholders.server.ts` ← **shared with `/opportunities/:id`**

### Touched (small surgical changes)
- `app/routes.ts` — registers `eosRoutes`
- `app/utils/route-definitions.ts` — adds `routes.portfolio()`, `routes.pipelineV2()`, `routes.goal(id)`
- `app/features/tasks/api/tasks.tsx` — added `parent_task_id` to `TASK_FIELDS` so inline + Add task can parent properly
- `app/components/dialogs/LinkPersonDialog.tsx` — additive controlled-open + `formAction` props, no breaking changes
- `app/features/opportunities/pages/opportunityDetail.tsx` — delegates stakeholder action handlers to the shared server module (zero behavior change)

### Deliberately NOT touched
- `app/components/layout/*` — shell
- `app/features/v4/*` — Thread A territory
- `app/routes/_ProtectedLayout.tsx` — shell
- Any banner/dock/sidebar code

## What's NOT done (and why)

| | Reason |
|---|---|
| Push to remote | Brief said local-only |
| Merge to `staging` / `main` | Pending verification + Rick's call |
| `EosZoomStrip` primitive | Thread A is building V4Shell; would get rebuilt |
| `/triage`, `/streams` | Out of scope per spec |
| `daysInStage` | No schema field; would need stage-change audit table |
| Stake aggregation on Portfolio | Tasks have no $ field |
| Slice 3 affordances | Deferred per Thread A; product call needed |

## Verification

From a properly-set-up checkout (Node ≥ 24.3):

```
git checkout feat/portfolio-pipeline-pages
pnpm install
pnpm test app/features/eos
```

44 specs across 6 files should pass. Manual smoke:

1. Visit `/a/:acct/:proj/portfolio` — should see goals grouped by stream column with rollup card.
2. Click a goal card → lands on `/g/:goalId`.
3. On a deal-goal: + Add stakeholder, + Add task, Log a touch should all work inline without leaving the page; new entries appear on revalidate.
4. Visit `/a/:acct/:proj/pipeline-v2` — kanban with owner filter and "Hide stuck" toggle should actually filter.
5. Existing `/opportunities/:id` stakeholder add should still work (regression check on the shared helpers refactor).

## Why this was worth it

The original brief was just "wire the gen-ui widgets to real pages." What got built is a credible end-to-end EOS surface: operators can drop into Portfolio, drill to a Goal/Deal, and capture next steps + activity without ever leaving the new pages. That's the redesign's central premise (one detail surface, sectioned, no jumps) demonstrated end-to-end on real data instead of fixtures.

The shared `stakeholders.server.ts` refactor — extracted from `opportunityDetail.tsx` — is the only file outside `app/features/eos/` that contains real new logic. Everything else is a one-line additive change. If the branch needs to be unwound, the blast radius is small.
