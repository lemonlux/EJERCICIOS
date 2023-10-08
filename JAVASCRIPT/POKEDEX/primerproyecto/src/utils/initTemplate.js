import { printTemplateFooter } from "../components/Footer/Footer"
import { printTemplateHeader } from "../components/Header/Header"
import { printTemplateGallery } from "../components/Gallery/Gallery";

export const  initTemplate = () =>{
    const app = document.getElementById("app")
    const header = document.createElement("header")
    const main = document.createElement("main")
    const footer = document.createElement("footer")
    app.append(header, main, footer)
    printTemplateFooter()
    printTemplateHeader()
    printTemplateGallery()
}