"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import jackpots from "../data/jackpots";

export default function Hero({ t }) {
  const containerRef = useRef(null);
  const floatRef = useRef(null);

  const firstWordRef = useRef(null);
  const grandRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/home-1/casino1.jpg",
      firstWord: "WIN",
      secondWord: "GRAND",
    },
    {
      image: "/images/home-1/pokergrand1.jpg",
      firstWord: "PLAY",
      secondWord: "GRAND",
    },
    {
      image: "/images/home-1/hotelgrand1.jpg",
      firstWord: "SLEEP",
      secondWord: "GRAND",
    },
    {
      image: "/images/home-1/restaurant11.jpg",
      firstWord: "EAT",
      secondWord: "GRAND",
    },
  ];

  /* =============================
     HERO SLIDER AUTOPLAY
  ============================== */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  /* =============================
     TEXT ANIMATION ON SLIDE CHANGE
  ============================== */
  useEffect(() => {
    if (!firstWordRef.current || !grandRef.current) return;

    const tl = gsap.timeline();

    gsap.set([firstWordRef.current, grandRef.current], {
      opacity: 0,
      y: 80,
      scale: 0.96,
    });

    tl.to(firstWordRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power4.out",
    }).to(
      grandRef.current,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power4.out",
      },
      "-=0.45"
    );

    return () => {
      tl.kill();
    };
  }, [currentSlide]);

  /* =============================
     FLOATING BUTTONS
  ============================== */
  useEffect(() => {
    const buttons = floatRef.current?.children;
    if (!buttons) return;

    gsap.to(buttons, {
      y: -10,
      duration: 2.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: { amount: 1, from: "center" },
    });

    return () => {
      gsap.killTweensOf(buttons);
    };
  }, []);

  const floatItems = [
    {
      label: "LIVE CASHGAME",
      img: "/images/home-1/Piktogramme-Poker-03.png",
      link: "/cashgame",
    },
    {
      label: "AKTUELLE EVENTS",
      img: "/images/home-1/Piktogramme-Poker-11.png",
      link: "/events",
    },
    {
      label: "GCPS SERIES",
      img: "/images/home-1/herzlogo.png",
      link: "/gcps",
    },
  ];

  const wordStyle =
    "font-bold leading-[0.95] tracking-tight text-[15vw] sm:text-[12vw] md:text-[9vw] lg:text-[7vw] drop-shadow-[0_0_30px_rgba(0,0,0,0.65)]";

  const goldStyle =
    "text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84E] via-[#FFF2B0] to-[#C9A84E] bg-[length:200%_auto]";

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        ref={containerRef}
        className="relative h-[90vh] overflow-hidden bg-black flex items-center justify-center text-center"
      >
        {/* HERO SLIDER */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={`${slide.firstWord} ${slide.secondWord}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* dunkler Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* HERO TEXT */}
        <div className="relative z-20 flex items-center justify-center px-4 pointer-events-none">
          <div className="flex gap-[2vw] items-center">
            <h1 ref={firstWordRef} className={`${wordStyle} text-white`}>
              {slides[currentSlide].firstWord}
            </h1>
            <h1 ref={grandRef} className={`${wordStyle} ${goldStyle}`}>
              {slides[currentSlide].secondWord}
            </h1>
          </div>
        </div>

        {/* JACKPOTS DESKTOP */}
        <div className="absolute top-8 right-8 bg-black/70 border border-[#d4af37] rounded-xl p-4 w-72 hidden md:block shadow-lg z-30">
          <h3 className="text-[#d4af37] font-bold text-lg mb-3 text-center">
            {t.jackpotsTitle}
          </h3>

          <div className="flex flex-col gap-3">
            {jackpots.map((jackpot, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-zinc-900/80 px-3 py-2 rounded-md border border-[#d4af37]/60"
              >
                <img src={jackpot.image} className="w-[90px]" alt="" />
                <span
                  className={`font-bold ${
                    i === 0 ? "text-[#d4af37]" : "text-white"
                  }`}
                  style={{ fontSize: "22px" }}
                >
                  {jackpot.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* FLOATING BUTTONS DESKTOP */}
        <div
          ref={floatRef}
          className="absolute top-[420px] right-8 hidden md:flex gap-4 z-30"
        >
          {floatItems.map((item, i) => (
            <Link key={i} href={item.link} className="text-center group">
              <div className="w-16 h-16 rounded-full bg-black border-2 border-[#d4af37] grid place-items-center shadow-md group-hover:scale-110 transition">
                <img src={item.img} className="w-10 h-10" alt="" />
              </div>
              <span className="text-[10px] mt-2 block text-[#d4af37] font-semibold">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* SLIDER DOTS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full border border-white/60 transition ${
                currentSlide === index ? "bg-[#d4af37]" : "bg-white/30"
              }`}
              aria-label={`Gehe zu Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* MOBILE JACKPOTS */}
      <section className="md:hidden bg-black py-6 border-t border-[#d4af37]/30">
        <div className="px-4">
          <h3 className="text-xs tracking-[0.35em] text-[#DEBF64] uppercase text-center mb-4">
            {t.jackpotsTitle}
          </h3>

          <div className="space-y-3">
            {jackpots.map((jackpot, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-zinc-900 px-3 py-2 rounded-md border border-[#d4af37]/50"
              >
                <img src={jackpot.image} className="w-[80px]" alt="" />
                <span
                  className={`font-bold ${
                    i === 0 ? "text-[#d4af37]" : "text-white"
                  }`}
                >
                  {jackpot.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}