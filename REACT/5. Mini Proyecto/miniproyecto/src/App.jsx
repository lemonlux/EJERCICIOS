import { useState, useEffect } from 'react'
import './App.css'
import { Card } from './components'



const App = () => {
  
  const [ characters, setCharacters ] = useState([])
  const [characterList, setCharacterList] = useState([])

  const url = `https://rickandmortyapi.com/api/character/`

  const dataFunction = (async () =>{
    let data = await fetch(url).then((res)=> res.json())
    setCharacters(data.results)
    console.log(data.results)
    
  })

  useEffect(() =>{
    dataFunction()
  }, [url])


  return (
    <>
     <div>
      {characters.map((item)=>(
        <Card key={item.id} character={item}/>
       
      ))}
     </div>
    </>
  )
}

export default App
