# UpSight Customer Intelligence Homepage Prototype

Responsive V4 homepage prototype based on the competitive critique in
`30-strategy/homepage-outside-critical-analysis-2026-07-19.md` and the production copy in
`30-strategy/homepage-wireframe-customer-feedback-2026-07.md`.

V4 applies Fletch PMM positioning discipline and the conversion sequence demonstrated by the
Standard Issue Webflow template without copying either site's identity or inserting unsupported
proof. It names one champion, leads with a familiar category and outcome, gives three reasons to
believe, contrasts the old and new workflows, shows the product, makes the first-value path
concrete, and closes with founder conviction.

## Preview locally

From the repository root:

```bash
python3 -m http.server 4173
```

Then open:

`http://127.0.0.1:4173/40-gtm/assets/homepage/customer-intelligence-2026-07/`

## Production handoff

- Port semantic structure from `index.html` into the deployed site's component system.
- Port `styles.css` using the existing marketing token names where possible.
- Keep the existing multi-conversation Remotion marquee and real product screenshots until stronger
  production artifacts exist.
- Route upload CTAs to `/app/upload` with UTM parameters preserved through authentication.
- Route the assisted-analysis CTA to the current founder booking flow.
- Add analytics events listed in the strategy wireframe before launch.
- Verify the exact privacy and data-retention promise before adding upload reassurance copy.

## What should not change during the first port

- Direct **customer intelligence platform** category language
- Hero point of view: **Know your customers. Not just their feedback.**
- Concrete **Analyze 3 conversations** activation threshold
- Multi-conversation Remotion marquee beside the hero claim as the first product proof
- Five-tool fragmentation expressed as a direct old-way/new-way comparison
- Three clear reasons to believe before the primary and assisted CTAs
- A concrete three-step path from existing conversations to an inspectable answer
- Person-level continuity as the differentiator, not a category the visitor must decode
- Programs/fundraising as a lower-page use case, not the hero audience
- EOS and weekly-meeting language excluded from homepage V1
- No gradients, glow effects, glass cards, stock imagery, fake testimonials, or generic feature-card grids

## Proof and claim boundaries

- The page claims one customer-learning workflow **instead of the handoffs** across five or more
  tools. It does not claim complete feature-for-feature replacement of every adjacent category.
- The marquee source is
  `40-gtm/assets/video/upsight-conversational-intelligence/05-remotion/src/compositions/StreamingMarquee.tsx`.
- Before launch, verify that the product activation can visibly build a profile and cross-conversation
  pattern from the three uploaded inputs.
- Do not add a logo wall, integration grid, migration-time promise, or quantified outcomes until
  each can be supported with real evidence.
