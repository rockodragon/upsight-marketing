# UpSight homepage — "the call graveyard" (2026-08)

Rebuild of getupsight.com's homepage on the call-graveyard positioning. Ships alongside
`../customer-intelligence-2026-07/`, which is left intact for comparison and is **not** the
source of anything here beyond token values and file conventions.

## Preview locally

From the repository root:

```bash
python3 -m http.server 4173
```

Then open:

`http://127.0.0.1:4173/40-gtm/assets/homepage/call-graveyard-2026-08/`

Serve it over HTTP rather than opening `index.html` from disk — the exhibit frame in section 5
is designed around a cross-origin embed and `file://` will not behave like production.

## The argument, in order

Claim → agitation → mechanism → objection → proof → path → conviction → close.

| # | Section | Job |
|---|---|---|
| 1 | Hero | The claim, plus the Traceback animation slot |
| 2 | The graveyard | You already pay to record everything and get nothing back |
| 3 | The lenses | The mechanism: one call, several named reads |
| 4 | The refusal | The objection: it will not make things up |
| 5 | The exhibit | The proof: a real decision file, claims that open |
| 6 | Three steps | The path |
| 7 | Founder | Conviction |
| 8 | Close | Ask |

No announcement bar. No section eyebrows — PRODUCT.md's anti-reference list names
"tiny tracked eyebrows on every section" and the previous page violated it.

## Visual system

Layout concept: **evidence under the desk lamp** — a dark archive out of which lit artifacts
surface. Structure is carried by hairline rules and alignment, never by card grids. There is no
three-across icon-card grid anywhere on the page.

Every colour, face, easing curve and radius comes from `30-strategy/brand-style-guide.md`:

- Ground `#050508`; alternating band `#0a0a10`; text `#eeeef2` with dims at 0.7 / 0.6 alpha
- **Amber `#f59e0b`** — CTAs, and exactly one emphasised word in the H1: **"answered"**.
  Nothing else on the page is amber.
- **Sky `#38bdf8`** — citation affordances only: the single lit timestamp in the graveyard wall,
  the rule beside the refusal pull-quote, the citation chip on the exhibit frame.
- **Inter** 300–900 for display and body; **JetBrains Mono** for evidence metadata only —
  timestamps, lens names, the refusal pull-quote, the exhibit label, the step numbers.
  No third face.
- 4px radius (`--radius-edge`). The global `--radius: 0.625rem` token is present for fidelity
  but marketing opts sharper, which the style guide explicitly permits.
- Motion uses `--ease-confident-glide` only. CTAs glow amber on hover, the citation chip glows
  sky, and nothing animates on scroll.

### Values not in the token set

Two, both deliberate, both commented in `styles.css`:

- **Layout scale** (`--page-pad`, `--section-pad`, `--rule`, `--rule-strong`, `--rule-faint`,
  `--surface-lift`, `--content-max`) — spacing and hairline derivations, following the same
  convention as the previous build.
- **`--exhibit-ground: #161826`** — this is *thedecisionfiles.com's own* ground colour, quoted.
  It backs the exhibit frame so the document does not flash against an UpSight surface. It is
  not an UpSight colour and must not be reused elsewhere.

## Accessibility

- Skip link, one `h1`, ordered heading levels, named landmarks
- Global `:focus-visible` ring in amber at 3px offset
- Browser surfaces themed from the palette: selection, scrollbar track and thumb, focus ring,
  underline offset, tabular numerals on all mono figures, `color-scheme: dark`
- `prefers-reduced-motion` disables transitions and, once the hero animation lands, swaps the
  video for the completed traceback still
- No horizontal overflow at 390px; verified at 390, 768 and 1280

## Two pending assets

Both are **reserved, not faked**. They share one placeholder grammar — dashed frame, mono note —
so the page has a single language for "not here yet."

### 1. Hero animation — "The Traceback"

`.diagram-slot` holds a **16:9** placeholder in the hero's right column. The spec is
`../traceback-diagram-handoff.md`; do not design from this page.

The handoff does not state pixel dimensions, so **16:9 was inferred** from Remotion's default
composition and from beat 3 needing horizontal room for the traceback line to travel
source-ward. Confirm before rendering.

`index.html` carries the exact `<video>` markup to drop in, and `styles.css` already has
`.traceback` / `.traceback-still` rules plus the reduced-motion swap. Shipping it is a paste,
not a rebuild.

### 2. Exhibit embed — BLOCKED, one-line fix elsewhere

Section 5 was built to embed the real published decision file
`https://thedecisionfiles.com/case/deciding-on-a-siem-replacement`. **That page frames fine from
our origin** — no `X-Frame-Options`, no `frame-ancestors` on that route. It was wired, loaded,
and verified.

What is blocked is the **interactive report nested inside it**,
`https://upsight-staging.fly.dev/s/bf3VlTLtHBKp`, which sends:

```
Content-Security-Policy: frame-ancestors 'self'
  https://thedecisionfiles.com https://www.thedecisionfiles.com
  https://*.decision-files.pages.dev
```

`frame-ancestors` is evaluated against the **whole** ancestor chain, so nesting it under
getupsight.com blocks it. That report is the only part that actually does *click a conclusion,
land on the transcript* — the surrounding case page is static and says so itself. Shipping the
embed today would put a dead panel directly under a heading promising the opposite, which is the
same defect as the fabricated UI this rebuild exists to remove.

**Unblock:** add `https://getupsight.com` (and whatever origin previews the marketing site) to
that report host's `frame-ancestors` directive. Then replace the `.pending-note` block in
`.exhibit-stage` with the iframe already written in the comment above it. The frame, strip,
caption and footprint are already sized for it; nothing else changes.

Until then the frame reserves the exact space, states plainly that the embed is pending, and the
citation chip in the strip sends the visitor to the real file at the source.

## Claims to verify before launch

- **"Seventeen lens templates ship today"** (section 3) — taken from
  `../traceback-diagram-handoff.md` §4, which reports 4 of 17 templates as block-enabled,
  audit-verified against `feat/lens-epic-complete @ bbbb6b405` on 2026-08-25. Re-verify the
  count against `main` before this goes live; it is the only number on the page.
- The four named lenses — BANT, Discovery, JTBD, Decision — come from the supplied copy and from
  the handoff's safe-outputs list. The reads beside them ("Budget, authority, need, timing", and
  so on) are plain-language expansions of the lens names, not product output.
- Section 3's copy says *"Same call, five different answers"* while naming four lenses. Shipped
  as written, per brief. The `+ MORE` row resolves the count visually without inventing a fifth
  named lens.

## What is deliberately absent

Carried over from the previous page's own README, and extended:

- **No fabricated product UI.** Nothing on this page depicts product output that isn't real.
  The facet grid and the Do next / Validate / Share / Park action board are gone.
- No old-way/new-way X-vs-checkmark grid, no "connected context fabric"
- No logo marquee, no "Trusted by teams who love their customers", no accelerator name-drop
- No compounding bar-chart figure, no "Same truth, every room" card grid
- No hero portrait video — the page ships one motion asset, not two
- No "See what you've been missing"
- No gradients as decoration, no glass, no icon-card grids, no stock imagery, no testimonials

## Production handoff

- Port semantic structure and token names into the deployed component system
- Route `?intent=analyze-3-conversations` CTAs to sign-up with UTM preserved through auth
- Route the working-session CTA to the current founder booking flow
- Add the analytics events (`data-placement` attributes are already on every CTA)
- Do not add a logo wall, integration grid, or quantified outcome until each has real evidence
