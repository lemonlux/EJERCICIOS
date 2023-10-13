const button = document.createElement("button")
const input = document.querySelector("input")

button.textContent="Consulta a la API"

document.querySelector('body').append(button)

let dataAPI

const url = "https://api.nationalize.io"

const loadData = async (name) =>{
try{
    const response = await fetch(`${url}?name=${name}`)
    const data = await response.json()
    dataAPI = data
    console.log(data)
} catch (error){
    console.log(error)
}
}

button.addEventListener("click", e =>{
  const input = document.querySelector("input").value
  loadData(input)


})