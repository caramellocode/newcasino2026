"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PromotionenHeader from "./PromotionenHeader";
import PromotionCard from "./components/PromotionCard";
import PromotionAccordion from "./components/PromotionAccordion";

import "@/styles/promotionen.css";

gsap.registerPlugin(ScrollTrigger);

/* ===============================
   PROMOTIONS DATA
================================ */

const PROMOTIONS = [
  {
    title: "Privat Jet & Apero",
    image: "/images/home-1/jetdeal.jpg",
    price: "ab 160 CHF pro Person",
    items: [
      "2 Std Privatjet Rundflug über die CH / LI Berge",
      "Apero & Caviar Degustation in 4500m Höhe",
      "3-Gänge Überraschungsmenü im Restaurant",
      "CHF 30 Spielguthaben pro Person",
      "Casino Führung & gratis Cocktail",
    ],
    link: "https://gcli.li/genuss-spiel",
  },
  {
    title: "POKER + GRATIS HOTEL",
    image: "/images/home-1/pokerundhotel.png",
    price: "Cashgame Special",
    items: [
      "Gratis Hotelzimmer (min. Buy-in CHF 500)",
      "Inkl. Frühstück",
      "Wellness & Sauna inklusive",
    ],
    link: "https://gcli.li/genuss-spiel",
  },
  {
    title: "Genussspiel für 2 Personen",
    image: "/images/home-1/gpt11.png",
    price: "CHF 65 pro Person",
    items: [
      "Apero",
      "3-Gänge Überraschungsmenü im Restaurant Alpspitz",
      "Begrüssungsjetons im Wert von je CHF 25",
      "Spielerklärung & Casinoführung",
    ],
    link: "https://gcli.li/genuss-spiel",
  },
  {
    title: "Grand Geburtstags Package",
    image: "/images/home-1/geburt11.jpg",
    price: "CHF 25 Geburtstagsbonus",
    items: [
      "Alle Gäste erhalten für CHF 15 → CHF 25 Spielguthaben",
      "Champagner Empfang",
      "1x gratis Cocktail für alle Gäste",
    ],
    link: "https://gcli.li/genuss-spiel",
  },
  {
    title: "Rooftop Bar exklusiv mieten",
    image: "/images/home-1/rtp1.png",
    price: "auf Anfrage",
    items: [
      "Private Bar",
      "DJ optional",
      "Barkeeper inklusive",
    ],
    link: "https://gcli.li/genuss-spiel",
  },
  {
    title: "Hotel & Casino Erlebnis",
    image: "/images/home-1/hotelundcasino.png",
    price: "Casino Erlebnis buchen",
    items: [
      "Willkommens-Apero",
      "2 Tage Hotelaufenthalt",
      "CHF 250 Spielguthaben (Livegame & Slots)",
      "Gratis Frühstück",
    ],
    link: "https://gcli.li/genuss-spiel",
  },
  {
    title: "Grand Fun Casino",
    image: "/images/home-1/casinofood.png",
    price: "CHF 70 pro Person",
    items: [
      "Exklusives Fingerfood vom Restaurant Alpspitz",
      "Getränkepackage (Alkoholisch & Non-Alkoholisch)",
      "CHF 50 Spielguthaben (Livegame & Slots)",
      "Gratis Cocktail für alle Teilnehmer",
      "Buchbar ab mind. 5 Personen",
    ],
    link: "https://gcli.li/genuss-spiel",
  },
];

/* ===============================
   CLIENT COMPONENT
================================ */

export default function PromotionenClient() {
  useEffect(() => {
    const cards = gsap.utils.toArray(".js-promo-card");

    // Initial State (SSR-safe)
    gsap.set(cards, { opacity: 0, y: 40 });

    // Luxury Rise – jede Card einzeln
    cards.forEach((card) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          once: true,
        },
      });
    });

    // Mobile Soft Stagger (zusätzlich, sanft)
    ScrollTrigger.matchMedia({
      "(max-width: 768px)": () => {
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".promotion-grid",
            start: "top 80%",
            once: true,
          },
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <main className="promotion-root">
      {/* HEADER ANIMATION */}
      <PromotionenHeader />

      {/* HERO */}
      <section className="promotion-hero">
        <div className="promotion-hero-overlay">
          <h1>GRAND PROMO</h1>
          <p>Exklusive Erlebnisse. Einzigartige Momente.</p>
        </div>
      </section>

      {/* PROMOTIONS GRID */}
      <section className="promotion-section">
        <div className="promotion-grid">
          {PROMOTIONS.map((promo, i) => (
            <PromotionCard key={i} {...promo} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="promotion-faq">
        <h2>Häufige Fragen</h2>
        <PromotionAccordion />
      </section>
    </main>
  );
}