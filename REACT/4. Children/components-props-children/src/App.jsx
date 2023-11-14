import { useState } from 'react'
import './App.css'
import { Title, Subtitle, Paragraph, Image } from '../src/components/index'
import { Header } from './pages/index'

function App() {
  const [count, setCount] = useState(0)

  const name = "User"
  const paragraph = "Estoy probando ahora los children"
  const subtitle = "helloooooo"

  return (
    <>
      <div>
        <Header>
        <Title name={name}/>
        </Header>
        <Subtitle subtitle={subtitle}/>
        <Image/>
        <Paragraph paragraph={paragraph}/>
        
      </div>
    </>
  )
}

export default App
