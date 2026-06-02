import React from "react";
import {
  AbsoluteFill,
  Img,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import {
  colors,
  fonts,
  layout,
  springPop,
  springConfident,
} from "../../lib/brand";

/**
 * Scene 9 — Social Proof (48-53s)
 *
 * "Trusted by teams building what's next"
 * Logo row of organizations using UpSight.
 * Uses logo images from public/tradeshow/logos/ when available,
 * falls back to styled text badges.
 *
 * To add logos: drop PNGs into public/tradeshow/logos/
 * and update the `logo` field below with the filename.
 */

interface OrgBadge {
  name: string;
  logo?: string; // filename in public/tradeshow/logos/
  delay: number;
}

const ORGANIZATIONS: OrgBadge[] = [
  { name: "Techstars", logo: "techstars_white_logo.png", delay: 20 },
  { name: "Startup San Diego", logo: "startupsd_logo.png", delay: 35 },
  { name: "Cytodyne", logo: "cytodyme_logo.jpeg", delay: 50 },
  { name: "Abiding Practice", logo: "abidingpractice_logo.webp", delay: 65 },
  { name: "Ansir", logo: "ansir_logo.png", delay: 80 },
  { name: "Reveal Brand", logo: "revealbrand_logo.avif", delay: 95 },
];

const OrgCard: React.FC<{ org: OrgBadge; index: number }> = ({
  org,
  index,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - org.delay,
    fps,
    config: springPop,
  });

  const scale = interpolate(progress, [0, 1], [0.6, 1]);

  return (
    <div
      style={{
        opacity: progress,
        transform: `scale(${scale})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 220,
        height: 100,
      }}
    >
      {org.logo ? (
        <Img
          src={staticFile(`tradeshow/logos/${org.logo}`)}
          style={{
            maxWidth: 200,
            maxHeight: 80,
            objectFit: "contain",
          }}
          onError={() => {}}
        />
      ) : null}
    </div>
  );
};

export const SceneTS_SocialProof: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headlineProgress = spring({
    frame: frame - 8,
    fps,
    config: springConfident,
  });
  const headlineY = interpolate(headlineProgress, [0, 1], [30, 0]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 120px",
        flexDirection: "column",
      }}
    >
      {/* Headline */}
      <div
        style={{
          fontFamily: fonts.sans,
          fontSize: 52,
          fontWeight: 900,
          color: colors.textLight,
          letterSpacing: "-0.03em",
          textAlign: "center",
          opacity: headlineProgress,
          transform: `translateY(${headlineY}px)`,
          marginBottom: 60,
        }}
      >
        Trusted by Teams Who{" "}
        <span style={{ color: colors.amber }}>Love Their Customers</span>
      </div>

      {/* Logo row */}
      <div
        style={{
          display: "flex",
          gap: 48,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {ORGANIZATIONS.map((org, i) => (
          <OrgCard key={i} org={org} index={i} />
        ))}
      </div>
    </AbsoluteFill>
  );
};
