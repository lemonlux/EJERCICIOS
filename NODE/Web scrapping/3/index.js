import fs from "fs"
import puppeteer from "puppeteer"
import inquirer from "inquirer"

const scrapping = async (keyWord) =>{
    const urlBase = "https://www.casadellibro.com"
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"]
    })

    const page = await browser.newPage()

    await page.goto(urlBase)

    await page.waitForTimeout(6000)

    await page.click("#onetrust-accept-btn-handler")

    await page.waitForTimeout(2000)


    await page.click(".buscador")

    await page.type(".x-search-input", keyWord)

    await page.keyboard.press("Enter")

    const casaDelLibroProducts = await page.$$eval("article .x-result", nodes =>{
        nodes.map (node =>{
            title: node.querySelector("h2 .x-text1 .x-text1-lg .x-mt-8 .x-font-bold .x-uppercase .x-text-neutral-90 .x-line-clamp-2")?.innerText;
            author: node.querySelector("h2 .x-text1 .x-font-regular .x-uppercase .x-text-neutral-75 .x-line-clamp-2")?.innerText;
            image: node.querySelector("img .x-result-picture-image")?.src;
            price: node.querySelector("span .x-currency")?.innerText;
            type: node.querySelector("span .x-text1")?.innerText;
  
        })
    })

    casaDelLibroProducts.pop()
    console.log(casaDelLibroProducts)

    await browser.close()


}

scrapping()