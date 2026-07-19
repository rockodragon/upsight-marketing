# Conversational Surveys × Messaging House — Alignment (support / contradict / expand)

> Reconciles the conversational / AI-interviewer survey design (product repo:
> `UpSight/docs/10-architecture/survey-system.md`) against the positioning canon
> (`messaging-house.md`, `positioning-brief.md`, `messaging.md`). Decision record
> from the 2026-07-19 working session. **The canon wins on any conflict** — this
> doc references it, it does not re-own it.

## TL;DR resolution

**"Every conversation, every input" is a _later-not-never_ claim.** We are building
email + AI-notes ingestion, but it is not our strength today, so we do **not lead**
with the broad-input story. We lead with the established wedge (below) and treat
conversational surveys as **proof under the "Grounded in evidence" pillar** plus a
differentiated _input_ — never a headline. This matches the canon, which already
says: *"Do not lead the homepage with… survey software… conversation intelligence.
Those are supporting contexts, not the first frame."* (`messaging-house.md` §Category)
and *"Not a broad homepage story about 'calls, emails, notes, surveys, and everything
else.'"* (`messaging.md`).

## What we lead with (unchanged — do not dilute)

- **Core promise:** *Your weekly leadership meeting, already prepared.*
- **Three pillars:** Automatically prepared · **Grounded in evidence** · Gets smarter every week.
- **Proof lines:** *Every issue has evidence. Every action has an owner. Every meeting starts ready.*
- **Category to lead:** leadership / operating meeting preparation — **not** "survey tool," **not** "conversation intelligence."
- **Moat (hard to copy):** people intelligence · evidence traceability · cross-source synthesis · role-aware analysis · action integration · **authoring-time question coaching** (`positioning-brief.md` §Defensibility).

## SUPPORT — where the conversational-survey design *delivers* the canon

- **Pillar 2, "Grounded in evidence":** conversational surveys become quote-level,
  clip-backed evidence (verbatim transcript → BAML → `[start_ms, end_ms]` clip),
  the same standard as AI interviews and meeting capture. Directly powers *"receipts
  behind recommendations"* and *"click any theme → see the exact quotes."* **Note:
  this is the P0 gap we're closing** — today conversational surveys store a dumb
  Q/A blob, so the pillar's promise is not yet true for this input. Positioning
  integrity depends on shipping it.
- **The "authoring-time question coaching" moat:** the survey/ask builder is exactly
  where this unique differentiator lives (flagging leading / double-barreled / biased
  questions with one-click fixes). The conversational (AI-interviewer) mode extends
  it — the agent adapts questions live. No competitor (Qualtrics / SurveyMonkey /
  Typeform) does this.
- **"One place, not five tools" / cross-source synthesis:** survey answers land in
  the same evidence + people graph as calls, notes, kiosk, and interviews — one
  canonical question resolved across every door.
- **"Human + AI, not AI-only":** the two-mode ask (fill it out yourself vs. talk it
  through with Uppy) is a literal instance of *"choose voice agent, guided interview,
  or just upload recordings — your workflow, not ours."*

## CONTRADICT → RESOLVED

- **Tension:** the product framing *"every conversation → structured + grounded"*
  reads as the broad-input homepage story the canon forbids.
- **Resolution (2026-07-19):** later-not-never. Broad-input is a roadmap truth
  (email + AI-notes ingestion are being built) but is surfaced only as supporting
  proof under "Grounded in evidence," never as the first frame. Product/architecture
  docs may use "every conversation" internally; **marketing does not headline it**
  until it is a demonstrated strength.

## EXPAND — what conversational surveys *add* to the moat (net-new ammo)

- **"Advanced qual AND quant," made concrete:** one canonical question (one gist),
  sliced by **channel × language × segment**, with a **playable clip behind every
  number**. No survey tool can pivot one question across channel and language while
  keeping the receipt — their "question" is a string trapped inside one survey
  instance. No interview / notetaker tool gives the percentage — a transcript isn't a
  scorecard. This is a sharper proof of *"Grounded, Not Generated"* than we've had.
  (Worked example: `UpSight/docs/10-architecture/survey-system.md` → *Canonical
  example (marketing-ready)*.)
- **Multilingual field research:** the gist/variant model lets one question be asked
  in Spanish / Tagalog / Vietnamese / etc. and still roll into one column — enabling
  community and civic research competitors can't touch. **Landing-page** story, not
  homepage.
- **Competitive line to add** (vs Qualtrics / Typeform, extending the table in
  `positioning-brief.md` §Competitive Positioning): *"Their question is a string
  trapped inside one survey. Ours is a canonical gist you can pivot across every
  channel and language — with the receipt."*

## Where this lives (DRY)

- **Canon owns positioning.** When the two EXPAND lines above are adopted, fold them
  into `messaging-house.md` (feature mapping / proof) and `positioning-brief.md`
  (moat + competitive table) — do not let them live only here.
- **Product doc references, never re-owns.** `UpSight/docs/10-architecture/survey-system.md`
  keeps the *worked example* and should link back here for the positioning rationale.

---

_Open follow-ups:_ (1) adopt the two EXPAND lines into `messaging-house.md` /
`positioning-brief.md` proper. (2) add the reciprocal cross-link in
`survey-system.md`. (3) revisit the "every conversation" lead the moment email +
AI-notes ingestion is a demonstrated strength (promote from later to now).
