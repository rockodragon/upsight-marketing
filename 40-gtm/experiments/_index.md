# Experiments

> One file per experiment. Naming: `YYYY-MM-<slug>.md`.
> Each experiment: **hypothesis → variant(s) → primary metric → result → learning.**
> When it resolves, the *finding* graduates to `20-research/` and any *decision* closes in `00-control/decisions.md`.

## Rules of the queue (added 2026-08-14)

1. **WIP limit: 3 running.** A new experiment starts only when one resolves. New ideas go to
   **Parked**, not into the running set — however good they sound in the moment.
2. **Every experiment has a decision date.** No decision date = not an experiment, it's a vibe.
   Past the date, it resolves as shipped/killed with whatever data exists.
3. **An untested lane is "not run", never "didn't work."** A lane counts as tested only when the
   ask (quote, code, sequence) actually went out. (Lesson of "consultants: cool but no
   follow-through" — no quote was ever sent.)
4. **Parked ideas wait for the scoreboard.** Nothing leaves the parking lot until a running
   experiment resolves and frees a slot — no mid-experiment lane additions (lesson of medspa).

## NOW — running

| Experiment | Hypothesis (1 line) | Metric | Decision date |
|---|---|---|---|
| [`2026-08-icp-head-to-head-consultants-vs-member-orgs`](2026-08-icp-head-to-head-consultants-vs-member-orgs.md) | Member orgs convert to paying faster than consultants because pull (referrals, usage) already exists there | paying customers per lane | **2026-09-08** |
| [`2026-08-founding-nonprofit-pricing`](2026-08-founding-nonprofit-pricing.md) | $20×3mo → $39 step-up converts broke-but-engaged orgs AND proves $39 as real WTP | redemptions; step-up retention | 8/31 + 12/01 |
| [`2026-08-personalized-followup-vs-blast`](2026-08-personalized-followup-vs-blast.md) | Personalized follow-ups to warm seeds beat blast reply rate ≥10× and yield ≥3 meetings | replies/10 sends; qualified meetings held | **2026-08-31** |

## NEXT — planned (starts when a slot frees, or by its own start date)

| Experiment | Hypothesis (1 line) | Metric | Start by |
|---|---|---|---|
| [`2026-08-public-survey-engine`](2026-08-public-survey-engine.md) | Weekly public survey → respondents book calls at ≥3× cold rate; posts double as content + demo | respondent-DM → call rate | 8/22 |

## PARKED — waiting for a slot (do not build on these)

| Idea | One line | Unpark condition | Pointer |
|---|---|---|---|
| Day.ai head-to-head | Win founder-sellers vs Day.ai on surveys + receipts + price | If consultants win the ICP head-to-head, this is the next Lane-A experiment | [`2026-06-day-ai-head-to-head`](2026-06-day-ai-head-to-head.md) (planned since 6/2, never run) |
| Event organizers | Kiosks + pre/post-event surveys as a wedge | ICP head-to-head resolves 9/8; run as lane 3 only if both current lanes disappoint — plan already exists | `40-gtm/channels/outreach/nessa-event-organizer-leadgen-2026-06-09.md`; open-q 6/9 |
| Testimonials / "vouch" offer | Voice+video testimonial collection as a standalone micro-offer (friend's idea, 8/14) | Cheap version first: make testimonial cuts loud in the member-org lane (already a product feature + content rate-card item); standalone offer only if customers pull for it by name | open-q entry pending |
| Weekly-meeting / EOS wedge | Leadership-meeting prep as the public promise | Only if a paying customer asks for it unprompted | `30-strategy/messaging-house.md` (7/1 decision, superseded 7/19) |

## KILLED

| Experiment | Outcome | Learning |
|---|---|---|
| Medspa / DTC-wellness outbound (8/13, unsanctioned) | Killed 8/14 — no hypothesis, no approved lane, 71 mail-merge sends, ~0 replies | Vertical selection is a decision, not an intern improvisation; blasts burn the domain the real emails ride on. ICP guardrail now enforced via comp (`10-ops/gtm-role-comp-program-v4.xlsx`) |

**Status key:** `planned` · `running` · `shipped` (won) · `killed` (lost/inconclusive) · `parked` (waiting for a slot)

## Template

```md
# <Experiment name>
- **Status:** planned
- **Opened:** YYYY-MM-DD | **Owner:** | **Decision date:** YYYY-MM-DD (required)
- **Hypothesis:** If we <change>, then <metric> will <direction> because <reason>.
- **Audience / surface:**
- **Variants:** A (control) / B
- **Primary metric:**  | **Guardrail:**
- **Decision rule:** win = <...> · kill = <...>
- **Result:**
- **Learning → graduates to:** 20-research/...
```
