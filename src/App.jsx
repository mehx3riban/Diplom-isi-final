import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import'aos/dist/aos.css'
import './App.css'


import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"


import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer/Footer';
import BookingSection from './components/Booking.jsx/Booking'
import CoffeeMachine from './components/CoffeeMachines/CoffeeMachines';
import Menu from './components/MenuSection/Menu';
import Gallery from './components/Gallery-section/Gallery';
import VerticalSwiper from './components/VerticalSwiper/VerticalSwiper';
import Home from './pages/Home/Home';
import OurMenu from './pages/OurMenu-page/OurMenu';
import Contact from './pages/Contact-Page/Contact';
import MeetOurTeam from './pages/MeetOurTeam-Page/MeetOurTeam';
import NotFound from './pages/NotFound-Page/NotFound';
import AboutMe from './pages/AboutMe-Page/AboutMe';
import GalleryPage from './pages/Gallery-Page/GalleryPage';
import ShopCart from './pages/ShopCart-Page/ShopCart';
import ShopPage from './pages/Shop-Page/ShopPage';
import WhatWeOffer from './pages/OurProcess-Page/OurProcess';
import OurProcess from './pages/OurProcess-Page/OurProcess';
import ComingSoon from './pages/ComingSoon-Page/ComingSoon';
import Reservation from './pages/Reservation-Page/Reservation';
import Blog from './pages/Blog-Page/Blog'
import BackToTop from './components/BackToTop/BackToTop';

function App() {

  useEffect(() => {
    AOS.init({
      duration : 2000,
      once: true 
    })
  }, []);

  
  return (
    
    <Router>
      <ToastContainer toastStyle={{ backgroundColor: "#fff" }}/>
        <Navbar/>
      <Routes>
        {/* <Route path='/' element={<Home/>} />
        <Route path='*' element={<div><NotFound/></div>} />
        <Route path='/menu' element={<OurMenu/>} />
        <Route path='/reservation' element={<Reservation/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/gallery' element={<GalleryPage/>} />
        <Route path='/shopcart' element={<ShopCart/>} />
        <Route path='/our-process' element={<OurProcess/>} />
        <Route path='/shop' element={<ShopPage/>} /> */}
        {/* <Route path='/products/:id' element={<Details/>} /> */}

        
      </Routes>


      <Blog/>
      {/* <ComingSoon/> */}
      {/* <Contact/> */}
      {/* / <ShopPage/> */}
      {/* <OurProcess/> */}
      {/* <Home/> */}
      {/* <GalleryPage/> */}
      <BackToTop/>
      <Footer/>

    </Router>

    
  )
}

export default App
