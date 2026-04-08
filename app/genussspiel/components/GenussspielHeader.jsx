"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function GenussspielHeader() {
  const container = useRef(null);
  const genussRef = useRef(null);
  const spielRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      gsap.set([genussRef.current, spielRef.current], {
        opacity: 0,
        y: -120,
        color: "#ffffff",
      });

      tl.to(genussRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.9,
      })
        .to(genussRef.current, {
          color: "#d4af37",
          duration: 0.4,
        })
        .to(
          spielRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
          },
          "-=0.2"
        )
        .to(spielRef.current, {
          color: "#d4af37",
          duration: 0.4,
        })
        .to(container.current, {
          opacity: 0,
          duration: 0.6,
          delay: 0.4,
          pointerEvents: "none",
        });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="relative w-full h-[30vh] sm:h-[45vh] md:h-[60vh] bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="flex gap-[4vw]">
        <h1
          ref={genussRef}
          className="text-[18vw] sm:text-[14vw] md:text-[10vw] font-bold tracking-tight"
        >
          GENUSS
        </h1>
        <h1
          ref={spielRef}
          className="text-[18vw] sm:text-[14vw] md:text-[10vw] font-bold tracking-tight"
        >
          SPIEL
        </h1>
      </div>
    </section>
  );
}