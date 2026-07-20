import fs from "node:fs";
import path from "node:path";

const publicDir = path.resolve("public");

if (fs.existsSync(publicDir) && !fs.statSync(publicDir).isDirectory()) {
  fs.unlinkSync(publicDir);
}

fs.mkdirSync(publicDir, { recursive: true });

for (const directory of ["video", "audio", "icons", "logos", "ui"]) {
  const target = path.resolve("../04-assets", directory);
  const link = path.join(publicDir, directory);

  if (process.platform === "win32") {
    if (fs.existsSync(link) && fs.lstatSync(link).isSymbolicLink()) {
      fs.unlinkSync(link);
    }

    fs.cpSync(target, link, { recursive: true, force: true });
  } else if (!fs.existsSync(link)) {
    fs.symlinkSync(target, link, "dir");
  }
}
