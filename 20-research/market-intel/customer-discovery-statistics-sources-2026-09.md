# Customer discovery statistics: sources, checks and rejections

> **Date:** 2026-09-30 · **Feeds:** `getupsight.com/customer-discovery-statistics` (code:
> `app/features/marketing/pages/customer-discovery-statistics.data.ts` in `epic-hq/UpSight`).
> **Why this file exists:** the page's whole value is that every number can be traced. This is the
> trace, plus the record of what was rejected and why, so the next quarterly review starts from
> evidence instead of memory.

## What is published (five figures, four sources)

Each quoted sentence below was fetched again on 2026-09-30 by a script that strips the page to text
and checks the sentence appears verbatim. 13 of 13 sentences confirmed. Journal abstracts are
confirmed through the Crossref record because the journals block automated readers.

| # | Figure | Source | Published | Sample | Checked via |
|---|---|---|---|---|---|
| 1 | Poor product-market fit cited in 43% of failures; bad timing 29%; unit economics 19%; multiple reasons allowed | CB Insights, *The top reasons startups fail* | 2026-03-05 | 385 companies with identifiable failure reasons | Page text |
| 2 | Two-thirds of PMF failures were early-stage companies that never found a market; 20 Series B+ also cited it | Same page | 2026-03-05 | Subset of the 385; total PMF count not given | Page text |
| 3 | Fewer than 40% "very disappointed" in struggling companies, more than 40% in companies with traction | Sean Ellis's benchmark as reported in First Round Review, *How Superhuman Built an Engine to Find Product Market Fit* | 2018-11-13 | "Nearly a hundred startups" | Page text |
| 4 | Saturation within the first twelve of sixty interviews; basic metathemes by six | Guest, Bunce & Johnson, *How Many Interviews Are Enough?*, Field Methods, DOI 10.1177/1525822x05279903 | 2006-02 | 60 interviews, women in two West African countries | Crossref abstract |
| 5 | Code saturation at nine interviews; 16 to 24 for meaning saturation | Hennink, Kaiser & Marconi, *Code Saturation Versus Meaning Saturation*, Qualitative Health Research, DOI 10.1177/1049732316665344 | 2016-09-26 | 25 interviews | Crossref abstract |

Two caveats the page prints beside the numbers: rows 4 and 5 are health research, not product
discovery; row 3 is a rule of thumb reported second-hand, and Ellis's dataset is not published there.
Our own blog says "12 to 20 conversations" for early-stage discovery. Rows 4 and 5 are the nearest
peer-reviewed support for that range, so the blog post should link to the statistics page.

## What the subagents returned, and what survived

Two Haiku subagents were asked for verified statistics with verbatim quotes. About 158,000 tokens
combined. Each claim was re-checked by a script that fetches the URL itself, then read by a person
for source quality. **One candidate survived out of eleven.**

| Candidate | Script result | Reviewed outcome | Reason |
|---|---|---|---|
| CB Insights 43% (agent A) | Rejected: sample size 385 not inside the quote | **Used**, after reading the page | Sentence and sample are both on the page. The agent also called the companies "VC-backed", which the page never says; dropped. |
| NN/g "5 users find 85%" (agent A) | Rejected: stat added "15% remaining", not in quote | Excluded | The 15% was the agent's arithmetic. The topic is usability testing, not discovery interviews, and the rule is widely misapplied. |
| CB Insights Mosaic score decline (agent A) | Confirmed | Excluded | Off topic: a startup health score, not customer discovery. |
| Perspective AI "4 to 6 hours" (agent B) | Confirmed | Excluded | A competitor's marketing claim with no sample or method. |
| Opensend "only 11% re-engage" (agent B) | Confirmed | Excluded | Aggregator blog, no sample or method. |
| Opensend "recover 30% of cancelled customers" (agent B) | Confirmed | Excluded | **Overstated its own quote.** The source says rates "range from 10-30%". The script passed it because "30%" appears in the quote. |
| Artisan "5x more to acquire" (agent B) | Rejected: "25%" not in quote | Excluded | Secondary blog; this stat's origin is disputed. |
| Fellow.ai x2, Lyssna x1 (agent B) | Rejected: quote not on the page | Excluded | The quote does not exist on the page fetched. |

**What this means for using subagents on this kind of work.** They are useful for finding
candidates and not trustworthy for deciding what gets published. A script catches invented quotes
(four of eleven here). It does not catch a true quote that has been stretched, or a true quote from
a source with no method. A person has to read each survivor. The four additional figures came from
primary sources searched for directly: First Round Review, and two journal records in Crossref.

## Rules for the quarterly review (next by 2026-12-31)

1. Re-fetch every `quotes` entry and confirm it is still on the page. The data file's unit test
   checks that printed numbers are inside the quotes; it does not fetch.
2. Replace anything a newer edition supersedes. CB Insights republishes this analysis.
3. Add figures only from the publisher's own page. No aggregator blogs. No vendor "studies show".
4. Add the change to the `CHANGELOG` in the data file and bump `LAST_REVIEWED`.
5. **Candidate gaps worth a primary source:** how many product teams talk to customers weekly,
   time spent on manual interview synthesis, and win-back rates from a study with a stated sample.
   None has a verified primary source yet.

## Not on the page, deliberately

- **UpSight's own research.** The playbook's strongest idea is publishing original findings, and we
  have none publishable yet. The last usage figures recorded in `00-control/traction.md` are from May
  2026 and were single-digit weekly users. No current number was pulled for this page, so the first
  step for any first-party finding is to check how many accounts there actually are. The Decision
  Files are a different subject and lane.
  Candidate first-party questions are in `00-control/open-questions.md`. Do not publish a number
  until the method and sample size can sit beside it.
- **The win-back study's "53,000" figure.** See the open question dated 2026-09-30.
