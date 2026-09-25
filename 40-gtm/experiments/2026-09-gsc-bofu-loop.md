# GSC-first bottom-of-funnel loop — does fixing pages already at 4–20 beat writing new ones?

- **Status:** planned
- **Opened:** 2026-09-25 | **Owner:** Rick
- **Source:** `40-gtm/channels/content-seo/seo-plan-2026-09-gsc-bofu-loop.md` (the plan);
  method from Rob Hoffman's X post of 2026-09-24

## Hypothesis
If we take the bottom-of-funnel queries getupsight.com already ranks in positions 4–20 for and
apply a Claude-generated, per-page optimization checklist to each landing page, then clicks on
those queries will rise at least 50 % and produce at least 3 attributable organic sign-ups within
60 days, because Google already judges those pages relevant and the remaining gap is on-page,
not authority.

## Audience / surface
Searchers with tool-choosing intent (tool, software, alternative, vs, pricing, competitor names)
landing on getupsight.com pages. Surface: the 3–5 pages chosen in Phase 1 of the plan.

## Variants
Not an A/B. Before/after on the chosen pages, with the rest of the site's queries as the control
for seasonality and algorithm changes.

## Primary metric
Organic sign-ups on the free tier ("Analyze 3 old calls"), attributed to organic search in
PostHog, per 28-day window.

**Leading:** clicks and average position for each target query (GSC, 28-day window vs baseline).
**Guardrail:** impressions on the same pages' non-target queries do not drop more than 20 %.

## Min sample / duration
60 days from the first implemented change. If Search Console has less than 28 days of data at
Phase 0, the first 28 days are baseline only.

## Baseline — pulled 2026-09-25

Source: Search Console export shared by Rick on 2026-09-25 (Web search, last 28 days,
2026-08-26 to 2026-09-22). Real data. Average position is impression-weighted from the Chart tab.

| Field | Value | Date |
|---|---|---|
| GSC property verified | Yes — export exists for getupsight.com | 2026-09-25 |
| Total clicks, 28 days | 11 | 2026-09-22 |
| Total impressions, 28 days | 383 | 2026-09-22 |
| Average position, all queries | 24.8 (impression-weighted) | 2026-09-22 |
| Queries shown in the export | 12 (188 impressions); the other 195 impressions are anonymized low-volume queries GSC does not list | 2026-09-22 |
| BOFU queries in positions 4–20 with ≥ 10 impressions | **0** | 2026-09-22 |
| Non-branded queries in positions 4–20, any volume | **0** | 2026-09-22 |
| Branded queries (contain "upsight" or the founder's name) | upsight 135 impr / 3 clicks / pos 7.4 · rick moy 2 / 0 / 9.0 · upsights, getsight, upsight vision 1 impr each at pos 49–70 | 2026-09-22 |
| Only non-branded demand | "create survey project" family: 33 + 7 + 3 + 2 + 1 impressions at positions 65–98, landing on `/docs/create-surveys` (76 impr, pos 87) | 2026-09-22 |
| Pages already at 3–5 (queries hidden) | `/docs/chatbots-mcp` 3.3 · `/docs/getting-started` 3.9 · `/docs/survey-distribution` 4.8 · `/customer-discovery` 4.9 · `/solutions` 4.9 · `/about` 5.1 · `/customer-discovery-for-consultants` 5.1 — 3 to 44 impressions each, almost certainly branded | 2026-09-22 |
| Organic sign-ups, prior 28 days | not yet pulled from PostHog | |

**Reads on the decision rule:** the **Reorder** branch fires. There are zero bottom-of-funnel
queries to optimize, so Phase 3 pages (Dovetail comparison, then a call-analysis page) come
first and Phase 1 re-runs 28 days after each ships. The loop has nothing to eat yet.

## Targets chosen (fill at Phase 1)

| Query | Page | Position at start | Impressions at start | Changes shipped (date) | Position at +14d | Position at +28d | Position at +60d |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

## Decision rule
- **Win:** ≥ 3 attributable organic sign-ups in a 28-day window by day 60, or ≥ 2 target pages on
  page 1 with clicks up ≥ 50 % → the loop becomes the standing Monday SEO ritual; Phase 3 pages
  get built in the plan's order and enter the loop as they ship.
- **Reorder:** Phase 0 finds fewer than 5 BOFU queries in 4–20 with ≥ 10 impressions → there is
  nothing to optimize yet. Build Phase 3 pages first (Dovetail comparison, then the call-analysis
  page), rerun Phase 1 at day 28 after each ships.
- **Kill:** target pages move but produce zero sign-ups by day 60 → the queries are the wrong
  intent for our offer, or the pages convert badly. Route to a conversion question in
  `00-control/open-questions.md`, not to more SEO.

## Result
(open)

## Learning → graduates to
`20-research/market-intel/Keyword-Research/gtm-keyword-analysis.md` — refresh the top-20 table
with real GSC positions, and add the call-analysis query family if the export shows it.
