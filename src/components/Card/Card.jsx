import React from 'react'
import './Card.scss'
import {ImArrowRight2} from 'react-icons/im'
import { Link } from 'react-router-dom'
const Card = ({cardImg ,cardNumber,cardDescription, cardTitle,h3classi, cardText,to }) => {
  return (
  <div className='col-12 col-md-4' data-aos="zoom-in-up">
    <div className='kart' >

    <div className="kart-img">
        <img src={cardImg}  alt="..."/>
      </div>

      <div className="kart-content">

      <div className={cardNumber && 'd-flex align-items-baseline'}>
        <h5 className="kart-num"> {cardNumber && <span>{cardNumber} </span> } </h5>

        <h3 className={`kart-title ${h3classi}`}>{cardTitle}</h3>
      </div>


        <h6 className='kart-description'> {cardDescription && <span>{cardDescription}</span>}</h6>

        <p className="kart-text">{cardText}</p>


        <Link to={to} className='links'>
          <span>Read more</span>
          <div className='link-icon'>
            <ImArrowRight2/> 
            </div>
        </Link>

        
    </div>
    </div>
      
  </div>
  )
}

export default Card