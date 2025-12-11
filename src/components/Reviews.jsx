import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, FreeMode } from "swiper/modules";
import "swiper/css";
import { motion, AnimatePresence } from "framer-motion";

export default function Reviews() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const reviews = [
    "/reviews/review1.png",
    "/reviews/review2.png",
    "/reviews/review3.png",
    "/reviews/review4.png",
    "/reviews/review5.png",
    "/reviews/review6.png",
    "/reviews/review7.png",
    "/reviews/review8.png",
  ];

  // Блокируем скролл страницы при открытии отзыва
  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "";
  }, [selectedIndex]);

  return (
    <section id="reviews" className="p-5 pb-20 md:pt-20" style={{ background: "var(--bg-main)" }}>
      <h3 className="section-heading-b mb-10">Обратная связь</h3>

      {/* Основной слайдер */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        freeMode={true}
        loop={false}
        centeredSlides={false}
        modules={[FreeMode]}
        className="max-w-5xl mx-auto px-4 overflow-hidden"
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((src, i) => (
          <SwiperSlide
            key={i}
            onClick={() => setSelectedIndex(i)}
            className="cursor-pointer group"
          >
            <div className="bg-white rounded-xl overflow-hidden h-24 sm:h-36 md:h-48 border border-black/10 shadow-sm group-hover:shadow-xl transition-all duration-600 group-hover:scale-[1.03]">
              <img src={src} alt={`Review ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Модалка */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              className="relative z-10 max-w-3xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Крест (скрыт на мобильных) */}
              <button
                className="
                  absolute top-4 right-4 
                  hidden md:flex
                  text-black bg-white 
                  rounded-full w-10 h-10 
                  items-center justify-center 
                  text-2xl shadow-lg 
                  hover:bg-neutral-200 
                  transition z-20
                "
                onClick={() => setSelectedIndex(null)}
              >
                ✕
              </button>

              {/* Слайдер внутри модалки */}
              <Swiper
                modules={[Keyboard]}
                keyboard={{ enabled: true }}
                initialSlide={selectedIndex}
                onSlideChange={(swiper) => setSelectedIndex(swiper.realIndex)}
                key={selectedIndex}
              >
                {reviews.map((src, i) => (
                  <SwiperSlide key={i} className="flex items-center justify-center">
                    <motion.img
                      src={src}
                      alt={`Review ${i + 1}`}
                      className="rounded-lg max-h-[80vh] w-full object-contain shadow-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
