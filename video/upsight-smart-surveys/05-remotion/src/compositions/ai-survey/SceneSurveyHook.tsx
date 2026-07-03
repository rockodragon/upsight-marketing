import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fonts } from "../../lib/brand";
import { useSceneFade, useSlideUp, useStrikethrough } from "../../lib/animations";
import { MonoLabel } from "../../components/MonoLabel";
import { getScene } from "../../lib/script";

export const SceneSurveyHook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const script = getScene("hook");
  const sceneOpacity = useSceneFade(durationInFrames);

  const line1 = spring({
    frame: frame - 10,
    fps,
    config: { damping: 28, stiffness: 120, mass: 0.8 },
  });

  const strike = useStrikethrough(42, 14);
  const sub = useSlideUp(55, 30);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: sceneOpacity,
        padding: 80,
      }}
    >
      <MonoLabel text={script.label ?? ""} delay={5} />

      <div
        style={{
          marginTop: 40,
          textAlign: "center",
          fontFamily: fonts.sans,
          fontWeight: 900,
          fontSize: 88,
          letterSpacing: "-0.04em",
          lineHeight: 1.05,
          opacity: line1,
          transform: `translateY(${interpolate(line1, [0, 1], [50, 0])}px)`,
        }}
      >
        <span style={{ color: colors.textDim, fontWeight: 500, fontSize: 52 }}>
          {script.headlinePrefix}{" "}
        </span>
        <br />
        <span style={{ position: "relative", color: colors.textLight }}>
          <span style={{ color: colors.red }}>{script.headlineStrike}</span>
          <div
            style={{
              position: "absolute",
              left: -6,
              right: -6,
              top: "52%",
              height: 7,
              background: colors.red,
              transformOrigin: "left",
              transform: `scaleX(${strike})`,
            }}
          />
        </span>{" "}
        {script.headlineSuffix}
      </div>

      <div
        style={{
          ...sub,
          marginTop: 32,
          fontFamily: fonts.sans,
          fontSize: 28,
          color: colors.textDim,
          maxWidth: 800,
        }}
      >
        {script.subhead}
      </div>
    </AbsoluteFill>
  );
};
