import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    { id: 1, title: "Видео #1", src: "/portfolio1.MOV", poster: "/poster1.jpg" },
    { id: 2, title: "Видео #2", src: "/portfolio2.MOV", poster: "/poster2.jpg" },
  ];

  // Блокировка скролла при открытом видео
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden"; // запрещаем прокрутку
    } else {
      document.body.style.overflow = ""; // возвращаем нормальный скролл
    }

    // Очистка при размонтировании
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedVideo]);

  return (
    <section id="portfolio" className="py-20 bg-black text-center min-h-screen relative z-1">
      <h3 className="text-3xl font-bold italic mb-10">Портфолио</h3>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white/10 h-64 flex items-center justify-center rounded-xl cursor-pointer overflow-hidden shadow-lg hover:scale-105 transition-transform"
            onClick={() => setSelectedVideo(video)}
          >
            <img src={video.poster} alt={video.title} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
<AnimatePresence>
  {selectedVideo && (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedVideo(null)} // клик на фон закрывает
    >
      {/* Затемнённый фон */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Видео поверх */}
      <div
        className="relative z-[100]"
        onClick={(e) => e.stopPropagation()} // клик на видео не закрывает
      >
        <button
          className="absolute top-0 right-0 text-white text-3xl p-2 z-[110]"
          onClick={() => setSelectedVideo(null)}
        >
          ✕
        </button>

        <video
          src={selectedVideo.src}
          poster={selectedVideo.poster}
          controls
          autoPlay
          className="max-w-full max-h-[80vh] rounded-lg shadow-2xl"
        />
      </div>
    </motion.div>
  )}
</AnimatePresence>


    </section>
  );
}
