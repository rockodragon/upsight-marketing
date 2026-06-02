import React from "react";
import { AbsoluteFill } from "remotion";
import { colors, fonts, layout } from "../lib/brand";
import { useSlideUp, useFadeIn, useScalePop } from "../lib/animations";
import { MonoLabel } from "../components/MonoLabel";

/**
 * Scene: Insight → Task → Shipped → Validated
 * Shows the full arc from evidence to traction.
 *
 * ASSET NEEDED (optional, enhances scene):
 *   - Screenshot: insight-with-receipts.png (UpSight insight detail page)
 *   - Screenshot: task-shipped.png (task marked complete with evidence link)
 */

interface Step {
  icon: string;
  label: string;
  detail: string;
  color: string;
}

const STEPS: Step[] = [
  {
    icon: "💡",
    label: "Insight Published",
    detail: '"Onboarding friction is the #1 churn driver"',
    color: colors.sky,
  },
  {
    icon: "✅",
    label: "Task Created",
    detail: "Redesign onboarding flow — assigned to Eng",
    color: colors.amber,
  },
  {
    icon: "🚀",
    label: "Shipped",
    detail: "New onboarding live in 2 weeks",
    color: colors.green,
  },
  {
    icon: "📈",
    label: "Validated",
    detail: "Activation rate +34% in 30 days",
    color: colors.green,
  },
];

const StepRow: React.FC<{ step: Step; index: number }> = ({ step, index }) => {
  const style = useSlideUp(18 + index * 25, 40);
  const connectorOpacity = useFadeIn(28 + index * 25, 12);

  return (
    <>
      {/* Connector line (between steps) */}
      {index > 0 && (
        <div
          style={{
            width: 2,
            height: 30,
            background: `linear-gradient(to bottom, ${STEPS[index - 1].color}44, ${step.color}44)`,
            marginLeft: 22,
            opacity: connectorOpacity,
          }}
        />
      )}

      <div
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          gap: 20,
          width: "100%",
        }}
      >
        {/* Icon circle */}
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: "50%",
            background: `${step.color}15`,
            border: `2px solid ${step.color}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            flexShrink: 0,
          }}
        >
          {step.icon}
        </div>

        <div style={{ flex: 1 }}>
          {/* Label */}
          <div
            style={{
              fontFamily: fonts.sans,
              fontWeight: 700,
              fontSize: 22,
              color: step.color,
            }}
          >
            {step.label}
          </div>

          {/* Detail */}
          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: 18,
              fontWeight: 400,
              color: colors.textDim,
              lineHeight: 1.4,
              marginTop: 2,
            }}
          >
            {step.detail}
          </div>
        </div>
      </div>
    </>
  );
};

export const SceneInsightToAction: React.FC = () => {
  const headlineStyle = useSlideUp(8);
  const timelineOpacity = useFadeIn(115, 20);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 70,
      }}
    >
      <MonoLabel text="// from evidence to traction" delay={4} />

      <div
        style={{
          ...headlineStyle,
          fontFamily: fonts.sans,
          fontWeight: 900,
          fontSize: 56,
          color: colors.textLight,
          textAlign: "center",
          letterSpacing: "-0.03em",
          marginTop: 24,
          marginBottom: 40,
        }}
      >
        3 Days to Decision
        <br />
        <span style={{ color: colors.green }}>2 Weeks to Ship</span>
      </div>

      {/* Step timeline */}
      <div
        style={{
          width: 720,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        {STEPS.map((step, i) => (
          <StepRow key={i} step={step} index={i} />
        ))}
      </div>

      {/* Timeline badge */}
      <div
        style={{
          marginTop: 36,
          fontFamily: fonts.mono,
          fontSize: 16,
          color: colors.textDimAlt,
          letterSpacing: "0.04em",
          opacity: timelineOpacity,
        }}
      >
        evidence → decision → action → traction
      </div>
    </AbsoluteFill>
  );
};
