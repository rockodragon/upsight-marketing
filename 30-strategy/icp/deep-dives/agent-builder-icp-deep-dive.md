# Agent-Builder ICP — Deep Dive

> **Status**: Draft v1 | **Last updated**: 2026-05-25
> **Parent doc**: [agentcrm-consolidated-strategy.md](agentcrm-consolidated-strategy.md) §2 (Agent Builder Segment)
> **Purpose**: Decompose "agent builder" into actual buyable segments, map JTBD/buyer/channel for each, and turn the $120M→$1.2B TAM into a concrete GTM sequence.

---

## 0. TL;DR

"Agent builder" as written in the consolidated strategy collapses **four very different ICPs** into one bucket. Each has a different buyer, budget cycle, pain, and motion. The right move is:

1. **Pick ONE primary** for the next 90 days — **Vertical AI Agent Startups** (Series A SaaS shipping their own SDR/CSM/analyst agent). Highest pain, fastest decision, best-fit demo.
2. **Treat in-house enterprise agent teams as a follower segment** — bigger ACV but 6–9 month sales cycles, wrong motion for now.
3. **Use framework / infra plays (Mastra, LangGraph, CrewAI ecosystem) as a distribution channel**, not an ICP.
4. **Defer agent platforms themselves** (OpenAI, Anthropic, Google) — they're partners or threats, not customers.

The wedge into all four is the same: **"Your agent is hallucinating about customers because it has no verifiable memory of what they actually said."** What changes is who's feeling it, how loudly, and what they'll pay.

---

## 1. The four segments hiding inside "agent builder"

| # | Segment | Who they are | Stage | Headcount | What they're building | Why they need us |
|---|---------|--------------|-------|-----------|----------------------|------------------|
| **A** | **Vertical AI Agent Startups** | 11x, Artisan, Conversica, Regie, Qualified, Warmly, AISDR, Salesforge, Clay-adjacent agents | Seed–Series B | 5–80 | Outbound/inbound sales agents, AI CSMs, research agents | They sell "personalization" but have zero customer-voice data. Their LLM hallucinates "I see you're focused on X" with no evidence |
| **B** | **In-house enterprise agent teams** | The "agent platform team" inside any Series C+ SaaS (Notion, Linear, Ramp, Brex, Rippling, Vanta) | Series C–pre-IPO | 200–5K | Internal copilots, deal-room briefers, support agents, analyst bots | Their copilot needs to answer "what did our customers say about feature X?" and the head of product can't get a straight answer |
| **C** | **AI consultancies & dev shops** | Boutiques shipping agents for clients (Galileo, Vellum customers, agency.ai, Together AI Studio shops) | bootstrapped → $10M ARR | 5–50 | Custom agents for enterprise clients | Need a "customer intelligence layer" they can resell with the agent; building it themselves is unbillable |
| **D** | **Framework / infra ecosystems** | Mastra, LangGraph, CrewAI, Vercel AI SDK, OpenAI Agents SDK, Google ADK | Backed (Mastra $13M seed, 300K weekly npm), open source | — | The frameworks others build on | Not customers — **channels**. Their users need data, and they need example integrations |

Each segment is real money. They are *not* the same sale.

---

## 2. Segment A — Vertical AI Agent Startups (PRIMARY)

### Why this is the right primary ICP

- **Loudest pain**: Their core value prop ("personalization at scale") is publicly visible as broken. Reply rates dropping, "AI-personalized" outreach getting flagged as spam, sender domains burning.
- **Fastest decision**: Founder/CTO sale, 2–6 weeks.
- **Best demo fit**: The 60-second Claude Desktop demo from the consolidated strategy works verbatim — just swap "your sales team" for "your AI SDR."
- **Smallest competitive surface**: Clay/Apollo/Common Room own intent + firmographics; Gong owns calls but won't license to startups; nobody owns the conversation evidence layer.

### Sub-segments (named companies)

