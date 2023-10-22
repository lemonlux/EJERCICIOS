import fs from "fs"
import inquirer from "inquirer"
import puppeteer from "puppeteer"


const scrapping = async () =>{
    const urlBase = "https://www.casadellibro.com/libros/literatura/novela-contemporanea/121016000"
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"]
    })

    const page = await browser.newPage()

    await page.goto(urlBase)

    await page.waitForTimeout(3000)

    // await page.type(".book-finder", keyWord)

    // await page.keyboard.press("Enter")      // o  await page.click(".v-btn v-btn--icon v-btn--round theme--light v-size--default")

    await page.waitForSelector(".v-pagination__navigation")

    await page.click(".v-pagination__navigation")

    await page.waitForTimeout(3000)

    await page.click(".v-pagination__navigation")

    await page.waitForTimeout(3000)

    await page.click(".v-pagination__navigation")

    await page.waitForTimeout(3000)

    await page.click(".v-pagination__navigation")

    const casaDelLibroProducts = await page.$$eval("div .compact-product", nodes =>{
        nodes.map (node =>{
            title: node.querySelector("p .compact-product-title")?.innerText;
            author: node.querySelector("span .compact-product-authors")?.innerText;
            image: node.querySelector("img")?.src;
            price: node.querySelector("span .main-price")?.innerText;
            type: node.querySelector("p .feature")?.innerText;
  
        })
    })

    // casaDelLibroProducts.pop()
    console.log(casaDelLibroProducts)

    await browser.close()

}


scrapping()

// inquirer
// .prompt([
//     {
//         name: "busqueda",
//         message: "¿Qué quieres buscar?"
//     }
// ])
// .then(answers =>{
//     let keyWord = answers.busqueda
//     scrapping(keyWord)
// })