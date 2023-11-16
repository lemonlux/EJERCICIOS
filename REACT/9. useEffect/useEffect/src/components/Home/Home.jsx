import { useState , useEffect } from 'react'
import './Home.css'




export const Home = () => {
    const [myName, setMyName] = useState('Lucia')

    useEffect(() =>{
    return () => {}
    }, [])

console.log(myName)
  return (
    <div>
    <h3>{myName}</h3>
    <input type='text' value={myName} onChange={(e) => setMyName(e.target.value)}/>
    </div>
  )
}
