# Talking heads — source script

**Audience:** to be embedded in other assets
**Format:** 1920×1080 landscape · 10s · 30fps
**Visual type:** Real UpSight interview/survey clips only — no stock footage

---

## Concept

Multiple people talking (real recordings) flow across screen like a film reel, then grow into focus.
Text-bubble callouts surface the **theme** and **key quote** UpSight extracted — showing conversational intelligence in action.

## Scene beats (10s)

| Time | Visual | Callout |
|------|--------|---------|
| 0–10s | Marquee band scrolls continuously (full cast) | — |
| 0–1s | UpSight logo fades in at top | — |
| 1.2–3s | Title: "Many voices. One clear signal." | — |
| 0.5–6s | Three theme/quote bubbles rise from the reel with connector lines | theme / quote |

## Asset requirements

See `clip-manifest.json` for the speaker → source mapping.

Each clip:
- 5–12 seconds trimmed
- H.264 MP4
- Real customer/interview footage from UpSight
- One clear attributable quote per clip

## Extraction

Full workflow: `../02-capture/README.md`

**Fast path:** Evidence page → click card (seeks to timestamp) → ScreenStudio record 8s → export to `04-assets/video/speakers/`.

**Precise path:** Download full interview from media player → `scripts/clip-evidence.sh` with `start_ms` / `end_ms` from evidence anchors.
