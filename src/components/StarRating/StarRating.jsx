import React from 'react'
import './StarRating.scss'
import {FaStar,FaStarHalfAlt} from 'react-icons/fa'
import {AiOutlineStar} from 'react-icons/ai'

const StarRating = ({rating}) => {

   const ratingStars = Array.from({ length: 5 }, (element, index) => {
        let number = index + 0.5;

        return <span key={index}>
            {
                rating >= index + 1
                 ? <FaStar className='star' /> 
                 : rating >= number 
                 ? <FaStarHalfAlt className='star'/>
                 : <AiOutlineStar className='star'/>
            }
        </span>
    });


  return (
    <div className='rating-stars'>
        {ratingStars}
    </div>
  )
}

export default StarRating