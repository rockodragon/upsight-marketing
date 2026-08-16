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

**Newsletter capture** on the index and at the foot of every file. One field, no modal.

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

Reference implementation with worked examples:
https://claude.ai/code/artifact/47003a7e-6993-4d77-97ac-df83943952ad

Three formats. Pick the one that fits the decision; don't invent a fourth.

- **Decision timeline** — where time was spent vs. where the call was made. Use when the gap between those is the story.
- **Elimination map** — the shortlist and where each option died. Use when disqualifiers carry the finding.
- **Stated vs. actual** — scorecard weight against what actually decided it. **The default.** Use unless another fits better.

Build rules:
- Inline SVG or HTML/CSS. No chart libraries, no external requests.
- Must work in light and dark. Define colors as tokens on `:root`; redefine under both
  `@media (prefers-color-scheme: dark)` (guarded `:root:not([data-theme="light"])`) and
  `:root[data-theme="dark"]`.
- Wrap in `overflow-x: auto`. Never let the page body scroll sideways.
- Real `role="img"` and `aria-label` describing the finding, not the shape.
- Any illustrative or composite data must be labelled as such, on the diagram.

**Not a mind map.** Mind maps show relationships without direction or time. A decision has
both — it happened in an order, and one thing caused the outcome.

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
