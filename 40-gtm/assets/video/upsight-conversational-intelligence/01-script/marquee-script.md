# Conversational Intelligence - Marquee Script

## Purpose

Show that UpSight works from many real conversations, not one staged demo or one repeated talking head. The viewer should feel a stream of different customer voices moving through the product, while the three larger featured tiles explain what UpSight does with those voices.

## Format

- Composition: `StreamingMarquee`
- Length: 6 seconds
- Canvas: 1920 x 1080
- Frame rate: 30 fps
- Template: same dark UpSight background, same top label/logo, same upper featured tiles, same lower film-reel marquee

## On-Screen Story

1. The frame opens on the UpSight dark marketing background.
2. Top-left label reads `// conversational intelligence`.
3. Top-right brand lockup shows the UpSight logo and wordmark.
4. Headline enters in the upper-left band:
   `Real customer voices. Structured insight.`
5. Three large featured talking-head tiles grow into the upper-left/center area.
6. Three insight callouts appear in the right column, paired to the featured tiles:
   - Customer signal: a real customer moment, pulled straight from the source
   - Theme extraction: UpSight turns open-ended conversations into patterns
   - Evidence-backed insight: every takeaway links back to an actual conversation
7. The lower film reel scrolls continuously with a broader set of real people clips.
8. Around the final third, the brand CTA fades in:
   `Get UpSight - getupsight.com`

## Marquee Clip Direction

The lower reel should feel like a busy stream of actual interview/customer evidence. It should not look like the same three people looping. Use only real on-camera clips from `04-assets/video`.

Current reel order:

| Order | Clip ID | Asset | Intent |
|---|---|---|---|
| 1 | `m01` | `01-people-are-coming-here-to-make-connections-35s.mp4` | Start with a different event/customer face. |
| 2 | `v1` | `v1.mov` | Bring in featured speaker 1 after a non-featured clip. |
| 3 | `m02` | `02-host-a-networking-hour-or-30-minutes-proba-34s.mp4` | Add another evidence moment. |
| 4 | `v2` | `v2.mov` | Bring in featured speaker 2. |
| 5 | `m03` | `03-finding-the-right-customers-and-advocates--30s.mp4` | Add customer advocacy/startup context. |
| 6 | `m04` | `04-vendors-and-vendors-only-can-kind-of-colla-20s.mp4` | Keep the reel moving through another speaker moment. |
| 7 | `v3` | `v3.mov` | Bring in featured speaker 3 later, not adjacent to v1/v2. |
| 8 | `m05` | `05-in-the-marketing-materials-having-somethin-12s.mp4` | Add a sharing/marketing-materials evidence beat. |
| 9 | `m06` | `06-i-help-startups-and-lean-teams-better-unde-7s.mp4` | End the cycle with another distinct customer voice. |

## Edit Rules

- To change which people appear in the marquee, edit `clip-manifest.json` under `marqueeClips`.
- Keep at least six clips in the reel so the loop does not feel repetitive.
- Interleave featured clips (`v1`, `v2`, `v3`) with evidence clips (`m01`-`m06`) instead of grouping them together.
- Use `kind: "video"` for on-camera clips. Audio-only clips can be used later, but they render as waveform tiles rather than people talking.
- Keep the visual template in `StreamingMarquee.tsx` unless the layout itself needs to change.

## Source Of Truth

- Natural-language edit guide: this file.
- Machine-readable clip order: `clip-manifest.json` -> `marqueeClips`.
- React data adapter: `05-remotion/src/lib/clips.ts`.
- Visual React template: `05-remotion/src/compositions/StreamingMarquee.tsx`.
