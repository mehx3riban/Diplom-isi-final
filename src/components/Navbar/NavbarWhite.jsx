import React, { useState,useEffect,useRef } from "react";
import logo from "../../assets/images/mobile-menu-logo/logo-1.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { PiShoppingCartThin } from "react-icons/pi";
import { BsSearchHeart } from "react-icons/bs";


const NavbarWhite = () => {
  const [showMenu, setShowMenu] = useState(false);


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };
// --------------------

const [isHidden, setIsHidden] = useState(false);
let lastScrollY = 0;

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  if (lastScrollY < currentScrollY) {
    setIsHidden(true);
  } else {
    setIsHidden(false);
  }
  lastScrollY = currentScrollY;
};

useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  

  return (
    <>
    
      <nav className={`navigation-bar-white ${isHidden ? 'nav--hidden' : ''}`}>
        <div className="nav-container">
          <div className="navbar-logo">
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>

          <div className={`navbar-links ${showMenu ? "show" : ""}`}>
            <NavLink to="/" className="link-item" onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink to="/menu" className="link-item" onClick={closeMenu}>
              Menu
            </NavLink>

            <NavLink
              to="/reservation"
              className="link-item"
              onClick={closeMenu}
            >
              Reservation
            </NavLink>

            <NavLink to="/pages" className="link-item" onClick={closeMenu}>
              Pages
            </NavLink>

            <NavLink to="/contact" className="link-item" onClick={closeMenu}>
              Blog
            </NavLink>

            <NavLink to="/shop" className="link-item" onClick={closeMenu}>
              Shop
            </NavLink>

            <NavLink to="/shop" className="cart-container" onClick={closeMenu}>
              <div className="cart-container">
                <div className="cart-counter">0</div>
                <div className="shopping-card">
                  <PiShoppingCartThin className="shop-icon" size={25} />
                </div>
              </div>
            </NavLink>

            <NavLink className="navbar-search">
              <div className="navbar-search">
                <BsSearchHeart size={20} />
              </div>
            </NavLink>
          </div>

          <div className="navbar-mobile-icon" onClick={toggleMenu}>
            <FaBars />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarWhite;
