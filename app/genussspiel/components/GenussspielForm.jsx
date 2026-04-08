"use client";

import { useState } from "react";

export default function GenussspielForm() {
  const [wein, setWein] = useState("ohne");

  return (
    <section className="bg-black py-24 px-4 md:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">

        {/* HEADLINE */}
        <h3
          className="text-center text-xl md:text-2xl mb-4 tracking-[0.35em] text-[#DEBF64]"
          style={{ fontFamily: "'Syncopate', system-ui, sans-serif" }}
        >
          JETZT EINFACH PER MAIL RESERVIEREN
        </h3>

        <p className="text-center text-white/60 mb-14 text-sm">
          Senden Sie uns Ihre Reservation – wir melden uns zeitnah bei Ihnen.
        </p>

        {/* FORM */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Anzahl Gäste */}
          <div>
            <label className="block text-xs tracking-[0.25em] uppercase text-white/70 mb-2">
              Anzahl Gäste
            </label>
            <select
              className="w-full bg-black border border-white/20 rounded-lg px-4 py-3
                         text-white focus:border-[#DEBF64] outline-none transition"
            >
              {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                <option key={n} value={n}>{n} Personen</option>
              ))}
            </select>
          </div>

          {/* Datum */}
          <div>
            <label className="block text-xs tracking-[0.25em] uppercase text-white/70 mb-2">
              Wunschdatum
            </label>
            <input
              type="date"
              className="w-full bg-black border border-white/20 rounded-lg px-4 py-3
                         text-white focus:border-[#DEBF64] outline-none transition"
            />
          </div>

          {/* Weinbegleitung */}
          <div className="md:col-span-2">
            <label className="block text-xs tracking-[0.25em] uppercase text-white/70 mb-4">
              Weinbegleitung
            </label>

            <div className="flex flex-col sm:flex-row gap-4">
              <label
                className={`flex items-center gap-3 px-5 py-4 rounded-lg border cursor-pointer transition
                  ${wein === "mit"
                    ? "border-[#DEBF64] bg-[#DEBF64]/10"
                    : "border-white/20 hover:border-white/40"}
                `}
              >
                <input
                  type="radio"
                  name="wein"
                  value="mit"
                  className="hidden"
                  onChange={() => setWein("mit")}
                />
                <span className="text-white">
                  Mit Weinbegleitung <span className="text-[#DEBF64]">(+ CHF 20)</span>
                </span>
              </label>

              <label
                className={`flex items-center gap-3 px-5 py-4 rounded-lg border cursor-pointer transition
                  ${wein === "ohne"
                    ? "border-[#DEBF64] bg-[#DEBF64]/10"
                    : "border-white/20 hover:border-white/40"}
                `}
              >
                <input
                  type="radio"
                  name="wein"
                  value="ohne"
                  className="hidden"
                  onChange={() => setWein("ohne")}
                  defaultChecked
                />
                <span className="text-white">
                  Ohne Weinbegleitung
                </span>
              </label>
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="block text-xs tracking-[0.25em] uppercase text-white/70 mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Vor- und Nachname"
              className="w-full bg-black border border-white/20 rounded-lg px-4 py-3
                         text-white focus:border-[#DEBF64] outline-none transition"
            />
          </div>

          {/* E-Mail */}
          <div>
            <label className="block text-xs tracking-[0.25em] uppercase text-white/70 mb-2">
              E-Mail
            </label>
            <input
              type="email"
              placeholder="name@email.ch"
              className="w-full bg-black border border-white/20 rounded-lg px-4 py-3
                         text-white focus:border-[#DEBF64] outline-none transition"
            />
          </div>

          {/* SUBMIT */}
          <div className="md:col-span-2 flex justify-center mt-8">
            <button
              type="submit"
              className="px-12 py-4 rounded-full border border-[#DEBF64]
                         bg-gradient-to-r from-[#DEBF64] via-[#f7e6a4] to-[#DEBF64]
                         text-black text-xs tracking-[0.3em] uppercase
                         shadow-[0_0_22px_rgba(222,191,100,0.6)]
                         transition-all duration-200
                         hover:shadow-[0_0_40px_rgba(222,191,100,0.9)]
                         hover:-translate-y-[1px]"
            >
              RESERVATION SENDEN
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}