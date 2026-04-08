"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PromotionenHeader() {
  const container = useRef(null);

  // Phase 1
  const grandRef = useRef(null);
  const promoRef = useRef(null);

  // Phase 2
  const enjoyLetters = useRef([]);
  const enjoyRef = useRef(null);

  // Phase 3
  const bookLetters = useRef([]);
  const bookRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      gsap.set([grandRef.current, promoRef.current], { opacity: 0 });
      gsap.set(grandRef.current, { x: "-40vw" });
      gsap.set(promoRef.current, { x: "40vw" });

      gsap.set([...enjoyLetters.current, enjoyRef.current], {
        y: -160,
        opacity: 0,
      });

      gsap.set([...bookLetters.current, bookRef.current], {
        y: -160,
        opacity: 0,
      });

      // PHASE 1
      tl.to(grandRef.current, { x: 0, opacity: 1, duration: 1 })
        .to(promoRef.current, { x: 0, opacity: 1, duration: 1 }, "-=0.75")
        .to({}, { duration: 0.4 })
        .to([grandRef.current, promoRef.current], {
          y: -60,
          opacity: 0,
          duration: 0.5,
          ease: "power3.in",
        })

        // PHASE 2
        .to(enjoyLetters.current, {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.9,
          ease: "bounce.out",
        })
        .to(
          enjoyRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "bounce.out",
          },
          "-=0.6"
        )
        .to({}, { duration: 0.6 })
        .to([...enjoyLetters.current, enjoyRef.current], {
          y: 70,
          opacity: 0,
          duration: 0.45,
          ease: "power2.in",
        })

        // PHASE 3 (bleibt stehen)
        .to(bookLetters.current, {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.9,
          ease: "bounce.out",
        })
        .to(
          bookRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
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
    "text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84E] via-[#FFF2B0] to-[#C9A84E]";

  return (
    <section
      ref={container}
      className="relative w-full h-[35vh] sm:h-[45vh] md:h-[60vh] bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="relative flex items-center justify-center px-4 text-center">

        {/* PHASE 1 – GRAND PROMO */}
        <div className="absolute flex flex-col sm:flex-row items-center gap-2 sm:gap-[3vw]">
          <h1 ref={grandRef} className={`${wordStyle} text-white`}>
            GRAND
          </h1>
          <h1 ref={promoRef} className={`${wordStyle} text-[#DEBF64]`}>
            PROMO
          </h1>
        </div>

        {/* PHASE 2 – ENJOY GRAND */}
        <div className="absolute flex flex-col sm:flex-row items-center gap-2 sm:gap-[2vw]">
          <div className="flex justify-center gap-[0.5vw]">
            {["E", "N", "J", "O", "Y"].map((l, i) => (
              <span
                key={`enjoy-${i}`}
                ref={(el) => (enjoyLetters.current[i] = el)}
                className={`${wordStyle} text-white`}
              >
                {l}
              </span>
            ))}
          </div>

          <span ref={enjoyRef} className={`${wordStyle} ${goldStyle}`}>
            GRAND
          </span>
        </div>

        {/* PHASE 3 – BOOK GRAND (FINAL) */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-[2vw]">
          <div className="flex justify-center gap-[0.5vw]">
            {["B", "O", "O", "K"].map((l, i) => (
              <span
                key={`book-${i}`}
                ref={(el) => (bookLetters.current[i] = el)}
                className={`${wordStyle} text-white`}
              >
                {l}
              </span>
            ))}
          </div>

          <span ref={bookRef} className={`${wordStyle} ${goldStyle}`}>
            GRAND
          </span>
        </div>
      </div>
    </section>
  );
}