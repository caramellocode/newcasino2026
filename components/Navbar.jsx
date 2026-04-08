"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  
  { label: "SPIELANGEBOT", href: "/spielangebot" },
  { label: "HOTEL", href: "/hotel" },
  { label: "POKER", href: "/pokerroom" },
  { label: "FLOOR FOUR", href: "/floor-four" },
  { label: "WSOP", href: "/wsop" },
  { label: "GENUSSSPIEL", href: "/genussspiel" },
  { label: "IMPRESSIONEN", href: "/impressionen" },
  { label: "MERCH SHOP", href: "/merch-shop" },



  { label: "EVENTS", href: "/Events" },
  { label: "PROMOTIONEN", href: "/promotionen" },
  { label: "RESTAURANT", href: "/" },
  { label: "KONTAKT", href: "/kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleMenu = () => setOpen((x) => !x);
  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* links (Platzhalter) */}
          <div className="w-24" />

          {/* Logo mittig */}
          <div className="flex-1 flex justify-center">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/images/home-1/logo-1.png"
                alt="Grand Casino Liechtenstein"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Rhombus Menü-Button rechts */}
          <div className="w-24 flex justify-end">
            <button
              type="button"
              onClick={toggleMenu}
              aria-label="Menü öffnen"
              aria-expanded={open}
              className="group"
            >
              <div
                className={`w-11 h-11 border ${
                  open ? "border-[#DEBF64]" : "border-gray-400/70"
                } rotate-45 flex items-center justify-center transition-colors duration-200`}
              >
                <div className="-rotate-45 flex flex-col gap-[5px]">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className={`block h-[1px] w-6 ${
                        open ? "bg-[#DEBF64]" : "bg-gray-300/80"
                      } transition-colors duration-200`}
                    />
                  ))}
                </div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* FULLSCREEN-MENÜ */}
      <div
        className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full h-full flex flex-col items-center justify-center px-6">
          {/* Logo oben im Overlay */}
          <div className="mb-10 text-center">
            <div
              className="text-xs tracking-[0.6em] text-white uppercase"
              style={{ fontFamily: "'Syncopate', system-ui, sans-serif" }}
            >
              GRAND CASINO
            </div>
            <div
              className="text-[10px] tracking-[0.45em] text-white/70 uppercase mt-1"
              style={{ fontFamily: "'Syncopate', system-ui, sans-serif" }}
            >
              LIECHTENSTEIN
            </div>
          </div>

          {/* Menü + Schliessen-Button */}
          <div className="flex flex-col items-center gap-8 md:gap-10">
            {/* Menülinks mittig – mit Fade/Slide & Unterlinie */}
            <nav
              key={open ? "menu-open" : "menu-closed"} // remount → Animation neu starten
              className="space-y-4 md:space-y-5 text-center"
            >
              {navItems.map((item, index) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="menu-link inline-block uppercase"
                    style={{
                      animationDelay: `${0.08 + index * 0.06}s`,
                      fontFamily: "'Syncopate', system-ui, sans-serif",
                    }}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>

            {/* dezenter Schliessen-Button im Rhombus-Style */}
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Menü schliessen"
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-9 h-9 border border-gray-400/70 rotate-45 flex items-center justify-center group-hover:border-[#DEBF64] transition-colors duration-200">
                <div className="-rotate-45 relative w-4 h-4">
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-gray-300/80 group-hover:bg-[#DEBF64] rotate-45" />
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-gray-300/80 group-hover:bg-[#DEBF64] -rotate-45" />
                </div>
              </div>
              <span
                className="text-[10px] tracking-[0.3em] text-gray-300 uppercase group-hover:text-[#DEBF64]"
                style={{ fontFamily: "'Syncopate', system-ui, sans-serif" }}
              ></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
