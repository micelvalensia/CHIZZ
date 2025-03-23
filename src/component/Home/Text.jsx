import React from 'react'
import { motion } from 'framer-motion'

function Text() {
  return (
    <motion.div
    initial={{y: 130, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{duration: 1.9}}
     className='w-full lg:h-full mt-5 lg:mt-0 lg:order-1 lg:pt-40 lg:justify-around gap-5 lg:w-[40%] flex flex-col px-8 font-semibold'>
        <p className='text-lg lg:text-[28px] lg:text-left leading-relaxed text-[#564C3F]'>
            Premium mini cheddar blocks with
            a rich, creamy taste. Perfect for 
            snacking, cooking, or pairing with
            your favorite dishes!
        </p>
        <motion.button 
        whileHover={{
            scale: 1.2,
            rotate: '2deg',
            backgroundColor: '#9c7000',
            color: '#ffffff'
        }}
        whileTap={{
            scale: 0.9,
        }}
        className=' bg-[#FFBC0F] p-4 px-8 text-[#564C3F] rounded-xl text-xl lg:text-2xl lg:self-start font-bold cursor-pointer'>GET YOUR CHEESE</motion.button>
    </motion.div>
  )
}

export default Text
