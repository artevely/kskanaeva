import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa"; // иконка Telegram через react-icons

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    { id: 1, title: "Видео #1", src: "/kskanaeva/portfolio1.mp4", poster: "/kskanaeva/poster1.png" },
    { id: 2, title: "Видео #2", src: "/kskanaeva/portfolio2.mp4", poster: "/kskanaeva/poster2.png" },
    { id: 3, title: "Видео #3", src: "/kskanaeva/portfolio3.mp4", poster: "/kskanaeva/poster3.png" },
    { id: 4, title: "Видео #4", src: "/kskanaeva/portfolio4.mp4", poster: "/kskanaeva/poster4.png" }
  ];

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedVideo]);

  return (
    <section id="portfolio" className="py-10 bg-black text-center relative z-1">
      <h3 className="section-heading-b mb-10 text-white">
  Портфолио
</h3>

      {/* Сетка видео */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white/10 h-32 md:h-64 flex items-center justify-center rounded-xl cursor-pointer overflow-hidden shadow-lg hover:scale-105 transition-transform"
            onClick={() => setSelectedVideo(video)}
          >
            <img src={video.poster} alt={video.title} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Ссылка на канал Telegram */}
      <a
  href="https://t.me/kanaevavideo"
  target="_blank"
  rel="noopener noreferrer"
  className="section-subtitle mt-8 inline-flex items-center justify-center gap-3 text-white hover:text-yellow-400 transition-colors"
>
  <FaTelegramPlane className="text-2xl" />
  Еще больше работ в моем канале (жми)
</a>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            {/* Затемнённый фон */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Видео поверх */}
            <div
              className="relative z-[100]"
              onClick={(e) => e.stopPropagation()}
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
