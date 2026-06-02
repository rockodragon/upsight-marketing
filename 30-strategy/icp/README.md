---
title: UpSight Candidate ICPs — Target Markets, Sizing, Competitive Chances & Wedge
date: 2026-06-01
status: canonical synthesis (supersedes scattered persona docs)
owner: rick
tags: [icp, market-sizing, positioning, gtm]
---

# Candidate ICPs — the one place

> **What this is:** the single consolidated view of who we target, how big each market is, what it's worth, how many people are in it, our competitive chances, and the wedge/argument for going after it. Deep-dives live in `deep-dives/`. Battle cards: `../../40-gtm/assets/collateral/battle-cards.md`. Outreach: `../../40-gtm/channels/outreach/`. Messaging: `messaging-by-icp.md` (sibling).
>
> **Number convention:** `[S]` = sourced (URL in `deep-dives/` / market-sizing). `[E]` = estimate (directional, assumes ~$1,000 blended ACV). Confidence noted where it matters.

---

## TL;DR — the current bet

We are a **conversation-intelligence + lightweight CRM** for small revenue teams, priced **under $100/seat**, that works **out of the box on conversation/survey data you already have** and outputs **decisions ("who's ready to buy / who's about to churn"), not dashboards.**

The positioning frame (from the 2026-06-01 hypothesis): **"Between sheets and silos."** There's a real, underserved segment stuck between spreadsheets (don't scale, no memory) and expensive siloed tools (Apollo, HubSpot, Gong — overkill, admin-heavy, $15K–40K).

**The bet, in priority order:**
1. **Beachhead → Founder-led B2B sellers** (solo/founding team, $100K–$2M ARR, doing their own discovery/demos/follow-up). Rick *is* this ICP; Cytodyme is a live proof case. Best reachability, lowest CAC, no incumbent built for them.
2. **Large adjacent demand → Pre-CRM / spreadsheet SMBs.** The biggest defensible dollar market; greenfield (nothing to rip out).
3. **Acquisition wedge → Apollo refugees.** High-intent, highly reachable — but a *channel into* #1/#2, not a standalone market.
4. **Expansion/upsell → Boutique agencies & consultancies.** The natural "team" upgrade from #1.

Plus a **parallel, more ambitious motion** (the agent-distribution play — see below), a **differentiated event-capture play** we're actively validating (the iPad kiosk works today), and **parked** segments (UXR, donor-CRM) we're deliberately *not* leading with.

---

## The market map

### Primary motion — human GTM (lead here)

| # | Candidate ICP | Who | Core JTBD | Buying trigger | Today's tool |
|---|---|---|---|---|---|
| **A** | **Founder-led B2B seller** *(beachhead)* | Solo/founding team, $100K–$2M ARR, sells B2B services/software | "Stop losing deals I should win because I can't remember who said what" | Lost a winnable deal; pile of un-mined calls | Spreadsheet + notes + Zoom |
| **B** | **Boutique agency / consultancy** *(expansion)* | 2–10 person services firm (design, mktg, strategy, dev) | "Find repeat buyers & expansion accounts; stop letting warm relationships go cold" | New client project; warm lead went cold | Spreadsheet + PM tool, maybe a CRM |
| **D** | **Pre-CRM / spreadsheet SMB** *(large adjacent pool)* | SMB/solo running pipeline & relationships in sheets | "Remember what was said; stop things falling through cracks — without a heavy tool" | Growth moment; a deal/insight lost | Spreadsheet (chosen *because* CRMs feel heavy) |
| **C** | **Apollo refugee** *(acquisition wedge, not a TAM)* | Small team/founder on Apollo, frustrated | "My data's untrustworthy and my bill's creeping — get me out" | Deliverability disaster, price hike, support failure, renewal in 60 days | Apollo.io |

### Secondary motion — agent distribution (parallel, more ambitious)

