"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "./hotel.module.css";

const HERO_SLIDES = [
  "/images/home-1/slide1.jpg",
  "/images/home-1/slider5.jpg",
  "/images/home-1/slide3.jpg",
  "/images/home-1/slide11.jpg",
  "/images/home-1/slide4.jpg",
  "/images/home-1/slider55.jpg",
];

export default function HotelHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const introRef = useRef(null);
  const grandRef = useRef(null);
  const hotelRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    /* ===============================
       INTRO ANIMATION
    =============================== */
    tl.fromTo(
      grandRef.current,
      { x: "-120%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1.4,
        ease: "power4.out",
      }
    )
      .fromTo(
        hotelRef.current,
        { x: "120%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1.4,
          ease: "power4.out",
        },
        "-=1.1"
      )
      .to([grandRef.current, hotelRef.current], {
        opacity: 0,
        duration: 0.6,
        delay: 0.6,
      })
      .to(introRef.current, {
        opacity: 0,
        duration: 0.8,
        pointerEvents: "none",
      });

    /* ===============================
       HERO SLIDER
    =============================== */
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.heroRoot}>
      {/* ===============================
          INTRO (PART OF HERO)
      =============================== */}
      <div ref={introRef} className={styles.heroIntro}>
        <h1 ref={grandRef} className={styles.introGrand}>
          GRAND
        </h1>
        <h2 ref={hotelRef} className={styles.introHotel}>
          HOTEL
        </h2>
      </div>

      {/* ===============================
          HERO SLIDER
      =============================== */}
      <div className={styles.hero}>
        {HERO_SLIDES.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="Hotel & Suiten Grand Casino Liechtenstein"
            fill
            priority={i === 0}
            className={`${styles.heroImage} ${
              i === activeSlide ? styles.active : ""
            }`}
          />
        ))}

        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <h1>Hotel & Suiten</h1>
          <p>Exklusiv übernachten. Direkt im Casino.</p>
        </div>
      </div>
    </section>
  );
}