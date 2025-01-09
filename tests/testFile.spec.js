// import { test,waitForNavigation,expect } from '@playwright/test';

// test.skip ('product sum function example', async ({ page }) => {
//   // Navigate to the specified URL
//   await page.goto('http://localhost:3000/');

//   // Click the link and wait for navigation to complete
//   await page.click("a[href='/add']");
//   await page.waitForURL('http://localhost:3000/add');
//   // Assert that the new page URL is correct
//   expect(page.url()).toBe('http://localhost:3000/add');
// });


// // ici un exmeple de passation d'affichage / 

// // // ici  veriier q'il existe 20 

// test.skip('verify number of cards on homepage', async ({ page }) => {
//     // Navigate to the homepage
//     await page.goto('http://localhost:3000/');
  
//     // Select all the cards using a common selector (e.g., class or data attribute)
//     const cards = page.locator('.movie'); // Replace '.card' with the actual selector for your cards
  
//     // Assert that there are 20 cards
//     await expect(cards).toHaveCount(20);
//   });