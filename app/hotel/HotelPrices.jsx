"use client";

import { useState } from "react";
import "@/styles/pokerroom-actions.css";

export default function HotelPrices() {
  const [open, setOpen] = useState(false);

  return (
    <section className="pokerroom-actions">
      {/* TITLE */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2
          style={{
            color: "#c9a24d",
            fontFamily: "Garamond, serif",
            fontSize: "2.6rem",
          }}
        >
          Preise
        </h2>
        <p style={{ color: "#d0d0d0" }}>
          Transparente Preise für Ihren Aufenthalt
        </p>
      </div>

      {/* BUTTON */}
      <button
        className={`action-btn full ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        ZIMMERPREISE ANZEIGEN
      </button>

      {/* DROPDOWN */}
      <div className={`contact-dropdown ${open ? "open" : ""}`}>
        <div className="contact-item">
          <span>STANDARDPREIS</span>
          <strong>CHF 175.00 / Nacht</strong>
          <small>2 Personen</small>
        </div>

        <div className="contact-item">
          <span>EINZELBELEGUNG</span>
          <strong>CHF 135.00 / Nacht</strong>
          <small>1 Person</small>
        </div>

        <div className="contact-item">
          <span>KURTAXE</span>
          <strong>CHF 3.50</strong>
        </div>

        <div className="contact-item">
          <small style={{ opacity: 0.75 }}>
            Alle Preise verstehen sich inkl. Steuern.
          </small>
        </div>
      </div>
    </section>
  );
}