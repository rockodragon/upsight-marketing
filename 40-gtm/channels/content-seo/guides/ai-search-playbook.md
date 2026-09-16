# AI Search Playbook — winning citations, not just rankings

> **What this is:** the operating layer of AEO — crawl infrastructure, content formats, mention
> supply, and measurement. The sibling doc `seo-aeo-guide.md` covers on-page writing craft
> (schema, headings, FAQ formatting). Read that one when you're writing a post. Read this one
> when you're deciding *what to build and what to measure*.
>
> **Source:** Kyle Poyar, *Growth Unhinged* — "Inside HubSpot's AI search experiments"
> (growthunhinged.com/p/hubspot-ai-search-experiments), read 2026-09-16. All numbered results
> below are **HubSpot's reported outcomes at HubSpot's scale**, not ours. They are directional
> evidence for what to test, not forecasts for UpSight. Nothing here is validated on our
> properties until it appears in `40-gtm/experiments/`.

---

## The one idea to keep

**Crawls → citations → visibility. Three separate stages, not one funnel.**

An AI engine has to (1) fetch your page, (2) choose to quote it in an answer, and (3) do that
often enough across enough prompts to shape what buyers believe. Each stage fails for different
reasons and each is fixed by different work:

| Stage | Fails when | The lever |
|---|---|---|
| **Crawl** | Page is JS-rendered, slow, or the bot times out | Server-side rendering, pre-rendering, speed |
| **Citation** | Page is fetched but not quotable — no clean definition, no numbers, no structure | Content format (see `seo-aeo-guide.md`) |
| **Visibility** | We're quotable but rarely present — the model doesn't associate us with the category | Third-party mention volume + community presence |

Gains at one stage don't automatically carry to the next. HubSpot's "AI share button" test raised
citations ~29% on the tested URLs while visibility on related questions stayed flat — and they
shelved it. **Diagnose which stage you're failing before picking a tactic.**

---

## What HubSpot tested, and the read-across for a solo founder

Project Lighthouse was a small pod shipping one AI-search experiment per week. Their headline
outcome: #1 most visible CRM in AI search; AI-sourced qualified leads up ~1,850% year over year.
The individual experiments matter more than the headline, because several of them failed.

**Source for every number in this table: the Growth Unhinged article above. HubSpot's data, on
HubSpot's properties. "Read-across" is our own judgment, not theirs.**

| Experiment | HubSpot's reported result | Read-across for UpSight |
|---|---|---|
| **llms.txt** | Total failure. Planted "easter egg" text was never cited; server logs showed no bot fetches of the file. Broader data cited: ~97% of llms.txt files get zero requests. | **Don't build one.** It is the most-recommended AEO tactic on the internet and it does nothing. This is the discipline lesson: check your own logs before adopting consensus. |
| **Bot speed (pre-rendering)** | 6.4× faster page delivery to bots (~0.1s), **+1,600% AI bot crawls**, +30% traditional search crawls, **+40% citations**, +6% AI referral traffic. | **Highest-leverage item on this list and the one that expires.** Cheap pre-launch, painful to retrofit. Applies directly to the Decision Files site build. |
| **Pricing pages** | LLMs were quoting stale third-party pricing because HubSpot's own pricing was JS-rendered and uncrawlable. Fixed by publishing plain HTML long-form pricing explainers per product; 5 of 6 products materially improved pricing accuracy in LLM answers within ~2 months. | Same failure mode is likely on any React/SPA pricing page. **If an LLM can't read our pricing, it will confidently quote someone else's version of it.** |
| **Bot-optimized glossary** | 50 server-rendered, HTML-first glossary pages (definition + example + product connection). **+35% visibility on awareness queries, +26% on consideration/decision queries; citation share 1.97% → 3.2%.** Later shipped in 5 more languages. | The cheapest content asset that moves *visibility* (not just citations). We already own the vocabulary: customer discovery, evidence log, opportunity solution tree, JTBD, continuous discovery, buyer decision file. |
| **Hyper-specific vertical pages** | 141 AI-generated pages on industry × use-case ("CRM for [industry]"). **92% citation rate, +49% visibility.** Rolled out in DE/ES/FR/JA. | Volume play on long-tail intent. Our axes: role × research job ("customer discovery for solo founders", "buyer interviews for security vendors"). AI-generated is fine *if* every page is server-rendered and factually true about the product. |
| **AI share buttons** ("Summarize with AI") | +29% citation rate, 7 of 8 URLs improved — but visibility on related questions flat. **Shelved.** | Skip. Low ceiling, and we don't have the traffic to make it pay. |
| **Paid mentions, not links** | Flat fees to third-party sites for brand *mentions*. Findings: **brand-new articles out-cite established high-traffic ones (recency bias)**, and **several mentions from mid-authority sites beat one mention from a high-DR site**. They priced a mention by dividing AI-influenced ARR by mentions built. | The strategy inverts classic link-building. **Volume and freshness beat authority.** Our unpaid equivalent: every Decision File interview subject has a network and a newsletter. |
| **Reddit / community** | Noticed r/HubSpot activity spikes correlated with HubSpot mentions across all of Reddit. Applied for co-moderator status, ran a content calendar, AMAs, and recruited "champions." **+61.7% YoY community growth, 7× Reddit mentions, citations doubled.** | Communities are mention factories that keep producing while you sleep. Reddit is disproportionately weighted in LLM training and retrieval. |

