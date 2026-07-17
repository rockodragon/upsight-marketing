import clipManifest from "../../../01-script/clip-manifest.json";

export type MediaKind = "audio" | "video";

export type SpeakerClip = {
  id: string;
  file: string;
  kind: MediaKind;
  speaker: string;
  theme: string;
  quote: string;
  audioStartSec: number;
};

export const SPEAKER_CLIPS: SpeakerClip[] = clipManifest.speakers.map((s) => ({
  id: s.id,
  file: s.file,
  kind: (s.kind as MediaKind) ?? "video",
  speaker: s.speaker ?? s.id,
  theme: s.theme,
  quote: s.quote,
  audioStartSec: s.audioStartSec ?? 0,
}));

/** Evidence / people clips for marquee + response grid — keep distinct from featured talking heads */
export const EVIDENCE_CLIPS: SpeakerClip[] = [
  {
    id: "m01",
    file: "video/01-people-are-coming-here-to-make-connections-35s.mp4",
    kind: "video",
    speaker: "Customer 1",
    theme: "Connections",
    quote: "People are coming here to make connections",
    audioStartSec: 0,
  },
  {
    id: "m02",
    file: "video/02-host-a-networking-hour-or-30-minutes-proba-34s.mp4",
    kind: "video",
    speaker: "Customer 2",
    theme: "Networking",
    quote: "Host a networking hour",
    audioStartSec: 0,
  },
  {
    id: "m03",
    file: "video/03-finding-the-right-customers-and-advocates--30s.mp4",
    kind: "video",
    speaker: "Customer 3",
    theme: "Advocates",
    quote: "Finding the right customers and advocates",
    audioStartSec: 0,
  },
  {
    id: "m04",
    file: "video/04-vendors-and-vendors-only-can-kind-of-colla-20s.mp4",
    kind: "video",
    speaker: "Customer 4",
    theme: "Collaboration",
    quote: "Vendors can collaborate and stay connected",
    audioStartSec: 0,
  },
  {
    id: "m05",
    file: "video/05-in-the-marketing-materials-having-somethin-12s.mp4",
    kind: "video",
    speaker: "Customer 5",
    theme: "Sharing",
    quote: "Something for all of us to share",
    audioStartSec: 0,
  },
  {
    id: "m06",
    file: "video/06-i-help-startups-and-lean-teams-better-unde-7s.mp4",
    kind: "video",
    speaker: "Customer 6",
    theme: "Understanding",
    quote: "Help startups better understand their customers",
    audioStartSec: 0,
  },
];

/** Bottom film-reel — evidence clips only (no v1/v2/v3 repeats) */
export const MARQUEE_CLIPS: SpeakerClip[] = EVIDENCE_CLIPS;

/** 30s VSL @ 30fps */
export const CLIP_DURATION_SECONDS = 30;
export const CLIP_FPS = 30;

/** Standalone streaming-marquee asset */
export const MARQUEE_DURATION_SECONDS = 6;

/** Space reserved at the bottom for the scrolling people reel */
export const MARQUEE_HEIGHT = 268;

export function isAudioClip(clip: SpeakerClip): boolean {
  return (
    clip.kind === "audio" ||
    /\.(m4a|mp3|wav|aac|ogg)$/i.test(clip.file)
  );
}
