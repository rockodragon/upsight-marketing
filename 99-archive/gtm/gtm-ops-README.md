# GTM Ops

**Purpose:** Execution hub for go-to-market campaigns, advertising, outreach, and performance tracking.

This is where strategy (in `../50-market/`) and research (in `../market-research/`) become action.

## Folder Structure

```
GTM-Ops/
├── README.md            # This file
├── Campaigns/           # Campaign briefs, assets, results
├── Content-Calendar/    # Weekly/monthly publishing schedule
├── Ad-Tracking/         # Ad spend, creatives, performance by channel
├── Analytics/           # Traffic, conversion, funnel reports
└── Outreach/            # Direct outreach templates, prospect lists, follow-ups
```

## Workflows

### Launching a Campaign
1. Check `../market-research/` for latest competitive positioning
2. Reference `../50-market/gtm-plan-2026.md` for channel strategy
3. Create campaign brief in `Campaigns/YYYY-MM-campaign-name.md`
4. Track spend and results in `Ad-Tracking/`
5. Report outcomes in `Analytics/`

### Content Publishing
1. Pull topics from `../market-research/Content-Plans/`
2. Check keyword targets in `../market-research/Keyword-Research/`
3. Schedule in `Content-Calendar/`
4. Track performance in `Analytics/`

### Direct Outreach
1. Reference persona messaging from `../50-market/positioning-brief.md`
2. Store templates and prospect tracking in `Outreach/`
3. Log results for conversion analysis

## Source Strategy Docs (Reference)

These are sibling directories — read but don't duplicate:

| Doc | Purpose |
|-----|---------|
| `../50-market/gtm-plan-2026.md` | Master GTM strategy, budgets, 90-day calendar |
| `../50-market/gtm-channel-strategy.md` | Channel-by-channel execution playbook |
| `../50-market/brand-brief.md` | Brand voice, positioning, personas |
| `../50-market/positioning-brief.md` | Tactical messaging and objection handling |
| `../70-PLG/strategy/activation-strategy.md` | Reverse trial, pricing tiers |
| `../70-PLG/nurture/email-sequences.md` | 18 email templates for nurture flows |

## Key Metrics (from GTM Plan)

### Month 1-3 Targets
- Visitors: 200-500 -> 1K-3K
- Demos: 5-10 -> 15-30
- Paying: 0-2 -> 5-12

### Month 4-6 Targets
- Visitors: 3K-10K
- Demos: 30-60
- Paying: 15-30

### Channel Kill Criteria
- LinkedIn CPL > $300
- Trial-to-paid < 10%
- Consultant reuse < 50% by Month 3
