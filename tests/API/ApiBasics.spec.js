const{test,expect, request}=require('@playwright/test');

test.beforeAll(async()=>
{
    const apiContext=await request.newContext();
    const response=await apiContext.get('https://petstore.swagger.io/v2/pet/findByStatus?status=available');
    const responseBody=await response.json();
    console.log(responseBody);
})


test('Rahulshettyacademy', async ({browser})=>
{
    const context= await browser.newContext()
    const page= await context.newPage()
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    console.log(await page.title()) // title() to get the tittle of the page.
    await expect(page).toHaveTitle("Test Login | Practice Test Automation"); // asssertion to check the title is as expected or not.
    await page.locator("input#username").fill("student"); // locator() to locate the element from DOM.
    await page.locator("[type='password']").fill("Password123");
    await page.locator(".btn").click();
})
