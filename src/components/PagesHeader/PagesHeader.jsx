import React from 'react'
import { Parallax } from 'react-parallax';
import Typed from 'react-typed';
import './Header.css'

const PagesHeader = ({headerImg,headerText ,strength}) => {
  return (
    <div className=' headerClass'>
        <Parallax className='headerClass'   bgImage={headerImg} strength={strength}>
          <div className='header-content'>
                <Typed className='header-content_title'
                strings={[
                    headerText,
                    ]}
                    typeSpeed={70}
                    backSpeed={40}
                    
                    loop >
                    
                </Typed>
            </div>
            {/* <div >
              <h2>{headerText}</h2>
            </div> */}
        </Parallax>

    </div>
  )
}

export default PagesHeader