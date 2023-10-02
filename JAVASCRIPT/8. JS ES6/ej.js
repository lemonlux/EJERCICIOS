// ---------------- ITERACION 1 -------------

//1.1
console.log("-------1-------")

const functionAB = (a=10, b=5) =>{
    return a+b
}

console.log(functionAB())

//1.2

console.log(functionAB(13,))

//1.3

console.log(functionAB(200,200))


// ----------- ITERACION 2 ---------------

//2.1

console.log("-------2-------")

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const{ title, gender, year } = game

console.log(title)
console.log(gender)
console.log(year)

//2.2

const fruits = ['Banana', 'Strawberry', 'Orange'];

const[fruit1, fruit2, fruit3] = fruits

console.log(fruit1)

//2.3

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

const{name, race} = animalFunction()

console.log(`el nombre es ${name}`)


//2.4       

const car = {name2: 'Mazda 6', itv: [2015, 2011, 2020] }

const{name2,itv} = car

const[year1, year2, year3] = itv

console.log(year1)

//--------- ITERACION 3 -----------