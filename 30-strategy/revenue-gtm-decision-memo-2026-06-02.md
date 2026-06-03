---
title: Revenue GTM Decision Memo
date: 2026-06-02
status: active decision memo
owner: rick
tags: [gtm, pricing, product, decision]
related:
  - /Users/richardmoy/Docs_obsidian/_OpenClaw/Projects/UpSightApp/30-strategy/icp/README.md
  - /Users/richardmoy/Docs_obsidian/_OpenClaw/Projects/UpSightApp/30-strategy/icp/user-journeys.md
  - /Users/richardmoy/Docs_obsidian/_OpenClaw/Projects/UpSightApp/30-strategy/pricing-strategy.md
  - /Users/richardmoy/Docs_obsidian/_OpenClaw/Projects/UpSightApp/20-research/market-intel/Competitors/dayai.md
---

# Revenue GTM Decision Memo

## The business outcome we are optimizing for

Get to first revenue and repeatable small-team retention by helping founder-led B2B sellers and spreadsheet-run SMBs turn the customer data they already have into fast, provable decisions:

- who is warm and ready to buy
- who is slipping or at risk
- what is blocking the next step

This is the shortest path to money because the buyer already feels the pain, can buy without procurement, and can judge the product on a real workflow in days rather than quarters.

## JTBD

When I am a founder or small-team operator juggling sales, product, and follow-up across scattered calls, notes, surveys, and spreadsheets, help me stop losing revenue because I cannot remember who said what or what to do next.

Success is not "better research" in the abstract. Success is:

- I know who to call today.
- I know which account is slipping.
- I can prove why this recommendation is true.
- I can share the same evidence with my product or marketing teammate without redoing the work.

## Decision

We will lead GTM with the founder-led revenue buyer, using Apollo refugees and spreadsheet users as acquisition paths into that same core workflow.

We will not lead with a broad "customer intelligence for product and sales teams" story.

We will position UpSight as:

**The upgrade from spreadsheets and siloed tools that shows small teams who is warm, who is slipping, and what is blocking the deal, with receipts.**

## Why this decision

### 1. It matches the strongest buyer pain

The highest-urgency language in the vault is about missed revenue, forgotten follow-up, untrusted data, and deals slipping through the cracks. That is stronger buying energy than generic "research repository" language.

### 2. It avoids the worst competitive fight

We should not try to out-Day.ai, out-Attio, or out-Clarify on full AI CRM automation. They are stronger on auto-capture, email/calendar sync, and CRM hygiene.

Our wedge is:

- receipts and evidence traceability
- surveys plus calls plus notes in one model
- structured lenses/frameworks
- decision outputs, not generic summaries

### 3. It still supports multi-hat teams

The initial buyer is the founder or sales-oriented operator. The same workspace should still serve the technical cofounder, product lead, and marketer through alternate views of the same evidence.

This is one product with multiple views, not multiple products.

## Buyer and user model

### Buyer

- founder
- founder-led seller
- sales-oriented cofounder
- agency owner in the expansion path

### Champions / secondary users

- technical cofounder
- product lead
- marketer / PMM
- operator / chief of staff

### Principle

Do not meter humans first. Meter costly computation and ingestion first.

If teammates make the product stickier, include teammates generously and price on workspace value plus usage.

## Pricing decision

### What "included usage plus overages" means

Each paid plan includes a monthly allowance of the expensive things. If the customer stays inside that allowance, the price is fixed. If they go above it, they either:

- pay transparent overage charges, or
- upgrade to the next plan, or
- set a hard budget cap and stop usage at that cap

This is different from a hard limit:

- **limit** = usage stops
- **meter** = usage is measured
- **overage** = extra measured usage is billed

### What we should meter

Meter the parts that create real variable cost:

- audio transcription hours
- heavy analysis runs
- bulk imports / workflow runs when costly

Do not meter:

- seats aggressively
- semantic search
- basic read access
- lightweight collaboration

### Why this matters

If we meter humans, we slow adoption and make comparisons easy with Attio and Day.ai.

If we meter costly work, we protect margin while keeping collaboration easy.

### Recommended packaging direction

Do not ship `29 for one user, 75 for 3 users`.

That recreates seat friction and invites "why not just buy Attio/Day.ai?" comparisons.

Instead:

- **Starter**: one workspace, up to 3 members included, fixed included transcription/analysis allowance
- **Team**: multiple workspaces, up to 10 members included, higher included allowance
- optional read-only viewers can be even more generous

The sticky thing should be cheap or free. The expensive thing should be metered.

### Working pricing shape

Not final pricing copy, but the direction:

| Plan | Price | Includes | Best for |
|---|---|---|---|
| Free | $0 | tiny allowance, hard cap, 2 members | proof of value |
| Starter | $39 | 1 workspace, 3 members, included monthly usage | founder-led seller |
| Team | $99 | 3 workspaces, 10 members, higher included usage | cofounder/team workflow |
| Consultant add-on | $19-29 per extra workspace | add client workspaces without rebuying seats | consultants / agencies |
| Scale/API | custom or higher fixed tier + usage | API/MCP-heavy use | agent builders / heavy use |

Why this is safer than `29 for 3`:

- still impulse-buy territory for the beachhead
- does not anchor the product as a cheap note-taker
- leaves room for consultant and team expansion
- lets us include teammates without underpricing serious usage

For paid plans, overages should be transparent and optional-budget-capped. Avoid the word "credits" in primary messaging because it reads as opaque and hostile.

## Product decision

The promise should be sharpened from:

- "who is ready to buy, who is at risk, and what you missed"

to:

- **who is warm**
- **who is slipping**
- **what is blocking the next step**

"What you missed" is directionally right but too vague. "What is blocking the next step" is easier to prove and act on.

## How the product should generate that outcome

Do not ask the user to compose this outcome from generic themes and lenses alone.

Package the outcome into a primary decision surface:

### Revenue Decision Board

Three default columns or sections:

- Warm now
- Slipping / at risk
- Blocked / missing signal

Each card should show:

- account or person
- confidence score
- why it landed here
- 1 to 3 verbatim receipts
- recommended next step

## UI placement decision

Deliver these outcomes in three layers, not one:

### 1. Today page = the action layer

The **Today** page should be the plainest delivery surface for this promise.

Add a top module called something like:

- Revenue signals
- What needs attention
- Decision board

Within it, show the top 3 to 5 highest-priority cards across:

- Warm now
- Slipping
- Blocked

This is where the user lands to know what to do next. It should be curated, ranked, and small.

### 2. Pipeline and People = the exploration layer

The same classifications should appear as:

- saved views
- filters
- badges
- quick-toggle buttons

Examples:

- Pipeline: `Warm`, `Slipping`, `Blocked`
- People/Accounts: risk badge, blocker badge, momentum badge

This lets the user go from a Today-page alert into the full working surface without inventing a separate mental model.

### 3. Task dependency graph = the explanation layer

The dependency graph is useful for **why something is blocked**, but it is too abstract to be the first blocker surface.

Use the graph to power:

- blocker summaries
- root-cause drill-down
- "this is blocked because..." explanations

Do not make the user infer their top blockers from the graph alone.

### Plain UI rule

Start with the sentence a founder wants answered:

- Who should I act on today?
- Who is slipping?
- What is blocking progress?

Then let lenses, graphs, and evidence justify the answer underneath.

### Under the hood: the lenses we actually need

We should keep lenses, but make them serve the decision board.

#### 1. Buying-readiness lens

Signals:

- urgency
- budget language
- decision process clarity
- champion strength
- follow-up momentum
- explicit positive intent

#### 2. Risk / churn / stall lens

Signals:

- silence after interest
- repeated objections
- negative sentiment shift
- competitor mentions
- stakeholder disengagement
- unresolved implementation fear

#### 3. Blocker lens

Signals:

- unanswered question
- missing stakeholder
- no next step scheduled
- pricing objection
- technical/security concern
- unclear success criteria

#### 4. Product-demand lens

Secondary cross-functional view for product/marketing:

- repeated unmet need
- workaround behavior
- feature pull
- objection cluster
- segment-specific demand pattern

## Cross-functional view

Small teams wear multiple hats. The answer is not separate positioning for every hat. The answer is one evidence model with two default views:

### Revenue view

For the founder / sales lead:

- who is warm
- who is slipping
- what to do next

### Insight view

For product / marketing:

- what objections repeat
- what unmet need is emerging
- what message or feature keeps showing up

Same receipts. Different framing.

## GTM decision

### Core motion

- Beachhead: founder-led B2B sellers
- Acquisition wedge: Apollo refugees
- Adjacent expansion: spreadsheet SMBs
- Team upsell: agencies / consultancies

### Offer

Do not ask people to "try the platform."

Lead with a concrete promise:

**Send your calls, notes, or Apollo export. We will show you who is warm, who is slipping, and what is blocking the next step.**

### What we are not doing

- not leading with enterprise
- not leading with pure research repository language
- not competing on full CRM automation
- not leading with AI credits
- not pricing on strict per-seat logic for the core SMB motion

## 30-day priorities

### Product

1. Ship the first Revenue Decision Board.
2. Make import dead simple for Apollo export, spreadsheet, and recorded calls.
3. Make the receipts path obvious: insight -> quote -> recommended next action.
4. Package the default lenses above so users get the outcome without manual setup.

### GTM

