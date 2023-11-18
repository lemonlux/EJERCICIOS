import { useState } from "react"


export const useCounter = () =>{
const [counter, setCounter] = useState(1)

const next = () => setCounter(counter + 1)
const previous = () => setCounter(counter - 1)
const reset = () => setCounter(1)

return{
    counter,
    next,
    previous,
    reset
}

}

