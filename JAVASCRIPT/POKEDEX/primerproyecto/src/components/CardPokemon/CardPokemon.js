import "./CardPokemon.css"

const template = ({name, image}) =>`

<figure class="pokemon-figures">
    <div>
        <img src=${image} alt=${name}/>
    </div>
    <h3>${name}</h3>

</figure>
`

export const printCardPokemon = (pokemon) =>{
    document.getElementById("galleryContainer").innerHTML += template(pokemon)
}

