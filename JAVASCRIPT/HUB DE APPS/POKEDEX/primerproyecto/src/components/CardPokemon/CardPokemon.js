import "./CardPokemon.css"

const template = (pokemon) =>`

<figure class="${pokemon?.typeOne}">
    <div class="pokemon-container">
        <img src=${pokemon?.image} alt=${pokemon?.name}/>
        <h3>${pokemon?.name}</h3>
        <h4>${pokemon?.typeTwo}</h4>
    </div>
    

</figure>
`

export const printCardPokemon = (pokemon) =>{
    pokemon.name && (document.getElementById("galleryContainer").innerHTML += template(pokemon))
}


// const typeTwoFuction = () =>{
//     const typeTwoClass = []
//     pokemon?.typeTwo != undefined ? typeTwoClass.push(pokemon?.typeTwo) : null

//     console.log(typeTwoFuction(typeTwoClass))
// }

