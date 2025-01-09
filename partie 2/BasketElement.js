const {test,expect}= require('@playwright/test')

// async function Basketelement (page){
//     // await page.waitForURL('http://localhost:2221')
// const baskedCard = await page.locator('[data-qa="basket-card"]')
// console.log('baskedCard',baskedCard)
   
// const contentBasket =await page.locator('[data-qa="basket-item-price"]')
// await contentBasket.first().waitFor()
//     console.log('contentBasket',contentBasket)

// const elementArray = await contentBasket.allInnerTexts()
// console.warn('elementArray',elementArray)
// const numericPrices = elementArray.map(el => parseFloat(el.replace("$", "")));
// console.log('numericPrices',numericPrices)
// // Step 2: Find the smallest number and its index
// const smallestIndex = numericPrices.indexOf(Math.min(...numericPrices));

// console.log(smallestIndex);
// const removeButton = await page.locator('[data-qa="basket-card-remove-item"]')
// const toRemove = await removeButton.nth(smallestIndex)
// toRemove.click()

//     await page.pause()
// }

async function Basketelement(page) {
    try {
      // Locate basket cards and prices
      const baskedCard = await page.locator('[data-qa="basket-card"]');
      if (!(await baskedCard.count())) {
        throw new Error("No basket cards found.");
      }
      console.log("Basket card located.");
  
      const contentBasket = await page.locator('[data-qa="basket-item-price"]');
      if ((await contentBasket.count()) === 0) {
        throw new Error("No prices found in the basket.");
      }
      console.log("Prices located in basket.");
  
      // Extract prices and convert to numeric values
      const elementArray = await contentBasket.allInnerTexts();
      console.warn("Prices as strings:", elementArray);
      const numericPrices = elementArray.map((el) =>
        parseFloat(el.replace("$", ""))
      );
      console.log("Prices as numbers:", numericPrices);
  
      // Find smallest price and corresponding item
      const smallestIndex = numericPrices.indexOf(Math.min(...numericPrices));
      console.log("Index of smallest item:", smallestIndex);
  
      const removeButton = await page.locator('[data-qa="basket-card-remove-item"]');
      const toRemove = await removeButton.nth(smallestIndex);
  
      // Click the remove button for the smallest item
      await toRemove.click();
      console.log("Removed item at index:", smallestIndex);
  
      // Pause for observation
      await page.pause();
    } catch (error) {
      console.error("Error in Basketelement function:", error);
    }
  }

//   this is an other way  
// async function Basketelement(page) {
//     const basketCard = await page.locator('[data-qa="basket-card"]');
//     if ((await basketCard.count()) === 0) {
//         throw new Error("Basket is empty, no items to remove.");
//     }

//     const contentBasket = await page.locator('[data-qa="basket-item-price"]');
//     await contentBasket.first().waitFor();

//     const elementArray = await contentBasket.allInnerTexts();
//     console.log('Basket Prices:', elementArray);

//     const numericPrices = elementArray.map(el => parseFloat(el.replace("$", "")));
//     console.log('Numeric Prices:', numericPrices);

//     const smallestIndex = numericPrices.indexOf(Math.min(...numericPrices));
//     console.log('Smallest Price Index:', smallestIndex);

//     const removeButton = await page.locator('[data-qa="basket-card-remove-item"]');
//     const toRemove = removeButton.nth(smallestIndex);
//     await toRemove.click();

//     console.log('Removed item with the smallest price.');
//     await page.pause(); // Debug pause
// }

  
module.exports ={Basketelement}