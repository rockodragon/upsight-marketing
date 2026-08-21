import React from "react";
import { Composition } from "remotion";
import { TalkingHeadsMarquee } from "./compositions/TalkingHeadsMarquee";
import { CLIP_FPS, DURATION_SECONDS } from "./lib/clips";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="TalkingHeadsMarquee"
      component={TalkingHeadsMarquee}
      width={1920}
      height={1080}
      fps={CLIP_FPS}
      durationInFrames={DURATION_SECONDS * CLIP_FPS}
    />
  );
};
