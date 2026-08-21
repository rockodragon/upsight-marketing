import { useVideoConfig } from "remotion";

/** Scale UI relative to 1920×1080 landscape reference */
export function useLayoutScale() {
  const { width, height } = useVideoConfig();
  const landscape = width / height > 1.2;
  const square = Math.abs(width / height - 1) < 0.08;
  const scale = landscape ? 1 : square ? 0.72 : 0.68;
  const pad = landscape ? 80 : square ? 56 : 48;
  const maxContent = landscape ? 1400 : square ? 920 : 900;

  return { width, height, landscape, square, scale, pad, maxContent };
}
