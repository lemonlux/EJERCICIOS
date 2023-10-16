let cardList = {
    grass: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461476/IMG_4565_awl5qy.png",
    electric: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461475/IMG_4561_kykxva.png",
    water: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4557_yb7pyl.png",
    fire: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4556_fjxsyi.png",
    psychic: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4559_yy16ve.png",
    normal: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461472/IMG_4560_kcm4l9.png",
    dragon: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461470/IMG_4558_bjqbfk.png",
    poison: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461470/IMG_4562_ksnmhk.png",
    magic: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461470/IMG_4554_jkri6n.png",
    ice: "https://res.cloudinary.com/daxddugwt/image/upload/v1697461469/IMG_4555_knqwpc.png"
}

const keysCardList = Object.keys(cardList) // array de tipos
const valuesCardList = Object.values(cardList) // las url de las imagenes

console.log(valuesCardList[1])

console.log(keysCardList)   
console.log(valuesCardList)  

let deck 

const shuffleDeck = () =>{
deck = keysCardList.concat(keysCardList)
console.log(deck)    // 20 tipos 
    for (let i=0; i< deck.length; i++){
        let j = Math.floor(Math.random() * deck.length)

        let deckChange = deck[i]
        deck[i] = deck[j]
        deck[j] = deckChange
    }
    console.log(deck)
}

shuffleDeck()

const startGame = () => {
                                        // montar el tablero de 20 img
    let rows = 4
    let columns = 5
    let board = []
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let cardImg = deck.pop();       //me muestra el elemento eliminado --- el último del array
            row.push(cardImg); 
            // console.log(cardImg)
            // // <img id="0-0" class="card" src="water.jpg">
            let card = document.createElement("img");
             card.id = r.toString() + "-" + c.toString();
                                        //necesito un url diferente segun la carta --- switctch?
       switch (cardImg){
            case "grass":
                card.src = valuesCardList[0]
            break;
            case "electric":
                card.src = valuesCardList[1]
             break;
             case "water":
                card.src = valuesCardList[2]
             break;
             case "fire":
                card.src = valuesCardList[3]
             break;
             case "psychic":
                card.src = valuesCardList[4]
             break;

             case "normal":
                card.src = valuesCardList[5]
             break;

             case "dragon":
                card.src = valuesCardList[6]
             break;

             case "poison":
                card.src = valuesCardList[7]
             break;

             case "magic":
                card.src = valuesCardList[8]
             break;
             
             case "ice":
                card.src = valuesCardList[9]
             break;
       }
            card.classList.add("card")
            document.getElementById("board").append(card)

        }
  board.push(row);
    }

console.log(board);
}

startGame()