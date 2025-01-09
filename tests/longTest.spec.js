const { test, expect } = require('@playwright/test');
const { visitProductPage, getPageTitle, addProductToBasket } = require('../partie 2/ProductPage');
const { navigation } = require('../partie 2/Navigation');
const { Basketelement } = require('../partie 2/BasketElement');
test('Verify page title for login/register flow', async ({ page }) => {
    const URL_PAGE = "http://localhost:2221/";
    const Title_Page = "Art Shopping Store";

    // Step 1: Navigate to the product page
    await page.goto(URL_PAGE, { waitUntil: 'networkidle' });
    console.log("Navigated to the product page:", URL_PAGE);

    // Step 2: Verify the page title
    const title = await page.title();
    expect(title).toContain(Title_Page);
    console.log("Verified page title:", title);

// Step 3: Add products to the basket
  const productIndices = [0, 1, 2]; // You can modify this list as needed
  for (const index of productIndices) {
    await addProductToBasket(page, index);
    await console.log(`Added product at index ${index} to the basket.`);
  }

//   // Step 4: Navigate to the basket page
  await navigation(page);
  const url = page.url();
  await  expect(url).toContain('/basket'); // Adjust the expected route
 await  console.log("Navigated to the basket page:", url);




//3click on checkout and change url to /checkout navigation thing 
await page.getByRole('button', { name: 'Continue to Checkout' }).click();
await page.getByPlaceholder('E-Mail').click();
await page.getByPlaceholder('E-Mail').fill('Admin');
await page.getByPlaceholder('Password').click();
await page.getByPlaceholder('Password').fill('Admin123');
await page.getByRole('button', { name: 'Login' }).click();
await page.locator('[data-qa="error-message"]').textContent('You need to supply a username field')

await page.getByPlaceholder('E-Mail').click();
await page.getByPlaceholder('E-Mail').press('ArrowLeft');
await page.getByPlaceholder('E-Mail').press('ArrowLeft');
await page.getByPlaceholder('E-Mail').press('ArrowLeft');
await page.getByPlaceholder('E-Mail').press('ArrowLeft');
await page.getByPlaceholder('E-Mail').fill('admin');
await page.getByRole('button', { name: 'Login' }).click();
await page.waitForURL('http://localhost:2221/delivery-details')


console.log('u did it ur in the next page element')

await page.getByPlaceholder('First name').click();
await page.getByPlaceholder('First name').fill('admin');
await page.getByPlaceholder('Last name').click();
await page.getByPlaceholder('Last name').fill('nben salah ');
await page.getByPlaceholder('Street').click();
await page.getByPlaceholder('Street').fill('state');
await page.getByPlaceholder('Post code').click();
await page.getByPlaceholder('Post code').fill('1003');
await page.getByPlaceholder('City').click();
await page.getByPlaceholder('City').fill('tunis');
await page.getByRole('combobox').selectOption('Tunisia');
await page.getByRole('button', { name: 'Save address for next time' }).click();
await page.getByRole('button', { name: 'Continue to payment' }).click();

// console.log('text discount',discountText)
// const frame = await page.locator('iframe').contentFrame();

// if (frame) {
//     // Fetch discount code from the iframe
//     const discountText = await frame.locator('[data-qa="discount-code"]').innerText();
//     console.log("Fetched discount code:", discountText);

//     // Fill the discount code in the input field
//     await page.getByPlaceholder('Discount code').fill(discountText);
//     await page.waitForTimeout(2000); // Simulating user delay

//     // Submit the discount code
//     await page.locator('[data-qa="submit-discount-button"]').click();

//     // Check the discount activation message
//     const discountMessage = await page.locator('[data-qa="discount-active-message"]').innerText();
//     if (discountMessage.includes('Discount activated!')) {
//         console.log("Discount activated successfully.");
//     } else {
//         console.log("Invalid discount code.");
//     }
// }
// const frame = await page.locator('iframe').contentFrame();

// if (frame) {
//     // Récupérer le texte du code de réduction depuis l'iframe
//     const discountText = await frame.locator('[data-qa="discount-code"]').innerText();
//     console.log("Code de réduction récupéré:", discountText);

// await discountText.click()
// await page.keyboard.down("Control")
// await page.keyboard.press("C")

// await page.keyboard.up("Control")
//  await page.getByPlaceholder('Discount code').click({ clickCount: 3 }); // Select all text (or focus)
//  await page.keyboard.down('Control');
//  await page.keyboard.press('V'); // Paste the copied text
//  await page.keyboard.up('Control');

// }

// ici scd part 
// const frame = await page.locator('iframe').contentFrame();

// if (frame) {
//     // Retrieve the discount code text from the iframe
//     const discountTextElement = await frame.locator('[data-qa="discount-code"]');
//     const discountText = await discountTextElement.innerText();
//     console.log("Code de réduction récupéré:", discountText);

//     // Focus on the discount code element
//     await discountTextElement.click();

//     // Simulate copying the text
//     await page.keyboard.down("Control");
//     await page.keyboard.press("C");
//     await page.keyboard.up("Control");

//     // Focus on the input field and paste the text
//     const inputField = page.getByPlaceholder('Discount code');
//     await inputField.click({ clickCount: 3 }); // Select all existing text
//     await page.keyboard.down("Control");
//     await page.keyboard.press("V");
//     await page.keyboard.up("Control");
// }

    // Mettre le focus sur le champ de saisie du code
    console.log('ici debut du saisie')
    const inputField = page.getByPlaceholder('Discount code');
    await inputField.focus();
    const frame = await page.locator('iframe').contentFrame();
    const discountTextElement = await frame.locator('[data-qa="discount-code"]');
         const discountText = await discountTextElement.innerText();
    // Remplir le champ caractère par caractère avec un délai de 3 secondes entre chaque
    for (const char of discountText) {
        await inputField.type(char); // Simule un appui sur une touche du clavier
        console.log(`Caractère ajouté: ${char}`);
        await page.waitForTimeout(1000); // Attente de 3 secondes
    }

    // Soumettre le code de réduction
    await page.locator('[data-qa="submit-discount-button"]').click();

    // Vérifier si le message "Discount activated!" apparaît
    const discountMessage = await page.locator('[data-qa="discount-active-message"]').innerText();
    if (discountMessage.includes('Discount activated!')) {
        console.log("Réduction activée avec succès.");
    } else {
        console.log("Code de réduction invalide.");
    }

console.log('u did it be proud of ur self')


console.log('ici on va debuter la n phase afficvhage de la phrase suivante qui est la reductiuon et etre sure que la reduction est inferieur a la 1ere   ')
 const totalNumber = await page.locator('[data-qa="total-value"]').innerText()
console.log(totalNumber)
const discountNumber = await page.locator('[data-qa="total-with-discount-value"]').innerText()
console.log(discountNumber)
const sansdollard = Number(totalNumber.split('$')[0])
const scnddollard2=Number(discountNumber.split('$')[0])
try {
  expect(scnddollard2).toBeLessThanOrEqual(sansdollard)
  console.log(`Success: ${scnddollard2} is less than or equal to ${sansdollard}`);
} catch (error) {
  console.error('Assertion failed:', error.message);
  throw error; // Re-throw the error to fail the test
}


// partie remplir champ de chaque formulaire 
const credential ={
  nameOwner:"meriam ben salah" ,
cardNumber:'12345678912345678',
validUtil:"12/15",
cvc:'1234'
}
// ici condition il doit yavoir un nom 
await page.getByPlaceholder('Credit card owner').click();
await page.getByPlaceholder('Credit card owner').fill(credential.nameOwner);
// ici il doit yavoir un nombre de plus de 16
await page.getByPlaceholder('Credit card number').click();
await page.getByPlaceholder('Credit card number').fill(credential.cardNumber);
// ici il faut 4
await page.getByPlaceholder('Valid until').click();
await page.getByPlaceholder('Valid until').fill(credential.validUtil);
// ici on doit avoir 3 a 4 
await page.getByPlaceholder('Credit card CVC').click();
await page.getByPlaceholder('Credit card CVC').fill(credential.cvc);
// puis click 
await page.getByRole('button', { name: 'Pay' }).click();

console.log('u did itttttttt')
await page.goto('http://localhost:2221/thank-you');



await page.pause()


















// console.log(te)
// await page.getByPlaceholder('Discount code').click();
// await page.getByPlaceholder('Discount code').fill('5a9ed974637c');
// await page.locator('[data-qa="submit-discount-button"]').click()
// // Click on the "Submit discount" button
//  await page.getByRole('button', { name: 'Submit discount' }).click()
;

// const elementHandle = await page.waitForSelector('[data-qa="discount-active-message"]', { timeout: 5000 });
// // Wait for the "Discount activated!" message to appear
// const discountMessageLocator = page.locator('[data-qa="discount-active-message"]');
// expect(discountMessageLocator).toBeVisible()
// await expect(discountMessageLocator).toHaveText("Discount activated!");
// console.log("Discount activated message is displayed.");
// Option 1: Wait for the element to be visible
// // await discountMessageLocator.waitFor({ state: 'visible', timeout: 5000 });
// await expect(discountMessageLocator).toHaveText("Discount activated!");
// console.log("Discount activated message is displayed.");

// Option 2: Wait for the text content to match
// await page.waitForFunction(
//     (selector, expectedText) => {
//         const element = document.querySelector(selector);
//         return element && element.textContent.includes(expectedText);
//     },
//     { timeout: 5000 }, // Wait up to 5 seconds
//     '[data-qa="discount-active-message"]', // Selector
//     "Discount activated!" // Expected text
// );
// console.log("Discount activated message confirmed using waitForFunction.");






//6 this page containes everything related to the delivery we have like 5 inputs , to handel them 
// in this case search for a funciton that accept data ass selector and can put value to every input 






//7click on continue payment button after handeling the values and navigate to , http://localhost:2221/payment 










//8, try to copie past the value we have and use it as couppins 





//9 we have Discount activated! that is shown and then a reduction using the prcentage that is in the div section 
// // funciton de calcul take the % element and then apply the prcentage => Total including discount: 0$





//10 we have credit card element , we have inut too to add , then pay butotn , 



//11if the element are correct we can pay otherwise there is a message The 'Credit card owner' does not look like a person's full name



























    // Optional pause for debugging
    // await page.pause(); // Remove this in production
});
