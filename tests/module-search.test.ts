import test from "node:test";
import assert from "node:assert/strict";
import { filterModulesByQuery } from "../src/lib/content/module-search";

test("filters modules by title, category, and description terms", () => {
  const modules = [
    {
      slug: "sore-throat",
      title: "Sore throat",
      category: "Symptom relief",
      description: "Supportive care for a sore throat",
    },
    {
      slug: "fever",
      title: "Fever",
      category: "Temperature management",
      description: "Comfort and safety for fever",
    },
  ];

  assert.deepEqual(filterModulesByQuery(modules, "sore"), [modules[0]]);
  assert.deepEqual(filterModulesByQuery(modules, "temperature"), [modules[1]]);
  assert.deepEqual(filterModulesByQuery(modules, "comfort"), [modules[1]]);
  assert.deepEqual(filterModulesByQuery(modules, "missing"), []);
});
