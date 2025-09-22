import React from "react";
import { motion } from "framer-motion";

export default function Modal({ modal, closeModal }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white text-black rounded-2xl p-8 max-w-lg w-full relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <button onClick={closeModal} className="absolute top-4 right-4 text-xl">
          ✕
        </button>
        <h4 className="text-2xl font-bold mb-4">{modal}</h4>
        {modal === "Мини-съемка" && (
          <p>
            📌 Длительность до 2 часов,<br />
            📌 1–2 локации,<br />
            📌 Профессиональная цветокоррекция,<br />
            📌 Итоговое видео до 2 минут.
          </p>
        )}
        {modal === "Полный день" && (
          <p>
            📌 Съемка до 10 часов,<br />
            📌 Несколько локаций,<br />
            📌 Дрон-съемка,<br />
            📌 Итоговый фильм 10–15 минут + короткий ролик.
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}
