import React from "react";
import { AbsoluteFill } from "remotion";
import { colors, fonts } from "../lib/brand";
import { getScene } from "../lib/script";
import { MonoLabel } from "../components/MonoLabel";

/** Starter scene — swap for real animation; copy still comes from hero.script.json */
export const ScenePlaceholder: React.FC<{ sceneId: string }> = ({ sceneId }) => {
  const scene = getScene(sceneId);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
        textAlign: "center",
      }}
    >
      {scene.label && <MonoLabel text={scene.label} delay={4} />}

      <div
        style={{
          marginTop: 32,
          fontFamily: fonts.sans,
          fontWeight: 900,
          fontSize: 64,
          color: colors.textLight,
          letterSpacing: "-0.03em",
          lineHeight: 1.2,
        }}
      >
        {scene.headline}
        {scene.headlineAccent && (
          <>
            <br />
            <span style={{ color: colors.amber }}>{scene.headlineAccent}</span>
          </>
        )}
        {scene.taglineLine1 && (
          <>
            <br />
            <span style={{ color: colors.textLight }}>{scene.taglineLine1}</span>
          </>
        )}
        {scene.taglineLine2 && (
          <>
            <br />
            <span style={{ color: colors.amber }}>{scene.taglineLine2}</span>
          </>
        )}
      </div>

      {(scene.subhead || scene.supporting) && (
        <div
          style={{
            marginTop: 24,
            fontFamily: fonts.sans,
            fontSize: 24,
            color: colors.textDim,
            maxWidth: 900,
          }}
        >
          {scene.subhead ?? scene.supporting}
        </div>
      )}

      {scene.cta && (
        <div
          style={{
            marginTop: 40,
            padding: "16px 40px",
            borderRadius: 10,
            background: colors.amber,
            color: colors.bgDark,
            fontFamily: fonts.sans,
            fontWeight: 700,
            fontSize: 20,
          }}
        >
          {scene.cta}
        </div>
      )}
    </AbsoluteFill>
  );
};
