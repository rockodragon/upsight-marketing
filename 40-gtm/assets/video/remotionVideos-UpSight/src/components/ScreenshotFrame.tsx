import React from "react";
import { Img, OffthreadVideo, staticFile } from "remotion";
import { colors, layout } from "../lib/brand";
import { useScalePop } from "../lib/animations";

/**
 * Product screenshot or video clip in a stylized device frame.
 * Place .png screenshots or .mp4 clips in /public and reference by filename.
 *
 * Usage:
 *   <ScreenshotFrame src="dashboard-screenshot.png" delay={15} />
 *   <ScreenshotFrame src="demo-clip.mp4" type="video" delay={15} />
 */
export const ScreenshotFrame: React.FC<{
  /** Filename in /public */
  src: string;
  type?: "image" | "video";
  delay?: number;
  width?: number;
  borderColor?: string;
}> = ({
  src,
  type = "image",
  delay = 0,
  width = 800,
  borderColor = colors.sky,
}) => {
  const style = useScalePop(delay);

  return (
    <div
      style={{
        ...style,
        width,
        borderRadius: layout.radius + 4,
        overflow: "hidden",
        border: `2px solid ${borderColor}`,
        boxShadow: `0 30px 80px rgba(0,0,0,0.6), 0 0 40px ${colors.amberGlow}`,
        position: "relative",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          height: 36,
          background: colors.bgDarkAlt,
          display: "flex",
          alignItems: "center",
          paddingLeft: 14,
          gap: 7,
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#ff5f57",
          }}
        />
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#ffbd2e",
          }}
        />
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#28c840",
          }}
        />
      </div>

      {/* Content */}
      {type === "video" ? (
        <OffthreadVideo
          src={staticFile(src)}
          style={{ width: "100%", display: "block" }}
        />
      ) : (
        <Img
          src={staticFile(src)}
          style={{ width: "100%", display: "block" }}
        />
      )}
    </div>
  );
};
