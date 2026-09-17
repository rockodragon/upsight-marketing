# Glossary — bot-first reference pages

> **What this is:** 37 definition pages written to be read by AI search
> engines first and humans second. This is deliberately a **"content for bots"** asset in the sense
> of `guides/ai-search-playbook.md` — plain, dense, structured, and not trying to be a beautiful
> blog post.
>
> **Why it exists:** HubSpot shipped 50 server-rendered glossary pages and reported +35% visibility
> on awareness-stage queries, +26% on consideration/decision queries, and citation share moving from
> 1.97% to 3.2% (source: Growth Unhinged, *Inside HubSpot's AI search experiments*, read 2026-09-16 —
> their data at their scale, not a forecast for us). It was the cheapest asset on their list that moved
> **visibility**, not just citations.

---

## ⚠️ Before publishing: verify every "In UpSight" section

Each page ends with an **In UpSight** section describing how the concept maps to the product. These
were written from `30-strategy/messaging-house-customer-intelligence.md` and the positioning docs,
**not** from the shipped app. Read every one against current product before publish. A glossary that
overstates what ships is worse than no glossary — these pages are exactly what an AI engine will quote
back to a prospect, and a wrong claim gets repeated at scale.

Pages where this needs the most care: `conversational-survey`, `living-customer-profile`,
`persona`, `opportunity-solution-tree`, `buyer-decision-file`.

---

## Publishing requirements

Non-negotiable, in order. A page that fails #1 should not be published at all — it costs
maintenance and returns nothing.

1. **Server-rendered HTML.** No client-side rendering. Verify with
   `curl -s https://getupsight.com/glossary/<slug> | grep "<the bold definition sentence>"`.
   If it isn't in the raw response, the page does not exist as far as AI crawlers are concerned.
2. **One URL per term** at `/glossary/<slug>`, plus an index at `/glossary`.
3. **JSON-LD:** `DefinedTerm` (inside a `DefinedTermSet` for the glossary as a whole) **and**
   `FAQPage` for the FAQ block. Schema patterns are in `../guides/seo-aeo-guide.md`.
4. **The bold definition sentence is the product.** It is what gets extracted and quoted. It must
   stand alone with no preceding context, and must be one sentence.
5. **Every page links to 4 related terms** and is linked from at least one other page — verified,
   currently zero broken links and zero orphans across all 37 terms.
6. **Contrast:** all text at WCAG AA minimum. No pale grey definitions. (House rule — `CLAUDE.md`.)
7. **Ship in one batch**, then hold the set still for 60 days so the crawlability experiment can
   read a clean signal.

## Page template

Every page follows the same shape, which is why they can be generated and why bots parse them
consistently:

```
H1: What is <term>?          ← question form, matches how people prompt
**Bold one-sentence definition**  ← the extractable unit
Body paragraph                    ← nuance, distinctions, what it is not
## Why it matters                 ← the argument
## Example                        ← concrete, with numbers where honest
## In UpSight                     ← product connection (VERIFY BEFORE PUBLISH)
## Related terms                  ← 4 internal links
## FAQ                            ← 3 Q&A pairs, the highest-citation format
```

---

## The terms

### Cluster A — Customer intelligence (the category doorway)

Our category vocabulary. These are the terms a buyer uses when they already know roughly what they want and are looking for who does it.

