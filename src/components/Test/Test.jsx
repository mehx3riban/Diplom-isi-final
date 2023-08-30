import React from 'react'
import { motion } from 'framer-motion';
import './Test.scss';

const Test = () => {
    const containerVariants = {
        square: { borderRadius: '0%', transition: { duration: 0.3 } },
        circle: { borderRadius: '20%', transition: { duration: 0.3 } }
      };
  return (
    <motion.button
    className='square-button'
    whileHover='circle'
    variants={containerVariants}
  >
    Hover Me
  </motion.button>
);
};

export default Test