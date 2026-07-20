# Where are my folders?

If you're looking for `01-script`, `04-assets`, etc. and don't see them — you're probably in the **wrong directory**.

## The numbered folders live HERE

```
/Users/rickmoy/code/upsight-marketing/40-gtm/assets/video/
```

Not in `40-gtm/assets/video/remotionVideos-UpSight/` (that's the old ad factory).

## What you should see

Open **one video project** — for example:

```
/Users/rickmoy/code/upsight-marketing/40-gtm/assets/video/upsight-smart-surveys/
```

Inside that folder, these five folders are **siblings** (same level):

```
upsight-smart-surveys/
├── 01-script/       ← copy + brief
├── 02-capture/      ← raw ScreenStudio exports
├── 03-audio/        ← voiceover
├── 04-assets/       ← logos, UI PNGs, trimmed MP4s  ← YOU WANT THIS
└── 05-remotion/     ← Remotion code + out/hero.mp4
```

**`04-assets` is not at the repo root.** It's inside each video slug folder.

## All video projects

| Project | Full path to `04-assets` |
|---------|--------------------------|
| Smart surveys | `40-gtm/assets/video/upsight-smart-surveys/04-assets/` |
| Homepage hero | `40-gtm/assets/video/upsight-homepage-hero/04-assets/` |
| CI-v2 killer loop | `40-gtm/assets/video/upsight-ci-v2/04-assets/` |
| SSD demo | `40-gtm/assets/video/upsight-ssd-demo/04-assets/` |
| Template (blank) | `40-gtm/assets/video/_template-video/04-assets/` |

## Open in Finder

```bash
open /Users/rickmoy/code/upsight-marketing/40-gtm/assets/video
```

## Open in Cursor

**File → Open Folder** → pick e.g. `upsight-marketing/40-gtm/assets/video/upsight-ssd-demo`

You should see `01-script` through `05-remotion` in the sidebar.

## Old vs new

| Location | Has 01–05 folders? |
|----------|-------------------|
| `40-gtm/assets/video/upsight-*/` | ✅ Yes — use this |
| `40-gtm/assets/video/remotionVideos-UpSight/` | ❌ No — legacy only |

See also: [README.md](./README.md)
