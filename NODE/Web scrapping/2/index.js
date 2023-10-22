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

const puppeteer = require('puppeteer')
const mongoose = require('mongoose')

const Data = mongoose.model('Data', new mongoose.Schema({
  title: String,
  price: String
}))

const connect = async () => {
  try {
    const URI = 'mongodb+srv://user:password@cluster0.qdiqj9n.mongodb.net/nameProject?retryWrites=true&w=majority'
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Connected to DB 🚀')
  } catch (error) {
    console.error('Not connected to DB ❌')
  }
}


const scrapeProducts = async () => {
    await connect()
  
    const url = 'https://www.amazon.es/'
  
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ['--start-maximized']
    })
  
    const page = await browser.newPage()
  
    await page.goto(url)
  
    await page.type('#twotabsearchtextbox', 'star wars')
  
    await page.click('#nav-search-submit-button')
  
    await page.waitForSelector('.s-pagination-next')
  
    const title = await page.$$eval('h2 span.a-color-base', (nodes) =>
      nodes.map((n) => n.innerText)
    )
  
    const price = await page.$$eval('span.a-price[data-a-color="base"] span.a-offscreen', (nodes) =>
      nodes.map((n) => n.innerText)
    )
  
    const amazonProduct = title.map((value, index) => {
      return {
        title: title[index],
        price: price[index]
      }
    })
  
  
    amazonProduct.map(async (data) => {
      const dataSchema = new Data(data)
      try {
        await dataSchema.save()
        console.log(`Succesfully saved ${dataSchema.title} to the database 🤘🏽`)
      } catch (error) {
        console.error(`Failed to save ${dataSchema.title} to the database ❌`)
      }
    })
  
    await browser.close()
    console.log('All saved Succesfully - Live Rock 🤘🏽🧙🏽‍♂️')
  
  
  
  }
  
  scrapeProducts()