# Day.AI

**URL:** day.ai
**Category:** AI-Native CRM / Relationship Intelligence
**Threat Level:** High (convergence risk — closest competitor to what we're building; see 2026-06-02 reassessment)
**Last Updated:** 2026-06-02

## Overview

Day.AI is an AI-native CRM platform built by former HubSpot executives that automatically captures and structures customer conversations from emails, calls, and meetings into a living system of record. It combines a meeting assistant, pipeline management, and a team knowledge base into a single product they call "CRMx" -- a CRM designed for AI agents to navigate rather than humans to manually maintain. The company launched publicly in February 2026 after over a year of private beta with ~120 customers.

## Positioning

Day.AI brands itself as "the Cursor of CRM" and "the first CRMx platform," where "x" stands for context. CEO Christopher O'Donnell (former HubSpot CPO) frames legacy CRMs as databases designed for humans to fill in, while CRMx is a context graph designed for AI agents to reason over. They emphasize zero manual data entry, 15-minute onboarding, and "just talk to your CRM."

## Pricing  *(corrected 2026-06-02 from day.ai/pricing)*

"Ergonomic pricing" — charges per **AI Assistant**, not per human seat. Free core CRM; each paid tier "unlocks more powerful models, tools, and capabilities" as needs grow. **Four tiers — 0 / 30 / 75 / 250:**

| Tier | Price (/assistant/mo) | What it adds |
|------|------|------|
| **Free** | **$0** | Core CRM: automatic meeting/email/contact capture, records, assistant preview on the Today page |
| **(entry assistant)** | **$30** | A working assistant — natural-language queries, automations (notifications, scheduled reports), drafts |
| **(base assistant)** | **$75** | More powerful models + tools; deeper research delegation & automation |
| **(max assistant)** | **$250** | Top-tier models; most autonomous / long-running agent tasks |

- ~20% annual discount; volume discounts available. Framed as a bridge to **outcome-based** pricing over time.
- ⚠️ Exact tier *names* and the per-tier feature-checkmark matrix are JS-rendered on day.ai/pricing and weren't scrapable — the **prices (0/30/75/250) are confirmed**; paste the live matrix to complete this table.
- **Correction:** earlier notes (and `30-strategy/pricing-strategy.md`) listed Day.ai at "~$10/user/mo" — that was wrong.

## Key Features

- **Automatic data capture:** Ingests email, calendar, Zoom/Meet/Teams calls, Slack -- structures into contacts, companies, deals, notes, action items without manual entry
- **Context graph:** AI-readable index of all customer data with source attribution and reasoning chains
- **Meeting assistant:** Auto-joins calls, generates prep docs, transcribes, summarizes, extracts action items, creates shareable clips
- **Conversational querying:** Natural-language questions across full customer history with cited answers
- **Relationship intelligence:** Maps stakeholders, identifies champions and blockers, suggests next steps
- **Auto-generated follow-ups:** Drafts emails, action plans, and business cases from meeting content
- **Proactive reminders:** Tracks commitments made in conversations, prompts on follow-up timing
- **Knowledge base ("Pages"):** Auto-generated, searchable, shareable team knowledge pages from conversation data
- **Pipeline management:** AI-driven deal monitoring with risk alerts and recommendations
- **Agentic actions:** Long-running agents that draft emails, schedule follow-ups, update pipelines

## Target Customers

- **Primary:** Solo entrepreneurs, founders, and small sales teams who haven't locked into a legacy CRM
- **Secondary:** Startups and scaling companies (many from Sequoia portfolio)
- **Use case:** Call-heavy B2B revenue teams running relationship-driven sales
- **Expansion play:** Complementary layer alongside existing CRMs for mid-market companies

Deliberately starts at bottom of market, plans to move upmarket over time.

## Funding & Team

| Round | Amount | Date | Lead |
|-------|--------|------|------|
| Series A | $20M | Feb 2026 | Sequoia Capital |
| Seed | $4M | Jun 2024 | Sequoia Capital, Pillar VC |
| **Total raised** | **$24M** | | |

- **Founders:** Christopher O'Donnell (CEO, ex-HubSpot CPO), Michael Pici (ex-HubSpot sales/product)
- **Team size:** 2-10 employees (very lean)
- **Board:** Pat Grady (Sequoia partner)
- **Built on:** Anthropic Claude 3.5 Sonnet

## UpSight vs Day.AI

### Where they overlap

- Both capture customer conversations and use AI to extract structured intelligence automatically
- Both aim to eliminate manual data entry and note-taking
- Both provide searchable, queryable knowledge from conversation history
- Both target small teams and founders as initial users
- Both offer meeting recording/transcription with AI summaries
- Both provide attribution/sourcing for AI-generated claims

### Where UpSight wins

- **Evidence-first methodology:** UpSight's core primitive is the "receipt" -- verified, timestamped, attributed evidence. Day.AI structures data for pipeline management; UpSight for provable claims and research rigor
- **Research and discovery focus:** Purpose-built for customer discovery, user research, insight synthesis. Day.AI is built for sales pipeline management
- **Conversation lenses:** Structured analytical frameworks (Customer Discovery, BANT, User Testing, etc.) with repeatable methodology. Day.AI has no equivalent
- **Themes and insight clustering:** Cross-conversation patterns queryable, shareable, actionable. Day.AI organizes around accounts and deals, not research patterns
- **Personas and segmentation:** UpSight builds personas from evidence. Day.AI has no persona concept
- **Multi-channel evidence:** Transcript upload (PDF/TXT), audio, survey responses alongside live conversations. Day.AI is primarily live call/email capture
- **Survey integration:** Ask links collect structured feedback in the same evidence system. Day.AI has no survey capability

### Where Day.AI wins

- **CRM pipeline management:** Full deal tracking, visualization, risk monitoring, forecasting
- **Email integration:** Deep Gmail/Outlook integration capturing and analyzing email threads
- **Automated follow-up actions:** Drafts and sends follow-up emails, schedules next steps, automates CRM hygiene
- **Agentic workflow execution:** Long-running agents that autonomously manage pipeline tasks
- **Broader data ingestion:** Pulls from email, Slack, calendar automatically in addition to calls
- **Sequoia backing:** $24M from Sequoia + former HubSpot CPO gives credibility and distribution

### Key risk

Day.AI is not a direct competitor today -- they build CRM for sales teams, UpSight builds intelligence for research-oriented teams. The risk is **convergence from the CRM side.** As Day.AI's context graph matures and they add analytical features (theme detection, cross-conversation patterns), they could subsume parts of UpSight's value prop as a "free" byproduct. The 120 early customers and Sequoia network give them distribution UpSight lacks. However, Day.AI's DNA is sales automation, not research methodology. As long as UpSight stays focused on evidence rigor, research frameworks, and PM/consultant/founder-researcher personas, overlap remains limited.

## Recent Activity (2025-2026)

- **Jun 2024:** $4M seed from Sequoia + Pillar VC
- **2024-2025:** Private beta with ~120 customers from Sequoia portfolio
- **Feb 2026:** $20M Series A led by Sequoia; public launch of "CRMx" platform
- **Feb 2026:** "Ergonomic pricing" model ($75/user/month per AI Assistant)
- **Mar 2026:** "Context graph" concept announced -- AI-readable index with reasoning chains and source attribution
- **Roadmap:** Building toward "the Waymo of CRM" -- fully autonomous customer lifecycle management

## 2026-06-02 Reassessment — feature convergence (threat raised to High)

Day.ai is now the **closest competitor to what we're building.** Its "AI Assistants" are framed as *digital teammates* that, beyond CRM hygiene, now do: natural-language querying across customer history, **scheduled reports**, automated drafts/notifications, **research delegation** (funding research, prospect summaries, conversation analysis), on-the-fly **custom views & data tables**, and full-pipeline scanning that spots slipping deals and drafts the next step. That is a large overlap with our evidence/synthesis surface — delivered with Sequoia distribution, an ex-HubSpot CPO, and a $0 entry tier.

**Feature overlap vs. what UpSight is building:**

| Capability | Day.ai | UpSight |
|---|---|---|
| Auto-capture conversations (call/email/calendar) | ✅ broad, automatic | ⚠️ upload + recording; calendar = P0 gap |
| Natural-language query w/ cited answers | ✅ | ✅ (evidence "receipts") |
| Cross-conversation themes / research synthesis | ⚠️ emerging (deal-centric) | ✅ core (lenses, themes, personas) |
| Surveys as evidence | ❌ | ✅ unique |
| Structured research frameworks (BANT, JTBD, discovery) | ❌ | ✅ unique |
| Pipeline mgmt / deal tracking / agentic follow-ups | ✅ strong | ⚠️ partial |
| Per-tier pricing | $0 / $30 / $75 / $250 (per assistant) | TBD (target <$100/seat) |

**The convergence risk (why threat = High):** Day.ai attacks from the *CRM/sales-automation* side and is adding analytical/research features as a near-free byproduct of its context graph. If they ship cross-conversation themes + multi-source evidence, they subsume much of our value with better distribution. **Our durable wedge stays:** (1) **surveys + transcripts + calls in one evidence model** (they're call/email-centric, no surveys); (2) **research-grade frameworks/lenses** (they have none); (3) **evidence-first "receipts" for provable decisions** vs. their deal-automation DNA; (4) **non-sales personas** (PM/consultant/researcher) Day.ai doesn't serve. Lead there; do NOT fight them on CRM/pipeline automation.
