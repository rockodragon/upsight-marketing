---
tags:
  - marketing
  - video
  - demo
aliases:
  - UpSight Demo Highlights Script
  - Hero Demo 90s
---
# UpSight Demo Highlights — 90 Seconds

> **Replaces:** `product-promo-script-90s.md` (v1.0 used outdated "Insights" branding, led with receipts)
> **Aligned to:** Brand Brief v4.0 · Positioning Brief v1.2 · Persona Flow Matrix v1.1
> **Archetype:** Trusted Operator · **Spine:** Know · Serve · Win (Campaign §9.5)
> **Primary tagline:** "Get your customers. Build conviction."
> **Target length:** ~215 words · ~90s at confident pace
> **Format:** 1920×1080 for homepage hero · 1080×1080 cutdown for social · :30 cutdown for paid

---

## Creative Brief

| | |
|---|---|
| **Job** | Earn the click / trial signup. Top-of-funnel. |
| **Audience** | Cold horizontal — operator at a growth-stage team (3–50 people) who talks to customers weekly. |
| **One thing to believe** | "Agents act on what my customers tell me — not just summarize it." |
| **One thing to feel** | "That's what I've been trying to hold together in my head." |
| **Voice check** | Direct · Confident · Action-first · Grounded · Useful (§8.2) |
| **Never say** | "Revolutionary," "AI-powered," "Leverage voice-of-customer," "10x," "Actionable intelligence" |

---

## SCRIPT

### SCENE 1 — HOOK (0–10s) · "Listen, learn, lose it"
**Visual:** Fast cuts. Zoom recording playing silently. Slack thread scrolling past. Notion doc with 4,000 unread words. Someone's handwritten notes getting tucked into a drawer. One tab closes. Another. Another.
**On-screen (mono label):** `// the gap`
**VO:**
> "You talk to customers every week. You listen. You take notes. Then most of what you learned just… disappears."

**Remotion scene:** reuse `SceneHook` + fast dissolve cuts. Spring config: `springConfident`.

---

### SCENE 2 — THE REAL PROBLEM (10–22s) · Name the pain plainly
**Visual:** Team Slack channel. Message: "What did customers say about pricing?" Scroll up — nobody knows. Cut to a founder staring at a blank follow-up email at 11pm. Cut to "Sarah left the company" LinkedIn tile.
**On-screen headline (slide-up):** **"Listening isn't enough."**
**VO:**
> "The insight that would have closed the deal. The pattern three customers already told you about. The follow-up you meant to send. Gone — into a doc nobody reads, a call nobody watches, someone's head."

**Remotion scene:** reuse `SceneSurveyOldWay` bones or adapt `SceneStats` with headline instead of numbers.

---

### SCENE 3 — KNOW (22–40s) · Every conversation, understood
**Visual:** Drag-drop a call recording into UpSight. Processing shimmer (2s max). Evidence cards snap into place with timestamps + speaker attribution. Zoom out: themes tile view populates.
**On-screen labels:** `// calls` `// surveys` `// tickets` `// notes` → `// understood`
**Headline:** **"Know them."**
**VO:**
> "UpSight captures every customer conversation — calls, surveys, tickets, notes — and finds what matters across all of it."

**Remotion scene:** reuse `SceneEvidenceReveal` + `ScenePatternsEmerge`.

---

### SCENE 4 — SERVE (40–60s) · Agents take the next step
**Visual:** Split-screen triptych, each panel fades in on beat.
- Panel 1: Calendar event in 2 hours → pre-call brief card materializes. Caption: *"Here's what they said last time."*
- Panel 2: Zoom call ends → follow-up email draft auto-writes with specific next steps. Caption: *"Ready before you close the laptop."*
- Panel 3: Dashboard alert — "4 customers mentioned pricing this week." Caption: *"Pattern surfaced before you asked."*
**Headline:** **"Serve them."**
**VO:**
> "Then agents take the next step. Pre-call brief ready before you walk in. Follow-up drafted before you close the laptop. Pattern surfaced before you missed it."

