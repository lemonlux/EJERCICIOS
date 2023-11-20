import { useState, useEffect } from 'react'
import './App.css'



const App = () => {
  
  const [ characters, setCharacters ] = useState([])

  const dataFunction = (async () =>{
    console.log('hola')
    let data = await fetch(`https://rickandmortyapi.com/api/character/`).then((res)=> res.json())
    setCharacters(data.results)
    
  })

  useEffect(() =>{
    dataFunction()
  }, [])


  return (
    <>
     <div>
      {characters.map((item)=>(
        <div key={item.id}>
          <h2>{item.name}</h2>
          <h3>{item.status}</h3>
        </div>
       
      ))}
     </div>
    </>
  )
}

export default App
