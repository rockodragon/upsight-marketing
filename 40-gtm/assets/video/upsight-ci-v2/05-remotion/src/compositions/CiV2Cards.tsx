import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import {
  DealtCard,
  SceneTitle,
  TransparentStage,
} from "../components/StackPieces";
import { videoScript } from "../lib/script";

/** Clip 1 — evidence cards deal in (Haley, Rylie, Zoom, note). */
export const CiV2Cards: React.FC = () => {
  const frame = useCurrentFrame();
  const titleIn = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const snippets = videoScript.snippets.slice(0, 4);

  return (
    <TransparentStage>
      <SceneTitle text="Customer evidence comes in" opacity={titleIn} />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 160,
          width: 560,
          height: 720,
          marginLeft: -280,
        }}
      >
        {snippets.map((snippet, i) => (
          <DealtCard
            key={snippet.id}
            snippet={snippet}
            index={i}
            appearAt={6 + i * 14}
            width={480}
            height={300}
          />
        ))}
      </div>
    </TransparentStage>
  );
};
