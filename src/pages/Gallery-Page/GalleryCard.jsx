import React from 'react'
import { Link } from 'react-router-dom'
const GalleryCard = ({galleryCardImg,galleryCardName,galleryCardText,galleryLink,galleryh2Link}) => {
  return (
    <div className="col-12 col-md-6">
        <div className="kart pt-3">
                <div className="kart-image opacity__img">
                   
                    <Link to={galleryLink}>

                        <img src={galleryCardImg} alt="" />

                    </Link>
                    
                </div>
                <h2 className='class-h2 gallery-card-name pt-1 pb-1'>
                    <Link to={galleryh2Link}>{galleryCardName}</Link>
                </h2>
                <p className=''> {galleryCardText}</p>
        </div>
    </div>
  )
}

export default GalleryCard