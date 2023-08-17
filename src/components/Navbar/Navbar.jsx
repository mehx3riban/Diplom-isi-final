import React ,{useState} from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'
import {FaBars,FaTimes} from "react-icons/fa"
const Navbar = () => {

 
  return (
    <>
      <nav className='navigation-bar'>
        <Link to='/' className='navbar__logo'>
          <img src={logo} alt="app logo" />
        </Link>

        
      </nav>
    </>
  )
}

export default Navbar