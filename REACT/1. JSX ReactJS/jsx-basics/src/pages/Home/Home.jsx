import { Content } from "../../components/index"
import { useState } from "react"




export const Home = () => {
    const [dismount, setDismount] = useState(false)
    // const [changeValue, setChangeValue] = useState(false)


  return (
    <div>
        {!dismount && (<Content/>)}
        <button onClick={() => setDismount(value => !value)}>{ dismount == true ? "Salúdame" : dismount == false ? "Quítame" : null}</button>
        {/* <button onClick={() => setChangeValue((value) => !value)}>
        {" "}
      </button> */}
    </div>
  )
}

