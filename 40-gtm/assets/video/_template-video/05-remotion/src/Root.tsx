import React from "react";
import { Composition } from "remotion";
import { CaptionComposition } from "./captions/CaptionComposition";
import { VideoHero } from "./compositions/VideoHero";
import { videoScript } from "./lib/script";

export const RemotionRoot: React.FC = () => {
  const { width, height, fps, durationSeconds } = videoScript.format;

  return (
    <>
      <Composition
        id="VideoHero"
        component={VideoHero}
        width={width}
        height={height}
        fps={fps}
        durationInFrames={durationSeconds * fps}
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
