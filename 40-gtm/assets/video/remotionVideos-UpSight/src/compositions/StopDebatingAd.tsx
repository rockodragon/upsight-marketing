import React from "react";
import { Sequence, useVideoConfig } from "remotion";
import { MarketingBackground } from "../components/MarketingBackground";
import { SceneSlackDebate } from "./SceneSlackDebate";
import { SceneEvidenceReveal } from "./SceneEvidenceReveal";
import { SceneInsightToAction } from "./SceneInsightToAction";
import { SceneCTAConviction } from "./SceneCTAConviction";

/**
 * "Stop Debating" Ad — Theme 1: Conversations to Conviction to Traction
 *
 * Target: Founders, CEOs, Product Leaders
 * Message: Evidence → Decision → Action → Traction
 * Format: LinkedIn Square (1080×1080 @ 30fps)
 *
 * 4 scenes × ~6 sec each ≈ 24 sec total @ 30fps = 720 frames
 *
 * Timeline (in frames @ 30fps):
 *   Scene 1  Slack Debate       0 – 210   (0s – 7s)     The old way
 *   Scene 2  Evidence Reveal  180 – 400   (6s – 13.3s)  What customers said
 *   Scene 3  Insight→Action   370 – 570   (12.3s – 19s) The full arc
 *   Scene 4  CTA              540 – 720   (18s – 24s)   Stop debating
 *
 * OPTIONAL PRODUCT SCREENSHOTS (drop into /public):
 *   - evidence-cards.png      → Replace SceneEvidenceReveal with SceneProductDemo
 *   - insight-with-receipts.png → Add between Evidence and Action scenes
 *   - task-shipped.png         → Add to SceneInsightToAction
 *
 * To render:
 *   npx remotion render src/index.ts StopDebatingAd --output=out/StopDebatingAd.mp4
 */
export const StopDebatingAd: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <MarketingBackground>
      {/* Scene 1: Slack debate — "every team meeting" (0–6s) */}
      <Sequence from={0} durationInFrames={6 * fps} name="SlackDebate">
        <SceneSlackDebate />
      </Sequence>

      {/* Scene 2: Evidence reveal — "what customers actually said" (6–12s) */}
      <Sequence from={6 * fps} durationInFrames={6 * fps} name="EvidenceReveal">
        <SceneEvidenceReveal />
      </Sequence>

      {/* Scene 3: Insight to action — "3 days to decision, 2 weeks to ship" (12–18s) */}
      <Sequence
        from={12 * fps}
        durationInFrames={6 * fps}
        name="InsightToAction"
      >
        <SceneInsightToAction />
      </Sequence>

      {/* Scene 4: CTA — "Stop debating. Start knowing. Start shipping." (18–24s) */}
      <Sequence from={18 * fps} durationInFrames={6 * fps} name="CTA">
        <SceneCTAConviction />
      </Sequence>
    </MarketingBackground>
  );
};
