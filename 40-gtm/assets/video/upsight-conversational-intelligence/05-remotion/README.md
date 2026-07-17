# Conversational Intelligence — 10s clip

**Format:** 1920×1080 · 30fps · 10 seconds  
**Concept:** Film-reel marquee of real customer clips + growing video tiles + quote callouts.

## Before you render

1. Extract 4 short clips from UpSight (see `../02-capture/README.md`)
2. Drop trimmed MP4s into `../04-assets/video/speakers/speaker-{1-4}.mp4`
3. Update quotes/themes in `../01-script/clip-manifest.json`

## Commands

```bash
npm install
npm run studio    # preview
npm run render    # → out/conversational-intelligence.mp4
```

## Clip helper (optional)

```bash
../scripts/clip-evidence.sh \
  --input ../02-capture/full-interview.mp4 \
  --start-ms 245000 --end-ms 258000 \
  --output ../04-assets/video/speakers/speaker-1.mp4
```

Requires `ffmpeg` (`brew install ffmpeg`).