| Sub-segment | Examples | What they sell | Their gap |
|---|---|---|---|
| AI SDR/outbound | **11x (Alice)**, **Artisan (Ava)**, **Salesforge (Agent Frank)**, AiSDR, Regie.ai | Autonomous prospecting + multi-touch sequences | Personalization is firmographic only ("I see you raised Series A") — no quote, no claim, no proof |
| AI inbound/conversational | **Qualified Piper**, **Conversica**, **Drift**, Intercom Fin | Two-way chat/email qualification | Can re-engage cold contacts but can't reference *what other customers said*, so every conversation starts from zero |
| AI website intent | **Warmly**, Common Room, RB2B | De-anonymize visitors, surface intent | Knows *who* — has nothing on *what they want or said* |
| AI CSM / post-sales | Galaxe, Catalyst-adjacent, Vitally + agents | Account health, expansion plays | Health scores from product usage; zero from actual customer language |
| AI analyst / research agent | **Hebbia**, Glean for sales, Notebook-like internal tools | Pull insights from corpora | Corpus is documents; missing the conversation evidence |

### Their job-to-be-done (in their own words, paraphrased from blog posts / product pages)

> "We've built the mouth. We can talk to anyone at any volume. But the messages are generic because we don't actually know what these accounts say. We're losing to humans who remember the call from last month."

UpSight's pitch lands cleanly: **"We're the memory you ship with."**

### What they buy

Not seats. Not dashboards. **API + MCP + reference architecture**. They want:

1. A drop-in endpoint that returns evidence given a person/account/topic.
2. Documented response shapes that map to their agent's tool schema (zero token waste).
3. Webhooks when new evidence arrives so their agent can react.
4. A reseller/co-marketing path so they can claim "evidence-backed personalization" in *their* marketing.

The product they need is mostly already shipped — see consolidated strategy §9 (Phase 1 + Phase 2 tools live).

### Buyer / champion / signer

| Role | Title | What they care about |
|---|---|---|
| **Champion** | Founding engineer / "head of AI" / "agent lead" | Demo quality, MCP cleanliness, response latency, doc clarity |
| **Economic buyer** | CTO or CEO (these companies are still small) | Story this unlocks for *their* customers; not infra cost |
| **Blocker** | Head of product / GTM | "We can build this in a sprint" — must be disarmed with the evidence-graph depth argument |
| **Signer** | CEO (usual at this stage) | Logo deals, partnership press |

### Where they live (channels)

| Channel | Density | How to show up |
|---|---|---|
| **YC / a16z portfolio Slacks** | Very high — most named cos are YC W23–W25 | Warm intros via founder network |
| **MCP Discord, modelcontextprotocol/awesome-mcp-servers** | High signal | Open PRs adding their use case; be the example integration |
| **r/ClaudeAI, r/LocalLLaMA** | Medium | "How I added customer evidence to my AI SDR agent" tutorials |
| **Twitter/X (AI-agent corner)** | Highest founder presence | Reply to 11x/Artisan founders' posts with concrete demos |
| **Latent Space, AI Engineer Summit** | Concentrated builder audience | Sponsor or speak; agent track at AIE 2026 |
| **HN Show posts** | Spikes well | "Show HN: Customer intelligence MCP server for AI sales agents" |
| **GitHub** | Where the evaluation actually happens | npm/GitHub stars are the real sales pipeline |

### Pricing reality

- Per-seat is wrong. These companies have 5 engineers and 100K agent-driven contacts/mo.
- Usage-based per evidence query already designed (consolidated strategy §6) — **lead with this for segment A**.
- Anchor: "Less than your OpenAI bill for the same agent."
- Suggested first-deal shape: $999/mo flat for 50K queries, then $0.005/query overage, **co-marketing required** as part of the deal (they post a case study; we put their logo up).

### Pilot design (what a credible win looks like)

**Goal**: One named logo in segment A using UpSight evidence in production agent output, with a measurable lift.

