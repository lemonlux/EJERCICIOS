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

//---


