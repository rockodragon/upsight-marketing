# Market Research

**Purpose:** Continuous competitive intelligence and market analysis for UpSight GTM

## Folder Structure

```
Market-Research/
├── README.md              # This file
├── Weekly-Reports/        # Tuesday reports (YYYY-MM-DD.md)
├── Competitors/           # Per-competitor profiles + positioning analysis
│   └── consulting-adjacent/  # Consulting-space competitors
├── Keyword-Research/      # SEO keyword data, SERP analysis, content mapping
├── Content-Plans/         # Content clusters, editorial calendars
├── Ad-Intelligence/       # Competitor ad creatives, spend signals, channel scans
├── Alerts/                # Urgent findings between weekly reports
└── Raw-Data/              # CSV/JSON exports, keyword data, traffic data
```

## Relationship to Other Directories

| Directory | Purpose | When to use |
|-----------|---------|-------------|
| **market-research/** (here) | Ongoing intelligence gathering, competitor monitoring, keyword tracking | Research, analysis, weekly reports |
| **../gtm-ops/** | Campaign execution, ad deployment, outreach tracking | Running campaigns, tracking spend, measuring results |
| **../50-market/** | Strategic positioning, brand, GTM plan (reference) | Brand decisions, messaging updates, strategy changes |
| **../70-PLG/** | Product-led growth strategy, email nurture, analytics | Activation flows, email sequences, PostHog setup |

## Competitors to Track

### Tier 1 (Highest Priority)
| Competitor | URL | Threat | Focus |
|------------|-----|--------|-------|
| **VoicePanel** | voicepanel.com | Highest | AI voice research, same space |
| **Dovetail** | dovetailapp.com | High | Research repository, market leader |
| **Looppanel** | looppanel.com | Medium | Interview analysis, price anchor |

### Tier 2 (Watch)
| Competitor | URL | Threat | Focus |
|------------|-----|--------|-------|
| Gong | gong.io | High (adjacent) | Sales coaching, enterprise |
| Chorus | chorus.ai | High (adjacent) | Sales intelligence |
| Clarify | clarify.ai | Medium | AI-native CRM |
| Fathom | fathom.video | Medium | Free transcription |
| Granola | granola.so | Medium | Native app, no bot |
| Grain | grain.com | Medium | Video highlights |

### Tier 3 (Monitor)
| Competitor | URL | Notes |
|------------|-----|-------|
| Nutshell | nutshell.com | CRM + conversation |
| Notably | notably.ai | Research synthesis |
| Condens | condens.io | Research repository |
| UserInterviews | userinterviews.com | Recruiting + research |
| Listen Labs | listenlabs.ai | Research platform |
| Discuss.io | discuss.io | Human + AI research |

## Weekly Report Spec

**Delivery:** Tuesdays

### Sections
1. **Executive Summary** -- Top 3 changes + recommended GTM adjustments
2. **Competitive Activity** -- New offers, launches, pricing changes
3. **Advertising Summary** -- New creatives, channels, visible spend signals
4. **Keyword & Positioning Shifts** -- Rank changes, new value props, messaging
5. **Website & Product Changes** -- New pages, messaging shifts, UX changes
6. **Traffic & Channel Signals** -- Est. traffic trends
7. **Risk & Opportunity Matrix** -- Priority actions: defend, experiment, exploit
8. **Action Items** -- What to do this week

### Deliverables
- Markdown report (`Weekly-Reports/YYYY-MM-DD.md`)
- CSV of raw signals in `Raw-Data/`
- Screenshots of significant changes in `Competitors/`

## Monitoring Approach

### Daily (Passive)
- Site change detection (Wayback, Visualping-style checks)
- Google/Meta Ad Library scans
- SERP rank checks for key terms
- Social mentions

### Immediate Alerts
Trigger alert file in `Alerts/` for:
- Major pricing/offer changes
- New paid campaigns (significant)
- Product launches
- Acquisition/partnership announcements
- Sudden SERP volatility

## Tools & Data Sources

### Free / Built-in
- Google Ads Transparency Center
- Meta Ad Library
- Wayback Machine
- Web scraping (respectful, robots.txt compliant)
- SimilarWeb (free tier)
- BuiltWith / Wappalyzer

### Paid (if available)
- Semrush / Ahrefs / Moz -- keyword tracking, backlinks
- SimilarWeb Pro -- traffic estimates
- Adbeat / Pathmatics -- ad intelligence

## Status

- [x] Folder structure created
- [x] Competitor profiles populated (16 profiles + consulting-adjacent)
- [x] Keyword research docs seeded (3 files)
- [ ] Competitor baseline captured (current pricing, features, positioning snapshot)
- [ ] First weekly report
- [ ] Monitoring automation configured
