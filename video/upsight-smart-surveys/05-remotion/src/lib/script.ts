import surveyScript from "../../../01-script/hero.script.json";

export type ResponseMode = {
  id: string;
  title: string;
  description: string;
  samplePrompt: string;
  accent: string;
};

export type SurveyScene = {
  id: string;
  name: string;
  durationSeconds: number;
  label?: string;
  headline?: string;
  headlineAccent?: string;
  headlinePrefix?: string;
  headlineStrike?: string;
  headlineSuffix?: string;
  subhead?: string;
  subheadAccent?: string;
  qualities?: string[];
  modes?: ResponseMode[];
  surveyTitle?: string;
  question?: string;
  followUp?: string;
  stats?: Record<string, string>;
  taglineLine1?: string;
  taglineLine2?: string;
  supporting?: string;
  cta?: string;
};

export type VideoScript = {
  id: string;
  title: string;
  description: string;
  format: {
    width: number;
    height: number;
    fps: number;
    durationSeconds: number;
  };
  scenes: SurveyScene[];
};

export const aiSurveyScript = surveyScript as VideoScript;

export function getScene(id: string): SurveyScene {
  const scene = aiSurveyScript.scenes.find((s) => s.id === id);
  if (!scene) {
    throw new Error(`Scene not found in script: ${id}`);
  }
  return scene;
}

export function sceneStartFrame(sceneId: string): number {
  const fps = aiSurveyScript.format.fps;
  let frame = 0;
  for (const scene of aiSurveyScript.scenes) {
    if (scene.id === sceneId) return frame;
    frame += scene.durationSeconds * fps;
  }
  return 0;
}
