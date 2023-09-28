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

const resultadoMayor = mayor(100, 5)

console.log(resultadoMayor)

// const numeroUno = (x,y) => x

// const test = numeroUno(5)

// console.log(test)

console.log("-------------------------------")


//!-------------- ITERACION 2----------------------------------------


const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

//? ---- function

function findLongestWord(array) {
   let palabraMasLarga = ""
   let longitudMayor = 0
   for (let i= 0; i< array.length; i++ ) {
    if  (array[i].length > longitudMayor) {
        longitudMayor = array[i].length
        palabraMasLarga = array[i]
    }

   }
   return palabraMasLarga
}

console.log(findLongestWord(avengers))

//? ---- fuction array

//  const findLongest = (array) => {
//     let longestWord = ""
//     let longestLength = 0
//     for (let i=0; i< array.lenght; i++) {
//         array[i].length > longestLength ? {
//             longestLength = array[i].length
//             longestWord = array[i]
//         } console.log(longestWord):console.log(null)
//     }
//  }

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


  const  removeDuplicates = (array, food) => {
    if (array.indexOf(food)!=array.lastIndexOf(food)){
        return array.splice((array.indexOf(food)),(array.indexOf(food)+1))
    }
        }

    console.log(removeDuplicates(duplicates))

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
  const finderName = (array, nombre) => {
    if (array.indexOf(nombre)>= 0){
        return `true, ${array.indexOf(nombre)}`

    } else{
        return false
    }
  }

  console.log(finderName(nameFinder, "Jessica"))


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
  
  

  const countWords = (array) =>{
    for (i=0; i<array; i++){
        if (array[i]=array[i]){
        return array.splice(array[i], (array[i]+1))
        }
    }
    }

    console.log(countWords(counterWords))
  