// export class ProductPage{
//     constructor(page){
//         this.page=page
//     }
//     visit=async()=>{
//         await this.page.goto('http://localhost:2221/')
//     }
// }

const { expect } = require("@playwright/test");

async function visitProductPage(page) {
    await page.goto('http://localhost:2221/');
}

// Fonction pour récupérer le titre de la page
async function getPageTitle(page) {
    return await page.title();
}

async function getBasketCount(page) {
    //return a number le nombre de count de basket ball 
    const basketCount = page.locator('[data-qa="header-basket-count"]')
    const text = await basketCount.innerText()
    //return "0" => 0
    const returnNumber = parseInt(text,10)
console.log('returnNumber',returnNumber)
    return returnNumber

}
const addProductToBasket =async(page,index)=>{
const buttonAddto = page.locator('[data-qa="product-button"]')
// await  buttonAddto.nth(index).waitFor()
await  buttonAddto.nth(index).click()
await getBasketCount(page)
}

// this is an other way 
// const addProductToBasket =async(page,array)=>{
//     const buttonAddto = page.locator('[data-qa="product-button"]')
//     // await  buttonAddto.nth(index).waitFor()
//     // const count = await buttons.count();
    
//     for (let i = 0; i < 3; i++) {
//         await buttonAddto.nth(i).click(); // Click each button one by one
//     }
    
//     }

module.exports = { visitProductPage, getPageTitle,addProductToBasket}


// this part we will do it as a class element 
