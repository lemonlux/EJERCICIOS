import { useState, useEffect } from 'react'
import './Timer.css'


export const Timer = () => {
    const [time, setTime] = useState(0)
    const [timerOn, setTimerOn] = useState(false)


    useEffect (()=>{
      let interval
      if(timerOn){
       interval = setInterval(() => {
          setTime((value) => value + 10)
        }, 10);
      }else{
        clearInterval(interval)
      }
      return () => clearInterval(interval)
    })

  return (
    <div className='timer'>
      <h2>
      <span>{('0' + Math.floor((time /60000)%60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time /1000)%60)).slice(-2)}:</span>
        <span>{('0' + ((time/ 10) % 100)).slice(-2)}</span>
  
      </h2>
      { time == 0 && timerOn == false && <button onClick={() => setTimerOn(true)}>Start</button>}
      {timerOn == true && <button onClick={() => setTimerOn(false)}>Stop</button>}
      {time != 0 && timerOn === false && <button onClick={() => setTimerOn(true)}>Resume</button>}
      { timerOn === false && time != 0 && <button onClick={() => setTime(0)}>Reset</button>}
    </div>
  )
}

