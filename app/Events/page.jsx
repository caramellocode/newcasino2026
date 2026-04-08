"use client";

import { useState } from "react";
import styles from "./events.module.css";

import EventsIntro from "./components/EventsIntro";
import EventsTimeline from "./components/EventsTimeline";
import EventCard from "./components/EventCard";

export default function EventsPage() {
  const [introDone, setIntroDone] = useState(false);
  const [activeDay, setActiveDay] = useState(null);
  const [activeSection, setActiveSection] = useState(null); // 👈 NEU

  const handleSelect = (day, section) => {
    if (activeDay === day && activeSection === section) {
      setActiveDay(null);
      setActiveSection(null);
    } else {
      setActiveDay(day);
      setActiveSection(section);
    }
  };

  return (
    <div className={styles.eventsRoot}>
      {/* ===== INTRO ===== */}
      {!introDone && <EventsIntro onFinish={() => setIntroDone(true)} />}

      {introDone && (
        <>
          {/* ===== CASINO EVENTS ===== */}
          <section className={styles.eventsSectionCasino}>
            <h2 className={styles.sectionTitle}>
              Grand APRIL <br /> ALLE EVENTS IM CASINO
            </h2>

            <div className={styles.timelineWrapper}>
              <EventsTimeline
                activeDay={activeDay}
                onSelect={(day) => handleSelect(day, "casino")}
              />
            </div>
          </section>

          {/* ===== POKER EVENTS ===== */}
          <section className={styles.eventsSectionPoker}>
            <h2 className={styles.sectionTitle}>
             POKER APRIL <br /> ALLE EVENTS IM POKERROOM
            </h2>

            <div className={styles.timelineWrapper}>
              <EventsTimeline
                activeDay={activeDay}
                onSelect={(day) => handleSelect(day, "poker")}
              />
            </div>
          </section>
        </>
      )}

      {/* ===== EVENT CARD ===== */}
      {activeDay && activeSection && (
        <EventCard
          day={activeDay}
          type={activeSection}   
          onClose={() => {
            setActiveDay(null);
            setActiveSection(null);
          }}
        />
      )}
    </div>
  );
}