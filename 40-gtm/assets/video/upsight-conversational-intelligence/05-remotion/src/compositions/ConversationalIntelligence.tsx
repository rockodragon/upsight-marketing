import React from "react";
import {
  AbsoluteFill,
  Img,
  OffthreadVideo,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { MarketingBackground } from "../components/MarketingBackground";
import { MonoLabel } from "../components/MonoLabel";
import { FilmReelMarquee } from "../components/FilmReelMarquee";
import {
  EVIDENCE_CLIPS,
  MARQUEE_CLIPS,
  MARQUEE_HEIGHT,
  SPEAKER_CLIPS,
} from "../lib/clips";
import { colors, fonts, layout } from "../lib/brand";

const sceneDurationsSec = [4, 3, 4, 4, 3, 4, 5, 3] as const;
const sceneStartsSec = sceneDurationsSec.reduce<number[]>(
  (acc, duration, index) => {
    if (index === 0) return [0];
    acc.push(acc[index - 1] + sceneDurationsSec[index - 1]);
    return acc;
  },
  [],
);

/** Upper content band sits above the bottom marquee */
const CONTENT_MAX_H = 1080 - MARQUEE_HEIGHT - 110;

const scenes = [
  {
    title: "Hook",
    durationSec: 4,
    caption: "",
    headline: "Surveys were coming back flat.",
    vo: "We were sending surveys — and getting back checkboxes. Nothing useful.",
    media: SPEAKER_CLIPS[0].file,
    layout: "talking-head" as const,
  },
  {
    title: "Upsight Intro",
    durationSec: 3,
    caption: "Surveys + Kiosk. All in One.",
    headline: "Surveys, kiosk, and interviews — one platform.",
    vo: "Then we found Upsight — surveys and kiosk mode, all in one place.",
    media: SPEAKER_CLIPS[1].file,
    layout: "product" as const,
  },
  {
    title: "AI Interviewer",
    durationSec: 4,
    caption: "AI Interviewer → follow-ups automatically",
    headline: "The AI listens — and asks the next question.",
    vo: "It listens to their answers and asks the right follow-ups on its own.",
    media: "video/s3-interviewer.mp4",
    layout: "product" as const,
  },
  {
    title: "Video Responses",
    durationSec: 4,
    caption: "Video Responses → hear them in their own words",
    headline: "People respond on video.",
    vo: "You hear them in their own words — not just a rating or a number.",
    media: EVIDENCE_CLIPS[0].file,
    layout: "grid" as const,
  },
  {
    title: "Analysis",
    durationSec: 3,
    caption: "Real-Time Analysis → insights as they come in",
    headline: "Insights surface in real time.",
    vo: "Themes and insights appear as responses come in.",
    media: "video/s5-survey-analytics.mp4",
    layout: "product" as const,
  },
  {
    title: "Share",
    durationSec: 4,
    caption: "Share with donors. Share with your team.",
    headline: "Share results — no extra report.",
    vo: "We sent results straight to donors and leadership.",
    media: "video/s6-share.mp4",
    layout: "split" as const,
  },
  {
    title: "Outcome",
    durationSec: 5,
    caption: "More engagement. Deeper answers. Better decisions.",
    headline: "Real customer voices. Better decisions.",
    vo: "More engagement. Deeper answers. We're finally deciding with real voices.",
    media: SPEAKER_CLIPS[2].file,
    layout: "talking-head" as const,
  },
  {
    title: "CTA",
    durationSec: 3,
    caption: "",
    headline: "Get UpSight",
    vo: "Hear what matters.",
    media: "",
    layout: "cta" as const,
  },
] as const;

const CaptionPill: React.FC<{ text: string }> = ({ text }) => (
  <div
    style={{
      padding: "12px 20px",
      borderRadius: layout.radius + 6,
      background: "rgba(0,0,0,0.62)",
      border: `1px solid ${colors.sky}33`,
      maxWidth: 980,
    }}
  >
    <div
      style={{
        fontFamily: fonts.sans,
        fontSize: 26,
        fontWeight: 800,
        color: colors.textLight,
        textAlign: "center",
        letterSpacing: "-0.02em",
      }}
    >
      {text}
    </div>
  </div>
);

const InfoBadge: React.FC<{ text: string; accent?: "amber" | "sky" }> = ({
  text,
  accent = "sky",
}) => (
  <div
    style={{
      padding: "8px 14px",
      borderRadius: 999,
      background:
        accent === "amber" ? "rgba(245, 158, 11, 0.14)" : "rgba(56, 189, 248, 0.12)",
      border:
        accent === "amber"
          ? "1px solid rgba(245, 158, 11, 0.38)"
          : "1px solid rgba(56, 189, 248, 0.34)",
      color: accent === "amber" ? colors.amber : colors.sky,
      fontFamily: fonts.mono,
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      width: "fit-content",
    }}
  >
    {text}
  </div>
);

const isImage = (src: string) => /\.(jpe?g|png|webp)$/i.test(src);
const isPortrait = (src: string) => /v1\.mov$/i.test(src);

const MediaCard: React.FC<{
  src: string;
  width: number | string;
  height: number | string;
}> = ({ src, width, height }) => {
  const portrait = isPortrait(src);
  return (
    <div
      style={{
        width,
        height,
        flexShrink: 0,
        borderRadius: layout.radius + 8,
        overflow: "hidden",
        border: `2px solid ${colors.sky}44`,
        boxShadow: `0 20px 60px rgba(0,0,0,0.45)`,
        background: colors.bgDarkAlt,
      }}
    >
      {isImage(src) ? (
        <Img
          src={staticFile(src)}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      ) : (
        <OffthreadVideo
          src={staticFile(src)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: portrait ? "contain" : "cover",
            objectPosition: portrait ? "center top" : "center center",
          }}
          muted
        />
      )}
    </div>
  );
};

