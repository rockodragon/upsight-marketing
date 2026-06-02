# CLAUDE.md — UpSight GTM vault

> Planning, strategy, research, and GTM execution for UpSight.
> NOT a place for tasks (Beads owns those), sales pipeline (UpSight MCP owns that), or product specs/code (`../Insights/` owns those).

---

## The structure — a narrative, not a filing cabinet

Folders are numbered so they read top-to-bottom as a flow: **how we run → what we learn → what we decide → what we ship.**

- `00-control/` — **direction.** priorities, decisions, open-questions, status, north-star, traction. The control layer that bookends everything.
- `10-ops/` — **how we run.** agents manual, weekly review, dogfooding log, handoffs, repo-index pointer.
- `20-research/` — **what we learn (inputs).** Two halves:
  - `voice-of-customer/` — first-party: themes, evidence, ICP, survey tooling. What *our* users tell us.
  - `market-intel/` — external: competitors, keywords, ad-intel, monthly reports. The landscape around us.
- `30-strategy/` — **what we decide.** positioning, brand, pricing, messaging, GTM plan, personas/ICP. The thinking.
- `40-gtm/` — **what we ship.** Execution:
  - `campaigns/` — time-boxed, cross-channel initiatives (each: brief → assets → results).
  - `channels/` — evergreen programs: `content-seo/`, `lifecycle/` (all email), `outreach/`, `paid/`, `social/`, `events/`.
  - `assets/` — reusable library: `brand/`, `images/`, `video/`, `decks/`, `scripts/`, `collateral/`.
  - `experiments/` — one file per test (hypothesis → metric → result). Results graduate up to `20-research/`.
  - `plg/` — product-led motion: `onboarding/`, activation, `analytics/`. In-product, distinct from outbound channels.
- `99-archive/` — superseded files (`strategy/`, `gtm/`, dated snapshots).

### The learning loop
`00-control/open-questions.md` → spawns an experiment in `40-gtm/experiments/` (or research in `20-research/`) → the finding lands in `20-research/` → the resolved call closes as a one-liner in `00-control/decisions.md`.

## What does NOT live here

- **Tasks** → Beads. If you're making a task list in markdown, stop and create Beads issues instead.
- **Sales pipeline** → UpSight (MCP). Don't track deals here.
- **Customer evidence** → UpSight (MCP). `voice-of-customer/evidence-log.md` is a curated cache, not source of truth.
- **Product specs / PRDs / code** → `../Insights/` (`docs/20-features-prds/`, etc.).

## Boundaries that are easy to get wrong

- **Strategy vs execution.** Core messaging, positioning, and personas live in `30-strategy`. Channels *execute against* them — channel-specific copy (a LinkedIn hook, an ad headline) lives with the channel.
- **Customer research vs market intel.** First-party (what users say) → `voice-of-customer/`. External (competitors, SEO) → `market-intel/`.
- **Email is one home.** All lifecycle/nurture/broadcast email → `40-gtm/channels/lifecycle/`. PLG triggers it but doesn't house it.
- **PLG = in-product.** Onboarding/activation/analytics only. Outbound is a channel.
- **No funnel-stage folders.** TOFU/MOFU/BOFU is a tag, not a directory.

## Before starting work

1. Read `00-control/priorities.md` — direction this week.
2. Read `10-ops/agents.md` — your role.
3. Read `00-control/decisions.md` + `00-control/open-questions.md` — settled vs. open.

## After finishing a session

1. Append dated entry to `00-control/status.md`: Shipped / Stuck / Decided / Surfaced.
2. Strategic decision made? One-line entry in `00-control/decisions.md`.
3. New unknown surfaced? One line in `00-control/open-questions.md`.
4. Hit UpSight friction? Append to `10-ops/dogfooding-log.md`.

## House rules

- **Append-only:** `status.md`, `decisions.md`, `open-questions.md`, `dogfooding-log.md`. Newest at top.
- **No new top-level folders** without an entry in `decisions.md` explaining why.
- **Numbered prefixes encode the flow** (00→99). Don't renumber without a decision entry.
- **Confirm before archiving** — show what's moving to `99-archive/` and why.
- **`_UNSORTED-flagged/`** holds items pending a human call (misfiled data, personal files). Don't build on it; empty it.

## When in doubt

- Operating manual: `10-ops/agents.md`
- Weekly ritual: `10-ops/weekly-review.md`
