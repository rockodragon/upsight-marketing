# Competitive Analysis: Person & Company Intelligence Cards

> **Purpose**: Honest comparison of UpSight's person/company card design against Gong, HubSpot, Day.ai, Clarify, Folk, and Attio. Identifies real differentiation vs. table stakes.
> **Date**: 2026-04-03
> **Status**: Active
> **Context**: Based on wireframe designs in `_bmad-output/planning-artifacts/person-company-cards.html` and `insights-canvas-concepts.html`

---

## What Each Competitor Actually Shows

### Gong (Revenue Intelligence)

**Per-Deal:**
- Deal likelihood score (percentile, 300+ signals) with positive/negative driver list
- 8 configurable warnings: No Activity, No Prospect Activity, Deal Overdue, Too Few Contacts, No Power Sponsor, Pricing Not Mentioned, Red Flag Email, No Stage Change — each with mitigation suggestions
- Playbook progress (BANT/MEDDIC letter-states): white → AI-suggested → rep-noted → validated
- AI-generated deal briefs
- Smart Tracker columns (concept detection: "pricing reactions," "customer objections," "competitor mentions")

**Per-Person:**
- "Ask Anything" — natural language Q&A against 80 emails + 10 calls with that person
- CRM fields, activity timeline, flow history
- Quick actions (send email, make call)
- NOT a stakeholder map — data-driven (counts, activity bars) not visual

**Per-Account:**
- Contact tab showing buyer-side and seller-side contacts with 21-day activity bars
- Recommended contacts (AI suggests who else to engage)
- Multi-threading warnings (too few contacts, no executive sponsor)
- NO visual org chart or stakeholder map

**Action Layer:**
- AI Tasker: daily prioritized to-do list (emails, calls, LinkedIn messages, tasks)
- Prioritized by deal impact
- Picks up action items mentioned on calls

### HubSpot (CRM + Conversation Intelligence)

**Per-Contact:**
- Three-column layout: properties sidebar, activity timeline, associations sidebar
- Breeze Copilot (on-demand AI chat): summarize interactions, suggest follow-ups, draft messages — pull-based, NOT persistent on the card
- Breeze Intelligence (Clearbit): firmographic enrichment (40+ attributes), buyer intent from website visits — does NOT interpret conversation content
- NO driver/motivation analysis, NO evidence quotes, NO insight clusters

**Per-Company:**
- Same three-column layout
- Account overview card: target account flag, contact count, buyer roles, last engagement
- Buyer Committee tab lists contacts with buying roles
- NO native org chart (requires third-party tools)

**Per-Deal:**
- Deal score (0-100% AI probability)
- Deal Insights: AI narrative with risk flags (score decrease, uncertainty, no follow-up, stalled)
- Guided Actions: AI recommendations for next steps
- Preset views: Open Deals, Stalled Deals

**Conversation Intelligence:**
- Keyword tracking (tracked terms), talk/listen ratios, coaching playlists
- Does NOT extract structured evidence, generate themes, or build empathy maps
- Coaching tool, not research synthesis

### Day.ai (AI-Native CRM)

**Per-Person:**
- AI-generated relationship summary with classification (champion, skeptic, economic buyer) and reasoning
- Connected web: deals, meetings, organizations — all auto-linked
- Custom fields auto-populated from conversations and web research
- Full interaction timeline (emails, meetings, transcripts, Slack Connect)
- Knowledge base "Pages" tied to person/account

**Per-Company:**
- Stakeholder map: roles/attitudes inferred from conversations
- Deal connections and pipeline status
- Meeting history and summaries across all participants

**Actions:**
- Post-meeting: auto-generates follow-up emails with agreed milestones
- AI scans pipeline, spots slipping deals, drafts next steps
- Conversational querying (natural language questions about pipeline)

**Differentiators:** Zero manual entry, conversation-first, AI web agents for enrichment
**Weaknesses:** ~70% accuracy on unstructured data, limited integrations, best for solo/small teams

### Clarify (Autonomous CRM)

- Auto-enrichment on contact creation (title, company, LinkedIn, funding history)
- AI-generated deal summaries per contact
- Meeting recording with auto field population from transcripts
- Event-driven automation (CEO email → deal update + team alert + follow-up suggestion)
- Duplicate detection with side-by-side merge
- More autonomous than Day.ai — aims to update fields and manage pipeline without user intervention

### Attio (Flexible Object CRM)

- Fully customizable object-based data model
- Relationship strength calculated from interaction frequency/recency (objective metric)
- AI agents with full read/write CRM access for multi-step tasks
- Auto-derive deal value from call transcripts
- Strongest developer/API story

