import { useState } from 'react';
import { H1, PrintArray } from '../src/components/index'
import { Home } from '../src/pages/index'
import './App.css'
import { arrayExample } from "../src/data/arrayExample.data"


const  App = ()=> {
  const [count, setCount] = useState(0)

  return (
    <>
    {/*  2. SALUDO  */ }

    {/* <H1/> */}
{/*   
    <div>
    {console.log(arrayExample)}
      {arrayExample.map((item) => (
        <PrintArray name={item.name} age={item.age} key={item.id} />
      ))}
     
    </div> */}
<Home/>

    </>
  )
}

export default App
