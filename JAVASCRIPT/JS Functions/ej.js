//!-------------ITERACION 1------------------

//? ---- function 

function sum(numberOne , numberTwo) {
    return numberOne>numberTwo ? numberOne : numberTwo
  }

  console.log(sum(6, 14))

//? ----- function arrow

const mayor = (x,y) => {
    return x > y ? x : y
}

// const resultadoMayor = mayor(100, 5)  ------- no es necesario

// console.log(resultadoMayor)

console.log(mayor(200, 8))

const numeroUno = (x,y) => x

console.log(numeroUno(5)) // devuelve 5

console.log("-------------------------------")


//!-------------- ITERACION 2----------------------------------------


const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

//? ---- function

function findLongestWord(lista) {             // funcion nombreFuncion (parametrosFuncion) {
   let palabraMasLarga = ""                     //   let  variable = ""    inicializamos variable
   let longitudMayor = 0                        //   let variable2 = 0     inicializamos var numerica
   for (let i= 0; i< lista.length; i++ ) {      //    bucle o iteración que pasa por toda la lista o array
    if  (lista[i].length > longitudMayor) {
        longitudMayor = lista[i].length
        palabraMasLarga = lista[i]
    }

   }
   return palabraMasLarga
}

console.log(findLongestWord(avengers))

//? ---- fuction arrow


const findLongest = (array) => {
    let longestWord = ""
    let longestLength = 0
    for (let i=0; i<array.length; i++) {
        if (array[i].length > longestLength) {
            longestLength = array[i].length
            longestWord = array[i]
    }
 }
        return longestWord
}

const longest = findLongest(avengers)

console.log("variable", longest)



//!------------------ ITERACION 3 -------------------

// Calcular una suma puede ser tan simple como iterar sobre un array y
//  sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de 
// números como argumento y devuelve la suma de todos los números de la matriz. 

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(array) {
    let total = 0
  for (let i= 0; i<array.length; i++) {
       total += array[i]
  }
  return total
}

console.log(sumNumbers(numbers))

console.log("-----------------------")

const seeTotal = (array) => {
    let total = 0
    for (let i=0; i<array.length; i++){
        total += array[i]
    }
    return total
}

const totalSum = seeTotal(numbers)

console.log(totalSum)

//!----------------------- ITERACION 4 -------------------

// promedio : suma/length

const numbers2 = [12, 21, 38, 5, 45, 37, 6];

const addition = (array) => {
    let total = 0
    for (let i=0; i<array.length; i++){
        total += array[i]
    }
    return total
}
 const totalAddition = addition(numbers2)

 console.log("La suma de todos los valores es " + totalAddition)

 console.log("El numero de sumandos es " + numbers2.length)

 console.log(totalAddition/(numbers2.length))

//  console.log("--------------------")

//  const addition2 = (array) => {
//     let total = 0
//     for (let i=0; i<array.length; i++){
//         total += array[i]
//     }
//     return total
// }

// const promedio = (addition2(numbers2)/numbers2.length)

// console.log(promedio)

//!---------------- ITERACION 5 -----------------------------

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

const sumaRara = (array) => {
    let sumaTotal = 0
    let sumaStrings = 0
    for (i=0; i<array.length; i++){
        if (typeof array[i] == "number") {
            sumaTotal += array[i]
        }else {
          sumaStrings += array[i].length  
        }
    }
    return `La suma total de numeros ${sumaTotal} y la suma de strings ${sumaStrings} `
}

const sumaArray = sumaRara(mixedElements)

console.log(sumaArray)
console.log("------------------")

//!------------------ ITERACION 6 ----------------

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

const noDuplicates = []

 duplicates.forEach((food, index)=>{     // el forEach ejecuta la funcion para cada elemento del array
   !noDuplicates.includes(food) && noDuplicates.push(food)
 })

 console.log(noDuplicates)


// con un ternario? --------- ?????????????????????

console.log("-------------")

const noDuplicatesTwo = []

duplicates.forEach((food, index)=>{
    return (noDuplicatesTwo.includes(food)) ? 
    null
    : noDuplicates.push(food)
})

console.log(noDuplicatesTwo)


  //! ---------------- ITERACION 7 ---------------

  const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  const finderName = (array, nombre) => {         // --- podriamos poner (name, index) como en el forEach?
    if (array.indexOf(nombre)>= 0){
        return `true, ${array.indexOf(nombre)}`

    } else{
        return false
    }
  }



  //!------------------ ITERACION 8 --------------------

  const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  
//   const wordCounter = []



//   const countWords = (array) =>{
//     for (i=0; i<array.length; i++){
//         if {
//         return array.splice(array[i], (array[i]+1))
//         }
//     }
//     }

//     console.log(countWords(counterWords))
  



    // counterWords.forEach((word, index)=>{       // iteramos todos los elementos en el array principal
    //     let acc = 0                              // acumula o suma un conjunto de valores
    //     wordCounter.forEach((item, index)=>{        // iteramos todos los elementos en el nuevo array
    //         wordCounter.includes(word) && acc++       // solo incluimos (ambos true) sumando el acc de 1 en 1
    //     }) 
    //     if (acc == 0){
    //         acc == 0
    //         counterWords.forEach((word2, index)=>{
    //             word == word2 && acc ++
    //         })
    //     }
        
    // })
    