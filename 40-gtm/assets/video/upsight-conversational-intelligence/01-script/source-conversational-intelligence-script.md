# Conversational Intelligence — source script

**Audience:** Homepage hero, product marketing, social  
**Format:** 1920×1080 landscape · 10s · 30fps  
**Visual type:** Real UpSight interview/survey clips only — no stock footage

---

## Concept

Multiple people talking (real recordings) flow across screen like a film reel, then grow into focus. Text-bubble callouts surface the **theme** and **key quote** UpSight extracted — showing conversational intelligence in action.

## Scene beats (10s)

| Time | Visual | Callout |
|------|--------|---------|
| 0–10s | Marquee band scrolls continuously (4 clips looping) | — |
| 0–3s | Speaker 1 tile grows bottom-left | "Retention risk" / quote |
| 1–4s | Speaker 2 tile grows center | "Budget pressure" / quote |
| 2–5s | Speaker 3 tile grows right | "Feature gap" / quote |
| 3–6s | Speaker 4 tile grows far right | "Buying signal" / quote |
| 7.5–10s | Tagline: "Every conversation. Structured insight." | — |

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
