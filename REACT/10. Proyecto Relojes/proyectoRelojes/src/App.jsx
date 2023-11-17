import { useState } from 'react'
import './App.css'
import { Countdown, DigitalClock, Timer } from './components'

const App =() =>{
 

  return (
    <>
    <main>
      <DigitalClock/>
      <Countdown/>
      <Timer/>
    </main>

    </>
  )
}

export default App
