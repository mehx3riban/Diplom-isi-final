import React,{useState} from 'react';
import './Gallery.scss'
// import { Gallery } from "react-grid-gallery";
import img1 from '../../assets/images/gallery-img/home-1-gallery-1.jpg'
import img2 from '../../assets/images/gallery-img/home-1-gallery-2.jpg'
import img3 from '../../assets/images/gallery-img/home-1-gallery-3-633x633.jpg'
import img4 from '../../assets/images/gallery-img/home-1-gallery-4.jpg'
import img5 from '../../assets/images/gallery-img/home-1-gallery-5-633x633.jpg'
import img6 from '../../assets/images/gallery-img/home-1-gallery-6-500x1000.jpg'
const Gallerysec = () => {


  return (
    <div className='gallery-section' >
       <div className="gallery-container">
      <div className="gallery-item large">
        <img src={img1}  className='img img1' />
        {/* <div className="overlay"></div> */}
      </div>
      <div className="gallery-item">
        <img src={img2}  className='img img2'/>
        <img src={img3} className='img img3' />
      </div>
      <div className="gallery-item res">
        <img src={img4}  className='img img4'/>
        <img src={img5}  className='img img5'/>
      </div>
      <div className="gallery-item big">
        <img src={img6}  className='img img6' />
      </div>
    </div>
    </div>
  )
}

export default Gallerysec