# Survey VSL — The Survey That Talks Back

Feature-explicit survey VSL. Rewrites `final/SurveyVSL/SurveyVSL.mp4`.

| Step | Folder | Status |
|------|--------|--------|
| 1 | `01-script/` | Script + beats locked in JSON |
| 2 | `02-capture/` | Pending real Personalized Ask / interviewer captures |
| 3 | `03-audio/` | Pending VO |
| 4 | `04-assets/` | Shared clips hardlinked; brand stills as placeholders |
| 5 | `05-remotion/` | Composition built |

```bash
cd 05-remotion
npm install
npm run studio
npm run render          # 16:9 → out/SurveyVSL.mp4
npm run render:square   # 1:1 captions burned in
npm run render:portrait # 4:5 captions burned in
```
