# UpSight Video Ad Factory

Remotion-powered video ad pipeline for UpSight marketing. Produces on-brand short-form video content for LinkedIn, Instagram, and YouTube.

## Quick Start

```bash
# Install dependencies
npm install

# Open Remotion Studio (preview + scrub through timeline)
npm run studio

# Render the survey killer ad
npm run render:survey-ad

# Render all ads
npm run render:all
```

## Project Structure

```
upsight-ads/
├── public/                    # Static assets (screenshots, video clips, logo)
│   └── upsight-logo.png
├── src/
│   ├── index.ts               # Remotion entry point
│   ├── Root.tsx                # Registers all compositions
│   ├── lib/
│   │   ├── brand.ts           # Colors, fonts, motion, layout tokens
│   │   └── animations.ts      # Reusable animation hooks
│   ├── components/
│   │   ├── MarketingBackground.tsx  # Dark bg with grid + glow
│   │   ├── MonoLabel.tsx            # "// operator" label
│   │   └── ScreenshotFrame.tsx      # Device frame for screenshots/video
│   └── compositions/
│       ├── SurveyKillerAd.tsx       # Full ad: sequences all scenes
│       ├── SceneHook.tsx            # "Stop wasting time on boring surveys"
│       ├── SceneStats.tsx           # Pain point statistics
│       ├── SceneSolution.tsx        # AI chat demo
│       ├── SceneProductDemo.tsx     # Product screenshot/video (reusable)
│       ├── SceneComparison.tsx      # Survey vs AI Chat bars
│       └── SceneCTA.tsx             # Logo + amber CTA
├── scripts/
│   └── render-all.mjs         # Batch render script
└── out/                       # Rendered .mp4 files
```

## Adding Product Screenshots & Video Clips

1. Drop `.png` screenshots or `.mp4` clips into `/public`
2. Use `<ScreenshotFrame>` in any scene:
   ```tsx
   <ScreenshotFrame src="dashboard.png" delay={15} />
   <ScreenshotFrame src="demo-recording.mp4" type="video" delay={15} />
   ```
3. Or use the `SceneProductDemo` composition directly with props

## Creating a New Ad

1. **Create a composition** in `src/compositions/`:
   ```tsx
   // src/compositions/UseCaseInterviewsAd.tsx
   export const UseCaseInterviewsAd: React.FC = () => {
     return (
       <MarketingBackground>
         <Sequence from={0} durationInFrames={120} name="Hook">
           {/* Your hook scene */}
         </Sequence>
         {/* More sequences... */}
       </MarketingBackground>
     );
   };
   ```

2. **Register it** in `src/Root.tsx`:
   ```tsx
   <Composition
     id="UseCaseInterviews"
     component={UseCaseInterviewsAd}
     width={1080} height={1080} fps={30}
     durationInFrames={720}
   />
   ```

3. **Render it**:
   ```bash
   npx remotion render src/index.ts UseCaseInterviews --output=out/use-case-interviews.mp4
   ```

## Brand Tokens

All brand values live in `src/lib/brand.ts`:

| Token | Value | Usage |
|-------|-------|-------|
| `colors.amber` | `#f59e0b` | CTAs, emphasis |
| `colors.sky` | `#38bdf8` | Secondary highlights |
| `colors.bgDark` | `#050508` | Background |
| `fonts.sans` | Inter | Headlines + body |
| `fonts.mono` | JetBrains Mono | Labels, annotations |
| `springConfident` | damping: 28 | Primary transitions |

## Animation Hooks

Pre-built hooks in `src/lib/animations.ts`:

- `useSlideUp(delay, distance)` — slide + fade from below
- `useSlideRight(delay, distance)` — slide from left
- `useScalePop(delay)` — bouncy scale entrance
- `useFadeIn(delay, duration)` — simple opacity
- `useStrikethrough(delay, duration)` — 0→1 for line scaleX
- `useBarGrow(delay)` — chart bar animation
- `useCountUp(target, delay, duration)` — animated number

## Initial 5 Ad Plan

| # | Ad | Hook | CTA |
|---|-----|------|-----|
| 1 | Survey Killer | "Stop wasting time on boring surveys" | Start Free |
| 2 | Interview Intelligence | "Your customer calls are gold. Stop losing them." | Book Demo |
| 3 | ICP Builder | "Know your customer better than they know themselves" | Try Free |
| 4 | Research Coach | "An AI research coach, not just a transcript tool" | Start Free |
| 5 | Insights w/ Receipts | "Customer insights with receipts" | See How |

## Video Presets

```typescript
linkedInSquare:    1080 × 1080 @ 30fps
instagramReel:     1080 × 1920 @ 30fps
youtubeShort:      1080 × 1920 @ 30fps
twitterLandscape:  1920 × 1080 @ 30fps
```

## Tips

- Use **Remotion Studio** (`npm run studio`) to preview and scrub — faster than re-rendering
- Use **Claude Code** to generate new scenes: point it at this repo and describe the ad you want
- Keep screenshots at 2x resolution (e.g. 1600px wide for an 800px frame)
- For video clips, use `.mp4` with H.264 codec for best compatibility
