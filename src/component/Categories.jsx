import React from 'react'
import ProductSlide from './ProductSlider/ProductSlide'
import List from './ProductSlider/List'
import { motion } from 'framer-motion'

function Categories() {
  return (
  <div className='bg-[#FFBC0F]' id='categories'>
    <div className="flex-1 w-[90%] mx-auto flex justify-center items-center flex-col p-5 min-h-screen pt-24">
      <motion.h2
      initial={{y: 100, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 1}} 
      viewport={{once: true}}
      className='bg-white text-[#FFBC0F] font-semibold text-3xl px-10 py-3 md:px-24 md:py-6 text-center rounded-lg md:text-6xl'>CATEGORIES</motion.h2>
      <motion.h2
      initial={{y: 100, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 1}} 
      viewport={{once: true}}
      className='mt-5 text-white text-3xl md:text-6xl font-bold'>PRODUCT</motion.h2>
      <List />
      <ProductSlide />
      <button className='mt-10 bg-white text-[#FFBC0F] px-6 py-2 rounded-2xl text-xl cursor-pointer'>See More</button>
    </div>
  </div>
  )
}

export default Categories
