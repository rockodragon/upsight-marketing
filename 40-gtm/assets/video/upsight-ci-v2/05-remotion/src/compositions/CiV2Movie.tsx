import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  OffthreadVideo,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CallFill } from "../components/StackPieces";
import { colors, fonts, layout } from "../lib/brand";
import {
  getSafeArea,
  INLINE_MOVIE_LAYOUT,
  PORTRAIT_MOVIE_LAYOUT,
  type MovieLayout,
} from "../lib/movie-layout";
import { videoScript, type Snippet } from "../lib/script";

const ease = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
  easing: Easing.bezier(0.16, 1, 0.3, 1),
};

export const MOVIE_WIDTH = INLINE_MOVIE_LAYOUT.width;
export const MOVIE_HEIGHT = INLINE_MOVIE_LAYOUT.height;
export const PORTRAIT_MOVIE_WIDTH = PORTRAIT_MOVIE_LAYOUT.width;
export const PORTRAIT_MOVIE_HEIGHT = PORTRAIT_MOVIE_LAYOUT.height;

export const CiV2Movie: React.FC = () => (
  <MovieContent movieLayout={INLINE_MOVIE_LAYOUT} />
);

export const CiV2MoviePortrait: React.FC = () => (
  <MovieContent movieLayout={PORTRAIT_MOVIE_LAYOUT} portrait />
);

/** Same as portrait but for WebM alpha — outer canvas transparent. */
export const CiV2MoviePortraitAlpha: React.FC = () => (
  <MovieContent movieLayout={PORTRAIT_MOVIE_LAYOUT} portrait transparent />
);

/**
 * Homepage hero movie — cards → analysis → bordered slide + send-to.
 * Portrait variant uses 4:5 safe area for object-fit: cover embeds.
 */
