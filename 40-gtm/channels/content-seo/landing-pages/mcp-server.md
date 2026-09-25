---
title: "UpSight MCP Server: Your Customer Calls in Claude and ChatGPT"
title_tag: "UpSight MCP Server | Customer Calls in Claude & ChatGPT"
slug: /mcp-server
canonical_url: "https://getupsight.com/mcp-server"
meta_description: "Connect Claude, ChatGPT or any MCP client to every recorded call, interview and survey. One OAuth click. Read and write, every answer with a receipt."
target_keywords: customer research MCP server, MCP server for customer interviews, connect Claude to call transcripts, customer intelligence MCP, CRM MCP server
status: ready-to-build
written: 2026-09-25
author: "Rick Moy"
why_this_page: >
  Search Console (28 days to 2026-09-22) shows /docs/chatbots-mcp already at position 3.3 on
  hidden queries. "Software with an MCP connection" is a bottom-of-funnel query family with
  almost no competition in the customer-research category. This page gives that demand a
  landing page instead of a docs page. Do not put it at /mcp — that path is the live endpoint.
facts_source: >
  Every product claim below is taken from getupsight.com/docs/chatbots-mcp and
  getupsight.com/pricing as they read on 2026-09-25. If either changes, change this page.
internal_links_in:
  - from: /pricing ("MCP-native" card) → anchor "see what the MCP server can do"
  - from: /docs/chatbots-mcp (top of page) → anchor "why teams connect their AI to UpSight"
  - from: / (the "One summary is not what a call is worth" section) → anchor "or ask Claude directly"
internal_links_out: /pricing, /sign-up, /docs/chatbots-mcp, /customer-call-analysis
---

# Your AI assistant has never heard your customers. Fix that in one click.

**UpSight's MCP server gives Claude, ChatGPT, or any MCP client read and write access to every
recorded call, interview and survey your team has, with every answer pinned to the moment
someone said it.** Add one URL, sign in with UpSight, and ask.

[Analyze 3 old calls — free](/sign-up) · [Set-up guide](/docs/chatbots-mcp)

---

## Why connect an AI assistant to your customer conversations?

Claude and ChatGPT are good at reasoning and bad at knowing. Ask either one "what are our top
pricing objections from VP-level buyers?" and it will produce a confident, generic answer, because
it has never heard a single one of your calls.

The answer exists. It is in a recording from three weeks ago, in a survey response from last
quarter, in the second half of a discovery call nobody rewatched. UpSight already turns those into
evidence: quotes tagged by speaker and timestamp, clustered into themes, linked to the person and
the account. The MCP server hands that evidence to your assistant, so the answer comes back with
the receipt attached.

**In short:** the model does the reasoning, UpSight supplies the customer truth, and every claim
links to the moment it was said.

## What can the assistant actually do?

Full read and write, not just search. As documented on the set-up page:

| Object | What your assistant can do |
|---|---|
| **Conversations** | Search, read transcripts, list by date, participant or segment |
| **Insights and themes** | Query themes, read the evidence behind them, create new insights from patterns |
| **Tasks** | Create, update, complete and list action items across projects |
| **People and organizations** | Look up contacts, add notes, link evidence to accounts |
| **Opportunities** | Create opportunities, update stages, attach conversation evidence |

One OAuth connection covers every project in your workspace. Switch projects inside one chat
without reconnecting.

## What does it look like in practice?

Three prompts teams run in the first week:

1. **Find the evidence behind a business question.**
   *"Across our last 30 conversations, what are the top pricing objections from VP-level buyers?
   Cite evidence and confidence."*
2. **Generate segment-specific follow-ups.**
   *"Draft 3 follow-up emails for clinic ops leaders in the West region who mentioned onboarding
   friction. Keep each under 120 words."*
3. **Turn signals into a plan.**
   *"Create a 2-week plan from our top churn-risk themes: 5 tasks, owners, expected impact, and one
   research validation step per task."*

The pattern that works: **Goal** (the business decision) → **Scope** (segment, timeframe, source)
→ **Output** (format) → **Constraint** (cite evidence, give confidence, name the next action).

## How is this different from uploading transcripts to a chatbot?

| | Paste transcripts into a chat | UpSight MCP server |
|---|---|---|
| **Coverage** | Whatever fits in the context window | Every conversation in every project |
| **Provenance** | The model summarizes; you trust it | Every claim links to a timestamped moment |
| **Silence** | Models fill gaps with confident guesses | If it isn't in a call, UpSight says so |
| **Write-back** | Copy answers out by hand | Create tasks, insights and opportunities from the chat |
| **People** | Names in a transcript | Persistent person and account records that grow with each call |
| **Repeatability** | Different answer each run | The same lens on the same call returns the same findings |

## Which clients work?

Any client that speaks MCP. Documented set-ups today: **Claude** (Desktop and claude.ai),
**ChatGPT** (Connectors), **OpenClaw**, and any other MCP client. Set-up is the same three steps:

1. Add an MCP server with the URL `https://getupsight.com/mcp`.
2. Click **Sign in with UpSight** and approve access. All projects are authorized at once.
3. Ask something. A good smoke test: *"Summarize top churn signals this month with evidence."*

OAuth handles scopes, revocation and team roll-out. If your client can't do OAuth, a project-scoped
API key works as a fallback. Full instructions, client by client, are on the
[set-up page](/docs/chatbots-mcp).

## What does it cost?

