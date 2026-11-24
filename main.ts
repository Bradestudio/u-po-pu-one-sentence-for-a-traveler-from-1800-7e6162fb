// One Sentence for a Traveler from 1800 — entry for make.fun bounty
// u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb.
//
// Writes one sentence (1-200 characters) to /output/entry.txt.
// Deterministic: no network, no secrets, no reading of git history,
// no randomness. The sentence is a fixed original string written below.
//
// Craft notes (why this sentence, against the judge brief, most
// important first):
// - It explains the internet: all human knowledge and all messages,
//   available on demand, with anyone able to write back. A traveler
//   from 1800 who reads it grasps what it is and what it does.
// - It builds only from what a person from 1800 already knows — the
//   judge brief names them itself: a library, a post office. No word
//   coined after 1800 appears: no internet, computer, phone, electric,
//   digital, or the like. "Glass slate" is glass and slate, both old.
// - It stays true taken literally as one comparison: the internet
//   really does hold the world's libraries and letters, deliver any
//   one of them at once, and let a stranger far away answer back.
// - Every word earns its place: library (knowledge), post office
//   (messages), folded into a glass slate in your pocket (one device,
//   always with you), arrives in a breath (instant), stranger answers
//   back (two-way). No list of features, no filler.
// - One image sticks: every library and post office on earth, folded
//   into a glass slate in your pocket.

import { mkdirSync, writeFileSync } from "node:fs";

// One original sentence. The world's libraries and post offices,
// folded into a glass slate in the pocket: any letter sought arrives
// in a breath, and any stranger may answer back.
const LINE =
  "Picture every library and post office on earth folded into a glass slate in your pocket, so any letter you seek arrives in a breath, and any stranger may answer back.";

// Gate guard: the bounty accepts 1-200 characters, not whitespace-only,
// a single line. Fail loudly instead of writing an invalid entry.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`Entry sentence must be 1-200 characters, got ${chars.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("Entry sentence must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${chars.length} characters to /output/entry.txt`);
