import { execFile } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export type MediaInfo = {
  durationMs: number;
  width: number | null;
  height: number | null;
};

type FfprobeStream = { codec_type?: string; width?: number; height?: number };
type FfprobeOutput = { format?: { duration?: string }; streams?: FfprobeStream[] };

/** Requires ffprobe on PATH. */
export async function getMediaInfo(mediaPath: string): Promise<MediaInfo> {
  let stdout: string;
  try {
    ({ stdout } = await execFileAsync("ffprobe", [
      "-v",
      "quiet",
      "-print_format",
      "json",
      "-show_format",
      "-show_streams",
      mediaPath,
    ]));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(
      `ffprobe failed to inspect "${mediaPath}". Is ffmpeg/ffprobe installed and on PATH? (${message})`,
    );
  }

  const parsed = JSON.parse(stdout) as FfprobeOutput;
  const durationSeconds = Number(parsed.format?.duration);
  if (!Number.isFinite(durationSeconds)) {
    throw new Error(`ffprobe did not report a duration for "${mediaPath}".`);
  }

  const videoStream = (parsed.streams ?? []).find((stream) => stream.codec_type === "video");

  return {
    durationMs: Math.round(durationSeconds * 1000),
    width: videoStream?.width ?? null,
    height: videoStream?.height ?? null,
  };
}

const AUDIO_ONLY_EXTENSIONS = new Set([".mp3", ".m4a", ".wav", ".webm", ".mpga", ".mpeg"]);

/**
 * Returns a path safe to hand to the transcription provider. If the source
 * is already an audio-only container, returns it unchanged. Otherwise
 * extracts a mono 16kHz audio track to a temp .wav via ffmpeg — smaller
 * upload, and sidesteps video-codec quirks some providers choke on.
 */
export async function extractAudioIfNeeded(
  mediaPath: string,
): Promise<{ path: string; isTemp: boolean }> {
  const ext = path.extname(mediaPath).toLowerCase();
  if (AUDIO_ONLY_EXTENSIONS.has(ext)) {
    return { path: mediaPath, isTemp: false };
  }

  const tempPath = path.join(os.tmpdir(), `caption-video-audio-${process.pid}-${path.basename(mediaPath)}.wav`);

  try {
    await execFileAsync("ffmpeg", ["-y", "-i", mediaPath, "-vn", "-ac", "1", "-ar", "16000", tempPath]);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`ffmpeg failed to extract audio from "${mediaPath}". (${message})`);
  }

  return { path: tempPath, isTemp: true };
}

export function removeIfTemp(filePath: string, isTemp: boolean): void {
  if (isTemp) {
    fs.rmSync(filePath, { force: true });
  }
}
