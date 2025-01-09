const { test, expect } = require('@playwright/test');

async function SortingElementBy(page) {
    console.log('We sorted');

    // Select the element to click on
    const sortedSelector = await page.locator('[data-qa="sort-dropdown"]');
    console.log("sortedSelector =>", sortedSelector);

    // Get the dropdown options as text
    const selectHtml = await sortedSelector.allInnerTexts();
    console.log("selectHtml =>", selectHtml);

    // Split the options into individual items
    const sliced = await selectHtml[0].split('\n');
    console.log('sliced =>', sliced);

    // Click the dropdown
    await sortedSelector.click();

    // Find the product cards
    const divElement = await page.locator('[data-qa="product-card"]');

    // Before sorting, capture the initial order of product texts
    const td = await divElement.allInnerTexts();
    console.log('Before sorting:', td);

    // Click on the "Popularity" option to sort
    await page.locator(`[data-qa="sort-dropdown"] >> text=${sliced[0]}`).click(); // Click using the text of the option

    // After sorting, capture the order of product texts
    const tdd = await divElement.allInnerTexts();
    console.log('After sorting:', tdd);

    // Expect the two arrays to have a different order
    expect(tdd).not.toEqual(td); // Assertion: The order of products should change
    await console.log('they are not the same ')
}

module.exports = { SortingElementBy };
