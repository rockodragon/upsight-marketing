---
title: UpSight User Journeys — by ICP
date: 2026-06-01
status: canonical synthesis
owner: rick
tags: [user-flow, journeys, activation, gtm]
---

# User Journeys — by ICP

> Lives alongside the ICP brief (`README.md`) and messaging (`messaging-by-icp.md`) so `icp/` is the full package: **who we target → how they succeed → how we talk to them.** Journeys are labeled by their ICP letter (A/B/C/D) to match the brief. Single file on purpose — they're short and share one aha; we'll split a journey into its own file only when it needs to travel standalone (e.g., to a designer).

## The universal "aha": the receipts moment
Every journey converges on **one wow moment: click an insight → see the verbatim source quote.** *"Anyone can summarize. Few can prove."* Nail this in onboarding, demo, and product. **Activation = added content → viewed analysis → took action.** Four activation paths into that moment: (1) upload a conversation, (2) send a smart survey, (3) bulk-upload a backlog, (4) live-record.

---

## Primary-ICP journeys

### A — Founder-led B2B seller  *(beachhead)*
- **Trigger:** lost a winnable deal / a pile of un-mined calls.
- **Flow:** find via community/SEO/referral → sign up, voice-first goal capture → upload 2–3 recent recordings *or* import conversation DB → AI extracts buying-signal / churn-risk / unmet-need → **grid view: "ready to buy / at risk / expansion"** with the signal behind each → act on the list → invite teammate → upgrade.
- **Aha:** "These 3 accounts show expansion signals and I'd have missed two." Decisions, not a dashboard.
- **Sub-variants** (same ICP, different entry):
  - *Product-direction:* trigger = a team debate about what to build → upload calls *or* run a smart survey → patterns + receipts → settle the debate with evidence.
  - *Post-launch urgency:* trigger = board meeting in ~2 weeks, runway pressure → **bulk-upload 5–10 recordings** → cross-conversation synthesis in hours → export for the board deck → pivot/persevere. (Fast first-week conversion; then becomes the standing A journey.)

### B — Boutique agency / consultant  *(expansion)*
- **Trigger:** new client project; or a warm relationship went cold.
- **Flow:** sign up → voice-first project setup → record/upload first client meeting → AI transcribes + extracts evidence + themes → upload 2–3 more → cross-stakeholder agreement/disagreement synthesis → export into a client deliverable → 2nd project → upgrade → refer.
- **Aha:** client challenges a recommendation → consultant clicks → shows the source quote. "3 days of synthesis → 30 minutes." Decision rule: 5+ convert & reuse within 60 days → invest.

### C — Apollo refugee  *(acquisition wedge)*  — NEW
- **Trigger:** Apollo renewal in ~60 days, a deliverability disaster, a credit bill-shock, or a support failure.
- **Flow:** arrives via "Apollo alternatives" SEO / comparison page / switch campaign → sign up → **import the Apollo conversation DB + contacts they already own** → UpSight runs signal extraction on data they *trust* (no new prospecting needed) → grid view of decisions (ready-to-buy / at-risk) → cost/support comparison surfaced ("no credits, real support, under $100") → migrate off Apollo.
- **Aha:** "I got decisions out of the conversations I already had — without renting a database that's 1-in-3 wrong." Value = trust + cost relief, *not* deeper meeting summaries.
- **⚠️ Note:** do NOT center this journey on CI depth — they churn over data/cost/support. Lead the onboarding on "works on data you own, no credits, real support."

### D — Pre-CRM / spreadsheet SMB  *(large adjacent demand pool)*  — NEW
- **Trigger:** a deal/insight lost because nothing was tracked; a growth moment where the spreadsheet stops scaling (~past 50 contacts).
- **Flow:** arrives via "Excel CRM" / "spreadsheet vs CRM" SEO or a comparison page → sign up, **skip heavy setup** → **import the spreadsheet + connect call recordings** → in ~10 minutes see the read: who's gone quiet, who's ready, what keeps coming up → set the one follow-up they were about to miss → invite a teammate → upgrade.
- **Aha:** "It told me who was about to drop off — my spreadsheet never did that." The upgrade *from* the spreadsheet, not a heavier CRM.
- **⚠️ Note:** anchored at $0 and low-urgency — every step must be near-zero-friction, and the value moment must manufacture urgency ("here's the deal you'd have lost"). Don't say "CRM" first (it's why they avoided tools); say "upgrade from your spreadsheet."

---

## Secondary journeys

### Product lead / PM
- **Trigger:** shipped a feature that flopped.
- **Flow:** upload 2–3 interviews → AI extracts themes linked to evidence → share with eng lead → prioritize backlog → create a task from an insight.
- **Aha:** "the research system I needed" — research → backlog/task. (Targeting model: ICP defines *who* → Groups carve the *this-week list* → Lenses synthesize *what was said*; see code `40-user-guides/ideal-customer-groups-lenses.md`.)

### Event strategist  *(differentiated validation play)*
- **Trigger:** building the sponsor prospectus; needs ROI differentiation.
- **Flow:** set up event → configure kiosk questions → preview a sample sponsor report → pre-sell an "Audience Intelligence" sponsorship tier → deploy **iPad kiosks (web app — works today, tested live)** (50–200 conversations) → synthesize → deliver sponsor report in 48h.
- **Aha:** sponsor uses the report internally and asks to renew. *Value = new revenue, not time saved.*
- **Why it's a real bet (not parked):** the kiosk works *now*; events are starved of **factual data on conference value and structured post-event feedback**, so in-event capture is a hard-to-copy differentiator — and it doubles as a **channel to the SMB attendees** who are our core ICPs. Validate as wedge + channel, not a mass market.

---

## Agent-distribution journeys  *(parallel motion)*

### Developer / agent builder
- **Trigger:** finds the UpSight/AgentCRM MCP server on Claude/ChatGPT/ClawHub/HN.
- **Flow (Twilio/Stripe-style flywheel):** install MCP / free-tier API key → `fetch_themes` + `semantic_search_evidence("pricing objections")` → structured JSON with confidence → upload conversations / import contacts → see evidence in dashboard → team discovers the human UI → upgrade → tells other developers.
- **Aha:** "a customer-intelligence API I can build on." Pilot win = UpSight evidence in a named startup's production agent with measurable reply-rate lift.

### Agent-mediated end user (Claude Desktop as the UI)
- **Flow:** PM asks "what should we build next?" → evidence-backed prioritization; consultant asks "key disagreements between stakeholders?"; sales asks "which deals have pricing risk?" → draft a response.
- **Aha:** "I can ask my AI assistant and get answers with proof."

---

## In-product research pipeline (canonical PM flow)
`Goal → Key Decisions → What to Learn → Questions for Users → Gather/Recruit → Synthesize Evidence → Close the Loop.` **Validation Mode** walks each participant through four gates: `pain_exists → awareness → quantified → acting`. Screen-by-screen + data flow: code repo `40-user-guides/user-flow/user-flow.md` (note: that file mixes journey content with engineering docs — only the first half is journey).

---

## Consolidation notes
- Journey labels now match the ICP letters in `README.md` (A/B/C/D). Founder variants are sub-flows under **A**; PM/event are secondary; developer/agent-mediated are the parallel motion.
- The raw source (`user-success-journeys.md`) is preserved in `../../99-archive/strategy/`; `deep-dives/persona-flow-matrix.md` holds the original persona+flow detail. This file is the canonical GTM-facing version.
