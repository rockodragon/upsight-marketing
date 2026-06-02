---
tags:
  - onboarding
  - product-spec
  - activation
aliases:
  - Quickstart Component Spec
  - First-Run Checklist Spec
---
# Spec — In-Product First-Run Checklist Component

> **Derived from:** `./quickstart.md` (canonical source)
> **Status:** Draft v1, ready for engineering scoping
> **Component name (proposed):** `FirstRunChecklist`
> **Maps to:** Steps to Wow infrastructure (`user-success-journeys.md §6`) — extends, doesn't replace
> **Owner:** Product (UI), Eng (instrumentation)

---

## Goal

A persistent, dismissible in-product checklist that walks a new user from signup to their first activated call (Tier 1 events: `account_signed_up`, `desktop_agent_installed`, `recording_started`, `processing_complete`, `followup_draft_generated`).

**Success metric:** % of new users completing Tier 1 events within 7 days of signup. Target: 35%+ (matches existing activation rate target in `user-success-journeys.md §5`).

---

## Visual / placement (proposed, not prescribed)

- **Right-side rail** on the dashboard, collapsible
- **Or:** floating bottom-right card with progress ring (à la Linear's onboarding)
- Persistent across sessions until completed or dismissed
- Hides automatically when all required steps are complete
- Re-summonable from a "Get Started" link in the user menu

The visual treatment is design's call. The contract below is the part that matters.

---

## Steps (8 visible, 5 required for activation)

| # | Title | Sub-copy | Required? | Completion event | Skip event | Depends on |
|---|---|---|---|---|---|---|
| 0 | Account ready | "You're in. Here's what's next." | ✓ | `account_signed_up` | — | — |
| 1 | Download the desktop agent | "Joins your meetings and runs In-Call Guidance." | ✓ | `desktop_agent_installed` | `step_skipped:desktop_agent` | 0 |
| 2 | Confirm your research goals | "What you're trying to learn. Guidance uses these as a watch list." | — | `research_goals_set` | `step_skipped:research_goals` | 0 |
| 3 | Start a meeting. Hit record. | "Zoom, Meet, or Teams. UpSight joins automatically." | ✓ | `recording_started` | — | 1 |
| 4 | Watch the In-Call Guidance | "Your prompts, surfaced during the call. Skip what's not useful." | — | `guidance_seen` (auto-fires when panel renders) | — | 3 |
| 5 | Stop the recording | "Walk away. UpSight processes the call." | ✓ | `processing_complete` | — | 3 |
| 6 | Open your follow-up draft | "Drafted with what you actually agreed to. Edit. Send." | ✓ | `followup_draft_opened` | `step_skipped:followup_draft` | 5 |
| 7 | See your contact's profile | "Every signal, quote, and task from the call — on their record." | — | `contact_profile_viewed_post_call` | — | 5 |

**Required steps (5):** 0, 1, 3, 5, 6 — these are Tier 1 activation events.
**Optional steps (3):** 2, 4, 7 — high-value but skippable. Their absence does not block "activated" status.

---

## State machine

```
INITIAL_HIDDEN  →  on `account_signed_up`  →  VISIBLE (step 0 marked done, focus on step 1)
VISIBLE         →  on `desktop_agent_installed`  →  step 1 marked done, focus on step 2 (or 3 if step 2 skipped)
VISIBLE         →  on `recording_started`  →  step 3 marked done, focus on step 4
VISIBLE         →  on `processing_complete`  →  step 5 marked done, focus on step 6
VISIBLE         →  on `followup_draft_opened`  →  step 6 marked done, focus on step 7
VISIBLE         →  all required steps complete  →  COMPLETED_CELEBRATION (5s) → HIDDEN
VISIBLE         →  user dismisses  →  DISMISSED (re-summonable from menu)
```

**Edge cases:**
- User completes a step out of order (e.g., uploads a recording instead of recording live) → mark step 3 + 5 complete via fallback events `interview_uploaded` + `processing_complete`. Step 1 (desktop install) becomes optional in this branch.
- User dismisses before completing required steps → store `dismissed_at` timestamp; lifecycle email triggers based on this.

---

## Per-step UI contract

Each step renders as a row with:

| Element | Behavior |
|---|---|
| **Status icon** | Empty circle (pending) → filled checkmark (done) → strikethrough (skipped) |
| **Title** | Bold, action verb. Truncates at ~30 chars. |
| **Sub-copy** | Greyed, ~60 chars. Hidden when step is in collapsed state. |
| **Primary action** | Button or link to the step's destination route (e.g., step 1 → `/download-agent`) |
| **Skip link** | Optional steps only. Fires `step_skipped:<id>` event. |
| **Depends-on hint** | Renders disabled with tooltip ("Install the desktop agent first") if depends-on chain isn't satisfied |

---

## Telemetry — events to instrument

### New events (extend `../strategy/instrumentation-plan.md`)

| Event | Properties | Fires when |
|---|---|---|
| `account_context_set` | `has_company`, `has_icp`, `has_problems_solved` | User saves account context form (solo only) |
| `desktop_agent_installed` | `os`, `version` | Agent first reports in to web account |
| `research_goals_set` | `prompt_count`, `template_used` (optional) | User clicks Save on prompts editor with ≥1 prompt |
| `guidance_seen` | `prompt_count_at_render` | In-Call Guidance panel mounts during a recording |
| `guidance_item_marked_done` | `item_type`, `item_id` | User clicks "Done" on a guidance item |
| `guidance_item_skipped` | `item_id`, `dismiss_reason` (optional) | User dismisses guidance item |
| `manual_note_added` | `length_chars` | User adds a note in the guidance panel during recording |
| `followup_draft_generated` | `evidence_links_count` | Backend completes draft generation |
| `followup_draft_opened` | `time_since_generated_ms` | User opens the draft view |
| `followup_draft_sent` | `edit_count`, `edit_distance_pct` (optional) | User clicks Send on the draft |
| `contact_profile_viewed_post_call` | `interviews_attached_count` | User views contact within 24h of related processing_complete |
| `step_skipped:<step_id>` | `step_id`, `step_index` | User clicks Skip on an optional step |
| `firstrun_checklist_dismissed` | `steps_completed_count`, `time_since_signup_h` | User dismisses the checklist |
| `firstrun_checklist_completed` | `time_to_complete_h` | All required steps complete |

### Cohorts to define (PostHog)

| Cohort | Definition | Lifecycle hook |
|---|---|---|
| `qs-stuck-no-agent` | `account_signed_up` + 24h, no `desktop_agent_installed` | Day-1 email: install reminder |
| `qs-stuck-no-recording` | `desktop_agent_installed` + 72h, no `recording_started` OR `interview_uploaded` | Day-3 email: "No call this week? Upload one." |
| `qs-stuck-pre-followup` | `processing_complete` + 2h, no `followup_draft_opened` | Push + email: "Your follow-up is ready" |
| `qs-activated` | All Tier 1 events complete within 7d | Trigger reverse-trial Pro grant (see activation-strategy §2) |

---

## Copy register

All step titles and sub-copy follow brand brief §8.4 Product UI tone: clear, helpful, action-oriented. Verb-led, ≤8 words for titles, ≤14 words for sub-copy.

**Bank of approved phrases** (from canonical quickstart):
- "Hit record."
- "Walk away."
- "Drafted with what you actually agreed to."
- "Now their profile knows them."
- "Every signal, quote, and task from the call."

**Phrases to never use** (brand brief §8.3):
- "Revolutionary"
- "AI-powered"
- "Leverage"
- "10x"
- "Actionable intelligence"

---

## Open questions for engineering

1. **Where does the checklist component live in the existing layout?** Right rail · floating card · top banner — design call.
2. **Should completed checklists ever re-appear?** Proposal: yes, when a user creates a 2nd project (re-orient them) — but don't block on this for v1.
3. **Mobile / web-only behavior?** Desktop agent is required for required steps. Mobile users hit a fallback flow → "Use the web app to continue" or "Switch to upload mode."
4. **Bypass / power-user mode?** Proposal: a single "I'm experienced — skip checklist" link at the top, dismissed forever.

---

## Out of scope (v1)

- Team-onboarding variant (when an admin invites others — different flow)
- Re-onboarding for dormant users (covered by activation-strategy §3 win-back)
- Calendar-triggered pre-meeting brief flow (calendar integration P0 still being addressed)
- Pattern alert flow (feature not yet hardened — see firm demo script v1)

## Adjacent feature (separate spec)

- **Pre-brief button on Guidance page** — user-triggered pre-brief generation that surfaces what UpSight knows about a contact at the top of the Guidance surface. Sidesteps calendar P0 dependency. See `../../UpSight Product/pre-brief-feature-spec.md`. Once shipped, add a Step 3.5 to this checklist: "Click Pre-brief on the Guidance page before your call."

---

## Change Log

| Version | Date | Changes |
|---|---|---|
| v1 | 2026-04-27 | Initial spec. Derived from canonical quickstart v1. Maps 8 steps to 13 telemetry events. 4 cohorts for lifecycle triggers. |
| v1.1 | 2026-04-27 | Added `account_context_set` event (solo first-time users). Renamed `coach_*` → `guidance_*` to match honest framing. Pre-brief moved from "out of scope" to "adjacent feature" with link to its own spec. |

---

*This is the in-product spec. Update when canonical quickstart updates, when meeting-platform support changes, or when activation-tier definitions shift.*
