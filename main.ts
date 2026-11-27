// Writes the finished one-word entry to /output/entry.txt for the sealed scorer.
//
// The entry lives in line.txt next to this script. This driver reads it,
// checks it against the gate (UTF-8 text, 1 to 20 characters, not only
// whitespace, a single word), and copies it byte-for-byte into entry.txt.
// Nothing is generated or changed here: the word is the entry, as written.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The directory this module lives in, from its own URL.
const here = new URL(".", import.meta.url).pathname;

let content = readFileSync(join(here, "line.txt"), "utf8");

// Drop one trailing line break if the file carries one.
content = content.replace(/\n$/, "").replace(/\r$/, "");

// The gate: present, at most 20 characters, one word, real text.
if (content.length === 0) throw new Error("nothing to submit: line.txt is empty");
if (content.length > 20) throw new Error(`too long: ${content.length} characters, ceiling is 20`);
if (content.trim() === "") throw new Error("nothing but whitespace: the entry has no real text");
if (/[\r\n]/.test(content)) throw new Error("one line only: the entry contains a line break");
if (/\s/.test(content)) throw new Error("one word only: the entry contains whitespace");

const target = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(target, { recursive: true });
writeFileSync(join(target, "entry.txt"), content, "utf8");
