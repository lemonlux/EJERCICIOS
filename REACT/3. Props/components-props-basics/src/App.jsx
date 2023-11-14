import { useState } from 'react'
import './App.css'
import { Title, Subtitle, Paragraph, Image } from '../src/components/index'

function App() {
  const [count, setCount] = useState(0)

  const name = "Lucía"
  const paragraph = "Esto es un parrafo metido con props"

  return (
    <>
      <div>
        <Title name={name}/>
        <Subtitle/>
        <Image/>
        <Paragraph paragraph={paragraph}/>
        
      </div>
    </>
  )
}

export default App
