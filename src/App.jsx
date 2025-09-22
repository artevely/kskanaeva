import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import "swiper/css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState(null);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const openModal = (type) => setModal(type);
  const closeModal = () => setModal(null);

  return (
    <div className="font-sans text-white bg-black">
      {/* Навигация */}
<header className="fixed w-full top-0 z-50">
  <div className="max-w-6xl mx-auto flex justify-between items-center p-4 bg-black/50 backdrop-blur-md border-b border-white/10">
    {/* Логотип */}
    <h1
      className="text-2xl italic font-bold cursor-pointer text-white"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      Ksenia Kanaeva
    </h1>

    {/* Десктоп меню */}
    <nav className="hidden md:flex space-x-6 text-lg text-white">
      {["home", "about", "price", "portfolio", "reviews", "contacts"].map((id) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className="hover:text-gray-300 transition"
        >
          {id.toUpperCase()}
        </button>
      ))}
    </nav>

    {/* Бургер для мобилки */}
    <button
      className="md:hidden relative w-8 h-6 flex flex-col justify-between items-center p-1 z-50"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <motion.span
        className="block h-0.5 w-full bg-white"
        animate={menuOpen ? { rotate: 45, y: 5, borderRadius: "50%" } : { rotate: 0, y: 0, borderRadius: "0%" }}
      />
      <motion.span
        className="block h-0.5 w-full bg-white"
        animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
      />
      <motion.span
        className="block h-0.5 w-full bg-white"
        animate={menuOpen ? { rotate: -45, y: -5, borderRadius: "50%" } : { rotate: 0, y: 0, borderRadius: "0%" }}
      />
    </button>
  </div>

  {/* Фон-затемнение и меню */}
  <AnimatePresence>
    {menuOpen && (
      <motion.div
        className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center gap-8 p-6 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {["home", "about", "price", "portfolio", "reviews", "contacts"].map((id, index) => (
          <motion.button
            key={id}
            onClick={() => {
              scrollToSection(id);
              setMenuOpen(false); // закрытие и убираем затемнение
            }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
            className="text-2xl text-white hover:text-gray-300 font-serif italic"
          >
            {id.toUpperCase()}
          </motion.button>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
</header>


      {/* Hero */}
      <section className="relative h-screen w-full" id="hero">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-bold italic tracking-wide text-center opacity-50">
            Capturing Cinematic Moments
          </h2>
        </div>
      </section>

      {/* Обо мне */}
      <section
        id="about"
        className="relative min-h-screen flex items-center justify-center text-center bg-black"
      >
        <img
          src="/about-bg.jpg"
          alt="About background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 max-w-2xl p-6">
          <h3 className="text-3xl font-bold italic mb-4 opacity-70">Обо мне</h3>
          <p className="text-lg leading-relaxed opacity-70">
            Я — видеограф, создающий эмоциональные и кинематографичные ролики.
            Вдохновляюсь искусством кино и помогаю клиентам сохранить лучшие
            моменты их жизни в стильных видео-историях.
          </p>
        </div>
      </section>

{/* Прайс */}
<section id="price" className="py-20 bg-gray-950 text-center">
  <h3 className="text-3xl font-bold italic mb-10">Прайс</h3>
  <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-6">
    {["Мини-съемка", "Полный день"].map((title) => (
      <motion.div
        key={title}
        whileHover={{ scale: 1.05 }}
        className="bg-white/10 p-8 rounded-2xl cursor-pointer relative"
        onClick={() => openModal(title)}
      >
        <h4 className="text-2xl mb-2">{title}</h4>

        {/* Цена */}
        <p className="text-gray-300 mt-2">
          {title === "Мини-съемка" ? "4000 ₽/час" : "30 000 ₽/день"}
        </p>

        <p className="text-sm text-gray-300 mt-1">Подробнее</p>
      </motion.div>
    ))}
  </div>
</section>

      {/* Portfolio */}
      <section
        id="portfolio"
        className="py-20 bg-black text-center min-h-screen"
      >
        <h3 className="text-3xl font-bold italic mb-10">Портфолио</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6">
          <div className="bg-white/10 h-64 flex items-center justify-center rounded-xl">
            Видео #1
          </div>
          <div className="bg-white/10 h-64 flex items-center justify-center rounded-xl">
            Видео #2
          </div>
        </div>
      </section>

      {/* Отзывы */}
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


{/* Контакты */}
<section id="contacts" className="py-20 bg-black text-center">
  <h3 className="text-3xl font-bold italic mb-10">Контакты</h3>
  <div className="flex flex-col items-center gap-6 text-lg">
    <a
      href="https://t.me/kskanaeva"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 hover:text-gray-300 transition italic"
    >
      <FaTelegramPlane size={24} />
      tg: kskanaeva
    </a>
    <a
      href="https://www.instagram.com/kskanaeva/"
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 hover:text-gray-300 transition italic"
    >
      <FaInstagram size={24} />
      inst: kskanaeva
    </a>
  </div>
</section>


      {/* Modal */}
      <AnimatePresence>
        {modal && (
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
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-xl"
              >
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
        )}
      </AnimatePresence>
    </div>
  );
}
