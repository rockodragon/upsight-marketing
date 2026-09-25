import fs from "node:fs";
import path from "node:path";
import { CaptionDocumentSchema } from "../schemas";
import type { CaptionDocument } from "../types";

export function writeCaptionJsonFile(outputPath: string, document: CaptionDocument): void {
  const validated = CaptionDocumentSchema.parse(document);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify(validated, null, 2)}\n`, "utf-8");
}
