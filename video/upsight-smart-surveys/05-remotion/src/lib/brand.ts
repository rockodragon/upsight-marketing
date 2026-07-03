export const colors = {
  brandBlueLight: "#0284c7",
  brandBlueDark: "#38bdf8",
  amber: "#f59e0b",
  amberGlow: "rgba(245, 158, 11, 0.3)",
  sky: "#38bdf8",
  bgDark: "#050508",
  bgDarkAlt: "#0a0a10",
  textLight: "#eeeef2",
  textDim: "rgba(238, 238, 242, 0.7)",
  textDimAlt: "rgba(238, 238, 242, 0.6)",
  red: "#ef4444",
  green: "#22c55e",
  white: "#ffffff",
  black: "#000000",
} as const;

export const fonts = {
  sans: "Inter, system-ui, sans-serif",
  mono: "'JetBrains Mono', monospace",
} as const;

export const springConfident = {
  damping: 28,
  stiffness: 120,
  mass: 0.8,
} as const;

export const springPop = {
  damping: 14,
  stiffness: 200,
  mass: 0.6,
} as const;

export const layout = {
  radius: 10,
} as const;

export const presets = {
  homeHero: { width: 1920, height: 1080, fps: 30 },
} as const;

export const accentColor = (name: string) => {
  switch (name) {
    case "amber":
      return colors.amber;
    case "green":
      return colors.green;
    case "sky":
    default:
      return colors.sky;
  }
};
