"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Loader({ onFinish }) {
  const wrapperRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Initial State
    gsap.set(textRef.current, {
      y: -40,
      opacity: 0,
      filter: "drop-shadow(0 0 0px #d4af37)",
    });

    // Loop Animation (soft & elegant)
    const loop = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });

    loop
      .to(textRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        filter: "drop-shadow(0 0 30px #d4af37)",
      })
      .to(textRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.9,
        ease: "power3.in",
        filter: "drop-shadow(0 0 0px #d4af37)",
      });

    return () => loop.kill();
  }, []);

  // Exit Animation
  const finish = () => {
    gsap.to(wrapperRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      onComplete: onFinish,
    });
  };

  // Fallback: max 6 Sekunden
  useEffect(() => {
    const t = setTimeout(finish, 6000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      <div
        ref={textRef}
        className="text-center text-[#d4af37] font-Garamond tracking-[0.35em]"
        style={{ fontSize: "22px" }}
      >
        FEEL&nbsp;GRAND<br />
        <span className="block mt-2 text-xs tracking-[0.6em]">
          PLAY&nbsp;GRAND
        </span>
      </div>
    </div>
  );
}