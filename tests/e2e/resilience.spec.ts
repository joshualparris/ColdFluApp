import { expect, test } from "@playwright/test";

test("keyboard users can reveal and use the skip link", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Skip to content" });
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeVisible();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main")).toBeFocused();
});

test("narrow reflow does not create horizontal page overflow", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto("/about/transparency");
  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    content: document.documentElement.scrollWidth,
  }));
  expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport + 1);
});

test("reduced motion removes meaningful transitions", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const transitionDuration = await page.locator("html").evaluate((element) => getComputedStyle(element).transitionDuration);
  expect(["0s", "0.00001s"]).toContain(transitionDuration);
});

test("forced colours preserve semantic status text", async ({ page }) => {
  await page.emulateMedia({ forcedColors: "active" });
  await page.goto("/");
  await expect(page.getByText("No medical modules are published")).toBeVisible();
});

test("core public status works without JavaScript", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, baseURL });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.getByText("No medical modules are published")).toBeVisible();
  await expect(page.getByRole("link", { name: "Methodology", exact: true })).toBeVisible();
  await context.close();
});

test("text remains available when images fail", async ({ page }) => {
  await page.route("**/*", async (route) => {
    if (route.request().resourceType() === "image") await route.abort("failed");
    else await route.continue();
  });
  await page.goto("/modules");
  await expect(page.getByRole("heading", { name: "Browse public modules" })).toBeVisible();
  await expect(page.getByText("No modules matched that query", { exact: false })).toBeVisible();
});

test("print presentation removes navigation while retaining status", async ({ page }) => {
  await page.goto("/");
  await page.emulateMedia({ media: "print" });
  await expect(page.locator(".site-header")).toBeHidden();
  await expect(page.getByText("No medical modules are published")).toBeVisible();
});
