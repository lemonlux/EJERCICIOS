import { useState } from "react"


export const useCounter = () =>{
const [counter, setCounter] = useState(0)

const next = () => setCounter(counter + 1)
const previous = () => setCounter(counter - 1)
const reset = () => setCounter(0)

return{
    counter,
    next,
    previous,
    reset
}

}

