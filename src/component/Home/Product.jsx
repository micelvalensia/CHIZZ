import React from 'react'
import { motion } from 'framer-motion'

function Product() {
  return (
    // Animasi masuk ke layar
    <motion.div
      initial={{ y: 110, opacity: 0 }} // Muncul dari bawah dengan opacity 0
      animate={{ y: 0, opacity: 1 }}   // Bergerak ke posisi awal dengan opacity 1
      transition={{ duration: 1.4 }}   // Durasi animasi masuk
      className='w-full lg:order-2 lg:h-full lg:w-[60%] lg:self-end p-5' // Posisi kontainer utama
    >
      <div
        className="relative 
          after:content-['🧀'] after:bottom-0 after:right-0 after:absolute after:text-[3rem] lg:after:text-[5rem] 
          h-full flex justify-center lg:justify-start 
          before:content-[''] before:absolute before:top-[20%] lg:before:left-[5%] 
          before:bg-[#FFBC0F] before:w-[80%] lg:before:w-[66%] before:h-[70%] lg:before:h-[75%] 
          before:border-[15px] before:border-solid before:border-white before:rounded-full"
      >
        {/* Gambar produk dengan animasi saat muncul dan saat hover */}
        <motion.img 
          initial={{ x: 300, scale: 0.2, rotate: '0deg' }} // Masuk dari kanan, kecil, tidak berputar
          animate={{ x: 0, scale: 1, rotate: '360deg' }}    // Ke tengah, skala normal, putaran penuh
          transition={{ duration: 3, ease: 'backInOut' }}   // Durasi animasi awal 3 detik
          whileHover={{                                     // Hover animation
            scale: 1.1,
            rotate: '355deg',
            transition: { duration: 0.3, ease: 'easeInOut' } // Hover lebih cepat
          }}
          src="./product1.png"
          className="rotate-[-10deg] lg:w-[75%] w-[100%] h-[95%] lg:h-auto" // Styling gambar produk
          alt=""
        />
      </div>
    </motion.div>
  )
}

export default Product
