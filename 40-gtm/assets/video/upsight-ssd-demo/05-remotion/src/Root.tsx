import React from "react";
import { Composition } from "remotion";
import { SsdDemo } from "./compositions/ssd-demo/SsdDemo";
import { ssdScript } from "./lib/script";

export const RemotionRoot: React.FC = () => {
  const { width, height, fps, durationSeconds } = ssdScript.format;

  return (
    <Composition
      id="SsdDemo"
      component={SsdDemo}
      width={width}
      height={height}
      fps={fps}
      durationInFrames={durationSeconds * fps}
    />
  );
};
