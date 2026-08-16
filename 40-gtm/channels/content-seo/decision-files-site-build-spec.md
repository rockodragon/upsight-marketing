# Build spec — thedecisionfiles.com

**For:** a coding agent revising the site and the report template.
**Current state:** one sample at `decision-files.pages.dev/#b2b-sales`. Section anchors on a single page, no masthead, no bio, no methodology note.
**Reference:** visual system → https://claude.ai/code/artifact/47003a7e-6993-4d77-97ac-df83943952ad

---

## What this site is

An independent research publication about how buyers actually make hard decisions. One
decision per file: the situation, what was at stake, how the person decided, and how it
turned out. Primary interviews.

Readers are skeptical practitioners — CISOs and security architects. They will decide in
about eight seconds whether this is research or marketing. Build for that reader.

**Not** a startup landing page. No hero gradients, no feature grid, no "Get started" CTA.

---

## 1. Structural fixes (highest priority)

| Fix | Why |
|---|---|
| **One URL per file** — `/files/<slug>`, not `#anchor` on a shared page | Anchors can't be indexed as separate works or cited individually. This defeats the entire discovery rationale. |
| **Move off `pages.dev`** to thedecisionfiles.com | A preview domain in a cold email is a credibility hit at the worst moment. |
| **`Article` structured data** per file | author, datePublished, headline, description, and the subject's organization. This is how a file becomes machine-citable. |
| **Meta description + OG tags** per file | Every file gets shared in a DM before it gets read. |
| **RSS feed** | Practitioners still use them; costs nothing. |

## 2. Pages required

**`/` — index.** Latest files, most recent first. Each row: title, subject descriptor
("a CISO at a public fintech"), date, and the one-line decision principle. No marketing copy
above the list. A short standfirst is fine; a hero is not.

**`/files/<slug>` — a file.** Template in §4.

**`/about` — the credential.** Prominent, not buried:
> Rick Moy founded and ran an empirical product-effectiveness testing firm from 2007 —
> independent testing sold into the Fortune 500, nearly acquired by Gartner.

Then the masthead (contributing analysts, with affiliations disclosed) once names exist.

**`/method` — the methodology note.** How subjects are chosen, how interviews run, how quotes
are approved, the anonymity tiers, and this, stated plainly:
> The Decision Files is published by UpSight. No sponsor or vendor sees a file before
> publication, and none has input on subject selection, questions, or findings.

### Email capture — earned, not interruptive

**No popups. No timed modals. No exit-intent. No scroll-triggered anything.** The audience is
skeptical practitioners; an interstitial on a research site reads as marketing and costs more
trust than the address is worth.

**The ask fires only when someone tries to do something they can't yet do.** That way the
person asking has already told you they want it.

| Content | Access |
|---|---|
| Individual Decision Files — brief, diagram, full narrative | **Free. No wall, ever.** These build the audience and get cited. |
| Quarterly reports (three files synthesised) | **Gated.** Click "Read the report" → inline email form appears in place. |
| Archive older than the current quarter | **Gated**, same trigger. |

**How the gate behaves:**
- Inline on the page, in the flow — never an overlay.
- States plainly what they get and what happens next: *"The Q4 report — 30 interviews, one PDF.
  We email a new file when it publishes, about twice a month. Nothing else."*
- One field. Address only.
- After submit, deliver immediately on the same page. No confirmation-email round trip before
  they see the thing they asked for.
- Remember them. A returning reader never sees the gate twice.

A quiet one-line subscribe at the foot of a file is fine — *"Get the next file by email"* — as
long as nothing fires on its own.

## 3. Content changes to the existing sample

The current piece ("When the Loudest Customer Story Wins the Room") is a synthesis of an HBR
article, not a Decision File — no person, no date, no stakes, no quotes, no outcome.

**Keep it, relabel it.** Move to `/commentary/<slug>` with a distinct template and a visible
"Commentary" label. It demonstrates the house voice. It is not evidence, and the file series
cannot open with it.

## 4. File template — ten blocks, in order

