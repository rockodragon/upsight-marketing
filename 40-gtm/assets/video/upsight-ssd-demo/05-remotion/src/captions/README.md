# Captions

Automated word-timed captions: transcribe a source video, correct known
product-name mistranscriptions, group words into TikTok-style pages, and
render them over the video with one of four branded presets.

Built on `@remotion/captions` (`Caption[]`, `createTikTokStyleCaptions()`)
rather than the official $100 Animated Captions component — this gets you
the same three animation styles (color highlight, active-word scale,
animated background) plus the transcription/correction/timing pipeline the
paid component doesn't include.

## Setup

```bash
export OPENAI_API_KEY=sk-...   # required for transcription; never commit this
```

Also requires `ffmpeg`/`ffprobe` on `PATH` (media inspection + audio
extraction for non-audio source files).

## Usage

```bash
npm run caption-video -- \
  --input ./04-assets/video/source.mp4 \
  --output ./public/captions/source.json \
  --preset clean \
  --language en
```

Options: `--preset clean|emphasis|productDemo|highlight`, `--language <code>`
(omit to auto-detect), `--vocabulary <path>` (override `data/vocabulary.json`),
`--no-srt` (skip the sibling `.srt` file).

Writes `source.json` (canonical `CaptionDocument` — see `types.ts`) and
`source.srt` next to it, and prints a summary: duration, caption/word
counts, detected language, low-confidence token count, output paths.

## Using in a composition

```tsx
<Composition
  id="MyVideo"
  component={CaptionComposition}
  width={1080}
  height={1920}
  fps={30}
  durationInFrames={30 * 30}
  defaultProps={{
    videoSrc: "video/source.mp4",       // under public/ (04-assets/video/)
    captionsSrc: "captions/source.json", // the CLI's JSON output
    captionPreset: "clean",
    // clipStartMs / clipEndMs: trim to a sub-range of the source video
  }}
/>
```

Or drop `<CaptionRenderer captions={...} preset="clean" />` into an
existing composition — it only needs `Caption[]` (see
`pagination.ts#tokensToCaptions` to derive that from a `CaptionDocument`'s
`tokens`) and renders the active page for the current frame. It's
deterministic (derives time from `useCurrentFrame()`/fps only) and
FPS-agnostic.

## Architecture

```text
types.ts, schemas.ts        canonical types + zod validation
pagination.ts                createTikTokStyleCaptions() wrapper + page-size/no-orphan rules
CaptionRenderer.tsx           frame-driven overlay: clip/timeline offset → paginate → active page
CaptionPage.tsx                fitTextOnNLines() layout + per-word spring highlight
CaptionComposition.tsx        example: OffthreadVideo + CaptionRenderer, loads captionsSrc JSON
presets/{clean,emphasis,productDemo,highlight}.ts   design tokens per style, from ../lib/brand.ts
transcription/
  provider.ts                  TranscriptionProvider interface + typed errors
  openai.ts                    first backend (fetch, not the openai SDK — see below)
  normalize.ts                  raw words ↔ Caption[] ↔ TimedCaptionToken[]
  corrections.ts                vocabulary matching/merging, timing-preserving
timing/
  clipCaptions.ts                rebase to a clip's [start, end)
  remapTimeline.ts               map onto an edited (cuts-removed) output timeline
  validateTiming.ts              chronological sanity check
export/{writeCaptionJson,writeSrt}.ts
media.ts                      ffprobe duration/dimensions, ffmpeg audio extraction
```

**Why fetch instead of the `openai` SDK**: the SDK's `zod` peer
(`^3.23.8`) conflicts with the `zod@4.3.6` Remotion itself requires. The
transcription call is a single multipart POST, so it's implemented
directly against `fetch`/`FormData` (Node 22+) instead of pulling in the
SDK for that.

**The leading-space convention**: `@remotion/captions`'
`createTikTokStyleCaptions()` detects word/page boundaries via
`text.startsWith(' ')` — every `Caption.text` needs a leading space.
`transcription/normalize.ts` and `pagination.ts#tokensToCaptions` handle
this at the boundary; `TimedCaptionToken.displayText` itself stays
trimmed everywhere else in the pipeline.

Adding a transcription provider: implement `TranscriptionProvider`
(`transcription/provider.ts`) — one method, `transcribe({mediaPath,
language}) => {captions, detectedLanguage}`.

## Presets

- **clean** — product/LinkedIn video. Minimal movement, amber emphasis on the active word.
- **emphasis** — short-form social. Color highlight + scale pop, faster page turnover (500ms/4 words vs the 800ms/6 word default).
- **productDemo** — screen recordings. Semi-opaque background box, restrained animation. Override placement per scene with `layout={{ position: "upper" }}`.
- **highlight** — every word sits in its own background chip (a "marker highlighter" box), so captions stay readable over any footage, not just dark backgrounds. The active word's chip swaps color as it's spoken (karaoke-style). Colors/spacing are plain variables at the top of `presets/highlight.ts` — `TEXT_COLOR`, `WORD_BACKGROUND_COLOR`, `ACTIVE_WORD_TEXT_COLOR`, `ACTIVE_WORD_BACKGROUND_COLOR`, chip radius/padding — edit them directly, or copy the file for a second variant (e.g. `highlightDark`).

All four pull colors/fonts from `../lib/brand.ts` — extend
`30-strategy/brand-style-guide.md` first if a token is missing, don't
invent one here.

Any preset can add per-word background chips via `CaptionPresetTokens`'
`wordBackgroundColor` / `activeWordBackgroundColor` (+ `wordBackgroundRadiusPx`
/ `wordBackgroundPaddingXPx` / `wordBackgroundPaddingYPx`) — `highlight` is
just the preset that turns them on by default.

## Tests

```bash
npm test        # vitest — timing, corrections, pagination, schemas, fixture pipeline
npm run typecheck
```

Transcription itself isn't unit-tested (it's a live API call) — the
fixture pipeline test (`tests/fixture-pipeline.test.ts`) covers everything
downstream of it against `tests/fixtures/sample-transcript.json`.
