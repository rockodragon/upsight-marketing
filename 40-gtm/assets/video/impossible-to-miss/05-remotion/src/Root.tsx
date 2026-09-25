import React from "react";
import { Composition } from "remotion";
import { CaptionComposition } from "./captions/CaptionComposition";
import { ImpossibleToMiss } from "./compositions/ImpossibleToMiss";
import { getTotalDurationInFrames, videoScript } from "./lib/script";

export const RemotionRoot: React.FC = () => {
  const { width, height, fps } = videoScript.format;

  return (
    <>
      <Composition
        id="ImpossibleToMiss"
        component={ImpossibleToMiss}
        width={width}
        height={height}
        fps={fps}
        durationInFrames={getTotalDurationInFrames(fps)}
        defaultProps={{ burnCaptions: true }}
      />
      <Composition
        id="CaptionDemo"
        component={CaptionComposition}
        width={1080}
        height={1920}
        fps={30}
        durationInFrames={30 * 30}
        defaultProps={{
          videoSrc: "video/demo-source.mp4",
          captionsSrc: "captions/demo-source.json",
          captionPreset: "clean",
        }}
      />
    </>
  );
};
