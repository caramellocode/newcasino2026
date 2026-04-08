"use client";

import { useEffect, useRef, useState } from "react";
import PokerroomHeader from "@/components/PokerroomHeader";
import PokerroomCard from "@/components/PokerroomCard";
import PokerroomInfoSection from "@/components/PokerroomInfoSection";
import PokerroomActions from "@/components/PokerroomActions";
import "@/styles/pokerroom-slider.css";
import PokerroomReels from "@/components/PokerroomReels";


const CARDS = [
  {
    image: "/images/home-1/12ring.png",
    phone: "+423 377 77 70",
    planHref: "/pdfs/turnierplan.pdf",
    moreHref: "/pokerroom/turniere",
  },
  {
    image: "/images/home-1/karneval.jpg",
    phone: "+423 377 77 70",
    planHref: "/pdfs/turnierplan.pdf",
    moreHref: "/pokerroom/turniere",
  },
  {
    image: "/images/home-1/hansi.jpg",
    phone: "+423 377 77 70",
    planHref: "/pdfs/turnierplan.pdf",
    moreHref: "/pokerroom/turniere",
  },
  {
    image: "/images/home-1/hansi.jpg",
    phone: "+423 377 77 71",
    planHref: "/pdfs/turnierplan.pdf",
    moreHref: "/pokerroom/turnier",
  },
  {
    image: "/images/home-1/early.jpg",
    phone: "+423 377 77 71",
    planHref: "/pdfs/turnierplan.pdf",
    moreHref: "/pokerroom/turnier",
  },
  {
    image: "/images/home-1/inthemoney.jpg",
    phone: "+423 377 77 71",
    planHref: "/pdfs/turnierplan.pdf",
    moreHref: "/pokerroom/turnier",
  },
   {
    image: "/images/home-1/hansi.jpg",
    phone: "+423 377 77 71",
    planHref: "/pdfs/turnierplan.pdf",
    moreHref: "/pokerroom/turnier",
  },
  {
    image: "/images/home-1/early.jpg",
    phone: "+423 377 77 71",
    planHref: "/pdfs/turnierplan.pdf",
    moreHref: "/pokerroom/turnier",
  },
  {
    image: "/images/home-1/inthemoney.jpg",
    phone: "+423 377 77 99",
    planHref: "/pdfs/turnierplan.pdf",
    moreHref: "/pokerroom/turnier",
  },
];

export default function PokerroomPage() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const CARD_WIDTH = 340; // inkl. Gap
  const AUTO_DELAY = 2000; // 1 Sekunde

  /* ===============================
     AUTO SLIDE
  ================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      slideRight();
    }, AUTO_DELAY);

    return () => clearInterval(interval);
  }, [index]);

  const slideRight = () => {
    if (!trackRef.current) return;

    const maxIndex = CARDS.length - 1;
    const next = index >= maxIndex ? 0 : index + 1;

    setIndex(next);
    trackRef.current.style.transform = `translateX(-${
      next * CARD_WIDTH
    }px)`;
  };

  const slideLeft = () => {
    if (!trackRef.current) return;

    const prev = index <= 0 ? CARDS.length - 1 : index - 1;

    setIndex(prev);
    trackRef.current.style.transform = `translateX(-${
      prev * CARD_WIDTH
    }px)`;
  };

  return (
    <>
      <PokerroomHeader />

      <main className="bg-black text-white px-6 pb-24 overflow-hidden">
        {/* ===== SLIDER ===== */}
        <div className="pokerroom-slider-wrapper">
          <div className="pokerroom-slider-track" ref={trackRef}>
            {CARDS.map((card, i) => (
              <div className="pokerroom-slide" key={i}>
                <PokerroomCard {...card} />
              </div>
            ))}
          </div>
        </div>

        {/* ===== NAVIGATION ===== */}
        <div className="pokerroom-slider-nav">
          <button onClick={slideLeft} aria-label="Zurück">
            ‹
          </button>
          <button onClick={slideRight} aria-label="Weiter">
            ›
          </button>
        </div>

        <PokerroomInfoSection />
        <PokerroomActions />
        <PokerroomReels />
      </main>
    </>
  );
}