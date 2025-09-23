import React from "react";
import { motion } from "framer-motion";

export default function Modal({ modal, closeModal }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeModal}
    >
      <motion.div
        className="relative bg-black/90 text-white rounded-3xl p-10 max-w-lg w-full shadow-2xl"
        initial={{ y: 50, scale: 0.8, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 50, scale: 0.8, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 15,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Крестик закрытия */}
        <button
          className="absolute top-4 right-4 text-white text-3xl"
          onClick={closeModal}
        >
          ✕
        </button>

        {/* Заголовок с золотым сердцем */}
        <h4 className="section-heading flex items-center mb-8 text-2xl font-bold">
          <svg
            className="w-6 h-6 mr-3 animate-pulse"
            viewBox="0 0 24 24"
            fill="gold"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
                     4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 
                     14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                     6.86-8.55 11.54L12 21.35z"/>
          </svg>
          {modal}
        </h4>

        {/* Содержание модального окна */}
        {modal === "Мини-съемка" && (
          <p className="section-subtitle text-white/90 text-lg leading-relaxed mb-4">
            📌 Длительность до 2 часов<br /><br />
            📌 1–2 локации<br /><br />
            📌 Профессиональная цветокоррекция<br /><br />
            📌 Итоговое видео до 2 минут
          </p>
        )}
        {modal === "Полный день" && (
          <p className="section-subtitle text-white/90 text-lg leading-relaxed mb-4">
            📌 Съемка до 10 часов<br /><br />
            📌 Несколько локаций<br /><br />
            📌 Дрон-съемка<br /><br />
            📌 Итоговый фильм 10–15 минут + короткий ролик
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}
