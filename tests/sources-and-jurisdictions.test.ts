import test from "node:test";
import assert from "node:assert/strict";
import { groupSourcesByJurisdiction, getJurisdictionSummary } from "../src/lib/content/source-index";

test("groups source records by jurisdiction and builds a summary", () => {
  const sources = [
    { id: "s1", jurisdiction: "AU", title: "A" },
    { id: "s2", jurisdiction: "AU", title: "B" },
    { id: "s3", jurisdiction: "GB", title: "C" },
  ];

  const grouped = groupSourcesByJurisdiction(sources);
  const summary = getJurisdictionSummary(grouped);

  assert.deepEqual(grouped["AU"].map((source) => source.id), ["s1", "s2"]);
  assert.equal(summary["GB"], 1);
});
