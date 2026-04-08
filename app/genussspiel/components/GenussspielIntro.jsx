"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GenussspielIntro({ onFinish }) {
  const genussRef = useRef(null);
  const undRef = useRef(null);
  const spielRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.out" },
      onComplete: onFinish,
    });

    gsap.set([genussRef.current, undRef.current, spielRef.current], {
      opacity: 0,
    });

    // Genuss fällt rein
    tl.fromTo(
      genussRef.current,
      { y: "-120%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1.2 }
    )

      // kleines „und“
      .fromTo(
        undRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 },
        "-=0.2"
      )

      // kurze Pause
      .to({}, { duration: 0.25 })

      // Spiel von unten
      .fromTo(
        spielRef.current,
        { y: "120%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1.1 },
        "-=0.2"
      );
  }, [onFinish]);

  return (
    <section className="fixed inset-0 bg-black z-[90] flex items-center justify-center overflow-hidden">
      <div className="text-center px-6 leading-none">
        <h1
          ref={genussRef}
          className="text-[18vw] md:text-[12vw] font-extrabold tracking-tight text-white"
        >
          Genuss
        </h1>

        <div
          ref={undRef}
          className="my-2 text-xs md:text-sm uppercase tracking-[0.4em] text-[#bfa24a]"
        >
          und
        </div>

        <h1
          ref={spielRef}
          className="text-[18vw] md:text-[12vw] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFF2B0] via-[#C9A84E] to-[#8F6B1F]"
        >
          Spiel
        </h1>
      </div>
    </section>
  );
}