import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { id: "home", label: "Домой" },
  { id: "about", label: "Обо мне" },
  { id: "price", label: "Стоимость работ" },
  { id: "portfolio", label: "Портфолио" },
  { id: "reviews", label: "Обратная связь" },
  { id: "contacts", label: "Соц сети" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
        <div className="flex justify-between items-center px-6 py-3 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg">
          <h1 
  className="section-heading cursor-pointer text-white"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  Ksenia Kanaeva
</h1>

          <nav className="hidden lg:flex space-x-6 text-white text-base">
  {menuItems.map(({ id, label }) => (
    <button
      key={id}
      onClick={() => scrollToSection(id)}
      className="section-subtitle hover:text-yellow-400 transition-colors"
    >
      {label}
    </button>
  ))}
</nav>

          {/* Простая бургер-кнопка (одна полоска с hover-эффектом) */}
          <button
            className="lg:hidden relative w-8 h-8 flex items-center justify-center z-50 group"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-7 h-0.5 bg-white rounded-full transition-all duration-200 group-hover:w-8" />
          </button>
        </div>
      </header>

      {/* Мобильное меню */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Затемнённый фон */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Меню */}
<motion.div
  className="fixed inset-0 flex flex-col items-center justify-start gap-8 pt-24 p-8 z-50 bg-white/10 backdrop-blur-lg rounded-3xl"
  initial={{ opacity: 0, y: -50 }} // меню целиком немного выше при появлении
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -50 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  {menuItems.map((item, index) => (
    <motion.button
      key={item.id}
      onClick={() => scrollToSection(item.id)}
      initial={{ opacity: 0, y: -80, rotate: -10 }} // элементы появляются сверху
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{
        delay: 0.12 * index,
        type: "spring",
        stiffness: 140,
        damping: 14,
      }}
      className="text-3xl text-white hover:text-yellow-400 section-subtitle-2 flex items-center gap-3"
    >
      {item.label.toUpperCase()}
    </motion.button>
  ))}

  <motion.button
    onClick={() => setMenuOpen(false)}
    className="absolute top-6 right-6 text-3xl text-white"
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.95 }}
  >
    ✕
  </motion.button>
</motion.div>


          </>
        )}
      </AnimatePresence>
    </>
  );
}
