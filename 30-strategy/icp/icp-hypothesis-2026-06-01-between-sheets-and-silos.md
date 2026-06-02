---
title: ICP Hypothesis — Between Sheets and Silos
date: 2026-06-01
status: hypothesis
owner: rick
tags: [icp, positioning, gtm, hypothesis]
origin: claude-chat-conversation
related:
  - positioning-brief
  - cytodyme-dogfood
  - know-your-people-get-to-yes
---

# ICP Hypothesis: Between Sheets and Silos

## Trigger

Conversation feedback from a prospect (Maisha's parting comment): *"Show me the money. I want to figure out who's going to pay for my services."*

She wasn't asking for more features — she was asking who, in her existing conversations and survey data, is ready to pay. The decision-making frame surfaced from her need, not from positioning theory.

Cytodyme is the canonical proof case: using spreadsheets, hates Apollo, actively trying to get off it. DJ has given access to ~80 video recordings + Apollo.io conversation database. Multiple other companies in Rick's network fit the same shape.

## Core Thesis

**There is a real, underserved segment between spreadsheets and expensive siloed tools (Apollo, HubSpot, Salesforce, Gong).** They have conversation and survey data piling up with no system to mine it for *who pays next* and *who's about to leave*.

The job-to-be-done is decision-making, not feature accumulation:
- Who in this pile is ready to buy?
- Who's about to churn?
- Where are the unmet needs we should address?

## Positioning Shift

| From | To |
|---|---|
| "Know your people. Get to yes." | "Show me who's ready to pay — and who's about to leave." |
| Feature breadth (surveys + conversations + CRM + AI) | Decision engine for revenue from existing conversations |
| Generic "customer intelligence" | Buying-signal and churn-risk extraction for small revenue teams |

The decision-making frame doesn't replace "Know your people" — it sharpens *what the knowing is for*.

## Three Testable Segments

### Segment A: Founder-led B2B sales — highest confidence

- Solo or founding team selling B2B services or software, $100K–$2M ARR
- Doing their own discovery calls, demos, follow-ups
- Has 50–500 past conversations across email, Zoom recordings, notes
- **Examples:** Cytodyme (DJ), early-stage SaaS founders, technical consultants
- **Buying trigger:** "I'm losing deals I should be winning because I can't remember who said what."

### Segment B: Boutique agency / consultancy owners

- 2–10 person services firms (design, marketing, strategy, dev shops)
- Project-based revenue, lots of discovery and proposal conversations
- Pain is "find *repeat* buyers and expansion accounts," not just net-new
- **Buying trigger:** "I keep losing track of warm relationships and they go cold."

### Segment C: Post-Apollo refugees

- Companies actively trying to leave Apollo (cost, data quality, fit)
- Already convinced they need *something*, just haven't found the right thing
- Highest urgency, shortest sales cycle, smallest segment
- **Buying trigger:** "My Apollo renewal is in 60 days and I'm not paying it."

## Why Current Options Fail Them

- **Spreadsheets** — don't scale past ~50 contacts; no conversation memory; manual updates die within weeks
- **Apollo** — bloated, expensive credits model, terrible for managing actual relationships, designed for outbound spam not relationship intelligence
- **HubSpot / Salesforce** — overkill, expensive, require an admin, optimized for teams of 20+ with established process
- **Gong / Chorus / Clari** — enterprise pricing ($15K–$40K+), require established sales motion and CRM integration, built for teams that already have process

The wedge: **conversation intelligence + lightweight CRM, under $100/seat (or much less like $40-50), no complex admin setup, works out of the box on existing conversation data.**

## Tests to Run

### Test 1 — Cytodyme proof (Segment A)

Run signal extraction on DJ's 80 videos + Apollo conversation database. Surface:
- Expansion-ready accounts (budget signal + scaling questions)
- Churn-risk accounts (friction language, competitive comparisons, silence patterns)
- Unmet needs (feature requests, workaround mentions)

Present back to DJ and Maisha as findings, not features. If DJ converts and refers 2 more founders like him, Segment A is the beachhead.

**Target:** 5 demos, 2 closes within 30 days.

### Test 2 — Agency interview sprint (Segment B)

Through StartupSD network, find 10 agency/consultancy owners. Discovery question:

> *"Walk me through how you decide who to follow up with."*

Listen for: spreadsheet pain, missed expansion, lost warm leads. If 6+ describe the same pattern, Segment B is real.

**Target:** 10 interviews, 2 pilot commitments.

### Test 3 — Apollo-leaving outbound (Segment C)

Targeted outbound to companies showing Apollo-leaving signals (LinkedIn posts complaining, G2 reviews, "alternatives to Apollo" searches).

Message anchor: *"Saw you're evaluating alternatives. Here's how we help small teams ditch Apollo for something built for relationships, not spam."*

**Target:** 20 outbound, 5 conversations, 1 pilot.

## Deeper Hypothesis Being Tested

Small revenue teams will pay for *conversation intelligence + lightweight CRM* if:

1. Priced under $100/seat
2. Works out of the box without admin setup
3. Mines existing conversation/survey data for buying and churn signals
4. Outputs decisions, not dashboards

**Conversion threshold:** if any of the three segments converts at >10%, the wedge is real.

## Working Bet

- **Beachhead:** Segment A (founder-led B2B)
- **Expansion:** Segment B (agencies/consultancies)
- **Tactical accelerator:** Segment C (Apollo refugees) — runs in parallel, not foundational

Rationale: Rick *is* Segment A. He's in startup communities (StartupSD, Focus26, NCCC). He has Cytodyme as a live proof case. Lowest customer acquisition friction.

## Technical Dependencies

- **Signal taxonomy** — must lock down the 3–5 core signals that predict buying readiness and churn risk before scaling. Existing UpSight lenses already extract structured signals; refinement needed, not net-new build.
- **Ingestion pipeline** — Apollo conversation import + video transcription. Currently in progress; person-identification needs refinement.
- **Visual presentation layer** — not a wall of text. Grid/segmented view: "high-value expansion opportunities" / "churn risks" / "ready to buy now," each with the signals that landed them there. Required for sales demo, not just product.
- **Repeatable workflow infographic** — ingest → extract → score → present. Needed for sales enablement.

## Open Questions

- Pricing for these segments — does the $79/seat consultant tier and $99 flat team tier hold, or does Segment A need a lower entry?
- Onboarding friction — how fast can a Segment A buyer get from "uploaded 50 conversations" to "saw something they didn't know"? I think people will have significant onboarding help needs, and this is something we can charge for.
- Defensibility — what's the moat once Gong/Apollo make a cheaper SMB tier? Working answer: compounding memory layer that gets smarter with every interaction in the workspace.

## Next Actions

- [ ] Complete Cytodyme ingestion (in progress — pipeline refinement on person ID)
- [ ] Review existing UpSight lenses against the 3 signal categories (buying ready / churn risk / unmet need)
- [ ] Tune signal extraction; locked taxonomy before scaling
- [ ] Build presentation layer (grid view + scored ranking)
- [ ] Run Test 1 against DJ — present findings, not features
- [ ] Draft Test 2 discovery script + Test 3 outbound script (deferred until Test 1 yields signal)

## Cross-references

- Positioning: `know-your-people-get-to-yes.md` (parent positioning hypothesis)
- Dogfood: Cytodyme opportunity (`b71c41a8-79a1-4a64-9e55-9bfaae8288f1`)
- Schema bet: "Bet as universal unit" (`14006ce7-da7c-4314-b155-2d4d1a322f94`)
- Pricing experiments: see financial model v6 (vertical pricing — $79/seat consultants, $99 flat teams)
