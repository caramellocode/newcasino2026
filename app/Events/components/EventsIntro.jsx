"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "../events.module.css";

export default function EventsIntro({ onFinish }) {
  const grandRef = useRef(null);
  const eventsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.out" },
      onComplete: onFinish,
    });

    gsap.set([grandRef.current, eventsRef.current], { opacity: 0 });

    tl.fromTo(
      grandRef.current,
      { y: "-120%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1.2 }
    )
      .to({}, { duration: 0.3 })
      .fromTo(
        eventsRef.current,
        { y: "120%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1.1 },
        "-=0.2"
      );
  }, [onFinish]);

  return (
    <section className={styles.eventsIntro}>
      <div className={styles.introInner}>
        <h1 ref={grandRef} className={styles.introGrand}>
          GRAND
        </h1>
        <h1 ref={eventsRef} className={styles.introEvents}>
          EVENTS
        </h1>
      </div>
    </section>
  );
}