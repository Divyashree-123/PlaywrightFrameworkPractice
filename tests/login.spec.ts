import {test,  expect } from "@playwright/test"

test("standard user can log in and see the products page",async({page})=>{
    await page.goto("/");
    await page.getByRole('textbox',{name:'Username'}).fill("standard_user");
    await page.getByRole('textbox',{name:'Password'}).fill("secret_sauce");
    await page.getByRole('button',{name:'Login'}).click();
    await expect(page.getByText("Products")).toBeVisible();
    await expect(page).toHaveURL("/inventory.html");
})