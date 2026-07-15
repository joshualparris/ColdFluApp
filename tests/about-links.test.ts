import test from "node:test";
import assert from "node:assert/strict";
import { aboutPages } from "../src/lib/content/about-links";

test("includes accessibility, privacy, and corrections support pages", () => {
  const hrefs = aboutPages.map((page) => page.href);

  assert.ok(hrefs.includes("/about/accessibility"));
  assert.ok(hrefs.includes("/about/privacy"));
  assert.ok(hrefs.includes("/about/corrections"));
});
