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
console.log(sumaRara(mixedElements))
console.log("----------aqui--------")

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

const noDuplicatesFuction = (array) =>{
    let noDuplicates = []
    array.forEach(food => {     // el forEach ejecuta la funcion para cada elemento del array
        !noDuplicates.includes(food) && noDuplicates.push(food)
      })
    return noDuplicates
}

console.log(noDuplicatesFuction(duplicates))


//  duplicates.forEach((food, index)=>{     // el forEach ejecuta la funcion para cada elemento del array
//    !noDuplicates.includes(food) && noDuplicates.push(food)
//  })

//  console.log(noDuplicates)


// con un ternario? --------- ?????????????????????

console.log("-------------")


const noDuplicatesTwo = []

duplicates.forEach(food=>{
    if (noDuplicatesTwo.includes(food)){
    return null
    }else noDuplicatesTwo.push(food)
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
  const finderName = (array, nombre) => {         // --- podriamos poner (name, index) como en el forEach? NO
    if (array.indexOf(nombre)>= 0){
        return `true, ${array.indexOf(nombre)}`

    } else{
        return false
    }
  }

console.log(finderName(nameFinder, 'Jessica'))



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


 const countWordsFuction = (array) => {
    const wordCounter = {};                 // creamos un nuevo array donde meter las cosas
    for (let i = 0; i < array.length; i++) {      // iteracion
      const word = array[i];                  // cada word es una posicion del array                 
      if (wordCounter[word]) {              // si la palbra esta
        wordCounter[word]++;
      } else {
        wordCounter[word] = 1;
      }
    }
    return wordCounter;
  }
  
  
  const result = countWordsFuction(counterWords);
  console.log(result);
  
  // ---------------- con for Each  y un ternario

  console.log("-----------forEach------")

  const funcionContar = (array) => {
    let contadorPalabras = []
    array.forEach(palabra=>{
        contadorPalabras[palabra] ? contadorPalabras[palabra]++ : (contadorPalabras[palabra] = 1)
    
        })
        return contadorPalabras
    }



  console.log(funcionContar(counterWords))

