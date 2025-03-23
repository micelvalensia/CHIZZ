import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function AboutPic() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"], // Mulai saat elemen masuk, selesai saat di tengah
  });

  // Pergerakan lebih smooth & lambat
  const transformX = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const transformRotate = useTransform(scrollYProgress, [0, 0.5, 1], ["0deg", "360deg", "0deg"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.3]);

  return (
    <div ref={ref} className="w-full md:w-1/2 md:order-2 flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ y: 110, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }} // Bikin fade-in lebih lambat
        className="w-full h-full flex justify-center items-center relative"
      >
        <div className="relative h-full w-full flex items-center justify-center">
          {/* Emoji 🧀 di belakang gambar */}
          <motion.div 
            className="absolute top-0 right-0 text-[3rem] lg:text-[5rem] rotate-180"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }} // Lambatin munculnya emoji
          >
            🧀
          </motion.div>

          {/* Elemen background lingkaran */}
          <div className="absolute bg-[#FFBC0F] w-[76%] h-[70%] left-[35px] top-0 lg:top-[50px] lg:left-[65px] rounded-full border-[15px] border-solid border-white"></div>

          {/* Gambar */}
          <motion.img
            src="./logo.png"
            className="w-full h-full relative"
            alt="logo"
            style={{ x: transformX, rotate: transformRotate, scale }}
            transition={{ duration: 3, ease: "easeInOut" }} // Pergerakan lebih lambat
          />
        </div>
      </motion.div>
    </div>
  );
}

export default AboutPic;