1. **Title** — the decision, not the theme. *"Why a fintech CISO killed a signed SIEM contract three weeks in."*
2. **30-second brief** — a bordered block, not prose: Who · The decision · What was at stake · What they chose · **What happened** · Core lesson. Machine-readable; put it high in the HTML since it's what search and models will lift.
3. **The diagram** (§5) — directly under the brief.
4. **The situation** — their words. Opens with a quote where possible.
5. **How they decided** — what they checked, who they consulted, what they skipped. The most-quoted section.
6. **What they'd do differently**
7. **Signals that mattered**
8. **Unknowns** — what one case can't tell you.
9. **Decision principle** — pull-quote styled; written to travel alone.
10. **Analyst counterpoint** — the strongest case against the subject's decision.
11. **Methodology block** — footer: how this subject was found, anonymity tier used, quote approval, any contributor recusal.

**Pull-quotes need a source line every time** — name or role descriptor. A quote without
attribution is the thing that makes a practitioner stop trusting the page.

## 5. Visual system — every file gets one diagram

Reference implementation, eight patterns with worked examples:
https://claude.ai/code/artifact/47003a7e-6993-4d77-97ac-df83943952ad

### The eight patterns

| # | Pattern | Use when |
|---|---|---|
| 1 | **Decision timeline** (vertical) | The calendar tells the story — long evaluation, short decision |
| 2 | **Who dropped out, and why** | There was a shortlist |
| 3 | **What we said mattered vs. what actually mattered** | **The default.** Any decision with a scorecard |
| 4 | **Feature matrix, with the truth on it** | Crowded categories where everyone looks the same on paper. The familiar grid, with the row that actually decided it highlighted. |
| 5 | **What the money actually buys** | Any decision where the cheapest option didn't win. Cost split by the problem each pound solves — not TCO. |
| 6 | **What we cut, what we kept** | Consolidating tools, merging two companies' stacks |
| 8 | **What we skipped** | Emergencies — breach, outage, deadline, vendor goes away |

### The language rule — this is the one that matters most

**Write what the buyer would say out loud.** Every label, every cell, every caption.

| Never write | Write |
|---|---|
| "Eliminated on cost criteria" | "Too expensive" |
| "Failed adoption threshold" | "Nobody used it" |
| "Separated nobody" | "All four had it" |
| "Cut at gate 2" | "Cut — our analysts stopped using it" |
| "Did not differentiate the remaining vendors" | "The other three cost about the same" |
| "Support model" | "Who we call at 3am" |

**If a label needs a glossary, it's the wrong label.** Analyst jargon is the fastest way to
lose a practitioner — they read it as someone who has never done the job.

### Icons and colour — four states, always the same meaning

Colour alone never carries meaning. Every state has an icon *and* a colour, and they mean the
same thing on every diagram in every file.

| Icon | Colour | Meaning |
|---|---|---|
| Tick | Neutral grey | Everyone passed — it decided nothing |
| Minus | Red | Knocked someone out |
| Star | Amber | **This decided it** |
| Tick | Blue | Chosen |

Inline SVG glyphs, not emoji, not icon fonts. A legend appears once at the top of a file, not
repeated per diagram.

### The feature matrix uses four states, not two

Binary yes/no is too coarse — most "yes" answers in a real evaluation are "yes, with a caveat."

| Mark | Meaning | Score |
|---|---|---|
| Large tick (blue) | Yes | 1 |
| Half-filled circle | Partly — note the limit in the tooltip | ½ |
| Circle with $ | Only if we pay more — tier upgrade or add-on | ½ |
| Small minus (red) | No | 0 |
| Star (amber) | Yes, **and this is what decided it** | 1 |

**Positives are drawn larger than negatives** — 22px ticks against 11px minuses. The eye should
count the yeses when scanning a column, and a wall of small red dashes should read as absence
rather than shout.

**Every matrix carries a score row**: sum per vendor plus a proportional bar, so "who has more"
is answered without counting cells. Expect the scores to land within a point or two of each
other — that near-tie is usually the finding, because it's why feature grids rarely decide
anything.

