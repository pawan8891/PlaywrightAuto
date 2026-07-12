import {test,expect} from '@playwright/test';

test('Verify API mocking',async({page})=>{
await page.route("**/api/v1/fruits",async (route) => {
await route.fulfill({
    json:[
        {
            name: "Pawan",
            id:1
        },
                {
            name: "Mango",
            id:2
        },
                {
            name: "Watermelon",
            id:3
        },

    ]
});
});
await page.goto("https://demo.playwright.dev/api-mocking");
await expect(page.locator("li")).toHaveCount(3);
await expect(page.getByText("Pawan")).toBeVisible();
await expect(page.getByText("Mango")).toBeVisible();
await expect(page.getByText("Watermelon")).toBeVisible();

});

test('Verify Modified API mocking',async({page})=>{
await page.route("**/api/v1/fruits",async (route) => {
const response=await route.fetch();
const json=await response.json();
const apple=json.find(fruit => fruit.name==="Apple");
if(apple)
{
    apple.name="Pawan";
}
await route.fulfill(
    {
        response,
        json
    }
)
console.log(json);
});
await page.goto("https://demo.playwright.dev/api-mocking");
await expect(page.getByText("Pawan")).toBeVisible();
await expect(page.getByText("Apple")).not.toBeVisible();

});