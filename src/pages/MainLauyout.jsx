import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
const MainLauyout = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  )
}

export default MainLauyout