The MCP server ships on every plan. **Free** ($0, forever) includes read-only MCP access alongside
one project and five AI analyses a month. **Pro** ($29 a month, single user) unlocks full read and
write for your agents, unlimited AI analysis, the standard lenses (BANT, JTBD, competitive) and the
AI CRM. **Team** ($39 per user a month, two-seat minimum) adds shared evidence, custom lenses,
Slack and Teams push, SSO and audit log. Stakeholders view for free on Team.

Current details, including annual pricing, are on the [pricing page](/pricing).

## Three steps. No new meetings.

1. **Point it at the pile.** Upload the recordings, transcripts and notes you already have, or
   record live in the desktop app.
2. **Connect your assistant.** One URL, one OAuth click.
3. **Ask the question your team is arguing about.** Get the answer with the receipt.

[Analyze 3 old calls — free](/sign-up) · [See pricing](/pricing)

---

## Frequently asked questions

### What is a customer intelligence MCP server?
An MCP (Model Context Protocol) server is a standard way to give an AI assistant such as Claude or
ChatGPT access to an external system's data and actions. UpSight's MCP server exposes your
customer conversations, themes, people, tasks and opportunities to any MCP client, so the assistant
can answer questions from real evidence and write results back.

### Do I need to manage API keys?
No. Sign-in is OAuth: add the server URL, click Sign in with UpSight, approve access. One connection
covers every project in your workspace, and revocation is handled by OAuth. A project-scoped API key
is available for clients that don't support OAuth.

### Is MCP access included on the free plan?
Yes, read-only. Full read and write access for agents is included on Pro ($29 a month) and Team.

### Which AI assistants can connect?
Claude Desktop and claude.ai, ChatGPT via Connectors, OpenClaw, and any other client that
implements MCP. Set-up instructions for each are on the docs page.

### Can the assistant change data, or only read it?
On Pro and Team it can create and update tasks, insights, opportunities, people notes and more
directly from chat. On Free it is read-only.

### How does UpSight avoid hallucinated answers?
Every claim UpSight returns links to the moment it was said in the video, audio or transcript. If the
answer isn't in the conversations, UpSight says so rather than filling the gap. The same lens on the
same call returns the same findings, so your team argues about the evidence, not the tool.

### Is this the same as pasting a transcript into Claude?
No. Pasting covers one conversation at a time with no provenance and no write-back. The MCP server
covers every conversation in every project, cites the source moment for each claim, and lets the
assistant act on what it finds.

---

*Rick Moy is the founder of UpSight. He built it because customer truth kept getting lost after
teams had done the hard part of talking to customers.* [About](/about)

---

## Structured data (paste into the page template)

`FAQPage` questions must match the H3 text above exactly. Add `BreadcrumbList` per the site's
existing pattern on `/customer-discovery`.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "What is a customer intelligence MCP server?", "acceptedAnswer": {"@type": "Answer", "text": "An MCP (Model Context Protocol) server is a standard way to give an AI assistant such as Claude or ChatGPT access to an external system's data and actions. UpSight's MCP server exposes your customer conversations, themes, people, tasks and opportunities to any MCP client, so the assistant can answer questions from real evidence and write results back."}},
    {"@type": "Question", "name": "Do I need to manage API keys?", "acceptedAnswer": {"@type": "Answer", "text": "No. Sign-in is OAuth: add the server URL, click Sign in with UpSight, approve access. One connection covers every project in your workspace. A project-scoped API key is available for clients that don't support OAuth."}},
    {"@type": "Question", "name": "Is MCP access included on the free plan?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, read-only. Full read and write access for agents is included on Pro ($29 a month) and Team."}},
    {"@type": "Question", "name": "Which AI assistants can connect?", "acceptedAnswer": {"@type": "Answer", "text": "Claude Desktop and claude.ai, ChatGPT via Connectors, OpenClaw, and any other client that implements MCP."}},
    {"@type": "Question", "name": "Can the assistant change data, or only read it?", "acceptedAnswer": {"@type": "Answer", "text": "On Pro and Team it can create and update tasks, insights, opportunities and people notes directly from chat. On Free it is read-only."}},
    {"@type": "Question", "name": "How does UpSight avoid hallucinated answers?", "acceptedAnswer": {"@type": "Answer", "text": "Every claim links to the moment it was said in the video, audio or transcript. If the answer isn't in the conversations, UpSight says so. The same lens on the same call returns the same findings."}},
    {"@type": "Question", "name": "Is this the same as pasting a transcript into Claude?", "acceptedAnswer": {"@type": "Answer", "text": "No. Pasting covers one conversation with no provenance and no write-back. The MCP server covers every conversation in every project, cites the source moment for each claim, and lets the assistant act on what it finds."}}
  ]
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "UpSight MCP Server",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "url": "https://getupsight.com/mcp-server",
  "description": "Model Context Protocol server that gives Claude, ChatGPT and other MCP clients read and write access to customer conversations, themes, people, tasks and opportunities in UpSight, with every claim linked to its source moment.",
  "offers": [
    {"@type": "Offer", "name": "Free", "price": "0", "priceCurrency": "USD", "description": "Read-only MCP access, 1 project, 5 AI analyses a month"},
    {"@type": "Offer", "name": "Pro", "price": "29", "priceCurrency": "USD", "description": "Full read and write MCP access, unlimited AI analysis, per month, single user"}
  ],
  "publisher": {"@type": "Organization", "name": "UpSight", "url": "https://getupsight.com"}
}
```
