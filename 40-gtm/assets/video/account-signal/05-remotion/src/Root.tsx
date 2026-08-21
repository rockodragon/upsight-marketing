import React from "react";
import { Composition } from "remotion";
import { AccountSignal } from "./compositions/AccountSignal";
import "./lib/fonts";
import { getTotalDurationInFrames, videoScript } from "./lib/script";

export const RemotionRoot: React.FC = () => {
  const { width, height, fps } = videoScript.format;

  return (
    <Composition
      id="AccountSignal"
      component={AccountSignal}
      width={width}
      height={height}
      fps={fps}
      durationInFrames={getTotalDurationInFrames(fps)}
      defaultProps={{ burnCaptions: true }}
    />
  );
};
