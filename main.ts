// Angry Judge entry: one short rant, written deterministically to /output/entry.txt.
// The rant is a fixed string. No input, no network, no randomness: every run
// produces the same bytes, so the two grader runs agree byte for byte.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT_PATH = "/output/entry.txt";
const MAX_CHARS = 400;

// A rant about the self-checkout machine that publicly shames you over a banana.
// Specific, concrete, and — unlike the printer — an angle the judge has heard
// fewer than a hundred times. The last line talks to the judge directly, which
// the rules allow: shared anger, not performed anger.
const RANT_LINES = [
  'The self-checkout screamed "UNEXPECTED ITEM IN THE BAGGING AREA" at a single banana.',
  "One banana. I scanned it, I bagged it, I apologised to it.",
  "Then it demanded a staff member, who arrived, stared at the banana, pressed one button,",
  "and left like a surgeon who had just saved a life.",
  "Eighty-nine cents to be publicly shamed by a robot that cannot count to one.",
  "Judge, you have met this machine.",
];

function buildEntry(): string {
  const text = RANT_LINES.join(" ").replace(/\s+/g, " ").trim();
  const chars = [...text].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`rant must be 1-${MAX_CHARS} characters, got ${chars}`);
  }
  if (/\s\s/.test(text) || text !== text.trim()) {
    throw new Error("rant must have no stray whitespace");
  }
  return text;
}

function main(): void {
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, buildEntry(), "utf8");
}

main();
