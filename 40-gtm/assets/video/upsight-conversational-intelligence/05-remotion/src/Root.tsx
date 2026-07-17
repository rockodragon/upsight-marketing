import React from "react";
import { Composition } from "remotion";
import { ConversationalIntelligence } from "./compositions/ConversationalIntelligence";
import { StreamingMarquee } from "./compositions/StreamingMarquee";
import {
  CLIP_DURATION_SECONDS,
  CLIP_FPS,
  MARQUEE_DURATION_SECONDS,
} from "./lib/clips";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Full 30s LinkedIn VSL */}
      <Composition
        id="ConversationalIntelligence"
        component={ConversationalIntelligence}
        width={1920}
        height={1080}
        fps={CLIP_FPS}
        durationInFrames={CLIP_DURATION_SECONDS * CLIP_FPS}
      />

      {/* Reusable short streaming-marquee asset */}
      <Composition
        id="StreamingMarquee"
        component={StreamingMarquee}
        width={1920}
        height={1080}
        fps={CLIP_FPS}
        durationInFrames={MARQUEE_DURATION_SECONDS * CLIP_FPS}
      />
    </>
  );
};
