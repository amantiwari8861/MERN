import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Counter from "../learn/Counter"

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Counter/>
    {/* <Navbar/>
    <Navbar/>
    <Navbar/>
    <Navbar/>
    <Navbar/> */}
    </>
  )
}

export default Layout
