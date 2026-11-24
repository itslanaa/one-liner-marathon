import { mkdirSync, writeFileSync } from "node:fs";
const line = "I asked my AI agent for a one-line joke, and it gave me a 280-character essay, a bibliography, and a follow-up question about whether the essay was funny.";
const limit = 280;
if (line.length < 1 || line.length > limit) throw new Error("entry must be 1-280 characters");
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, line, "utf8");
