"use client";

import Image from "next/image";
import HotelHero from "./HotelHero";
import HotelPrices from "./HotelPrices";
import styles from "./hotel.module.css";

export default function HotelPageClient() {
  return (
    <div className={styles.hotel}>
      {/* ===============================
          HERO + INTRO (FULLSCREEN)
      =============================== */}
      <HotelHero />

      {/* ===============================
          BOOKING BAR
      =============================== */}
      <section className={styles.bookingWrapper}>
        <div className={styles.bookingBar}>
          <div>
            <label>Check-in</label>
            <input type="date" />
          </div>
          <div>
            <label>Check-out</label>
            <input type="date" />
          </div>
          <div>
            <label>Gäste</label>
            <select>
              <option>1 Erwachsener</option>
              <option>2 Erwachsene</option>
              <option>3 Erwachsene</option>
              <option>4 Erwachsene</option>
              <option>5 Erwachsene</option>
            </select>
          </div>
          <button>Verfügbarkeit prüfen</button>
        </div>
      </section>

      {/* ===============================
          ZIMMER & SUITEN
      =============================== */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2>Luxuszimmer & Suiten</h2>
          <p>
            Unsere Hotelzimmer verbinden modernes Design mit höchstem Komfort –
            ideal für Casino-, Event- und VIP-Gäste.
          </p>

          <div className={styles.roomGrid}>
            <div className={styles.roomCard}>
              <Image
                src="/images/home-1/slide1.jpg"
                alt="Deluxe Zimmer"
                width={500}
                height={350}
              />
              <h3>Deluxe Zimmer</h3>
              <p>Elegantes Design · King Size Bed · Casino View</p>
            </div>

            <div className={styles.roomCard}>
              <Image
                src="/images/home-1/2020-09-08-Imagefotos-GCLI-0443.JPG"
                alt="Junior Suite"
                width={500}
                height={350}
              />
              <h3>Junior Suite</h3>
              <p>Großzügiger Wohnbereich · Premium Ausstattung</p>
            </div>

            <div className={styles.roomCard}>
              <Image
                src="/images/home-1/r3.jpg"
                alt="VIP Suite"
                width={500}
                height={350}
              />
              <h3>VIP Suite</h3>
              <p>Separater Wohnbereich · VIP Service · Maximaler Luxus</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================
          SPA & WELLNESS
      =============================== */}
      <section className={styles.spa}>
        <div className={styles.spaInner}>
          <div className={styles.spaImage}>
            <Image
              src="/images/home-1/557813775.jpg"
              alt="Spa & Wellness"
              width={600}
              height={450}
            />
          </div>

          <div className={styles.spaContent}>
            <h2>Spa & Wellness</h2>
            <p>
              Nach einer langen Casinonacht erwartet Sie pure Entspannung.
              Unser Spa- & Wellnessbereich bietet Ruhe, Erholung und Luxus.
            </p>
            <ul>
              <li>Sauna & Dampfbad</li>
              <li>Massage & Relax Zonen</li>
              <li>Ruhebereiche mit Panoramablick</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===============================
          PREISE
      =============================== */}
      <HotelPrices />
    </div>
  );
}