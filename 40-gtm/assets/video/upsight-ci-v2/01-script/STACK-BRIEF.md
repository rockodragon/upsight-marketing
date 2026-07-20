# Homepage hero — fixed-spot movie (light paper)

Matches the customer-intelligence homepage paper (`#eeeef2` / ink `#050508`).

## `CiV2Movie` (~22s)

Narrow center column (~760px). Acts replace softly:

1. **Cards** — poker deal (video → note → Zoom → support)  
2. **Analysis** — finding card  
3. **Produced story** (slow, no flicker):
   - Title page: **Event Impact** + finding  
   - One trimmed customer clip (scale ease-in)  
   - Bar chart beat  
   - Send to Customers / Internal / Website  

## Portrait (4:5 homepage embed)

**Composition:** `CiV2MoviePortrait` — **1080×1350**, paper `#eeeef2`  
Safe area: 85% width × 82% height, min **90px** from edges. Content centered with breathing room for `object-fit: cover`.

```bash
npm run render:movie-portrait
# → out/ci-v2-movie-portrait.mp4
```

### Transparent background (optional)

MP4/H.264 **cannot** carry alpha. For a transparent canvas (cards/slides stay opaque):

```bash
npm run render:movie-portrait-alpha
# → out/ci-v2-movie-portrait.webm  (VP9 + alpha)
```

Studio composition: `CiV2MoviePortraitAlpha`. Use `<video>` on the page; WebM alpha works in Chrome/Firefox/Edge. Safari WebM support is limited — prefer the `#eeeef2` MP4 on Safari or match page bg.

Page token: `--paper: #eeeef2` (`body { background: var(--paper) }`) — already what the MP4 uses.

## Inline (legacy narrow column)

**Composition:** `CiV2Movie` — 780×1040

```bash
npm run render:movie
# → out/ci-v2-movie.mp4
```
