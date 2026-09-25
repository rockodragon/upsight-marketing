import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { MediaPlate } from "../../components/MediaPlate";
import { MonoLabel } from "../../components/MonoLabel";
import { useSceneFade } from "../../lib/animations";
import { colors, layout } from "../../lib/brand";
import { fontMono, fontSans } from "../../lib/fonts";
import { useLayoutScale } from "../../lib/layout";
import { activeBeat, getScene } from "../../lib/script";

const PROFILE_QUESTIONS = [
  "What blocked renewal last quarter?",
  "How is the CFO feeling about spend?",
  "What would make onboarding feel faster?",
];

export const SceneMechanism: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const { landscape, scale, pad, maxContent } = useLayoutScale();
  const scene = getScene("mechanism");
  const beat = activeBeat(scene, frame / fps);
  const opacity = useSceneFade(durationInFrames);
  const t = frame / fps;

  const spine = t < 7;
  const personalized = t >= 10 && t < 24;
  const interviewer = t >= 24 && t < 34;
  const evidence = t >= 34;

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

        {spine && (
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 28 * scale,
              maxWidth: maxContent,
            }}
          >
            <div
              style={{
                fontFamily: fontSans,
                fontSize: Math.round(72 * scale),
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1.08,
                color: colors.textLight,
              }}
            >
              A form can&apos;t ask a follow-up question.{" "}
              <span style={{ color: colors.amber }}>UpSight can.</span>
            </div>
            <div
              style={{
                fontFamily: fontSans,
                fontSize: Math.round(30 * scale),
                color: colors.textDim,
                fontWeight: 500,
              }}
            >
              Two things make that work.
            </div>
          </div>
        )}

        {!spine && (
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: landscape ? "0.95fr 1.05fr" : "1fr",
              gap: 40 * scale,
              alignItems: "center",
              minHeight: 0,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <div
                style={{
                  alignSelf: "flex-start",
                  fontFamily: fontMono,
                  fontSize: 18,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: personalized ? colors.amber : colors.sky,
                  background: personalized
                    ? "rgba(245,158,11,0.12)"
                    : "rgba(56,189,248,0.12)",
                  border: `1px solid ${personalized ? colors.amber : colors.sky}55`,
                  borderRadius: 999,
                  padding: "10px 18px",
                }}
              >
                {beat.onScreen}
              </div>
              <div
                style={{
                  fontFamily: fontSans,
                  fontSize: Math.round(40 * scale),
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: colors.textLight,
                  lineHeight: 1.15,
                }}
              >
                {personalized &&
                  "Every contact gets their own questions — drafted from real history."}
                {interviewer &&
                  "When an answer opens a door, the AI interviewer walks through it."}
                {evidence &&
                  "Exact quote. Who said it. When. Not a blob in a spreadsheet."}
              </div>

              {personalized && (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {PROFILE_QUESTIONS.map((q, i) => {
                    const show = interpolate(t, [11 + i * 1.2, 12 + i * 1.2], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    });
                    return (
                      <div
                        key={q}
                        style={{
                          opacity: show,
                          translate: `0px ${interpolate(show, [0, 1], [16, 0])}px`,
                          padding: "14px 18px",
                          borderRadius: layout.radius,
                          background: "rgba(238,238,242,0.04)",
                          border: `1px solid ${colors.sky}28`,
                          fontFamily: fontSans,
                          fontSize: 22,
                          color: colors.textLight,
                        }}
                      >
                        {q}
                      </div>
                    );
                  })}
                </div>
              )}

              {evidence && (
                <div
                  style={{
                    padding: 22,
                    borderRadius: layout.radius + 4,
                    background: colors.bgDarkAlt,
                    border: `1px solid ${colors.amber}44`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: fontSans,
                      fontSize: 26,
                      fontWeight: 600,
                      color: colors.textLight,
                      fontStyle: "italic",
                      lineHeight: 1.35,
                    }}
                  >
                    “Our CFO froze discretionary spend this quarter.”
                  </div>
                  <div
                    style={{
                      marginTop: 14,
                      fontFamily: fontMono,
                      fontSize: 14,
                      letterSpacing: "0.08em",
                      color: colors.amber,
                      textTransform: "uppercase",
                    }}
                  >
                    Jordan Lee · Acme CS · Mar 12, 2026
                  </div>
                </div>
              )}
            </div>

            <MediaPlate
              src={
                beat.media ??
                (personalized
                  ? "ui/persondetail.jpg"
                  : interviewer
                    ? "video/ai-interviewer.mp4"
                    : "video/s5-survey-analytics.mp4")
              }
              height={landscape ? 620 : 380}
              objectFit={personalized ? "contain" : "cover"}
            />
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
