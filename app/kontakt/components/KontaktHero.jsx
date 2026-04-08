"use client";

import styles from "../kontakt.module.css";

export default function KontaktHero() {
  return (
    <section className={styles.kontaktHero}>
      <div className={styles.kontaktHeroOverlay} />

      <div className={styles.kontaktHeroContent}>
        <h1>KONTAKT</h1>
        <p>Wir sind gerne für Sie da</p>
      </div>
    </section>
  );
}