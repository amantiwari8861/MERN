import { createBrowserRouter, Outlet } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"



const App = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default App

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  }
])
export { router }