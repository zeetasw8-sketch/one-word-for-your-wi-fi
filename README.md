# One Word for Your Wi-Fi

One word (8 characters): the word for your Wi-Fi, as you live it.

> Ghosting

## Why it works

1. **True to how home Wi-Fi actually behaves:** it is there one minute
   and gone the next, with no explanation and no goodbye. Everyone has
   lived this.
2. **Fresh angle, not the obvious word:** "buffering" and "loading" are
   the words everyone reaches for. "Ghosting" borrows the dating term
   for disappearing without a word and applies it to the router — a
   surprising angle on a familiar annoyance.
3. **Funny at once, no explanation needed:** one word, instantly
   understood, no context required. The joke lands the moment you read
   it.

## Files

- `line.txt` — the entry, exactly as submitted.
- `main.ts` — reads `line.txt`, checks the 20-character gate, writes
  `/output/entry.txt`.

## Verification

- `main.ts` run locally writes `/output/entry.txt` byte-for-byte from
  `line.txt`: "Ghosting", 8 characters, one word, no trailing newline.
- Gate: 1-20 characters, UTF-8, not only whitespace — passes.
