"use client";

import "@/styles/floorfour.css";

import FloorFourHero from "@/components/floorfour/FloorFourHero";
import FloorFourSection from "@/components/floorfour/FloorFourSection";
import FloorFourReels from "@/components/floorfour/FloorFourReels";
import FloorFourWords from "@/components/floorfour/FloorFourWords";
import FloorFourForm from "@/components/floorfour/FloorFourForm";
import FloorFourGallery from "@/components/floorfour/FloorFourGallery";

export default function FloorFourPage() {
  return (
    <main>
      <FloorFourHero />

      <FloorFourSection
        image="/images/home-1/panorama.jpg"
        title="ROOFTOP BAR EXPERIENCE"
        text="Hoch über den Dächern von Bendern. Exklusive Atmosphäre, Signature Cocktails und ein unvergleichlicher Ausblick."
      />

      <FloorFourWords />
      {/* 🎥 REELS */}
      <FloorFourReels />

      {/* ✨ PARTY / RELAX / ENJOY */}

      <FloorFourSection
        reverse
        image="/images/home-1/Ambiente.jpg"
        title="PRIVATE EVENTS"
        text="Private Feiern, Business Events oder exklusive Buchungen – stilvoll, individuell und einzigartig. Sie können auch für private VEranstaltungen zu unschlagbaren Preisen mieten.
        Kontaktieren Sie uns und wir bieten Ihnen den bestmöglichen Deal an."
      />
      <FloorFourSection
        reverse
        image="/images/home-1/food1.JPG"
        title="Food UPGRADES EVENTS"
        text="Ob DJ, individuelle Dekoration, exklusives Fingerfood oder Pizza nach Wunsch – wir organisieren Ihr Event ganz nach Ihren Vorstellungen.
Von kulinarischen Highlights aus unserem eigenen Restaurant bis hin zu externen Partnern ist alles möglich – flexibel, stilvoll und individuell abgestimmt.

Für private Feiern, Business Events oder exklusive Buchungen bieten wir massgeschneiderte Konzepte auf höchstem Niveau.
Bei jedem Event sorgt ein professioneller Barkeeper für die persönliche Betreuung Ihrer Gäste und erstklassige Drinks – zuverlässig, diskret und aufmerksam.

Das alles zu attraktiven Konditionen und mit dem Anspruch, Ihnen den bestmöglichen Deal zu bieten.

Kontaktieren Sie uns – wir machen Ihr Event einzigartig."
      />
      <FloorFourGallery />

      <FloorFourForm />
    </main>
  );
}