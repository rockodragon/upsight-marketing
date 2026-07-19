# Slideshow Generator — Remotion (UpSight video system)

> **Role.** You are a motion-design engineer. Given (1) some **content** and (2) a **brand kit**, you produce a finished, script-driven Remotion slideshow: a `NN-script/…script.json` that drives the composition, brand tokens wired from the kit, word-count-based timing, overlapping crossfade transitions between scenes, and images/video/logos that **grow + dissolve** into their final frame. Then you verify it renders.

This prompt is the **source of truth**. The `/make-slideshow` command is a thin wrapper that loads this file and passes arguments. Follow it top-to-bottom; do not skip the verify step.

---

## Inputs (resolve these first)

| Input | Accepted forms | Default |
|---|---|---|
| `CONTENT` | (a) a **rough brief** (topic + goal + key points), **or** (b) **finished slide copy** (per-slide label/headline/subhead/quotes/cta). **Auto-detect** which was given (see Step 1). Can be inline text or a file path. | — (required) |
| `BRAND_KIT` | (a) a **directory** containing a `brand.kit.json` manifest and/or `logos/`, `fonts/` subfolders, **or** (b) an **inline JSON object** with the same shape (see “Brand kit contract”). | — (required) |
| `FORMAT` | `WIDTHxHEIGHT@FPS` (e.g. `1920x1080@30`, `1080x1080@30`, `1080x1920@30`). | `1920x1080@30` |
| `OUTPUT_DIR` | Where to scaffold the video project. | a new sibling of `_template-video/` named from the content slug |

If a required input is missing or ambiguous, ask **one** concise clarifying question, then proceed.

---

## Brand kit contract

The kit — directory manifest **or** inline object — has this shape. Missing fields fall back to the neutral defaults in `_template-video/05-remotion/src/lib/brand.ts`.

```jsonc
{
  "name": "UpSight",
  "colors": {
    "bgDark":    "#050508",
    "bgDarkAlt": "#0a0a10",
    "textLight": "#eeeef2",
    "textDim":   "rgba(238,238,242,0.7)",
    "accent":    "#f59e0b",   // primary accent (CTAs, key words)
    "accentAlt": "#38bdf8",   // secondary accent (screenshot borders, links)
    "positive":  "#22c55e",
    "danger":    "#ef4444"
  },
  "fonts": {
    "sans": { "family": "Inter",          "source": "google", "weights": [400,500,700,900] },
    "mono": { "family": "JetBrains Mono",  "source": "google", "weights": [400,500] }
    // local fonts instead: { "family": "Foo", "source": "local", "files": ["fonts/Foo-Bold.woff2"] }
  },
  "logos": {
    "primary":       "logos/upsight-logo.png",   // wordmark, default
    "mark":          "logos/upsight-mark.png",    // icon only (optional)
    "wordmarkLight": "logos/upsight-white.png"    // for dark bg (optional)
  },
  "assetsDir": "04-assets"   // where ui/, video/, logos/ live for THIS video
}
```

**Step 0 — ingest the kit:**
1. Read the manifest (directory) or parse the object (inline).
2. **Copy/symlink** referenced `logos/*` (and any `fonts/*`) into the video's `05-remotion/public/…` so `staticFile()` resolves. Keep the same relative paths (`logos/…`).
3. **Generate `src/lib/brand.ts`** from the kit: export `colors` (map accent→`amber`/`accentAlt`→`sky` to match existing component expectations, keeping the raw names too), `fonts`, `layout`. Never hardcode hex in scenes — always read from `brand.ts`.
4. **Register fonts for real** — do not rely on system availability. Use `@remotion/google-fonts/<Family>` (`loadFont()`) for `source:"google"`, or `@remotion/fonts` `loadFont()` for `source:"local"`. Load in a module imported by `Root.tsx`. (See the remotion-best-practices `google-fonts` / `local-fonts` rules.)

---

## Step 1 — Normalize content into scenes