A distinct funnel that lands in the *same* UpSight subscription: ship UpSight as the **conversation-evidence layer that AI agents reason over** (API + MCP + reference architecture), distributed via Claude/ChatGPT/ClawHub/HN and agent frameworks.

| ICP | Who | Wedge | Status |
|---|---|---|---|
| **Vertical AI-agent startups** | Seed–Series B AI-native cos (11x, Artisan, Qualified-type) shipping sales/CS agents | "We're the memory you ship with" — personalization grounded in real customer voice, not firmographics | Hypothesis; named targets, no closed customer. Talk to 5–10 founders. |
| **In-house enterprise agent teams** | Series C+ internal copilot teams (Notion/Ramp/Vanta-type) | Evidence layer so the copilot stops hallucinating on "what did customers say?" | Deferred to ~Q1 2027 (blocked: no SOC 2 / references) |
| **AI consultancies / dev shops** | Boutiques shipping agents for clients | Resellable memory layer + partner rev-share; 1 shop = 2–10 indirect customers | Channel, not a direct buyer — don't over-invest |
| **Agent frameworks (Mastra, LangGraph, CrewAI…)** | Infra ecosystems | One reference integration each → distribution | Channel multiplier, not a buyer |

> See `deep-dives/agent-builder-icp-deep-dive.md` and `../agentcrm-consolidated-strategy.md`. **Tension to resolve:** the human motion prices per-seat ($29/$79/$199); the agent motion prices per-query ($0.005). Same product, two pricing philosophies — pick deliberately per funnel.

### Differentiated play we're validating — in-event capture

| ICP | Why it's worth a real test (not parked) |
|---|---|
| **Event strategists / event-led SMBs** | The **iPad kiosk works today** (web app, tested live) — this is *not* an unbuilt feature. Events are starved of **factual data on conference value and structured post-event feedback**; in-event capture is a genuine differentiator no competitor offers, and "in-event action" is a hard-to-copy moment. Bonus: it's also a **channel to the SMB attendees** who are our core ICPs. The buyer-category TAM is niche (~156K US planners), so validate it as a **wedge + channel + differentiator**, not a mass market — but it's an active bet, not a kill-switch. |

### Parked (do NOT lead with)

| ICP | Why parked |
|---|---|
| **UX researchers / product-discovery teams** | UpSight's origin space, real $1.2B/11.6% market, very reachable — **but the buyer is contracting** (2025 layoffs, sub-1,000 postings, AI democratization) and the category is crowded (Dovetail, Condens, Marvin). Keep as a warm **reference/credibility beachhead**, not the growth bet. |
| **Donor / fundraising orgs (as a CRM)** | Small ($847M), slowest-growing (3.67% CAGR), densely incumbent-served (Blackbaud/Bloomerang). Parked *as a CRM* — needs a product fork. **But note:** many nonprofits are themselves **spreadsheet users** (segment D) running donor/volunteer relationships in sheets — serviceable with the product we already have, and a plausible **viral word-of-mouth** play (mission-driven orgs refer each other freely). Less revenue-attractive per seat, but cheap WOM upside — fold into D, don't build a nonprofit product. |

---

## How big? How valuable? How many people? (sizing)

All TAM/SAM/SOM dollars are **directional estimates** at ~$1,000 blended ACV; population/market-value figures are sourced where labeled `[S]`. Full sources in the market-sizing research (`deep-dives/` + agent report).

