import React from 'react'
import { Parallax } from 'react-parallax';
import Typed from 'react-typed';
import './Header.css'

const PagesHeader = ({classAdi,headerImg,headerText ,strength,classAdiTitle}) => {
  return (
    <div className=' headerClass'>
        <Parallax className='headerClass'   bgImage={headerImg} strength={strength}>
          <div className={`header-content ${classAdi}`}>
                <Typed className={`header-content_title ${classAdiTitle}`}
                strings={[
                    headerText,
                    ]}
                    typeSpeed={80}
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