const CATEGORIES = [
  { id: "casino", label: "CASINO" },
  { id: "poker", label: "POKERROOM" },
  { id: "restaurant", label: "RESTAURANT" },
  { id: "floorfour", label: "FLOOR FOUR" },
];

export default function ImpressionenCategories({ active, setActive }) {
  return (
    <section className="py-10 md:py-14 border-b border-white/10">
      <div
        className="
          max-w-6xl mx-auto
          px-4
          flex gap-8 md:gap-10
          justify-start md:justify-center
          overflow-x-auto overscroll-x-contain
          no-scrollbar
          text-xs md:text-sm
          tracking-[0.3em]
          whitespace-nowrap
        "
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActive(cat.id)}
            className={`relative pb-2 transition-all duration-300
              flex-shrink-0
              select-none
              touch-manipulation
              ${
                active === cat.id
                  ? "text-[#DEBF64]"
                  : "text-white/50 hover:text-white"
              }
            `}
          >
            {cat.label}

            {active === cat.id && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#DEBF64]" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}