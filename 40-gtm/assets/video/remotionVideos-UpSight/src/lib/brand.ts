/**
 * UpSight Brand Style Guide — Single Source of Truth
 *
 * Colors, typography, motion, and layout tokens.
 * Import this everywhere instead of hardcoding values.
 */

// ─── Colors ────────────────────────────────────────────────
export const colors = {
  // Brand Blue (Product Primary)
  brandBlueLight: "#0284c7",
  brandBlueDark: "#38bdf8",

  // Brand Amber (Marketing CTA)
  amber: "#f59e0b",
  amberGlow: "rgba(245, 158, 11, 0.3)",

  // Brand Sky (Highlight Accent)
  sky: "#38bdf8",

  // Marketing Neutrals (Dark)
  bgDark: "#050508",
  bgDarkAlt: "#0a0a10",
  textLight: "#eeeef2",
  textDim: "rgba(238, 238, 242, 0.7)",
  textDimAlt: "rgba(238, 238, 242, 0.6)",

  // Semantic
  red: "#ef4444",
  green: "#22c55e",
  white: "#ffffff",
  black: "#000000",
} as const;

// ─── Typography ────────────────────────────────────────────
export const fonts = {
  /** Marketing sans — Inter via Google Fonts */
  sans: "Inter, system-ui, sans-serif",
  /** Operator / label voice — JetBrains Mono */
  mono: "'JetBrains Mono', monospace",
} as const;

// Google Fonts URL (load in remotion.config or Root)
export const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500&display=swap";

// ─── Motion ────────────────────────────────────────────────
/** "Confident glide" spring config — slower ease-out, no bounce */
export const springConfident = {
  damping: 28,
  stiffness: 120,
  mass: 0.8,
} as const;

/** Snappy spring for scale pops */
export const springPop = {
  damping: 14,
  stiffness: 200,
  mass: 0.6,
} as const;

/** Gentle reveal spring */
export const springReveal = {
  damping: 30,
  stiffness: 80,
  mass: 1,
} as const;

// ─── Layout ────────────────────────────────────────────────
export const layout = {
  /** Global radius token */
  radius: 10, // 0.625rem ≈ 10px at 16px base
  /** Standard padding for 1080×1080 canvas */
  canvasPadding: 80,
} as const;

// ─── Video Presets ─────────────────────────────────────────
export const presets = {
  linkedInSquare: { width: 1080, height: 1080, fps: 30 },
  instagramReel: { width: 1080, height: 1920, fps: 30 },
  youtubeShort: { width: 1080, height: 1920, fps: 30 },
  twitterLandscape: { width: 1920, height: 1080, fps: 30 },
  tradeShow: { width: 1920, height: 1080, fps: 30 },
} as const;
