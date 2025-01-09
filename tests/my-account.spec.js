import {test,expect} from "@playwright/test"
import { getLoginToken } from "../api-Calls/getLoginToken"
// ici on a importation d'autre fucntions 
import {MyaccountPage} from '../partie 2/MyaccountPage'

test('My account using cokies injection ',async({page})=>{
    const myaccount = new MyaccountPage(page)
   const loginToken = await getLoginToken()
   console.warn({loginToken})
   
    await myaccount.visit()
    await page.evaluate(([loginTokenInsideBrowserCode])=>{
        document.cookie="token="+loginTokenInsideBrowserCode
    },[loginToken])
    await myaccount.visit()


})