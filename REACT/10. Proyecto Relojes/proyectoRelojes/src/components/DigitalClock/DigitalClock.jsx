import { useState, useEffect } from 'react'
import './DigitalClock.css'


export const DigitalClock = () => {
    const [clockState, setClockState] = useState()  //empieza en nul

    useEffect(() =>{     //nos da feedback de cuando se monta 
        setInterval(() => {
            const date = new Date()
            setClockState(date.toLocaleTimeString())   //seteamos el clock a la hora local cada segundo
        }, 1000);
  
    }, [])

  return (
    <div className='digital-clock'><h2>{clockState}</h2></div>
  )
}

