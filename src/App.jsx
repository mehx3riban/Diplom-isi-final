import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import './mixin.scss'
// import './App.scss'
import'aos/dist/aos.css'
import './App.css'


import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from './components/navbar/Navbar'
import Introduction from './components/intoduction/Introduction';
import Footer from './components/Footer/Footer';
import BookingSection from './components/Booking.jsx/BookingSection'
import { BrowserRouter as Router } from 'react-router-dom';
import NumberCards from './components/NumberCards/NumberCards';
import Application from './components/Application/Application';
import CoffeeMachine from './components/CoffeeMachines/CoffeeMachines';
import Menu from './components/MenuSection/Menu';
import DescriptionCards from './components/DescriptionCards/DescriptionCards';
import Gallery from './components/Gallery-section/Gallery';
import VerticalSwiper from './components/VerticalSwiper/VerticalSwiper';
import Home from './pages/Home/Home';

function App() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <Router>

      <Home/>

    </Router>
    
  )
}

export default App
