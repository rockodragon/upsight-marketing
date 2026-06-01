# Traction Goals — Investor Readiness Thresholds

> What traction do I need before standing in front of investors pitching?
> Updated: 2026-05-07. Revisit monthly or after any significant deal closes.

---

## The Short Answer

**Close one paying customer. Then pitch.**

Not a trial. Not an LOI. Cash in. That single event upgrades every other slide from "trust me" to "already happening." Nothing in this document matters as much.

---

## By Investor Type

### Tier 1: Angels / Friends & Family ($25K–$250K)
**Status: Pitchable once Cytodyme closes**

Minimum requirements:
- [ ] 1 paying customer (any price, any MRR)
- [ ] Product demonstrates core loop without bugs (upload → evidence → themes)
- [ ] Desktop recording reliability fixed (current P0 sales blocker)
- [ ] Rick Moy dedup fixed in UpSight (currently appears as 2 people, inflates demo metrics)
- [ ] 3-sentence founder slide written (see `founder-story-pitch.md`)
- [ ] Q2 goals filled in (`north-star.md` — currently blank)

**When:** Cytodyme closes → pitch angels immediately.

---

### Tier 2: Institutional Micro-VCs ($250K–$1.5M from Hustle Fund, Precursor, Backstage Capital, etc.)
**Target: Q3 2026 (Jul–Sep)**

Requirements:
- [ ] 3-5 paying customers, at least 2 from the consultant beachhead
- [ ] $1,000–3,000 MRR
- [ ] One customer has used the product 60+ days (retention signal)
- [ ] One case study with hard outcome: specific time saved or specific decision changed
- [ ] P0 survey bug fixed (deferred identity drops respondent email in production — data loss)
- [ ] Product Hunt launched or scheduled with date confirmed
- [ ] Organic acquisition starting: LinkedIn referrals, inbound DMs, or >200 unique visitors/month to getupsight.com

**Realistic:** 90–120 days from today if Cytodyme closes and SSD follows within 60 days.

---

### Tier 3: Top-Tier Seed — a16z Seed, Accel, Sequoia Scout ($1M–$3M)
**Target: Q4 2026 / Q1 2027**

Requirements:
- [ ] 10–20 paying customers with clear retention (>3 months paying)
- [ ] $5,000–15,000 MRR
- [ ] 2–3 named case studies with hard outcomes (not just "it was helpful")
- [ ] Clear signal on which persona converts best: consultant vs. founder vs. PM
- [ ] Organic acquisition > 1,000 unique visitors/month (demonstrates distribution potential)
- [ ] NPS-equivalent signal: users are recommending to colleagues unprompted
- [ ] YC "Cursor for PMs" narrative has landed with at least one investor who said "yes, that's the category"
- [ ] VoicePanel competitive response ready (they will ask)

**The Rick Moy exception:** Multi-exit + NSS Labs origin story lowers the traction bar somewhat vs. a first-time founder. A compelling narrative + 5–7 paying customers + one undeniable case study might be enough for a top-tier angel or seed partner initial conversation. But "somewhat lower" still means paying customers. Pre-revenue decks don't move top-tier funds.

---

## The Kill Criteria (When to Reassess the Strategy)

These mirror the GTM plan's kill criteria but with an investor lens:

| Signal | What It Means | Action |
|---|---|---|
| Cytodyme stalls past May 20 | Apollo-replacement positioning failing live test | Re-examine persona fit. Start SSD faster. |
| 3 demos in June, 0 closes | Demo is working, conversion is not | Fix pricing, trial offer, or onboarding friction |
| No second project from any user in 60 days | Retention is broken | Stop acquisition. Fix the product loop. |
| Consultant persona gives low retention despite conversion | Wrong ICP | Pivot to founders or PMs as primary |
| CPL on LinkedIn Ads > $300 after 30 days | CAC too high for self-serve pricing | Kill paid. Double founder-led outreach. |

---

## The Metrics That Matter for the Deck

When you're ready to pitch, these are the numbers investors will ask for in the first 5 minutes:

| Metric | Angel Minimum | Micro-VC Minimum | Top-Tier Minimum |
|---|---|---|---|
| Paying customers | 1 | 3–5 | 10–20 |
| MRR | Any | $1K–3K | $5K–15K |
| Retention (avg months paying) | N/A | 2+ months | 3+ months |
| Active users (monthly) | 5–10 | 20–40 | 50–150 |
| Website visitors/month | N/A | 500+ | 2,000+ |
| Trial → paid conversion | N/A | >15% | >25% |

---

## The Context Deck Doesn't Solve

Even a perfect deck can't fix:

1. **Demo that crashes.** The first thing most seed investors will ask for is a live demo or product access. Desktop recording still has reliability issues (mic-drop pattern, no audio capture). Fix before pitching anyone beyond angels.

2. **Data-loss bugs.** The P0 survey bug (deferred identity drops respondent email when `respondent_fields=[]`) means you're silently losing customer data in production. Investors who do technical due diligence will find this. Fix before raising any institutional round.

3. **The Rick-as-only-user problem.** If your usage dashboard shows Rick Moy as your top user in 6 of 8 themes, it undermines the "we have real signal" story. Get external users activated before any pitch.

4. **No team.** Investors will ask "who's going to build this with you?" Solo founder is survivable at angel stage; it becomes a real objection at micro-VC and above. Even one trusted co-founder or early employee changes this conversation.

---

## The 90-Day Sprint to Tier 1 Pitchability

| Week | Goal |
|---|---|
| Wk 1–2 | Close Cytodyme. Fix desktop recording reliability. |
| Wk 3–4 | Close SSD or qualify out. Fix Rick dedup in UpSight. |
| Wk 5–6 | Fill Q2 goals in north-star.md. Fix P0 survey data-loss bug. |
| Wk 7–8 | Get one more paying customer (Patricia Sinay or Focus26 follow-up). |
| Wk 9–10 | Product Hunt prep. First case study written. |
| Wk 11–12 | Soft outreach to 3 angels from cybersecurity/SD network. |

**If this plays out:** By early August 2026, you have 2–3 paying customers, a live case study, and the deck to match.
