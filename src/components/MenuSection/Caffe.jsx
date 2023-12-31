import React from 'react'
import './Caffe.scss'
import { motion } from 'framer-motion';
const Caffe = ({caffeImg,caffeName,caffeDesc,caffePrice,newInMenu,caffeClassAdi,CaffeDivLine}) => {
  return (
    <div>
        <div className='bir-caffe' data-aos="fade-up" data-aos-duration="1000">

            <div className='row text-white'>
            <div className='col-2 col-md-2 col-lg-3 caffe-img' >
                <motion.img className='one-coffee-img' src={caffeImg} alt="caffe" whileHover={{ scale: 1.2 }}/>
            </div>

            <div className='col-10 col-md-10 col-lg-9'>
                <div className= {`name-price d-flex justify-content-between align-items-baseline ${caffeClassAdi}`}>
                    <h3 className='caffe-name' >{caffeName}</h3>
                    <div className={ ` div-line ${CaffeDivLine}`}></div>
                    <h3 className='caffe-price'>{caffePrice}</h3>
                </div>

                
                <div className='desc-new d-flex justify-content-between'>
                    <span className='caffe-desc' >{caffeDesc}</span>
                    <div >
                        {newInMenu && <span className='caffe-new'>{newInMenu}</span>}
                        

                    </div>
                </div>
            </div>
        </div>
        </div>

        
    </div>
  )
}

export default Caffe