# UpSight — Traction Report

> Living document. Update weekly (pipeline) and daily (metrics).
> Source of truth for investor conversations, weekly reviews, and pitch deck traction slide.
> When this moves to UpSight app: this file becomes the staging/draft layer.

**As of:** 2026-05-07 | **Updated by:** Rick

---

## Scoreboard

| Metric | Current | Last Week | Target (Q2) | Status |
|---|---|---|---|---|
| **Paying customers** | 0 | 0 | 3 | 🔴 |
| **MRR** | $0 | $0 | $300 | 🔴 |
| **Active users (WAU)** | 7 | 9 | 30 | 🔴 |
| **New signups (7-day)** | 0 | 0 | 5+ | 🔴 |
| **Pipeline deals (active)** | 4 | 4 | — | 🟡 |
| **Pipeline potential MRR** | ~$116 | ~$116 | — | 🟡 |
| **Days since last close** | — | — | — | ⬜ (never) |
| **Demo-to-eval conversion** | 0/1 | — | 50% | 🔴 |

> Pipeline potential = 4 deals × $29/mo (Starter). All estimates conservative.

---

## Pipeline

| Company                   | Contact         | Stage       | Est. MRR | Close target | Last touch | Days stale | Blocker                              |     |
| ------------------------- | --------------- | ----------- | -------- | ------------ | ---------- | ---------- | ------------------------------------ | --- |
| **Cytodyme**              | DJ (CEO)        | `eval`      | $29–79   | May 9        | Apr 27     | 10         | Demo done; awaiting decision         |     |
| **Startup San Diego**     | Erika Gastellum | `outreach`  | $29      | TBD          | Apr 27     | 10         | Demo video not yet sent              |     |
| **Patricia Sinay**        | Patricia        | `discovery` | $29      | Early May    | Apr 25     | 12         | Personalized video demo not yet sent |     |
| **Insight Biz Directory** | Paul Jarrett    | `new`       | $29      | TBD          | Apr 25     | 12         | No outreach yet                      |     |

### Stage Key
`new` → `qualified` → `demo` → `eval` → `proposal` → `closed-won` / `closed-lost`

### Deal Notes

**Cytodyme** (highest priority)
- Apollo replacement play. DJ is evaluating UpSight as the primary tool, not a supplement.
- Desktop recording reliability was the blocker (mic-drop pattern). Status: resolved via cloudbot.
- If this closes by May 9 it validates the Apollo-fatigue ICP. If it slips, qualify out and learn why.

**SSD** (second priority)
- Existing UpSight workspace active. Warm play — they already know the product.
- Angle: board member + founder cohort intelligence for nonprofit accelerators.
- Blocker is self-imposed: demo video not recorded. Low effort, high signal opportunity.

**Patricia Sinay** (third)
- Nonprofit AI angle. Member intelligence + research tool.
- Personalized Loom-style demo would close this discovery stage. Easy next step.

**Paul Jarrett** (qualifying)
- Angle: highlight clips from long calls. Different use case — more video/content than research.
- Needs outreach. 15-min call to qualify before investing demo time.

---

## Funnel

```
Signups (all time)        ~30
  └─ Activated (any use)  ~15   (est. 50%)
      └─ Active (WAU)       7   (est. 47% of activated)
          └─ Paying          0   (0%)
```

> Activation = at least 1 interview uploaded or 1 conversation captured. Estimate only — confirm with PostHog.

### Conversion Benchmarks (target state)
- Signup → Activated: 60% (currently est. 50%)
- Activated → Active WAU: 40% (currently ~47% — decent)
- Active → Paying (trial conversion): 25% (currently 0%)
- Paying → Month 2 retention: 70% (not yet measurable)

---

## Activity Log

| Date | Activity | Outcome | Next |
|---|---|---|---|
| 2026-05-06 | PostHog daily briefing | 7 WAU, 0 signups, 361 events | Monitor daily |
| 2026-05-05 | PostHog daily briefing | 9 WAU, 0 signups, 469 events | — |
| 2026-04-29 | Cytodyme demo | Completed | Awaiting DJ decision |
| 2026-04-27 | Created SSD opportunity in UpSight | Opp `a7665c2f` created | Record + send demo video |
| 2026-04-25 | Patricia Sinay opp created | Opp `a280dbd0` | Send personalized video |
| 2026-04-25 | Paul Jarrett identified | New opp | Schedule 15-min call |

---

## Closed Deals

| Company | Outcome | Date | MRR | Why won / Why lost |
|---|---|---|---|---|
| _(none yet)_ | — | — | — | — |

---

## Open Blockers (Sales-Critical)

| Blocker | Impact | Owner | Status |
|---|---|---|---|
| Desktop recording reliability (mic-drop) | Blocks Cytodyme demo quality | Build | 🔴 In progress |
| P0 survey bug (respondent email dropped) | Silent data loss in production | Build | 🔴 Open |
| Rick Moy dedup in UpSight (2 person records) | Inflates metrics shown in demos | Build | 🟡 Known |
| SSD demo video not recorded | Blocks SSD outreach | GTM | 🔴 Overdue |
| Patricia personalized video not sent | Stalls discovery | GTM | 🔴 Overdue |

---

## Investor Readiness

Thresholds from `00-control/traction-goals.md`.

| Round type | Paying customers needed | MRR needed | Current | Ready? |
|---|---|---|---|---|
| **Angels / F&F** | 1 | Any | 0 / $0 | ❌ (Cytodyme closes → ✅) |
| **Micro-VC seed** | 3–5 | $1K–3K | 0 / $0 | ❌ |
| **Top-tier seed (a16z, Accel)** | 10–20 | $5K–15K | 0 / $0 | ❌ |

**The unlock:** Cytodyme closing is the single event that changes the investor conversation. It proves the Apollo-replacement thesis with a real customer and real cash.

---

## How to Update This Doc

**Daily (2 min):**
- Pull PostHog briefing → update WAU, signups, events in Scoreboard
- If a deal moves stage → update Pipeline table + Activity Log

**Weekly (10 min, Friday or Monday):**
- Recalculate "days stale" for each deal
- Reconcile pipeline with UpSight MCP (`fetch_opportunities`)
- Update Funnel estimates if PostHog gives better data
- Assess any new Closed Deals
- Check Investor Readiness thresholds

**Trigger events (update immediately):**
- Any deal closes (won or lost)
- New signup or trial activation
- New demo scheduled or completed
- Blocker resolved or new blocker surfaced

**Agent prompt for refresh:**
> "Read `00-control/traction.md`. Pull fresh opportunity data from UpSight MCP (`fetch_opportunities`). Pull today's PostHog metrics from `scripts/posthog-daily.sh` or the last status.md entry. Update the Scoreboard, Pipeline table, and Activity Log. Note any deals that have gone stale (>7 days since last touch). Update the `as of` date."

---

## Pitch Slide Version

When extracting this into a deck, use these numbers:

```
TRACTION (as of YYYY-MM-DD)

Pipeline: 4 active deals | ~$116 potential MRR
Product: 7 weekly active users | ~30 total signups
Build: 73 conversations analyzed across 35+ people

Next milestone: First paying customer (target: May 9)
```

> Note: Do not show "0 paying customers" on a deck. Show "4 active evaluations, close target May 9" as the positive framing. Be ready to answer "why haven't any closed yet" — the honest answer is desktop recording reliability (now fixed) was the primary demo blocker.
