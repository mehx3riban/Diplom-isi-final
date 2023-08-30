import React from 'react'
import './MainBlogCard.scss'
import {TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTumbler } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
const MainBlogCard = ({mediaSource,mainBlogTitle,mainBlogDesc,mainBlogText,mainBlogJob}) => {
    const isVideo = mediaSource.endsWith('.mp4');
  return (
    <div>
        <div className='main-blog-card'>
            

            <div className='main-blog-content'>
            <div className='main-blog-card__img-div'>
               
            {isVideo ? (
            <video className='main-blog-card__img' muted  autoPlay loop >
              <source src={mediaSource} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            ) : (
            <img className='main-blog-card__img' src={mediaSource} alt='' />
          )}

            </div>
                <h2 className='class-h2 main-blog-card__title'>{mainBlogTitle}</h2>

                <p className='main-blog-card__desc'> {mainBlogDesc} </p>

                <p className='class-p main-blog-card__text'> {mainBlogText} </p>

                <div className='d-flex justify-content-between align-items-center  main-blog-card__bottom  pb-2' >

                    <div className='main-blog-card__desc'><span>{mainBlogJob}</span></div>

                    <div className='main-blog-card__icons'>
                        <span className='main-blog-card__desc'>Share :</span>
                        <a className='main-blog__icon'  href="">
                            <span><TiSocialFacebook size={20}/></span></a>
                        <a className='main-blog__icon' href="">
                            <span ><TiSocialTwitter size={20}/></span></a>
                        <a className='main-blog__icon' href="">
                            <span><TiSocialLinkedin size={20}/></span></a>
                        <a className='main-blog__icon' href="">
                            <span><TiSocialTumbler size={20}/></span></a>
                    </div>
                </div>
            </div>

           
        </div>
    </div>
  )
}

export default MainBlogCard