import { createContext } from "react"
// import A from "./components/A"
import Counter from "./redux/Counter";

const user = {
  id: 100,
  name: "Aman Tiwari",
  age: 25
}

const UserContext = createContext();


const App = () => {
  return (
    <>
      <h1 className="bg-red-600">App Component :{JSON.stringify(user)}</h1>

      <Counter/>


      <UserContext.Provider value={user}>

        {/* <A /> wrapping A in provider */}


      </UserContext.Provider>

    </>
  )
}

export default App

export { UserContext }


// 1. Actions
// 2. Reducers
// 3. Store
// 4. Slice
// 5. use of dispatch and select 