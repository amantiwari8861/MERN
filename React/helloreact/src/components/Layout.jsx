import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Counter from "../learn/Counter"
import User from "../learn/User"

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    {/* <Counter/> */}
    {/* <User/> */}
    {/* <Navbar/>
    <Navbar/>
    <Navbar/>
    <Navbar/>
    <Navbar/> */}
    </>
  )
}

export default Layout
