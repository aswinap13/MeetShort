import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './css/Navbar.css'

function NavigationBar() {
  return (
    <div className='navbar'>
        <div className='logo'><img src={require("../assets/logo.png")}></img></div>
        <div className='list'>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/About">About</Link>
            <Link className='link' to="/How">How</Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default NavigationBar