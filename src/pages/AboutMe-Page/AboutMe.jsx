import React,{useEffect} from 'react'
import './AboutMe.scss'
import PagesHeader from '../../components/PagesHeader/PagesHeader'
import aboutMeImg from '../../assets/images/headers-images/Team-title-area-parallax-img-2.jpg'
import aboutMeLeftImg from '../../assets/images/about-me-imgs/About-img-1.png'

import { TiSocialInstagram } from "react-icons/ti";
import {TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTumbler } from "react-icons/ti";
import Test from '../../components/Test/Test'

const AboutMe = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className='about-me-section'>

        <PagesHeader classAdiTitle='header-content_title-33' classAdi='header-content-45' headerImg={aboutMeImg} headerText='ABOUT ME' strength='200' />

        <div className='about-me-content'>
            <div className='row d-flex align-items-center'>

                <div className='about-left-side col-12 col-lg-6'>
                    <img src={aboutMeLeftImg} alt="" />
                </div>

                <div className='about-right-side col-12 col-lg-6'>
                <h2 className='class-h2 about-h2'>FEDERICO HICKMAN</h2>
                <p className='about-right-p'>
                As a coffee aficionado, my journey began with a single cup of
                inspiration. From that moment, I dedicated myself to mastering
                the craft of brewing. With each pour, I strive to deliver a
                symphony of flavors that captivates and elevates the senses.
                Guided by passion and an unwavering commitment, my goal is to
                share the art of coffee with enthusiasts around the world.
                </p>

                <div className='about-me-quote-div'>
                <blockquote className='about-me-quote'>
                    "Coffee is more than a beverage; it's a connection between
                    cultures and a celebration of craftsmanship. Every sip offers a
                    glimpse into a world of flavor and warmth."
                </blockquote>
                </div>

                <p className='about-right-p'>
                Beyond the aroma and taste, coffee represents a journey through
                time and geography. It's a medium that transcends borders,
                bringing people together through shared moments of enjoyment. In
                my coffee shop, I curate an experience that blends tradition and
                innovation, offering patrons an opportunity to explore the rich
                tapestry of coffee's history with every cup.
                </p>

                    <div className='about-me-social '>
                        <a  href="" className='about-me-social-a'  ><span ><TiSocialInstagram/></span></a>

                        <a  href="" className='about-me-social-a'><span ><TiSocialTwitter/></span></a>

                        <a  href="" className='about-me-social-a'><span><TiSocialFacebook/></span></a>

                        <a  href="" className='about-me-social-a'><span><TiSocialTumbler/></span></a>
                    </div>
                </div>

            </div>

        </div>


    </div>
  )
}

export default AboutMe