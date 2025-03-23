import React from 'react'
import { motion } from 'framer-motion'

function AboutUs() {
  return (
    <div className='w-full md:w-1/2 md:order-1 flex flex-col justify-center px-5'>
        <motion.h2
        initial={{y: 100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 1}}
        className='text-[#564C3F] font-extrabold text-3xl mb-10 text-center md:text-left md:text-4xl lg:text-6xl leading-relaxed'>LEARN MORE <br /> ABOUT US</motion.h2>
        <motion.p           
        initial={{y: 100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 1}}
        className='text-[#564C3F] font-bold md:text-[16px] text-center md:text-left lg:text-xl lg:pr-10 leading-8'>
          Moochiz is committed to providing 
          high-quality cheeses with rich flavors 
          and smooth textures. From cheddar 
          to mozzarella, we craft every block 
          with care to bring you the best 
          taste experience.
        </motion.p>
    </div>
  )
}

export default AboutUs
