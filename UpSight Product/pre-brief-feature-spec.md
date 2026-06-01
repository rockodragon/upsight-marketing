---
tags:
  - product-spec
  - feature-idea
  - guidance
aliases:
  - Pre-Brief Feature Spec
  - Pre-Brief on Guidance Page
---
# Feature Spec — Pre-Brief Button on Guidance Page

> **Status:** Concept · validated by Rick 2026-04-27
> **Type:** New feature, manually-triggered (not calendar-dependent)
> **Why now:** Calendar-integration P0 (Brand Brief §13) gates auto-pre-brief generation. This manual variant ships value *without* solving calendar reliability first.
> **Owner:** Product
> **Adjacent docs:** `../70-PLG/onboarding/quickstart.md` · `../50-market/persona-flow-matrix.md` Assistant Panel · `./person-intelligence-card-spec.md`

---

## Problem

Users with prior conversations history have value-rich context UpSight already knows — but it's distributed across the contact's profile. Before a call, they currently have to:

1. Open UpSight
2. Find the contact
3. Scroll through past evidence cards / themes / signals
4. Mentally synthesize what to bring up

This is friction at the exact moment we want zero friction. The Guidance page (where they're prepping prompts for the call) is the *right place* to surface "what we already know about this person" — but today doesn't.

## Insight

The Pre-brief problem doesn't actually require calendar integration. It just requires a **trigger** + **a contact identifier** + **the synthesis we already do**.

If the user is on the Guidance page, they're already telling us:
- They're prepping for a call (intent)
- Implicitly which project (context)
- Often, who the call is with (if they've selected the contact)

A button is enough. No calendar needed.

## Proposed feature

A `Pre-Brief` button at the top of the Guidance page. When clicked:

1. **Contact selector** appears (or auto-selects if user is in a contact-scoped Guidance view).
2. UpSight pulls everything it knows about that contact:
   - All prior interview/call summaries
   - Quotes attributed to them
   - Signals tagged on their record (objections · buying signals · pain points · feature requests)
   - Themes they've contributed to
   - Open follow-ups or tasks tied to their name
   - Account-level context (their company, segment, role)
3. **Synthesizes into a brief** — *"Last time you spoke, [Sarah at Acme] said X about pricing. There's an open follow-up about Y. The team has heard the same procurement objection from 3 other Acme-segment customers."*
4. **Surfaces at the top of the Guidance page** for review. User can:
   - Edit / annotate
   - Mark items as "raise this in the call"
   - Dismiss / collapse

**Critical UX detail:** The Pre-brief **enhances** the Guidance prompts; it doesn't replace them. The user still sees their research goal prompts. The brief sits *above* them, contextualizing the call before it starts.

## Why this beats the calendar-triggered version (for v1)

| Calendar-triggered | Manual button |
|---|---|
| Requires calendar integration P0 to be solved | No calendar dependency |
| Generates briefs whether the user wants them or not | User-triggered = always wanted |
| Risks generating a brief at the wrong time / wrong contact | User picks the contact = perfect targeting |
| Hard to debug failures (was the calendar event detected?) | Click → result, simple |
| Brand brief P1 critique applies (overpromise on un-shipped capability) | Ships honest, ships now |

Calendar-triggered remains the right *long-term* destination — but this is the right *next* step.

## Technical sketch

**Backend:**
- New endpoint: `POST /api/contacts/:id/pre-brief` — synthesizes from existing person profile data + LLM
- Reuses person-profile data model (see `person-intelligence-card-spec.md`)
- Probably ~3–8 seconds latency; show streaming or progress indicator

**Frontend:**
- Button + modal (or inline panel) on the Guidance page
- Contact picker (search-as-you-type from existing contacts)
- Renders structured brief with anchor links to source evidence cards
- "Mark to raise" toggles per item — these become coach prompts during the call

**Data:**
- Pre-brief generation event: `pre_brief_generated` — properties: `contact_id`, `evidence_count`, `theme_count`, `time_to_generate_ms`
- Pre-brief used event: `pre_brief_used_in_call` — when an item marked-to-raise gets a `guidance_item_marked_done` during the subsequent recording

## Activation impact

If this ships, the canonical quickstart adds a Step 3.5:

> **3.5 · Click Pre-brief on the Guidance page**
> Before you join the call, tap Pre-brief and pick the person you're meeting with. UpSight surfaces what it already knows about them — quotes, signals, open follow-ups — so you walk in informed.

Estimated activation lift: meaningful for users on their **second+ call** (when there's prior context to surface). Marginal for users on their first call (nothing for it to pull).

## Out of scope (v1)

- Auto-generation on calendar events (defer to calendar P0)
- Cross-contact aggregation ("everyone you're meeting today") — could be v1.5
- Email/push delivery of the brief — keep it in-product first
- Multi-stakeholder brief (3 people in one call) — defer; 80% of calls are 1:1

## Risks & open questions

| Risk | Mitigation |
|---|---|
| Generated brief is generic / restates obvious info | Quality bar: each brief item must reference at least one specific evidence card. If we can't, don't surface that item. |
| Users don't discover the button | A/B test placement: persistent at top of Guidance · or floating action button on contact pages |
| Latency hurts UX | Streaming / progressive render. Don't block on full generation. |
| Brief contradicts user's own memory | Always link to source. User can verify in 1 click. |

**Open questions:**
1. Should the brief also include account-level context ("Acme is a 200-employee fintech currently scaling pricing")? Or keep it strictly contact-scoped?
2. When does a stale brief expire and regenerate? Per-call? Time-based? On new evidence ingestion?
3. Does this become the foundation for the eventual calendar-triggered version (same endpoint, different trigger)? Probably yes.

## Success metric proposal

**% of recorded calls that have a Pre-brief generated within 1 hour before recording_started.** Target: 30%+ within 60 days of release for users with 3+ prior interviews.

Secondary: `pre_brief_used_in_call` rate — whether the brief actually informed the call. This is the true value signal.

---

## Change Log

| Version | Date | Changes |
|---|---|---|
| v0.1 | 2026-04-27 | Initial concept spec. Validated direction with Rick during quickstart conversation. Captured before calendar P0 gets blocked any longer. |

---

*This is a feature spec, not a commitment. Promote to PRD when product/eng decide to schedule it.*
