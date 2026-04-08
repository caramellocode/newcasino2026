"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

/* ==============================
   DATA – ALLE SECTIONS
================================= */

const SECTIONS = [
  {
    id: "hotel",
    imageDesktop: "/images/home-1/hotel1.jpg",
    imageMobile: "/images/home-1/hotel-m.JPG",
    eyebrow: "GENIESSE DEINEN AUFENTHALT",
    title: "GRAND HOTEL",
    date: "01 / JAN / 2026",
    time: "WELCOME DRINK AB 19 UHR",
    button: "JETZT ENTDECKEN",
    href: "/hotel",
  },
  {
    id: "poker",
    imageDesktop: "/images/home-1/grandpoker.jpg",
    imageMobile: "/images/home-1/poker-m.webp",
    eyebrow: "GRAND POKER",
    title: "GRAND POKER ROOM",
    date: "01 / JAN / 2026",
    time: "WELCOME DRINK AB 19 UHR",
    button: "JETZT ENTDECKEN",
    href: "/pokerroom",
  },
  {
    id: "floorfour",
    imageDesktop: "/images/home-1/FLOOURFOUR.jpg",
    imageMobile: "/images/home-1/f3-m.webp",
    eyebrow: "DIE HÖCHSTE ROOFTOPBAR IN BENDERN",
    title: "FLOOR FOUR BAR",
    date: "01 / JAN / 2026",
    time: "WELCOME DRINK AB 19 UHR",
    button: "JETZT ENTDECKEN",
    href: "/floor-four",
  },
  {
    id: "restaurant",
    imageDesktop: "/images/home-1/granddinning.jpg",
    imageMobile: "/images/home-1/rest-m.webp",
    eyebrow: "GENIESSE GRAND KULINARIK",
    title: "GRAND RESTAURANT",
    date: "01 / JAN / 2026",
    time: "KEIN CASINO CHECK-IN NÖTIG",
    button: "JETZT ENTDECKEN",
    href: "https://restaurant-alpspitz.li/",
  },
  {
    id: "promotion",
    imageDesktop: "/images/home-1/geschenk1.jpg",
    imageMobile: "/images/home-1/genuss-m.webp",
    eyebrow: "DIE BESTEN PROMOTIONEN NUR FÜR DICH",
    title: "GRAND GENUSSPIEL",
    date: "24 / DEZ / 2025",
    time: "BEGINN 20 UHR",
    button: "MEHR ERFAHREN",
    href: "/genussspiel",
  },
  {
    id: "birthday",
    imageDesktop: "/images/home-1/geburt11.jpg",
    imageMobile: "/images/home-1/geburt-m.png",
    eyebrow: "GRAND GEBURTSTAG",
    title: "FEIERE DEINEN GEBURTSTAG BEI UNS",
    date: "06 / DEZ / 2025",
    time: "AB 19 UHR",
    button: "JETZT ENTDECKEN",
    href: "/events/grand-nicol",
  },
];

/* ==============================
   COMPONENT
================================= */

export default function ParallaxSections() {
  const imageRefs = useRef([]);
  const sectionRefs = useRef([]);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        imageRefs.current.forEach((img, i) => {
          const section = sectionRefs.current[i];
          if (!img || !section) return;

          const rect = section.getBoundingClientRect();
          if (rect.bottom < 0 || rect.top > window.innerHeight) return;

          const isMobile = window.innerWidth <= 520;
          const strength = isMobile ? 0.08 : 0.2;

          img.style.transform = `translateY(${rect.top * strength}px)`;
        });

        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-black">
      {SECTIONS.map((sec, index) => (
        <div
          key={sec.id}
          ref={(el) => (sectionRefs.current[index] = el)}
          className="relative w-full overflow-hidden"
        >
          <div className="relative w-full h-[65vh] md:h-[92vh] overflow-hidden">

            {/* DESKTOP / TABLET IMAGE – NICHT SCHNEIDEN */}
            <img
              ref={(el) => (imageRefs.current[index] = el)}
              src={sec.imageDesktop}
              alt={sec.title}
              className="
                hidden min-[521px]:block absolute w-full h-full
                object-contain
                top-0
                will-change-transform
              "
            />

            {/* MOBILE IMAGE – UNVERÄNDERT */}
            <img
              src={sec.imageMobile}
              alt={sec.title}
              className="
                block max-[520px]:block min-[521px]:hidden
                absolute -top-[15%] h-[130%] w-full object-cover
              "
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/75 via-black/45 to-transparent z-10" />

            {/* SOFTE KANTEN */}
            <div className="pointer-events-none absolute top-0 left-0 w-full h-32 z-20">
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black" />
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-48 z-20">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
            </div>

            {/* CONTENT */}
            <div className="absolute inset-0 z-30 flex items-center justify-end">
              <div className="max-w-6xl mx-auto w-full px-6 md:px-10 flex justify-end">
                <div className="max-w-md text-right text-white">
                  <p className="text-xs tracking-[0.35em] uppercase mb-3 text-[#DEBF64]">
                    {sec.eyebrow}
                  </p>

                  <h2 className="text-2xl md:text-4xl mb-4">
                    {sec.title}
                  </h2>

                  <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-white/80 mb-1">
                    {sec.date}
                  </p>
                  <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-white/70 mb-6">
                    {sec.time}
                  </p>

                  <Link href={sec.href}>
                    <button className="px-10 py-3 rounded-full bg-[#DEBF64] text-black text-xs tracking-[0.25em]">
                      {sec.button}
                    </button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      ))}
    </section>
  );
}