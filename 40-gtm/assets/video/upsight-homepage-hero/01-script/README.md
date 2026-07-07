# 01-script

**Step 1** — Write before you record or render.

## Files

| File | Purpose |
|------|---------|
| `hero.script.json` | **Editable on-screen copy** — headlines, scenes, CTA, durations |
| `hero.prompt.md` | Creative brief — audience, message, tone, scene intent |
| `notes.md` | Optional — feedback, revision history, stakeholder comments |

## Edit workflow

1. Change copy in `hero.script.json`
2. Re-render: `cd ../05-remotion && npm run render`
3. No React edits needed for text-only changes (once scenes are wired to the script)

## `hero.script.json` structure

```json
{
  "id": "your-video-slug",
  "title": "Human-readable title",
  "format": { "width": 1920, "height": 1080, "fps": 30, "durationSeconds": 14 },
  "scenes": [
    { "id": "hook", "name": "Hook", "durationSeconds": 3, "headline": "..." }
  ]
}
```

Scene `durationSeconds` values should add up to `format.durationSeconds`.
