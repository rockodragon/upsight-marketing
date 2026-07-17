# 04-assets — trimmed clips for Remotion

`05-remotion/public` symlinks here.

## Required for this video

```text
video/speakers/
├── speaker-1.mp4
├── speaker-2.mp4
├── speaker-3.mp4
└── speaker-4.mp4
```

Map each file to `../01-script/clip-manifest.json` (theme, quote, source timestamps).

## How to create them

See `../02-capture/README.md` — extract from UpSight evidence/interview pages, then trim to 5–12s H.264.

Quick command (after downloading full interview to `02-capture/`):

```bash
../scripts/clip-evidence.sh \
  --input ../02-capture/YOUR-FULL-INTERVIEW.mp4 \
  --start-ms 245000 --end-ms 258000 \
  --output video/speakers/speaker-1.mp4
```
