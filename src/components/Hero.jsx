import React from "react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full" id="home">
      {/* Видео для десктопа */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      >
        <source src="/kskanaeva/hero.mp4" type="video/mp4" />
      </video>

      {/* Видео для мобилок */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover block md:hidden"
      >
        <source src="/kskanaeva/hero-sm.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
    </section>
  );
}
