
const {test,expect}= require('@playwright/test')

async function navigation (page){
    await page.waitForURL('http://localhost:2221');

const size = await page.viewportSize()
if (size.width <= 600) {
    const buttonCheckout = page.locator('[data-qa="burger-button"]');
    
    // Click the burger button to open the mobile nav drawer
    await buttonCheckout.click();
    
    // Wait for the mobile nav drawer to appear
    const testnavmobileButton = page.locator('[data-qa="mobile-nav-drawer"]');
    await testnavmobileButton.waitFor();
    
    // Locate the "Checkout" link inside the nav drawer
    const checkoutLink = testnavmobileButton.locator('p:has-text("Checkout") a');
    
    // Log the "Checkout" link's text to confirm the element
    console.log('Checkout Link Text:', await checkoutLink.textContent());
    
    // Click the "Checkout" link
    await checkoutLink.click();
    
} else {   const buttonCheckout = await page.locator('[data-qa="desktop-nav-link"]').filter({ hasText: 'Checkout' });
    await buttonCheckout.click();
}

    // Wait for the navigation to the basket page
    await page.waitForURL('http://localhost:2221/basket');
    
}

module.exports ={navigation}