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
let jx = 10