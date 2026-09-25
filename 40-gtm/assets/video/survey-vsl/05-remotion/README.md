# Survey VSL Remotion — CSAT / churn cut

**One job:** When CSAT says “fine,” still know who’s about to leave — and prove it with their words.

- Master: `SurveyVsl` · 1920×1080 · 30fps · ~80s
- Captions burned in (muted autoplay)
- Motion-graphic stand-ins until product capture lands — see `../CAPTURE-NEEDED.md`
- No testimonials, logos (customer), or feature tour

## Commands

```bash
npm run studio
npm run render          # 16:9 master → out/SurveyVSL.mp4
npm run still           # spine beat preview (~30s)
```

## Voiceover

Optional. Set `withVoiceover: true` on the composition and drop per-scene MP3s at
`04-assets/audio/vo/{hook,problem,spine,contrast,mechanism,cta}.mp3`.
Placeholder generation: `scripts/generate-voiceover.mjs` (ElevenLabs) or macOS `say`.
