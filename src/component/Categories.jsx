import React from 'react'
import ProductSlide from './ProductSlider/ProductSlide'
import List from './ProductSlider/List'
import { motion } from 'framer-motion'
import Layout from './Layout/Layout'

function Categories() {
  return (
  <div className='bg-[#FFBC0F] pb-5'>
    <Layout id={'categories'}>
      <motion.h2
      initial={{y: 100, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 1}} 
      viewport={{once: true}}
      className='bg-white text-[#FFBC0F] inline-block font-semibold text-3xl px-10 py-3 md:px-24 md:py-6 text-center rounded-lg md:text-6xl'>CATEGORIES</motion.h2>
      <motion.h2
      initial={{y: 100, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 1}} 
      viewport={{once: true}}
      className='mt-5 text-white text-3xl md:text-6xl font-bold'>PRODUCT</motion.h2>
        <List />
        <ProductSlide />
      <motion.button
      initial={{y: 100, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 1}} 
      viewport={{once: true}}
      className='mt-10 bg-white text-[#FFBC0F] px-6 py-2 md:px-8 md:py-4 rounded-2xl text-xl lg:text-2xl cursor-pointer'>See More</motion.button>
      </Layout>
  </div>
  )
}

export default Categories
