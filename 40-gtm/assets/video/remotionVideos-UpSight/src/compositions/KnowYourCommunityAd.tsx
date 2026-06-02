import React from "react";
import { Sequence, useVideoConfig } from "remotion";
import { MarketingBackground } from "../components/MarketingBackground";
import { SceneCommunityQuestion } from "./SceneCommunityQuestion";
import { SceneSurveyResponses } from "./SceneSurveyResponses";
import { ScenePatternsEmerge } from "./ScenePatternsEmerge";
import { SceneCTACommunity } from "./SceneCTACommunity";

/**
 * "Know Your Community" Ad — Theme 2: Surveys & Audience Understanding
 *
 * Target: DevRel, Non-Profits, Community Leaders, Organizers
 * Message: Ask → Listen → Discover patterns → Act
 * Format: LinkedIn Square (1080x1080 @ 30fps)
 *
 * 4 scenes x 6 sec each = 24 sec total @ 30fps = 720 frames
 *
 * Timeline (in frames @ 30fps):
 *   Scene 1  Community Question   0 – 180   (0s – 6s)
 *   Scene 2  Survey Responses   180 – 360   (6s – 12s)
 *   Scene 3  Patterns Emerge    360 – 540   (12s – 18s)
 *   Scene 4  CTA                540 – 720   (18s – 24s)
 *
 * To render:
 *   npx remotion render src/index.ts KnowYourCommunityAd --output=out/KnowYourCommunityAd.mp4
 */
export const KnowYourCommunityAd: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <MarketingBackground>
      {/* Scene 1: "Do you really know them?" */}
      <Sequence from={0} durationInFrames={6 * fps} name="CommunityQuestion">
        <SceneCommunityQuestion />
      </Sequence>

      {/* Scene 2: Survey responses flowing in */}
      <Sequence
        from={6 * fps}
        durationInFrames={6 * fps}
        name="SurveyResponses"
      >
        <SceneSurveyResponses />
      </Sequence>

      {/* Scene 3: Patterns emerge — theme bars */}
      <Sequence
        from={12 * fps}
        durationInFrames={6 * fps}
        name="PatternsEmerge"
      >
        <ScenePatternsEmerge />
      </Sequence>

      {/* Scene 4: CTA — "Know your community" */}
      <Sequence from={18 * fps} durationInFrames={6 * fps} name="CTA">
        <SceneCTACommunity />
      </Sequence>
    </MarketingBackground>
  );
};
