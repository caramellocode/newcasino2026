"use client";

import { useMemo } from "react";

const REELS = [
  "/videos/500K.mov",
  "/videos/v2.MOV",
  "/videos/juni.mov",
  "/videos/v3.MP4",
  "/videos/v4.mov",
  
];

export default function PokerroomReels() {
  const reels = useMemo(() => {
    return [...REELS].sort(() => 0.5 - Math.random()).slice(0, 4);
  }, []);

  return (
    <section className="pr-reels">
      <div className="pr-reels-grid">
        {reels.map((src, i) => (
          <div key={i} className="pr-reel">
            <video
              src={src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="pr-reel-overlay" />
          </div>
        ))}
      </div>
    </section>
  );
}