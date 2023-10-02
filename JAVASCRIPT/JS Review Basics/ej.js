// ---------------- ITERACION 1 -----------------

console.log("-------1--------")

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]


const categoriesArray = []

for (movie of movies){
    const categories = Object.values(movie.categories)
for (category of categories){
  !categoriesArray.includes(category) && categoriesArray.push(category)
} 
}
console.log(categoriesArray)


//------------- ITERACION 2 -----------------          ?????????

console.log("-------2--------")

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]


let acc = 0
let value = 0
let volumes = 0
let media = 0

for (const user of users){
    const {favoritesSounds} = user
    for(let sound in favoritesSounds){
     //   console.log(favoritesSounds[sound])
         value = favoritesSounds[sound].volume
     //    console.log(value)
        volumes = volumes + value
     //   console.log(volumes)
        acc++                               // para cada bucle sumame 1
         media = volumes/acc
    }
}

 console.log(media)         // el console.log tiene que estar fuera del bucle o te va saliendo tantos bucles haya







// for (user of users){
//     let sounds = user.favoritesSounds
//    for (sound in sounds){
//     let data = sounds[sound]
//     for (let value in data){
//    //     console.log(data[value])
//   //  (typeOf (data[value]) == "number") && acc +=
//    }
// } 
//  //  console.log(acc)
// }
















// let averageVolume = []
// let volumes = []
// let sum = 0
// let total = 0


// for (let user of users){
//     let sounds = user.favoritesSounds
//     for (let type in sounds){
//         let values = sounds[type]
//         for (let volume in values){
// //        console.log(values[volume])
//         (typeof values[volume] == "number") && (sum += values[volume])
//         (typeof values[volume] == "number") && (total++)

//     }
//     console.log(sum, total)
// }
// }


   //---------------- ITERACION 3 -----------------



   // --------------- ITERACION 4 ------------------