### Folk (Relationship CRM)

- Recap Assistant: AI relationship summary in MEDDIC/BANT format
- Follow-up Assistant: detects inactive conversations, generates personalized re-engagement
- Multi-channel native: LinkedIn, Gmail, WhatsApp, Instagram
- More networking-oriented than pipeline-oriented

---

## Where UpSight Wins (Defensible)

| Capability | Why It's Unique |
|---|---|
| **BANT gaps → auto-suggested tasks** | Nobody else identifies structural qualification gaps and auto-generates the specific action to fill them. Gong shows warning counts. We show the gap AND the fix AND create the task. |
| **Multi-source evidence synthesis** | Gong = calls only. HubSpot = activity only. Day.ai = calls + emails. We synthesize surveys + calls + transcripts + notes into one person view. Survey data in particular is unique. |
| **Company card gap detection** | "You haven't talked to the budget holder" with a `+ Create task` button. Doesn't exist elsewhere. Gong has multi-threading warnings but doesn't name the missing role or suggest the action. |
| **Evidence with attribution persistent on cards** | Key quotes always visible, not on-demand. Different design philosophy (push vs. pull). Gong's "Ask Anything" is powerful but requires the user to ask. |
| **Conversation lenses as configurable analysis frameworks** | More structured than Gong's Smart Trackers. Lenses produce sections, entities, recommendations — not just keyword detection. |

## Where UpSight Loses (Catch-Up Needed)

| Capability | Who Does It Better | Gap |
|---|---|---|
| **Deal probability score** | Gong (percentile from 300+ signals with driver list) | We have ICP (fit) but not deal likelihood (probability to close). Different metric. |
| **Daily prioritized action queue** | Gong AI Tasker (auto-generated, prioritized by deal impact) | Our Priorities tab is conceptual. Need auto-generated daily queue. |
| **Configurable warning system** | Gong (8 warning types with thresholds and mitigations) | We have recency signals but not structured warnings. |
| **Auto data capture** | Day.ai, Clarify (zero manual entry, meeting bot, email sync) | We require manual upload. Calendar integration is P0 gap. |
| **Per-person queryable history** | Gong "Ask Anything" (NL queries against 80 emails + 10 calls) | Our assistant is contextual but not scoped to full person history as a queryable index. |
| **Relationship strength metric** | Attio (computed from interaction patterns) | We have "last touched" but no computed strength score. |
| **Web enrichment agents** | Day.ai (AI agents research contacts proactively) | We don't auto-enrich from web. |

## Where We're Equal (Table Stakes)

- AI-generated summaries (everyone does this)
- Stakeholder role classification (Gong, Day.ai, us — all roughly equivalent)
- Post-meeting follow-up drafts (Day.ai, Clarify, us in wireframe)
- CRM field management (not interesting)

## Claims to Stop Making

| Claim | Why |
|---|---|
| "Receipts" as a differentiator | Evidence traceability is table stakes for trust. Useful but not a selling point. |
| "Cross-person intelligence" as unique | Gong Smart Trackers already detect concepts across all conversations globally. Our difference is cross-SOURCE-TYPE, not cross-person. |
| Stakeholder mapping as novel | Day.ai already does champion/blocker/buyer classification from conversations. Our gap detection layer is unique; the baseline mapping is not. |

---

## Strategic Implications

### Build Priority (what to ship first)

1. **Suggested task system** — `suggested` status in task schema, BANT gaps auto-generate tasks, persist until dismissed
2. **Person cards with BANT-driven structure** — Score/Stance → Status → Driver → Context (linked to opportunity) → Next steps with gap tags
3. **Company cards with stakeholder gap detection** — Stakeholder map + BANT gaps + linked tasks
4. **Insights canvas Concept A (Diagnosis)** — Revenue-framed narrative, findings ranked by pipeline impact

### Catch-Up Priority (close the gaps)

1. **Calendar integration** (P0) — auto-detect upcoming calls, trigger pre-call briefing
2. **Deal likelihood score** — distinct from ICP, based on conversation signals + activity
3. **Configurable warning thresholds** — inspired by Gong's 8 types
4. **Per-person "Ask Anything"** — scope the assistant to one person's full history

### Positioning Implication

Don't compete on "AI CRM" (Day.ai, Clarify own that phrase). Don't compete on "revenue intelligence" (Gong owns that). Compete on: **the tool that turns every customer touchpoint into qualified intelligence with the actions to do something about it.** The gap → task pipeline is the thing nobody else does.

---

*This analysis is based on publicly available product documentation, help center articles, and product pages as of April 2026. Competitor UIs may have changed since research was conducted.*
