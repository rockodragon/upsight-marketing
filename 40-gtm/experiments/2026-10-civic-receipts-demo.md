# Experiment: "Receipts for public input" — civic demo on Engaged California data

**Opened:** 2026-10-08 · **Owner:** Rick · **Time box:** two weeks of build + two weeks of outreach; decide by 2026-11-15.
**Spawned by:** `00-control/open-questions.md` 2026-10-08 (Berkeley Civic Engagement Agenda).
**Market thesis it tests:** `20-research/market-intel/deliberative-intelligence-market.md` says civic is
"strategically aligned, poor first GTM, unless there is a strong distribution partner or anchor customer."
The Possibility Lab is the candidate partner. This experiment tests that condition, nothing wider.

## Hypothesis
If we redo the state's own published public-input analysis (Engaged California, LA fires agenda-setting,
1,289 comments) with every theme and recommendation linked to the comments behind it, the people who
already do this work (the Possibility Lab, ODI, engagement consultancies such as CivicMakers, MIG,
PlaceWorks) will recognise the gap their own reviewers named ("participants need to see how their input
has been used", Carnegie, Nov 2025) and at least one will hand us a real, unpublished dataset.

## Why this dataset
- Public, no PII, 1,289 comments / 52k words, 11 topics, 38 AI-generated groups. 276 comments sit in
  "Other" and 105 have no group: about 30% of what residents said got no theme.
- The state published 19 policy actions from it. A you-said / we-did map from comments to those actions
  is exactly the "receipts" the Carnegie review asked for and nobody has produced.
- Reuse terms: check ca.gov conditions of use before publishing a derivative (see status note).

## Deliverable (built on the product, not a slide deck)
1. Themes with every comment linked; the 30% unthemed comments re-grouped.
2. Comment → policy-action map (which of the 19 actions each theme supports; which themes got no action).
3. Assistant Q&A over the set with citations (the MCP server), shown live.
4. One public page: "What 1,289 fire survivors said, what the state did with it, every claim linked."

## Outreach (after the page exists, not before)
- Possibility Lab (Lerman, Maple): ask for Catalyst Convenings input (3 of 9 held; Pol.is + Mentimeter
  + group notes; nothing published; remaining six pushed to 2027–28). We have no contact; find a warm path.
- ODI (Engaged California team): they did the original analysis in-house (BERTopic, Snowflake, Claude 3.5
  Sonnet); a second engagement with state workers is planned. Offer the receipts layer on it.
- Three CA engagement consultancies with a housing-element or general-plan appendix due.

## Metric and kill criteria
- Success: one real, unpublished dataset handed over by 2026-11-15, or one paid pilot quoted.
- Kill: no dataset and no quote by 2026-11-15 → close the question, keep the page as a reference asset.
- Not a success on its own: a meeting, a "love it", an invitation to present.

## Guardrails
- Non-partisan wording only; no implied affiliation with UC Berkeley, ODI or any campaign.
- Have the data-handling answer ready (where resident data lives, retention, who can see it).
- Do not open-source the product. If asked, offer an open receipts export format and a published method.
- State money timeline is real but late: governor sworn in Jan 2027, "first 100 days" ends ~mid-April 2027,
  any Civic Health Institute / Innovation Challenge funding is FY27-28 at the earliest. Nothing here
  depends on it.

## Reconciled with the team brief, 2026-10-09
Source: `40-gtm/assets/collateral/government-accountability-demo-brief-2026-10-08.pdf` (team decision brief, 8 Oct 2026).
The brief and this file agree on the dataset, the one-page deliverable and "no civic product". Adopted from the brief:
- **Cap: 40 team hours over two weeks** (6 source and product-fit checks, 18 import and mapping, 10 human review, 6 publication and walkthrough).
- **Gate at hour 6:** proceed only if the current product can show the chain credibly. New infrastructure means reduce scope or stop.
- **Three issues deep, not the whole recovery.** For each: input → policy response → responsible body → commitment → delivery evidence, every step linked. Label each link *official documented*, *analyst-inferred* or *no link found*. Separate announced / funded / underway / completed. Write "not documented in reviewed sources" where the record is thin.
- **Correction:** the state's 19 items are policy options, not 19 completed actions, and the state already reports follow-through. Our addition is traceability (which comments, which option, what happened) and the ~30% of comments that got no theme. Subject overlap alone does not prove causation.
- **30-day metric added:** use the page in five targeted conversations (consultants, stakeholder-facing organizations); count requests to map their own data; quote a scoped paid pilot when asked. Kill date and success test above stay.

What the brief did not know (import check of 2026-10-08, `10-ops/dogfooding-log.md`):
- The product imports **zero rows** of the state CSV as-is: anonymous rows are skipped and the survey materializer needs a person per response.
- **Gate plan:** pass hour 6 with the no-code workaround (add a `Name` column of "Resident <id>" placeholders; rename the comment column to the question text so it classifies as a survey response). Cost: 1,289 placeholder people in a dedicated project; fits the Team cap of 2,000 survey responses per month.
- The proper fix (CSV survey import mints placeholder respondents, ~1 day) is general product work for every public-comment dataset. It is a product bead, not a demo prerequisite.
- The configurable canvas map and pivot table need a `response` dataset builder (~2–3 days). Also general product work; **outside the 40-hour cap**. The demo's view is themes → linked evidence → public share link, which exists today.
