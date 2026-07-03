import React from "react";
import { Sequence, useVideoConfig } from "remotion";
import { MarketingBackground } from "../../components/MarketingBackground";
import { SceneHeroTension } from "./SceneHeroTension";
import { SceneHeroPromise } from "./SceneHeroPromise";
import { SceneHeroMeetingPrep } from "./SceneHeroMeetingPrep";
import { SceneHeroClose } from "./SceneHeroClose";

/**
 * Homepage Hero Video — getupsight.com
 *
 * Messaging wedge (messaging-house): weekly leadership meeting prep.
 * Brand tagline (brand-brief): Get your customers. Build conviction.
 *
 * Format: 1920×1080 @ 30fps, ~14 seconds
 *
 * Timeline:
 *   Scene 1  Tension         0 – 3s    Conversations exist, meeting starts from scratch
 *   Scene 2  Promise         3 – 7s    "Your weekly leadership meeting, already prepared."
 *   Scene 3  Meeting Prep    7 – 12s   Scorecard + issues + actions UI
 *   Scene 4  Brand Close     12 – 14s  Logo, tagline, CTA
 *
 * Render:
 *   npm run render:homepage-hero
 *   npx remotion render src/index.ts HomepageHero --output=out/homepage-hero.mp4
 */
export const HomepageHero: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <MarketingBackground>
      <Sequence from={0} durationInFrames={3 * fps} name="Tension">
        <SceneHeroTension />
      </Sequence>

      <Sequence from={3 * fps} durationInFrames={4 * fps} name="Promise">
        <SceneHeroPromise />
      </Sequence>

      <Sequence from={7 * fps} durationInFrames={5 * fps} name="MeetingPrep">
        <SceneHeroMeetingPrep />
      </Sequence>

      <Sequence from={12 * fps} durationInFrames={2 * fps} name="Close">
        <SceneHeroClose />
      </Sequence>
    </MarketingBackground>
  );
};
