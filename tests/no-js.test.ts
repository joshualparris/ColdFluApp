import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("layout exposes a noscript fallback for users without JavaScript", async () => {
  const source = await readFile("src/app/layout.tsx", "utf8");
  assert.match(source, /<noscript>/);
  assert.match(source, /JavaScript/i);
});
