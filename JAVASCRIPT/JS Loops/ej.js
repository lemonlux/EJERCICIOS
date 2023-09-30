// --------- ITERACION 1 -----------------------

console.log("--------1---------")
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']



products.forEach(item=>{
    if (item.toLowerCase().includes("camiseta")){
      console.log(item)
    }
    })


// --------- ITERACION 2 -------------------        ??
console.log("--------2---------")
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

const approvedAlumns = []



alumns.forEach((alumn)=>{
  (alumn.T1 || alumn.T2) && (alumn.T2 || alumn.T3) && approvedAlumns.push(alumn)
})

approvedAlumns.forEach((alumno)=>{
  alumno.isApproved = true
})
console.log(approvedAlumns)



//------------- ITERACION 3 -------------------------
console.log("--------3---------")

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (location of placesToTravel){
  console.log(location)
}


// ------------- ITERACION 4 --------------------
console.log("--------4---------")
const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}

for(let key in alien){
  console.log(`Alien tiene la clave ${key} con valor ${alien[key]}`)
}


// --- apuntes

// var dieHardArray = [1, 2,'Simon', 'John McClane', 'Zeus Carver'];

// var dieHardObj = {
//   name: 'John',
// 	surname: 'McClane',
//   age: 37
// };
 
// for (key in dieHardObj) {
//   console.log(key, dieHardObj[key]);  
// }


// ---------- ITERACION 5 ------------    

console.log("--------5---------")

const placesToTravelTo = 
[{id: 5, name: 'Japan'}, 
{id: 11, name: 'Venecia'}, 
{id: 23, name: 'Murcia'}, 
{id: 40, name: 'Santander'}, 
{id: 44, name: 'Filipinas'}, 
{id: 59, name: 'Madagascar'}]


const goodPlaces = []

for (let i=0; i<placesToTravelTo.length; i++){
  let places = placesToTravelTo[i]
     places.id!=11 && places.id!=40 && goodPlaces.push(places)
// console.log(placesToTravelTo[i])
    }

console.log(goodPlaces)








// let goodPlaces = []
// console.log("prueba")
// for (let i=0; i<placesToTravelTo.length; i++){
// //    console.log(placesToTravelTo[i])                   //  nos da cada uno de los object object, es como un for of
//    let object = placesToTravelTo[i]
//    for (let key in object){
//  //   console.log(placestoTravelTo[key]!==11)                  // nos da false cuandi id=11
//      if ((object[key]!==11) && (object[key]!==40)){
//       !goodPlaces.includes(object) && goodPlaces.push(object) 
//      }
      
//  }
//   console.log(goodPlaces)
// }




//------------- ITERACION 6 ---------------
console.log("--------6---------")

const toys = [
  {id: 5, name: 'Buzz MyYear'}, 
  {id: 11, name: 'Action Woman'}, 
  {id: 23, name: 'Barbie Man'}, 
  {id: 40, name: 'El gato con Guantes'},
  {id: 40, name: 'El gato felix'}
  ]

  const noCatToy = []
  
  for (toy of toys){
    const names = Object.values(toy)
    //console.log(names)                                       //te da cada uno de los valores 5, buzz myyear
    !names.toString().includes("gato") && noCatToy.push(toy)
      
    }

    console.log(noCatToy)
  

    // ------------ ITERACION 7 -------------------

    console.log("--------7---------")

const bestToys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]

const popularToys = [];

for (let bestToy of bestToys){
      bestToy.sellCount>=15 && popularToys.push(bestToy)
    }

console.log(popularToys)

