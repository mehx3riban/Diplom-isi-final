import React ,{useState} from 'react'
import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
// import Dropdown from './Dropdown'
import {FaBars,FaTimes} from "react-icons/fa"
import { LiaShoppingCartSolid } from 'react-icons/lia';
import {BsSearchHeart} from 'react-icons/bs'
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
          <NavLink to="/shop">
          <div class="cart-container">
            <div class="cart-counter">0</div>
              <div className='shopping-card'>
                <LiaShoppingCartSolid size={30}/>

              </div>
            </div>
          </NavLink>
          <NavLink>
            <div className='navbar-search'>
              <BsSearchHeart size={20}/>

            </div>
          </NavLink>

          <div className='navbar-mobile-icon'>
          <FaBars/>
        </div>
        </div>
      
        

        
      </nav>
    </>
  )
}

export default Navbar