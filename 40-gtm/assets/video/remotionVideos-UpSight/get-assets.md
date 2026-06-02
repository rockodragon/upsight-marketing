# Trade Show Video — Assets to Collect

All assets go in `/public/tradeshow/`. The video currently runs with pure motion-design mockups for everything, but real product footage will make it dramatically more compelling.

---

## PRIORITY 1 — Screenshots (will replace motion mockups)

These are used in Scenes 4, 5, and 6. Without them the video still works (I've built animated mockups), but real product screenshots will add authenticity and let people see the actual product.

| # | Asset | Scene | What to Capture | Size |
|---|-------|-------|----------------|------|
| 1 | `interview-ui.png` | Scene 4 (Discover) | The AI-guided conversation/interview interface. Show an active conversation with the AI asking questions and insights being tagged in real-time. | 1920x1080 or larger |
| 2 | `survey-builder.png` | Scene 5 (Engage) | The survey builder or an active survey with responses coming in. Show question types (scale, open-ended, choice). | 1920x1080 or larger |
| 3 | `themes-analysis.png` | Scene 6 (Analyze) | The themes/analysis dashboard. Show theme bars with counts, evidence cards with actual quotes, and any connection/pattern visualization. | 1920x1080 or larger |
| 4 | `evidence-cards.png` | Scene 6 (Analyze) | Close-up of evidence cards showing quotes linked to sources (the "receipts" view). Shows the traceability differentiator. | 1920x1080 or larger |

**How to capture:** Use browser at 1920x1080 resolution. Cmd+Shift+4 on Mac for region capture, or use browser DevTools > device toolbar to set exact dimensions. Use dark mode if available for consistency with the video's dark theme.

---

## PRIORITY 2 — Video Clips (will make it viscerally real)

Short video clips of the product in action. Even 3-5 second clips add tremendous authenticity. These can be dropped into the ScreenshotFrame component.

| # | Asset | Scene | What to Record | Duration |
|---|-------|-------|---------------|----------|
| 5 | `interview-recording.mp4` | Scene 4 | Screen recording of an actual interview being conducted in UpSight — AI asking questions, user responding, insights appearing in the sidebar | 5-8 sec |
| 6 | `survey-responses-flow.mp4` | Scene 5 | Screen recording of survey responses coming in and a profile building in real-time | 4-6 sec |
| 7 | `themes-emerging.mp4` | Scene 6 | Screen recording of themes/patterns being generated from raw data — the "noise to signal" moment | 4-6 sec |

**How to record:** Use QuickTime Player > File > New Screen Recording, or Loom, or OBS. Record at 1920x1080 or higher. MP4 format, H.264 codec. Trim to just the "money moment" — the part that makes people go "oh, that's cool."

---

## PRIORITY 3 — Interview Footage (the human element)

Real video of interviews being recorded would be incredibly powerful. Shows the human + AI collaboration angle.

| # | Asset | Scene | What It Shows | Duration |
|---|-------|-------|--------------|----------|
| 8 | `interview-clip-1.mp4` | Scene 4 | A real customer interview being recorded in UpSight — the interviewer asking a question, the interviewee responding, and UpSight capturing/analyzing in real-time | 3-5 sec |
| 9 | `interview-clip-2.mp4` | Scene 4 | Different interview — shows variety of conversations | 3-5 sec |

**Note:** These can be existing recordings you have. Just need a short, compelling clip showing the product in action with real people. Can blur/obscure faces if needed for privacy.

---

## PRIORITY 4 — Supplementary (nice-to-have)

| # | Asset | Scene | What It Shows |
|---|-------|-------|--------------|
| 10 | `persona-cards.png` | Scene 5 | Person/persona cards showing living profiles built from conversations |
| 11 | `action-items.png` | Scene 7 | The "discovery to action" flow — insights turning into tasks/decisions |
| 12 | `team-workspace.png` | Scene 7 | Multi-person workspace showing team collaboration on insights |

---

## File Naming & Placement

```
public/
└── tradeshow/
    ├── interview-ui.png
    ├── survey-builder.png
    ├── themes-analysis.png
    ├── evidence-cards.png
    ├── interview-recording.mp4
    ├── survey-responses-flow.mp4
    ├── themes-emerging.mp4
    ├── interview-clip-1.mp4
    ├── interview-clip-2.mp4
    ├── persona-cards.png
    ├── action-items.png
    └── team-workspace.png
```

## Specs Summary

- **Screenshots:** PNG, minimum 1920x1080, dark mode preferred
- **Videos:** MP4 (H.264), 1920x1080 or higher, 3-8 seconds each
- **All assets:** Should look clean and professional — this plays on a big screen at a trade show

## What's Already Built Without Assets

The video currently uses motion-designed mockups for everything:
- Scene 4: Animated chat bubbles with "insight detected" badges
- Scene 5: Survey cards with response bars + living profile card
- Scene 6: Floating quote fragments that converge into theme bars

These look great on their own, but real product footage will elevate it significantly. We can incrementally swap in assets as you collect them.
