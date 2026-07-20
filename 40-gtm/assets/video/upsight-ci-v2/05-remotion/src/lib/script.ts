import heroScript from "../../../01-script/hero.script.json";

export type SnippetKind = "video" | "zoom" | "call" | "note";

export type Snippet = {
  id: string;
  kind: SnippetKind;
  source: string;
  quote?: string;
  file?: string;
  meta?: string;
  author?: string;
  participants?: string[];
};

export type OutputCard = {
  id: string;
  label: string;
  title: string;
  detail: string;
  audience?: string;
};

export type ReelSource = {
  id: string;
  name: string;
  file: string;
};

export type StackClip = {
  id: string;
  title: string;
  durationSeconds: number;
  label?: string;
};

export type Scene = {
  id: string;
  name: string;
  durationSeconds: number;
  label?: string;
};

export type CiV2Script = {
  id: string;
  title: string;
  description: string;
  format: {
    width: number;
    height: number;
    fps: number;
    durationSeconds: number;
  };
  movieDurationSeconds?: number;
  storyTitle?: string;
  stackClips?: StackClip[];
  takeaway: string;
  snippets: Snippet[];
  reelSources?: ReelSource[];
  outputs: OutputCard[];
  scenes: Scene[];
};

export const videoScript = heroScript as CiV2Script;

export const getTotalDurationInFrames = (script: CiV2Script = videoScript) =>
  script.scenes.reduce((sum, s) => sum + s.durationSeconds, 0) *
  script.format.fps;

export const getStackDurationInFrames = (
  clipId: string,
  script: CiV2Script = videoScript,
) => {
  const clip = script.stackClips?.find((c) => c.id === clipId);
  const seconds = clip?.durationSeconds ?? 6;
  return Math.round(seconds * script.format.fps);
};

export const reelSources: ReelSource[] =
  videoScript.reelSources ??
  videoScript.snippets
    .filter((s): s is Snippet & { file: string } => Boolean(s.file))
    .map((s) => ({
      id: s.id,
      name: s.source,
      file: s.file,
    }));
