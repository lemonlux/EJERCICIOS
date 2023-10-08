import "./Gallery.css"

const template = () => `

<section id="galleryContainer"></section>
`
const getData = async() =>{
    const allPokemon = []
    for (let i=1; i<151; i++){
        const data = await fetch (`https://pokeapi.co/api/v2/pokemon/${i}`)
        const jsonData= await data.json()
        allPokemon.push(jsonData)
    }
    console.log(allPokemon)
}


export const printTemplateGallery = () =>{
    document.querySelector("main").innerHTML=template()
    getData() 
}