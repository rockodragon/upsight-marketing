/** Brand tokens — The Thing You Already Know (marketing dark) */
export const colors = {
  amber: "#f59e0b",
  amberGlow: "rgba(245, 158, 11, 0.3)",
  sky: "#38bdf8",
  skyDim: "rgba(56, 189, 248, 0.18)",
  blue: "#0284c7",
  bg: "#050508",
  bgDark: "#050508",
  bgAlt: "#0a0a10",
  bgDarkAlt: "#0a0a10",
  paper: "#eeeef2",
  ink: "#050508",
  text: "#eeeef2",
  textLight: "#eeeef2",
  textDim: "rgba(238, 238, 242, 0.7)",
  textDimAlt: "rgba(238, 238, 242, 0.55)",
  rule: "rgba(238, 238, 242, 0.14)",
  card: "#12121a",
  cardAlt: "#181822",
  folder: "#2a2a32",
  ok: "#22c55e",
  risk: "#ef4444",
} as const;

/** Fallback CSS stacks — prefer fontSans/fontMono from lib/fonts */
export const fonts = {
  sans: "Inter, system-ui, sans-serif",
  mono: "'JetBrains Mono', monospace",
} as const;

export const layout = { radius: 10 } as const;
export const SAFE = { x: 120, y: 90 } as const;
export const easeConfident = [0.16, 1, 0.3, 1] as const;

/** Type scale for 1920×1080 — video-viewing distance */
export const type = {
  citation: 18,
  label: 20,
  eyebrow: 22,
  ui: 24,
  bodySm: 28,
  caption: 32,
  body: 36,
  super: 52,
  headline: 64,
  hero: 72,
} as const;
