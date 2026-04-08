"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./merch-shop.module.css";

export default function MerchShopPage() {
  const [selectedSize, setSelectedSize] = useState(null);

  /* ================= SCROLL FADE VIDEO ================= */
  useEffect(() => {
    const hero = document.querySelector(`.${styles.hero}`);
    const onScroll = () => {
      if (!hero) return;
      hero.style.opacity = Math.max(1 - window.scrollY / 600, 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className={styles.root}>
      {/* ================= VIDEO HERO ================= */}
      <section className={styles.hero}>
        <video autoPlay muted loop playsInline>
          <source src="/Videos/wsop-merch.mp4" type="video/mp4" />
        </video>

        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <h1>WSOP OFFICIAL MERCH</h1>
          <p>Limitierte Premium-Kollektion</p>
        </div>
      </section>

      <div className={styles.goldTransition} />

      {/* ================= FEATURE PRODUCT ================= */}
      <section className={styles.feature}>
        <div className={`${styles.container} ${styles.split}`}>
          {/* IMAGE */}
          <div className={styles.productImage}>
            <span className={styles.badge}>Limited Edition</span>
            <img
              src="/images/merch/hoodie-1.png"
              alt="WSOP Circuit Hoodie 2026"
            />
          </div>

          {/* TEXT */}
          <div className={styles.productText}>
            <h2>WSOP Circuit Hoodie 2026</h2>
            <p>
              Exklusiver Premium-Hoodie mit hochwertiger Stickerei.
              <br />
              <br />
              Entwickelt für echte Poker-Enthusiasten – limitiert & offiziell.
            </p>

            {/* SIZE + PRICE */}
            <div className={styles.sizeRow}>
              <div className={styles.sizeSelect}>
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <label key={size} className={styles.sizeBox}>
                    <input
                      type="radio"
                      name="size"
                      checked={selectedSize === size}
                      onChange={() => setSelectedSize(size)}
                    />
                    <span>{size}</span>
                  </label>
                ))}
              </div>

              {selectedSize && (
                <div className={`${styles.price} ${styles.animatePrice}`}>
                  CHF&nbsp;45.–
                </div>
              )}
            </div>

            {/* BUTTONS */}
            <div className={styles.buttonRow}>
              <Link
                href="/shop/wsop-hoodie"
                className={`${styles.goldBtn} ${styles.secondary}`}
              >
                Jetzt reservieren
              </Link>

              <Link href="/merch-shop/wsop-hoodie" className={styles.goldBtn}>
                Jetzt kaufen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.goldTransition} />

      {/* ================= COLLECTION ================= */}
      <section className={styles.gridSection}>
        <h2 className={styles.sectionTitle}>DIE KOLLEKTION</h2>

        <div className={styles.grid}>
          {[
            { name: "WSOP Hoodie", img: "hoodie.png" },
            { name: "WSOP T-Shirt", img: "shirt.png" },
            { name: "WSOP Cap", img: "cap.png" },
          ].map((item, i) => (
            <div className={styles.card} key={i}>
              <img src={`/images/merch/${item.img}`} alt={item.name} />
              <h3>{item.name}</h3>
              <br />

              <Link
                href="/shop"
                className={`${styles.goldBtn} ${styles.small}`}
              >
                Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