/**
 * Scene layout: reserved header + caption, then one media/text row.
 * Nothing floats over the media.
 */
const SceneShell: React.FC<{
  title: string;
  caption?: string;
  children: React.ReactNode;
}> = ({ title, caption, children }) => (
  <AbsoluteFill
    style={{
      paddingTop: 100,
      paddingLeft: 72,
      paddingRight: 72,
      paddingBottom: MARQUEE_HEIGHT + 28,
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        gap: 18,
        maxHeight: CONTENT_MAX_H,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
        <InfoBadge text={title} accent="amber" />
      </div>
      {caption ? (
        <div style={{ flexShrink: 0, display: "flex", justifyContent: "flex-start" }}>
          <CaptionPill text={caption} />
        </div>
      ) : null}
      <div
        style={{
          flex: 1,
          minHeight: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  </AbsoluteFill>
);

const TextBlock: React.FC<{ headline: string; vo: string; maxWidth?: number }> = ({
  headline,
  vo,
  maxWidth = 560,
}) => (
  <div style={{ maxWidth, display: "flex", flexDirection: "column", gap: 14 }}>
    <div
      style={{
        fontFamily: fonts.sans,
        fontSize: 48,
        fontWeight: 900,
        lineHeight: 1.05,
        color: colors.textLight,
        letterSpacing: "-0.03em",
      }}
    >
      {headline}
    </div>
    <div
      style={{
        fontFamily: fonts.sans,
        fontSize: 26,
        lineHeight: 1.35,
        color: colors.textDim,
      }}
    >
      {vo}
    </div>
  </div>
);

/**
 * Conversational Intelligence — 30s LinkedIn VSL
 * Upper: spaced scene content. Bottom: people marquee (no featured-clip repeats).
 */
export const ConversationalIntelligence: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const ctaStart = Math.round(27 * fps);
  const marqueeOpacity = interpolate(frame, [ctaStart - 12, ctaStart], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <MarketingBackground>
      <div style={{ position: "absolute", left: 72, top: 28, zIndex: 30 }}>
        <MonoLabel text="// conversational intelligence" />
      </div>

      <div
        style={{
          position: "absolute",
          right: 64,
          top: 24,
          zIndex: 30,
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "10px 14px",
          borderRadius: 999,
          background: "rgba(10, 10, 16, 0.78)",
          border: `1px solid ${colors.sky}33`,
        }}
      >
        <Img
          src={staticFile("logos/upsight-logo.png")}
          style={{ width: 88, height: 26, objectFit: "contain" }}
        />
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 22,
            fontWeight: 700,
            color: colors.textLight,
          }}
        >
          UpSight
        </div>
      </div>

      <div style={{ opacity: marqueeOpacity }}>
        <FilmReelMarquee
          clips={MARQUEE_CLIPS}
          bottom={20}
          tileWidth={170}
          tileHeight={220}
          speedPxPerFrame={3.6}
        />
      </div>

      {scenes.map((scene, index) => {
        const from = Math.round(sceneStartsSec[index] * fps);
        const durationInFrames = Math.round(scene.durationSec * fps);

        return (
          <Sequence key={scene.title} from={from} durationInFrames={durationInFrames}>
            <SceneShell title={scene.title} caption={scene.caption || undefined}>
              {scene.layout === "talking-head" ? (
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 48,
                  }}
                >
                  <TextBlock headline={scene.headline} vo={scene.vo} maxWidth={640} />
                  <MediaCard
                    src={scene.media}
                    width={isPortrait(scene.media) ? 320 : 560}
                    height={isPortrait(scene.media) ? 420 : 340}
                  />
                </div>
              ) : scene.layout === "product" ? (
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    gap: 40,
                  }}
                >
                  <MediaCard src={scene.media} width={900} height={380} />
                  <TextBlock headline={scene.headline} vo={scene.vo} maxWidth={480} />
                </div>
              ) : scene.layout === "grid" ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: 20,
                  }}
                >
                  <TextBlock headline={scene.headline} vo={scene.vo} maxWidth={1100} />
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gap: 18,
                    }}
                  >
                    <MediaCard src={EVIDENCE_CLIPS[0].file} width="100%" height={260} />
                    <MediaCard src={EVIDENCE_CLIPS[1].file} width="100%" height={260} />
                    <MediaCard src={EVIDENCE_CLIPS[2].file} width="100%" height={260} />
                  </div>
                </div>
              ) : scene.layout === "split" ? (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.15fr 0.85fr",
                    gap: 32,
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <MediaCard src={scene.media} width="100%" height={380} />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                      padding: 28,
                      borderRadius: layout.radius + 10,
                      background: "rgba(10,10,16,0.9)",
                      border: `1px solid ${colors.sky}33`,
                    }}
                  >
                    <InfoBadge text="Send to donors" accent="amber" />
                    <InfoBadge text="Share internally" />
                    <InfoBadge text="No extra report" />
                    <div
                      style={{
                        fontFamily: fonts.sans,
                        fontSize: 26,
                        lineHeight: 1.35,
                        color: colors.textDim,
                        marginTop: 8,
                      }}
                    >
                      {scene.vo}
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      padding: "40px 56px",
                      borderRadius: layout.radius + 16,
                      background: "rgba(10, 10, 16, 0.78)",
                      border: `1px solid ${colors.sky}44`,
                      boxShadow: `0 28px 80px rgba(0,0,0,0.5), 0 0 60px ${colors.amberGlow}`,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 24,
                    }}
                  >
                    <Img
                      src={staticFile("logos/upsight-logo.png")}
                      style={{
                        width: 380,
                        height: 116,
                        objectFit: "contain",
                      }}
                    />
                    <div
                      style={{
                        fontFamily: fonts.sans,
                        fontSize: 72,
                        fontWeight: 900,
                        color: colors.textLight,
                        letterSpacing: "-0.04em",
                      }}
                    >
                      Get UpSight
                    </div>
                    <div
                      style={{
                        fontFamily: fonts.mono,
                        fontSize: 28,
                        color: colors.sky,
                        letterSpacing: "0.04em",
                      }}
                    >
                      getupsight.com
                    </div>
                    <div
                      style={{
                        fontFamily: fonts.sans,
                        fontSize: 30,
                        color: colors.textDim,
                      }}
                    >
                      Hear what matters.
                    </div>
                  </div>
                </div>
              )}
            </SceneShell>
          </Sequence>
        );
      })}
    </MarketingBackground>
  );
};
