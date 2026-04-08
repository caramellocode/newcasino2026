"use client";

import { useState } from "react";
import "@/styles/spielangebot.css";
import FeelGrandHero from "@/components/FeelGrandHero";
import Link from "next/link";

const CARDS = [
   {
    title: "SPIELAUTOMATEN",
    image: "/images/home-1/auto1.JPG",
    hours: "Täglich 11:00 – 05:00",
    phone: "+423 377 77 77",
    href: "/automaten",
  },
  {
    title: "POKER",
    image: "/images/home-1/pokerromm.jpg",
    hours: "Täglich ab 18:00",
    phone: "+423 377 77 70",
    href: "/pokerroom",
  },
  {
    title: "ROULETTE",
    image: "/images/home-1/g3.JPG",
    hours: "Täglich ab 16:00",
    phone: "+423 377 77 71",
    href: "/livecasino",
  },
  {
    title: "BLACK JACK",
    image: "/images/home-1/blackjack.jpg",
    hours: "Fr – So ab 18:00",
    phone: "+423 377 77 71",
    href: "/livecasino",
  },
  {
    title: "TEXAS HOLD’EM",
    image: "/images/home-1/pokerromm.jpg",
    hours: "Turniere & Cash Games",
    phone: "+423 377 77 70",
    href: "/pokerroom",
  },
  {
    title: "LIVEGAME",
    image: "/images/home-1/livegame.jpg",
    hours: "Do – Sa ab 18:00",
    phone: "+423 377 77 71",
    href: "/livecasino",
  },
];

export default function SpielangebotPage() {
  const [flipped, setFlipped] = useState(null);

  return (
    <>
      <FeelGrandHero />

      <main className="bg-black text-white pt-8 md:pt-12 pb-24 px-6">
        <h1 className="spielangebot-title-main">SPIELANGEBOT</h1>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {CARDS.map((card, i) => (
            <div
              key={card.title}
              className="spielangebot-perspective"
              onClick={() => setFlipped(flipped === i ? null : i)}
            >
              <div
                className={`spielangebot-card ${
                  flipped === i ? "is-active" : ""
                }`}
              >
                {/* ===== TITEL (AUSSERHALB DES FLIPS!) ===== */}
                <div className="spielangebot-title-overlay">
                  {card.title}
                </div>

                {/* ===== FLIP-INHALT ===== */}
                <div className="spielangebot-inner">
                  {/* FRONT */}
                  <div
                    className="spielangebot-face spielangebot-front"
                    style={{ backgroundImage: `url(${card.image})` }}
                  />

                  {/* BACK */}
                  <div className="spielangebot-face spielangebot-back">
                    <p className="label">Öffnungszeiten</p>
                    <p className="value">{card.hours}</p>

                    <p className="label">Telefon</p>
                    <p className="value">{card.phone}</p>

                    <Link href={card.href}>
                      <button className="spielangebot-button">
                        MEHR ERFAHREN
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}