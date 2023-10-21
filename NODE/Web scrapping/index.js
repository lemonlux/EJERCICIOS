import fs from "fs"
import puppeteer from "puppeteer"


const scrapping = async (keyWord) =>{
    const urlBase = "https://www.casadellibro.com/libros/literatura/novela-contemporanea/121016000"
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"]
    })

    const page = await browser.newPage()

    await page.goto(urlBase)





}