import React from "react";
import { Sequence, useVideoConfig } from "remotion";
import { MarketingBackground } from "../components/MarketingBackground";
import { SceneHook } from "./SceneHook";
import { SceneStats } from "./SceneStats";
import { SceneSolution } from "./SceneSolution";
import { SceneComparison } from "./SceneComparison";
import { SceneCTA } from "./SceneCTA";

/**
 * Survey Killer Ad — "Stop wasting time on boring surveys"
 *
 * 5 scenes × ~4 sec each ≈ 24 sec total @ 30fps = 720 frames.
 *
 * Timeline (in frames @ 30fps):
 *   Scene 1  Hook          0 – 120   (0s – 4s)
 *   Scene 2  Stats       100 – 260   (3.3s – 8.7s)
 *   Scene 3  Solution    240 – 420   (8s – 14s)
 *   Scene 4  Comparison  400 – 570   (13.3s – 19s)
 *   Scene 5  CTA         550 – 720   (18.3s – 24s)
 *
 * Scenes overlap slightly for crossfade transitions.
 */
export const SurveyKillerAd: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <MarketingBackground>
      {/* Scene 1: Hook */}
      <Sequence from={0} durationInFrames={4 * fps} name="Hook">
        <SceneHook />
      </Sequence>

      {/* Scene 2: Pain stats */}
      <Sequence from={Math.round(3.3 * fps)} durationInFrames={Math.round(5.3 * fps)} name="Stats">
        <SceneStats />
      </Sequence>

      {/* Scene 3: Solution chat */}
      <Sequence from={8 * fps} durationInFrames={6 * fps} name="Solution">
        <SceneSolution />
      </Sequence>

      {/* Scene 4: Comparison bars */}
      <Sequence from={Math.round(13.3 * fps)} durationInFrames={Math.round(5.7 * fps)} name="Comparison">
        <SceneComparison />
      </Sequence>

      {/* Scene 5: CTA */}
      <Sequence from={Math.round(18.3 * fps)} durationInFrames={Math.round(5.7 * fps)} name="CTA">
        <SceneCTA />
      </Sequence>
    </MarketingBackground>
  );
};
