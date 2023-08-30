import React from 'react';
import './VerticalSwiper.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Pagination ,Autoplay,EffectFade} from 'swiper/modules';
import swiperImg1 from '../../assets/images/vertical-swiper-imgs/swiper-img.jpg'
import swiperImg2 from '../../assets/images/vertical-swiper-imgs/swiper-img2.jpg'
import swiperImg3 from '../../assets/images/vertical-swiper-imgs/swiper-img-3.jpg'
import {ImArrowRight2} from 'react-icons/im'

const VerticalSwiper = () => {
  return (
    <div className='vertical-swiper'>
        <div className='row d-flex align-items-center'>
            <div className='vertical-left col-12 col-lg-6 '>
                <div className='left-content'>
                    <h2 className='vertical-title'>TRY THE BEST <br/> COFFEE IN THE CITY</h2>
                    <p className='vertical-text'>Alienum phaedrum torquatos nec eu, vis detraxit <br/> periculis ex, nihil expetendis in mei. Mei an at <br/> dictum lacu pericula uni euripidis.</p>
                    <a href="" className='vertical-link'>
                        <span>Read more</span>
                        <div className='link-icon'>
                        <ImArrowRight2/> 
                        </div>
                    </a>
                </div>
                
            </div>
            <div className='vertical-right col-12 col-lg-6 p-0'>
            <Swiper
            effect="fade"
            style={{
                "--swiper-pagination-color": "var(--main-color)",
                "--swiper-pagination-bullet-inactive-color": "#fff",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "11px",
                "--swiper-pagination-bullet-vertical-gap":"15px" 
              }}
            loop
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
           direction={'vertical'}
           pagination={{
             clickable: true,
           }}
           modules={[Pagination ,Autoplay,EffectFade]}
           className="mySwiper"
        
      >

    <SwiperSlide><img className='vertical-slider-img' src={swiperImg1} alt="" /></SwiperSlide>
    <SwiperSlide><img  className='vertical-slider-img' src={swiperImg2} alt="" /></SwiperSlide>
    <SwiperSlide><img  className='vertical-slider-img' src={swiperImg3} alt="" /></SwiperSlide>
      </Swiper>
            </div>
        </div>
    </div>
  )
}

export default VerticalSwiper