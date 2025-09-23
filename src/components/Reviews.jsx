import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion, AnimatePresence } from "framer-motion";

export default function Reviews() {
  const [selectedReview, setSelectedReview] = useState(null);

  const reviews = [
    "/kskanaeva/reviews/review1.png",
    "/kskanaeva/reviews/review2.png",
    "/kskanaeva/reviews/review3.png",
    "/kskanaeva/reviews/review4.png",
    "/kskanaeva/reviews/review5.png",
    "/kskanaeva/reviews/review6.png",
    "/kskanaeva/reviews/review7.png",
  ];

  // блокировка скролла при открытом отзыве
  useEffect(() => {
    if (selectedReview) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedReview]);

  return (
    <section id="reviews" className="py-20 bg-gray-950 text-center relative">
      <h3 className="section-heading-b mb-10 text-white">Отзывы</h3>

      <Swiper
  spaceBetween={20}
  slidesPerView={1}
  loop={true}
  className="max-w-5xl mx-auto px-4 overflow-hidden"
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
  {reviews.map((src, i) => (
    <SwiperSlide
      key={i}
      className="flex items-center justify-center bg-white/10 rounded-xl cursor-pointer overflow-hidden
                 h-24 sm:h-36 md:h-48"
      onClick={() => setSelectedReview(src)}
    >
      <img
        src={src}
        alt={`Отзыв ${i + 1}`}
        className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform"
      />
    </SwiperSlide>
  ))}
</Swiper>



      {/* Lightbox для отзыва */}
      <AnimatePresence>
        {selectedReview && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedReview(null)}
          >
            {/* затемнённый фон */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* картинка */}
            <div
              className="relative z-10 max-w-3xl w-full flex justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-white text-3xl z-20"
                onClick={() => setSelectedReview(null)}
              >
                ✕
              </button>
              <img
                src={selectedReview}
                alt="Отзыв"
                className="rounded-lg max-h-[80vh] w-full object-contain shadow-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
