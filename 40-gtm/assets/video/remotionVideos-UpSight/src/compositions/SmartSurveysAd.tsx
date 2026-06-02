import React from "react";
import { Sequence, useVideoConfig } from "remotion";
import { MarketingBackground } from "../components/MarketingBackground";
import { SceneSurveyOldWay } from "./SceneSurveyOldWay";
import { SceneSmartLayers } from "./SceneSmartLayers";
import { SceneNeverAskTwice } from "./SceneNeverAskTwice";
import { SceneCTASmartSurveys } from "./SceneCTASmartSurveys";

/**
 * "Smart Surveys" Ad — Surveys that build living customer profiles
 *
 * Target: Product leaders, researchers, founders
 * Message: Old way (survey→CSV→nothing) vs UpSight (cumulative profiles)
 * Format: LinkedIn Square (1080x1080 @ 30fps)
 *
 * 4 scenes x 6 sec each = 24 sec total @ 30fps = 720 frames
 *
 * Timeline:
 *   Scene 1  Old Way            0 – 180   (0s – 6s)    The problem
 *   Scene 2  Smart Layers     180 – 360   (6s – 12s)   Profile builds
 *   Scene 3  Never Ask Twice  360 – 540   (12s – 18s)  The differentiator
 *   Scene 4  CTA              540 – 720   (18s – 24s)  Smart surveys
 *
 * To render:
 *   npx remotion render src/index.ts SmartSurveysAd --output=out/SmartSurveysAd.mp4
 */
export const SmartSurveysAd: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <MarketingBackground>
      {/* Scene 1: The old way — survey → CSV → good luck */}
      <Sequence from={0} durationInFrames={6 * fps} name="OldWay">
        <SceneSurveyOldWay />
      </Sequence>

      {/* Scene 2: Every interaction builds the profile */}
      <Sequence from={6 * fps} durationInFrames={6 * fps} name="SmartLayers">
        <SceneSmartLayers />
      </Sequence>

      {/* Scene 3: Never ask what you already know */}
      <Sequence from={12 * fps} durationInFrames={6 * fps} name="NeverAskTwice">
        <SceneNeverAskTwice />
      </Sequence>

      {/* Scene 4: CTA — Smart surveys. Living profiles. */}
      <Sequence from={18 * fps} durationInFrames={6 * fps} name="CTA">
        <SceneCTASmartSurveys />
      </Sequence>
    </MarketingBackground>
  );
};
