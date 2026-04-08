"use client";

import styles from "../events.module.css";

export default function EventsTimeline({ activeDay, onSelect }) {
  return (
    <div className={styles.timeline}>
      {Array.from({ length: 30 }, (_, i) => {
        const day = i + 1;
        const isEven = day % 2 === 0;

        return (
          <button
            key={day}
            onClick={() => onSelect(day)}
            className={`${styles.dayBubble} ${
              isEven ? styles.dark : styles.gold
            } ${activeDay === day ? styles.active : ""}`}
          >
            {day}
          </button>
        );
      })}
    </div>
  );
}