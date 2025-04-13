import React, { useState, useRef, useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { products } from "../../assets/product";
import { motion } from "framer-motion";
import { TypeContext } from "../useContext/TypeContext";

function ProductSlide() {
  const [active, setActive] = useState(0);
  const { type } = useContext(TypeContext);
  const swiperRef = useRef(null);

  // Filter produk berdasarkan type
  const filtered = products.filter((menu) => {
    if (type.toLowerCase() === "all") return true;
    return menu.type === type;
  });

  // Logic untuk kontrol navigasi
  const canSlide = filtered.length > 1;
  const canLoop = filtered.length > 2;
  const canSlideLeft = filtered.length === 2 ? active !== 0 : canLoop;
  const canSlideRight = filtered.length === 2 ? active !== 1 : canLoop;

  // Reset active & arahkan swiper ke awal saat filter berubah
  useEffect(() => {
    setActive(0);
    if (swiperRef.current && canSlide) {
      swiperRef.current.slideToLoop(0);
    }
  }, [type, filtered.length]);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.4 }}
      viewport={{ once: true }}
      className="relative flex justify-center w-full px-4"
    >
      {/* Tombol kiri */}
      <motion.button
        className={`absolute cursor-pointer left-5 lg:left-20 top-1/2 -translate-y-1/2 bg-white p-1 py-2 md:p-3 rounded-full shadow-xl border hover:bg-gray-200 transition z-20 text-3xl md:text-5xl font-bold w-14 md:w-18 outline-none
          ${!canSlideLeft ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={() => canSlideLeft && swiperRef.current?.slidePrev()}
        disabled={!canSlideLeft}
      >
        &lt;
      </motion.button>

      {/* Swiper Carousel */}
      {filtered.length > 0 ? (
        <Swiper
          key={type} // trigger re-render saat ganti kategori
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={(swiper) => setActive(swiper.realIndex)}
          loop={canLoop}
          centeredSlides={true}
          autoplay={
            canLoop ? { delay: 3000, disableOnInteraction: false } : false
          }
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="w-full max-w-5xl"
        >
          {/** Slider yang udah di filter */}
          {filtered.map((product, index) => (
            <SwiperSlide key={product.id}>
              <div className="w-full flex justify-center items-end relative min-h-[400px] md:min-h-[480px]">
                <div
                  className={`relative flex flex-col transition-all duration-300 rounded-2xl shadow-lg hover:shadow-2xl p-4 sm:p-6 md:p-8 max-w-[80%] sm:max-w-xs md:max-w-sm 
                    ${active === index
                      ? "opacity-100 bg-white scale-100"
                      : "opacity-70 bg-white/30 scale-[0.9]"}`}
                >
                  {active !== index && (
                    <div className="absolute inset-0 bg-white/30 backdrop-blur-md rounded-2xl z-0"></div>
                  )}

                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover object-center w-full aspect-[4/5] p-3 sm:p-4 md:p-5 rounded-lg bg-slate-300 relative z-10"
                  />

                  <h3
                    className={`mt-2 sm:mt-3 text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300 relative z-10 ${
                      active === index ? "text-gray-800" : "text-white"
                    }`}
                  >
                    {product.product}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm mt-1 relative z-10 ${
                      active === index ? "text-gray-600" : "text-white"
                    }`}
                  >
                    Rp{product.price.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="text-center text-gray-500 py-10">
          Produk tidak ditemukan.
        </div>
      )}

      {/* Tombol kanan */}
      <motion.button
        className={`absolute cursor-pointer right-5 lg:right-20 top-1/2 -translate-y-1/2 bg-white p-1 py-2 md:p-3 rounded-full shadow-xl border hover:bg-gray-200 transition z-20 text-3xl md:text-5xl font-bold w-14 md:w-18 outline-none
          ${!canSlideRight ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={() => canSlideRight && swiperRef.current?.slideNext()}
        disabled={!canSlideRight}
      >
        &gt;
      </motion.button>
    </motion.div>
  );
}

export default ProductSlide;
