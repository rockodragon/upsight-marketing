# 04-assets

**Step 4** — Clean, production-ready files Remotion actually uses.

`05-remotion/public` is symlinked here. Anything you add under this folder is available to Remotion.

## Folder layout

```text
04-assets/
├── logos/
│   └── upsight-logo.png
├── ui/
│   ├── survey-home.png          ← full screenshots
│   └── meeting-prep-scorecard.png
├── video/
│   └── survey-voice-demo.mp4    ← trimmed clips (H.264)
├── icons/
│   └── (optional SVGs)
└── audio/                       ← optional, if using staticFile for audio
    └── vo-full.wav
```

## What goes in each subfolder

### `logos/`
Brand marks, partner logos. Use PNG with transparency when possible.

### `ui/`
Product screenshots at **2× resolution** (e.g. 1600px wide for an 800px frame).  
Export from browser or Figma — not raw ScreenStudio files.

### `video/`
Short trimmed clips (5–15s), H.264 `.mp4`, for `ScreenshotFrame`:

```tsx
<ScreenshotFrame src="video/survey-voice-demo.mp4" type="video" delay={15} />
```

### `icons/`
One-off graphics not worth animating in code.

## Reference in Remotion

```tsx
import { staticFile } from "remotion";

staticFile("logos/upsight-logo.png")
staticFile("ui/survey-home.png")
staticFile("video/survey-voice-demo.mp4")
```

Paths are relative to `04-assets/` (via the `public` symlink).
