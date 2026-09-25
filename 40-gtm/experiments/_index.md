# Experiments

> One file per experiment. Naming: `YYYY-MM-<slug>.md`.
> Each experiment: **hypothesis → variant(s) → primary metric → result → learning.**
> When it resolves, the *finding* graduates to `20-research/` and any *decision* closes in `00-control/decisions.md`.

| Status | Experiment | Hypothesis (1 line) | Metric | Started | Result |
|---|---|---|---|---|---|
| planned | [`2026-09-gsc-bofu-loop`](2026-09-gsc-bofu-loop.md) | Optimizing pages already ranking 4–20 for buying queries yields organic sign-ups faster than new content | organic sign-ups; clicks + position on target queries | not started | open |
| planned | [`2026-06-day-ai-head-to-head`](2026-06-day-ai-head-to-head.md) | Founder-sellers who run surveys will pick UpSight over Day.ai (multi-source + receipts + price) | demos→pilots committed; WTP | — | — |

**Status key:** `planned` · `running` · `shipped` (won) · `killed` (lost/inconclusive)

## Template

```md
# <Experiment name>
- **Status:** planned
- **Hypothesis:** If we <change>, then <metric> will <direction> because <reason>.
- **Audience / surface:**
- **Variants:** A (control) / B
- **Primary metric:**  | **Guardrail:**
- **Min sample / duration:**
- **Result:**
- **Learning → graduates to:** 20-research/...
```
