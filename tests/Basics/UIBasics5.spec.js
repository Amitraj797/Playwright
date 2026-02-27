const {test, expect}=require ('@playwright/test');

test("Hidden Elements & Mouse hover", async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    await page.locator('#alertbtn').click();
    await page.pause();
    page.on('dialog', dialog => dialog.dismiss());
    await page.locator('#alertbtn').click();
   
});

test.only("frame handling", async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const framepage = page.frameLocator("#courses-iframe");
    await framepage.locator("[href='learning-path']:visible").click();
    const text = await framepage.locator("div h1").textContent();
    console.log(text);
    await page.pause();
});

