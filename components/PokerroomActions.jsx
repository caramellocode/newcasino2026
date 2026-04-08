"use client";

import { useState } from "react";
import "@/styles/pokerroom-actions.css";

export default function PokerroomActions() {
  const [open, setOpen] = useState(false);

  return (
    <section className="pokerroom-actions">
      <div className="actions-grid">
        <a href="/pokerroom/turniere" className="action-btn">
          ALLE TURNIERE<br />ALLE EVENTS
        </a>

        <a
          href="/pdfs/turnierplan-februar.pdf"
          className="action-btn"
          download
        >
          TURNIERPLAN<br />FEBRUAR
        </a>

        <a href="/pokerroom/live" className="action-btn">
          LIVE POKER<br />DATEN
        </a>

        <a href="/pokerroom/cashgame" className="action-btn">
          CASHGAME<br />BAD BEAT JP
        </a>
      </div>

      {/* CONTACT BUTTON */}
      <button
        className={`action-btn full ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        KONTAKT & INFOS
      </button>

      {/* DROPDOWN */}
      <div className={`contact-dropdown ${open ? "open" : ""}`}>
        <div className="contact-item">
          <span>LIVE GAMES</span>
          <a href="tel:+4233777771">+423 377 77 71</a>
        </div>

        <div className="contact-item">
          <span>DAILY TOURNAMENTS</span>
          <a href="tel:+4233777770">+423 377 77 70</a>
        </div>

        <div className="contact-item">
          <span>HOTEL DEAL ANFRAGEN</span>
          <a href="tel:+4233777775">+423 377 77 75</a>
        </div>
      </div>
    </section>
  );
}