// Post-process a static export for GitHub Pages and copy it to ../hvac-demo.
// - Pages serves extensionless files as octet-stream, so give the generated
//   Open Graph image a .png name and point the meta tags at it.
import { cpSync, existsSync, readdirSync, readFileSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const out = "out";
const target = join("..", "hvac-demo");

const og = join(out, "opengraph-image");
if (existsSync(og)) renameSync(og, `${og}.png`);
// Only touch the exact "opengraph-image?<hash>" token — the same URL also sits
// inside inline JSON scripts, so a looser pattern would corrupt escaped quotes.
for (const f of readdirSync(out).filter((n) => n === "index.html" || n.endsWith(".txt"))) {
  const p = join(out, f);
  writeFileSync(p, readFileSync(p, "utf8").replace(/opengraph-image\?[0-9a-f]+/g, "opengraph-image.png"));
}

rmSync(target, { recursive: true, force: true });
cpSync(out, target, { recursive: true });
console.log(`Static site copied to ${target}`);
