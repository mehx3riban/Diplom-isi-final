import React, { useEffect, useState } from "react";
import logo from "../../assets/images/mobile-menu-logo/logo-1.png";
import logoMain from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { PiShoppingCartThin } from "react-icons/pi";
import { BsSearchHeart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { motion } from 'framer-motion';


const Navbar = () => {

  const {cartTotalQuantity} = useSelector(state => state.cart)

  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);



  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };


    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  


  return (
    <>
      <nav
        className={`navigation-bar ${
          isScrolled || isMobile ? "scrolled " : ""
        }`}
      >
        <div className="nav-container">
          <div className="navbar-logo">
            <NavLink to="/">
              <img src={isScrolled || isMobile ? logo : logoMain} alt="" />
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

            <div className="dropdown">
              <div className="dropdown-title link-item">Pages</div>
              <div className="dropdown-sehifeler  ">
                <ul className="dropdown-items">

                  <li className="dropdown-item" >
                    <NavLink 
                    className="link-item dropdown-item" 
                    to='/about' 
                    onClick={closeMenu}>
                      About Me
                    </NavLink>
                    </li>

                  <li  className="dropdown-item">
                    <NavLink 
                    className="link-item dropdown-item" 
                    to='/contact' 
                    onClick={closeMenu}>
                      Contact Us
                    </NavLink>
                  </li>
                  
                  <li className="dropdown-item">
                    <NavLink 
                    className="link-item dropdown-item" 
                    to='/our-team' 
                    onClick={closeMenu}>
                      Meet Our Team 
                    </NavLink>
                  </li>
                  
                  <li className="dropdown-item">
                    <NavLink 
                    className="link-item dropdown-item" 
                    to='/our-process' 
                    onClick={closeMenu}>
                      Our Process
                    </NavLink>
                  </li>

                  <li className="dropdown-item">
                    <NavLink 
                    className="link-item dropdown-item" 
                    to='/gallery' 
                    onClick={closeMenu}>
                      gallery
                    </NavLink>
                  </li>
                </ul>

              </div>
            </div>

            <NavLink to="/blog" className="link-item" onClick={closeMenu}>
              Blog
            </NavLink>

            <NavLink to="/shop" className="link-item" onClick={closeMenu}>
              Shop
            </NavLink>

            <NavLink to="/shopcart" className="cart-container" onClick={closeMenu}>
              <div className="cart-container">
                <div className="cart-counter">{cartTotalQuantity}</div>
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

export default Navbar;