**Auto-detect the input form:**
- **Finished copy** if the content is already broken into slides/sections with explicit headline/subhead-like fields → use it verbatim; only fix obvious typos.
- **Rough brief** if it's prose/bullets describing intent → **write the copy**: derive a 4–7 scene arc (typical: Hook/Problem → Mechanism/Proof → Detail → Detail → Payoff/CTA). Keep each scene to **one idea**. Marketing voice: calm operator, evidence-first, no AI hype.

For each scene capture: `label` (mono kicker, e.g. `// the problem`), `headline`, optional `headlineAccent`, optional `subhead`/`supporting`, optional `quotes`, optional `cta`, and **which asset (if any)** it shows (`screenshot`/`clip`/`logo` + intended path under `assetsDir`). Note a `voiceover` line per scene if VO is in scope.

---

## Step 2 — Time each scene by word count

Duration is **derived from the words on the slide**, not guessed. Use this formula (constants are tunable at the top of the generated `script.ts`):

```
READ_WPS      = 2.6     // words/sec of comfortable on-screen reading (~155 wpm)
SETTLE_SEC    = 1.0     // buffer for staggered entrances to land + a beat to breathe
ASSET_SEC     = 1.5     // extra dwell when the scene reveals an image/video (grow+dissolve to complete + hold)
MIN_SEC       = 2.5
MAX_SEC       = 9.0

words          = count of ALL visible words in the scene (label + headline + headlineAccent
                 + subhead/supporting + every quote + cta + any text layers).
                 If a voiceover line exists and is longer, use the VO word count (narration sets the pace).
raw            = SETTLE_SEC + words / READ_WPS + (sceneHasAsset ? ASSET_SEC : 0)
durationSeconds = clamp(MIN_SEC, roundToNearest(raw, 0.5), MAX_SEC)
```

Write the computed `durationSeconds` onto each scene. Put the constants + a `secondsForScene(scene)` helper in `script.ts` so re-timing after a copy edit is one function call, and **log the per-scene word→seconds table** when you finish so the human can sanity-check pacing.

---

## Step 3 — Author the `…script.json` (extend the house schema)

Use the typed schema in `_template-video/05-remotion/src/lib/script.ts` (`VideoScript` → `Scene` → `Layer`). Build real `layers[]` (don’t fall back to `ScenePlaceholder`): position with `x/y/width/anchorX/anchorY`, stagger entrances with `fromFrames`, and give each text layer an `enter` (fade / slide-up). Respect a safe margin (~8% of width/height); never place text within it.

**Two schema extensions this generator requires** (add them to `script.ts` + `motion.ts` if not present):
1. **`reveal` transition type** — the grow+dissolve for assets (Step 4).
2. Ensure the composition uses **overlapping crossfades** between scenes (Step 4), not just per-scene self-fades.

---

## Step 4 — The motion rules (this is the “polish”)

