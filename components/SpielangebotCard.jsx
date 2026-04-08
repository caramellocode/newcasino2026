"use client";

import { useState } from "react";
import Link from "next/link";

export default function SpielangebotCard({
  title,
  hours,
  phone,
  href,
  image,
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="spielangebot-perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <div className="spielangebot-card">
        <div
          className={`spielangebot-inner ${
            flipped ? "is-flipped" : ""
          }`}
        >
          {/* VORDERSEITE */}
          <div
            className="spielangebot-face spielangebot-front"
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <h2>{title}</h2>
          </div>

          {/* RÜCKSEITE */}
          <div className="spielangebot-face spielangebot-back">
            <p className="label">Öffnungszeiten</p>
            <p className="value">{hours}</p>

            <p className="label">Telefon</p>
            <p className="value">{phone}</p>

            <Link href={href}>
              <button className="spielangebot-button">
                Mehr erfahren
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}