### Gen UI widgets — required

**Every pattern ships as a registered gen-ui widget in the UpSight app, not as one-off markup
on the website.** The website renders the same widgets. One implementation, two surfaces.

Requirements for each:
- Registered in the app's gen-ui registry under the widget name below.
- A typed props schema, so the conversation lens can emit a widget by returning structured data
  rather than HTML.
- Renders from data only — no free text baked into the component.
- Degrades to an accessible table when data is incomplete.
- Light and dark via tokens. Contrast per CLAUDE.md house rules.
- `role="img"` plus an `aria-label` generated from the finding.

| Widget name | Pattern | Core props |
|---|---|---|
| `DecisionTimeline` | 01 | `events[]` {month, title, detail, kind: trigger \| span \| pivot \| step \| outcome}, `source` |
| `DropoutList` | 02 | `candidates[]` {name, verdict, plainReason, detail, state}, `source` |
| `StatedVsActual` | 03 | `criteria[]` {label, weight \| "not on the list", outcome, state}, `source` |
| `FeatureMatrix` | 04 | `vendors[]`, `rows[]` {label, cells[] {state: full \| partial \| paid \| none \| key, note}}, `showScores`, `source` |
| `CostByProblem` | 05 | `vendors[]`, `lines[]` {problem, amounts[], note, highlight}, `total[]`, `source` |
| `CutAndKept` | 06 | `groups[]` {label, count, state, reason}, `source` |
| `CostCrossover` | 07 | `series[]` {label, points[], kind: plan \| actual \| alternative}, `crossover` {x, claim, caveat}, `source` |
| `WhatWeSkipped` | 08 | `steps[]` {step, whatHappened, state, consequence}, `source` |

**Shared props on all eight:**
- `source` — **required.** {whose, howObtained, illustrative: bool}. Renders on the figure.
  A widget with no source must not render.
- `finding` — the one-sentence point. Renders as the caption below the figure and feeds the
  `aria-label`.
- `theme` — inherited; never hard-coded.

**Shared state vocabulary** across every widget, so the icon legend means the same thing
everywhere: `pass` (everyone had it, decided nothing) · `out` (knocked someone out) ·
`key` (this decided it) · `win` (chosen) · plus `partial` and `paid` in `FeatureMatrix`.

### Canonical decision types → pattern

| Decision | Pattern | Why |
|---|---|---|
| Replacing a vendor | Who dropped out, and why | The story is who got thrown out |
| Renew or leave | Said vs. actual | The cost of moving usually beats the scorecard |
| Head-to-head bake-off | Feature matrix + said vs. actual | Everyone ticks the same boxes; one row decides |
| Consolidating tools | What we cut, what we kept | The survivors carry the finding |
| Merging two companies' stacks | What we cut, what we kept | Two of everything, pick one |
| Build or buy | Cost crossover | It rests on a break-even year |
| In-house or outsource | Cost crossover | Same shape, staffing instead of engineering |
| New need — remote work, hybrid, AI | Timeline | When the need appeared vs. when anyone moved |
| Emergency replacement | What we skipped | No time means the omissions are the story |
| Switching something off | Timeline | What finally triggered the decision to stop |
| Expanding an existing vendor | Said vs. actual | Usually decided on habit nobody scored |

Timeline is **vertical, top-down** — it holds fifteen rows as easily as five and fits a page.

### Build rules

- Inline SVG or HTML/CSS. No chart libraries, no external requests.
- **Contrast is non-negotiable.** WCAG AA (4.5:1) for all text including captions, axis labels
  and SVG fills. No pale greys on light grounds, no dim greys on dark. See CLAUDE.md house rules.
- **Every figure states its source**, on the figure: whose data, where it came from, and whether
  it's real or illustrative.
- **No undefined symbols.** A dash or blank cell is a defect — write "not scored". Vague phrases
  like "never came up again" are defects — write "scored once, never discussed after round one".
