# SEO plan — the GSC-first bottom-of-funnel loop

> **Status:** active 2026-09-25 · Phase 0 done (baseline in the experiment file: 11 clicks, 383 impressions, **zero** BOFU queries at 4–20, so Phase 3 leads) · **Owner:** Rick · **Channel:** content-seo
> **Method source:** Rob Hoffman, X post of 2026-09-24 — https://x.com/robhoffman_/status/2103200798612373982
> **Companions:** `20-research/market-intel/Keyword-Research/gtm-keyword-analysis.md` (Feb 2026 keyword map) ·
> `guides/seo-aeo-guide.md` (per-page on-page + schema standard) ·
> `40-gtm/experiments/2026-09-gsc-bofu-loop.md` (the test and its decision rule)

---

## The thesis in one paragraph

Hoffman's method is *stop writing, start fixing*. Export Search Console, find the bottom-of-funnel
queries you already rank 4–20 for, ask Claude for a prioritized checklist per page, implement it, and
watch the position move. It works because those queries already have demand and Google already
thinks the page is relevant — moving a page from 8 to 3 is far cheaper than ranking a new page
from zero. For getupsight.com the loop has thin inputs today: 12 sitemap URLs, five blog posts
(newest published 2026-02-26), no comparison pages, and on-page defects that cap every URL. So the
plan runs the loop from day one on whatever GSC shows, fixes the technical ceiling in parallel, and
builds the handful of bottom-of-funnel pages the loop can't find because they don't exist. Every new
page enters the loop 28 days after it ships.

**The one rule:** the GSC export is the content queue. The Feb 2026 cluster plan (25 posts) is
reference material, not a backlog.

---

## The recipe — Hoffman's 11 steps as we run them

| # | Hoffman's step | UpSight version |
|---|---|---|
| 1 | Open Google Search Console | Property for `getupsight.com` (domain property, not URL-prefix, so http/https/www all roll up) |
| 2 | Go to Performance | Search results report |
| 3 | Click the "Average position" box so it turns on | Also keep Clicks + Impressions on |
| 4 | Select last 28 days | Compare mode off for the export |
| 5 | Export → Google Sheets | Save as `GSC export YYYY-MM-DD` in Drive |
| 6 | Queries tab: freeze row 1, sort Position A→Z | Also export the Pages tab — we need both |
| 7 | Give the sheet to Claude with the "find BOFU queries in positions 4–20" prompt | Prompt A below, which carries our definition of bottom-of-funnel |
| 8 | Choose the top keywords you'd want to rank higher for | Pick 3–5 max. One page per keyword. Log them in the experiment file |
| 9 | Ask Claude for the prioritized checklist per page | Prompt B below, fed the page's current HTML |
| 10 | Implement as many changes as possible | Site code is in `../Insights/`; on-page standard is `guides/seo-aeo-guide.md` |
| 11 | Check GSC daily for that page | Daily for 14 days after a change (GSC lags 2–3 days), then weekly in the Monday review |

Steps 1–6 take an hour the first time and ten minutes after that. Steps 7–9 are twenty minutes
with Claude. Step 10 is where the time goes, and it is the only step that moves a ranking.

---

## Current state — audited 2026-09-25

**Source:** direct crawl of getupsight.com with curl on 2026-09-25, reading each page's title, meta
description, canonical, H1, JSON-LD and internal links. Real data, not illustrative. Search Console
data has **not** been pulled yet — that is Phase 0 and needs Rick's Google login.

### Every URL in the sitemap, plus four probes

