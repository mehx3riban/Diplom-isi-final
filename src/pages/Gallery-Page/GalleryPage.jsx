import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './GalleryPage.css'
import axios from 'axios'
import GalleryCard from './GalleryCard'
import PagesHeader from '../../components/PagesHeader/PagesHeader'
import galleryHeaderImg from '../../assets/images/headers-images/Contact-title.jpg'
import NavbarWhite from '../../components/Navbar/NavbarWhite'

const GalleryPage = () => {
  const [gelenMelumat , setGelenMelumat] = useState(null)

  useEffect(()=>{
    axios.get ('/src/json/Gallery.json')
    .then (melumat=>setGelenMelumat(melumat.data))
  },[])

  return (
  <>
    <NavbarWhite/>
     {/* <PagesHeader headerImg={galleryHeaderImg} headerText='Barista Gallery' strength='200' /> */}
     <div className=" gallery-header ">
          <h2 className=' gallery-header__title '>Barista Gallery</h2>
          <div className='gallery-header__span '>
            <span>
              <Link to='/' className='gallery-header__span' >Barista</Link> / Standard Two Columns
            </span>
          </div>
        </div>

    <div className='gallery-page'>

        <div className="container">
          <div className="row">
            {gelenMelumat && 
              gelenMelumat.map((birMelumat) => (
                <GalleryCard
                
                  galleryCardImg={birMelumat.GalleryImg}
                  galleryCardName={birMelumat.GalleryName}
                  galleryCardText={birMelumat.GalleryText}
                />

              ))}
              
          </div>
        </div>
      
    </div>

  </>
  )
}

export default GalleryPage