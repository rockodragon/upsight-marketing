import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { accentColor, colors, fonts, layout } from "../../lib/brand";
import { useSceneFade } from "../../lib/animations";
import { MonoLabel } from "../../components/MonoLabel";
import { getScene, ResponseMode } from "../../lib/script";

const VoiceWave: React.FC<{ color: string; frame: number }> = ({
  color,
  frame,
}) => (
  <div style={{ display: "flex", alignItems: "center", gap: 5, height: 48 }}>
    {Array.from({ length: 12 }).map((_, i) => {
      const h = 12 + Math.abs(Math.sin((frame + i * 8) * 0.15)) * 32;
      return (
        <div
          key={i}
          style={{
            width: 5,
            height: h,
            borderRadius: 3,
            background: color,
            opacity: 0.85,
          }}
        />
      );
    })}
  </div>
);

const ModePreview: React.FC<{
  mode: ResponseMode;
  frame: number;
  active: boolean;
}> = ({ mode, frame, active }) => {
  const color = accentColor(mode.accent);

  return (
    <div
      style={{
        marginTop: 20,
        padding: 20,
        borderRadius: layout.radius,
        background: `${color}08`,
        border: `1px solid ${color}22`,
        minHeight: 120,
        opacity: active ? 1 : 0.35,
        transform: `scale(${active ? 1 : 0.96})`,
      }}
    >
      {mode.id === "voice" && <VoiceWave color={color} frame={frame} />}
      {mode.id === "text" && (
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 17,
            color: colors.textLight,
            lineHeight: 1.5,
            borderLeft: `2px solid ${color}`,
            paddingLeft: 14,
          }}
        >
          {mode.samplePrompt}
          <span
            style={{
              display: "inline-block",
              width: 2,
              height: 20,
              background: color,
              marginLeft: 4,
              verticalAlign: "middle",
              opacity: Math.sin(frame * 0.2) > 0 ? 1 : 0,
            }}
          />
        </div>
      )}
      {mode.id === "chat" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div
            style={{
              alignSelf: "flex-start",
              padding: "10px 14px",
              borderRadius: "12px 12px 12px 4px",
              background: "rgba(238,238,242,0.06)",
              fontFamily: fonts.sans,
              fontSize: 15,
              color: colors.textDim,
              maxWidth: "85%",
            }}
          >
            {mode.samplePrompt.split(" — ")[0]}
          </div>
          <div
            style={{
              alignSelf: "flex-end",
              padding: "10px 14px",
              borderRadius: "12px 12px 4px 12px",
              background: `${color}18`,
              border: `1px solid ${color}33`,
              fontFamily: fonts.sans,
              fontSize: 15,
              color: colors.textLight,
              maxWidth: "85%",
            }}
          >
            {mode.samplePrompt.includes(" — ")
              ? mode.samplePrompt.split(" — ")[1]
              : "…"}
          </div>
        </div>
      )}
    </div>
  );
};

const ModeCard: React.FC<{
  mode: ResponseMode;
  index: number;
  active: boolean;
  frame: number;
}> = ({ mode, index, active, frame }) => {
  const { fps } = useVideoConfig();
  const color = accentColor(mode.accent);
  const enter = spring({
    frame: frame - 12 - index * 10,
    fps,
    config: { damping: 26, stiffness: 110, mass: 0.85 },
  });

  return (
    <div
      style={{
        flex: 1,
        opacity: enter,
        transform: `translateY(${interpolate(enter, [0, 1], [40, 0])}px)`,
        padding: 24,
        borderRadius: layout.radius + 4,
        background: active ? colors.bgDarkAlt : "rgba(238,238,242,0.02)",
        border: `1px solid ${active ? color + "44" : "rgba(238,238,242,0.08)"}`,
        boxShadow: active ? `0 0 40px ${color}18` : "none",
      }}
    >
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 13,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color,
        }}
      >
        {mode.title}
      </div>
      <div
        style={{
          marginTop: 10,
          fontFamily: fonts.sans,
          fontSize: 18,
          fontWeight: 600,
          color: colors.textLight,
          lineHeight: 1.35,
        }}
      >
        {mode.description}
      </div>
      <ModePreview mode={mode} frame={frame} active={active} />
    </div>
  );
};

export const SceneSurveyModes: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const script = getScene("modes");
  const modes = script.modes ?? [];
  const sceneOpacity = useSceneFade(durationInFrames);

  const cycleFrames = Math.floor((durationInFrames - 30) / modes.length);
  const activeIndex = Math.min(
    Math.floor(Math.max(0, frame - 30) / cycleFrames),
    modes.length - 1,
  );

  const headline = spring({
    frame: frame - 8,
    fps,
    config: { damping: 28, stiffness: 120, mass: 0.8 },
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: sceneOpacity,
        padding: "0 64px",
      }}
    >
      <MonoLabel text={script.label ?? ""} delay={4} />

      <div
        style={{
          marginTop: 28,
          textAlign: "center",
          fontFamily: fonts.sans,
          fontWeight: 900,
          fontSize: 58,
          color: colors.textLight,
          letterSpacing: "-0.03em",
          opacity: headline,
          transform: `translateY(${interpolate(headline, [0, 1], [30, 0])}px)`,
        }}
      >
        {script.headline}
      </div>

      <div
        style={{
          marginTop: 10,
          fontFamily: fonts.sans,
          fontSize: 24,
          color: colors.textDim,
          textAlign: "center",
          opacity: interpolate(frame - 22, [0, 18], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {script.subhead}
      </div>

      <div
        style={{
          display: "flex",
          gap: 22,
          marginTop: 44,
          width: "100%",
          maxWidth: 1500,
        }}
      >
        {modes.map((mode, i) => (
          <ModeCard
            key={mode.id}
            mode={mode}
            index={i}
            active={i === activeIndex}
            frame={frame}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
