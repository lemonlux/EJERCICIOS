// --------- ITERACION 1 -----------------------


const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']



products.forEach(item=>{
    if (item.toLowerCase().includes("camiseta")){
      console.log(item)
    }
    })


// --------- ITERACION 2 -------------------        ??

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

let acc = 0
alumns.forEach(item=>{

})









//------------- ITERACION 3 -------------------------


const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (location of placesToTravel){
  console.log(location)
}


// ------------- ITERACION 4 --------------------

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

var dieHardArray = [1, 2,'Simon', 'John McClane', 'Zeus Carver'];

var dieHardObj = {
  name: 'John',
	surname: 'McClane',
  age: 37
};
 
for (key in dieHardObj) {
  console.log(key, dieHardObj[key]);  
}


// ---------- ITERACION 5 ------------    ????

const placesToTravelTo = 
[{id: 5, name: 'Japan'}, 
{id: 11, name: 'Venecia'}, 
{id: 23, name: 'Murcia'}, 
{id: 40, name: 'Santander'}, 
{id: 44, name: 'Filipinas'}, 
{id: 59, name: 'Madagascar'}]

let goodPlaces = []
console.log("prueba")
for (let i=0; i<placesToTravelTo.length; i++){
//    console.log(placesToTravelTo[i])                   //  nos da cada uno de los object object, es como un for of
   let array = placesToTravelTo[i]
   for (let key in array){
    // console.log(array[key])                  // nos da id 5 name Japan
    (array[key]!==11) && goodPlaces.push(placesToTravelTo)
 }
  //  console.log(goodPlaces)
}


console.log("----fin it5------")


//------------- ITERACION 6 ---------------


const toys = [
  {id: 5, name: 'Buzz MyYear'}, 
  {id: 11, name: 'Action Woman'}, 
  {id: 23, name: 'Barbie Man'}, 
  {id: 40, name: 'El gato con Guantes'},
  {id: 40, name: 'El gato felix'}
  ]

  for (item of toys){
    for (keys in toys){
 //   console.log(this.id, this.name)
    }
  }