| Segment | People / orgs | Market value (proxy) | SAM (est.) | 3-yr SOM (est.) | Reach |
|---|---|---|---|---|---|
| **A. Founder-led B2B sellers** | US Prof/Tech nonemployers **4.0M** `[S]`; on-thesis core **~200K–500K** global `[E]` | overlaps SMB CRM + sales-engagement | ~200–500K | ~3,500 cust ≈ **$3.5M ARR** | **HIGH** — IndieHackers, MicroConf, build-in-public, YC, AI Discords |
| **D. Pre-CRM / spreadsheet SMBs** | ~26% of small biz have **no CRM** `[S]`; ~400K–550K US B2B firms pre-CRM `[E]` | **SMB CRM $10.85B (2025), 8.5–16% CAGR** `[S]` — biggest $ market here | ~150–300K | ~2,000 cust ≈ **$2M ARR** | **MED** — no firmographic filter; win via "Excel CRM" / comparison SEO |
| **C. Apollo refugees** | Apollo **500K+ registered cos** `[S]`, **50K WAU** `[S]`; poachable SMB slice **~20–35K** `[E]` | (channel, not a market) | ~25K active | ~1,000 cust ≈ **$1M ARR** | **HIGH** as a channel — "Apollo alternatives" SEO, G2, r/sales |
| **B. Boutique agencies/consultancies** | US small agencies + consulting firms 2–10 ppl **~150K–300K** `[E]` (from 50K+ agencies `[S]`, 1.1M consulting biz `[S]`) | US marketing-agency mkt **$182.5B** `[S]` (proxy) | ~100–200K | ~2,250 cust ≈ **$3.4M ARR** | **MED-HIGH** — Clutch, DesignRush, LinkedIn, agency masterminds |
| **UXR / discovery (parked)** | small specialist headcount, **shrinking** `[S]` | research-repo mkt **$1.23B, 11.6% CAGR** `[S]` | ~30–60K teams | ~675 cust ≈ **$1M ARR** | MED-HIGH but contracting |
| **Event strategists (validation play)** | **~156K** US planners `[S]`; ~400–700K global `[E]` | event-mktg software **$792M, 14% CAGR** `[S]` | ~30–60K | ~675 cust ≈ **$0.8M ARR** | MED — niche buyer-category, but a differentiator + channel to SMB attendees (kiosk works today) |
| **Donors/nonprofits (parked as CRM)** | 1.5M US nonprofits `[S]`; **~68K** software-active `[S]` | nonprofit CRM **$847M, 3.67% CAGR** `[S]` | ~40–80K | ~600 cust ≈ **$0.7M ARR** | MED — off-thesis as a CRM; nonprofits-on-sheets fold into D |

**Read of the table:** the *biggest dollar market* is pre-CRM SMBs (D), but it's fuzzy to target. The *easiest to reach with the lowest CAC* is founder-led sellers (A). Apollo refugees (C) are the *highest-intent doorway* but overlap A/D — don't double-count. Agencies (B) are the *highest-ACV* of the SMB set and the natural expansion path. That's why the bet is **A as beachhead, D as the demand pool, C as the wedge, B as expansion.** A notable slice of D are **nonprofits** running relationships on spreadsheets — low per-seat value, but a cheap **viral word-of-mouth** angle (see *Parked → donors*).

---

## Competitive chances + best wedge (summary)

Full versions in **`../../40-gtm/assets/collateral/battle-cards.md`**.

| Rival | Their strength | Our wedge (one line) | Can we win? |
|---|---|---|---|
| **Apollo** | Prospecting-data moat, scale ($150M ARR, 500K cos), cheap all-in-one | "Apollo finds the task and makes *you* do it. UpSight turns the conversation into the decision + next action — on data you already own and trust." | Win on **cost/trust/support**, not depth. Modest. |
| **Gong / Chorus** | Best-in-class sales CI, enterprise cred, $300M+ ARR | "Same conversation intelligence in an afternoon, under $100/seat, no admin — not a $100K rollout with a training program." | Win **down-market** on price/setup; lose enterprise. |
| **HubSpot / Salesforce** | Ecosystem, brand, full platform | "Your CRM is a database you feed. UpSight tells you who's ready to buy and who's about to churn — no admin, no implementation project." | Win on **setup friction & decisions-out-of-box.** |
| **Dovetail** | Research-repo leader, $700M val, enterprise-ready | "Dovetail makes you a librarian. UpSight makes you a decision — no folder spelunking, transparent pricing." | Win on **simplicity + price** for non-researchers. |
| **Attio** | AI-native CRM, flexible model, momentum | "Attio bundles good-enough call AI into a CRM. UpSight delivers research-grade evidence + cross-conversation decisions a CRM add-on can't reach." | Win on **CI depth / evidence traceability.** |
| **Nutshell** | Real CRM, native recording, SMB price | "Nutshell summarizes each meeting. UpSight connects the dots across *every* conversation and tells you what to do next." | Win on **cross-conversation synthesis.** |
| **Spreadsheets** | Free, zero-friction, no lock-in | "Your sheet remembers what was said. It doesn't tell you who's about to buy or churn. UpSight does — one tool, no setup." | Win past ~50 contacts; **inertia is the fight.** |

