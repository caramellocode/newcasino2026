"use client";

import { useState } from "react";
import FloorFourIntro from "./FloorFourIntro";

export default function FloorFourHero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      {!showVideo && (
        <FloorFourIntro onFinish={() => setShowVideo(true)} />
      )}

      <section className="ff-hero relative h-[85vh] overflow-hidden bg-black">
        {showVideo && (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/images/home-1/floorneu.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        )}

        <div className="absolute inset-0 bg-black/45 z-10" />

        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-[#DEBF64] tracking-tight">
            FLOOR FOUR
          </h1>

          <p className="mt-4 text-sm md:text-base tracking-[0.3em] uppercase text-[#FFF2B0]">
            Cocktails · Skyline · Casino Lifestyle
          </p>
        </div>
      </section>
    </>
  );
}