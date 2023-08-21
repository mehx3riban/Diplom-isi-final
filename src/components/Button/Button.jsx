import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom';
const Button = ({classAdi,icindekiYazi,to}) => {
  return (
    <Link to={to}>

      <button className={`button ${classAdi}`}  >
          {icindekiYazi && <a href="#">{icindekiYazi}</a> }
      </button>
    </Link>
    
  )
}

export default Button