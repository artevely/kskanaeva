import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-gray-950 text-center">
      <h3 className="text-3xl font-bold italic mb-10">Отзывы</h3>
      <Swiper spaceBetween={20} slidesPerView={1} className="max-w-2xl">
        {[1, 2, 3].map((i) => (
          <SwiperSlide
            key={i}
            className="flex items-center justify-center h-80 bg-white/10 rounded-xl"
          >
            <p>Скриншот отзыва #{i}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
