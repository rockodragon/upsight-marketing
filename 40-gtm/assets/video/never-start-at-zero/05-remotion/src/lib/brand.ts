/** Brand tokens — Never Start at Zero (marketing dark) */
export const colors = {
  amber: "#f59e0b",
  amberGlow: "rgba(245, 158, 11, 0.3)",
  sky: "#38bdf8",
  skyDim: "rgba(56, 189, 248, 0.18)",
  blue: "#0284c7",
  bg: "#050508",
  bgDark: "#050508",
  bgAlt: "#0a0a10",
  paper: "#eeeef2",
  text: "#eeeef2",
  textLight: "#eeeef2",
  textDim: "rgba(238, 238, 242, 0.7)",
  textDimAlt: "rgba(238, 238, 242, 0.6)",
  rule: "rgba(238, 238, 242, 0.14)",
  card: "#12121a",
  cardAlt: "#181822",
} as const;

export const fonts = {
  sans: "Inter, system-ui, sans-serif",
  mono: "'JetBrains Mono', monospace",
} as const;

export const layout = { radius: 10 } as const;
export const SAFE = { x: 120, y: 90 } as const;
export const easeConfident = [0.16, 1, 0.3, 1] as const;

/** Type scale for 1920×1080 — video-viewing distance */
export const type = {
  label: 20,
  eyebrow: 22,
  bodySm: 28,
  caption: 32,
  body: 36,
  onScreen: 44,
  headline: 64,
  hero: 84,
} as const;
