import React from "react";

export default function About() {
  return (
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
  );
}
