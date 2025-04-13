import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function AboutPic() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Smooth transformations based on scroll
  const transformX = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const transformRotate = useTransform(scrollYProgress, [0, 0.5, 1], ["0deg", "360deg", "0deg"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.3]);

  return (
    <div 
      ref={ref} 
      className="w-full md:w-1/2 md:order-2 flex items-center justify-center relative overflow-hidden py-6 md:py-8 lg:py-10"
    >
      <motion.div
        initial={{ y: 110, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="w-[90%] md:w-[95%] lg:w-full h-full flex relative"
      >
        {/* Increased container size by removing max-width constraint */}
        <div className="relative w-full aspect-square flex items-center justify-center">
          {/* Cheese emoji */}
          <motion.div 
            className="absolute top-0 right-0 text-4xl md:text-5xl lg:text-6xl rotate-180 z-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          >
            🧀
          </motion.div>

          {/* Background circle */}
          <div 
            className="absolute bg-[#FFBC0F] w-[70%] aspect-square 
                      left-[13%] top-[10%] rounded-full 
                      border-[15px] border-solid border-white"
          ></div>

          {/* Image container with fixed aspect ratio */}
          <div className="relative w-full aspect-square flex items-center justify-center">
            <motion.img
              src="./logo.png"
              className="w-[90%] h-[90%] object-contain"
              alt="logo"
              style={{ x: transformX, rotate: transformRotate, scale }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutPic;