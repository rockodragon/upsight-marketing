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
import { colors, fonts, layout } from "../lib/brand";
import { videoScript, type Snippet } from "../lib/script";

const ACCENTS = [colors.amber, colors.sky, colors.green] as const;

/**
 * Homepage-fluid variant: transparent stage, dealt evidence stack (poker),
 * funnel into pattern + outputs. Media is first-class — no dark marquee box.
 */
export const CiV2Funnel: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const dealEnd = 2.2 * fps;
  const convergeAt = 3.2 * fps;
  const patternLock = 4.5 * fps;
  const outputsAt = 7 * fps;
  const holdAt = 10.5 * fps;

  const titleIn = interpolate(frame, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const stackScale = interpolate(
    frame,
    [convergeAt, patternLock],
    [1, 0.72],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.16, 1, 0.3, 1) },
  );
  const stackX = interpolate(frame, [convergeAt, patternLock], [0, -280], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const stackOpacity = interpolate(frame, [outputsAt, outputsAt + 20], [1, 0.45], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const patternIn = interpolate(frame, [patternLock - 8, patternLock + 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const ctaIn = interpolate(frame, [holdAt, holdAt + 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const snippets = videoScript.snippets.slice(0, 4);

  return (
    // Transparent — sits on the page background, not a black stage
    <AbsoluteFill style={{ backgroundColor: "transparent" }}>
      {/* Soft title — concept, not chrome */}
      <div
        style={{
          position: "absolute",
          top: 48,
          left: 0,
          right: 0,
          textAlign: "center",
          opacity: titleIn,
          fontFamily: fonts.sans,
          fontWeight: 700,
          fontSize: 30,
          letterSpacing: "-0.02em",
          color: colors.textLight,
          textShadow: "0 2px 18px rgba(0,0,0,0.35)",
        }}
      >
        Stop starting from zero.
      </div>

      {/* Dealt evidence stack — poker throw-down */}
      <div
        style={{
          position: "absolute",
          left: 120,
          top: 160,
          width: 520,
          height: 640,
          opacity: stackOpacity,
          transform: `translateX(${stackX}px) scale(${stackScale})`,
          transformOrigin: "center center",
        }}
      >
        {snippets.map((snippet, i) => (
          <DealtCard
            key={snippet.id}
            snippet={snippet}
            index={i}
            appearAt={8 + i * 12}
            dealEnd={dealEnd}
          />
        ))}
      </div>

      {/* Center pattern — brand moment */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 560,
          marginLeft: -280,
          marginTop: -220,
          opacity: patternIn,
          transform: `translateY(${interpolate(frame, [patternLock, patternLock + 16], [24, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}px)`,
        }}
      >
        <PatternCard takeaway={videoScript.takeaway} lockAt={patternLock} />
      </div>

      {/* Outputs — fan in from the right */}
      <div
        style={{
          position: "absolute",
          right: 72,
          top: 200,
          width: 440,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {videoScript.outputs.map((output, i) => {
          const enter = outputsAt + i * 12;
          const opacity = interpolate(frame, [enter, enter + 12], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          });
          const x = interpolate(frame, [enter, enter + 12], [48, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          });
          const accent = ACCENTS[i % ACCENTS.length];
          return (
            <div
              key={output.id}
              style={{
                opacity,
                transform: `translateX(${x}px)`,
                borderRadius: layout.radius,
                border: `1px solid ${accent}55`,
                background: "rgba(10,10,16,0.78)",
                backdropFilter: "blur(8px)",
                padding: "20px 22px",
              }}
            >
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 14,
                  color: accent,
                  marginBottom: 8,
                  letterSpacing: "0.04em",
                }}
              >
                {output.label}
              </div>
              <div
                style={{
                  fontFamily: fonts.sans,
                  fontWeight: 800,
                  fontSize: 28,
                  color: colors.textLight,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.15,
                }}
              >
                {output.title}
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          position: "absolute",
          right: 72,
          bottom: 56,
          opacity: ctaIn,
          padding: "16px 32px",
          borderRadius: 10,
          background: colors.amber,
          color: colors.bgDark,
          fontFamily: fonts.sans,
          fontWeight: 700,
          fontSize: 22,
        }}
      >
        Get UpSight
      </div>
    </AbsoluteFill>
  );
};

const DealtCard: React.FC<{
  snippet: Snippet;
  index: number;
  appearAt: number;
  dealEnd: number;
}> = ({ snippet, index, appearAt }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - appearAt,
    fps,
    config: { damping: 16, stiffness: 120, mass: 0.7 },
  });

  // Fan stack offsets — like cards tossed onto a table
  const restRotate = [-7, -2, 4, 8][index] ?? 0;
  const restX = [-18, 12, -8, 22][index] ?? 0;
  const restY = index * 28;

  const y = interpolate(progress, [0, 1], [-420 - index * 40, restY]);
  const rotate = interpolate(progress, [0, 1], [-18, restRotate]);
  const opacity = interpolate(progress, [0, 0.2, 1], [0, 1, 1]);
  const scale = interpolate(progress, [0, 1], [0.92, 1]);

  const isMeeting = /meeting-panel/i.test(snippet.file ?? "");
  const z = 10 + index;

  return (
    <div
      style={{
        position: "absolute",
        left: 40 + restX,
        top: 40,
        width: 440,
        height: 280,
        borderRadius: layout.radius + 2,
        overflow: "hidden",
        border: "1px solid rgba(238,238,242,0.18)",
        boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
        opacity,
        transform: `translateY(${y}px) rotate(${rotate}deg) scale(${scale})`,
        zIndex: z,
        background: colors.bgDarkAlt,
      }}
    >
      {snippet.file && (snippet.kind === "video" || snippet.kind === "zoom") ? (
        <OffthreadVideo
          src={staticFile(snippet.file)}
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: isMeeting ? "contain" : "cover",
            background: "#050508",
          }}
        />
      ) : snippet.kind === "note" ? (
        <NoteFill author={snippet.author} />
      ) : (
        <CallFill />
      )}

      <div
        style={{
          position: "absolute",
          left: 12,
          bottom: 12,
          fontFamily: fonts.mono,
          fontSize: 14,
          color: colors.textLight,
          background: "rgba(5,5,8,0.7)",
          borderRadius: 999,
          padding: "6px 12px",
          border: `1px solid ${colors.sky}44`,
        }}
      >
        {snippet.source}
      </div>
    </div>
  );
};

const NoteFill: React.FC<{ author?: string }> = ({ author }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      padding: 28,
      background: "#14110c",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 10,
    }}
  >
    <div style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.amber }}>
      NOTE
    </div>
    <div
      style={{
        fontFamily: fonts.sans,
        fontSize: 32,
        fontWeight: 700,
        color: colors.textLight,
      }}
    >
      {author ?? "Rep"}
    </div>
    <div style={{ fontFamily: fonts.sans, fontSize: 16, color: colors.textDim }}>
      Synced to CRM
    </div>
  </div>
);

const CallFill: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#0c1018",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: 5,
        padding: 40,
      }}
    >
      {Array.from({ length: 18 }).map((_, i) => {
        const h = Math.round(
          30 +
            120 *
              Math.abs(Math.sin((frame + i * 5) / 8) * Math.cos((frame + i) / 11)),
        );
        return (
          <div
            key={i}
            style={{
              width: 10,
              height: h,
              borderRadius: 3,
              background: i % 2 === 0 ? colors.sky : colors.amber,
            }}
          />
        );
      })}
    </div>
  );
};

const PatternCard: React.FC<{ takeaway: string; lockAt: number }> = ({
  takeaway,
  lockAt,
}) => {
  const frame = useCurrentFrame();
  const textIn = interpolate(frame, [lockAt + 6, lockAt + 22], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div
      style={{
        borderRadius: layout.radius + 4,
        border: `1px solid rgba(56,189,248,0.4)`,
        background: "rgba(10,10,16,0.82)",
        backdropFilter: "blur(10px)",
        padding: "36px 36px 40px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
        <Img
          src={staticFile("logos/upsight-logo.png")}
          style={{ width: 44, height: 44, objectFit: "contain" }}
        />
        <div
          style={{
            fontFamily: fonts.sans,
            fontWeight: 800,
            fontSize: 28,
            color: colors.textLight,
          }}
        >
          UpSight
        </div>
      </div>
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 15,
          color: colors.sky,
          marginBottom: 14,
          letterSpacing: "0.04em",
        }}
      >
        Living profile → Pattern → Proof
      </div>
      <div
        style={{
          opacity: textIn,
          fontFamily: fonts.sans,
          fontWeight: 800,
          fontSize: 40,
          lineHeight: 1.15,
          letterSpacing: "-0.03em",
          color: colors.textLight,
        }}
      >
        “{takeaway}”
      </div>
      <div
        style={{
          marginTop: 18,
          opacity: textIn,
          fontFamily: fonts.sans,
          fontSize: 18,
          color: colors.textDim,
        }}
      >
        Linked to source evidence
      </div>
    </div>
  );
};
