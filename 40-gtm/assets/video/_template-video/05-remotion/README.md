# 05-remotion

**Step 5** — Build, preview, and render.

## Commands

```bash
npm install          # first time only
npm run studio       # open Remotion Studio — scrub timeline
npm run render       # export → out/hero.mp4
```

## Layout

```text
05-remotion/
├── public → ../04-assets    # symlink — do not edit public directly
├── src/
│   ├── index.ts
│   ├── Root.tsx             # registers composition
│   ├── lib/
│   │   ├── brand.ts         # colors, fonts
│   │   ├── animations.ts
│   │   └── script.ts        # loads ../01-script/hero.script.json
│   ├── components/
│   └── compositions/
│       └── VideoHero.tsx
└── out/
    └── hero.mp4             # final render (gitignored)
```

## Script-driven copy

`src/lib/script.ts` imports `../../01-script/hero.script.json`.  
Edit JSON in `01-script/`, re-render — no code change for text updates.

## After render

Copy `out/hero.mp4` to wherever marketing needs it (site, ads, sales deck), or keep the canonical render here.
