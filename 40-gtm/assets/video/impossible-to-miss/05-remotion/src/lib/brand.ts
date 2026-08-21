/** Brand tokens — Impossible to Miss (marketing dark) */
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
  bgPlate: "#12121a",
  text: "#eeeef2",
  textLight: "#eeeef2",
  textDim: "rgba(238, 238, 242, 0.7)",
  textDimAlt: "rgba(238, 238, 242, 0.55)",
  fpo: "rgba(238, 238, 242, 0.12)",
  fpoBorder: "rgba(238, 238, 242, 0.22)",
  risk: "#ef4444",
  ok: "#22c55e",
  green: "#22c55e",
} as const;

/** Fallback CSS stacks — prefer fontSans/fontMono from lib/fonts in compositions */
export const fonts = {
  sans: "Inter, system-ui, sans-serif",
  mono: "'JetBrains Mono', monospace",
} as const;

export const layout = { radius: 10 } as const;
export const SAFE = { x: 120, y: 90 } as const;
export const easeConfident = [0.16, 1, 0.3, 1] as const;

/** Type scale for 1920×1080 */
export const type = {
  eyebrow: 22,
  label: 24,
  body: 36,
  bodySm: 28,
  caption: 32,
  onScreen: 44,
  headline: 64,
  hero: 72,
  fpo: 28,
} as const;
