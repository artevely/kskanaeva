import React from "react";
import { motion } from "framer-motion";

export default function Price({ openModal }) {
  const priceItems = [
    { title: "Несвадьбы", price: "*" },
    { title: "Банкет", price: "20000 ₽" },
    { title: "Полный день", price: "25000 ₽" },
  ];

  return (
    <section id="price" className="py-20" style={{ background: "var(--bg-main)" }}>
      <h3 className="section-heading-b mb-10">Стоимость работ</h3>

      <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto px-6">
        {priceItems.map(({ title, price }) => (
          <motion.div
            key={title}
            whileHover={{ scale: 1.03 }}
            className="card p-8 cursor-pointer"
            onClick={() => openModal(title)}
          >
            <h4 className="text-xl font-semibold text-black">{title}</h4>
            <p className="text-[var(--text-muted)] mt-2">{price}</p>
            <p className="text-sm text-[var(--accent)] mt-1">Подробнее</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
