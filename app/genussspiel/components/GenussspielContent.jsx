"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const IMAGES = [
  "/images/home-1/geschenk1.jpg",
  "/images/home-1/ggggeschenk1.png",
  "/images/home-1/g2.jpg",
  "/images/home-1/g3.jpg",
];

export default function GenussspielContent() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* ===============================
            🖼️ IMAGE CROSSFADE – 16:9 (FINAL)
        =============================== */}
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">

          {/* Goldrahmen */}
          <div
            className="absolute inset-0 rounded-xl border border-[#DEBF64]
                       shadow-[0_0_40px_rgba(222,191,100,0.35)]
                       pointer-events-none z-20"
          />

          {/* Bilder – ALLE ÜBEREINANDER */}
          {IMAGES.map((src, index) => (
            <img
              key={src}
              src={src}
              alt="Genussspiel Impression"
              className={`
                absolute inset-0 w-full h-full object-cover
                transition-opacity duration-[1800ms] ease-in-out
                ${activeIndex === index ? "opacity-100" : "opacity-0"}
              `}
            />
          ))}
        </div>

        {/* ===============================
            📝 TEXT & BUTTONS
        =============================== */}
        <div>
          <h2
            className="text-2xl md:text-3xl mb-6 tracking-[0.25em] text-[#DEBF64]"
            style={{ fontFamily: "'Syncopate', system-ui, sans-serif" }}
          >
            ENJOY GRAND
          </h2>

          <p className="text-white/80 mb-6 leading-relaxed">
            Der Genussspiel-Gutschein ist das ideale Geschenk für jeden Anlass.
            Geniessen Sie ein exklusives 3-Gang-Überraschungsmenü im Restaurant
            Alpspitz und anschliessend spannende Spiele im Casino.
          </p>

          <ul className="space-y-3 mb-10 text-sm text-white/70">
            <li>• Aperitif zur Begrüssung</li>
            <li>• Exklusives 3-Gang-Überraschungsmenü</li>
            <li>• Begrüssungsjetons im Wert von CHF 25</li>
            <li>• Spielerklärung & Casino-Einführung (auf Wunsch)</li>
            <li>• Immer buchbar</li>
          </ul>

          <div className="flex flex-wrap gap-5">
            <Link href="/kontakt">
              <button
                className="inline-flex items-center justify-center px-9 py-3 rounded-full
                           border border-[#DEBF64]
                           bg-gradient-to-r from-[#DEBF64] via-[#f7e6a4] to-[#DEBF64]
                           text-black text-xs tracking-[0.25em] uppercase
                           shadow-[0_0_18px_rgba(222,191,100,0.6)]
                           transition-all duration-200
                           hover:shadow-[0_0_32px_rgba(222,191,100,0.9)]
                           hover:-translate-y-[1px]"
              >
                JETZT BESTELLEN
              </button>
            </Link>

            <a href="tel:+4230000000">
              <button
                className="inline-flex items-center justify-center px-9 py-3 rounded-full
                           border border-white/40
                           text-white text-xs tracking-[0.25em] uppercase
                           hover:bg-white/10 transition"
              >
                JETZT ANRUFEN
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}