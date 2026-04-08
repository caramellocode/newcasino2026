"use client";

import { useEffect, useState } from "react";
import WSOPIntro from "./WSOPIntro";

const EVENT_DATE = new Date("2026-02-26T12:00:00");

export default function WSOPClient() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = EVENT_DATE - new Date();
      if (diff <= 0) return;

      setTime({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff / (1000 * 60 * 60)) % 24),
        m: Math.floor((diff / (1000 * 60)) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="wsop-root">
      <WSOPIntro />
      {/* ================= HERO ================= */}
      <section className="wsop-hero">
        <div className="wsop-hero-overlay">
          
         
        </div>
      </section>

      {/* ================= COUNTDOWN ================= */}
      <section className="wsop-countdown">
        <h2>SAVE THE DATE</h2>

        <div className="countdown-grid">
          <div className="count-box">
            {time.d}
            <span>Tage</span>
          </div>
          <div className="count-box">
            {time.h}
            <span>Std</span>
          </div>
          <div className="count-box">
            {time.m}
            <span>Min</span>
          </div>
          <div className="count-box">
            {time.s}
            <span>Sek</span>
          </div>
        </div>
      </section>

      {/* ================= STORY ================= */}
      {/* ================= WSOP INFO SECTION ================= */}
      <section className="wsop-info">
        <div className="wsop-info-inner">
          {/* LINKER TEIL – BADGE */}
          <div className="wsop-info-badge">
            <img
              src="/images/home-1/lllllo.png"
              alt="WSOP Circuit 2026 Badge"
            />
          </div>

          {/* RECHTER TEIL – TEXT */}
          <div className="wsop-info-text">
            <h2>WSOP Circuit 2026</h2>

            <p>
              Vom <strong>26. Februar bis 10. März 2026</strong> wird das Grand
              Casino Liechtenstein zur Bühne eines der prestigeträchtigsten
              Poker-Events der Welt.
            </p>

            <p className="wsop-info-sub">
              12 offizielle Ring Events. Internationale Elite. Geschichte live.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TURNIER SCHEDULE ================= */}
      <section className="wsop-schedule">
        <h3>Turnier Schedule</h3>

        <div className="wsop-schedule-images">
          <img src="/images/home-1/wsop33.jpg" alt="WSOP Flyer" />
          <img src="/images/home-1/Ringe1.jpg" alt="WSOP Ring Events" />
        </div>

        <div className="wsop-buttons">
          <a
            href="/images/home-1/GCLI_A5_WSOPC-Schedule_einzelseiten.pdf"
            download
            className="btn-gold"
          >
            Turnier Schedule downloaden
          </a>

          <a href="https://live.gcli.li" className="btn-outline">
            Live Poker
          </a>
        </div>
      </section>

      {/* ================= HOTEL DEALS ================= */}
      <section className="wsop-hotels">
        <h3>Die besten Hoteldeals</h3>

        <div className="wsop-schedule-images">
          <img src="/images/home-1/wsop1-1.jpg" alt="Hotel Deal 1" />
          <img src="/images/home-1/wsoph-1.jpg" alt="Hotel Deal 2" />
        </div>

        <a href="/lokale-hotels" className="btn-gold">
          Zu den Hotels
        </a>
      </section>
    </main>
  );
}
