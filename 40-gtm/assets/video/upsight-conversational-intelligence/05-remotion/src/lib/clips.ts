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

type ClipManifestItem = {
  id: string;
  file: string;
  kind?: string;
  speaker?: string;
  theme: string;
  quote: string;
  audioStartSec?: number;
};

const toSpeakerClip = (s: ClipManifestItem): SpeakerClip => ({
  id: s.id,
  file: s.file,
  kind: (s.kind as MediaKind) ?? "video",
  speaker: s.speaker ?? s.id,
  theme: s.theme,
  quote: s.quote,
  audioStartSec: s.audioStartSec ?? 0,
});

export const SPEAKER_CLIPS: SpeakerClip[] =
  clipManifest.speakers.map(toSpeakerClip);

/**
 * Evidence / people clips for the response grid.
 * Keep this to evidence IDs so product scenes do not duplicate the featured heads.
 */
export const EVIDENCE_CLIPS: SpeakerClip[] = clipManifest.marqueeClips
  .map(toSpeakerClip)
  .filter((clip) => /^m\d+/.test(clip.id));

/** Bottom film-reel - ordered in 01-script/clip-manifest.json for easy edits. */
export const MARQUEE_CLIPS: SpeakerClip[] =
  clipManifest.marqueeClips.map(toSpeakerClip);

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
