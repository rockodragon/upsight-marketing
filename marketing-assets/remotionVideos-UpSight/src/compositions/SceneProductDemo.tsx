import React from "react";
import { AbsoluteFill } from "remotion";
import { colors, fonts } from "../lib/brand";
import { useSlideUp } from "../lib/animations";
import { MonoLabel } from "../components/MonoLabel";
import { ScreenshotFrame } from "../components/ScreenshotFrame";

/**
 * Generic product demo scene.
 * Drop a screenshot or screen recording into /public and pass the filename.
 *
 * Props let you customize per use-case ad:
 *   <SceneProductDemo
 *     label="// live demo"
 *     headline="See UpSight in Action"
 *     src="dashboard-screenshot.png"
 *   />
 */
export const SceneProductDemo: React.FC<{
  label?: string;
  headline?: string;
  /** Filename in /public — png or mp4 */
  src?: string;
  type?: "image" | "video";
}> = ({
  label = "// product",
  headline = "See UpSight in Action",
  src = "product-screenshot.png",
  type = "image",
}) => {
  const headlineStyle = useSlideUp(10);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 60,
        gap: 28,
      }}
    >
      <MonoLabel text={label} delay={5} />

      <div
        style={{
          ...headlineStyle,
          fontFamily: fonts.sans,
          fontWeight: 800,
          fontSize: 56,
          color: colors.textLight,
          textAlign: "center",
          letterSpacing: "-0.03em",
          marginBottom: 8,
        }}
      >
        {headline}
      </div>

      <ScreenshotFrame src={src} type={type} delay={20} width={820} />
    </AbsoluteFill>
  );
};