| URL | Title tag | Meta description | Canonical | JSON-LD | Words | Verdict |
|---|---|---|---|---|---|---|
| `/` | "UpSight \| Your last 100 calls already answered this" | Hand-written, on-message | **missing** | **none** | 1,255 | Homepage has no canonical, no og:title, no schema |
| `/customer-discovery` | 86 chars — truncates in results | Good | OK | SoftwareApplication + FAQPage + Breadcrumb | 931 | Strongest page technically; title too long |
| `/customer-discovery-for-consultants` | 84 chars — truncates | Good | OK | Yes | 961 | Same: shorten title |
| `/win-back` | Good | Good | OK | Yes | 1,021 | Fine |
| `/pricing` | Good | Good | OK | FAQPage | 909 | **Not in sitemap** |
| `/blog` | "Blog \| Upsight - Customer Insights & Best Practices" | Generic | OK | none | 726 | Lower-case "Upsight" brand inconsistency |
| `/about` | **missing** | **missing** | OK | none | 935 | Not in sitemap; no title at all |
| `/sign-up` | **missing** | **missing** | **missing** | none | 543 | In sitemap at priority 0.8 with no title |
| `/solutions` | not audited | not audited | not audited | not audited | not audited | Exists (200), not in sitemap |
| `/blog/customer-discovery-questions-not-to-ask` | Good | **Boilerplate** ("Read … on the Upsight blog") | OK | BlogPosting only | 2,872 | Published 2025-11-15 |
| `/blog/how-to-talk-to-customers-guide-to-customer-discovery` | Good, long | **Boilerplate** | OK | BlogPosting only | 2,782 | Published 2025-10-20 |
| `/blog/what-is-customer-discovery-a-practical-guide-for-2026` | Good | **Boilerplate** | OK | BlogPosting only | 3,318 | Published 2025-12-03 |
| `/blog/stop-vibe-coding-your-way-to-nowhere` | Good | **Boilerplate** | OK | BlogPosting only | 1,853 | Published 2026-02-26 — newest post |
| `/blog/from-assumptions-to-evidence` | Good | **Boilerplate** | OK | BlogPosting only | 1,627 | Published 2026-01-13 |
| `/compare/upsight-vs-dovetail` | 404 | | | | | Draft exists in `comparison-pages/` — never shipped |
| `/alternative-to-dovetail` | 404 | | | | | Keyword #2 in the Feb map; no page |
| `/blog/rss.xml` | **HTTP 500** | | | | | Broken feed |

Blank cells in the 404/500 rows mean "no page to measure".

### Defects, ranked by how many pages they cap

1. **Sitemap emits `http://` URLs while every canonical is `https://`.** Twelve URLs disagree with
   themselves. Google usually resolves it, but it is a free fix and removes doubt.
