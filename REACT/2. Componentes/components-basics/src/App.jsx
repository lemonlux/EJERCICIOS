import { useState } from 'react'
import './App.css'
import { Title, Subtitle, Paragraph, Image } from '../src/components/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Title/>
        <Subtitle/>
        
        <Paragraph/>
        
      </div>
    </>
  )
}

export default App
