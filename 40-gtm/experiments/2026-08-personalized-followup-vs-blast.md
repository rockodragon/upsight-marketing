# Personalized follow-up vs blast — does outbound quality pay?

- **Status:** running (starts with the SDR comp reset conversation)
- **Opened:** 2026-08-14 | **Owner:** Rick (reviews) + SDR (sends) | **Decision date: 2026-08-31**
- **Source:** 71-email mail-merge blast (8/13) produced ~0 replies; 30 warm seeds got exactly one
  touch each in June and were declared "dead". Funnel doc says warm converts ~5× cold.

## Hypothesis
Individually-researched follow-up touches (#2 and #3) to the 30 warm seeds, at ~3/day reviewed in
a 10-minute morning check, will produce **≥10× the reply rate** of the blast baseline and ≥3
qualified meetings held by 8/31 — because reply volume lives in follow-ups and personalization,
not first-touch volume.

## Variants
- **A (baseline, already run):** batch/mail-merge sends, self-selected verticals. Replies ≈ 0.
- **B (test):** 3 personalized sends/day to approved-lane contacts, founder-reviewed before send,
  follow-up sequence to warm seeds first, then consultant list.

## Primary metric
Replies per 10 sends; **qualified meetings held** (the 5-criteria definition in
`10-ops/gtm-role-comp-program-v4.xlsx` — same unit the comp program pays on).

## Guardrail
Domain health: total cold sends ≤15/day from the warmed domain. A burned domain poisons every
real email (quotes, founding codes, referral follow-ups) riding the same reputation.

## Decision rule
- ≥3 qualified meetings by 8/31 → outbound motion validated; the SDR role is worth staffing
  (whoever holds it) at the v4 comp program.
- <2 meetings with the process actually followed (reviews held, sequences sent) → outbound isn't
  the channel at this price point; move effort to the survey engine / referral loop.
- Process not followed (reviews lapse — either side) → experiment void, not failed. Log which
  side lapsed in `10-ops/dogfooding-log.md` and decide the role question on that evidence.

## Result
_(pending)_

## Learning → graduates to
`20-research/market-intel/` (channel economics) + role/staffing decision in `decisions.md`.
