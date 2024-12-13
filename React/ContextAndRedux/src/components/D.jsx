import { useContext } from "react"
import { UserContext } from "../App"

const D = () => {

  const user=useContext(UserContext);

  return (
    <>
      <h1>Inside Component D : {JSON.stringify(user)}</h1>
    </>
  )
}

export default D

// Centeralized 