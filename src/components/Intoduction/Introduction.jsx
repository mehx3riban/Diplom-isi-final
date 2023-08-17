import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay,  Navigation } from 'swiper/modules';
import './Introduction.css'

import Slider from './Slider';

import sliderOverlayImg1 from "../../assets/images/intro-images/intro-slider-overlay/slider-overlay-img1.png"
import sliderOverlayImg2 from "../../assets/images/intro-images/intro-slider-overlay/slider-overlay-img2.png"
import sliderOverlayImg3 from "../../assets/images/intro-images/intro-slider-overlay/slider-overlay-img3.png"


import bgImage1 from "../../assets/images/intro-images/home-1-slider.jpg"
import bgImage2 from "../../assets/images/intro-images/home-1-slider-img-2.jpg"
import bgImage3 from "../../assets/images/intro-images/home-1-slider-4.jpg"


const Introduction = () => {
  
  return (
    <div>
      
    <Swiper
        loop
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 9500,
          disableOnInteraction: false,
        }}
        navigation={
          true
        }
        modules={[Autoplay,  Navigation]}
        className="mySwiper"
      >

        <SwiperSlide>

          <Slider bgImage={bgImage1} sliderIcon={sliderOverlayImg1} sliderTitle='importance of coffee' sliderText='Lorem ipsum dolor sit amet, nec ne oficiis electram. Dolore nominati vim et.' />
          
        </SwiperSlide>

        <SwiperSlide>

         <Slider bgImage={bgImage2} sliderIcon={sliderOverlayImg2} sliderTitle='the home of coffee' sliderText='Lorem ipsum dolor sit amet, nec ne oficiis electram. Dolore nominati vim et.' />
         
        </SwiperSlide>

        <SwiperSlide>

         <Slider bgImage={bgImage3} sliderIcon={sliderOverlayImg3} sliderTitle='brewed to perfection' sliderText='Lorem ipsum dolor sit amet, nec ne oficiis electram. Dolore nominati vim et.' />
        </SwiperSlide>
         
      </Swiper>
        

          {/* <SectionHeading  classAdih2='dark' classAdih4='light' sectionHeadingh2='COFFEE BUILD YOUR BASE.' sectionHeadingh4='What Happens Here' classAdiDivider='divider-dark'  /> */}

    </div>
  )}

export default Introduction