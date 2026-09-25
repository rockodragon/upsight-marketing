/** CI-v2 paper tokens — LinkedIn 16:9 consulting cut */
export const colors = {
  amber: "#f59e0b",
  amberGlow: "rgba(245, 158, 11, 0.3)",
  sky: "#38bdf8",
  blue: "#0284c7",
  green: "#22c55e",
  red: "#ef4444",
  paper: "#eeeef2",
  ink: "#050508",
  inkDim: "rgba(5, 5, 8, 0.66)",
  inkDimAlt: "rgba(5, 5, 8, 0.5)",
  rule: "rgba(5, 5, 8, 0.14)",
  card: "#ffffff",
} as const;

export const layout = { radius: 10 } as const;
export const SAFE = { x: 120, y: 90 } as const;
export const easeConfident = [0.16, 1, 0.3, 1] as const;

export const type = {
  eyebrow: 22,
  label: 20,
  body: 36,
  bodySm: 28,
  quote: 40,
  headline: 52,
  hero: 60,
  score: 64,
  caption: 30,
} as const;
