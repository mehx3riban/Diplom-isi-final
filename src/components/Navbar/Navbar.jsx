import React, { useEffect, useState } from "react";
import logo from "../../assets/images/mobile-menu-logo/logo-1.png";
import logoMain from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { PiShoppingCartThin } from "react-icons/pi";
import { BsSearchHeart } from "react-icons/bs";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navigation-bar ${isScrolled ? "scrolled " : ""}`}>
        <div className="nav-container">
          <div className="navbar-logo">
            <NavLink to="/">
              <img src={isScrolled ? logo : logoMain} alt="" />
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

            <NavLink to="/shopcart" className="cart-container" onClick={closeMenu}>
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

export default Navbar;
