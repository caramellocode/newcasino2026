"use client";

import Image from "next/image";
import styles from "../events.module.css";

export default function EventCard({ day, type, onClose }) {
  // day immer zweistellig (01–28)
  const dayFormatted = String(day).padStart(2, "0");

  // Dateiendung je Bereich
  const extension = type === "casino" ? "png" : "jpg";

  const src = `/images/events/${type}/day-${dayFormatted}.${extension}`;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.card}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={`Event ${day}. Februar – ${type}`}
          width={420}
          height={600}
          priority
        />

        <button
          className={styles.close}
          onClick={onClose}
          aria-label="Event schließen"
        >
          ×
        </button>
      </div>
    </div>
  );
}