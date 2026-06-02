# Experiments

> One file per experiment. Naming: `YYYY-MM-<slug>.md`.
> Each experiment: **hypothesis → variant(s) → primary metric → result → learning.**
> When it resolves, the *finding* graduates to `20-research/` and any *decision* closes in `00-control/decisions.md`.

| Status | Experiment | Hypothesis (1 line) | Metric | Started | Result |
|---|---|---|---|---|---|
| — | _(none yet)_ | | | | |

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