| Term | URL | One-line definition |
|---|---|---|
| [Closing the loop](closing-the-loop.md) | `/glossary/closing-the-loop` | Closing the loop means going back to the customer who gave feedback and telling them what you did about it. It is the step most feedback programs skip. |
| [Conversational intelligence](conversational-intelligence.md) | `/glossary/conversational-intelligence` | Conversational intelligence is the analysis of recorded customer conversations — sales calls, interviews, support calls — to extract what was said, what it means, and what should happen next. |
| [Customer 360](customer-360.md) | `/glossary/customer-360` | A customer 360 is a single unified view of everything an organization knows about one customer across systems — though most implementations unify records without unifying what the customer said. |
| [Customer evidence](customer-evidence.md) | `/glossary/customer-evidence` | Customer evidence is a specific, attributable thing a customer said or did, kept in its original form so any conclusion drawn from it can be traced back and checked. |
| [Customer intelligence platform](customer-intelligence-platform.md) | `/glossary/customer-intelligence-platform` | A customer intelligence platform unifies calls, surveys, interviews, and notes into one evidence base so teams can see what customers need, why it matters, and who said it. |
| [Customer intelligence](customer-intelligence.md) | `/glossary/customer-intelligence` | Customer intelligence is the practice of turning every customer conversation into a durable, evidence-backed understanding of who your customers are and what they need. |
| [Customer signal](customer-signal.md) | `/glossary/customer-signal` | A customer signal is a single observable indication of what a customer needs or feels — one survey response, one support ticket, one remark on a call. |
| [Evidence log](evidence-log.md) | `/glossary/evidence-log` | An evidence log is a running, dated record of what customers actually said, kept verbatim and attributed, used as the source of truth behind product and GTM decisions. |
| [Living customer profile](living-customer-profile.md) | `/glossary/living-customer-profile` | A living customer profile is a persistent, evidence-backed record of one person that accumulates across every conversation, rather than resetting with each new project or tool. |
| [Research repository](research-repository.md) | `/glossary/research-repository` | A research repository is a central store of customer research — transcripts, notes, clips, and findings — organized so past studies can be found and reused. |
| [Thematic analysis](thematic-analysis.md) | `/glossary/thematic-analysis` | Thematic analysis is the method of reading qualitative data, tagging recurring ideas, and grouping them into themes that describe what a body of conversations is actually about. |
| [Voice of the customer (VoC)](voice-of-the-customer.md) | `/glossary/voice-of-the-customer` | Voice of the customer (VoC) is the structured practice of capturing what customers say about their needs and experience, in their own words, and feeding it into decisions. |

*12 terms.*

### Cluster B — Discovery and research practice

How the work is actually done. Highest-volume awareness-stage queries; most of our existing blog content links here.

| Term | URL | One-line definition |
|---|---|---|
| [Assumption testing](assumption-testing.md) | `/glossary/assumption-testing` | Assumption testing means writing down what must be true for an idea to work, ranking those beliefs by risk, and designing the cheapest test for the riskiest one. |
| [Continuous discovery](continuous-discovery.md) | `/glossary/continuous-discovery` | Continuous discovery is the habit of talking to customers every week, in small doses, so product decisions are always informed by recent evidence rather than a study from last year. |
| [Conversational survey](conversational-survey.md) | `/glossary/conversational-survey` | A conversational survey asks questions one at a time and generates follow-up probes based on the answer given, producing interview-quality depth at survey scale. |
| [Customer discovery](customer-discovery.md) | `/glossary/customer-discovery` | Customer discovery is the practice of talking to potential customers to test whether the problem you think exists is real, before building a solution for it. |
| [Discovery interview](discovery-interview.md) | `/glossary/discovery-interview` | A discovery interview is a semi-structured conversation aimed at understanding a person's actual behavior and context, rather than pitching them or collecting opinions about an idea. |
| [Interview guide](interview-guide.md) | `/glossary/interview-guide` | An interview guide is the written plan for a research conversation — the objectives, the question sequence, and the probes — used to keep interviews comparable without making them rigid. |
| [Jobs to be done (JTBD)](jobs-to-be-done.md) | `/glossary/jobs-to-be-done` | Jobs to be done is a framework that defines products by the progress a customer is trying to make, rather than by customer demographics or product features. |
| [Leading question](leading-question.md) | `/glossary/leading-question` | A leading question suggests its own answer, producing agreement rather than information. It is the most common and most damaging error in customer research. |
| [Opportunity solution tree](opportunity-solution-tree.md) | `/glossary/opportunity-solution-tree` | An opportunity solution tree is a visual map connecting a desired outcome to customer opportunities, candidate solutions, and the experiments that test them. |
| [Problem interview](problem-interview.md) | `/glossary/problem-interview` | A problem interview tests whether a problem is real and painful. A solution interview tests whether your proposed answer to it works. Running them together invalidates both. |
| [Qualitative vs quantitative research](qualitative-vs-quantitative-research.md) | `/glossary/qualitative-vs-quantitative-research` | Qualitative research explains why something happens and what exists; quantitative research measures how much and how many. Each answers questions the other cannot. |
| [ResearchOps](research-ops.md) | `/glossary/research-ops` | ResearchOps is the operational layer that makes customer research repeatable — recruiting, scheduling, consent, incentives, storage, and access. |
| [Sample size for interviews](sample-size-for-interviews.md) | `/glossary/sample-size-for-interviews` | Most qualitative studies reach repeating patterns between 12 and 20 interviews within a single segment. The number that matters is per-segment, not total. |
| [Survey fatigue](survey-fatigue.md) | `/glossary/survey-fatigue` | Survey fatigue is the decline in response rate and answer quality caused by asking people too often, at too much length, or with no visible result. |
| [Thematic saturation](thematic-saturation.md) | `/glossary/thematic-saturation` | Thematic saturation is the point in qualitative research where additional interviews stop producing new themes — the signal that you have enough data in that segment. |

