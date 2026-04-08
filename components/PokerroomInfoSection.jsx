"use client";

import "@/styles/pokerroom-info.css";

export default function PokerroomInfoSection() {
  return (
    <section className="pokerroom-info-section">
      <div className="pokerroom-info-bg" />

      <div className="pokerroom-info-content">
        <p className="eyebrow">GC POKERROOM</p>

        <h2>
          GRAND POKERFACES,
          <br />
          <span>HERZLICH WILLKOMMEN</span>
        </h2>

        <p className="text">
          Unser Pokerroom zählt zu den grössten und modernsten Pokerlocations in
          Liechtenstein und Umgebung.
          <br />
          <br />
          Mit bis zu 53 Tischen bietet er Platz für spannende Pokerrunden.
          Regelmässig werden hier grosse internationale Poker-Turniere
          veranstaltet, die Spieler aus aller Welt anziehen.
          <br />
          <br />
          
        </p>
      </div>
    </section>
  );
}