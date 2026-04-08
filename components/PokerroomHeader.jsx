"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PokerroomHeader() {
  const container = useRef(null);

  const feelRef = useRef(null);
  const pokerRef = useRef(null);

  const playLetters = useRef([]);
  const playPokerRef = useRef(null);

  const winLetters = useRef([]);
  const winPokerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      gsap.set([feelRef.current, pokerRef.current], { opacity: 0 });
      gsap.set(feelRef.current, { x: "-40vw" });
      gsap.set(pokerRef.current, { x: "40vw" });

      gsap.set(
        [
          ...playLetters.current,
          playPokerRef.current,
          ...winLetters.current,
          winPokerRef.current,
        ],
        { y: -160, opacity: 0 }
      );

      tl.to(feelRef.current, { x: 0, opacity: 1, duration: 1 })
        .to(pokerRef.current, { x: 0, opacity: 1, duration: 1 }, "-=0.75")
        .to({}, { duration: 0.35 })
        .to([feelRef.current, pokerRef.current], {
          y: -60,
          opacity: 0,
          duration: 0.5,
          ease: "power3.in",
        })

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
          playPokerRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "bounce.out",
          },
          "-=0.6"
        )

        .to({}, { duration: 0.7 })

        .to([...playLetters.current, playPokerRef.current], {
          y: 70,
          opacity: 0,
          duration: 0.45,
          ease: "power2.in",
        })

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
          winPokerRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "bounce.out",
          },
          "-=0.6"
        );
    }, container);

    return () => ctx.revert();
  }, []);

  const wordStyle =
    "font-bold leading-[0.95] tracking-tight text-[18vw] sm:text-[16vw] md:text-[12vw]";

  const goldStyle =
    "text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84E] via-[#FFF2B0] to-[#C9A84E] bg-[length:200%_auto]";

  return (
    <section
      ref={container}
      className="relative w-full h-[30vh] sm:h-[45vh] md:h-[60vh] bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="relative flex items-center justify-center px-4">
        {/* FEEL POKER */}
        <div className="absolute flex gap-[3vw]">
          <h1 ref={feelRef} className={`${wordStyle} text-white`}>
            FEEL
          </h1>
          <h1 ref={pokerRef} className={`${wordStyle} text-[#DEBF64]`}>
            POKER
          </h1>
        </div>

        {/* PLAY POKER */}
        <div className="absolute flex gap-[2vw]">
          <div className="flex gap-[0.5vw]">
            {["P", "L", "A", "Y"].map((l, i) => (
              <span
                key={l}
                ref={(el) => (playLetters.current[i] = el)}
                className={`${wordStyle} text-white`}
              >
                {l}
              </span>
            ))}
          </div>
          <span ref={playPokerRef} className={`${wordStyle} text-[#DEBF64]`}>
            POKER
          </span>
        </div>

        {/* WIN POKER */}
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
          <span ref={winPokerRef} className={`${wordStyle} ${goldStyle}`}>
            POKER
          </span>
        </div>
      </div>
    </section>
  );
}