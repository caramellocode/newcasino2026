"use client";

import styles from "../kontakt.module.css";

export default function ContactSection({
  title,
  phone,
  phoneHref,
  mail,
  mailHref,
  image,
}) {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactInner}>
        {/* TEXT */}
        <div className={styles.contactText}>
          <p className={styles.contactSmall}>Wir sind gerne für Sie da</p>
          <h2 className={styles.contactTitle}>{title}</h2>

          <div className={styles.contactItem}>
            <span>Telefon</span>
            <a href={phoneHref}>{phone}</a>
          </div>

          <div className={styles.contactItem}>
            <span>Mail</span>
            <a href={mailHref}>{mail}</a>
          </div>

          <div className={styles.contactItem}>
            <span>Adresse</span>
            <p>Selemad 10, 9487 Gamprin-Bendern</p>
          </div>
        </div>

        {/* IMAGE MIT GOLDRAHMEN */}
        <div className={styles.contactImageWrapper}>
          <img
            src={image}
            alt={title}
            className={styles.contactImage}
          />
        </div>
      </div>
    </section>
  );
}