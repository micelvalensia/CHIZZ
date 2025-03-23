import React from 'react'
import {motion} from 'framer-motion'

function Cheddar() {
  return (
    <div className='w-[95%] mx-auto'>
        <motion.h1 
        initial={{y: 100, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 1}}
        className={`lg:text-[120px] text-6xl relative text-transparent text-stroke inline-block px-5 font-extrabold before:content-['CHEDDAR_MINI'] before:absolute before:top-[6px] min-[512px]:before:left-[24px] lg:before:top-[10px] lg:before:left-[28px] before:left-0 before:text-[#564C3F]`}
        >CHEDDAR MINI
        </motion.h1>
    </div>  
  )
}

export default Cheddar
