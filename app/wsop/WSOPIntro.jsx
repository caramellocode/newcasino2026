"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function WSOPIntro() {
  const introRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = gsap.utils.toArray(".wsop-letter");

      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
      });

      /* ===============================
         INITIAL STATE
      ================================ */

      gsap.set(introRef.current, {
        opacity: 1,
        visibility: "visible",
        pointerEvents: "auto",
      });

      gsap.set(letters, {
        y: -200,
        opacity: 0,
        color: "#ffffff",
      });

      gsap.set(".wsop-intro-date", {
        y: 40,
        opacity: 0,
      });

      gsap.set(".wsop-light", {
        scaleX: 0,
        opacity: 0,
        transformOrigin: "center",
      });

      /* ===============================
         TIMELINE
      ================================ */

      tl
        // Buchstaben rein
        .to(letters, {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.9,
        })

        // Mini-Impact
        .to(letters, {
          y: "+=6",
          duration: 0.08,
          yoyo: true,
          repeat: 1,
        })

        // Gold-Farbe
        .to(letters, {
          color: "#d4af37",
          duration: 0.4,
        })

        // Datum
        .to(
          ".wsop-intro-date",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          "-=0.2"
        )

        // Lichtstrahl
        .to(
          ".wsop-light",
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.6,
          },
          "-=0.3"
        )

        // === FINAL EXIT ===
        .to(introRef.current, {
          opacity: 0,
          duration: 0.6,
          delay: 0.4,
          ease: "power2.inOut",
        })

        // HART ENTFERNEN → KEIN TEXT MEHR
        .set(introRef.current, {
          display: "none",
          visibility: "hidden",
          pointerEvents: "none",
        });
    }, introRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="wsop-intro" ref={introRef}>
      <div className="wsop-intro-inner">
        <h1 className="wsop-intro-title">
          {["W", "S", "O", "P"].map((l, i) => (
            <span key={i} className="wsop-letter">
              {l}
            </span>
          ))}
        </h1>

        <div className="wsop-light" />

        <div className="wsop-intro-date">
          26.02. – 10.03.2026
        </div>
      </div>
    </div>
  );
}