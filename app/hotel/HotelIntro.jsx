"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./hotel.module.css";

export default function HotelIntro({ onFinish }) {
  const introRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onFinish,
    });

    tl.fromTo(
      titleRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
      }
    )
      .to(titleRef.current, {
        opacity: 0,
        duration: 0.6,
        delay: 0.8,
      })
      .to(introRef.current, {
        opacity: 0,
        duration: 0.8,
        onComplete: () => {
          introRef.current.style.display = "none";
        },
      });
  }, [onFinish]);

  return (
    <div ref={introRef} className={styles.intro}>
      <h1 ref={titleRef} className={styles.introTitle}>
        GRAND HOTEL
      </h1>
    </div>
  );
}