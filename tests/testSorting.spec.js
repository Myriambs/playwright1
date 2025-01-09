
// /////////////////////////////***********************ici el part is that we using the default assendent and s=dese,=ndet element 

// // // const {test,expect} = require('@playwright/test')

// // // test('End-to-End: Add items and remove smallest from basket', async ({ page }) => {
// // //     // Step 1: Visit the product page
// // //     await page.goto('http://localhost:2221/');
// // //     console.log("Navigated to the product page.");
  
// // //     // Step 2: Verify the page title
// // //     const title =  await page.title();

// // //     await expect(title).toContain('Art Shopping Store');
// // //     await console.log("Verified page title:", title);

// // //     // await page.getByRole('combobox').selectOption('price-asc');
// // //     // console.log('prix dec')

// // //     const productListd = await page.locator('[datatype="product-price"]')
// // //     console.log('(before)ici les locator de nos div cartes content les produits',productListd)
   
// // //     const elementArrayd = await productListd.allInnerTexts();
// // //        console.warn("'3before)Prices as strings:", elementArrayd);
// // // //ici la partie du click 

// // //     const pricedesc = await  page.getByRole('combobox').selectOption('price-desc')
// // //     console.log('prix assen (1)',pricedesc)
// // // // ici check after el click

// // //  const productList = await page.locator('[datatype="product-price"]')
// // //  console.log('(2)ici les locator de nos div cartes content les produits',productList)

// // //     const elementArray = await productList.allInnerTexts();
// // //     console.warn("'3)Prices as strings:", elementArray);
   
    
// // // console.log(' (4) ici la listes des elment prices ',elementArray)

// // // expect(elementArrayd).not.toEqual(elementArray)
// // // console.log('yes we are not ')


// // // //ici le calcul nombre de produits 
// // // const produit = await page.locator('[data-qa="product-card"]').count()
// // //     console.log('produit=>',produit)
// // //     // // Optional: Pause for debugging
// // //     await page.pause();
// // //   });
  


// // //   ///////////////////////////////this is an exemple of fucking amazing code 

// const { test, expect } = require('@playwright/test');

// // Configuration constants
// const BASE_URL = 'http://localhost:2221/';
// const EXPECTED_TITLE = 'Art Shopping Store';

// // test.describe('End-to-End: Price Sorting Test', () => {
// //   test('Should verify prices are sorted correctly when selecting descending order', async ({ page }) => {
// //     try {
// //       // Step 1: Navigate to the product page
// //       await page.goto(BASE_URL, { waitUntil: 'networkidle' });
// //       console.log("Navigated to the product page:", BASE_URL);

// //       // Step 2: Verify the page title
// //       const title = await page.title();
// //       expect(title).toContain(EXPECTED_TITLE);
// //       console.log("Verified page title:", title);

// //       // Step 3: Fetch prices before interaction
// //       const pricesBeforeClick = await fetchPrices(page);
// //       console.warn("Prices before sorting:", pricesBeforeClick);

// //       // Step 4: Select descending order from the dropdown
// //       await selectPriceSorting(page, 'price-desc');
// //       console.log("Selected 'price-desc' option.");

// //  // Step 4.1: Select descending order from the dropdown
// //  await selectPriceSorting(page, 'price-asc');
// //  console.log("Selected 'price-asc' option.");

// //   // Step 4.2: Select descending order from the dropdown
// //   await selectPriceSorting(page, 'default');
// //   console.log("Selected 'default' option.");

      
// //       // Step 5: Fetch prices after interaction
// //       const pricesAfterClick = await fetchPrices(page);
// //       console.warn("Prices after sorting:", pricesAfterClick);

// //       // Step 6: Assert that prices have changed
// //       expect(pricesBeforeClick).not.toEqual(pricesAfterClick);
// //       console.log("Verified that prices have changed after sorting.");

// //       // Step 7: Assert that prices are sorted in descending order
// //       assertDescendingOrder(pricesAfterClick);

// //       // Step 8: Log the number of products
// //       const productCount = await page.locator('[data-qa="product-card"]').count();
// //       console.log('Total products on the page:', productCount);
// //     } catch (error) {
// //       console.error("Test failed due to an error:", error.message);
// //       throw error; // Rethrow error for reporting
// //     }
// //   });
// // });

// // // Utility function: Fetch product prices as numbers
// // async function fetchPrices(page) {
// //   const priceTexts = await page.locator('[datatype="product-price"]').allInnerTexts();
// //   const prices = priceTexts.map((text) => parseFloat(text.replace(/[^0-9.]/g, '')));
// //   if (prices.length === 0) {
// //     throw new Error("No product prices found on the page.");
// //   }
// //   return prices;
// // }

// // // Utility function: Select price sorting from dropdown
// // async function selectPriceSorting(page, optionValue) {
// //   const dropdown = page.getByRole('combobox');
// //   await dropdown.selectOption(optionValue);
// //   const selectedOption = await dropdown.inputValue();
// //   if (selectedOption !== optionValue) {
// //     throw new Error(`Dropdown selection failed. Expected: ${optionValue}, Found: ${selectedOption}`);
// //   }
// // }

// // // Utility function: Assert that prices are sorted in descending order
// // function assertDescendingOrder(prices) {
// //   const sortedPrices = [...prices].sort((a, b) => b - a);
// //   expect(prices).toEqual(sortedPrices);
// //   console.log("Verified that prices are sorted in descending order.");
// // }


