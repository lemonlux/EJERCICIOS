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
console.log(allPokemon)
    mappeoPokemon(allPokemon)
}


export const printTemplateGallery = () =>{
    document.querySelector("main").innerHTML=template()
    getData() 
}

const mappeoPokemon = (data) =>{
    const allPokemonMap = data.map((pokemon)=> ({
        name: pokemon.name,
        image: pokemon.sprites?.front_default,
        backImage: pokemon.sprites?.back_default,
        typeOne: pokemon.types[0]?.type?.name,
        typeTwo: (pokemon.types[1]?.type?.name != undefined ? pokemon.types[1]?.type?.name : ""),
        // typeTwo: (pokemon.types[1]?.type?.name != undefined)

    }))
    printFigure(allPokemonMap)
    console.log(allPokemonMap)
}

const printFigure = (data) =>{
    data.map(item => printCardPokemon(item))
}