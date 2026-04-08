import Image from "next/image";
import styles from "../wsop-hoodie/product.module.css";

export default function ProductGallery() {
  return (
    <div className={styles.gallery}>
      <span className={styles.badge}>LIMITED EDITION</span>

      <Image
        src="/images/merch/hoodie-1.png"
        alt="WSOP Circuit Hoodie 2026"
        width={520}
        height={520}
        priority
        className={styles.productImage}
      />
    </div>
  );
}