*15 terms.*

### Cluster C — Buyer decisions and GTM

The Decision Files lane. Terms about how purchases get made, which is the vocabulary of the research we publish.

| Term | URL | One-line definition |
|---|---|---|
| [Buyer decision file](buyer-decision-file.md) | `/glossary/buyer-decision-file` | A buyer decision file is a published account of how a real buying team evaluated a category — who was in the room, what criteria they used, what they eliminated and why. |
| [Buying committee](buying-committee.md) | `/glossary/buying-committee` | A buying committee is the group of people who together decide on a B2B purchase — economic buyer, champion, end users, and the functions that can veto. |
| [Customer advisory board](customer-advisory-board.md) | `/glossary/customer-advisory-board` | A customer advisory board is a standing group of customers who meet regularly to give strategic input — a recruiting engine for research as much as a feedback channel. |
| [Evaluation criteria](evaluation-criteria.md) | `/glossary/evaluation-criteria` | Evaluation criteria are the standards a buying team uses to compare options — the stated list, and the unstated criteria that do the actual eliminating. |
| [Ideal customer profile (ICP)](ideal-customer-profile.md) | `/glossary/ideal-customer-profile` | An ideal customer profile describes the type of company that gets the most value from your product and is the easiest to sell to and keep — a company-level filter, not a person. |
| [AI meeting notetaker](meeting-notetaker.md) | `/glossary/meeting-notetaker` | An AI meeting notetaker joins calls to record, transcribe, and summarize them — solving the note problem for a single meeting while leaving the cross-meeting problem untouched. |
| [Persona](persona.md) | `/glossary/persona` | A persona is a research-based composite of a specific type of user or buyer, describing their goals, constraints, and behavior — useful only when built from real evidence. |
| [Product-market fit](product-market-fit.md) | `/glossary/product-market-fit` | Product-market fit is the state where a well-defined segment reliably buys, adopts, and keeps using your product because it solves a problem they were already trying to solve. |
| [Vendor evaluation](vendor-evaluation.md) | `/glossary/vendor-evaluation` | Vendor evaluation is the process a buying team uses to narrow a set of possible suppliers to one — requirements, longlist, shortlist, proof, and approval. |
| [Win-loss analysis](win-loss-analysis.md) | `/glossary/win-loss-analysis` | Win-loss analysis is the practice of interviewing buyers after a deal closes — won or lost — to learn why they actually decided, rather than why the rep thinks they did. |

*10 terms.*

---

## Measurement

This set is a tracked input to `40-gtm/experiments/2026-09-ai-search-crawlability.md`. Three
readings, and do not change the page set between them:

| When | Read | Looking for |
|---|---|---|
| Publish + 0 | Server logs: `GPTBot`, `ClaudeBot`, `PerplexityBot`, `OAI-SearchBot` | Are glossary URLs being fetched at all? |
| Publish + 30d | Crawl counts per URL | Crawl stage working — precondition for everything else |
| Publish + 60d | Citation rate on the fixed 20 ICP prompts | Did visibility actually move? |

If crawls are healthy at 30 days but citations are flat at 60, the problem is the writing, not the
infrastructure — and the fix is in `../guides/seo-aeo-guide.md`, not here. If crawls are flat at
30 days, nothing else on the page matters until rendering is fixed.

## Expanding the set

Add a term when it meets two tests: **(1)** a prospect would plausibly type it into an AI assistant
while forming a shortlist, and **(2)** we can connect it to UpSight honestly. Terms that fail the
second test can still be worth publishing for awareness coverage — write the page without an
"In UpSight" section rather than inventing a connection.

Next candidates, unwritten: churn analysis, customer health score, NPS, CSAT, feature request
management, roadmap prioritization, user research vs market research, segmentation, competitive
intelligence, pricing research, willingness to pay, switching costs.
