import "@/styles/pokerroom-cards.css";
import Link from "next/link";

export default function PokerroomCard({
  image,
  phone,
  planHref,
  moreHref,
}) {
  return (
    <div className="poker-card">
      <div className="poker-card-inner">
        {/* FRONT */}
        <div
          className="poker-card-front"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* BACK */}
        <div className="poker-card-back">
          <p className="phone">{phone}</p>

          <a href={planHref} className="btn gold" download>
            TURNIERPLAN FEB.
          </a>

          <Link href={moreHref} className="btn outline">
            WEITERE TURNIERE
          </Link>
        </div>
      </div>
    </div>
  );
}