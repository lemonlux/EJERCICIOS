import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

const charactersMock = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
  },
];


const App = () => {

  // const [ characters, setCharacters ] = useState(charactersMock)
  // console.log(characters)
  const [ characters, setCharacters ] = useState[()]

  // useEffect(()=>{
   
  // }, [])


  //!---------- hace falta el fetch 
  

  return (
    <>
     {/* <div>
      {characters.map((item)=>(
        <div key={item.id}>
          <h2>{item.name}</h2>
          <h3>{item.status}</h3>
        </div>
       
      ))}
     </div> */}
    </>
  )
}

export default App
