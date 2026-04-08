"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FloorFourIntro({ onFinish }) {
  const container = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.out" },
      onComplete: onFinish,
    });

    gsap.set([titleRef.current, subRef.current], { opacity: 0 });

    // FLOOR FOUR fällt rein
    tl.fromTo(
      titleRef.current,
      { y: "-120%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1.2 }
    )

      // kurze Ruhe
      .to({}, { duration: 0.35 })

      // Subline von links
      .fromTo(
        subRef.current,
        { x: "-40vw", opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9 },
        "-=0.2"
      );
  }, [onFinish]);

  return (
    <section
      ref={container}
      className="fixed inset-0 bg-black z-[90] flex items-center justify-center overflow-hidden"
    >
      <div className="text-center px-6">
        <h1
          ref={titleRef}
          className="text-[18vw] md:text-[12vw] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFF2B0] via-[#C9A84E] to-[#8F6B1F]"
        >
          FLOOR FOUR
        </h1>

        <p
          ref={subRef}
          className="mt-4 text-[#DEBF64] uppercase tracking-[0.35em] text-xs md:text-sm"
        >
          Biggest Rooftop Bar in Bendern
        </p>
      </div>
    </section>
  );
}