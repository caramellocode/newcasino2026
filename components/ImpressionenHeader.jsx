"use client";

export default function ImpressionenHeader() {
  return (
    <section className="relative py-8 flex justify-center items-center overflow-hidden bg-black">
      
      {/* SCHWEBE-CONTAINER */}
      <div className="relative animate-float">

        {/* SHINY OVERLAY */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
          <span className="shimmer-effect" />
        </div>

        {/* IMAGE */}
        <img
          src="/images/home-1/IMPRESSIONEN.png"
          alt="Impressionen"
          className="relative z-10 w-[260px] md:w-[360px] lg:w-[420px]
                     drop-shadow-[0_0_30px_rgba(222,191,100,0.35)]"
        />
      </div>
    </section>
  );
}