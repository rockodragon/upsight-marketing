import React from "react";
import { Composition } from "remotion";
import { CaptionComposition } from "./captions/CaptionComposition";
import { SsdDemo } from "./compositions/ssd-demo/SsdDemo";
import { ssdScript, totalDurationInFrames } from "./lib/script";

export const RemotionRoot: React.FC = () => {
  const { width, height, fps } = ssdScript.format;

  return (
    <>
      <Composition
        id="SsdDemo"
        component={SsdDemo}
        width={width}
        height={height}
        fps={fps}
        durationInFrames={totalDurationInFrames(fps)}
      />
      {/*
        Example caption integration — see src/captions/README.md.
        Point videoSrc/captionsSrc at real files under public/ (04-assets/)
        once you've run `npm run caption-video`. captionsSrc is the JSON
        the CLI writes; captionPreset picks clean/emphasis/productDemo.
      */}
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
