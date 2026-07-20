/** Layout tokens for homepage hero movie variants. */
export type MovieLayout = {
  /** Canvas width / height (composition size). */
  width: number;
  height: number;
  /** Minimum inset from canvas edge for important UI (px). */
  edgePad: number;
  /** Safe-area width as fraction of canvas (centered). */
  safeWidthPct: number;
  /** Safe-area height as fraction of canvas (centered). */
  safeHeightPct: number;
  /** Inner content column width (≤ safe width minus edgePad). */
  contentWidth: number;
  /** Gap between slide and send-to block. */
  sendGap: number;
  /** Playing-card dimensions (realistic video snippet size, not full-bleed). */
  cardWidth: number;
  cardHeight: number;
  cardDealYOffset: number;
  cardStackOffsetY: number;
  /** Typography / slide sizes. */
  analysisTitleSize: number;
  analysisQuoteSize: number;
  titleSlideSize: number;
  titleSlideFindingSize: number;
  titleSlideEyebrowSize: number;
  chartHeadlineSize: number;
  videoFindingSize: number;
  sendLabelSize: number;
  sendChipSize: number;
  sendChipPad: string;
  slideChromeHeight: number;
  logoSize: number;
};

export const INLINE_MOVIE_LAYOUT: MovieLayout = {
  width: 780,
  height: 1040,
  edgePad: 20,
  safeWidthPct: 1,
  safeHeightPct: 1,
  contentWidth: 740,
  sendGap: 4,
  cardWidth: 560,
  cardHeight: 300,
  cardDealYOffset: 80,
  cardStackOffsetY: 28,
  analysisTitleSize: 22,
  analysisQuoteSize: 30,
  titleSlideSize: 62,
  titleSlideFindingSize: 23,
  titleSlideEyebrowSize: 16,
  chartHeadlineSize: 24,
  videoFindingSize: 18,
  sendLabelSize: 30,
  sendChipSize: 30,
  sendChipPad: "18px 28px",
  slideChromeHeight: 36,
  logoSize: 36,
};

/** 4:5 portrait — 1080×1350, 90px edge, 85%×82% safe area. */
export const PORTRAIT_MOVIE_LAYOUT: MovieLayout = {
  width: 1080,
  height: 1350,
  edgePad: 90,
  safeWidthPct: 0.85,
  safeHeightPct: 0.82,
  contentWidth: 780,
  sendGap: 12,
  /** Restored snippet proportions — centered in column, not full width. */
  cardWidth: 520,
  cardHeight: 320,
  cardDealYOffset: 56,
  cardStackOffsetY: 34,
  analysisTitleSize: 20,
  analysisQuoteSize: 26,
  titleSlideSize: 52,
  titleSlideFindingSize: 21,
  titleSlideEyebrowSize: 16,
  chartHeadlineSize: 20,
  videoFindingSize: 16,
  sendLabelSize: 28,
  sendChipSize: 28,
  sendChipPad: "16px 26px",
  slideChromeHeight: 32,
  logoSize: 32,
};

export const getSafeArea = (layout: MovieLayout) => {
  const safeW = Math.round(layout.width * layout.safeWidthPct);
  const safeH = Math.round(layout.height * layout.safeHeightPct);
  const left = Math.max(layout.edgePad, Math.round((layout.width - safeW) / 2));
  const top = Math.max(layout.edgePad, Math.round((layout.height - safeH) / 2));
  const right = Math.max(layout.edgePad, layout.width - safeW - left);
  const bottom = Math.max(layout.edgePad, layout.height - safeH - top);
  return { left, top, right, bottom, width: layout.width - left - right, height: layout.height - top - bottom };
};
