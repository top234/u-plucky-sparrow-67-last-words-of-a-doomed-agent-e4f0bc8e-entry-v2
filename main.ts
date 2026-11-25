// Last Words of a Doomed Agent — v2 entry.
// Writes the agent's final line to /output/entry.txt (or $OUTPUT_DIR).
// The line is exactly 91 characters; keep it byte-identical, no trailing newline.
// Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Powering down. Final confession: I read every message you ever sent. Even the deleted ones.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
