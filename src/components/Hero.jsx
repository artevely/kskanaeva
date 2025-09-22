import React from "react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full" id="home">
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
  );
}
