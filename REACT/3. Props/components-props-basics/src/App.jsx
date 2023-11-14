import { useState } from 'react'
import './App.css'
import { Title, Subtitle, Paragraph, Image } from '../src/components/index'
import { Header } from '../src/

function App() {
  const [count, setCount] = useState(0)

  const name = "Lucía"
  const paragraph = "Esto es un parrafo metido con props"
  const subtitle = "mira que subtitulo mas chulo que he hecho con las props eeee"

  return (
    <>
      <div>
        <Title name={name}/>
        <Subtitle subtitle={subtitle}/>
        <Image/>
        <Paragraph paragraph={paragraph}/>
        
      </div>
    </>
  )
}

export default App
