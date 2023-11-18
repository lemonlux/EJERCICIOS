import { useEffect, useState } from "react"



export const useFetch = (url) =>{

    const [state, setState] = useState({
        data: null,
        isLoading: null,
        hasError: null,
    })

     const getFetch = async () =>{
        setState({ ...state, isLoading: true })

        try {
            const res = await fetch(url)
            
            if(!res.ok){
                throw new Error(`Error ${res} ${res.status}`)
            } else{
                 const dataJson = await res.json()

                setState({ ...state, data: dataJson, isLoading: false })
            }


        } catch (error) {
            setState({ ...state, isLoading: false, hasError: error })
        }
    }

    useEffect(()=>{
        getFetch()
    },[url])

    return{
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        state,
    }


}