import React from "react";
import { Composition } from "remotion";
import { VideoHero } from "./compositions/VideoHero";
import { videoScript } from "./lib/script";

export const RemotionRoot: React.FC = () => {
  const { width, height, fps, durationSeconds } = videoScript.format;

  return (
    <Composition
      id="VideoHero"
      component={VideoHero}
      width={width}
      height={height}
      fps={fps}
      durationInFrames={durationSeconds * fps}
    />
  );
};
