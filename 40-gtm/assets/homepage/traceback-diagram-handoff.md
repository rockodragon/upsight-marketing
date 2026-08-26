# Handoff — "The Traceback" hero animation (Remotion)

> For: an agent or motion designer building the hero animation for the getupsight.com
> rebuild. You should not need to read anything else to build this.
> Status: **ready to build.** Input list is audit-verified as of 2026-08-25 against
> UpSight `feat/lens-epic-complete` @ `bbbb6b405`.
> Load the `remotion-best-practices` skill before writing code — Remotion's APIs
> move, and `@remotion/media` in particular has changed.

## 0. The one rule

**This diagram is a claim, not decor.** Every arrow asserts that UpSight ingests
that thing. The product team spent a week removing graphics that asserted data
they didn't have — a fixed gauge that drew "two of five bars lit" on every sales
scorecard regardless of the actual deal. Animating an input we don't ingest is
the same defect pointed at prospects instead of users.

The input list in §3 is not a wish list. It is what the code does. **Do not add
to it.** If a stakeholder asks for a logo that isn't there, the answer is to ship
the integration, not the pixel.

## 1. Concept: the traceback, not the funnel

The obvious version of this — inputs pour into a glowing box, outputs come out —
is an ETL diagram. Every data company has one, and it says nothing, because the
interesting part is hidden inside the box.

**The differentiator is the mechanism, so the mechanism must be visible:**

1. A note-taker reads a call **once** and files **one** summary. UpSight reads
   the same recording through **named lenses** and returns several different
   structured answers.
2. Every claim it returns **opens to the moment someone said it.**

So the center is never a black box. The named lenses are legible, and the payoff
shot is a claim tracing *backwards* to its source timestamp. That traceback line
is the entire product argument drawn in one gesture.

## 2. The three beats — ~14s loop

**Beat 1 — the pile (0:00–0:04).** A small number of varied source artifacts
slide into a queue. Variety matters more than tile uniformity: a waveform, a
timestamped transcript block, a meeting card. They should read as *stuff you
already have*, slightly messy, not as pristine product UI.

**Beat 2 — the read (0:04–0:09).** ONE artifact passes under named lens frames.
The lens names are legible, set in mono: `BANT`, `DISCOVERY`, `JTBD`. Each frame
it passes emits a structured card. The point being made: same call in, several
different answers out. Do not animate all inputs through all lenses — one
artifact, several reads, is the clearer statement and the true one.

**Beat 3 — the traceback (0:09–0:14).** A single claim on one output card lights
up, and a thin line traces *backwards* from that claim to a specific timestamp on
the source artifact. Hold on the completed line. This is the money shot; give it
the most time.

**Reduced motion:** render the final frame of beat 3 as a static image, traceback
line already drawn. Not a paused first frame — the *last* one, because it carries
the whole argument. Respect `prefers-reduced-motion` at the component level.

## 3. Inputs — audit-verified, use exactly these

### Safe. Use freely.

| input | why it's safe |
|---|---|
| **Recorded calls** | Uploaded audio/video, Recall.ai desktop capture, kiosk. Full BAML evidence extraction, lenses fire automatically. |
| **Transcripts** | `.vtt`, `.srt`, `.txt`, `.md`, `.csv`, `.tsv`, Fireflies `.json`, and text PDFs all parse. Lenses fire automatically. |
| **Meetings** | Via Recall.ai or a notetaker webhook (Fireflies, Otter). Same path as calls. |

### Cut or qualify. Do not animate as a plain arrow.

| input | the problem |
|---|---|
| **Surveys** | **Text/form survey responses cannot produce a lens at all.** Their evidence rows carry `research_link_response_id` with `interview_id` NULL, and lens application hard-requires an interview. Only **voice/chat** surveys (the AI interviewer) reach the outputs. An unqualified "surveys" arrow is the single most structurally false claim available. |
| **Emails** | Genuinely works end to end — `.mbox` becomes a conversation with full evidence and automatic lenses. But it is `.mbox` only, requires a Google Takeout export, and the entry point is gated behind the `ffExperimental` PostHog flag. No live inbox reader exists. **Only animate this once the flag is flipped.** |
| **Notes** | Notes become conversations, but creation triggers nothing — a user must click "Index Now." Six places in the app create notes and none of them index. |

### Forbidden. These do not exist.

**Gong, Chorus, Grain, Zoom, Google Meet, Teams, Salesforce, HubSpot, YouTube,
`.docx`, calendar events.** Zero integration code for any of them.

**Gong is the dangerous one.** The homepage already positions against it, so a
Gong logo on the inbound side is the most damaging possible arrow — the one
claim a prospect is most likely to test in their first five minutes. A Gong
transcript export might parse through the generic normalizer, but no
Gong-shaped parser and no test fixture exists, so this is **unverified**.
Treat as absent.

## 4. Outputs — safe

`JTBD`, `BANT`, decision frameworks / decision-file cards, stakeholder matrix.
All reachable from the safe inputs.

One caveat that does not block the animation but should shape how many outputs
you show: the richest widget cards come from block-enabled lenses, which is
**4 of 17 templates**. Show three named outputs, not seven. Three get read.

## 5. Brand

Governed entirely by the UpSight token set — `upsight-marketing/30-strategy/brand-style-guide.md`.
Do **not** import thedecisionfiles.com's grammar (single-weight ink, file-card
anatomy, dashed rules). That is a separate brand; the only place it appears on
getupsight.com is inside a framed exhibit elsewhere on the page.

- Ground `#050508`, alternating band `#0A0A10`
- Text `#EEEEF2`, dims at 0.7 / 0.6 alpha
- **Amber `#F59E0B`** — CTAs and *one* emphasis. On UpSight amber means **act**.
- **Sky `#38BDF8`** — secondary emphasis and **the traceback line**. Citation
  affordances are sky, consistently.
- Type: **Inter** (hierarchy through weight, 300–900). **JetBrains Mono** for
  everything that is evidence metadata — timestamps (`00:14:32`), speaker labels,
  lens names. Mono here is not decoration, it is subject matter.
- Easing: `--ease-confident-glide` only.

The page reads as *evidence under a desk lamp* — a dark archive out of which lit
artifacts surface. The animation should feel like something being **found**, not
something being processed.

## 6. Technical

- Remotion, React/TypeScript. Animate with `interpolate`/`spring` over
  `useCurrentFrame()`. Use `calculateMetadata` if duration needs to flex.
- Hero-adjacent. This is the page's **only** motion asset — the existing founder
  portrait video is being cut so these don't compete.
- Deliverable: MP4 (H.264) + WebM, transparent-ready if feasible, plus the static
  reduced-motion frame as PNG/SVG.
- Target under 2 MB for the looping web asset. It sits above the fold; the heavy
  asset on this page is the embedded decision file below it.
- Loop seamlessly. Beat 3's hold should resolve into beat 1 without a visible cut.
- **Input tiles must be config-driven**, a single array at the top of the
  composition — so when the email flag flips or a Gong parser ships, the change
  is one line, not a re-render of hand-placed art. No grayed-out "coming soon"
  tiles: a grayed lie is still a lie with an asterisk.

## 7. Acceptance

- [ ] A viewer can name at least two distinct lenses from watching it once
- [ ] The traceback line is unmistakably going *backwards*, source-ward
- [ ] No forbidden logo or input appears in any frame
- [ ] Reduced-motion renders the completed traceback, not a blank first frame
- [ ] Every input tile traces to a row in §3 marked safe
- [ ] Loops without a visible seam
