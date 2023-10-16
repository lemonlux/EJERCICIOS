

const startButton = document.querySelector(".start-button")


startButton.addEventListener("click", e =>{
    console.log("entro")
    shuffleCards()
})

const cardsArray = []

const shuffleDeck = () =>{
    const cards = document.querySelectorAll(".card")
    cards.forEach(card =>{
        cardsArray.push(card)

    })
}
console.log(cardsArray)

const shuffleCards = () =>{
    for (i=0; i< cardsArray.length; i++){
        let j= Math.floor(Math.random() * cardsArray.length)
        let change = cardsArray[i]
        cardsArray[i] = cardsArray [j]
        cardsArray [j] = change
    }
    console.log(cardsArray)
}

shuffleDeck()
