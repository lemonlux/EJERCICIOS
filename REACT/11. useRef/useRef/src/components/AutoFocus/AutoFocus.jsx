import { useRef } from 'react'
import './AutoFocus.css'
import { useEffect } from 'react'

export const AutoFocus = () => {    //basicamente que cuando entres a la pagina la casilla de user este en focus
    const focusInputRef = useRef()
    
    useEffect(()=>{
        if (focusInputRef.current) focusInputRef.current.focus()
    }, [])

  return (
    <div>
        <form>
            <div>
                <label>User</label>
                <input type='text' id='user' ref={focusInputRef}/>
            </div>
        </form>
        <form>
            <div>
                 <label>Password</label>
                <input type='text' id='pass'/>
            </div>
        </form>
    </div>
  )
}

