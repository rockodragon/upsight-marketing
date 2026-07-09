---
title: Demo feedback — Ryan, Nate, Chris — "be the SOP-conformance layer, not a CRM"
date: 2026-07-09
status: raw synthesis → feeds open-questions.md
tags: [demo-feedback, icp, sop, intake-form, lenses, positioning]
---

# Source

Informal demo of UpSight to three people Rick respects (Ryan, Nate, Chris) — not a sales call, an advisor/pressure-test conversation. Raw notes were fragmented voice-to-text; this file is the netted-out read. One image (`IMG_0625.jpeg`) was referenced but isn't present as a file in this repo/vault — if it has a whiteboard sketch or diagram worth capturing, re-attach it and this doc should be updated.

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

The one genuinely new input is #4 (video/conversational intake) — flagged below as research, not yet a hypothesis, because Rick has no prior read on that market.

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

## H3 (research, not yet a hypothesis) — video/conversational intake as UpSight's front door
Rick isn't familiar with the "better Typeform" category Ryan/Nate/Chris referenced (they may mean tools like Typeform's video-answer mode, Tally, Arcade, Warmly, or similar — unconfirmed). **Before** turning this into a testable hypothesis:
1. Research what exists in conversational/video-form intake, who's using it and why, and what "better than Typeform" would concretely mean for a sales-SOP buyer.
2. If real, the natural version for UpSight: intake responses (whether text, voice, or video) become the *first* conversation in the corpus, auto-scored against the same Lens used for SOP-conformance — closing the loop from "how are my reps doing" to "capture better data going in."
3. Only after that research does this become an experiment.

---

# Open questions this raises → logged in `00-control/open-questions.md`
- Is org-level SOP-conformance (segment B-ish, or a new segment) a viable second wedge alongside the founder-led beachhead, or a distraction? [bet]
- Is there a real "better Typeform" / video-ask intake category we should learn from or compete adjacent to? [bet] — needs research before it's tactical.

# What to do next
1. Run H1 as a concierge offer this week or next — cheapest test, no build required, uses Lenses as-is.
2. Spin up a short market-intel pass on video/conversational intake tools (H3) before committing to anything there.
3. Hold H2 (ICP calibration) as a read from the same H1 conversations rather than a separate motion — don't fragment attention.