**Structure**:
1. 30-min discovery → identify 1 use case (e.g., "personalize Alice's first-touch line with a real customer-quote-derived insight about the prospect's industry")
2. 2-week paid pilot ($0–$2K), our engineer integrates alongside theirs
3. Measure: reply rate lift, prospect engagement, agent-output quality (eval set)
4. Convert to annual at $12K–$36K with co-marketing rights

**Target**: 3 segment-A pilots booked by Q3 2026; 1 converted + case study by Q4.

### Risks and disqualifiers

- They build it themselves in a weekend (mitigated by depth of evidence graph + multi-source ingestion they don't have data for)
- Clay/Apollo/Common Room ship "conversation evidence" feature (real risk — watch closely; partner before they do)
- Agent companies pivot or die (real — 11x has had public reply-rate issues; some of these don't survive 2026)
- Long-tail of fly-by-night "AI SDR" startups will churn — focus on the 8–10 funded names

---

## 3. Segment B — In-house enterprise agent teams (FOLLOWER)

### Why follower, not primary

- **ACV is bigger** ($50K–$250K)
- **Sales cycle is wrong for our stage** (6–9 months, security review, procurement)
- **We don't have the trust signals yet** — no SOC 2 listed, no enterprise references in this segment

### Who they are (named teams)

Series C+ SaaS that announced or are visibly building internal AI:

| Company | Public signal | What they'd use UpSight for |
|---|---|---|
| **Notion AI** | Heavy agent investment | Internal product-feedback agent |
| **Linear** | Eng-led, MCP-friendly | Customer-context briefer for issue triage |
| **Ramp / Brex** | Both have AI teams | Sales-call evidence for enterprise deals |
| **Vanta / Drata** | GRC needs customer voice in product | Compliance-customer feedback synthesis |
| **Rippling** | Sales motion is heavy | Account briefers for AE prep |
| **Klarna** (per LangGraph customer list) | Built internal AI customer-service stack | Conversation evidence for the support agent |
| **Replit** | Already a LangGraph reference | Customer feedback agent for product team |

### JTBD

> "Our internal copilot is great at SQL and docs, but when the CEO asks 'what do our top 20 customers think about pricing,' the agent makes something up. We need a real evidence layer."

### Buyer / champion / signer

| Role | Title | What they care about |
|---|---|---|
| **Champion** | Staff eng on the AI platform team | Tool quality, MCP/API surface, eval performance |
| **Economic buyer** | VP Eng or CTO | Doesn't want to build it; wants to ship something |
| **Influencer** | Head of Product / Head of CX | They feel the "agent hallucinating about customers" pain |
| **Signer** | VPE or CTO; procurement gates it |

### What needs to be true before we sell here

1. SOC 2 Type II (or in-flight)
2. SSO/SAML in Enterprise tier (in pricing strategy, not yet shipped)
3. Data residency story
4. 1–2 named customers in segment A as proof points
5. A reference architecture deck and a deployment guide

**Sequence**: Land 2–3 segment-A logos → use as evidence to enter segment B by Q1 2027.

---

## 4. Segment C — AI consultancies & dev shops

### Why these matter

- **Force multiplier**: One consultancy ships UpSight into 5–20 client engagements per year
- **Faster than direct enterprise**: Consultancy already has the trust; they bring us in
- **Margin-friendly for them**: They want a defensible piece of the stack they can mark up

### Who they are

- Galileo, Vellum, Humanloop ecosystem partners
- The 100+ "we build AI agents for you" shops on LinkedIn
- Former Big-Tech AI teams that spun out (a fast-growing seg)
- Agency.ai, Together AI Studio integration partners, OpenAI Solutions Partners

### The deal shape

- **Partner program**: Discount or rev-share for consultancies who deploy UpSight in client work
- **Co-branded reference architecture**: "Customer Intelligence Agent — built on UpSight"
- **Lightweight certification**: 2-hour video + a passing eval, badge on their LinkedIn

### Effort vs. payoff

- Low effort to set up (no product changes needed)
- 3–6 partners signed by Q4 2026 is a real channel
- Each partner = 2–10 indirect customers/year

### Don't over-invest

Consultancies churn, switch stacks, and have lumpy revenue. Keep the program lightweight; don't build a partner portal.

---

## 5. Segment D — Framework / infra ecosystems

### Restating: these are channels, not customers

- Mastra (TypeScript, 300K weekly npm, $13M seed) — already overlaps our stack
- LangGraph (Python, enterprise references)
- CrewAI (rapid prototyping)
- Vercel AI SDK
- OpenAI Agents SDK / Anthropic Agent SDK / Google ADK

### How we show up in each

| Framework | The artifact | Why they care |
|---|---|---|
| **Mastra** | Native Mastra tool wrapper for UpSight MCP — already partly built per consolidated strategy | TS-first; their users are our users |
| **LangGraph** | "How to add customer evidence to a LangGraph agent" tutorial + repo | LangGraph users are mostly segment B |
| **CrewAI** | A "Customer Intelligence" crew template | CrewAI's strength is role-based prototyping; perfect for evidence-querying crews |
| **OpenAI Agents SDK** | Custom GPT + Action; sample TypeScript using the SDK | Broadest reach |
| **Anthropic Agent SDK** | First-class MCP support; this is our home turf | We're already there |
| **Google ADK** | Adapter when it stabilizes; lower priority | Slower to adopt MCP |

### The artifact strategy

Pick **one tutorial per framework** showing the same flow:
1. Build an agent that answers "What did our customers say about X?"
2. Show the unverified-LLM output (bad)
3. Plug in UpSight MCP, rerun, show evidence-backed output (good)
4. Publish on the framework's docs/blog if they accept guest posts; otherwise on ours + cross-link

Five tutorials, recyclable. Real SEO value on near-zero-competition keywords (per consolidated strategy §10).

---

## 6. The unifying pain (one slide, four faces)

> **"Your agent has no verifiable memory of what your customers actually said."**

| Segment | Sounds like (in their language) |
|---|---|
| A (vertical agent startups) | "Our personalization is generic because we have no signal from customer voice" |
| B (in-house enterprise) | "Our copilot hallucinates when execs ask customer-voice questions" |
| C (consultancies) | "Clients keep asking for 'agentic CX' and we don't have a memory layer to sell" |
| D (frameworks) | "Our users keep building this from scratch — we need a reference integration" |

If we can't make this one-liner land in 30 seconds, the rest doesn't matter.

---

## 7. Sizing reality check

The consolidated strategy puts Agent Builder TAM at $120M → $1.2B. Stress-testing:

| Segment | Realistic count (2026) | Avg ACV | Realistic SAM |
|---|---|---|---|
| A — Vertical AI agent startups | ~150 named, funded; ~1,500 if you include unfunded | $12K–$36K | **$5M–$30M** |
| B — Enterprise in-house teams | ~3,000 Series C+ SaaS with AI teams | $50K–$250K | **$150M–$750M** |
| C — Consultancies | ~500 shops doing real agent work | $5K–$30K (indirect) | **$3M–$15M direct** |
| D — Frameworks (channel) | Indirect only | — | (multiplier on A+B) |

**Honest read:** The headline TAM is real but **97% of it is segment B**, which requires 6–9 month sales cycles, SOC 2, and reference customers we don't yet have. The reachable next-12-months revenue is in segment A, sized $5M–$30M, and that's where the energy should go.

This is the strongest argument for "segment A first, segment B follower."

---

## 8. What we don't know (research gaps)

To make this doc operational, we still need:

1. **Direct conversations with 5–10 segment-A founders/CTOs** — confirm the pain language, JTBD, and whether the MCP integration is the right shape
2. **Win/loss against Clay/Apollo/Common Room** in a real pilot — where do they cross over with us?
3. **Real reply-rate or eval-metric lift number** from a pilot — "X% lift in personalization quality" is the post that converts
4. **Pricing test**: $999/mo vs. $0.005/query vs. flat $12K/yr annual — what do these buyers actually prefer?
5. **Eval harness**: A reproducible benchmark showing UpSight-grounded agent vs. baseline — this becomes a recurring publishable artifact (every model release = rerun = new content)

---

## 9. 90-day action sequence (segment A focus)

| Week | Action | Owner | Output |
|---|---|---|---|
| 1 | Finalize 8–10 named segment-A targets | Rick | Target list in [00-control/pipeline.md](../00-control/pipeline.md) |
| 1–2 | Ship merged `@agentcrm/mcp-server` v0.3 + npm publish | Eng | One-command install (already on the consolidated-strategy Phase 0 list) |
| 2 | "Building a customer-intelligence agent in 10 minutes" tutorial + repo | Rick + AI | Public repo, README, video |
| 2–3 | Founder-to-founder outreach to top 5 targets | Rick | 3 booked demos |
| 3–4 | Run 3 demos → 1 pilot agreement | Rick | $0–$2K pilot signed |
| 4–6 | Build the pilot integration jointly | Eng | Live evidence in their agent |
| 6–8 | Measure + write case study draft | Rick | Reply-rate lift number |
| 8–10 | Publish case study + Show HN + Twitter thread | Rick | Inbound from 3+ segment-A peers |
| 10–12 | Convert pilot → annual + 2 more pilots in flight | Rick | First segment-A logo + revenue |

Beads issues to follow this — not duplicating here.

---

## 10. Disqualifiers (when to walk away)

- Prospect wants white-labeling — kills our brand-building motion, decline politely
- Prospect needs on-prem — not for next 12 months
- Prospect won't share metrics or co-marketing rights — pilot has no exit narrative; pass
- "Just give us the data dump" — we're not a data vendor; the value is the agent-native shape
- Segment B prospect with 6+ month cycle expectations — refer them to the waitlist, don't burn cycles

---

## 11. Related docs

- [agentcrm-consolidated-strategy.md](agentcrm-consolidated-strategy.md) — parent positioning
- [pricing-strategy.md](pricing-strategy.md) — pricing detail
- [agentcrm-keyword-research.md](agentcrm-keyword-research.md) — SEO keywords for channel D content
- [market-research/Competitors/platforms.md](../market-research/Competitors/platforms.md) — framework competitive notes
- [market-research/Competitors/positioning-matrix.md](../market-research/Competitors/positioning-matrix.md) — older but useful agent-platform matrix
- [donor-fundraising-crm-market.md](donor-fundraising-crm-market.md) — sibling vertical assessment (concluded "not a primary ICP")
- [00-control/pipeline.md](../00-control/pipeline.md) — where named targets land

---

## 12. External signals used

- [Warmly — 11x integration / autonomous revenue agents](https://www.warmly.ai/)
- [Conversica — pricing $2,999/mo + setup](https://marketbetter.ai/blog/conversica-review-2026/)
- [ATNO — 10 Agent Frameworks in 2026 (LangGraph, CrewAI, Mastra)](https://medium.com/@atnoforgenai/10-ai-agent-frameworks-you-should-know-in-2026-langgraph-crewai-autogen-more-2e0be4055556)
- [Paperclipped — Agent Framework Tier List 2026 (Mastra adoption, MCP)](https://www.paperclipped.de/en/blog/ai-agent-frameworks-tier-list-2026/)
- [StackOne — 120+ Agentic AI Tools 2026](https://www.stackone.com/blog/ai-agent-tools-landscape-2026/)
- [Viewpoint Analysis — Best AI Sales Agents 2026](https://www.viewpointanalysis.com/post/ai-sales-agent-options-2026)
- [Warmly — Best AI SDR Agents 2026](https://www.warmly.ai/p/blog/ai-sdr-agents)
