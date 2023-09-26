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

//!---------- ITERACION 4 ---------

//1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers[0])

//1.2

avengers[0]= "IRONMAN"

console.log(avengers)

//1.3 ?????

console.log(avengers.length)

//1.4

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"]

rickAndMortyCharacters.push("Morty")
rickAndMortyCharacters.push("Summer")

console.log(rickAndMortyCharacters[4])

//1.5

const rickAndMortyCharactersAgain = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]

rickAndMortyCharactersAgain.pop()

console.log(rickAndMortyCharactersAgain[0], rickAndMortyCharactersAgain[4])

// 1.6

rickAndMortyCharactersAgain.splice(1, 1)

console.log(rickAndMortyCharactersAgain)
