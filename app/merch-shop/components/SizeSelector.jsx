import styles from "../wsop-hoodie/product.module.css";

const SIZES = ["S", "M", "L", "XL", "XXL"];

export default function SizeSelector({ size, setSize }) {
  return (
    <div className={styles.sizeRow}>
      {SIZES.map((s) => (
        <label key={s} className={styles.sizeBox}>
          <input
            type="radio"
            checked={size === s}
            onChange={() => setSize(s)}
          />
          <span>{s}</span>
        </label>
      ))}
    </div>
  );
}