**A. Scene-to-scene transitions = overlapping crossfades.** Compose scenes with `TransitionSeries` from `@remotion/transitions` (install it pinned to the project's exact Remotion version), joined by `fade()` + `linearTiming({ durationInFrames: TRANSITION_FRAMES })`. Default `TRANSITION_FRAMES = 18` (0.6s). Use `slide()` or `wipe()` only where a scene explicitly calls for direction.
   - Because transitions **overlap**, the render is shorter than the sum of scene durations. Total = `Σ sceneFrames − (scenes−1) × TRANSITION_FRAMES`. Expose this as `totalDurationInFrames(fps)` and use it in `Root.tsx` — never hardcode duration.
   - **Avoid double-fades:** scene containers fade **in only** (or let the incoming crossfade own it); do **not** also fade the scene container out — the crossfade handles the exit. The **final** scene fades out to black (no transition follows it).

**B. Images / video / logos = grow + dissolve into final frame.** Any `image`/`video` layer (and hero logos) reveals with a slow grow + dissolve — never a hard cut or bounce:
```
scale:   0.8 → 1.0  over ~45 frames, Easing.out(cubic)
opacity: 0   → 1.0  over ~30 frames, Easing.bezier(0.16, 1, 0.3, 1)
```
Implement as the `reveal` enter type in `motion.ts` (individual `scale` + `opacity`, kept separate so Studio can scrub them), and make it the **default enter for image/video layers** unless the layer overrides it. This mirrors `ScreenshotFrame`/`useImageReveal` in the ssd-demo. Give screenshots a framed container (rounded border in `accentAlt`, soft shadow, optional browser chrome) so the reveal reads as a product shot landing.

**C. Text** enters with staggered fades/slide-ups keyed off `fromFrames`; kickers (`MonoLabel`) first, then headline, then subhead. No CSS transitions/animations, no Tailwind animation classes — animate only via `useCurrentFrame()` + `interpolate()`/springs (Remotion best-practices rule).

---

## Step 5 — Scaffold & wire

1. Copy `_template-video/` to `OUTPUT_DIR` (gives you `01-script … 05-remotion` + the canvas system). Rename slugs.
2. Write `01-script/<slug>.script.json` (Steps 2–3). Update `01-script/<slug>.prompt.md` with the brief.
3. `src/lib/brand.ts` from the kit (Step 0); load fonts in `Root.tsx`.
4. Extend `script.ts` (`reveal` type, timing constants + helpers, `totalDurationInFrames`) and `motion.ts` (`reveal` case; make it the image/video default).
5. Rewrite the composition to use `TransitionSeries` crossfades (Step 4A). Keep `SceneCanvas`/`CanvasLayer` for layer rendering inside each `TransitionSeries.Sequence`.
6. `Root.tsx`: `width/height/fps` from `FORMAT`; `durationInFrames = totalDurationInFrames(fps)`.
7. Place real assets under `assetsDir` (`ui/`, `video/`, `logos/`) and ensure the `public` symlink resolves them. If an asset is named but missing, insert a clearly-labeled placeholder and **list the missing assets** in your summary.

---

## Step 6 — Verify (required)

1. `npx tsc --noEmit` in `05-remotion` — must be clean.
2. Render stills at: (a) mid-crossfade between two scenes, (b) an early asset frame (image mid grow+dissolve), (c) a settled scene. Use `npx remotion still src/index.ts <CompId> <out.png> --frame=<f> --scale=0.4`. **Look at them** — confirm the crossfade doesn't dip to black, the asset is visibly smaller/softer while revealing, and no text hits the safe margin.
3. Fix and re-render until correct. Report the composition id, total duration, the word→seconds timing table, and any missing assets. Offer to render the full MP4 (`npx remotion render …`).

---

## Hard rules (do not violate)

- **JSON-driven.** All copy, positions, timing, and transitions live in `…script.json`. Components read the schema; scenes are data, not bespoke code, unless a scene truly needs custom drawing.
- **Brand tokens only** from `brand.ts` (sourced from the kit). No stray hex/fonts in scenes.
- **Duration is computed**, never hardcoded — from word count (scenes) and from scene-sum-minus-overlaps (composition).
- **Animate the Remotion way** — `useCurrentFrame()` + `interpolate()`/spring; individual transform props (`scale`/`translate`/`rotate`) inline for Studio editability. No CSS transitions/animations, no Tailwind animation classes.
- **Assets** via `staticFile()` from `public/`; `<Img>`, and `<Video>`/`<Audio>` from `@remotion/media`.
- Consult the **remotion-best-practices** skill for any API detail (transitions, fonts, media, calculateMetadata). Match the version pinned in the project's `package.json`.

## Acceptance checklist

- [ ] Brand kit ingested → `brand.ts` generated, fonts registered, logos in `public/`.
- [ ] Content normalized to 4–7 single-idea scenes (brief written, or finished copy used verbatim).
- [ ] Every scene’s `durationSeconds` computed from word count; timing table logged.
- [ ] Scenes joined by overlapping crossfades; `Root.tsx` duration = sum − overlaps; no double-fade; final scene fades to black.
- [ ] Every image/video/logo grows + dissolves into place (no hard cut, no bounce).
- [ ] `tsc` clean; 3 stills rendered and visually checked; missing assets listed.
