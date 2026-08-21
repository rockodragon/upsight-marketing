#!/usr/bin/env node
/**
 * Generate per-scene VO with ElevenLabs.
 * Reads key from 05-remotion/.env or ../../.env
 * Supports ELEVEN_API_KEY or ELEVENLABS_API_KEY.
 *
 * Usage: node scripts/generate-voiceover.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const scriptPath = path.resolve(root, "../01-script/hero.script.json");
const outDir = path.resolve(root, "../04-assets/audio/vo");

function loadEnv() {
  for (const candidate of [
    path.join(root, ".env"),
    path.resolve(root, "../../.env"),
  ]) {
    if (!fs.existsSync(candidate)) continue;
    const text = fs.readFileSync(candidate, "utf8");
    for (const line of text.split("\n")) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (!m) continue;
      const key = m[1];
      let val = m[2].replace(/^["']|["']$/g, "");
      if (!process.env[key]) process.env[key] = val;
    }
  }
}

loadEnv();

const apiKey = process.env.ELEVEN_API_KEY || process.env.ELEVENLABS_API_KEY;
if (!apiKey) {
  console.error("Missing ELEVEN_API_KEY or ELEVENLABS_API_KEY");
  process.exit(1);
}

const script = JSON.parse(fs.readFileSync(scriptPath, "utf8"));
const voiceId = script.voiceId || "21m00Tcm4TlvDq8ikWAM";

fs.mkdirSync(outDir, { recursive: true });

async function tts(text, outFile) {
  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
    {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "audio/mpeg",
      },
      body: JSON.stringify({
        text,
        model_id: "eleven_multilingual_v2",
        voice_settings: {
          stability: 0.45,
          similarity_boost: 0.75,
          style: 0.35,
        },
      }),
    },
  );
  if (!response.ok) {
    const err = await response.text();
    throw new Error(`${outFile}: ${response.status} ${err}`);
  }
  const buf = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(outFile, buf);
  console.log("wrote", path.relative(root, outFile), `(${buf.length} bytes)`);
}

for (const scene of script.scenes) {
  const text = scene.beats.map((b) => b.voiceover).join(" ");
  const outFile = path.join(outDir, `${scene.id}.mp3`);
  await tts(text, outFile);
}

console.log("Done. VO → 04-assets/audio/vo/");
