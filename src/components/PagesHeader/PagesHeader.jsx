import React from 'react'
import { Parallax } from 'react-parallax';
import Typed from 'react-typed';
import './Header.css'
// import { Parallax ,ParallaxLayer } from '@react-spring/parallax';

const PagesHeader = ({headerImg,headerText}) => {
  return (
    <div className=' headerClass'>
        <Parallax className='headerClass'   bgImage={headerImg} strength={300}>
          {/* <div>
                <Typed
                    strings={['Here you can find anything']}
                    typeSpeed={40}
                />
                <br/>
 
                <Typed
                strings={[
                    'Search for products',
                    'Search for categories',
                    'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input type="text"/>
                </Typed>
            </div> */}
            <div className='header-content'>
              <h2>{headerText}</h2>
            </div>
        </Parallax>

        
        {/* <div className='header-content'>
          <h2>{headerText}</h2>
        </div> */}
    </div>
  )
}

export default PagesHeader