### HubSpot's own framing, worth stealing verbatim

> *"Some content was meant for humans and bots. Some content was just for humans. Some content was just for bots."*

Decide which of the three a page is **before** you write it. A bot-only page (glossary entry,
vertical landing page) is allowed to be plain, dense, and unbeautiful. A human-only page (the
founder story, a Decision File narrative) is allowed to ignore this entire document.

---

## The UpSight version — what actually applies at our size

We are one person with no content team, no llms.txt to delete, and one genuinely rare asset:
**original first-party research** (Decision Files, buyer interviews, survey data). LLMs cite
primary sources with specific numbers far more readily than they cite opinion. The asset we have
is the one that's hardest to compete with.

### Rule 1 — Infrastructure before content
No amount of well-formatted prose survives a bot that can't render the page. Every property we
own must pass: **server-rendered HTML, crawlable without JavaScript, sub-second to a bot.**
Check with `curl` and read what comes back — if the content isn't in the raw HTML, no AI engine
sees it. This is a pre-launch gate on the Decision Files site, not a later optimization.

### Rule 2 — Verify on our own data before scaling anything
llms.txt is the cautionary tale: universally recommended, measurably useless. Before rolling a
tactic out, prove it on a handful of URLs using **server logs** (did a bot fetch it?) and
**citation checks** (did an answer quote it?). One experiment file per tactic in
`40-gtm/experiments/`.

### Rule 3 — Mention volume beats mention prestige
Don't chase one prestige placement. Chase ten mid-tier ones, and prefer new content over old.
For us that means: podcasts, newsletters, Substacks, community threads, and the interview
subject's own distribution. Each published Decision File should manufacture 5+ third-party
mentions as a matter of process, not luck.

### Rule 4 — Correct the record
If an LLM is wrong about our pricing, our features, or our category, that's a content bug with an
owner. Publish the crawlable correction; where the bad source is a third-party directory or
comparison site, ask them to fix it.

### Rule 5 — Publish where the answers are built
Reddit, Hacker News, LinkedIn, and niche Slacks are retrieval surfaces, not just distribution.
Being genuinely present in one community beats shallow presence in six.

---

## Tactic backlog, ranked by leverage-per-hour for one person

**Ranking is our judgment; the "evidence" column names whose data supports it.**

| # | Move | Effort | Evidence |
|---|---|---|---|
| 1 | SSR / pre-render audit of upsight.ai + Decision Files site before launch | ~1 day | HubSpot: +1,600% crawls, +40% citations |
| 2 | Citation + crawl baseline (20 prompts × 5 engines, logged; bot hits from server logs) | ~2 hrs, then 30 min/mo | HubSpot: their entire method rested on proprietary logs |
| 3 | Crawlable pricing page in plain HTML | ~2 hrs | HubSpot: 5 of 6 products improved LLM pricing accuracy |
| 4 | 25–50 page glossary of our category vocabulary, HTML-first | ~1 day with AI drafting | HubSpot: +35% / +26% visibility; citation share 1.97% → 3.2% |
| 5 | Mention program: 5+ third-party mentions per published Decision File | ongoing, per file | HubSpot: volume + recency beat domain authority |
| 6 | Community presence in 1–2 places where our ICP argues | ~2 hrs/week | HubSpot: 7× mentions, citations doubled |
| 7 | Vertical page set (role × research job), server-rendered | ~2 days | HubSpot: 92% citation rate, +49% visibility |
| 8 | ~~llms.txt~~ | — | **Don't. HubSpot's logs show it is never fetched.** |
| 9 | ~~AI share buttons~~ | — | Skip. Citations up, visibility flat; HubSpot shelved it. |

---

## Measurement — the minimum viable version

Three numbers, monthly, in `00-control/traction.md`:

1. **Bot crawls** — hits from `GPTBot`, `ClaudeBot`, `PerplexityBot`, `OAI-SearchBot`,
   `Google-Extended` in server logs. *Is anyone fetching us at all?*
2. **Citation rate** — of ~20 fixed ICP prompts run across ChatGPT, Claude, Perplexity, Gemini,
   and Google AI Overviews, what share return an UpSight page or a Decision File? *Are we
   quotable?*
3. **AI-referred signups** — referrer contains an AI engine domain. *Does any of it pay?*

Same 20 prompts every month. A moving prompt set measures nothing. Log runs as dated entries in
the experiment file; don't overwrite.

---

## Tools named in the source article

Recorded for completeness — **none evaluated by us, all enterprise-priced.**
Botify SpeedWorkers (pre-rendering; a Next.js/Cloudflare static render gets us the same outcome
at our scale), Xfunnel (AI-visibility measurement; acquired by HubSpot), HubSpot's own AEO product.
Our version of all three is a `curl` check, a spreadsheet, and a monthly hour.
