import { useState } from 'react'

import './App.css'

function App() {
  const [value, setValue] = useState(() =>{
    return {
      search: "",
      urgency: "",
    }
  })

  return (
    <>
      <h2>{value}</h2>
      <input  type='text' value={value} onChange={(e)=> setValue(e.target.value)}/>
      
    </>
  )
}

export default App
