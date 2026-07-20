import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";

type FlowArrowProps = {
  appearAt: number;
  color: string;
  left?: number | string;
  right?: number | string;
  top?: number | string;
  width?: number;
};

/** Visible flow arrow with head + traveling pulse. */
export const FlowArrow: React.FC<FlowArrowProps> = ({
  appearAt,
  color,
  left,
  right,
  top = "50%",
  width = 110,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [appearAt, appearAt + 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const pulse = 0.88 + 0.12 * Math.sin(frame / 9);
  const travel = ((frame - appearAt) * 3) % (width - 28);
  const shaftEnd = width - 24;

  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        right,
        width,
        height: 24,
        marginTop: -12,
        opacity: opacity * pulse,
        pointerEvents: "none",
      }}
    >
      <svg width={width} height={24} viewBox={`0 0 ${width} 24`}>
        <line
          x1={0}
          y1={12}
          x2={shaftEnd}
          y2={12}
          stroke={color}
          strokeWidth={6}
          strokeLinecap="round"
        />
        <polygon
          points={`${width - 2},12 ${shaftEnd - 2},3 ${shaftEnd - 2},21`}
          fill={color}
        />
        <circle
          cx={Math.min(shaftEnd - 8, 12 + Math.max(0, travel))}
          cy={12}
          r={5}
          fill={color}
        />
      </svg>
    </div>
  );
};
