import React from "react";
import { Img, OffthreadVideo, staticFile } from "remotion";
import { colors, layout } from "../lib/brand";
import { useScalePop } from "../lib/animations";

/** Product screenshot or clip from 04-assets/ (via public symlink). */
export const ScreenshotFrame: React.FC<{
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
      }}
    >
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
        {["#ff5f57", "#ffbd2e", "#28c840"].map((c) => (
          <div
            key={c}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: c,
            }}
          />
        ))}
      </div>
      {type === "video" ? (
        <OffthreadVideo
          src={staticFile(src)}
          style={{ width: "100%", display: "block" }}
        />
      ) : (
        <Img src={staticFile(src)} style={{ width: "100%", display: "block" }} />
      )}
    </div>
  );
};
