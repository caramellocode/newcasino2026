"use client";

import { useState } from "react";
import styles from "./product.module.css";

import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";

export default function WsopHoodiePage() {
  const [size, setSize] = useState(null);

  return (
    <main className={styles.page}>
      <section className={styles.productSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <ProductGallery />
            <ProductInfo size={size} setSize={setSize} />
          </div>
        </div>
      </section>
    </main>
  );
}