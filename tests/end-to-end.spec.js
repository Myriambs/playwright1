// const { test, expect } = require('@playwright/test');
// const { ProductPage } = require('../partie 2/ProductPage');
// const { visitProductPage, getPageTitle,addProductToBasket } = require('../partie 2/ProductPage')
// const {navigation}= require('../partie 2/Navigation'); 
// const { Basketelement } = require('../partie 2/BasketElement');
// //test.only is used to run only a specific test or set of tests while skipping all others.
// test('end to end journey', async ({ page }) => {
//   await visitProductPage(page);

//   // Pause pour observer (facultatif)


//   // Vérifier le titre de la page
// const title = await getPageTitle(page);
// expect(title).toContain('Art Shopping Store');
// console.log("title",title)
// //  await addProductToBasket(page,0)
// //  await addProductToBasket(page,1)
//   // await addProductToBasket(page,2)
//  await navigation(page)
// await Basketelement(page)
//     await page.pause(); // Pause pour observer le navigateur pendant le test
// });

// la version modifier==================>
// const { visitProductPage, getPageTitle, addProductToBasket } = require('../partie 2/ProductPage');
// const { navigation } = require('../partie 2/Navigation');
// const { Basketelement } = require('../partie 2/BasketElement');
// const {SortingElementBy} = require('../partie 2/SortingElement')
// test.skip('End-to-End: Add items and remove smallest from basket', async ({ page }) => {
//   // Step 1: Visit the product page
//   await visitProductPage(page);
//   console.log("Navigated to the product page.");

//   // Step 2: Verify the page title
//   const title = await getPageTitle(page);
//   await expect(title).toContain('Art Shopping Store');
//   await console.log("Verified page title:", title);

//   // Step 3: Add products to the basket
//   const productIndices = [0, 1, 2]; // You can modify this list as needed
//   for (const index of productIndices) {
//     await addProductToBasket(page, index);
//     await console.log(`Added product at index ${index} to the basket.`);
//   }

//   // Step 4: Navigate to the basket page
//   await navigation(page);
//   const url = page.url();
//   await  expect(url).toContain('/basket'); // Adjust the expected route
//  await  console.log("Navigated to the basket page:", url);

//   // Step 5: Remove the smallest priced item from the basket
//   await Basketelement(page);
//  await  console.log("Removed the smallest priced item from the basket.");
// await SortingElementBy(page)
//   // // Optional: Pause for debugging
//   await page.pause();
// });
