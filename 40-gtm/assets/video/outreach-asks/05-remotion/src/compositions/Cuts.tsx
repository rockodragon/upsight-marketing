import React from "react";
import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";
import { MarketingBackground } from "../components/MarketingBackground";
import { ActI } from "../scenes/ActI";
import { BeatProfile, SkippedQuestions } from "../scenes/BeatProfile";
import { BeatWaiting } from "../scenes/BeatLoop";
import { ActVI } from "../scenes/ActClose";
import { colors } from "../lib/brand";
import { Frame } from "../components/Primitives";

/** :30 paid — remembers, and nothing falls through. */
export const PaidCut30: React.FC = () => {
  const { fps } = useVideoConfig();
  return (
    <MarketingBackground>
      <Sequence from={0} durationInFrames={10 * fps} name="Cold open">
        <ActI mode="paid30" />
      </Sequence>
      <Sequence from={10 * fps} durationInFrames={8 * fps} name="It remembers">
        <BeatProfile compact />
      </Sequence>
      <Sequence from={18 * fps} durationInFrames={8 * fps} name="Nothing falls through">
        <BeatWaiting compact />
      </Sequence>
      <Sequence from={26 * fps} durationInFrames={4 * fps} name="Close">
        <ActVI compact />
      </Sequence>
    </MarketingBackground>
  );
};

/** :15 social — no narration. The skipped question is the whole argument. */
export const SocialCut15: React.FC = () => {
  const { fps } = useVideoConfig();
  return (
    <MarketingBackground>
      <Sequence from={0} durationInFrames={10 * fps} name="Cold open">
        <ActI mode="social15" />
      </Sequence>
      <Sequence from={10 * fps} durationInFrames={5 * fps} name="Already answered">
        <AbsoluteFill style={{ backgroundColor: colors.bg }}>
          <Frame>
            <SkippedQuestions />
          </Frame>
        </AbsoluteFill>
      </Sequence>
    </MarketingBackground>
  );
};
