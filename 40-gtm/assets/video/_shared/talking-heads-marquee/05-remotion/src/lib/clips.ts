import clipManifest from "../../../clip-manifest.json";

export type MediaKind = "audio" | "video" | "call";

export type SpeakerClip = {
  id: string;
  file: string;
  kind: MediaKind;
  speaker: string;
  theme: string;
  quote: string;
  audioStartSec: number;
  /** CSS object-position — bias portrait crops toward the face */
  objectPosition: string;
  /** Optional overlay label on the marquee tile (e.g. "Support call") */
  label?: string;
  /** Video object-fit — meeting grids use contain */
  objectFit?: "cover" | "contain";
};

/** Known portrait / headroom-heavy clips that need a face-biased crop */
const OBJECT_POSITION_BY_FILE: Record<string, string> = {
  "v1.mov": "center 32%",
  "04-vendors-and-vendors-only-can-kind-of-colla-20s.mp4": "center 32%",
  "testimonial-rylie.mp4": "center 12%",
};

const toClip = (s: any): SpeakerClip => {
  const fileName = String(s.file ?? "").split("/").pop() ?? "";
  return {
    id: s.id,
    file: s.file ?? "",
    kind: (s.kind as MediaKind) ?? "video",
    speaker: s.speaker ?? s.id,
    theme: s.theme ?? "",
    quote: s.quote ?? "",
    audioStartSec: s.audioStartSec ?? 0,
    objectPosition:
      s.objectPosition ??
      OBJECT_POSITION_BY_FILE[fileName] ??
      "center center",
    label: s.label,
    objectFit: s.objectFit,
  };
};

/** Featured clips used for theme callouts */
export const FEATURED_CLIPS: SpeakerClip[] = (clipManifest as any).featured.map(
  toClip,
);

/**
 * Bottom film-reel — talking heads + Zoom meeting + Support call (animated bars).
 * One unique set spans the viewport (no in-frame repeats).
 */
export const MARQUEE_CLIPS: SpeakerClip[] = [
  ...FEATURED_CLIPS,
  {
    id: "zoom-meeting",
    file: "video/meeting-panel-6.mp4",
    kind: "video",
    speaker: "Zoom meetings",
    theme: "Zoom meetings",
    quote: "",
    audioStartSec: 0,
    objectPosition: "center center",
    label: "Zoom meetings",
    objectFit: "contain",
  },
  {
    id: "support-call",
    file: "",
    kind: "call",
    speaker: "Support calls",
    theme: "Support calls",
    quote: "",
    audioStartSec: 0,
    objectPosition: "center center",
    label: "Support calls",
  },
];

/** 10s @ 30fps per the script */
export const DURATION_SECONDS = 10;
export const CLIP_FPS = 30;

/** Space reserved at the bottom for the scrolling people reel (+30% vs original 268) */
export const MARQUEE_HEIGHT = Math.round(268 * 1.3);

export function isAudioClip(clip: SpeakerClip): boolean {
  return (
    clip.kind === "audio" ||
    /\.(m4a|mp3|wav|aac|ogg)$/i.test(clip.file)
  );
}

export function isCallClip(clip: SpeakerClip): boolean {
  return clip.kind === "call";
}
