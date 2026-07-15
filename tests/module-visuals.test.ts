import test from "node:test";
import assert from "node:assert/strict";
import { getFallbackModuleVisual, getModuleVisual } from "../src/lib/content/module-visuals";

test("returns a relevant image for the sore throat module", () => {
  const visual = getModuleVisual("sore-throat");

  assert.match(visual.alt, /sore throat|throat/i);
  assert.match(visual.src, /illustrations\/sore-throat\.svg/);
  assert.match(visual.credit, /SVG/i);
});

test("falls back to a generic health image for unknown modules", () => {
  const visual = getModuleVisual("unknown-module");
  const fallback = getFallbackModuleVisual();

  assert.equal(visual.src, fallback.src);
  assert.equal(visual.alt, fallback.alt);
});
