import React from 'react'
import './Footer.css'
import { TiSocialInstagram } from "react-icons/ti";
import {TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTumbler } from "react-icons/ti";
import { TiSocialVimeo } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import {BsCaretRightFill} from "react-icons/bs"



const Footer = () => {
  return (
    <div className='footerSection '>
        <div className='footer-top'>
            <div className='footerContent row '>
                <div className='footerContent_div1 col-12 col-md-6 col-lg-3'>
                    <h4>OPENING HOURS</h4>
                    <div>
                         <div className=' d-flex justify-content-between align-items-baseline '>
                            <span className='day-name'>Monday</span>
                            <span className='footerBrownLine'></span>
                            <span className='closed'>closed</span>
                        </div>
                        <div className=' d-flex justify-content-between align-items-baseline '>
                            <span className='day-name'>TUESDAY</span>
                            <span className='footerBrownLine'></span>
                            <span className='hours'>9:00 - 22:00</span>
                        </div>
                        <div className=' d-flex justify-content-between align-items-baseline'>
                            <span className='day-name'>WEDNESDAY</span>
                            <span className='footerBrownLine'></span>
                            <span className='hours'>9:00 - 22:00</span>
                        </div>
                        <div className=' d-flex justify-content-between align-items-baseline '>
                            <span className='day-name'>THURSDAY</span>
                            <span className='footerBrownLine'></span>
                            <span className='hours'>9:00 - 22:00</span>
                        </div>
                        <div className=' d-flex justify-content-between align-items-baseline'>
                            <span className='day-name'>FRIDAY *</span>
                            <span className='footerBrownLine'></span>
                            <span className='hours'>9:00 - 1:00</span>
                        </div>
                        <div className=' d-flex justify-content-between align-items-baseline'>
                            <span className='day-name'>SATURDAY *</span>
                            <span className='footerBrownLine'></span>
                            <span className='hours'>12:00 - 01:00</span>
                        </div>
                        <div className=' d-flex justify-content-between align-items-baseline'>
                            <span className='day-name'>SUNDAY </span>
                            <span className='footerBrownLine'></span>
                            <span className='hours'>9:00 - 22:00</span>
                        </div>
                    </div>
                       
                </div>

                <div className='footerContent_div2 col-12 col-md-6 col-lg-3'>
                    <h4>LATEST POSTS</h4>
                    <div className='latest-post'>
                        <div>
                             <a href="" className='latest-post_title'>EXPAND YOUR MIND, CHANGE EVERYTHING</a>
                        </div>
                        
                        <span className='latest-post_date'>14.02.2017</span>
                    </div>
                    <div className='latest-post'>
                       <div>
                            <a href="" className='latest-post_title'>PLACES TO GET LOST</a>
                        </div> 
                        <span className='latest-post_date'>14.02.2017</span>
                    </div>
                    <div className='latest-post'>
                        <div>
                            <a href="" className='latest-post_title'>LEWIS HOWES</a>

                        </div>
                        <span className='latest-post_date'>14.02.2017</span>
                    </div>
                    <div className='latest-post'>
                        <div>
                             <a href="" className='latest-post_title'>ELEVATE YOUR EXPECTATIONS</a>
                        </div>
                        
                        <span className='latest-post_date'>14.02.2017</span>
                    </div>
                    
                    
                </div>
                
                <div className='footerContent_div3 col-12 col-md-6 col-lg-3'>
                    <h4>CONTACT US</h4>
                    <div>
                        <div className='footer-contact__link'>
                            <a href=""  >barista@qodeinteractive.com</a>
                        </div>
                        <div className='footer-contact_link-desc'>
                             <span>1-444-123-4559 <br /> Raymond Boulevard 224, <br /> New York   </span>
                        </div>
                        
                        <h4 className='secondary-h4'>THE LAST STANDARD POST</h4>
                        <div className=' d-flex  '>
                            <input className='footer-contact__input' type="email" placeholder='Your E-mail' />
                            <button className='footer-contact__button'>
                                <BsCaretRightFill/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='footerContent_div4 col-12 col-md-6 col-lg-3' >
                    <h4>OTHER LOCATIONS</h4>
                    <div className='other-location__div  other-location__div1'>
                        <h6>BARISTA COFFEE SHOP</h6>
                        <span>2606 Saints Alley <br /> Tampa, FL 33602</span>
                    </div>
                    <div className='other-location__div'>
                        <h6>BARISTA CAFE</h6>
                        <span>3497 Watson Street <br />Camden, NJ 08102</span>
                    </div>
                </div>

            </div>
        </div>
                

            <div className='footer-bottom '>
                <div className='row d-flex align-items-center'>
                    <div className='col-12 col-md-4 footer-bottom_div1' >
                        <span>© Qode Interactive</span>
                    </div>
                    <div className='col-12 col-md-4 footer-bottom__social '>
                        <a  href="" ><span ><TiSocialInstagram/></span></a>

                        <a  href=""><span ><TiSocialTwitter/></span></a>

                        <a  href=""><span><TiSocialFacebook/></span></a>
                        
                        <a  href=""><span><TiSocialTumbler/></span></a>
                        <a  href=""><span><TiSocialVimeo/></span></a>
                        <a  href=""><span><TiSocialLinkedin/></span></a>

                    </div>
                    <div className='col-12 col-md-4 footer-bottom_div3'>
                        <span>2017 All Rights Reserved</span>
                    </div>
                </div>
                
            </div>

    </div>
  )
}

export default Footer