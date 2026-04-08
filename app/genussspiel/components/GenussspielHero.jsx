export default function GenussspielHero() {
  return (
    <section
      className="genussspiel-hero"
      style={{
        backgroundImage:
          "url('/images/home-1/genuss-m.webp')",
      }}
    >
      <div className="genussspiel-hero-overlay">
        <h1 className="text-[#d4af37] tracking-[0.25em] text-3xl font-semibold">
          GENUSS & SPIEL
        </h1>
        <p className="mt-4 text-white/80 max-w-md">
          Kulinarik, Casino & besondere Momente perfekt kombiniert.
        </p>
      </div>
    </section>
  );
}