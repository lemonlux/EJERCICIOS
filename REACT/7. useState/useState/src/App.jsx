import { useState } from 'react'

import './App.css'

function App() {
  const [state, setState] = useState(() =>{
    // return {
    //   search: "",
    //   urgency: "",
    // }
  })



  return (
    <>
      <h2>{state}</h2>
      <input  type='text' value={state} onChange={(e)=> setState(e.target.value)}/>
      
    </>
  )
}

export default App
