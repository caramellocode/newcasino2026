"use client";

export default function PromotionCard({
  title,
  image,
  price,
  items = [],
  link,
}) {
  return (
    <article className="promo-card">
      {/* IMAGE */}
      <div className="promo-image-wrap">
        <img
          src={image}
          alt={title}
          className="promo-image"
          loading="lazy"
        />
      </div>

      {/* CONTENT */}
      <div className="promo-content">
        <h3 className="promo-title">{title}</h3>

        <div className="promo-price">{price}</div>

        {items.length > 0 && (
          <ul className="promo-list">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="promo-btn"
          >
            Mehr Infos
          </a>
        )}
      </div>
    </article>
  );
}