import styles from "../wsop-hoodie/product.module.css";
import SizeSelector from "./SizeSelector";

export default function ProductInfo({ size, setSize }) {
  return (
    <div className={styles.info}>
      <h1 className={styles.title}>WSOP Circuit Hoodie 2026</h1>

      <p className={styles.description}>
        Exklusiver Premium-Hoodie mit hochwertiger Stickerei.
        <br /><br />
        Entwickelt für echte Poker-Enthusiasten – limitiert & offiziell.
      </p>

      <SizeSelector size={size} setSize={setSize} />

      {size && <div className={styles.price}>CHF&nbsp;45.–</div>}

      <div className={styles.actions}>
        <button className={`${styles.goldBtn} ${styles.secondary}`}>
          Jetzt reservieren
        </button>
        <button className={styles.goldBtn}>
          Jetzt kaufen
        </button>
      </div>
    </div>
  );
}