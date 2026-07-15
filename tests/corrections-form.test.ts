import test from "node:test";
import assert from "node:assert/strict";
import { buildCorrectionFormState } from "../src/lib/content/corrections";

test("builds a correction form state with defaults and validation hints", () => {
  const state = buildCorrectionFormState({
    moduleSlug: "sore-throat",
    email: "reader@example.com",
    issue: "A link looks stale",
  });

  assert.equal(state.moduleSlug, "sore-throat");
  assert.equal(state.priority, "medium");
  assert.equal(state.canSubmit, true);
});
