"use client";

import { useEffect, useState } from "react";

/* ==============================
   IMAGE SOURCES (JPG)
================================= */

const IMAGES = {
  casino: [
    "/images/home-1/cc1.jpeg",
    "/images/home-1/cc2.jpg",
    "/images/home-1/cc3.jpg",
    "/images/home-1/cc4.jpg",
    "/images/home-1/cc5.jpg",
    "/images/home-1/cc6.jpg",
    "/images/home-1/cc7.jpg",
    "/images/home-1/cc8.jpg",
  ],
  poker: [
    "/images/home-1/po1.JPG",
    "/images/home-1/po2.jpg",
    "/images/home-1/po3.jpg",
    "/images/home-1/po4.jpeg",
    "/images/home-1/po5.jpeg",
    "/images/home-1/po6.jpeg",
  ],
  restaurant: [
    "/images/home-1/r1.jpg",
    "/images/home-1/r2.jpg",
    "/images/home-1/r3.jpg",
    "/images/home-1/r4.jpg",
    "/images/home-1/r5.jpg",
    "/images/home-1/r6.jpg",
  ],
  floorfour: [
    "/images/home-1/f1.jpg",
    "/images/home-1/f2.jpg",
    "/images/home-1/f3.jpg",
    "/images/home-1/f4.jpg",
    "/images/home-1/f5.jpg",
    "/images/home-1/f6.jpg",
  ],
};

/* ==============================
   COMPONENT
================================= */

export default function ImpressionenGallery({ active }) {
  const images = IMAGES[active] || [];
  const [loaded, setLoaded] = useState([]);

  /* ==============================
     SEQUENTIAL IMAGE LOADING
     (1 → 8, kein Decode-Stau)
  ================================= */

  useEffect(() => {
    let cancelled = false;
    setLoaded(images.map(() => false));

    const loadSequentially = async () => {
      for (let i = 0; i < images.length; i++) {
        if (cancelled) break;

        await new Promise((resolve) => {
          const img = new Image();
          img.src = images[i];

          img.onload = () => {
            setLoaded((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            resolve();
          };
        });
      }
    };

    loadSequentially();
    return () => {
      cancelled = true;
    };
  }, [active]);

  return (
    <section className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {images.map((src, i) => (
          <div
            key={src}
            className="
              relative overflow-hidden rounded-xl
              transition-all duration-700 ease-out
            "
          >
            {/* GOLDRAHMEN */}
            <div className="absolute inset-0 border border-[#DEBF64]/70 z-30 pointer-events-none rounded-xl" />

            {/* SHIMMER / SHINE PLACEHOLDER */}
            {!loaded[i] && (
              <div className="absolute inset-0 z-20 bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 animate-pulse" />
            )}

            {/* IMAGE */}
            <img
              src={src}
              alt=""
              loading={i < 2 ? "eager" : "lazy"}
              decoding="async"
              className={`
                w-full h-full object-cover
                transition-all duration-700 ease-out
                ${loaded[i] ? "opacity-100 scale-100" : "opacity-0 scale-105"}
                hover:scale-105
              `}
            />
          </div>
        ))}
      </div>
    </section>
  );
}