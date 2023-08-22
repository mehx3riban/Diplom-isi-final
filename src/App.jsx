import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import'aos/dist/aos.css'
import './App.css'


import { BrowserRouter as Router , Routes, Route } from "react-router-dom";


import Navbar from './components/navbar/Navbar'
import Introduction from './components/intoduction/Introduction';
import Footer from './components/Footer/Footer';
import BookingSection from './components/Booking.jsx/Booking'
import NumberCards from './components/NumberCards/NumberCards';
import Application from './components/Application/Application';
import CoffeeMachine from './components/CoffeeMachines/CoffeeMachines';
import Menu from './components/MenuSection/Menu';
import DescriptionCards from './components/DescriptionCards/DescriptionCards';
import Gallery from './components/Gallery-section/Gallery';
import VerticalSwiper from './components/VerticalSwiper/VerticalSwiper';
import Home from './pages/Home/Home';
import OurMenu from './pages/OurMenu-page/OurMenu';
import Contact from './pages/Contact-Page/Contact';
import MeetOurTeam from './pages/MeetOurTeam-Page/MeetOurTeam';
import NotFound from './pages/NotFound-Page/NotFound';
import AboutMe from './pages/AboutMe-Page/AboutMe';
import GalleryPage from './pages/Gallery-Page/GalleryPage';

function App() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    })
  }, []);

  return (
    
    <Router>
      {/* <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/menu' element={<OurMenu/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/gallery' element={<GalleryPage/>} />
        
      </Routes> */}

      {/* <Home/> */}
      <GalleryPage/>
      <Footer/>

    </Router>


    // <BrowserRouter>

    //   <Routes>      

    //     <Route path='/' element={<Home/>}/>
    //     <Route path='Contact' element={<Contact/>}/>
    //     <Route path='*' element={<NotFound />}/>
    //     <Route path='/courses-list-4-columns' element={<CoursesList />}/>

    //   </Routes>

    // </BrowserRouter>
    
  )
}

export default App
