import React from "react";
import { Composition } from "remotion";
import { SurveyKillerAd } from "./compositions/SurveyKillerAd";
import { StopDebatingAd } from "./compositions/StopDebatingAd";
import { SceneProductDemo } from "./compositions/SceneProductDemo";
import { KnowYourCommunityAd } from "./compositions/KnowYourCommunityAd";
import { SmartSurveysAd } from "./compositions/SmartSurveysAd";
import { TradeShowAd } from "./compositions/tradeshow/TradeShowAd";
import { presets } from "./lib/brand";

/**
 * Root — register every ad composition here.
 *
 * Each <Composition> shows up in Remotion Studio sidebar
 * and can be rendered individually via CLI.
 *
 * To add a new ad:
 *   1. Create a new composition component in /compositions
 *   2. Register it here with a unique `id`
 *   3. Run: npx remotion render src/index.ts <id> --output=out/<id>.mp4
 */
export const RemotionRoot: React.FC = () => {
  const sq = presets.linkedInSquare;

  return (
    <>
      {/* ─── Ad #1: Survey Killer ─────────────────────── */}
      <Composition
        id="SurveyKillerAd"
        component={SurveyKillerAd}
        width={sq.width}
        height={sq.height}
        fps={sq.fps}
        durationInFrames={24 * sq.fps} // 24 seconds
      />

      {/* ─── Ad #2: Stop Debating (Theme 1) ────────────── */}
      <Composition
        id="StopDebatingAd"
        component={StopDebatingAd}
        width={sq.width}
        height={sq.height}
        fps={sq.fps}
        durationInFrames={24 * sq.fps} // 24 seconds
      />

      {/* ─── Ad #3: Know Your Community (Theme 2) ─────── */}
      <Composition
        id="KnowYourCommunityAd"
        component={KnowYourCommunityAd}
        width={sq.width}
        height={sq.height}
        fps={sq.fps}
        durationInFrames={24 * sq.fps}
      />

      {/* ─── Ad #4: Smart Surveys ────────────────────── */}
      <Composition
        id="SmartSurveysAd"
        component={SmartSurveysAd}
        width={sq.width}
        height={sq.height}
        fps={sq.fps}
        durationInFrames={24 * sq.fps}
      />

      {/* ─── Trade Show Ad (65s, 1920×1080) ───────────── */}
      <Composition
        id="TradeShowAd"
        component={TradeShowAd}
        width={presets.tradeShow.width}
        height={presets.tradeShow.height}
        fps={presets.tradeShow.fps}
        durationInFrames={79 * presets.tradeShow.fps}
      />

      {/* ─── Product Demo Template ────────────────────── */}
      {/*
       * Drop a screenshot into /public and render this composition.
       * Override props via CLI:
       *   npx remotion render src/index.ts ProductDemo \
       *     --props='{"src":"my-screenshot.png","headline":"Your Headline"}'
       */}
      <Composition
        id="ProductDemo"
        component={SceneProductDemo}
        width={sq.width}
        height={sq.height}
        fps={sq.fps}
        durationInFrames={6 * sq.fps}
        defaultProps={{
          label: "// live demo",
          headline: "See UpSight in Action",
          src: "product-screenshot.png",
          type: "image" as const,
        }}
      />
    </>
  );
};
