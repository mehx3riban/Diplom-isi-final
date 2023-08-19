import React ,{useState} from 'react'
import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
// import { NavNavLink } from 'react-router-dom'
import './Navbar.css'
// import Dropdown from './Dropdown'
import {FaBars,FaTimes} from "react-icons/fa"
const Navbar = () => {

 
  return (
    <>
      <nav className='navigation-bar'>
        
      <div className="navbar-logo">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      
        <div className="navbar-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/reservation">Reservation</NavLink>
          <NavLink to="/pages">Pages</NavLink>
          <NavLink to="/contact">Blog</NavLink>
          <NavLink to="/shop">Shop</NavLink>
        </div>
      
      

        
      </nav>
    </>
  )
}

export default Navbar