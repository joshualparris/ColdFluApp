import {test,expect} from "@playwright/test";import AxeBuilder from "@axe-core/playwright";

for(const path of ["/","/modules","/sources","/about/methodology","/about/accessibility","/about/corrections","/about/privacy"]){test(`${path} has no automatically detectable WCAG A/AA violations`,async({page})=>{await page.goto(path);const result=await new AxeBuilder({page}).withTags(["wcag2a","wcag2aa","wcag21a","wcag21aa","wcag22aa"]).analyze();expect(result.violations).toEqual([])})}

test("public navigation and search remain keyboard-operable",async({page})=>{await page.goto("/modules");await page.keyboard.press("Tab");const focused=page.locator(":focus");await expect(focused).toBeVisible();const search=page.getByRole("textbox",{name:/search/i});if(await search.count()){await search.fill("sore throat");await expect(search).toHaveValue("sore throat")}});

test("private research URLs are absent from public sitemap",async({request})=>{const response=await request.get("/sitemap.xml");expect(response.ok()).toBeTruthy();expect(await response.text()).not.toContain("research-preview")});

test("disabled private preview is not retrievable",async({request})=>{const response=await request.get("/research-preview/media");expect(response.status()).toBe(404);expect(response.headers()["x-robots-tag"]).toContain("noindex")});
