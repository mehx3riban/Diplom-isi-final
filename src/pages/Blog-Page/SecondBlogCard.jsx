import React from 'react'
import './Blog.scss'
import {TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTumbler } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
const SecondBlogCard = ({cardDesc,cardTitle,pplName,cardJob}) => {
  return (

    <div className='second-blog'>
        <p className='second-blog__desc'>{cardDesc}</p>
        <div className='second-blog__titles'>
            <h2 className='class-h2 second-blog__title'>{cardTitle}</h2>
            <h4 className='second-blog__name'>{pplName}</h4>
        </div>
        

    
        <div className=' d-flex justify-content-between align-items-center  second-blog-card__bottom ' >

            <div className='second-blog-card__desc'><span>{cardJob}</span></div>

            <div className='second-blog-card__icons'>
                <span className='second-blog-card__desc'>Share :</span>
                <a className='second-blog__icon'  href="">
                    <span><TiSocialFacebook size={20}/></span></a>
                <a className='second-blog__icon' href="">
                    <span ><TiSocialTwitter size={20}/></span></a>
                <a className='second-blog__icon' href="">
                    <span><TiSocialLinkedin size={20}/></span></a>
                <a className='second-blog__icon' href="">
                    <span><TiSocialTumbler size={20}/></span></a>
            </div>
        
        </div>
    </div>
  )
}

export default SecondBlogCard