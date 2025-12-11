import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    { id: 1, title: "Видео #1", src: "/portfolio1.mp4", poster: "/poster1.png" },
    { id: 2, title: "Видео #2", src: "/portfolio2.mp4", poster: "/poster2.png" },
    { id: 3, title: "Видео #3", src: "/portfolio3.mp4", poster: "/poster3.png" },
    { id: 4, title: "Видео #4", src: "/portfolio4.mp4", poster: "/poster4.png" },
    { id: 4, title: "Видео #5", src: "/portfolio5.mp4", poster: "/poster5.png" },
    { id: 4, title: "Видео #6", src: "/portfolio6.mp4", poster: "/poster6.png" },
    { id: 4, title: "Видео #7", src: "/portfolio7.mp4", poster: "/poster7.png" },
    { id: 4, title: "Видео #8", src: "/portfolio8.mp4", poster: "/poster8.png" },
  ];

  useEffect(() => {
    document.body.style.overflow = selectedVideo ? "hidden" : "";
  }, [selectedVideo]);

  return (
    <section id="portfolio" className="py-10" style={{ background: "var(--bg-main)" }}>
      <h3 className="section-heading-b mb-10">Портфолио</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="card h-32 md:h-64 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer"
            onClick={() => setSelectedVideo(video)}
          >
            <img src={video.poster} alt={video.title} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 mb-0 md:mb-4">
        <a
          href="https://t.me/kanaevavideo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg md:text-2xl text-black hover:text-[var(--accent)] transition"
        >
          Еще больше работ в канале (жми)
        </a>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 lightbox-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <div className="relative z-[100]" onClick={(e) => e.stopPropagation()}>
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
