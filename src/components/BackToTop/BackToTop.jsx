import React, { useEffect, useState } from "react";
import './BackToTop.scss'
import { FaArrowUp } from 'react-icons/fa';


const BackToTop = () => {

  
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const visibility = () => {
            if (window.pageYOffset > 250) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', visibility);

        return () => window.removeEventListener('scroll', visibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({top: 0, left:0, behavior: 'smooth' });
    };

  return (
    
    <div >
       {isVisible && (
                <button className="back-to-top"
                onClick={scrollToTop}>
                    <FaArrowUp className="back-to-top__icon" />
                </button>
            )}

    </div>
  
  )
};

export default BackToTop