import "./Nav.css"

const template = () => `
<nav>
        <ul>
            <li>HOME</li>
            <li>POKEMON</li>
            <li>MY POKEDEX</li>
        </ul>
</nav>
`

export const printTemplateNav = () =>{
    document.getElementById("containerNav").innerHTML = template()
}