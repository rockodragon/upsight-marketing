import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { MediaPlate } from "../../components/MediaPlate";
import { MonoLabel } from "../../components/MonoLabel";
import { useSceneFade } from "../../lib/animations";
import { colors } from "../../lib/brand";
import { fontSans } from "../../lib/fonts";
import { useLayoutScale } from "../../lib/layout";
import { activeBeat, getScene } from "../../lib/script";

export const SceneMediaUnlock: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const { landscape, scale, pad } = useLayoutScale();
  const scene = getScene("media-unlock");
  const beat = activeBeat(scene, frame / fps);
  const opacity = useSceneFade(durationInFrames);
  const t = frame / fps;

  const wall = t >= 12;
  const mid = t >= 7 && t < 12;

  return (
    <AbsoluteFill style={{ opacity, padding: pad }}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 24 * scale,
        }}
      >
        <MonoLabel text={scene.label ?? ""} />

        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: landscape ? (wall ? "1fr 1fr" : "1fr 1.15fr") : "1fr",
            gap: 36 * scale,
            alignItems: "center",
            minHeight: 0,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 18 * scale }}>
            <div
              style={{
                fontFamily: fontSans,
                fontSize: Math.round(48 * scale),
                fontWeight: 900,
                letterSpacing: "-0.035em",
                color: colors.textLight,
                lineHeight: 1.1,
              }}
            >
              {beat.onScreen}
            </div>
            <div
              style={{
                fontFamily: fontSans,
                fontSize: Math.round(26 * scale),
                fontWeight: 500,
                color: colors.textDim,
                lineHeight: 1.35,
                maxWidth: 560,
              }}
            >
              {t < 7 &&
                "Answer out loud — to camera, or just their voice."}
              {mid && "Not only the answer — their own words, on video."}
              {wall &&
                "The authentic testimonial you used to chase — it shows up in the responses."}
            </div>
          </div>

          {!wall ? (
            <MediaPlate
              src="video/survey-qa-video-response.mp4"
              height={landscape ? 580 : 360}
            />
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                height: landscape ? 560 : 320,
              }}
            >
              <MediaPlate src="video/testimonial-haley.mp4" height="100%" />
              <MediaPlate
                src="video/testimonial-rylie.mp4"
                height="100%"
                style={{
                  opacity: interpolate(t, [12.4, 13.2], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  }),
                }}
              />
            </div>
          )}
        </div>
      </div>
    </AbsoluteFill>
  );
};