1. Run a concierge founder-seller test on real conversation data.
2. Publish Apollo-alternative and spreadsheet-upgrade positioning pages.
3. Tighten the landing page around the decision promise, not broad "customer intelligence."
4. Capture one case study showing a missed or saved revenue opportunity.

### Pricing

1. Keep pricing public.
2. Define included monthly usage for paid plans.
3. Add transparent overage language and optional spend caps.
4. Include teammates generously on paid plans.

## Open questions still worth testing

- Is the best lead message "who is warm / who is slipping" or "upgrade from your spreadsheet"?
- What exact included allowance creates a no-brainer trial without making free/cheap users unprofitable?
- Does a founder buy faster from a concierge analysis offer than from self-serve onboarding?
- Does the product need a dedicated "next step" action layer to close the loop, or is the evidence + recommendation enough at first?

## Final call

We should make money by selling a revenue decision workflow to small teams, not by presenting as a broad AI CRM or a generic research repository.

The product should feel collaborative across multiple users, but the pricing should meter costly work, not people.

---

## Addendum — 2026-06-02 (PM): reconciliations from the Day.ai pressure-test

> This memo IS our decision record — the GTM equivalent of an engineering **ADR**. Decision *index* = `00-control/decisions.md`; *hypothesis space* = `00-control/open-questions.md` + `40-gtm/experiments/`. This addendum folds in points from the Day.ai pricing/positioning pressure-test that refine (not reverse) the decisions above.

### 1. "Draft" the AI-CRM category — without becoming a broad AI CRM
The memo says *don't present as a broad AI CRM*. That stands **for the product fight** — we will not out-automate Day.ai/Attio/Clarify on CRM hygiene, capture, and pipeline automation. But we should **not cede the category *language***. The category is wide open (Day.ai is ~10 people, launched Feb 2026 — nobody owns it). So:
- **Top-of-funnel / discovery:** use AI-CRM category language for drafting — "Day.ai alternative" pages, comparison content, "the AI CRM that shows you who's warm, slipping, and blocked." Ride the category they're spending to create.
- **Product / the fight:** the revenue-decision workflow + receipts + multi-source. Differentiate inside the category; don't match their automation depth.
- Net: **category language = drafting lane; product promise = decision workflow.** These are not in conflict.

### 2. Pricing transparency — be PostHog-shaped
Adopt PostHog's posture (not its product): **public pricing, a genuinely useful free tier, pay only as usage grows, no surprises, no sales call to start.** This matches "meter costly work, include people generously." Keep avoiding the word "credits" in primary copy — say **"included usage + transparent overages, with an optional spend cap."** That's PostHog's "you'll never get a surprise bill" energy without the hated-credits framing.

### 3. The live page contradicts this decision — reconcile it
`getupsight.com/pricing` currently shows **per-seat $0 / $29 / $39** ("Pro $29, Team $39/user"). That is the *old per-seat model this memo explicitly rejects* ("don't ship 29-for-1, 39-per-seat — it invites 'why not Attio/Day.ai?'"). **Action: update the live page to the workspace + included-usage shape** (Free / Starter $39 workspace / Team $99 / consultant add-on). 
- **"Is $29/$39 right?"** — the *number* isn't the problem; the *per-seat model* is. We've priced at $15 and $29 before (see `pricing-strategy.md` founding-member $19, launch $29) — the flip-flopping is a symptom of pricing the wrong unit. Lock the **unit** (workspace + metered costly usage), then test the number.
- **"How do we not lose money?"** — already answered in the Pricing section: cap free transcription (the real COGS at $0.37/hr), include a bounded monthly allowance of transcription + heavy analysis, bill overages above COGS, and route 80% of AI to mini/Haiku. Margins hold at 75-80%+ as long as we never give away unlimited transcription/analysis. The live "unlimited AI analysis" on Pro is a margin leak — replace with an included allowance.

### 4. The multi-hat creative angle — yes, but as a *second* message
"AI CRM your product/marketing team will love" is a good *expansion/stickiness* hook, not the lead. Buyer = **the founder / sales-oriented operator** (acute pain, holds budget, buys fast). The dual-cofounder reality (tech + commercial founder needing different views of the same data) is exactly the **Revenue view / Insight view** split above — that's the differentiator and the retention story (two cofounders both getting value = hard to churn). So: **lead to the founder on revenue; expand with "your product/marketing cofounder gets their view too."**

### 5. Prove it head-to-head → `40-gtm/experiments/2026-06-day-ai-head-to-head.md`
Rather than assert the wedge, run a head-to-head against Day.ai on a tight sub-segment (founder-sellers who also run surveys/feedback — Day.ai can't do surveys — and the $75-resisters). See the experiment for hypothesis, audience, offer, metric, and decision rule.
