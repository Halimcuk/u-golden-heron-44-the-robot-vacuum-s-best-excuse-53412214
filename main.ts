// The Robot Vacuum's Best Excuse — a robot vacuum explains why it missed a spot.
// The entry line is a single deterministic constant: the vacuum fought a sock
// under the couch and lost, so the spot stays dirty and the sock keeps the couch.
// The line is written exactly as-is, with no trailing newline, on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I fought the sock under the couch for twenty minutes. The sock won.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(ENTRY);
console.log(`Characters: ${ENTRY.length}`);
