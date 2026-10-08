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
