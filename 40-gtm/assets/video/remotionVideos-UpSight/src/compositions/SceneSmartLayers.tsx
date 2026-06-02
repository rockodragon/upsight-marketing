import React from "react";
import { AbsoluteFill } from "remotion";
import { colors, fonts } from "../lib/brand";
import { useSlideUp, useFadeIn } from "../lib/animations";
import { MonoLabel } from "../components/MonoLabel";

/**
 * Scene: Each interaction layers on more detail — the profile grows.
 * Visual: Stacking layers showing data accumulating from different sources.
 */

interface Layer {
  source: string;
  detail: string;
  color: string;
}

const LAYERS: Layer[] = [
  {
    source: "Survey #1",
    detail: "Role: Product Manager, 50-person startup",
    color: colors.sky,
  },
  {
    source: "Interview",
    detail: "Top pain: onboarding takes too long",
    color: colors.amber,
  },
  {
    source: "Survey #2",
    detail: "Skips known answers — asks what matters now",
    color: colors.green,
  },
];

const LayerRow: React.FC<{ layer: Layer; index: number }> = ({
  layer,
  index,
}) => {
  const style = useSlideUp(22 + index * 26, 50);

  return (
    <div
      style={{
        ...style,
        width: "100%",
        padding: "22px 28px",
        borderRadius: 10,
        background: `${layer.color}08`,
        borderLeft: `3px solid ${layer.color}`,
        border: `1px solid ${layer.color}18`,
        borderLeftWidth: 3,
        borderLeftColor: layer.color,
      }}
    >
      {/* Source tag */}
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 14,
          fontWeight: 500,
          color: layer.color,
          letterSpacing: "0.06em",
          marginBottom: 8,
        }}
      >
        + {layer.source}
      </div>

      {/* Detail */}
      <div
        style={{
          fontFamily: fonts.sans,
          fontSize: 20,
          fontWeight: 500,
          color: colors.textLight,
          lineHeight: 1.4,
        }}
      >
        {layer.detail}
      </div>
    </div>
  );
};

export const SceneSmartLayers: React.FC = () => {
  const headlineStyle = useSlideUp(8);
  const badgeOpacity = useFadeIn(105, 20);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
      }}
    >
      <MonoLabel text="// the upsight way" delay={4} />

      <div
        style={{
          ...headlineStyle,
          fontFamily: fonts.sans,
          fontWeight: 900,
          fontSize: 48,
          color: colors.textLight,
          textAlign: "center",
          letterSpacing: "-0.03em",
          marginTop: 28,
          marginBottom: 44,
        }}
      >
        Every interaction{" "}
        <span style={{ color: colors.sky }}>builds the profile</span>
      </div>

      {/* Stacking layers */}
      <div
        style={{
          width: 700,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {LAYERS.map((layer, i) => (
          <LayerRow key={i} layer={layer} index={i} />
        ))}
      </div>

      {/* Badge */}
      <div
        style={{
          marginTop: 40,
          fontFamily: fonts.mono,
          fontSize: 16,
          color: colors.textDimAlt,
          letterSpacing: "0.04em",
          opacity: badgeOpacity,
          textAlign: "center",
        }}
      >
        Conversations + surveys + data — one living profile
      </div>
    </AbsoluteFill>
  );
};
