import React from "react";
import {
  AbsoluteFill,
  Img,
  OffthreadVideo,
  Sequence,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { colors, fonts } from "../lib/brand";
import { getAnchorTransforms, getAnimatedLayerStyle } from "../lib/motion";
import type { Layer, Scene } from "../lib/script";
import { ScenePlaceholder } from "../compositions/ScenePlaceholder";

const ShapeLayerBody: React.FC<{
  layer: Extract<Layer, { kind: "shape" }>;
}> = ({ layer }) => {
  const shape = layer.shape ?? "rect";

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: layer.backgroundColor ?? colors.sky,
        borderRadius:
          shape === "circle"
            ? "9999px"
            : shape === "pill"
              ? "999px"
              : layer.borderRadius,
        border: layer.border,
        boxShadow: layer.boxShadow,
      }}
    />
  );
};

const LayerBody: React.FC<{ layer: Layer }> = ({ layer }) => {
  switch (layer.kind) {
    case "text":
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            color: layer.color ?? colors.textLight,
            fontFamily: layer.fontFamily ?? fonts.sans,
            fontSize: layer.fontSize ?? 56,
            fontWeight: layer.fontWeight ?? 800,
            lineHeight: layer.lineHeight ?? 1.1,
            letterSpacing: layer.letterSpacing ?? "-0.03em",
            textAlign: layer.textAlign ?? "left",
            backgroundColor: layer.backgroundColor,
            padding: layer.padding,
            borderRadius: layer.borderRadius,
            border: layer.border,
            boxShadow: layer.boxShadow,
            whiteSpace: "pre-wrap",
          }}
        >
          {layer.text}
        </div>
      );
    case "image":
      return (
        <Img
          src={staticFile(layer.src)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: layer.objectFit ?? "contain",
            borderRadius: layer.borderRadius,
            border: layer.border,
            boxShadow: layer.boxShadow,
          }}
        />
      );
    case "video":
      return (
        <OffthreadVideo
          src={staticFile(layer.src)}
          muted={layer.muted}
          style={{
            width: "100%",
            height: "100%",
            objectFit: layer.objectFit ?? "cover",
            borderRadius: layer.borderRadius,
            border: layer.border,
            boxShadow: layer.boxShadow,
          }}
        />
      );
    case "shape":
      return <ShapeLayerBody layer={layer} />;
  }
};

const LayerFrame: React.FC<{
  layer: Layer;
  durationInFrames: number;
}> = ({ layer, durationInFrames }) => {
  const frame = useCurrentFrame();
  const animated = getAnimatedLayerStyle(
    frame,
    durationInFrames,
    layer.enter,
    layer.exit,
    layer.motion
  );

  const transformParts = [
    ...getAnchorTransforms(layer.anchorX, layer.anchorY),
    ...animated.transformParts,
  ];

  if (layer.rotateDeg) {
    transformParts.push(`rotate(${layer.rotateDeg}deg)`);
  }

  return (
    <div
      style={{
        position: "absolute",
        left: layer.x,
        top: layer.y,
        width: layer.width,
        height: layer.height,
        zIndex: layer.zIndex,
        opacity: (layer.opacity ?? 1) * animated.opacity,
        clipPath: animated.clipPath,
        transform: transformParts.join(" "),
        transformOrigin: "top left",
      }}
    >
      <LayerBody layer={layer} />
    </div>
  );
};

export const CanvasLayer: React.FC<{
  layer: Layer;
  durationInFrames: number;
}> = ({ layer, durationInFrames }) => {
  const from = layer.fromFrames ?? 0;
  const clipDuration = Math.max(
    1,
    layer.durationFrames ?? durationInFrames - from
  );

  return (
    <Sequence
      from={from}
      durationInFrames={clipDuration}
      name={`layer:${layer.id}`}
    >
      <LayerFrame layer={layer} durationInFrames={clipDuration} />
    </Sequence>
  );
};

export const SceneCanvas: React.FC<{
  scene: Scene;
  durationInFrames: number;
}> = ({ scene, durationInFrames }) => {
  const frame = useCurrentFrame();
  const animated = getAnimatedLayerStyle(
    frame,
    durationInFrames,
    scene.enter,
    scene.exit
  );
  const layers = scene.layers ?? [];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: scene.backgroundColor,
        opacity: animated.opacity,
        clipPath: animated.clipPath,
        transform: animated.transformParts.join(" ") || undefined,
        transformOrigin: "center center",
      }}
    >
      {layers.length > 0 ? (
        layers.map((layer) => (
          <CanvasLayer
            key={layer.id}
            layer={layer}
            durationInFrames={durationInFrames}
          />
        ))
      ) : (
        <ScenePlaceholder scene={scene} />
      )}
    </AbsoluteFill>
  );
};
