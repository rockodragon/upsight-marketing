import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fonts, layout, springConfident } from "../lib/brand";

const METRICS = [
  { label: "MRR", value: "$142K", delta: "+8%", status: "on-track" },
  { label: "NPS", value: "52", delta: "+4", status: "on-track" },
  { label: "Churn", value: "2.1%", delta: "↑ risk", status: "attention" },
  { label: "Pipeline", value: "$890K", delta: "+12%", status: "on-track" },
];

const ISSUES = [
  {
    title: "Onboarding friction driving early churn",
    evidence: '"Setup took way too long" — Sarah Chen, Call 3/12',
    priority: "P1",
  },
  {
    title: "Enterprise SSO blocking 3 deals",
    evidence: '"We need SAML before we can sign" — Acme Corp',
    priority: "P2",
  },
];

const ACTIONS = [
  { task: "Ship simplified onboarding v2", owner: "Eng", due: "Thu" },
  { task: "Prioritize SSO in Q2 roadmap", owner: "Product", due: "Mon" },
  { task: "Follow up Acme security review", owner: "Sales", due: "Today" },
];

export const MeetingPrepMockup: React.FC<{ delay?: number }> = ({
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - delay;

  const shellProgress = spring({
    frame: localFrame,
    fps,
    config: springConfident,
  });

  const shellY = interpolate(shellProgress, [0, 1], [80, 0]);

  return (
    <div
      style={{
        width: 1100,
        opacity: shellProgress,
        transform: `translateY(${shellY}px)`,
        borderRadius: layout.radius + 6,
        overflow: "hidden",
        border: "1px solid rgba(56, 189, 248, 0.15)",
        boxShadow: `0 40px 100px rgba(0,0,0,0.55), 0 0 60px ${colors.amberGlow}`,
        background: colors.bgDarkAlt,
      }}
    >
      <div
        style={{
          height: 44,
          background: "rgba(5, 5, 8, 0.9)",
          borderBottom: "1px solid rgba(238,238,242,0.06)",
          display: "flex",
          alignItems: "center",
          padding: "0 18px",
          gap: 8,
        }}
      >
        {["#ff5f57", "#ffbd2e", "#28c840"].map((c) => (
          <div
            key={c}
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: c,
            }}
          />
        ))}
        <div
          style={{
            marginLeft: 16,
            fontFamily: fonts.mono,
            fontSize: 13,
            color: colors.textDimAlt,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Monday Leadership Meeting — Ready
        </div>
      </div>

      <div style={{ padding: "28px 32px 32px" }}>
        <SectionLabel text="Scorecard" delay={delay + 12} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 14,
            marginTop: 14,
          }}
        >
          {METRICS.map((m, i) => (
            <MetricCard key={m.label} metric={m} index={i} delay={delay} />
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            marginTop: 28,
          }}
        >
          <div>
            <SectionLabel text="Issues to discuss" delay={delay + 35} />
            <div
              style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 14 }}
            >
              {ISSUES.map((issue, i) => (
                <IssueCard key={issue.title} issue={issue} index={i} delay={delay} />
              ))}
            </div>
          </div>

          <div>
            <SectionLabel text="Action items" delay={delay + 50} />
            <div
              style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}
            >
              {ACTIONS.map((action, i) => (
                <ActionRow key={action.task} action={action} index={i} delay={delay} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionLabel: React.FC<{ text: string; delay: number }> = ({
  text,
  delay,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = spring({
    frame: frame - delay,
    fps,
    config: springConfident,
  });

  return (
    <div
      style={{
        fontFamily: fonts.mono,
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: colors.amber,
        opacity,
      }}
    >
      {text}
    </div>
  );
};

const MetricCard: React.FC<{
  metric: (typeof METRICS)[0];
  index: number;
  delay: number;
}> = ({ metric, index, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({
    frame: frame - delay - 18 - index * 8,
    fps,
    config: springConfident,
  });

  const isAttention = metric.status === "attention";

  return (
    <div
      style={{
        opacity: progress,
        transform: `translateY(${interpolate(progress, [0, 1], [24, 0])}px)`,
        padding: "16px 18px",
        borderRadius: layout.radius,
        background: "rgba(238,238,242,0.03)",
        border: `1px solid ${
          isAttention ? "rgba(245, 158, 11, 0.25)" : "rgba(56, 189, 248, 0.1)"
        }`,
      }}
    >
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 11,
          color: colors.textDimAlt,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        {metric.label}
      </div>
      <div
        style={{
          fontFamily: fonts.sans,
          fontSize: 28,
          fontWeight: 800,
          color: colors.textLight,
          marginTop: 4,
          letterSpacing: "-0.02em",
        }}
      >
        {metric.value}
      </div>
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 12,
          color: isAttention ? colors.amber : colors.green,
          marginTop: 4,
        }}
      >
        {metric.delta}
      </div>
    </div>
  );
};

const IssueCard: React.FC<{
  issue: (typeof ISSUES)[0];
  index: number;
  delay: number;
}> = ({ issue, index, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({
    frame: frame - delay - 42 - index * 14,
    fps,
    config: springConfident,
  });

  return (
    <div
      style={{
        opacity: progress,
        transform: `translateX(${interpolate(progress, [0, 1], [-30, 0])}px)`,
        padding: "16px 18px",
        borderRadius: layout.radius,
        background: "rgba(238,238,242,0.02)",
        border: "1px solid rgba(56, 189, 248, 0.12)",
        borderLeft: `3px solid ${colors.sky}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 11,
            color: colors.amber,
            padding: "2px 8px",
            borderRadius: 4,
            background: "rgba(245, 158, 11, 0.1)",
          }}
        >
          {issue.priority}
        </span>
        <span
          style={{
            fontFamily: fonts.sans,
            fontSize: 16,
            fontWeight: 600,
            color: colors.textLight,
          }}
        >
          {issue.title}
        </span>
      </div>
      <div
        style={{
          marginTop: 10,
          fontFamily: fonts.sans,
          fontSize: 13,
          fontStyle: "italic",
          color: colors.textDim,
          lineHeight: 1.4,
        }}
      >
        {issue.evidence}
      </div>
    </div>
  );
};

const ActionRow: React.FC<{
  action: (typeof ACTIONS)[0];
  index: number;
  delay: number;
}> = ({ action, index, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({
    frame: frame - delay - 55 - index * 10,
    fps,
    config: springConfident,
  });

  return (
    <div
      style={{
        opacity: progress,
        transform: `translateX(${interpolate(progress, [0, 1], [30, 0])}px)`,
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "12px 16px",
        borderRadius: layout.radius,
        background: "rgba(238,238,242,0.02)",
        border: "1px solid rgba(238,238,242,0.06)",
      }}
    >
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: 6,
          border: `2px solid ${colors.sky}`,
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 15,
            fontWeight: 500,
            color: colors.textLight,
          }}
        >
          {action.task}
        </div>
      </div>
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 12,
          color: colors.sky,
          padding: "4px 10px",
          borderRadius: 6,
          background: "rgba(56, 189, 248, 0.08)",
        }}
      >
        {action.owner}
      </div>
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 11,
          color: colors.textDimAlt,
        }}
      >
        {action.due}
      </div>
    </div>
  );
};
