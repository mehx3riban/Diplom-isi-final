import React from 'react'
import { Link } from 'react-router-dom'
const GalleryCard = ({galleryCardImg,galleryCardName,galleryCardText,galleryLink,galleryh2Link}) => {
  return (
    <div className="col-12 col-md-6  pb-2">
        <div className="kart pt-3">
                <div className="gallery-card">
                   
                    <Link to={galleryLink}>
                      <div className='gallery-card__img-div'>

                         <img className='gallery-card__img' src={galleryCardImg} alt="" />

                      </div>

                    </Link>
                    
                </div>
                <h2 className='class-h2 gallery-card__name pt-1 '>
                    <Link to={galleryh2Link}>{galleryCardName}</Link>
                </h2>
                <p className='gallery-card__text'> {galleryCardText}</p>
        </div>
    </div>
  )
}

export default GalleryCard