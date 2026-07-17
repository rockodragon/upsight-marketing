---
name: remotion-director
description: Use this skill when working on Remotion videos that need precise placement, layer timing, scene transitions, audio cues, or structured editing of AI-generated footage. Trigger for requests about adding images at exact coordinates, controlling overlays on canvas, improving transitions or sound design, building scene JSON schemas, or turning rough AI video outputs into deterministic Remotion compositions.
---

# Remotion Director

Use this skill to turn loose AI-generated video ideas into precise, editable Remotion timelines.

## Core approach

Treat AI output as source material, not as the final edit.

Prefer:

- structured scene data over prompt-only iteration
- exact `x`, `y`, `width`, `height`, `zIndex`, and frame ranges
- `Sequence` plus absolute positioning for deterministic layout
- separate audio layers for VO, music, and SFX
- reusable layer components instead of scene-specific one-offs

Avoid relying on flexbox or natural DOM flow when the user asks for exact object placement.

## Workflow

1. Inspect the existing Remotion project, asset folders, and current schema.
2. Normalize the request into scene data:
   - scene duration
   - layer kind
   - position and size
   - in and out timing
   - transition style
   - audio cues
3. Update JSON or typed scene data before writing custom animation code.
4. Render layers with absolute positioning and time offsets.
5. Add audio automation with fades and trims.
6. Verify the result in Studio or with a local type check when possible.

## Layer conventions

For each visual layer, prefer a schema with:

- `id`
- `kind`: `text`, `image`, `video`, or `shape`
- `x`, `y`, `width`, `height`
- `anchorX`, `anchorY`
- `fromFrames`, `durationFrames`
- `zIndex`
- `enter`, `exit`, `motion`

For scene-level control, prefer:

- `backgroundColor`
- `enter`
- `exit`
- `audio`

## Transition guidance

Use simple, legible transitions first:

- `fade` for clean scene changes
- `slide-up` or `slide-right` for UI reveals
- `wipe-left` for intentional scene exits
- `zoom-in` for CTA emphasis

Do not stack too many transition types in the same moment unless the user wants a stylized result.

## Audio guidance

Mix audio as separate intent-driven layers:

- voiceover
- music bed
- scene hits and swishes
- ambient texture

Use volume envelopes, trims, and fade in/out frames instead of baking everything into one file.

## Object tracking truth

If the user wants an overlay to stick to a moving object inside already-rendered footage, be explicit:

- Remotion can place the overlay precisely
- Remotion cannot infer object identity from baked pixels on its own
- accurate tracking requires external keyframes, boxes, masks, or manual tracking data

When tracking data exists, consume it as structured data and drive placement frame by frame.
