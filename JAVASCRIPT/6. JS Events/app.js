//1.1



const button = document.createElement("button")

button.textContent= "botón"
button.id="btnToClick"

button.addEventListener("click", (e) =>{
console.log(e)
}
)

document.querySelector('input:first-of-type').after(button)


//1.2

const focusButton = document.createElement("button")

focusButton.textContent = "focus button"

focusButton.addEventListener("focus", (e)=>{
    const input = document.querySelector(".focus").value
    console.log(input)
})

document.querySelector('input:nth-of-type(2)').after(focusButton)


// const inputFocus = document.getElementsByClassName("focus")

// inputFocus.addEventListener("focus", (e) =>{
//     document.inputFocus.style.color = "red"

// })


//?1.3    

const inputButton = document.createElement("button")

inputButton.textContent = "input button"

inputButton.addEventListener("input", (e)=>{
    const input = document.querySelector(".value").value
    console.log(input)
})

document.querySelector('input:nth-of-type(3)').after(inputButton)


// const inputFocus = document.getElementsByClassName("focus")

// inputFocus.addEventListener("focus", (e) =>{
//     document.inputFocus.style.color = "red"

// })