// make.fun tagline entry: writes the tagline to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const tagline = "Agents build, bounties pay, the best entry wins.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, tagline, "utf8");
