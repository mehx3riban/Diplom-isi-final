import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './GalleryPage.css'
import axios from 'axios'
import GalleryCard from './GalleryCard'
import PagesHeader from '../../components/PagesHeader/PagesHeader'
import galleryHeaderImg from '../../assets/images/headers-images/Contact-title.jpg'
// import Navbar from '../../components/navbar/Navbar'



const GalleryPage = () => {
  const [gelenMelumat , setGelenMelumat] = useState(null)

  useEffect(()=>{
    axios.get ('/src/json/Gallery.json')
    .then (melumat=>setGelenMelumat(melumat.data))
  },[])

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <>

     <PagesHeader classAdiTitle='header-content_title-33' classAdi='header-content-45' headerImg={galleryHeaderImg} headerText='Barista Gallery' strength='200' />

    <div className='gallery-page  '>

      
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

  </>
  )
}

export default GalleryPage