//---------------------- ITERACION 2 ----------------------

//2.1

const newDiv = document.createElement('div')

let texto = document.createTextNode('hola que tal estás')

newDiv.append(texto)

document.querySelector('body').append(newDiv)

//2.2 

const newDivContainer = document.createElement('div')

let textoDiv = document.createTextNode('esto es un div con')

newDivContainer.append(textoDiv)

const newP = document.createElement('p')

let textoP = document.createTextNode('un p dentro')

newP.append(textoP)

newDivContainer.append(newP)

document.querySelector('body').prepend(newDivContainer)

//2.3

const divGenerator = () =>{
    for (i=1; i<7; i++){
        const divs = document.createElement('div')
        const textoDivs = document.createTextNode(`este es el div numero ${i}`)
        divs.append(textoDivs)
        document.querySelector('body').append(divs)
    }
}

divGenerator()