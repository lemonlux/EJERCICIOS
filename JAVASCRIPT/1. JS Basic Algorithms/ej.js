//!------- ITERACION 1 -------


let myFavouriteHero = "Hulk"
let x = 50
let h = 5
let y = 10
let z = h + y




//!-------- ITERACION 2 --------

// 1.1
const character = {name: 'Jack Sparrow', age: 10};
character.age = 25
console.log(character.age)

// 1.2
let firstName = "Jon"
let lastName = "Snow"
let age = 24

console.log("Soy " + firstName + " " + lastName + ", tengo " + age + " años y me gustan los lobos.")

// 1.3
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29}

// const addPrice = (priceOne, priceTwo) =>  {
//    return toy1.price + toy2.price
//}

//console.log(addPrice)
console.log(toy1.price + toy2.price)

// 1.4
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};

globalBasePrice *= 2.5

console.log(globalBasePrice)

car1.finalPrice = car1.basePrice + globalBasePrice
car2.finalPrice = car2.basePrice + globalBasePrice

console.log(car1.finalPrice, car2.finalPrice)

//!--------- ITERACION 3 -------------

//1.1

let j = 5
let p = 10
console.log(j*p)

//1.2

let jy = 10
let jz = 2
console.log(jy/jz)

//1.3

console.log(15/9)

// 1.4

o = p + j

let ox = p += j

console.log(o, ox)

// 1.5

let c = 10
let m = 5

let i = c*= m

console.log(i)

//!-------------------- ITERACION 4 -----------------

//--------------1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers[0])

//--------------1.2

avengers[0]= "IRONMAN"

console.log(avengers)

//---------------1.3

console.log(avengers.length)

//----------------1.4

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"]

rickAndMortyCharacters.push("Morty")
rickAndMortyCharacters.push("Summer")

console.log(rickAndMortyCharacters[4])

//------------------1.5

const rickAndMortyCharactersAgain = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]

rickAndMortyCharactersAgain.pop()

console.log(rickAndMortyCharactersAgain[0], rickAndMortyCharactersAgain[4])

//--------------------1.6

rickAndMortyCharactersAgain.splice(1, 1)

console.log(rickAndMortyCharactersAgain)

//!------------------ ITERACION 5 -----------------------

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
// if(number1 === 10){
//     console.log('number1 es estrictamente igual a 10')
// }

if ((number2/number1) == 2 ) {
 console.log("number2 dividido entre number1 es igual a 2");
} else console.log("number1 dividido entre number2 no es igual a 2")

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

number1 !== number2 ? console.log("son estrictamente distintos") : console.log ("no son estrictamente distintos")

if (number3 != number1) {
 console.log("number3 es distinto number1");
}

if ((number3*5) == number1) {
    console.log("number3 por 5 es igual a number1");
}

if (((number3*5) == number1) && ((number1*2) == number2)) {
 console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

 if ((number2/2) == number1 || (number1/5) == number3) {
   console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
  }


  //!-------------------- ITERACION 6 --------------------------

//----1.1----

for (let i = 0; i <= 9; i++) {
    console.log(i);
  }

  //1.2---- 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
//cuando el resto del numero dividido entre 2 sea 0.

for (let x = 0; x <= 9; x++) {
    if((x%2) == 0){
    console.log(x)
    }
  }

  //1.3----- 1.3 Crea un bucle para conseguir dormir contando ovejas. 
// Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
// Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
// y cambia el mensaje en la décima vuelta a 'Dormido!'.

for (let y = 1; y <= 10; y++) {
    if(y != 10){
    console.log("Intentando dormir 🐑")
    }else console.log("Dormido!")
  }

 //--- con un ternario

  for (let y = 1; y <= 10; y++) {
    y == 10 ? console.log("Dormido!") : console.log("Intentando dormir 🐑")
  }


  //!---------- MINI RETO --------------

  let planet = "Tierra"

  let isInnerPlanet = false

  let hasAtmosphere = true


// if (isInnerPlanet && hasAtmosphere){
//     let isHabitable = true
//     console.log(isHabitable)
//   }

let isHabitable = isInnerPlanet || hasAtmosphere
console.log(isHabitable)