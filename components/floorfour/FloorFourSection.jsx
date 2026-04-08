"use client";

import { useEffect, useRef, useState } from "react";

export default function FloorFourSection({ image, title, text, reverse }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`ff-section ${reverse ? "ff-reverse" : ""} ${
        visible ? "ff-visible" : ""
      }`}
    >
      <div className="ff-section-inner">
        <div className="ff-section-image">
          <img src={image} alt={title} />
        </div>

        <div className="ff-section-text">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
}