2. **Five blog posts carry the same auto-generated meta description** ("Read *title* on the
   Upsight blog"). That is the snippet Google shows on every blog impression. Highest-leverage
   copy change on the site — five paragraphs of writing.
3. **Every blog post has an FAQ section and none emits `FAQPage` schema.** The landing pages
   do. The on-page guide already specifies it. Template-level fix, five pages gain rich results.
4. **Homepage: no canonical, no og:title, no JSON-LD** (Organization + WebSite at minimum).
5. **`/about` and `/sign-up` have no title tag.** `/sign-up` is in the sitemap at priority 0.8.
6. **`/pricing`, `/about`, `/solutions` missing from the sitemap.** Pricing is a buying query.
7. **Landing-page titles run 84–86 characters.** Results truncate around 60. The keyword is at
   the front so it survives, but the brand and the second clause do not.
8. **Internal linking is nav-only.** Blog posts link to `/sign-up`, `/blog`, `/pricing` and the
   consultants page; not one contextual link from a landing page into a post or between posts.
   The FAQ on `/customer-discovery` even asks "Is there a consultant-specific version of this
   page?" — good — but no page links into the blog's 12,000 words of discovery content.
9. **Author schema is `Person: "Rick"` with no URL** and no author page. Weak E-E-A-T signal on
   a site whose whole pitch is receipts.
10. **RSS feed returns 500.** Small, but AI crawlers and aggregators use it.
11. **Positioning drift.** The homepage now sells *"your last 100 calls already answered this"* —
    calls, lenses, receipts. The landing pages, the blog, and the Feb 2026 keyword map all sell
    *customer discovery*. Neither is wrong, but no keyword research exists for the call-analysis
    framing. Logged in `00-control/open-questions.md`.

Nothing above needs new content. Items 1–7 and 10 are a day of work in the site repo.

---

## The plan

### Phase 0 — baseline (this week, about two hours, Rick only)

Nothing else in this plan produces a number until this is done.

1. Confirm a **domain property** for `getupsight.com` exists in Search Console with at least
   28 days of data. If none exists: add it, verify via DNS TXT at the registrar, submit
   `https://getupsight.com/sitemap.xml`. Then Phase 1 waits 28 days while Phases 2 and 3 run.
2. Run recipe steps 1–6. Export **Queries** and **Pages** tabs. Keep the sheet; every future
   export is compared against it.
3. Record in the experiment file: total clicks, impressions, average position, and the count of
   queries in positions 4–20 with ≥ 10 impressions. That count is the size of the opportunity
   and decides whether Phase 1 or Phase 3 leads (see the decision rule in the experiment file).
4. Make sure organic sign-ups are attributable: PostHog (already on the site) needs
   `utm`/referrer captured on the sign-up event so "organic search → Analyze your evidence" is a
   filter, not a guess.

### Phase 1 — run the loop (weeks 1–2, then every Monday)

1. Paste the Queries tab into Claude with **Prompt A**. It returns BOFU queries in 4–20, with the
   page each one currently lands on (from the Pages tab).
2. Pick **3–5 keywords, one page each.** Tie-break on: commercial intent first, then
   impressions, then closeness to page 1 (position 4–10 beats 11–20).
3. For each page, run **Prompt B** with the page's current HTML. Implement the checklist top-down.
   Every change also passes the `guides/seo-aeo-guide.md` list (definition sentence up top,
   question H2s, FAQ + `FAQPage` schema, concrete numbers, author block).
4. Request indexing for the changed URL in GSC (URL inspection → Request indexing).
5. Check that URL's position daily for 14 days, then weekly. Log the before/after in the
   experiment file.
6. Repeat the export and Prompt A every Monday. New 4–20 queries appear as pages improve; that
   is the loop feeding itself.

**Expectation setting.** A young domain with 12 URLs may have only a handful of buying queries
in 4–20, and several will be branded ("upsight"). Optimize whatever is there — it is still the
cheapest ranking gain available — and let the count tell you how much to lean on Phase 3.

**Automation, later.** After the loop has run twice by hand, a 40-line script against the Search
Console API (service account, `searchanalytics.query`, dimensions `query` + `page`, last 28 days)
drops the CSV straight into Claude Code. Not before — see the workflow work first.

### Phase 2 — fix the ceiling (weeks 1–3, in the site repo, parallel to Phase 1)

**Handoff-ready spec with exact copy, schema and link targets:** `site-fixes-spec-2026-09.md`.
**Status 2026-09-25:** implemented on `epic-hq/UpSight` branch `claude/seo-site-fixes-2026-09` (commit
`4e4984c`), awaiting review, merge and deploy. Phase 3 pages 1–3 are built on the same branch.
Ship the defects list above, in that order. Concretely:

- Sitemap: `https://` everywhere; add `/pricing`, `/about`, `/solutions`; drop `/login`
  (a login page has no search value) — keep `/sign-up` only once it has a title.
- Blog template: hand-written `meta_description` per post (two of the vault drafts in `blog/`
  already carry one in frontmatter; write the other three); `FAQPage` schema generated from the FAQ section;
  `Person` author with `url` pointing at `/about` (or a `/author/rick-moy` page); `dateModified`
  honest, not bulk-stamped (all five posts show the same 2026-03-29 modified date — a bulk edit
  that Google reads as a signal, so make it true or leave it alone).
- Homepage: canonical, `og:title`, `og:description`, `Organization` + `WebSite` JSON-LD.
- `/about`, `/sign-up`: title + meta description.
- Landing-page titles to ≤ 60 characters. Suggested:
  `Customer Discovery Platform | UpSight` and `Customer Discovery for Consultants | UpSight`
  (the og:title already says exactly this — make the title tag match).
- RSS: fix the 500.
- Internal links: each landing page links to its two most relevant blog posts in body copy;
  each blog post links to the landing page for its persona and to one sibling post. Anchor text
  is the target query, not "read more".

### Phase 3 — build what the loop can't find (weeks 3–8, one page per week at most)

The loop only optimizes pages that exist. Bottom-of-funnel queries with no page can't rank at all.
Build these, in this order, and feed each into the loop 28 days after it ships:

| Order | Page | Why now | Starting point |
|---|---|---|---|
| 1 | `/compare/upsight-vs-dovetail` | "Dovetail alternative" is keyword #2 in the Feb map; Looppanel, Condens and Marvin all rank for it; Dovetail's paid path is now Enterprise-only, which sharpens the small-team angle | **Copy ready:** `comparison-pages/upsight-vs-dovetail.md` (rewritten 2026-09-25 with verified pricing) |
| 2 | `/mcp-server` | GSC (28 days to 2026-09-22) already has `/docs/chatbots-mcp` at position 3.3; "software with an MCP connection" is a buying query with almost no competition in this category. Not at `/mcp`, which is the live endpoint | **Copy ready:** `landing-pages/mcp-server.md` |
| 3 | `/customer-call-analysis` | The homepage's actual promise ("your last 100 calls already answered this") has no landing page and no keyword research. The site's only non-branded demand today is survey-creation queries, which is not what we sell | **Copy ready:** `landing-pages/customer-call-analysis.md`; validate the query family against the next GSC export |
| 4 | `/compare/upsight-vs-day-ai` | Already planned in `40-gtm/experiments/2026-06-day-ai-head-to-head.md` | That experiment |
| 5 | "Best customer research tools 2026" round-up | Commercial intent; we can be honest about where Dovetail wins | Keyword map row 16 |

Rule for every new page: it targets one query family, carries `FAQPage` schema, links to `/pricing`
and `/sign-up` with the query as anchor text, and gets one contextual link *from* an existing page
the day it ships. No page is built for a query the Feb map or the GSC export doesn't show.

**Not in Phase 3:** the 25-post cluster plan from February. Informational posts get written only
when the loop shows an informational query in 4–20 that a BOFU page can't serve.

### Phase 4 — cadence (from week 3, permanent)

- **Monday, 20 minutes, inside `10-ops/weekly-review.md`:** re-export, Prompt A, confirm the
  3–5 targets, log positions in the experiment file. Swap a target out only if it has been on
  page 1 for two consecutive weeks or has gone nowhere for six.
- **Daily, 2 minutes, only while a change is < 14 days old:** GSC → Performance → filter Page →
  glance at position.
- **Monthly:** results row in the experiment file; if a finding is real, it graduates to
  `20-research/market-intel/Keyword-Research/` as a refresh of the keyword map.

---

## Prompts — copy-paste

### Prompt A — find the bottom-of-funnel queries (Hoffman step 7, with our definition)

```
You are analysing a Google Search Console export for getupsight.com.
The Queries tab has columns: Top queries, Clicks, Impressions, CTR, Position.
The Pages tab has the same for URLs.

UpSight is a customer-intelligence tool. It re-reads recorded customer calls,
interviews and surveys through analytical "lenses" (sales/BANT, discovery,
jobs-to-be-done, decision) and pins every finding to the moment it was said.
Buyers are founders, product leads at small B2B teams, and solo/boutique
consultants who run stakeholder interviews. Free tier: "Analyze your evidence".

Bottom-of-funnel for UpSight means the searcher is choosing or comparing a
tool, not learning a concept. Treat as BOFU any query containing or implying:
tool, software, platform, app, alternative, alternatives, vs, versus,
compare, pricing, cost, best, top, "for consultants", "for product teams",
"for founders", or a competitor name (Dovetail, Looppanel, Condens, Marvin,
Notably, Gong, Grain, Fathom, Granola, Day.ai, Enterpret, Listen Labs).
"customer interview analysis tool" is BOFU. "what is customer discovery" is not.
Branded queries containing "upsight" are BOFU but excluded from this list —
report them separately.

Task:
1. List every BOFU query in positions 4 to 20 inclusive, with clicks,
   impressions and position, sorted by impressions descending.
2. For each, name the URL it currently lands on (from the Pages tab if it
   can be inferred; otherwise say "unknown").
3. Flag any query where two of our URLs compete for it.
4. Give me the top 5 you would optimize first and one sentence each on why,
   weighing commercial intent, impressions, and how close it is to page 1.
5. List branded queries separately.
Do not invent queries that are not in the sheet.
```

### Prompt B — the per-page checklist (Hoffman step 9)

```
Target query: "[KEYWORD]"
Page: https://getupsight.com/[path]
Current position (28 days): [N]   Impressions: [N]   Clicks: [N]
Pasted below is the page's current HTML.

Give me the checklist of changes to this page most likely to raise its
ranking for the target query, ordered by priority, highest first. For each
item say what to change, what to change it to (write the actual copy where
copy is needed — title tag ≤ 60 chars, meta description ≤ 155 chars, H1,
first paragraph), and why it matters for this query. Cover: title, meta,
H1, first 100 words, heading structure, whether the page answers the
query's intent (tool comparison vs how-to vs definition), missing sections
a page-1 result for this query would have, FAQ questions to add, schema
(FAQPage, SoftwareApplication, BreadcrumbList), internal links in and out
with anchor text, and image alt text. Do not suggest anything that would
make the page less true; UpSight's promise is receipts, so every claim must
be one we can show. Flag any item that requires a new page rather than an
edit to this one.

[HTML]
```

### Prompt C — write the edits (our addition, for Claude Code in the site repo)

```
Apply items [1–N] from this checklist to the page component at [path in
../Insights]. Keep the existing design tokens and layout; change copy,
metadata, headings, links and schema only. Do not touch the homepage. Show
me the diff before committing.
```

---

## Measurement and the decision rule

| Metric | Type | Source | Target by day 60 |
|---|---|---|---|
| Organic sign-ups (free tier, "Analyze your evidence") | Primary | PostHog sign-up events filtered to organic search referrer | ≥ 3 in a month, attributable |
| Clicks on the 3–5 target queries | Leading | GSC, 28-day window vs Phase 0 baseline | ≥ +50 % |
| Average position of the target pages for their query | Leading | GSC per-page filter | Each moves ≥ 3 positions or reaches page 1 |
| Impressions on non-target queries for the same pages | Guardrail | GSC | No drop > 20 % (over-optimization / cannibalization) |
| Pages with `FAQPage` rich result eligibility | Health | GSC Enhancements report | All blog posts + landing pages |

The full hypothesis, the baseline numbers, and the win/kill rule live in
`40-gtm/experiments/2026-09-gsc-bofu-loop.md`. Findings graduate to the keyword map; the call on
whether the loop becomes the permanent SEO motion closes in `00-control/decisions.md`.

---

## Beads issues to seed

Tasks live in Beads, not here. This session has no Beads access, so the issues are listed once
for whoever opens the next local session; delete this block once they exist.

- `domain:gtm gtm:content p1` — GSC: verify domain property, export 28-day Queries + Pages, run
  Prompt A, pick 3–5 targets, record baseline in the experiment file. (Phase 0 + Phase 1 step 2)
- `domain:gtm gtm:content p1` — Site: sitemap to https, add pricing/about/solutions, drop login;
  homepage canonical + og + Organization/WebSite schema; titles on /about and /sign-up. (Phase 2)
- `domain:gtm gtm:content p1` — Blog template: hand-written meta descriptions for all five posts
  (pull from vault frontmatter); FAQPage schema from FAQ sections; author Person with URL. (Phase 2)
- `domain:gtm gtm:content p1` — Ship `/compare/upsight-vs-dovetail` from `comparison-pages/upsight-vs-dovetail.md`
  (copy, FAQ, schema and inbound links are in the file). (Phase 3 #1)
- `domain:gtm gtm:content p1` — Ship `/mcp-server` from `landing-pages/mcp-server.md`; link from `/pricing`,
  `/docs/chatbots-mcp` and the homepage. (Phase 3 #2)
- `domain:gtm gtm:content p1` — Ship `/customer-call-analysis` from `landing-pages/customer-call-analysis.md`;
  link from the homepage and `/solutions`. (Phase 3 #3)
- `domain:gtm gtm:content p2` — Landing-page titles to ≤ 60 chars; contextual internal links
  landing ↔ blog; fix `/blog/rss.xml` 500. (Phase 2)
- `domain:gtm gtm:content p2` — Keyword refresh for the calls/lenses/receipts positioning; decide
  whether a call-analysis landing page is warranted from GSC + SERP check. (Phase 3 #3)
- `domain:ops p2` — Add the Monday 20-minute loop to `10-ops/weekly-review.md`. (Phase 4)

---

## Addendum 2026-09-30: Borja Obeso's three SEO wins, evaluated

**Source:** X article "Founders: you need an optimized About Us (and 2 easy SEO wins)" by Borja Obeso,
2026-09-29. https://x.com/borjafat/status/2104896885173436464. **Read it with its author in mind:** he
sells an SEO tool, the article ends with a pitch for it, and it offers no data that any step moves
rankings or AI citations. The steps are sound practice, not proven levers.

| Step | Verdict | Why, for this site |
|---|---|---|
| **1. About page** with a one-sentence company description and four company-named sections | **Do. Done.** | `/about` was the second most-seen page in Search Console (44 of 383 impressions, position 5.1) and opened with values copy instead of saying what UpSight is. The Organization and author schema already point at it. Its low-contrast labels (2.8:1 and 4.0:1) also failed the house rule. |
| **2. Statistics page** with sourced figures and original research | **Do the sourced half. Done. Defer the original half.** | The playbook's value is original findings, and none are ready to publish. The last usage figures in the vault (May 2026) were single-digit weekly users, no current number was pulled, and the Decision Files are a different subject. Five verified primary-source figures shipped. Nothing was invented. See `20-research/market-intel/customer-discovery-statistics-sources-2026-09.md`. |
| **3. Four to six money pages in a shared footer** | **Do. Done.** | Pages inside the marketing layout had no footer, and the homepage footer linked only Blog, Terms, Privacy, Security and About. Six commercial pages now sit in one footer on every marketing page. |
| "Automate it with this SEO skill" | Skip | A funnel into the author's product. |

**Shipped** on `epic-hq/UpSight` branch `claude/seo-site-fixes-2026-09`, commit `711983bc`, on top of a merge
of current main. Also added the new pages to `llms.txt`, and a server-render test that checks one H1,
valid JSON-LD and live internal links on every page built here.

**Still needs a person**
- Rick's personal LinkedIn URL for the About page and Person schema. None is in the vault and
  guessing a common name is how the wrong person gets linked.
- Add a link to the statistics page from the "what is customer discovery" post, at the sentence
  about 12 to 20 conversations. That post lives in the CMS, not in code.
- Decide the first original-research question. Candidates are in `00-control/open-questions.md`.
- Put a recurring quarterly date on the statistics review (next by 2026-12-31).

## Addendum 2026-10-01: the new pages must be built from the homepage in git

**What went wrong, in three rounds.** The first pages took their positioning from the homepage as it
stood on 2026-09-25. The second round changed only the button labels. The third retyped the new
homepage into constants and rebuilt the sections by hand, which is still invention. The cause is that
nothing connected the pages to the homepage, and the homepage changed three times in ten weeks.

**What staging holds.** `origin/staging` (05e7c042) still has the previous homepage: the call
graveyard band, "The cure for AI hallucination", the exhibit, "Start with the three calls your team
argues about most", and no hero decision diagram. `origin/main` (7c753d86) has the current one. Anyone
previewing through staging sees the old copy. The SEO branch is built on main. Merging it into staging
needs main's homepage backported first, or the homepage file will conflict.

**The fix.** `scripts/sync-home-sections.mjs` extracts the homepage's own sections out of git (`git show
origin/main:...`) into `app/features/marketing/components/HomeSections.tsx`: hero with the decision
diagram, signal diagram, lenses, source band, three steps, founder note and final call to action. The
pages render those real sections with the homepage's own stylesheet, and add their query-specific
content around them. `pnpm run sync:home-sections` re-extracts after a homepage change. A parity test
renders the homepage and each section and fails if they differ. Page render tests fail if retired
language returns (hallucination, graveyard, tombstone, "last 100 calls", "three old calls").

**AEO measures applied.** A definition sentence in the first paragraphs of each page. Question-phrased
H2s on the page-specific sections. FAQ markup generated from the same data as the visible FAQ.
Comparison tables. A key-facts block at the top of `llms.txt` and `llms-full.txt` with prices read from
the plan config. Product schema on the homepage that restates only what the page says. One consistent
description of the company across the footer, schema and `llms.txt`.

**Not changed.** `/pricing` still says "Customer intelligence with receipts" in its meta description,
and `/customer-discovery` and `/customer-discovery-for-consultants` still lead with older framing.
Those are existing money pages, not part of this work, and are logged as an open question.

## What this plan does not do

- It does not restart the 25-post cluster calendar. That plan assumed a content team; this one
  assumes a founder with two hours a week.
- It does not touch paid search. If the loop shows a BOFU query with real impressions and a page
  that won't move, that is the case for a Google Ads test — log it in open-questions.
- It does not decide the positioning question (discovery vs calls/lenses/receipts). It surfaces it
  and lets the first GSC export inform it.
- It does not optimize thedecisionfiles.com. That site is a separate domain with its own plan; its
  only role here is the link from each Decision File back to getupsight.com, which is the most
  credible backlink we control.
