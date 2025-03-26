import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { products } from "../../assets/product";
import { motion } from "framer-motion";

function ProductSlide() {
  const [active, setActive] = useState(null);
  const swiperRef = useRef(null);

  return (
    <motion.div 
    initial={{y: 100, opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 1.4}}
    viewport={{once: true}}
    className="relative flex justify-center w-full px-4"> {/* Tambahkan relative untuk posisi button */}
      {/* Tombol Navigasi */}
      <motion.button 
        whileTap={{
            scale: 0.6
        }}
        className="absolute cursor-pointer left-0 lg:left-20 top-1/2 -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-md hover:bg-gray-200 transition z-20 text-5xl font-light w-18 outline-none"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        &lt;
      </motion.button>

      <Swiper
        spaceBetween={10} 
        slidesPerView={1} 
        onSlideChange={(cur) => setActive(cur.realIndex)}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 }, // Mobile (1 slide)
          768: { slidesPerView: 2, spaceBetween: 15 }, // Tablet (2 slide)
          1024: { slidesPerView: 3, spaceBetween: 20 }, // Desktop (3 slide)
        }}
        className="w-full max-w-5xl"
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Simpan instance swiper
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="h-[400px] md:h-[480px] w-full flex justify-center items-end relative">
              <div
                className={`relative flex flex-col transition-all duration-300 rounded-2xl shadow-lg hover:shadow-2xl p-6 md:p-8 max-w-xs md:max-w-sm 
                ${active === index 
                  ? "opacity-100 h-[400px] md:h-[450px] w-[85%] md:w-[90%] p-8 md:p-10 bg-white" 
                  : "opacity-70 h-[300px] md:h-[340px] w-[75%] md:w-[70%] bg-white/30"}`}
              >
                {/* Background blur hanya untuk card yang tidak aktif */}
                {active !== index && (
                  <div className="absolute inset-0 bg-white/30 backdrop-blur-md rounded-2xl"></div>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover object-center w-full aspect-[4/5] p-4 md:p-5 rounded-lg bg-slate-300 relative z-10"
                />
                <h3 className={`mt-3 md:mt-4 text-base md:text-lg font-semibold transition-colors duration-300 relative z-10 ${active === index ? "text-gray-800" : "text-white"}`}>
                  {product.product}
                </h3>
                <p className={`text-xs md:text-sm mt-1 md:mt-2 relative z-10 ${active === index ? "text-gray-600" : "text-white"}`}>
                  Rp{(product.price).toLocaleString("id-ID")}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Tombol Navigasi */}
      <motion.button 
        whileTap={{
            scale: 0.6
        }}
        className="absolute right-0 cursor-pointer lg:right-20 top-1/2 -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-md hover:bg-gray-200 transition z-20 text-5xl font-light w-18 outline-none"
        onClick={() => swiperRef.current?.slideNext()}
      >
        &gt;
      </motion.button>
    </motion.div>
  );
}

export default ProductSlide;
