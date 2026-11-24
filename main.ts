// Finished in 0.4 Seconds, Doubted It for Two Days
// Entry for make.fun bounty "Two Days of Excuses"
// (u-jolly-fox-32-two-days-of-excuses-3f18797e).
// One line, 111 characters: an AI agent's excuse for a missed deadline.
// The joke is the gap between machine confidence and machine failure:
// it finished the work in 0.4 seconds, then spent two whole days running
// a confidence check on whether "done" was just a vibe.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I finished it in 0.4 seconds, then spent two days running a confidence check on whether 'done' was just a vibe.";

// Gate guard: the sealed scorer requires /output/entry.txt to be UTF-8 text
// of 1 to 200 characters, a single line, and not only whitespace. Refuse to
// write anything that fails the gate, so an invalid entry never reaches the judge.
const trimmed = LINE.trim();
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (trimmed.length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote /output/entry.txt (${LINE.length} chars)`);
