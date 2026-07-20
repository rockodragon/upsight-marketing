# Remotion brief — CiV2Funnel (homepage-fluid)

## Why
The boxed dark marquee reads as “UI inside a UI” on the page. Customer media should feel first-class, not nested in a heavy dark wrapper. Prefer a transparent (or near-transparent) Remotion layer that sits on the site background.

## Composition
- **Id:** `CiV2Funnel`
- **Keep:** `CiV2` (checkpointed media-first scroll) for comparison
- **Format:** 1920×1080 · 30fps · ~12–14s
- **Background:** transparent (`AbsoluteFill` with no fill / `rgba(0,0,0,0)`). Render with alpha (WebM VP9 or ProRes 4444).

## Motion thesis (funnel, not marquee)
1. **Deal** — 3–4 evidence pieces throw down like cards (poker stack): meeting video, sales note, video response, call. Large media, minimal chrome, source chip only.
2. **Converge** — stack compresses / slides toward center as UpSight locks the pattern (center owns brand).
3. **Act** — three outputs fan out on the right (or below on mobile web layout): product priority, stakeholder reel, story reel.
4. **Hold** — amber CTA; no bottom caption clutter.

Direction can read **top→bottom funnel** (evidence falls in, pattern, then outputs) so the homepage scroll continues naturally after the hero.

## Anti-patterns
- Nested card-in-card dark panels
- Dense slash-console labels
- Tiny evidence thumbnails
- Opaque black stage that fights the page

## Render (alpha)
```bash
cd 05-remotion
npx remotion render src/index.ts CiV2Funnel \
  --codec=vp9 --image-format=png \
  --pixel-format=yuva420p \
  --output=out/ci-v2-funnel.webm
```

## Homepage copy (stronger line)
Prefer urgency / zero-reset over soft memory language:
- **Strong:** “Stop starting from zero every week.” / “Stop starting from ground zero.”
- **Weaker:** “Customer feedback that remembers who it’s talking to.”

Pair with the visual loop: messy voice → living pattern → ready to act.
EOF
