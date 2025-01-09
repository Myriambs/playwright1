
const { test, expect } = require('@playwright/test');

test.skip('has title', async ({ page }) => {
    await page.goto('http://localhost:2221/');
  
    const addToBasketButton = page.locator("(//button[@type='submit'])[1]");
  const basketCount = page.locator('[data-qa="header-basket-count"]')
  //getbyrole is a methode , 
  const checkoutButton = page.getByRole('link', { name: 'Checkout' })
    // Ensure button is present before interacting
  await addToBasketButton.waitFor();
  await expect(basketCount).toHaveText('0')
    // Perform the click first
    await addToBasketButton.click();
    await expect(basketCount).toHaveText('1')
    // Now, check the button's text after the click
    await expect(addToBasketButton).toHaveText("Remove from Basket");
  await checkoutButton.waitFor()
  await checkoutButton.click()
  await page.waitForURL('http://localhost:2221/basket')
     await page.pause();
  });

  //l'ets starts end to end testing 