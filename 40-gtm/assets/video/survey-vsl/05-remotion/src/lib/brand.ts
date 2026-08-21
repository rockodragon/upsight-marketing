/** CI-v2 / homepage paper tokens — light LinkedIn cut */
export const colors = {
  amber: "#f59e0b",
  amberGlow: "rgba(245, 158, 11, 0.3)",
  sky: "#38bdf8",
  blue: "#0284c7",
  green: "#22c55e",
  red: "#ef4444",
  // Light surface (matches talking-heads-marquee / ci-v2)
  paper: "#eeeef2",
  ink: "#050508",
  inkDim: "rgba(5, 5, 8, 0.66)",
  inkDimAlt: "rgba(5, 5, 8, 0.5)",
  rule: "rgba(5, 5, 8, 0.14)",
  card: "#ffffff",
  // Keep dark aliases pointing at paper system so old imports don't go black
  bgDark: "#eeeef2",
  bgDarkAlt: "#e4e4ea",
  textLight: "#050508",
  textDim: "rgba(5, 5, 8, 0.66)",
  textDimAlt: "rgba(5, 5, 8, 0.5)",
} as const;

export const fonts = {
  sans: "Inter, system-ui, sans-serif",
  mono: "'JetBrains Mono', monospace",
} as const;

export const layout = { radius: 10 } as const;

/** LinkedIn 16:9 (1920×1080) — generous safe area so type doesn't kiss edges */
export const SAFE = { x: 120, y: 90 } as const;

export const easeConfident = [0.16, 1, 0.3, 1] as const;

/** Readable type scale for 1920×1080 (video-layout mins, not UI chrome) */
export const type = {
  eyebrow: 22,
  label: 20,
  body: 36,
  bodySm: 28,
  quote: 40,
  headline: 56,
  hero: 64,
  score: 68,
  caption: 30,
} as const;