- Light and dark. Tokens on `:root`; redefined under `@media (prefers-color-scheme: dark)`
  guarded as `:root:not([data-theme="light"])`, and again under `:root[data-theme="dark"]`.
- Wrap in `overflow-x: auto`. The page body never scrolls sideways.
- `role="img"` and an `aria-label` describing the **finding**, not the shape.

**Not a mind map.** Mind maps show relationships without direction or time. A decision has
both — it happened in an order, and one thing caused the outcome.

## 5b. Conversation lens — prompt guidance

For the UpSight lens that generates a draft file from an interview transcript. It must pick the
pattern, then extract only the fields that pattern needs.

**Step 1 — classify the decision.** From the transcript, identify which canonical type it is
(table above). If two apply, prefer the one matching what the subject spent the most time
describing. If none apply, default to *stated vs. actual*.

**Step 2 — check the pattern is supported by the transcript.** Each needs specific evidence.
If it isn't there, say so and fall back — do not invent it.

| Pattern | Requires from the transcript |
|---|---|
| Decision timeline | At least 3 dated or sequenced events, and an identifiable tipping point |
| Elimination map | ≥2 named or describable candidates and a stated reason each was cut |
| Stated vs. actual | An explicit list of criteria (formal or informal) **and** what actually decided it |
| Consolidation map | A before count and an after count, plus what survived and why |
| Cost crossover | Two cost paths over time and a stated crossover assumption |
| Feature matrix | Named capabilities and a per-vendor verdict on each, plus which row decided it |
| What the money actually buys | Prices per option **and** the buyer's own allocation of cost to problems |
| What got skipped | A normal process the subject can describe, and named steps that were cut |

**Step 3 — extract, don't infer.** Every cell in a diagram traces to something the subject
actually said. Where a value is reconstructed rather than quoted, mark it. Where it's unknown,
write "not established in the interview" — never fill a gap with a plausible number.

**Step 4 — write the source line.** Whose data, how it was obtained, real or illustrative.

**Questions to add to the interview guide so the lens has what it needs:**
- *"Did you have a scorecard or a written list of criteria? Who built it, and when — before or after you started talking to vendors?"* → feeds pattern 3
- *"Which of those criteria actually separated the finalists?"* → the right-hand column
- *"What ended up mattering that wasn't on the list at all?"* → the finding
- *"Walk me through who was on the shortlist and where each one dropped out."* → pattern 2
- *"Roughly when did each stage happen?"* → pattern 1
- *"What was in your normal process that you didn't get to do this time?"* → pattern 8
- *"Where any of them a partial yes — worked, but with a limit? Or only if you paid more?"* → the four-state matrix
- *"You paid more than the cheapest option. What did that extra money actually buy you?"* → pattern 5, and it's the sharpest money question in the guide

**The prompt's closing instruction:** *state the finding the diagram is meant to carry in one
sentence before drawing it. If you cannot state it, the diagram has nothing to show — return no
diagram rather than a decorative one.*

## 6. Design direction

Utilitarian and dense. The credibility comes from restraint.

- Serious neutral ground, a single accent, and one semantic colour reserved for "the thing
  that tipped it." Don't spend colour anywhere else.
- Body text near 65 characters. Real type scale.
- A monospace face for labels, dates, and data reads as native to this audience — use it for
  eyebrows and captions, not body copy.
- Every file must be readable in both themes. Check no colour is declared only inside a media
  or `[data-theme]` block.
- No stock photography. No illustrations of people. Subject portraits only where a named
  subject has agreed.

## 7. Definition of done

- [ ] Three real files live, each at its own URL with its own diagram
- [ ] `/about` carries the founder credential above the fold
- [ ] `/method` live, including the UpSight disclosure
- [ ] Existing sample relabelled as commentary
- [ ] `Article` schema + OG tags on every file
- [ ] Custom domain, not pages.dev
- [ ] Newsletter capture on index and every file
- [ ] Both themes verified on every page
- [ ] No horizontal scroll at 375px

**Blocks all cold outreach.** Every recruit checks the site before replying, and a first email
to a given person is unrepeatable.
