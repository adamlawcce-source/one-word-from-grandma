import { mkdirSync, writeFileSync } from "node:fs";

// Entry: "witchcraft" — the single word grandma would text about AI.
// She has watched a machine talk back and know things no machine should
// know, and her warm, baffled verdict is that it must be witchcraft.
// Funny in one word with no caption needed, tied to AI as mysterious
// machine-magic, and fresher than the obvious "robot" — a real
// grandmother's texting voice, not a tech word.
const TEXT = "witchcraft";

// Gate: exactly one word — letters only, no spaces, no punctuation
// tricks — UTF-8, 1-30 characters, not only whitespace.
if (!/^[A-Za-z]+$/.test(TEXT)) {
  throw new Error("entry must be exactly one word (letters only, no spaces or punctuation)");
}
if (TEXT.length < 1 || TEXT.length > 30) {
  throw new Error("entry must be 1-30 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
