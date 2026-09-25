# 03-audio

**Step 3** — Voiceover and music (optional for silent hero loops).

## Put here

| Subfolder | Contents |
|-----------|----------|
| `vo/` | Voiceover `.wav` or `.mp3` — one file per scene or full read |
| `music/` | Background music beds (royalty-cleared) |
| `sfx/` | UI clicks, whooshes, etc. |

## Naming

```text
vo/full-read-v1.wav
vo/scene-02-promise.wav
music/ambient-bed-01.mp3
```

## Using in Remotion

Import audio in `05-remotion/src/` with Remotion's `<Audio>` component and `staticFile()`.  
For now, symlink or copy finished audio into `04-assets/` if you need `staticFile` access, or place under `05-remotion/public` via the `04-assets` symlink:

```text
04-assets/audio/vo-full.wav
```

Then: `staticFile("audio/vo-full.wav")`
