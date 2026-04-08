"use client";

import { useMemo } from "react";

const REELS = [
  "/images/home-1/floor-nuri.MP4",
  "/images/home-1/FLOUR FOOR BUCHS.mov",
  "/images/home-1/FLOOR FOUR JULI.mov",
  "/images/home-1/geburt.MOV",
  
  "/images/home-1/floo.mov",
];

export default function FloorFourReels() {
  // 🔀 zufällige Auswahl (4 Stück)
  const reels = useMemo(() => {
    return [...REELS].sort(() => 0.5 - Math.random()).slice(0, 4);
  }, []);

  return (
    <section className="ff-reels">
      <div className="ff-reels-grid">
        {reels.map((src, i) => (
          <div key={i} className="ff-reel">
            <video
              src={src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="ff-reel-overlay" />
          </div>
        ))}
      </div>
    </section>
  );
}