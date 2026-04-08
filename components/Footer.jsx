"use client";

import { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { BiEnvelope, BiLogoLinkedin } from "react-icons/bi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

/* 🔹 Hilfe-Widget angepasst */
function HelpWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Geschlossener Zustand: Bubble oberhalb vom Kreis */}
      {!open && (
        <div className="mb-3 mr-1 relative">
          <div className="bg-[#DEBF64] text-white text-[13px] font-semibold px-5 py-2 rounded-full shadow-xl uppercase tracking-[0.04em]">
            Need help?
          </div>

          {/* Kleiner Bubble-Pfeil */}
          <div className="absolute -bottom-1 right-5 w-3 h-3 bg-[#DEBF64] rotate-45" />
        </div>
      )}

      {/* Geöffneter Zustand */}
      {open && (
        <div className="relative mb-4">
          <div className="bg-[#191515] text-white rounded-lg shadow-2xl w-72 px-5 py-4 border border-[#DEBF64]/40">
            <div className="flex justify-between items-start mb-2">
              <span className="text-[11px] tracking-[0.2em] uppercase text-[#DEBF64]">
                BRAUCHST DU HILFE?
              </span>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition"
              >
                ✕
              </button>
            </div>

            <p className="flex items-center text-sm text-white/80 mb-2">
              <IoIosCall className="text-[#DEBF64] mr-2 shrink-0" />
              +423 222 77 77
            </p>
            <p className="flex items-center text-sm text-white/80">
              <BiEnvelope className="text-[#DEBF64] mr-2 shrink-0" />
              guestrelations@gcli.li
            </p>
          </div>
        </div>
      )}

      {/* Runder Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#DEBF64]  shadow-2xl"
      >
        <img
          src="/images/home-1/logo-2.png"
          alt="GCLI"
          className="w-full bg-[#191515]"
        />

        {/* Grüner Online-Punkt */}
        <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-lime-400 border-2 border-white rounded-full" />
      </button>
    </div>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="bg-[#121212] text-lightGray">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <img
            src="/images/home-1/brand-2.png"
            alt="Grand Casino Liechtenstein"
            className="w-36"
          />

          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <IoIosCall className="text-[#DEBF64]" />
              +423 222 77 77
            </p>
            <p className="flex items-center gap-2">
              <BiEnvelope className="text-[#DEBF64]" />
              grandcasino@gcli.li
            </p>
            <p className="flex items-center gap-2">
              <IoLocationSharp className="text-[#DEBF64]" />
              Selemad 10, 9487 Gamprin-Bendern
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 py-4 px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between text-xs">
            <span>© {new Date().getFullYear()} Grand Casino Liechtenstein</span>

            <div className="flex items-center gap-4">
              <a href="https://facebook.com/grandcasinoliechtenstein" target="_blank" rel="noreferrer">
                <FaFacebookF className="hover:text-[#DEBF64]" />
              </a>
              <a href="https://instagram.com/grandcasinoli" target="_blank" rel="noreferrer">
                <FaInstagram className="hover:text-[#DEBF64]" />
              </a>
              <a
                href="https://linkedin.com/company/grand-casino-liechtenstein-bendern"
                target="_blank"
                rel="noreferrer"
              >
                <BiLogoLinkedin className="hover:text-[#DEBF64]" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <HelpWidget />
    </>
  );
}