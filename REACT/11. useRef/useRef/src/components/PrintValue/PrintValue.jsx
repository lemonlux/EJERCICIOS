import { useRef, useState } from 'react'
import './PrintValue.css'



export const PrintValue = () => {
    const textInput = useRef()
    const [name, setName] = useState('Lucía')

    const printValue = () =>{
        const inputValue = textInput.current?.value
        if(inputValue){
            setName(inputValue)
            console.log(inputValue)
        }
    }



  return (
    <div>
        <h2>{name}</h2>
        <input type='text' placeholder='name' ref={textInput}/>
        <button onClick={() => printValue()}>Mostrar</button>     {/* el button hace que se ejecute la funcion printValue*/}
        <input type='text' onChange={(e) => setName(e.target.value)}/> {/* useRef vs useState  */}
        {console.log(name)}
    </div>
  )
}
