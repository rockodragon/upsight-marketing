import type { TikTokPage } from "@remotion/captions";
import { fitTextOnNLines } from "@remotion/layout-utils";
import React from "react";
import { interpolate, spring } from "remotion";
import type { CaptionLayoutConfig, CaptionPresetTokens } from "./types";

type CaptionPageProps = {
  page: TikTokPage;
  /** Same time base as page.tokens[].fromMs/toMs — see CaptionRenderer. */
  nowMs: number;
  fps: number;
  preset: CaptionPresetTokens;
  layout: CaptionLayoutConfig;
  compositionWidth: number;
};

const WORD_POP_DURATION_FRAMES = 8;

export const CaptionPage: React.FC<CaptionPageProps> = ({
  page,
  nowMs,
  fps,
  preset,
  layout,
  compositionWidth,
}) => {
  const maxBoxWidth = compositionWidth * (layout.maxWidthPercent / 100);

  const { fontSize, lines } = fitTextOnNLines({
    text: page.text,
    maxLines: layout.maxLines,
    maxBoxWidth,
    fontFamily: preset.fontFamily,
    fontWeight: preset.fontWeight,
    letterSpacing: preset.letterSpacing,
    maxFontSize: preset.baseFontSizePx,
  });

  const verticalStyle: React.CSSProperties =
    layout.position === "upper"
      ? { top: "8%" }
      : layout.position === "center"
        ? { top: "50%" }
        : { bottom: "10%" };

  const transform = layout.position === "center" ? "translate(-50%, -50%)" : "translateX(-50%)";

  // fitTextOnNLines only inserts line breaks — word order/count is preserved,
  // so we can walk page.tokens in lockstep with the wrapped lines to recover
  // per-word timing for the active-word highlight.
  let tokenCursor = 0;

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        width: maxBoxWidth,
        textAlign: "center",
        fontFamily: preset.fontFamily,
        fontWeight: preset.fontWeight,
        letterSpacing: preset.letterSpacing,
        color: preset.textColor,
        textShadow: preset.textShadow ?? undefined,
        backgroundColor: preset.backgroundColor ?? undefined,
        borderRadius: preset.backgroundColor ? preset.borderRadiusPx : undefined,
        padding: preset.backgroundColor ? preset.paddingPx : undefined,
        textTransform: preset.uppercase ? "uppercase" : undefined,
        transform,
        ...verticalStyle,
      }}
    >
      {lines.map((line, lineIndex) => {
        const words = line.split(" ").filter(Boolean);
        return (
          <div key={lineIndex} style={{ fontSize, lineHeight: 1.25 }}>
            {words.map((word) => {
              const token = page.tokens[tokenCursor];
              tokenCursor += 1;
              if (!token) return null;

              const isActive = nowMs >= token.fromMs && nowMs < token.toMs;
              const elapsedFrames = ((nowMs - token.fromMs) / 1000) * fps;
              const progress = isActive
                ? spring({
                    frame: elapsedFrames,
                    fps,
                    config: { damping: 14, stiffness: 200, mass: 0.6 },
                    durationInFrames: WORD_POP_DURATION_FRAMES,
                  })
                : 0;
              const scale = interpolate(progress, [0, 1], [1, preset.activeWordScale]);
              // transform: scale() doesn't reflow siblings, so a scaled-up
              // word can visually overlap its neighbors — pad both sides in
              // proportion to how far past 1 the scale goes.
              const scaleOverflowEm = Math.max(0, scale - 1) * 4;

              return (
                <span
                  key={`${token.fromMs}-${token.text}`}
                  style={{
                    display: "inline-block",
                    marginLeft: `${scaleOverflowEm / 2}em`,
                    marginRight: `${0.28 + scaleOverflowEm / 2}em`,
                    color: isActive ? preset.activeWordColor : preset.textColor,
                    transform: `scale(${scale})`,
                  }}
                >
                  {word}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
