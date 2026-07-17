---
description: Generate/polish a Remotion slideshow from content + a brand kit (word-count timing, crossfades, grow+dissolve assets)
argument-hint: <content: brief text | path> brand=<dir | inline-json> [format=1920x1080@30] [out=<dir>]
---

Execute the slideshow generator prompt below, end-to-end, including the required verify step.

## Generator prompt (source of truth)

@40-gtm/assets/video/_shared/slideshow-generator.prompt.md

> If the file above did not inline, `Read` it before proceeding — path (from repo root): `40-gtm/assets/video/_shared/slideshow-generator.prompt.md`.

## This run's arguments

$ARGUMENTS

## What to do

1. Parse the arguments above into the prompt's inputs:
   - `CONTENT` — everything that isn't a `key=value` flag (a brief, finished copy, or a file path).
   - `BRAND_KIT` — the `brand=` value (a directory path or inline JSON object).
   - `FORMAT` — the `format=` value if given, else `1920x1080@30`.
   - `OUTPUT_DIR` — the `out=` value if given, else derive a slug from the content and scaffold a new sibling of `_template-video/`.
2. If `CONTENT` or `BRAND_KIT` is missing/ambiguous, ask exactly one concise clarifying question, then proceed.
3. Follow the generator prompt's Steps 0–6 and satisfy its Acceptance checklist. Do not skip Step 6 (typecheck + render + look at 3 stills).
4. End with: composition id, total duration, the per-scene word→seconds timing table, any missing assets, and an offer to render the full MP4.
