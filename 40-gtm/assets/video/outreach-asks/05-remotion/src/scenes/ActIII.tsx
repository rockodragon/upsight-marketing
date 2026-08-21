import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { QuoteCard } from "../components/Primitives";
import { colors, type } from "../lib/brand";
import { DANA, MARCH_QUOTE, PEOPLE } from "../lib/cast";
import { fontSans } from "../lib/fonts";
import { ease } from "../lib/motion";

/** Cut to white. Logo lands as relief, not interruption. */
export const ActIII: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = frame / fps;

  const cardOp = interpolate(s, [0, 0.55], [0, 1], ease);
  const cardScale = interpolate(s, [0, 0.55], [0.96, 1], ease);
  const explode = interpolate(s, [4.2, 5.4], [0, 1], ease);
  const markOp = interpolate(s, [5.0, 6.0], [0, 1], ease);

  const others = PEOPLE.filter((p) => p.id !== DANA.id).slice(0, 11);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.paper,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "relative", width: 1280, height: 720 }}>
        {others.map((p, i) => {
          const angle = (i / others.length) * Math.PI * 2 - Math.PI / 2;
          const r = 280;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r * 0.62;
          return (
            <div
              key={p.id}
              style={{
                position: "absolute",
                left: 640 + x - 90,
                top: 360 + y - 36,
                opacity: explode,
                scale: interpolate(explode, [0, 1], [0.6, 1]),
                width: 180,
                padding: "10px 14px",
                borderRadius: 10,
                background: "rgba(5,5,8,0.06)",
                border: "1px solid rgba(5,5,8,0.12)",
                fontFamily: fontSans,
                fontSize: 16,
                fontWeight: 600,
                color: colors.ink,
              }}
            >
              {p.name}
              <span style={{ fontWeight: 400, color: "rgba(5,5,8,0.5)" }}> · {p.company}</span>
            </div>
          );
        })}

        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            translate: "-50% -50%",
            opacity: cardOp,
          }}
        >
          <QuoteCard
            quote={MARCH_QUOTE}
            name={DANA.name}
            date="March 12"
            opacity={1}
            scale={cardScale}
          />
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 88,
          opacity: markOp,
          fontFamily: fontSans,
          fontSize: type.headline,
          fontWeight: 700,
          color: colors.ink,
          letterSpacing: "-0.03em",
        }}
      >
        UpSight
      </div>
    </AbsoluteFill>
  );
};
