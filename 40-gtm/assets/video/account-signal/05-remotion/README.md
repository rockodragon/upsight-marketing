# 05-remotion

Step 5 - Build, preview, and render.

## Commands

```bash
npm install          # first time only
npm run studio       # open Remotion Studio — scrub timeline
npm run render       # export → out/hero.mp4
```

## Layout

```text
05-remotion/
├── public → ../04-assets    # symlink — do not edit public directly
├── src/
│   ├── index.ts
│   ├── Root.tsx             # registers composition
│   ├── lib/
│   │   ├── brand.ts         # colors, fonts
│   │   ├── animations.ts
│   │   └── script.ts        # loads ../01-script/hero.script.json
│   ├── components/
│   └── compositions/
│       └── VideoHero.tsx
└── out/
    └── hero.mp4             # final render (gitignored)
```

## Script-driven editing

`src/lib/script.ts` imports `../../01-script/hero.script.json`.
Edit JSON in `01-script/`, then re-render. That is now the main control surface for:

- scene timing
- exact object placement
- overlay layering with `zIndex`
- layer enter and exit transitions
- image and video asset placement
- audio cues and fades

## Layer workflow

Each scene can define:

- `backgroundColor`
- `enter` / `exit` scene transitions
- `layers[]` for text, images, videos, and shapes
- `audio[]` for per-scene SFX, VO, or music stings

Each layer can define:

- `x`, `y`, `width`, `height`
- `anchorX`, `anchorY`
- `fromFrames`, `durationFrames`
- `enter`, `exit`, `motion`
- `opacity`, `borderRadius`, `border`, `boxShadow`

This gives you deterministic control over the canvas instead of trying to reprompt an AI video model into landing objects in the right place.

## Asset placement

Drop assets into `04-assets/`:

- `ui/` for screenshots
- `video/` for clips
- `logos/` for brand marks
- `icons/` for overlays

Then reference them from JSON, for example:

```json
{
  "kind": "image",
  "src": "ui/dashboard-shot.png",
  "x": 1180,
  "y": 180,
  "width": 560,
  "height": 700,
  "enter": { "type": "slide-right", "frames": 14 }
}
```

## Sound direction

Use `audioBed[]` at the top level for your main music or room tone.
Use `scene.audio[]` for voiceover beats, swishes, hits, or scene-specific beds.

Each audio cue supports:

- `fromFrames`
- `durationFrames`
- `trimBeforeFrames`
- `trimAfterFrames`
- `volume`
- `fadeInFrames`
- `fadeOutFrames`
- `playbackRate`

## Best practice

If you need an overlay to follow a moving object inside baked AI footage, do not rely on prompts alone.
Export tracking or keyframe data separately and feed that into your scene JSON, then let Remotion place the overlay frame by frame.

## After render

Copy `out/hero.mp4` to wherever marketing needs it (site, ads, sales deck), or keep the canonical render here.

## Captions

Automated word-timed captions (transcribe → correct → paginate → render),
inherited by every video scaffolded from this template. See
`src/captions/README.md`. Quick start:

```bash
export OPENAI_API_KEY=sk-...
npm run caption-video -- --input ./04-assets/video/source.mp4 --output ./public/captions/source.json --preset clean
```
