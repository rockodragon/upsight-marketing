# AI search crawlability + citation baseline

- **Status:** planned
- **Opened:** 2026-09-16
- **Playbook:** `40-gtm/channels/content-seo/guides/ai-search-playbook.md`

## Hypothesis
If our pages are server-rendered and fast to AI crawlers, then AI bot fetches and citations of
UpSight will rise materially, because the crawl stage — not the writing — is where we are
currently failing.

**Why we believe it:** HubSpot reported ~1,600% more AI bot crawls and ~40% more citations from
pre-rendering alone, and found LLMs quoting stale third-party pricing because their own pricing
page was JavaScript-rendered (source: Growth Unhinged, *Inside HubSpot's AI search experiments*,
read 2026-09-16 — their data at their scale, not a forecast for us).

## Audience / surface
getupsight.com (marketing pages, pricing, blog) and the Decision Files site before it launches.

## Variants
- **A (control):** current rendering, measured as-is.
- **B:** server-rendered / pre-rendered HTML for the same URLs.

## Step 0 — baseline, before changing anything
1. `curl -s <url>` each key page. Record whether the body copy is present in raw HTML. This alone
   may settle the experiment.
2. Grep server logs for `GPTBot`, `ClaudeBot`, `PerplexityBot`, `OAI-SearchBot`, `Google-Extended`.
   Record 30-day fetch counts per bot.
3. Run a **fixed set of 20 ICP prompts** across ChatGPT, Claude, Perplexity, Gemini, and Google AI
   Overviews. Record: does an UpSight page appear; is the pricing/positioning stated correctly;
   who gets cited instead. Verbatim wrong answers go in the log — they are the content backlog.
   The 20 prompts never change after this run.

## Primary metric
AI bot fetches per week on the tested URLs.

**Secondary:** citation rate across the fixed 20 prompts. **Guardrail:** no regression in human
page-load or Core Web Vitals.

## Min sample / duration
All key marketing URLs. Re-measure 30 days after the change; crawl frequency moves before
citations do, so read crawls at 30 days and citations at 60.

## Result
_(pending — log each dated run below, append-only)_

## Learning → graduates to
`20-research/market-intel/` as an AI-search visibility baseline, once there are two measured runs.
