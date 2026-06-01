import React from "react";
import { Sequence, useVideoConfig } from "remotion";
import { MarketingBackground } from "../../components/MarketingBackground";
import { SceneTS_OpeningTension } from "./SceneTS_OpeningTension";
import { SceneTS_RealProblem } from "./SceneTS_RealProblem";
import { SceneTS_BrandReveal } from "./SceneTS_BrandReveal";
import { SceneTS_Discover } from "./SceneTS_Discover";
import { SceneTS_Engage } from "./SceneTS_Engage";
import { SceneTS_Analyze } from "./SceneTS_Analyze";
import { SceneTS_Integrations } from "./SceneTS_Integrations";
import { SceneTS_Payoff } from "./SceneTS_Payoff";
import { SceneTS_SocialProof } from "./SceneTS_SocialProof";
import { SceneTS_CTALoop } from "./SceneTS_CTALoop";
import { SceneTS_WebHero } from "./SceneTS_WebHero";

/**
 * Trade Show Ad — 65-second looping widescreen video (1920×1080)
 *
 * NO OVERLAPPING SCENES — each scene fully exits before the next enters.
 *
 * Timeline (in seconds @ 30fps = 1950 frames total):
 *
 *   Scene 1   Opening Tension     0 – 6s     (0 – 180)
 *   Scene 2   The Real Problem    6 – 12s    (180 – 360)
 *   Scene 3   Brand Reveal       12 – 17s    (360 – 510)
 *   Scene 4   Discover           17 – 24s    (510 – 720)
 *   Scene 5   Engage             24 – 31s    (720 – 930)
 *   Scene 6   Analyze            31 – 38s    (930 – 1140)
 *   Scene 7   Integrations       38 – 44s    (1140 – 1320)
 *   Scene 8   The Payoff         44 – 48s    (1320 – 1440)
 *   Scene 9   Social Proof       48 – 53s    (1440 – 1590)
 *   Scene 10  CTA + QR Code      53 – 65s    (1590 – 1950)
 *   Scene 11  Website Hero       65 – 79s    (1950 – 2370)
 */
export const TradeShowAd: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <MarketingBackground>
      {/* Scene 1: Opening Tension — "Code is cheap. GET YOUR CUSTOMERS" */}
      <Sequence from={0} durationInFrames={6 * fps} name="OpeningTension">
        <SceneTS_OpeningTension />
      </Sequence>

      {/* Scene 2: The Real Problem — Pain points with strikethroughs */}
      <Sequence from={6 * fps} durationInFrames={6 * fps} name="RealProblem">
        <SceneTS_RealProblem />
      </Sequence>

      {/* Scene 3: Brand Reveal — Constellation → Logo */}
      <Sequence from={12 * fps} durationInFrames={5 * fps} name="BrandReveal">
        <SceneTS_BrandReveal />
      </Sequence>

      {/* Scene 4: Discover — AI-guided conversations */}
      <Sequence from={17 * fps} durationInFrames={7 * fps} name="Discover">
        <SceneTS_Discover />
      </Sequence>

      {/* Scene 5: Engage — Smart adaptive surveys */}
      <Sequence from={24 * fps} durationInFrames={7 * fps} name="Engage">
        <SceneTS_Engage />
      </Sequence>

      {/* Scene 6: Analyze — From noise to signal */}
      <Sequence from={31 * fps} durationInFrames={7 * fps} name="Analyze">
        <SceneTS_Analyze />
      </Sequence>

      {/* Scene 7: Integrations — Claude, ChatGPT, OpenClaw, Co-Work */}
      <Sequence from={38 * fps} durationInFrames={6 * fps} name="Integrations">
        <SceneTS_Integrations />
      </Sequence>

      {/* Scene 8: The Payoff — Outcome cards */}
      <Sequence from={44 * fps} durationInFrames={4 * fps} name="Payoff">
        <SceneTS_Payoff />
      </Sequence>

      {/* Scene 9: Social Proof — Trusted organizations */}
      <Sequence from={48 * fps} durationInFrames={5 * fps} name="SocialProof">
        <SceneTS_SocialProof />
      </Sequence>

      {/* Scene 10: CTA + QR Code — hold for 12 seconds */}
      <Sequence from={53 * fps} durationInFrames={12 * fps} name="CTALoop">
        <SceneTS_CTALoop />
      </Sequence>

      {/* Scene 11: Website Hero Video — 14 seconds */}
      <Sequence from={65 * fps} durationInFrames={14 * fps} name="WebHero">
        <SceneTS_WebHero />
      </Sequence>
    </MarketingBackground>
  );
};
