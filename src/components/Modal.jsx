import React from "react";
import { motion } from "framer-motion";

export default function Modal({ modal, closeModal }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50 p-4 lightbox-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeModal}
    >
      <motion.div
        className="relative bg-white rounded-3xl p-10 max-w-lg w-full shadow-2xl text-black"
        initial={{ y: 50, scale: 0.92, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 50, scale: 0.92, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="absolute top-4 right-4 text-3xl" onClick={closeModal}>
          ✕
        </button>

        <h4 className="section-heading flex items-center mb-6 text-2xl font-bold">
          <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="#d4a373" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          {modal}
        </h4>

        {modal === "Несвадьбы" && <p className="text-lg">• Любые виды сьемок 
        <br />• Контент для бизнеса
        <br />• Индивидуальная съемка
        <br />• Семейная съемка
        <br /><br /> * Прайс и условия обговариваются индивидуально</p>}
        {modal === "Банкет" && (
          <p className="text-lg leading-relaxed">
            • Съемка ~ 6 часов<br />
            • Тизер (1–2 минуты)<br />
            • Видео с церемонии и первого танца<br />
            • Видео по референсам 3–5 шт<br />
            • Все исходники
          </p>
        )}
        {modal === "Полный день" && (
          <p className="text-lg leading-relaxed">
            • Съемка ~ 10 часов<br />
            • Тизер 1–2 минуты<br />
            • 2–3 коротких ролика (до 15 сек)<br />
            • Видео ЗАГС, прогулка, церемония<br />
            • Все исходники
            <br /><br />
            * Фильм на 5-10 минут + 6000 руб 
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}
