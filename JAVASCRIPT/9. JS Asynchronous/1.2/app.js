const button = document.createElement("button")
const input = document.querySelector("input")

button.textContent="Consulta a la API"

document.querySelector('body').append(button)

let dataAPI

const url = "https://api.nationalize.io"

let answer

const loadData = async (name) =>{
try{
    const response = await fetch(`${url}?name=${name}`)
    const data = await response.json()
    dataAPI = data
    answer = console.log(data)
} catch (error){
    console.log(error)
}
}

const mapeoFunction = () =>{
    const mapeoAnswer = dataAPI.map (item =>{
        count:   item.count
   })
}

// const div = document.createElement('div')



button.addEventListener("click", e =>{
  const input = document.querySelector("input").value
  loadData(input)

// console.log(loadData(input))
})

loadData()

document.querySelector('body').append(div)


