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
        const textoDivs = document.createTextNode(`este es el div número ${i}`)
        divs.append(textoDivs)
        document.querySelector('body').append(divs)
    }
}

divGenerator()



//2.4

const pDinamico = document.createElement('p')

let textoDinamico = document.createTextNode(`soy dinámico!`)

pDinamico.append(textoDinamico)

document.querySelector('body').append(pDinamico)

//2.5

let textWubba = document.createTextNode(`Wubba Lubba dub dub`)

document.querySelector(".fn-insert-here").append(textWubba)

//2.6



const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

const printApps = () =>{
    const ul = document.createElement('ul')
    for (let app of apps){
        const li = document.createElement('li')
        let textoLi = document.createTextNode(`${app}`)
        li.append(textoLi)
        ul.append(li)
    }
    document.querySelector(`body`).append(ul)
}

printApps()


//!2.7        ------------ no me va con className ni querySelector

const removeId = document.getElementById('fn-remove-me')

removeId.remove()

// const removeMe = document.getElementsByClassName('fn-remove-me')

// removeMe.remove()





// const removeMe = document.getElementsByClassName('fn-remove-me')
// const removeMeAgain = document.querySelector('.fn-remove-me')

// removeMe.remove()

// removeMeAgain.remove()




//?2.8 -----------

const enMedio = document.createTextNode('voy en medio!')

document.querySelector('div:nth-of-type(2)').append(enMedio)


//?2.9


    let voyDentro = document.createTextNode('voy dentroooooooooooo')
    let allSelector = document.querySelectorAll('.fn-insert-here')

allSelector.forEach((div, index) =>{
    let newP = document.createElement('p')
    newP.textContent = "voy dentrooooooooooooooooo"
    div.append(newP)
})


//--------


// let getDiv = document.querySelectorAll('.fn-insert-here');
// getDiv.forEach((item, index) => {
// let nuevoTexto = document.createElement('p');
// nuevoTexto.textContent = 'Voy dentro!';
// item.appendChild(nuevoTexto);
// })