**Where we're outgunned (be honest):** Apollo head-on for its core ICP (data moat); **enterprise across the board** (no SSO/SOC 2/audit logs/integrations/brand — see `market-intel/Competitors/our-honest-assessment.md`); integration-led "CRM with notes" buyers (Nutshell/Attio win on CRM fundamentals). Velocity threats flagged in our own notes: **VoicePanel** (YC, shipped AI interviewer) and **Dovetail** (190 ppl) — a build-speed risk.

---

## The argument for going after the top markets

- **A (founder-led sellers):** lowest CAC + the founder *is* the buyer (no procurement) + a live proof case (Cytodyme) + Rick's own networks (StartupSD, Focus26, NCCC). The wedge is the buying reason. **This is where we get to revenue fastest.**
- **D (pre-CRM SMBs):** the only segment with a large, sourced, fast-growing dollar market ($10.85B, 8.5–16% CAGR) and **greenfield demand** — no incumbent to displace, just inertia. Wins compound via word-of-mouth.
- **C (Apollo refugees):** a ready-made, high-intent **acquisition channel** ("Apollo alternatives" has real search volume) that feeds A and D — cheap to light up with comparison pages + switch campaigns.
- **B (agencies):** highest ACV (3–5 seats), buildable target lists (Clutch/LinkedIn), and the natural **expansion** once A loves the product.

---

## Ranked recommendation & what we are NOT doing

**Concentrate GTM on:** **A (beachhead)** → fed by **C (Apollo-refugee wedge)** → into the large **D (pre-CRM)** demand pool → expanding to **B (agencies)**. Run the **agent-distribution motion in parallel** as the higher-ceiling bet (start: 5–10 founder convos). Keep **UXR** as a warm reference base.

**We are explicitly NOT:** chasing enterprise; building a donor CRM; out-Gonging Gong or out-dataing Apollo. (Events are a *validation play with a working kiosk*, not the beachhead — see above.) Parked segments get a kill-switch test at most, not a campaign.

---

## Open questions (→ `../../00-control/open-questions.md`)
- Pricing: does $79/seat (consultants) + $99 flat (teams) hold, or does A need a lower entry? Per-seat vs. per-query for the agent motion?
- Onboarding friction: how fast from "uploaded 50 conversations" → "saw something I didn't know"? (Possible paid onboarding.)
- Defensibility once Gong/Apollo ship a cheaper SMB tier? Working answer: compounding memory layer.

## Sources & deep-dives
- **Current thesis:** `icp-hypothesis-2026-06-01-between-sheets-and-silos.md`
- **Deep-dives:** `deep-dives/agent-builder-icp-deep-dive.md`, `deep-dives/event-strategist-persona.md`, `deep-dives/persona-flow-matrix.md`, `deep-dives/donor-fundraising-crm-market.md`
- **Consulting ICP:** `../positioning-consulting/persona-market-assessment-and-positioning.md`
- **Research-side ICP:** `../../20-research/voice-of-customer/icp.md`
- **Competitive intel:** `../../20-research/market-intel/Competitors/` (incl. Apollo teardown)
- **User flows:** `user-journeys.md`
