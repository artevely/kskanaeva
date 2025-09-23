import React from "react";
import { motion } from "framer-motion";

export default function Price({ openModal }) {
  const priceItems = [
    { title: "Несвадьбы", price: "*" },
    { title: "Банкет", price: "17000 ₽/день" },
    { title: "Полный день", price: "22000 ₽/день" }
  ];

  return (
    <section id="price" className="py-20 bg-gray-950 text-center">
      <h3 className="section-heading-b mb-10 text-white">
        Стоимость работы
      </h3>

      <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto px-6 section-subtitle">
        {priceItems.map(({ title, price }) => (
          <motion.div
            key={title}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 p-8 rounded-2xl cursor-pointer relative"
            onClick={() => openModal(title)}
          >
            <h4 className="mb-2 text-white">{title}</h4>
            <p className="text-gray-300 mt-2">{price}</p>
            <p className="text-sm text-gray-300 mt-1">Подробнее</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

