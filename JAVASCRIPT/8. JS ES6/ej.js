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
console.log("-------3-------")

//3.1

const pointsList = [32, 54, 21, 64, 75, 43]

const pointsListCopy = [...pointsList]

console.log(pointsListCopy)

//3.2

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'}

const toyCopy = {...toy}

console.log(toyCopy)

//3.3

const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsList3 = [54,87,99,65,32];

const newPointsList =[...pointsList2, ...pointsList3]

console.log(newPointsList)

//3.4

const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const allToys = {...toy2, ...toyUpdate}

console.log(allToys)

//3.5

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colors2 = [...colors]
colors2.splice(1,1)

console.log(colors2)


// ------------ ITERACION 4 ----------
console.log("-------4-------")
//4.1

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const usersName = users.map((item)=>{
    return item.name
})

console.log(usersName)

//4.2
const noANames = []

const mapNames = users.map((item)=>{
    let names = item.name
    if (names.toString().toLowerCase().charAt(0) != "a"){
        noANames.push(item.name)
    }else noANames.push("Anacleto")
}
)

console.log(noANames)

//4.3 

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const visitedCities = []

const mapCities  = cities.map((item)=>{
    // let city = item.name
    // let visited = item.isVisited
    //  visited == true ? visitedCities.push(city, "Visitado") : visitedCities.push(city, "No visitado") 
    return item.isVisited ? `${item.name} visitado` : item.name
    //! item.isVisited no hace falta ponerle == true porque ya es true 
})


console.log(mapCities)


// const mapCities2 = cities.map((item)=>{
//     let city = item.name
//     let visited = item.isVisited
//     visited == true ? const citiesCopy=[...cities]
// })



// ---------  ITERACION 5 ---------

console.log("-------5-------")
//5.1

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const ageFilter = ages.filter((item)=>{
    return item >= 18
})

console.log(ageFilter)

//5.2

const evenNumberFilter = ages.filter((item)=>{
   return item%2 == 0
})
console.log(evenNumberFilter)

//5.3

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];


const streamersFilter = streamers.filter((streamer)=>{
    return streamer.gameMorePlayed === "League of Legends"
})

console.log(streamersFilter)

//5.4

const uFilter = streamers.filter((streamer)=>{
    return streamer.name.includes("u")
})

console.log(uFilter)

//5.5 
console.log("-----5.5-----")

const legendsFilter = streamers.filter(streamer=>{
    return streamer.gameMorePlayed.includes("Legends")
} 
)

for (let stream of legendsFilter){
    if (stream.age > 35){ 
        stream.gameMorePlayed = stream.gameMorePlayed.toUpperCase()
}
}

console.log(legendsFilter)




//5.6

//5.7


//----------- ITERACION 6 -------------
console.log("-------6-------")
//6.1

const numbers = [32, 21, 63, 95, 100, 67, 43]

const numbersFind = numbers.find((number)=>{
    return number == 100
})

console.log(numbersFind)


//6.2

const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];


const moviesFind = movies.find((movie)=>{
    return movie.date == 2015
})

console.log(moviesFind)


//!6.3 -------------------------
const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

const findAlien = aliens.find((alien)=>{
    return alien.name == "Cucushumushu"
})

// const findMutation = mutations.find((mutation)=>{
//    return mutation.name == "Porompompero"
// })

const mutation = mutations.find(mutation=>{
    if (mutation.name == "Porompompero"){
        return mutation
    }
})



const alienCopy = {...findAlien, mutation}

 console.log(alienCopy)


//-------- ITERACION 7 ---------------

//7.1

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
]


const suma = exams.reduce((acc, exam)=>{
    return acc + exam.score
}, 0)


console.log(suma)


//7.2

const aprobados = exams.filter(exam=>{
    return exam.score >= 5
})


const sumaAprobados = aprobados.reduce((acc, exam)=>{
        return acc + exam.score
}, 0)

console.log(sumaAprobados)

const media = exams.reduce((acc, exam)=>{
    return (acc + exam.score)
},0)

console.log(media/exams.length)



// -------- ITERACION 8 --------------

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
]

const RPGVideogames = videogames.filter((videogame)=>{
    return videogame.genders.includes("RPG")

})

console.log(RPGVideogames)

const videogamesSum = RPGVideogames.reduce((acc,videogame)=>{
    return acc + videogame.score
}, 0) 

console.log(videogamesSum/RPGVideogames.length)