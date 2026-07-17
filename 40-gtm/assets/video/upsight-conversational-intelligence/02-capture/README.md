# 02-capture — extracting clips from UpSight

Raw recordings and **full-length interview downloads** live here. Nothing in this folder goes directly into Remotion.

## Where the video lives in UpSight

| Source | Page | What you get |
|--------|------|----------------|
| **Interview recording** | `/a/{account}/{project}/interviews/{id}` | Full call MP4 (Zoom, Meet, upload, etc.) |
| **Evidence moment** | Same page, or `/evidence` → click a card | Player seeks to `start_ms` on the full interview |
| **Survey response** | `/a/.../ask/{listId}/responses` | Per-respondent video answers |
| **Highlight reel** | `/a/.../reels` | UpSight trims + stitches evidence clips server-side |

Every evidence card stores **millisecond anchors** (`start_ms`, `end_ms`) — that's the trim window for a quote.

## Recommended workflow (fastest → most precise)

### Option A — Screen record the moment (no ffmpeg)

Best when you only need a 5–10s marketing clip and don't care about pixel-perfect edges.

1. Open an interview or evidence page with real data (pre-seed a demo project first).
2. Click an evidence card so the player jumps to the quote (`start_ms`).
3. Hit play. Let ~2s of lead-in, then the quote, then ~2s tail.
4. Record with **ScreenStudio** or **QuickTime** (crop to the video frame only).
5. Export H.264 `.mp4` → `../04-assets/video/speakers/speaker-1.mp4` (etc.).

### Option B — Download full file, trim with timestamps (most precise)

Best when you want clean edges and will reuse the same interview for multiple clips.

1. On any page with `SimpleMediaPlayer`, click the **download** button (uses `/api/media/signed-url` with `intent: download`).
2. Save the full MP4 here: `2026-07-16-interview-acme-discovery.mp4`
3. Note the evidence timestamps from the UI (or from the evidence card — hover shows timecode).
4. Run the clip helper (requires ffmpeg):

```bash
cd ../scripts
./clip-evidence.sh \
  --input ../02-capture/2026-07-16-interview-acme-discovery.mp4 \
  --start-ms 245000 \
  --end-ms 258000 \
  --output ../04-assets/video/speakers/speaker-1.mp4
```

`start_ms` / `end_ms` are in **milliseconds** (same as UpSight evidence anchors). Add ~1.5s padding on each side for natural lead-in/out.

### Option C — Let UpSight compile a reel

Best for a stitched "film reel" of multiple quotes on one theme.

1. Go to **Highlight Reels** (`/a/.../reels`).
2. Generate or curate a reel from evidence on one theme.
3. Click **Compile Reel** — UpSight runs ffmpeg server-side (`compile-reel.ts`).
4. Download the compiled MP4 → `02-capture/`, then split or screen-record individual moments if needed.

### Option D — DevTools signed URL (fallback)

If download button isn't visible:

1. Open DevTools → Network.
2. Play the video; filter for the media request or `signed-url` POST.
3. Copy the signed playback URL (expires in ~15 min).
4. `curl -L -o 02-capture/raw-interview.mp4 "<signed-url>"`
5. Trim with Option B.

## Naming convention

**Raw captures (this folder):**

```text
2026-07-16-interview-{slug}-take1.mp4
2026-07-16-survey-response-{slug}.mp4
```

**Trimmed clips (go to `04-assets/video/speakers/`):**

```text
speaker-1.mp4   ← maps to clip-manifest.json entry
speaker-2.mp4
speaker-3.mp4
speaker-4.mp4
```

## Pre-flight checklist

- [ ] Demo project has 4+ processed interviews with video (not audio-only)
- [ ] Each chosen quote has a clear, attributable line (no filler)
- [ ] Timestamps verified by clicking the evidence card and listening
- [ ] No PII / customer names visible unless approved for marketing
- [ ] Clips are 5–12s, H.264, 1080p or 720p

## Do not

- Reference `02-capture/` from Remotion — always use trimmed files in `04-assets/video/`
- Use stock footage when real UpSight evidence exists (undermines "conversational intelligence" claim)
