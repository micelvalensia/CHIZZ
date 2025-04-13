import React from 'react';
import { motion } from 'framer-motion';

function Product() {
  const containerVariants = {
    hidden: { y: 110, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 1.4 }
    }
  };
  
  const imageVariants = {
    hidden: { x: 300, scale: 0.2, rotate: 0 },
    visible: { 
      x: 0, 
      scale: 1, 
      rotate: 360,
      transition: { duration: 3, ease: "backInOut" }
    }
  };

  return (
    <motion.div
      initial={{ y: 110, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.4 }}
      className='w-full lg:order-2 lg:h-full lg:w-[60%] lg:self-end p-5'
    >
      <div className="relative h-full grid place-content-center lg:justify-start">
        {/* Yellow background circle - now as a real div instead of pseudo-element */}
        <div 
        className="
        absolute 
        top-[10%]
        md:top-[15%]
        left-1/2 -translate-x-1/2 
        lg:left-[7%] lg:translate-x-0

        bg-[#FFBC0F] 
        w-[335px] h-[335px] 
        md:w-[450px] md:h-[450px] 

        border-[15px] border-solid border-white 
        rounded-full 
        -z-10
"
        />
        
        {/* Product image */}
        <motion.img
          initial={{ x: 300, scale: 0.2, rotate: '0deg' }}
          animate={{ x: 0, scale: 1, rotate: '360deg' }}
          transition={{ duration: 3, ease: 'backInOut' }}
          src="./product1.png"
          className="rotate-[-10deg] min-w-[335px] min-h-[375px] relative z-10"
          alt=""
        />
        
        {/* Cheese emoji */}
        <div className="absolute bottom-0 right-0 text-[3rem] lg:text-[5rem]">
          🧀
        </div>
      </div>
    </motion.div>
  );
}

export default Product;