**Remotion scene:** new composition `SceneAgentsAct` — build as three sequenced `ScreenshotFrame` beats.

---

### SCENE 5 — WIN (60–75s) · Grounded, not generated
**Visual:** User clicks a theme card ("Budget pushback — 4 customers"). Evidence drawer slides open. Four exact quotes with speaker name, company, timestamp. A "Play from here" button highlights.
**On-screen label:** `// every finding, every source`
**Headline:** **"Win them."**
**VO:**
> "Click any finding. See exactly who said it, when. No AI hallucination. Just your customers' voices, organized and put to work."

**Remotion scene:** reuse `SceneInsightToAction` + `SceneSmartLayers`.

---

### SCENE 6 — CTA (75–90s) · The ask
**Visual:** UpSight logo reveal on dark brand background. Confident amber CTA button pulses once.
**On-screen headline (spring-up):** **"Get your customers. Build conviction."**
**Sub-headline:** *"Know them. Serve them. Win them."*
**VO:**
> "Start with one project. Five conversations. See your customers for the first time."

**Super:** `getupsight.com` · `Start free`

**Remotion scene:** reuse `SceneCTAConviction` (already aligned with this campaign).

---

## Messaging Pillars (how each scene earns the headline)

| Scene | Brand Principle | Brand Brief Reference |
|---|---|---|
| Hook · Problem | "Listen, learn, lose it" narrative | §1 The Human Truth |
| Know | Every conversation understood | §3.3 Value Ladder → "Captures every conversation" |
| Serve | Agents that act, not summarize | §7.1 "Agents that act on what your customers tell you" |
| Win | Evidence-backed, every source traceable | §3.2 The Proof · §7.3 "Intelligence that acts" |
| CTA | Know · Serve · Win tri-promise | §3.4 Three Promises · §9.5 Campaign |

---

## A/B Hook Variants (for paid social cutdowns)

| Variant | Hook | Best for |
|---|---|---|
| **A — Brand** | "You talk to customers every week. Your team doesn't hear them." | LinkedIn, thought-leadership audiences |
| **B — Provocative** | "The last call that actually closed a deal — what did you learn from it?" | Founder/Sales retargeting |
| **C — ROI** | "Your last 10 customer calls. One afternoon. Every pattern, surfaced." | Post-launch founders, consultants |

---

## Cutdowns (derive from this master)

| Length | Use case | Cuts |
|---|---|---|
| **60s** | YouTube pre-roll, LinkedIn | Drop Scene 2 · tighten Scene 5 |
| **30s** | Paid social (LinkedIn/Meta) | Hook (5s) → Know+Serve combined (15s) → CTA (10s) |
| **15s** | Retargeting | Serve triptych (10s) → CTA (5s) |
| **6s bumper** | YouTube bumper | Know·Serve·Win three-frame + logo |

---

## Production Notes

- **Screens to capture before recording VO:** pre-call brief card, auto-drafted follow-up, pattern alert, theme → evidence drawer with quote. These four screens carry the whole "Serve + Win" story.
- **VO pacing:** 215 words over 90s = 143 wpm — confident, not rushed. Leave 0.5s breath between scenes.
- **Music bed:** build from Scene 3, peak at Scene 5 "Win," soft resolve on CTA. No drop.
- **Voice casting:** operator archetype — measured, mid-register, ~35–45 perceived age. Avoid "announcer voice."

---

## Related

- Brand brief: `../../50-market/brand-brief.md`
- Campaigns: Brand Brief §9 (Build Conviction · Agents That Act · Know·Serve·Win)
- Existing ads (24s cutdowns, different spine): `../remotionVideos-UpSight/out/`
- Walkthroughs (next in the journey): `walkthrough-discover-path.md` · `walkthrough-reach-out-path.md`

---

*Version 1.0 · 2026-04-22 · Canonical homepage hero / top-of-funnel demo script.*
