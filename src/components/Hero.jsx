import React from "react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full" id="home">
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

      <div className="absolute inset-0 bg-[rgba(247,243,239,0.1)] flex items-center justify-center">
      </div>
    </section>
  );
}
