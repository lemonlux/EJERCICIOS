import { Content } from "../../components/index"
import { useState } from "react"




export const Home = () => {
    const [dismount, setDismount] = useState(false)
    // const [changeValue, setChangeValue] = useState(false)


  return (
    <div>
        {!dismount && (<Content/>)}
        <button onClick={() => setDismount(value => !value)}>lo pongo o lo quito {dismount.toString()}</button>
        {/* <button onClick={() => setChangeValue((value) => !value)}>
        {" "}
      </button> */}
    </div>
  )
}

