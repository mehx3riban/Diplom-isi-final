import React from 'react'
import './Caffe.scss'
const Caffe = ({caffeImg,caffeName,caffeDesc,caffePrice,newInMenu}) => {
  return (
    <div>
        <div className='bir-caffe'>

            <div className='row text-white'>
            <div className='col-4 col-md-2 col-lg-3 caffe-img' >
                <img src={caffeImg} alt="caffe" />
            </div>

            <div className='col-8 col-md-10 col-lg-9'>
                <div className='name-price d-flex justify-content-between align-items-baseline '>
                    <h3 className='caffe-name'>{caffeName}</h3>
                    <div className='div-line  '></div>
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