import React from "react";
import { motion } from "framer-motion";

export default function Price({ openModal }) {
  return (
    <section id="price" className="py-20 bg-gray-950 text-center">
      <h3 className="section-heading-b mb-10 text-white">
  Price
</h3>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-6">
        {["Мини-съемка", "Полный день"].map((title) => (
          <motion.div
            key={title}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 p-8 rounded-2xl cursor-pointer relative"
            onClick={() => openModal(title)}
          >
            <h4 className="section-subtitle mb-2">
  {title}
</h4>
            <p className="text-gray-300 mt-2">
              {title === "Мини-съемка" ? "4000 ₽/час" : "30 000 ₽/день"}
            </p>
            <p className="text-sm text-gray-300 mt-1">Подробнее</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
