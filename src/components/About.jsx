import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center text-center bg-black"
    >
      <img
        src="/kskanaeva/about-bg-4.jpg"
        alt="About background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
<div className="relative z-10 max-w-2xl p-6 opacity-70">
  <h3 className="section-heading-b mb-4 text-white">
  Обо мне
</h3>

  <p className="section-subtitle \text-lg leading-relaxed">
    Я — контент-мейкер, создающий эмоциональные, захватывающие 
    и динамичные ролики. Помогаю клиентам сохранить лучшие
    моменты их жизни в стильных видео-историях.
  </p>
</div>
    </section>
  );
}


