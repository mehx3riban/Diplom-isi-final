import React from 'react'
import './Button.css'
const Button = ({classAdi,icindekiYazi}) => {
  return (
    <button className={`button ${classAdi}`} >
        {icindekiYazi && <a href="#">{icindekiYazi}</a> }
    </button>
  )
}

export default Button