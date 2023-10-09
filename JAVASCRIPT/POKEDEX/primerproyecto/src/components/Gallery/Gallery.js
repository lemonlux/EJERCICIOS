import { printCardPokemon } from "../CardPokemon/CardPokemon"
import "./Gallery.css"

const template = () => `

<section id="galleryContainer"></section>
`
const allPokemon = []
const getData = async() =>{

    for (let i=1; i<151; i++){
        const data = await fetch (`https://pokeapi.co/api/v2/pokemon/${i}`)
        const jsonData= await data.json()
        allPokemon.push(jsonData)
    }

    mappeoPokemon(allPokemon)
}


export const printTemplateGallery = () =>{
    document.querySelector("main").innerHTML=template()
    getData() 
}

const mappeoPokemon = (data) =>{
    const allPokemonMap = data.map((pokemon)=> ({
        name: pokemon.name,
        image: pokemon.sprites?.other?.dream_world?.front_default,

    }))
    printFigure(allPokemonMap)
}

const printFigure = (data) =>{
    data.map(item => printCardPokemon(item))
}