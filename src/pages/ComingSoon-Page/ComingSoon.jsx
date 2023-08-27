import React from 'react'
import './ComingSoon.scss'

import comingSoonLogo from '../../assets/images/coming-soon-img/coming-soon-img-2.png'
import CountDown from './CountDown'

const ComingSoon = () => {
  return (
    <div className='coming-soon'>
        <div className='coming-soon__content d-flex flex-column justify-content-center align-items-center'>
            <img className='coming-soon__content_img' src={comingSoonLogo} alt="" />
            <h1 className='coming-soon__title'>OPENING SOON!</h1>
            <div className='coming-soon__divider'></div>
            <CountDown/>
        </div>
    </div>
  )
}

export default ComingSoon