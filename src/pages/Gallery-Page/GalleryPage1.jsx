import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const IndexPage = () =>  {
   const elementRef = useRef(null)
   const q = gsap.utils.selector(elementRef)

    useEffect(() => {
      let tl = gsap.timeline(
        { 
          scrollTrigger: {
            trigger: q(".scrollDist"),
            start: "top top",
            end: "bottom center",
            scrub: true, // scrub: 1
            markers: true
          }
        }
      );

      tl
        .fromTo(
          q(".header"),
          { y: 0, opacity: 1 },
          { y: -100, opacity: 0 }
        )
        .fromTo(
          ".button_field",
          { y: 0 },
          { y: -50 }
        );
    }, [])

    return (
      <div ref={elementRef}>
        <div className='scrollDist'></div>
        <header className='header'>
          
        </header>
        <button className='button_field'>button</button>
      </div>
    )
}

export default IndexPage