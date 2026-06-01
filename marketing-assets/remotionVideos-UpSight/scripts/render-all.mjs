#!/usr/bin/env node

/**
 * Render all compositions to /out.
 * Usage: node scripts/render-all.mjs
 */
import { execSync } from "child_process";

const compositions = [
  { id: "SurveyKillerAd", output: "out/SurveyKillerAd.mp4" },
  { id: "StopDebatingAd", output: "out/StopDebatingAd.mp4" },
  { id: "KnowYourCommunityAd", output: "out/KnowYourCommunityAd.mp4" },
  { id: "SmartSurveysAd", output: "out/SmartSurveysAd.mp4" },
  // Add new ads here:
  // { id: "UseCaseInterviews", output: "out/use-case-interviews.mp4" },
];

for (const comp of compositions) {
  console.log(`\n🎬 Rendering ${comp.id}...`);
  try {
    execSync(
      `npx remotion render src/index.ts ${comp.id} --output=${comp.output}`,
      { stdio: "inherit" }
    );
    console.log(`✅ ${comp.output}`);
  } catch (err) {
    console.error(`❌ Failed: ${comp.id}`);
  }
}

console.log("\n🎉 All renders complete!");
