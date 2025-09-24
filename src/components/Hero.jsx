import React from "react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full" id="home">
      {/* Видео для десктопа */}
      <video
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.png" 
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Видео для мобилок */}
      <video
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-sm-poster.png" 
        className="absolute inset-0 w-full h-full object-cover block md:hidden"
      >
        <source src="/hero-sm.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h2 className="section-heading-b text-center opacity-50">
          Ваша любовь моими глазами
        </h2>
      </div>

      {/* Overlay */}
    </section>
  );
}
