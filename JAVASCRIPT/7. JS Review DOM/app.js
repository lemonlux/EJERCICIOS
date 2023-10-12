//1.1

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

const printCountries = () =>{
    const ul = document.createElement('ul')
    countries.forEach(country =>{
        const li = document.createElement('li')
       let textoLi = document.createTextNode(`${country}`)
       li.append(textoLi)
        ul.append(li)
    })
    document.querySelector('body').append(ul)
}

printCountries()


//1.2
const element = document.getElementById("div-02");
element.remove(); // Removes the div with the 'div-02' id



const removeConst = document.querySelector('.fn-remove-me')

removeConst.remove();


// const eliminar = document.querySelector(".fn-remove-me");
// eliminar.remove();

//---


//1.3


const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];


const printCards = () =>{
    const ul = document.createElement('ul')
    for (car of cars){
        const li = document.createElement('li')
        li.textContent=`${car}`
        ul.append(li)
    }
    document.querySelector("[data-function='printHere']").append(ul)
}

printCards()


//1.4

const countriesArray = [
	{title: 'Random title 1', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title 2', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title 3', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title 4', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title 5', imgUrl: 'https://picsum.photos/300/200?random=5'}
];


const printCountriesArray = () =>{
   const mapeoCountries = countriesArray.map((country) =>{
        const div = document.createElement('div')
        const h4 = document.createElement('h4')
        const img = document.createElement('img')
        img.setAttribute("src", `${country.imgUrl}`)
        h4.textContent = `${country.title}`
        div.append(img, h4)
        document.querySelector('body').append(div)
    })
}

printCountriesArray(countriesArray)


//1.5

const deleteButton = document.createElement('button')

deleteButton.textContent = "Elimino!"

deleteButton.addEventListener("click", e =>{
    const lastElement = document.querySelector("div:last-of-type")
    lastElement.remove()

})

document.querySelector("div:last-of-type").append(deleteButton)


//!1.6

// const deleteManyButtons = () =>{
// document.querySelectorAll('div').forEach(div =>{
//     console.log(div)
//     const button = document.createElement('button')
//     button.textContent = "boton para todos"
//     button.addEventListener("click", e =>{
//         div.remove()
//     })
//     document.div.append(button)
// })

// }

// deleteManyButtons()


const deleteManyButtonsTwo =  () =>{
    const divs = document.querySelectorAll('div')
    for (div of divs){
    const button = document.createElement('button')
    button.textContent = "boton para todos"
    for (i=1; i<6; i++){
        document.querySelector(`div:nth-of-type(${i})`).append(button)
        button.addEventListener("click", e =>{
        })
}
}}
deleteManyButtonsTwo()