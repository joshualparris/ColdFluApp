import test from "node:test";
import assert from "node:assert/strict";
import { createCorrectionReport } from "../src/lib/content/corrections";

test("creates a correction report with a default priority and timestamp", () => {
  const report = createCorrectionReport({
    moduleSlug: "sore-throat",
    email: "reader@example.com",
    issue: "A source link looks outdated",
  });

  assert.equal(report.moduleSlug, "sore-throat");
  assert.match(report.id, /^correction-/);
  assert.equal(report.priority, "medium");
  assert.ok(report.createdAt.length > 0);
});