export const MovieContent: React.FC<{
  movieLayout: MovieLayout;
  portrait?: boolean;
  /** True for VP9/WebM alpha renders — canvas is transparent, cards/slides stay opaque. */
  transparent?: boolean;
}> = ({ movieLayout, portrait = false, transparent = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const safe = getSafeArea(movieLayout);

  const analysisIn = Math.round(4.8 * fps);
  const analysisOut = Math.round(8.6 * fps);
  const titleIn = Math.round(8.2 * fps);
  const titleOut = Math.round(11.4 * fps);
  const clipIn = Math.round(11.0 * fps);
  const clipOut = Math.round(16.2 * fps);
  const chartIn = Math.round(15.8 * fps);
  const sendIn = Math.round(16.5 * fps);

  const snippets = videoScript.snippets.slice(0, 4);
  const storyTitle = videoScript.storyTitle ?? "Event Impact";
  const takeaway = videoScript.takeaway;
  // Excerpt slide — Haley + Rylie once each, smooth crossfade (no loop / stutter)
  const excerptClips =
    videoScript.reelSources
      ?.filter((s) => /haley|rylie/i.test(s.file))
      .map((s) => s.file) ?? [
      "video/testimonial-haley.mp4",
      "video/testimonial-rylie.mp4",
    ];

  const stackOpacity = interpolate(
    frame,
    [0, 6, analysisIn, analysisIn + 28],
    [1, 1, 1, 0],
    ease,
  );
  const analysisOpacity = interpolate(
    frame,
    [analysisIn, analysisIn + 24, analysisOut, analysisOut + 22],
    [0, 1, 1, 0],
    ease,
  );
  const storyPhase = frame >= titleIn - 4;
  const slideShellOpacity = interpolate(
    frame,
    [titleIn - 4, titleIn + 18],
    [0, 1],
    ease,
  );
  const titlePageOpacity = interpolate(
    frame,
    [titleIn, titleIn + 22, titleOut, titleOut + 18],
    [0, 1, 1, 0],
    ease,
  );
  const clipOpacity = interpolate(
    frame,
    [clipIn, clipIn + 22, clipOut, clipOut + 18],
    [0, 1, 1, 0],
    ease,
  );
  const chartOpacity = interpolate(
    frame,
    [chartIn, chartIn + 22],
    [0, 1],
    ease,
  );
  const sendOpacity = interpolate(frame, [sendIn, sendIn + 18], [0, 1], ease);

  const innerPad = portrait ? 0 : 20;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: transparent ? "transparent" : colors.paper,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: safe.left,
          top: safe.top,
          right: safe.right,
          bottom: safe.bottom,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: portrait ? "center" : "flex-start",
          padding: innerPad,
          gap: movieLayout.sendGap,
        }}
      >
        <div
          style={{
            position: "relative",
            width: movieLayout.contentWidth,
            flex: portrait ? "0 1 auto" : 1,
            minHeight: portrait ? 860 : 0,
            maxHeight: portrait ? "78%" : undefined,
            alignSelf: "center",
          }}
        >
          <div style={{ position: "absolute", inset: 0, opacity: stackOpacity }}>
            {snippets.map((snippet, i) => (
              <PlayingCard
                key={snippet.id}
                snippet={snippet}
                index={i}
                appearAt={12 + i * 26}
                movieLayout={movieLayout}
              />
            ))}
          </div>

          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: analysisOpacity,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `translateY(${interpolate(
                frame,
                [analysisIn, analysisIn + 24],
                [16, 0],
                ease,
              )}px)`,
            }}
          >
            <AnalysisCard takeaway={takeaway} movieLayout={movieLayout} />
          </div>

          {storyPhase ? (
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: slideShellOpacity,
              }}
            >
              <SlideFrame movieLayout={movieLayout}>
                <div style={{ position: "absolute", inset: 0, opacity: titlePageOpacity }}>
                  <TitleSlide
                    title={storyTitle}
                    finding={takeaway}
                    movieLayout={movieLayout}
                  />
                </div>
                <div style={{ position: "absolute", inset: 0, opacity: clipOpacity }}>
                  <VideoSlide
                    files={excerptClips}
                    caption={storyTitle}
                    finding={takeaway}
                    startFrame={clipIn}
                    slideDuration={clipOut - clipIn}
                    movieLayout={movieLayout}
                  />
                </div>
                <div style={{ position: "absolute", inset: 0, opacity: chartOpacity }}>
                  <ChartSlide
                    appearAt={chartIn}
                    title={storyTitle}
                    movieLayout={movieLayout}
                  />
                </div>
              </SlideFrame>
            </div>
          ) : null}
        </div>

        {storyPhase ? (
          <div
            style={{
              width: movieLayout.contentWidth,
              opacity: sendOpacity,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: portrait ? 10 : 8,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                fontFamily: fonts.sans,
                fontSize: movieLayout.sendLabelSize,
                fontWeight: 800,
                color: colors.ink,
                letterSpacing: "-0.02em",
              }}
            >
              Send to
            </div>
            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {videoScript.outputs.map((out, i) => {
                const accent = [colors.amber, colors.blue, colors.green][i]!;
                return (
                  <div
                    key={out.id}
                    style={{
                      opacity: interpolate(
                        frame,
                        [sendIn + i * 7, sendIn + i * 7 + 12],
                        [0, 1],
                        ease,
                      ),
                      padding: movieLayout.sendChipPad,
                      borderRadius: 999,
                      border: `1px solid ${colors.rule}`,
                      background: colors.card,
                      fontFamily: fonts.sans,
                      fontWeight: 700,
                      fontSize: movieLayout.sendChipSize,
                      color: colors.ink,
                      boxShadow: "0 4px 14px rgba(5,5,8,0.06)",
                    }}
                  >
                    <span style={{ color: accent, marginRight: 6 }}>→</span>
                    {out.audience}
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};

const SlideFrame: React.FC<{
  children: React.ReactNode;
  movieLayout: MovieLayout;
}> = ({ children, movieLayout }) => (
  <div
    style={{
      position: "relative",
      width: "100%",
      height: "100%",
      borderRadius: layout.radius + 2,
      border: `2px solid ${colors.rule}`,
      background: colors.card,
      boxShadow: "0 12px 36px rgba(5,5,8,0.08)",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: movieLayout.slideChromeHeight,
        borderBottom: `1px solid ${colors.rule}`,
        background: "rgba(238,238,242,0.65)",
        display: "flex",
        alignItems: "center",
        padding: "0 14px",
        gap: 8,
        zIndex: 2,
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: 999,
          background: colors.amber,
        }}
      />
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 11,
          color: colors.inkDim,
          letterSpacing: "0.06em",
        }}
      >
        STORY SLIDE
      </div>
    </div>
    <div
      style={{
        position: "absolute",
        top: movieLayout.slideChromeHeight,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      {children}
    </div>
  </div>
);

const PlayingCard: React.FC<{
  snippet: Snippet;
  index: number;
  appearAt: number;
  movieLayout: MovieLayout;
}> = ({ snippet, index, appearAt, movieLayout }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - appearAt,
    fps,
    config: { damping: 16, stiffness: 100, mass: 0.8 },
  });

  const cardW = movieLayout.cardWidth;
  const cardLeft =
    (movieLayout.contentWidth - cardW) / 2 +
    ([-28, -6, 14, 32][index] ?? 0);
  const restRotate = [-8, -2, 3, 7][index] ?? 0;
  const restY = index * movieLayout.cardStackOffsetY;

  const y = interpolate(
    progress,
    [0, 1],
    [-400 - index * 36, movieLayout.cardDealYOffset + restY],
  );
  const rotate = interpolate(progress, [0, 1], [-16, restRotate]);
  const opacity = interpolate(progress, [0, 0.12, 1], [0, 1, 1]);
  const scale = interpolate(progress, [0, 1], [0.9, 1]);
  const isMeeting = /meeting-panel/i.test(snippet.file ?? "");

  return (
    <div
      style={{
        position: "absolute",
        left: cardLeft,
        top: 0,
        width: cardW,
        height: movieLayout.cardHeight,
        borderRadius: layout.radius + 2,
        overflow: "hidden",
        border: `1px solid ${colors.rule}`,
        boxShadow: "0 14px 36px rgba(5,5,8,0.12)",
        opacity,
        transform: `translateY(${y}px) rotate(${rotate}deg) scale(${scale})`,
        zIndex: 10 + index,
        background: colors.card,
      }}
    >
      {snippet.file ? (
        <OffthreadVideo
          src={staticFile(snippet.file)}
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: isMeeting ? "contain" : "cover",
            background: colors.ink,
          }}
        />
      ) : snippet.kind === "note" ? (
        <NoteFillLight author={snippet.author} compact={movieLayout.width < 900} />
      ) : (
        <CallFill />
      )}

      <div
        style={{
          position: "absolute",
          left: 12,
          bottom: 12,
          fontFamily: fonts.mono,
          fontSize: 12,
          color: colors.ink,
          background: "rgba(238,238,242,0.94)",
          borderRadius: 999,
          padding: "6px 11px",
          border: `1px solid ${colors.rule}`,
        }}
      >
        {snippet.source}
      </div>
    </div>
  );
};

const NoteFillLight: React.FC<{ author?: string; compact?: boolean }> = ({
  author,
  compact,
}) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      padding: compact ? 22 : 28,
      background: "#f7f4ee",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 8,
    }}
  >
    <div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.amber }}>
      NOTE
    </div>
    <div
      style={{
        fontFamily: fonts.sans,
        fontSize: compact ? 22 : 26,
        fontWeight: 700,
        color: colors.ink,
      }}
    >
      {author ?? "Rep"}
    </div>
    <div style={{ fontFamily: fonts.sans, fontSize: 13, color: colors.inkDim }}>
      Synced to CRM
    </div>
  </div>
);

const AnalysisCard: React.FC<{
  takeaway: string;
  movieLayout: MovieLayout;
}> = ({ takeaway, movieLayout }) => (
  <div
    style={{
      width: "100%",
      borderRadius: layout.radius + 2,
      border: `1px solid ${colors.rule}`,
      background: colors.card,
      boxShadow: "0 14px 36px rgba(5,5,8,0.08)",
      padding: "28px 24px",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
      <Img
        src={staticFile("logos/upsight-logo.png")}
        style={{
          width: movieLayout.logoSize,
          height: movieLayout.logoSize,
          objectFit: "contain",
        }}
      />
      <div
        style={{
          fontFamily: fonts.sans,
          fontWeight: 800,
          fontSize: movieLayout.analysisTitleSize,
          color: colors.ink,
        }}
      >
        UpSight
      </div>
    </div>
    <div
      style={{
        fontFamily: fonts.mono,
        fontSize: 12,
        color: colors.blue,
        marginBottom: 10,
        letterSpacing: "0.04em",
      }}
    >
      Analysis · pattern found
    </div>
    <div
      style={{
        fontFamily: fonts.sans,
        fontWeight: 800,
        fontSize: movieLayout.analysisQuoteSize,
        lineHeight: 1.2,
        letterSpacing: "-0.03em",
        color: colors.ink,
      }}
    >
      “{takeaway}”
    </div>
  </div>
);

const TitleSlide: React.FC<{
  title: string;
  finding: string;
  movieLayout: MovieLayout;
}> = ({ title, finding, movieLayout }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      padding: "36px 28px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      gap: 14,
    }}
  >
    <div
      style={{
        fontFamily: fonts.mono,
        fontSize: movieLayout.titleSlideEyebrowSize,
        color: colors.amber,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
      }}
    >
      Customer story
    </div>
    <div
      style={{
        fontFamily: fonts.sans,
        fontWeight: 900,
        fontSize: movieLayout.titleSlideSize,
        letterSpacing: "-0.04em",
        color: colors.ink,
        lineHeight: 1.05,
      }}
    >
      {title}
    </div>
    <div style={{ width: 52, height: 3, background: colors.amber }} />
    <div
      style={{
        fontFamily: fonts.sans,
        fontSize: movieLayout.titleSlideFindingSize,
        lineHeight: 1.4,
        color: colors.inkDim,
        maxWidth: 480,
      }}
    >
      {finding}
    </div>
  </div>
);

const VideoSlide: React.FC<{
  files: string[];
  caption: string;
  finding: string;
  startFrame: number;
  slideDuration: number;
  movieLayout: MovieLayout;
}> = ({ files, caption, finding, startFrame, slideDuration, movieLayout }) => {
  const frame = useCurrentFrame();
  const local = Math.max(0, frame - startFrame);
  const trimIn = interpolate(frame, [startFrame, startFrame + 18], [1.03, 1], ease);

  const cross = 22;
  const hold =
    files.length === 1
      ? slideDuration - 18
      : (slideDuration - (files.length - 1) * cross) / files.length;

  const opacityForClip = (index: number): number => {
    if (files.length === 1) {
      return interpolate(local, [0, 18], [0, 1], {
        ...ease,
        extrapolateRight: "clamp",
      });
    }

    const crossInStart = index * hold + Math.max(0, index - 1) * cross;
    const fadeInEnd = index === 0 ? 18 : crossInStart + cross;
    const fadeOutStart = index === 0 ? hold : crossInStart + hold;

    if (index === 0) {
      if (local < 18) {
        return interpolate(local, [0, 18], [0, 1], ease);
      }
      if (local < fadeOutStart) {
        return 1;
      }
      if (local < fadeOutStart + cross) {
        return interpolate(local, [fadeOutStart, fadeOutStart + cross], [1, 0], ease);
      }
      return 0;
    }

    // Last and middle clips — fade in over previous, hold (no loop back)
    if (local < crossInStart) {
      return 0;
    }
    if (local < fadeInEnd) {
      return interpolate(local, [crossInStart, fadeInEnd], [0, 1], ease);
    }
    return 1;
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "16px 16px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 11,
          color: colors.amber,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {caption} · excerpt
      </div>
      <div
        style={{
          fontFamily: fonts.sans,
          fontWeight: 700,
          fontSize: movieLayout.videoFindingSize,
          color: colors.ink,
          lineHeight: 1.25,
        }}
      >
        {finding}
      </div>
      <div
        style={{
          position: "relative",
          flex: 1,
          borderRadius: layout.radius,
          overflow: "hidden",
          border: `1px solid ${colors.rule}`,
          background: colors.ink,
          transform: `scale(${trimIn})`,
          transformOrigin: "center center",
          minHeight: 0,
        }}
      >
        {files.map((file, i) => (
          <div
            key={file}
            style={{
              position: "absolute",
              inset: 0,
              opacity: opacityForClip(i),
            }}
          >
            <OffthreadVideo
              src={staticFile(file)}
              muted
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ChartSlide: React.FC<{
  appearAt: number;
  title: string;
  movieLayout: MovieLayout;
}> = ({ appearAt, title, movieLayout }) => {
  const frame = useCurrentFrame();
  const bars = [
    { label: "Clarity", value: 0.42, color: "rgba(5,5,8,0.35)" },
    { label: "Before", value: 0.38, color: "rgba(5,5,8,0.2)" },
    { label: "After", value: 0.86, color: colors.amber },
    { label: "Advocacy", value: 0.72, color: colors.blue },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "22px 22px 26px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 11,
          color: colors.amber,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: 6,
        }}
      >
        {title} · evidence
      </div>
      <div
        style={{
          fontFamily: fonts.sans,
          fontWeight: 800,
          fontSize: movieLayout.chartHeadlineSize,
          color: colors.ink,
          marginBottom: 18,
          letterSpacing: "-0.02em",
        }}
      >
        What changed after the finding
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 12,
          flex: 1,
          minHeight: 0,
          paddingBottom: 6,
        }}
      >
        {bars.map((bar, i) => {
          const grow = interpolate(
            frame,
            [appearAt + 8 + i * 6, appearAt + 28 + i * 6],
            [0, bar.value],
            ease,
          );
          return (
            <div
              key={bar.label}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                height: "100%",
                justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  width: "100%",
                  maxWidth: 56,
                  height: `${grow * 100}%`,
                  borderRadius: "8px 8px 4px 4px",
                  background: bar.color,
                  minHeight: grow > 0.02 ? 6 : 0,
                }}
              />
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  color: colors.inkDim,
                  textAlign: "center",
                }}
              >
                {bar.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const getMovieDurationInFrames = () => {
  const fps = videoScript.format.fps;
  const seconds = videoScript.movieDurationSeconds ?? 22;
  return Math.round(seconds * fps);
};
