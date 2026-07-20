import React from "react";
import { Composition } from "remotion";
import { CiV2 } from "./compositions/CiV2";
import { getTotalDurationInFrames, videoScript } from "./lib/script";

export const RemotionRoot: React.FC = () => {
  const { width, height, fps } = videoScript.format;

  return (
    <Composition
      id="CiV2"
      component={CiV2}
      width={width}
      height={height}
      fps={fps}
      durationInFrames={getTotalDurationInFrames(videoScript)}
    />
  );
};
