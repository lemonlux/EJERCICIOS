import { useEffect } from "react";
import { H1 } from "../H1/H1";

export const Content = (props) =>{

    const { state } = props

    useEffect(() => {
      console.log("me monto o desmonto")
    }, [state])
    

 return <div><H1/></div>
}