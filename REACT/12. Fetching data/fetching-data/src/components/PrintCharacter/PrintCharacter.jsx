import './PrintCharacter.css'
import { useCounter, useFetch } from '../../hooks'
import { Loading, Character } from '../index'

export const PrintCharacter = () => {
    const { counter, next, previous, reset } = useCounter()
    const { data, isLoading, hasError } = useFetch(`https://api.attackontitanapi.com/characters/${counter}`)

    const { name, img, species, status, occupation } = !!data && data
    console.log(data)

  if (hasError){
    return (
        <div className='alert error-alert'>{hasError.toString()}</div>
    )

  }else{
    if(isLoading){
        return <Loading/>
    }else{
        <>
        
        <Character name={name} img={img} species={species} status={status} occupation={occupation}/>
        { counter > 1 && <button className='previous-btn btn' onClick={()=> previous()}>PREVIOUS</button>}
        { counter != 1 && <button className='reset-btn btn' onClick={()=> reset()}>RESET</button>}
        <button className='next-btn btn' onClick={()=> next()}>NEXT</button>


        </>
    }


  }

}

