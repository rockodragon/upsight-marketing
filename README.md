# UpSight GTM vault

The Obsidian vault for UpSight strategy, research, and go-to-market. Code, PRDs, and product specs live in `../Insights/`. Tasks live in Beads. Sales pipeline lives in UpSight (MCP).

Read `CLAUDE.md` for the operating protocol. The folder layout below reads top-to-bottom as a flow: **how we run → what we learn → what we decide → what we ship.**

```
UpSightApp/
├── CLAUDE.md                 ← operating protocol (also governs ../Insights repo work)
├── 00-control/               ← direction: priorities, decisions, open-questions, status, north-star, traction
├── 10-ops/                   ← how we run: agents manual, weekly review, dogfooding, handoffs, repo-index
├── 20-research/              ← INPUTS
│   ├── voice-of-customer/    ←   first-party: themes, evidence, ICP, survey tooling
│   ├── market-intel/         ←   external: competitors, keywords, ad-intel, reports
│   └── notes/                ←   reading / industry notes
├── 30-strategy/              ← DECISIONS: positioning, brand, pricing, messaging, GTM plan, personas/ICP
├── 40-gtm/                   ← EXECUTION
│   ├── campaigns/            ←   time-boxed, cross-channel (brief → assets → results)
│   ├── channels/             ←   evergreen: content-seo, lifecycle, outreach, paid, social, events
│   ├── assets/               ←   reusable library: brand, images, video, decks, scripts, collateral
│   ├── experiments/          ←   one file per test (hypothesis → metric → result)
│   └── plg/                  ←   in-product: onboarding, activation, analytics
├── 99-archive/               ← superseded
└── _UNSORTED-flagged/        ← items pending a human call (misfiled data, personal files) — empty me
```

## The learning loop
`00-control/open-questions.md` → experiment in `40-gtm/experiments/` (or research in `20-research/`) → finding lands in `20-research/` → resolved call closes in `00-control/decisions.md`.

## Rituals
- **Morning:** open `00-control/priorities.md` (the day's filter).
- **End of day:** append to `00-control/status.md`.
- **Weekly:** run `10-ops/weekly-review.md` (Sun/Mon, 30–45 min). Rewrites priorities, reviews open-questions.

## The rules that fight chaos most
- At least 2 of 5 weekly priorities must be `#gtm`.
- If a sales deal needs unblocking, it's #1.
- Append-only logs (`status.md`, `decisions.md`, `open-questions.md`) — never edit past entries.
- Stuck >4 hours = unstick, work around, or kill (no silent slippage).
