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
    const {favoritesSounds} = user              // destructuring
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


// let volumes = 0

// for (user of users){
//     let sounds = user.favoritesSounds
//    for (sound in sounds){
//     let data = sounds[sound]
//     for (let value in data){
//     //   console.log(data[value])
//    (typeof (data[value]) == "number") && (volumes = (volumes + data[value]))
//    }
// } 
// }

//  console.log(volumes)

   //---------------- ITERACION 3 -----------------

   console.log("-------3--------")

   const users3 = [
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

const favorites = []

for (user3 of users3){
    const{favoritesSounds} = user3
    for (keys in favoritesSounds){
        favorites.push(keys)  
    } 
}

const funcionContar = () =>{
    let contador = [] 
    favorites.forEach(word=>{
    contador[word] ? contador[word]++ : contador[word] = 1
    }
    )
    return contador
}
const mostFavourite = funcionContar(favorites)

for(let sound in mostFavourite){
    if (mostFavourite[sound] == 1){
    console.log(`El sonido ${sound} ha sido ${mostFavourite[sound]} vez añadido a favoritos`)
    }else 
    console.log(`El sonido ${sound} ha sido ${mostFavourite[sound]} veces añadido a favoritos`)
}


console.log(mostFavourite)


   // --------------- ITERACION 4 ------------------


   const ejemplo = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']


   function findArrayIndex(array, text) {
    if(array.indexOf(text)>=0){
        return `si, ${array.indexOf(text)}`
    }else{
        return `no`
    }
   }

   console.log(findArrayIndex(ejemplo, "Ajolote"))

   // -------------- ITERACION 5 --------------------



   // -------------- ITERACION 6 --------------------



   const players = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

   console.log(players[1])

   const swap = (array, index1, index2) =>{
   let change = array[index1]
    array[index1] = array[index2]
    array[index2] = change
   }
   swap(players, 2, 3)

  // console.log(players)

   // ------ con destructuring --------------------

   const swap2 = (array, index1, index2) =>{
    [array[index1],array[index2]]=[array[index2],array[index1]]
   }

   swap2(players, 1, 2)

   console.log(players)