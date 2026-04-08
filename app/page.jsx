"use client";

import Hero from "../components/Hero";
import InfoBar from "../components/InfoBar";
import EventSection from "../components/EventSection";
import ParallaxSections from "../components/ParallaxSections";



export default function HomePage() {
  return (
    <>
      <Hero t={{ jackpotsTitle: "GRAND JACKPOTS", visitShop: "Kontakt" }} />
      <InfoBar />
      <EventSection />
       <ParallaxSections />
    </>
  );
}