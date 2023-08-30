import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import'aos/dist/aos.css'
import './App.css'


import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"


import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import OurMenu from './pages/OurMenu-page/OurMenu';
import Contact from './pages/Contact-Page/Contact';
import MeetOurTeam from './pages/MeetOurTeam-Page/MeetOurTeam';
import NotFound from './pages/NotFound-Page/NotFound';
import AboutMe from './pages/AboutMe-Page/AboutMe';
import GalleryPage from './pages/Gallery-Page/GalleryPage';
import ShopCart from './pages/ShopCart-Page/ShopCart';
import ShopPage from './pages/Shop-Page/ShopPage';
import OurProcess from './pages/OurProcess-Page/OurProcess';
import ComingSoon from './pages/ComingSoon-Page/ComingSoon';
import Reservation from './pages/Reservation-Page/Reservation';
import Blog from './pages/Blog-Page/Blog'
import BackToTop from './components/BackToTop/BackToTop';
import BlogPage2 from './pages/Blog-Page/BlogPage2';
import { BounceLoader } from 'react-spinners'

// import Application from './components/Application/Application';

function App() {

  useEffect(() => {
    AOS.init({
      duration : 2000,
      once: true 
    })
  }, []);

  // const [loading, setLoading] = useState(false)
  // useEffect(() =>{
  //   setLoading(true)
  //   setTimeout(() =>{
  //   setLoading(false)
  //   }, 2000)
  // }, [])
  const [loading, setLoading] = useState(false)
  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
    setLoading(false)
    }, 2000)
  }, [])
  
  return (
    
 

    <div >

      {
        loading ? (
        <div className='pg-load'>
        <BounceLoader
        color={"#30271C"}
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={1.2}
        />
      </div>
      )
        :(
          <Router>

    

        <ToastContainer toastStyle={{ backgroundColor: "#fff" }}/>
          <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='*' element={<div><NotFound/></div>} />
          <Route path='/menu' element={<OurMenu/>} />
          <Route path='/reservation' element={<Reservation/>} />
          <Route path='/about' element={<AboutMe/>} />
          <Route path='/our-team' element={<MeetOurTeam/>} />
          <Route path='/our-process' element={<OurProcess/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/gallery' element={<GalleryPage/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/blog2' element={<BlogPage2/>} />
          <Route path='/shop' element={<ShopPage/>} />
          <Route path='/shopcart' element={<ShopCart/>} />
          <Route path='/comingsoon' element={<ComingSoon/>} />

          {/* <Route path='/products/:id' element={<Details/>} /> */}

          
        </Routes>

        <BackToTop/>
        <Footer/>

            </Router>
          )
      }

    </div>

    
  )
}

export default App
