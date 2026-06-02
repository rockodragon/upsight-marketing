---
tags:
  - onboarding
  - activation
  - canonical
aliases:
  - First Call Quickstart
  - Quickstart - Canonical
---
# Quickstart — First Call with UpSight

> **Status:** Canonical source. All other quickstart outputs derive from this doc.
> **Derived outputs:**
> - Help-center article: `../../channels/content-seo/guides/getting-started.md`
> - In-product checklist spec: `./quickstart-component-spec.md`
> - Email sequence content: feeds Day 0/Day 1 sequences in `../nurture/email-sequences.md`
>
> **Aligned to:** Brand Brief v4.0 · Marketecture (Capture · Understand · Act) · User-Success-Journeys §6 (Steps to Wow)
> **Activation goal:** Get the user through their **first recorded customer call + processed result** within 24 hours of signup. This is the activation "wow."
> **Owners:** Product (UI), Marketing (content), Lifecycle (email triggers)

---

## Why this doc exists

The activation strategy (`../activation-strategy.md`) flags **"Never Activated"** as a meaningful cohort needing a "Fresh Start Onboarding" intervention. The walkthroughs in `../../assets/scripts/` are for cold-traffic education; this is the in-product / Day-0 path that actually moves a user from signup → first activated call.

The previous quickstart (Rick's draft v0) was tight but had three gaps:
1. **No pre-step setup** — Step 3 referenced "existing prompts" that a brand-new user wouldn't have
2. **Follow-up draft was missing** — half of Act, fully shipped, completely absent
3. **Person profile retention moment was buried** — the "next call is smarter" promise lived as a clause at the end

This doc closes all three.

---

## The Quickstart (8 steps · ~10 minutes user time · 1 real customer call)

### 0 · Set up your account (one time)
**What user does:**
- Create account at signup, OR accept invite if a teammate sent one.
- **First time, solo?** Take 2 minutes to capture account context: your company, what you sell, your ideal customer profile, key problems you solve. This stays the same across all your projects — set it once, every prompt and every follow-up draft is informed by it.
- **Joining a team?** This is already set up by your admin. Skip ahead to Step 2.

**What UpSight does:**
- Solo: auto-creates a starter project; account context flows into every project's prompts and into follow-up email tone/specifics.
- Invited: drops user into team's existing project; inherits team-level context.

**Activation event:** `account_signed_up` · `account_context_set` `[NEW]` · `project_created` (auto if solo)
**Failure mode:** Email bounce or magic link doesn't arrive → fall through to support contact. Account context skipped → fallback to generic prompts/tone (still functional, less tuned).
**Why this layer matters:** Account context is the *stable* layer (who you are, who you serve). Project goals (Step 2) are the *dynamic* layer (what you're trying to learn this round). Splitting them keeps the user from re-entering "we sell to mid-market SaaS PMs" every time they start a new research project.

### 1 · Download the desktop agent
**What user does:** Download and install the macOS or Windows desktop agent. Grant calendar + microphone permission when prompted.
**What UpSight does:** Detects install on the account; shows green "agent connected" indicator on the web app.
**Activation event:** `desktop_agent_installed`
**Failure mode:** Install fails / permissions denied → in-product hint to retry; help article link.
**Why this step matters:** This is the gate to In-Call Guidance + live recording features. Without it, the rest collapses to upload-only flow.

### 2 · Confirm your project's research goals (per project)
**What user does:** Open the project. Review the existing prompts (if invited) or take 2 minutes to add 2–4 prompts describing what you're trying to learn *from this round of calls*. These are project-scoped — they change with each engagement. *Examples: "What slows down enterprise procurement?" · "Why do customers churn after month 6?" · "Which features come up in renewal calls?"*
**What UpSight does:** In-Call Guidance reads these prompts and surfaces them contextually during recording — your watch list, in your own words.
**Activation event:** `research_goals_set`
**Failure mode:** User skips → Guidance falls back to generic discovery prompts derived from account context (Step 0). Still useful, less tuned.
**Honest constraint:** If a brand-new solo user hits this with zero project context, surface a "Help me get started" template picker — *Sales Discovery · Customer Success Check-in · Stakeholder Interview · Custom* — so they're not staring at a blank text field.

### 3 · Start your meeting. Hit record.
**What user does:** Open Zoom, Google Meet, Microsoft Teams, Webex, or GoTo Meeting as you normally would. In the desktop agent, click **Record**. The agent joins the call as a recording participant.
**What UpSight does:** Joins the call, transcribes live, identifies speakers, opens the side panel with In-Call Guidance.
**Activation event:** `recording_started` · `meeting_platform=[zoom|meet|teams|webex|gotomeeting]`
**Failure mode:** Bot fails to join (auth, permissions, calendar disconnect) → user falls back to "Upload after the call" mode. Surface this gracefully — don't fail silently.
**Voice constraint:** This is the "Hit record" moment. Three words. Don't dilute it in product copy.

### 4 · Watch the In-Call Guidance
**What user does:** Glances at the side panel during the call. Sees their own prompts (from Step 2) surfaced contextually — watch-fors and reminders, in their own words. Skips what's not useful. Marks done as items are addressed. Adds personal notes inline.
**What UpSight does:** Surfaces 1–3 prompts at a time based on conversation flow. Re-ranks as the call evolves.
**Activation event:** `guidance_seen` · `guidance_item_marked_done` · `guidance_item_skipped` · `manual_note_added`
**Failure mode:** Guidance panel feels noisy or interruptive → user dismisses it. *(Telemetry to watch: dismiss-rate as a leading indicator of quality regression.)*
**Honest framing:** Today this is "your prompts, surfaced in the moment" — not generative advice. Guidance is the right name; "Coach" overpromised. As the system gains more pattern memory across calls, this layer can grow more proactive without renaming.

### 5 · New signals every 30 seconds
**What user does:** Continues the conversation. Notices that signals (objections · buying signals · pain points · feature requests) and tasks appear and update on a rolling basis.
**What UpSight does:** Re-extracts and re-ranks signals every ~30s. Shows a small notification when a new signal lands.
**Activation event:** `signal_extracted` (per signal) · `task_extracted`
**Why this beat matters:** This is the moment that distinguishes UpSight from a notetaker. Notetakers transcribe. UpSight interprets, in real time. Don't bury this in fine print.

### 6 · Stop the recording. Walk away.
**What user does:** Ends the meeting normally. Closes the laptop or moves on.
**What UpSight does:** Processes the call — confirms signals, builds evidence cards with timestamps, generates themes, updates contact profiles. Takes 2–5 minutes depending on call length.
**Activation event:** `recording_stopped` · `processing_complete`
**Failure mode:** Processing fails or stalls → user gets a notification, can retry or contact support. Don't make them refresh and wonder.

### 7 · The follow-up draft is waiting
**What user does:** Opens UpSight (or clicks the email/desktop notification). Reviews the auto-drafted follow-up email — specific next steps, links to evidence quotes from the call. Edits one line if needed. Sends.
**What UpSight does:** Generates a draft email tied to what was actually agreed and said. Surfaces it in Priorities + as a notification.
**Activation event:** `followup_draft_generated` · `followup_draft_opened` · `followup_draft_sent`
**Why this is a separate step:** It's the second half of Act. The "agents that act on what your customers tell you" promise from the brand brief. If a user gets here, they've felt the difference between UpSight and Otter.

### 8 · Now their profile knows them
**What user does:** Clicks the contact's profile (the person from the call). Sees: every signal, every quote, every task, every theme that came from this call — attached to that person.
**What UpSight does:** All artifacts from the call are attached to the contact's record. The next time the user opens that contact, the context is already there.
**Activation event:** `contact_profile_viewed_post_call`
**The retention promise:** *"Now the next time you talk to Sarah, UpSight already knows what she said today."* This is brand brief §1 ("every interaction with a customer makes your whole team smarter — automatically") — the moment the user gets it.

---

## What's next (post-quickstart hooks)

After the first call activates, drop the following CTA into the dashboard + Day-1 email:

> **Do this for 3 calls in a week. That's when patterns start surfacing across conversations — and the demo of UpSight stops being a demo.**

Why 3: brand brief and persona-flow-matrix both ground in cross-conversation synthesis as the second-order wow. One call activates; multiple calls retain.

---

## Persona Variants (same flow, different example prompts in Step 2)

| Persona | Suggested research goal example | Closing CTA hook |
|---|---|---|
| **Founder** | *"What slows enterprise prospects from signing?"* | "Run this on every customer call this week" |
| **Sales/BD** | *"What objections come up after the demo?"* | "Walk into your next call already prepped" |
| **Consultant** | *"Where do my client's stakeholders disagree on scope?"* | "Run this on every stakeholder interview" |
| **Product Lead** | *"Which feature requests come from which segment?"* | "Connect themes to your backlog before sprint planning" |
| **Post-Launch Founder** | *"Which 3 customers are signaling churn?"* | "Run this on your next 5 calls — patterns surface fast" |

The flow is identical for all five. Only Step 2's template prompts and the closing CTA hook change.

---

## Activation Event Map (for instrumentation)

These map to events already specified in `../strategy/instrumentation-plan.md` where they exist; new events flagged as `[NEW]`.

| Step | Event | Activation tier |
|---|---|---|
| 0 | `account_signed_up` | Tier 1 |
| 0 | `project_created` | Tier 1 |
| 0 | `account_context_set` `[NEW]` | Tier 2 (solo only — auto for invited) |
| 1 | `desktop_agent_installed` `[NEW]` | **Tier 1 — gate** |
| 2 | `research_goals_set` `[NEW]` | Tier 2 |
| 3 | `recording_started` | Tier 1 |
| 4 | `guidance_seen` `[NEW]` | Tier 2 |
| 4 | `guidance_item_marked_done` `[NEW]` | Tier 3 |
| 5 | `signal_extracted` | Tier 2 |
| 6 | `processing_complete` | Tier 1 |
| 7 | `followup_draft_generated` `[NEW]` | **Tier 1 — wow moment** |
| 7 | `followup_draft_sent` `[NEW]` | Tier 1 |
| 8 | `contact_profile_viewed_post_call` `[NEW]` | Tier 2 |

**Activation definition (proposed):** User completes Tier 1 events for steps 0, 1, 3, 6, 7 within 7 days of signup → "Activated." This tightens the current activation definition (`user-success-journeys.md §5`) to reflect the live-recording flow as the primary path.

---

## Failure-Mode Inventory (what to monitor)

| Failure | Telemetry signal | Lifecycle response |
|---|---|---|
| Stuck at Step 1 (no agent install) | `account_signed_up` + 24h, no `desktop_agent_installed` | Day-1 email: "Get the desktop agent — 2-min install" |
| Stuck at Step 2 (no research goals) | `desktop_agent_installed` + 48h, no `research_goals_set` | In-app prompt: "Pick a starter template" |
| Stuck at Step 3 (no recording) | `research_goals_set` + 72h, no `recording_started` | Day-3 email: "No call this week? Upload one instead" → divert to Discover Path |
| Stuck at Step 6 (recording, no completion) | `recording_started` + 1h, no `processing_complete` | Surface processing-status in app; if true failure, support ping |
| Stuck at Step 7 (processed, no draft view) | `processing_complete` + 2h, no `followup_draft_opened` | Push notification + email: "Your follow-up is ready" |

---

## Voice Constraints (Brand Brief §8 Compliance)

- **Imperative, confident.** "Hit record." "Walk away." Not "Click the record button to begin."
- **Action-led step titles.** Each step starts with a verb (Set up · Download · Confirm · Start · Watch · Stop · The follow-up · Now their profile).
- **No AI hype.** No "revolutionary," "AI-powered," "10x." See §8.3 We Don't Say.
- **The retention promise lands once, in step 8.** Don't sprinkle it.
- **Concrete time anchors.** "Every 30 seconds" · "Before you close the laptop" · "Takes 2–5 minutes." These are credibility markers.

---

## Future Enhancements (captured here so they're not lost)

| Idea | Status | Where to track |
|---|---|---|
| **Pre-brief button on Guidance page** — surfaces what we know about the person at the top, manually-triggered pre-brief generation. Sidesteps calendar-integration P0 by being user-triggered, not calendar-triggered. | Concept · validated by Rick 2026-04-27 | `../../UpSight Product/pre-brief-feature-spec.md` |
| Calendar-triggered pre-brief (auto, 2hr before meeting) | Roadmap · gated on calendar-integration P0 | Brand brief §13 |
| Cross-call pattern alerts ("3 customers mentioned X this week") | Built but not hardened | Persona-flow-matrix Assistant Panel spec |
| LinkedIn auto-connect prompts post-call | Concept | Persona-flow-matrix |

---

## Change Log

| Version | Date | Changes |
|---|---|---|
| v1 | 2026-04-27 | Initial canonical quickstart. Refined from Rick's v0 draft with setup pre-step, follow-up draft as standalone step, profile retention moment elevated. |
| v1.1 | 2026-04-27 | Step 0 split into account-context (stable) vs Step 2 project-goals (dynamic). "Real-Time Coach" renamed to "In-Call Guidance" (honest framing — surfaces user prompts, doesn't generate advice). Added Webex + GoTo Meeting platforms. Telemetry events `coach_*` → `guidance_*`. Future Enhancements section added. |

---

*This is the canonical first-call activation flow. Update when shipped Act features change, when desktop agent gains/loses meeting platform support, or when the persona-flow-matrix updates.*
