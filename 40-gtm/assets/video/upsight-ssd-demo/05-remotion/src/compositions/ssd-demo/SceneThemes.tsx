import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fonts } from "../../lib/brand";
import { useFadeIn } from "../../lib/animations";
import { MonoLabel } from "../../components/MonoLabel";
import { ScreenshotFrame } from "../../components/ScreenshotFrame";
import { getScene } from "../../lib/script";

export const SceneThemes: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scene = getScene("themes");
  const fade = useFadeIn(0, 8);

  const headline = spring({
    frame: frame - 4,
    fps,
    config: { damping: 26, stiffness: 140, mass: 0.7 },
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: fade,
        padding: "48px 64px",
      }}
    >
      <MonoLabel text={scene.label ?? ""} delay={2} />

      <div
        style={{
          marginTop: 16,
          textAlign: "center",
          marginBottom: 20,
          opacity: headline,
          transform: `translateY(${interpolate(headline, [0, 1], [16, 0])}px)`,
        }}
      >
        <div
          style={{
            fontFamily: fonts.sans,
            fontWeight: 900,
            fontSize: 40,
            color: colors.textLight,
          }}
        >
          {scene.headline}
        </div>
        {scene.subhead && (
          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: 20,
              color: colors.textDim,
              marginTop: 6,
              fontStyle: "italic",
            }}
          >
            {scene.subhead}
          </div>
        )}
      </div>

      {scene.screenshot && (
        <ScreenshotFrame
          src={scene.screenshot}
          delay={8}
          width={scene.screenshotWidth ?? 1100}
          borderColor={colors.amber}
        />
      )}
    </AbsoluteFill>
  );
};
