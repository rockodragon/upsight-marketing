---
title: Demo feedback — Ryan, Nate, Chris — "be the SOP-conformance layer, not a CRM"
date: 2026-07-09
status: raw synthesis → feeds open-questions.md
tags: [demo-feedback, icp, sop, intake-form, lenses, positioning]
---

# Source

Informal demo of UpSight to three people Rick respects (Ryan, Nate, Chris) — not a sales call, an advisor/pressure-test conversation. Raw notes were fragmented voice-to-text; this file is the netted-out read, updated once the whiteboard photo (`IMG_0625.jpeg`) was supplied directly.

## Whiteboard capture (IMG_0625)

Two sketches from the same session:

**Left page — an org/insights structure:**
- `Lead` (single person) rolls up to `Manager + worker` (a team) — i.e., a role-based hierarchy: individual rep → team.
- Candidate tagline: **"Perfect your conversion and onboarding at scale."** — distinct from the decided broad-market tagline in `messaging-house.md` ("prepares your weekly leadership meeting"); log as a candidate variant for this specific angle, not a replacement.
- "Insights on your [offering]" with four categories: **offering, team performance, forecast, customer sentiment.** Reads as the proposed insight taxonomy for this pitch — broader than pure SOP-conformance, closer to a general sales-ops intelligence surface.

**Right page — feature list for the "Lead" (rep) role:**
- performance
- improvement KPIs + automatic tracking
- SOP deviations

This is a rough feature spec, not just a slogan — it maps a rep-level dashboard (their performance, KPI trend with no manual reporting, and where they deviate from SOP) sitting under a manager/team rollup. Any concrete product spec work belongs in `../Insights/` per this vault's boundaries; this doc only carries the idea forward as a GTM-relevant sketch.

**Ryan's follow-up (verbal, post-photo):** the survey/intake shouldn't be a separate tool — it could live **on the website or somewhere in the existing signup/onboarding funnel.** This resolves point #4 below from "unfamiliar category to research" into something concretely testable with UpSight's own survey engine.

# What they actually said (untangled into 4 separate points)

The raw notes braid four distinct ideas together. Separating them:

1. **Reframe the pitch to CEOs around SOP conformance**, not around "AI notes" or "CRM." The pitch line they suggested: *"How effective is your sales org — are they actually following your procedure? Give us recordings and we'll tell you."*
2. **The analysis is a data-science exercise, not a dashboard**: ingest raw conversation logs/recordings from a team → infer the *actual* pattern of what reps do (which is not the same as the *documented* SOP — it's just observed behavior) → cross-reference against what closed (won) vs. what didn't → surface the delta between "what we tell people to do," "what people actually do," and "what actually works." That delta *is* the coaching product.
3. **Hard anti-CRM steer, especially for larger orgs.** Positioning UpSight as a CRM is a difficult sell once an org has any size to it — they already have a CRM, or resent the idea of migrating. Don't fight that battle.
4. **"A better Typeform" — video/conversational intake ("Ask"-style).** They referenced a category of tool (unfamiliar to Rick) that replaces static web forms with a conversational or video-based ask flow. Implication: UpSight could *be* the intake mechanism for these sales orgs (top-of-funnel qualification, onboarding forms, post-call surveys), not just analyze recordings after the fact.

# Why this lands — it's not a new product, it's a new front door

Two things already true in the vault make this cheap to test rather than a rebuild:

- **"Receipts" is already the core promise** (`30-strategy/messaging-house.md`, decisions 2026-06-02) — evidence-linked answers, not black-box scores. SOP-conformance scoring is a receipts problem: "here's the call, here's the SOP step, here's whether it happened."
- **Lenses already do exactly this mechanism.** Per `decisions.md` (2026-05-27): *"Lenses = structured frameworks you bring to score against (operational, top-down)."* A sales SOP is a Lens. Scoring reps' calls against it, and correlating Lens scores with won/lost outcomes, is largely a packaging and GTM exercise on top of an existing surface — not a new product bet.
- **The anti-CRM steer isn't new information** — it matches the existing decision (2026-06-02, "draft AI-CRM category at top-of-funnel; fight on the decision workflow, not CRM hygiene"). Treat this as independent validation from outside voices, not a pivot.

Point #4 (intake) is no longer pure research — Ryan's follow-up ("put the survey on the website or in the funnel") turns it into something testable with UpSight's existing survey engine, no new competitive category needed (see H3, revised below).

# Tension with the current ICP bet (surface, don't resolve here)

Current beachhead (`30-strategy/icp/README.md`) is **solo/founder-led sellers on spreadsheets** — the buying trigger is "I can't remember what was said." The SOP-conformance pitch assumes something different: **a sales *org*, multiple reps, a CEO/sales leader who already believes in process** and wants to know if it's being followed — closer to segment B (boutique agencies) or a slightly larger structured team than segment A. This doesn't kill the current bet; it's a candidate second angle for a specific trigger ("does my team actually follow the process I pay them to follow") worth testing as its own wedge, not a replacement for the founder-led motion.

---

# Proposals & hypotheses (ready to test)

## H1 — SOP-conformance concierge offer (cheapest test, no new build)
**If** we pitch sales leaders/CEOs at teams with 3+ reps and *some* notion of a sales process — "send us your call recordings + your win/loss list, we'll show you the gap between what you tell reps to do and what your best closer actually does" — **then** a meaningful share will send recordings and convert to a paid pilot, **because** the pain (am I actually getting what I'm paying for in my sales process) is sharper and more executive than "remember what was said."

- **Mechanism:** existing Lens feature, scored against a rep-supplied or inferred SOP, correlated with `opportunities` won/lost.
- **Test:** concierge offer to 5–10 CEOs/sales leaders (Rick's network — StartupSD/Focus26/NCCC has these). No new UI needed; deliver the analysis as a doc/Loom.
- **Primary metric:** # who send recordings → # who convert to paid pilot; secondary: do they cite "conformance gap" or "what my top closer does differently" as the value, unprompted.
- **Decision rule:** ≥2 pilots from ~8 convos → real wedge, build a lighter self-serve version. 0–1 → the trigger isn't sharp enough at this ICP size, park it.

## H2 — ICP calibration: "process-driven team" vs. "solo spreadsheet seller"
**If** we run the SOP-conformance pitch specifically against CEOs/sales leaders who self-describe as process-driven (existing SOP, multiple reps), **then** it will get a warmer/faster response than the current "who's warm/slipping/blocked" pitch at the same org size, **because** it names a specific executive anxiety (compliance + coaching ROI) instead of a general productivity claim.
- **Test:** run alongside H1 — track qualitative response speed/heat, not just conversion.
- **Output:** either a documented second wedge (org-level, SOP-trigger) alongside the founder-led beachhead, or evidence it's not worth splitting focus — either way, close as a decision, not left open.

## H3 — UpSight's own survey/ask, embedded in the website funnel (revised: now testable, not just research)
**If** we put UpSight's existing survey/conversational-intake tool directly in a funnel spot on the marketing site (e.g., "book a demo" replaced or paired with a rich ask-flow, or a post-signup onboarding survey) **then** it captures higher-signal, richer lead data than a static form **and** seeds the corpus that later gets scored against a Lens — turning intake itself into the first "conversation" analyzed, **because** the same engine that powers SOP-conformance analysis can run at top-of-funnel instead of only after the fact.
- **Test:** pick one funnel spot (demo-request form is the obvious first candidate — lowest traffic risk, clearest before/after) and swap it for a UpSight-survey-powered version for a defined period.
- **Primary metric:** form completion rate + qualified-lead rate vs. the current static form; secondary: does the richer intake data visibly improve the first sales conversation (fewer redundant qualifying questions).
- **Still open, lower priority:** whether a broader "better Typeform" competitive category (video-answer forms, Tally, Arcade, etc.) exists and is worth tracking — worth a light market-intel scan, but no longer a blocker to running this test, since the mechanism is UpSight's own survey tool, not a new build.

## H4 — Broaden the insights taxonomy beyond conformance (from the whiteboard)
The whiteboard's four insight categories — **offering, team performance, forecast, customer sentiment** — suggest the SOP-conformance pitch is one slice of a wider "insights on your sales org" surface, not the whole story. **If** the concierge test (H1) lands, the natural next question is whether leads want the narrow "did you follow the SOP" cut or the fuller sales-ops picture (forecast accuracy, sentiment trends, offering fit) — worth listening for in the same H1 conversations rather than testing separately up front. Treat as a listening flag for H1, not a standalone experiment yet.

---

# Open questions this raises → logged in `00-control/open-questions.md`
- Is org-level SOP-conformance (segment B-ish, or a new segment) a viable second wedge alongside the founder-led beachhead, or a distraction? [bet]
- Does swapping a funnel form for a UpSight-survey-powered intake improve completion/qualified-lead rate? [tactical] — reclassified from [bet] now that Ryan's follow-up gave a concrete mechanism (own tool, funnel placement, no new category research required).

# What to do next
1. Run H1 as a concierge offer this week or next — cheapest test, no build required, uses Lenses as-is.
2. Pick one funnel spot (demo-request form first) and run H3 — swap in a UpSight-survey-powered intake, measure completion/qualified-lead rate.
3. Hold H2 (ICP calibration) and H4 (broader insights taxonomy) as reads from the same H1 conversations rather than separate motions — don't fragment attention.
4. Light market-intel scan on video/conversational-form competitors remains optional background reading, not a blocker to #2.
