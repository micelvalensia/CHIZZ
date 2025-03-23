import React from 'react'
import { motion } from 'framer-motion'

function Product() {
  return (
    <motion.div
    initial={{y: 110, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{duration: 1.4}}
     className='w-full lg:order-2 lg:h-full lg:w-[60%] lg:self-end p-5'>
        <div className="relative after:content-['🧀'] after:bottom-0 after:right-0 after:absolute lg:after:text-[5rem] h-full flex justify-center lg:justify-start after:text-[3rem]
        before:content-[''] before:absolute lg:before:left-[5%] before:top-[20%] before:bg-[#FFBC0F] lg:before:w-[66%] before:w-[80%] before:h-[70%] lg:before:h-[75%] before:border-[15px] before:border-solid before:border-white before:rounded-full
        ">
            <motion.img 
            initial={{x: 300, scale: 0.2, rotate: '0deg'}}
            animate={{x: 0, scale: 1, rotate: '360deg'}}
            transition={{duration: 3, ease: 'backInOut'}}
            src="./product1.png" className="rotate-[-10deg] lg:w-[75%] w-[100%] h-[95%] lg:h-auto" alt="" />
        </div>
    </motion.div>
  )
}

export default Product
