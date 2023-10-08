import "./Footer.css"

const template = () =>  `
<h3>best <span>Pokemons</span> ever</h3>
`

export const printTemplateFooter = () =>{
    document.querySelector("footer").innerHTML= template()
}