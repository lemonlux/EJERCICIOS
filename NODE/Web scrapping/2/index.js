import fs from "fs"
import inquirer from "inquirer"
import puppeteer from "puppeteer"


// const scrapping = async () =>{
//     const urlBase = "https://www.casadellibro.com/libros/literatura/novela-contemporanea/121016000"
//     const browser = await puppeteer.launch({
//         headless: false,
//         defaultViewport: null,
//         args: ["--start-maximized"]
//     })

//     const page = await browser.newPage()

//     await page.goto(urlBase)

//     await page.waitForTimeout(3000)

//     await page.evaluate(() => {
//     let itemCount
//     let items = []
//     let casaLibroItems
//     let divScroll = document.querySelector(".x-scroll")
//     try {
//         let previousHeight;
//         while (items.length < itemCount){
//             items = await page.evaluate(casaLibroItems)
//             previousHeight = await.page.evaluate(divScroll.scrollHeight)
//         }
//     }


//  casaLibroItems = await page.$$eval("div .compact-product", nodes =>{
//         nodes.map (node =>{
//             title: node.querySelector("p .compact-product-title")?.innerText;
//             author: node.querySelector("span .compact-product-authors")?.innerText;
//             image: node.querySelector("img")?.src;
//             price: node.querySelector("span .main-price")?.innerText;
//             type: node.querySelector("p .feature")?.innerText;
  
//         })
//     })
    
//     })




// }

