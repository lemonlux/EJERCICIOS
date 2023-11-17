import './Countdown.css'
import { useState, useEffect } from 'react'

export const Countdown = () => {
    const [time, setTime] = useState('')

    useEffect(() =>{
        let countdownDate = new Date('May 24, 2024 17:00:00').getTime()      //la fecha del countdown
       let x = setInterval(() => {
            let now = new Date().getTime()  // getTime() es un número de milisegundos desde el 1 de enero de 1970 00:00:00 UTC
            let timer = countdownDate - now               // lo q queda ---- countdown - now
            let seconds = Math.floor(timer % (1000 * 60) / ( 1000 ))
            let minutes = Math.floor(timer % (1000 * 60 * 60) / ( 1000 * 60 ))
            let hours = Math.floor(timer % (1000 * 60 * 60 *24) / ( 1000 * 60 * 60))
            let days = Math.floor(timer / (1000 * 60 * 60 *24))
            setTime(days + 'd ' + hours + 'h ' + minutes + 'min ' + seconds + 's')

            if (timer <= 0){
                clearInterval(x)
                setTime('🎉la cuenta atrás ha finalizado🎊')
            }
        }, 1000);
    })


  return (
    <div className='container countdown'><h2>{time}</h2></div>
  )
}

