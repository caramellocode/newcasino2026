"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FeelGrandHero() {
  const container = useRef(null);

  const feelRef = useRef(null);
  const grandRef = useRef(null);

  const playLetters = useRef([]);
  const playGrandRef = useRef(null);

  const winLetters = useRef([]);
  const winGrandRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      gsap.set([feelRef.current, grandRef.current], { opacity: 0 });
      gsap.set(feelRef.current, { x: "-40vw" });
      gsap.set(grandRef.current, { x: "40vw" });

      gsap.set(
        [
          ...playLetters.current,
          playGrandRef.current,
          ...winLetters.current,
          winGrandRef.current,
        ],
        { y: -160, opacity: 0 }
      );

      /* 1️⃣ FEEL GRAND */
      tl.to(feelRef.current, { x: 0, opacity: 1, duration: 1 })
        .to(grandRef.current, { x: 0, opacity: 1, duration: 1 }, "-=0.75")
        .to({}, { duration: 0.35 })
        .to([feelRef.current, grandRef.current], {
          y: -60,
          opacity: 0,
          duration: 0.5,
          ease: "power3.in",
        })

        /* 2️⃣ PLAY GRAND */
        .to(
          playLetters.current,
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.8,
            ease: "bounce.out",
          },
          "+=0.05"
        )
        .to(
          playGrandRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "bounce.out",
          },
          "-=0.6"
        )

        .to({}, { duration: 0.7 })

        .to([...playLetters.current, playGrandRef.current], {
          y: 70,
          opacity: 0,
          duration: 0.45,
          ease: "power2.in",
        })

        /* 3️⃣ WIN GRAND */
        .to(
          winLetters.current,
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.85,
            ease: "bounce.out",
          },
          "+=0.05"
        )
        .to(
          winGrandRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "bounce.out",
          },
          "-=0.6"
        )

        /* ✨ GOLD SHIMMER */
        .to(winGrandRef.current, {
          backgroundPosition: "200% center",
          duration: 2.6,
          ease: "none",
          repeat: -1,
        });
    }, container);

    return () => ctx.revert();
  }, []);

  /* ===== TYPO STYLES ===== */

  // FEEL + WIN (bleiben gleich)
  const wordStyle =
    "font-bold leading-[0.95] tracking-tight " +
    "text-[18vw] sm:text-[16vw] md:text-[12vw]";

  // PLAY GRAND – NUR MOBILE minimal kleiner
  const playWordStyle =
    "font-bold leading-[0.95] tracking-tight " +
    "text-[16vw] sm:text-[16vw] md:text-[12vw]";

  const goldStyle =
    "text-transparent bg-clip-text bg-gradient-to-r " +
    "from-[#C9A84E] via-[#FFF2B0] to-[#C9A84E] bg-[length:200%_auto]";

  return (
    <section
      ref={container}
      className="
        relative w-full
        h-[30vh] sm:h-[45vh] md:h-[65vh]
        bg-black flex items-center justify-center
        overflow-hidden
        pt-0 sm:pt-12 md:pt-0
      "
    >
      <div className="relative flex items-center justify-center px-4">
        {/* FEEL GRAND */}
        <div className="absolute flex gap-[3vw]">
          <h1 ref={feelRef} className={`${wordStyle} text-white`}>
            FEEL
          </h1>
          <h1 ref={grandRef} className={`${wordStyle} text-[#DEBF64]`}>
            GRAND
          </h1>
        </div>

        {/* PLAY GRAND (mobile kleiner) */}
        <div className="absolute flex gap-[2vw]">
          <div className="flex gap-[0.5vw]">
            {["P", "L", "A", "Y"].map((l, i) => (
              <span
                key={l}
                ref={(el) => (playLetters.current[i] = el)}
                className={`${playWordStyle} text-white`}
              >
                {l}
              </span>
            ))}
          </div>

          <span
            ref={playGrandRef}
            className={`${playWordStyle} text-[#DEBF64]`}
          >
            GRAND
          </span>
        </div>

        {/* WIN GRAND */}
        <div className="flex gap-[2vw]">
          <div className="flex gap-[0.5vw]">
            {["W", "I", "N"].map((l, i) => (
              <span
                key={l}
                ref={(el) => (winLetters.current[i] = el)}
                className={`${wordStyle} text-white`}
              >
                {l}
              </span>
            ))}
          </div>

          <span
            ref={winGrandRef}
            className={`${wordStyle} ${goldStyle}`}
          >
            GRAND
          </span>
        </div>
      </div>

      {/* Softer Übergang nach unten */}
      <div className="absolute bottom-0 left-0 w-full h-8 md:h-16 bg-gradient-to-b from-transparent to-black pointer-events-none" />
    </section>
  );
}