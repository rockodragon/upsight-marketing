import React from "react";
import { Composition } from "remotion";
import { HomepageHero } from "./compositions/homepage/HomepageHero";
import { homepageHeroScript } from "./lib/script";

export const RemotionRoot: React.FC = () => {
  const { width, height, fps, durationSeconds } = homepageHeroScript.format;

  return (
    <Composition
      id="HomepageHero"
      component={HomepageHero}
      width={width}
      height={height}
      fps={fps}
      durationInFrames={durationSeconds * fps}
    />
  );
};
