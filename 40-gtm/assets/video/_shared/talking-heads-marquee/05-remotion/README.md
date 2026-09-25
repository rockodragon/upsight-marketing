# Talking Heads Marquee

Reusable 10s · 1920×1080 · 30fps Remotion asset.

Source script: [`../talking-heads-marquee-script.md`](../talking-heads-marquee-script.md)
Clip map: [`../clip-manifest.json`](../clip-manifest.json)

## Setup

```bash
cd 05-remotion
npm install
npm run studio
npm run render       # → out/talking-heads-marquee.mp4
```

## Asset layout

Canonical clips live in `_shared/videos/`. Same pattern as other Remotion projects (`public` → `../04-assets`).

| Path | What it is |
|------|------------|
| `_shared/videos/*` | Real files (one copy on disk) |
| `04-assets/logos/*` | Real logo file(s) |
| `04-assets/video/*` | Hard links → `_shared/videos/…` (same inode, Remotion-safe) |
| `05-remotion/public` | Symlink → `../04-assets` |

`upsight-conversational-intelligence/04-assets/video/*` uses relative symlinks into `_shared/videos/`.

### Why hard links for video (not relative symlinks)

Remotion copies `public/` into a temp folder when rendering. **Relative** symlinks break there (`../../videos` no longer resolves). Hard links look like normal files to that copy, share one inode with `_shared/videos`, and don’t duplicate bytes on disk.
