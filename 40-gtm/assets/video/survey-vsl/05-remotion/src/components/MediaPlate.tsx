import React from "react";
import { Img, OffthreadVideo, staticFile } from "remotion";
import { colors, layout } from "../lib/brand";

const isVideo = (src: string) => /\.(mp4|mov|webm)$/i.test(src);

export const MediaPlate: React.FC<{
  src: string;
  width?: number | string;
  height?: number | string;
  borderColor?: string;
  objectFit?: "cover" | "contain";
  style?: React.CSSProperties;
}> = ({
  src,
  width = "100%",
  height = "100%",
  borderColor = `${colors.sky}44`,
  objectFit = "cover",
  style,
}) => (
  <div
    style={{
      width,
      height,
      borderRadius: layout.radius + 6,
      overflow: "hidden",
      border: `1px solid ${borderColor}`,
      boxShadow: `0 28px 80px rgba(0,0,0,0.55), 0 0 40px ${colors.amberGlow}`,
      background: colors.bgDarkAlt,
      ...style,
    }}
  >
    {isVideo(src) ? (
      <OffthreadVideo
        src={staticFile(src)}
        muted
        style={{ width: "100%", height: "100%", objectFit }}
      />
    ) : (
      <Img
        src={staticFile(src)}
        style={{ width: "100%", height: "100%", objectFit }}
      />
    )}
  </div>
);
