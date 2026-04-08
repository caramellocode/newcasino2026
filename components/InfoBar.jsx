"use client";

import { useState } from "react";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { PiCameraDuotone } from "react-icons/pi";
import { IoClose } from "react-icons/io5";

export default function InfoBar() {
  const [openHours, setOpenHours] = useState(false);
  const [openRules, setOpenRules] = useState(false);

  return (
    <>
      <section className="infobar-wrapper py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="infobar-inner flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 px-6 md:px-10 py-4">
            {/* LINKS */}
            <div className="flex flex-col items-center md:items-start">
              <button
                type="button"
                onClick={() => setOpenHours(true)}
                className="infobar-title uppercase cursor-pointer hover:text-[#DEBF64] transition"
              >
                ÖFFNUNGSZEITEN
              </button>
              <div className="infobar-line"></div>
            </div>

            {/* ICONS */}
            <div className="flex items-center justify-center gap-6 text-xl">
              <a href="tel:+4232227777" className="infobar-icon">
                <IoIosCall />
              </a>
              <a
                href="https://www.google.com/maps/dir//Grand+Casino+Liechtenstein,+Selemad+10,+9487+Bendern/@47.1991179,9.5090982,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x479b31ece47339b5:0xcb421d08c4507b71!2m2!1d9.5025982!2d47.2051938?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="infobar-icon"
              >
                <IoLocationSharp />
              </a>
              <a
                href="https://facebook.com/grandcasinoliechtenstein"
                target="_blank"
                rel="noreferrer"
                className="infobar-icon"
              >
                <FaFacebookF />
              </a>
              <a href="mailto:grandcasino@gcli.li" className="infobar-icon">
                <BiEnvelope />
              </a>
              <span className="infobar-icon text-sm tracking-[0.2em]">18+</span>
              <a
                href="https://instagram.com/grandcasinoli"
                target="_blank"
                rel="noreferrer"
                className="infobar-icon"
              >
                <PiCameraDuotone />
              </a>
            </div>

            {/* RECHTS */}
            <div className="flex flex-col items-center md:items-end">
              <button
                type="button"
                onClick={() => setOpenRules(true)}
                className="infobar-title uppercase cursor-pointer hover:text-[#DEBF64] transition"
              >
                EINLASSBESTIMMUNGEN
              </button>
              <div className="infobar-line"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ÖFFNUNGSZEITEN MODAL */}
      {openHours && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4"
          onClick={() => setOpenHours(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl border border-[#DEBF64]/40 bg-[#111] p-6 md:p-8 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenHours(false)}
              className="absolute top-4 right-4 text-[#DEBF64] text-2xl hover:scale-110 transition"
              aria-label="Schließen"
            >
              <IoClose />
            </button>

            <h3 className="text-[#DEBF64] text-xl md:text-2xl font-semibold tracking-[0.18em] uppercase mb-6">
              Öffnungszeiten
            </h3>

            <div className="space-y-5">
              <div className="border-b border-white/10 pb-4">
                <h4 className="text-[#DEBF64] text-sm tracking-[0.2em] uppercase mb-2">
                  Casino
                </h4>
                <p className="text-white/90 text-base">
                  täglich 11:00 – 05:00 Uhr
                </p>
              </div>

              <div className="border-b border-white/10 pb-4">
                <h4 className="text-[#DEBF64] text-sm tracking-[0.2em] uppercase mb-2">
                  Poker
                </h4>
                <p className="text-white/90 text-base">
                  täglich 17:00 – 05:00 Uhr
                </p>
              </div>

              <div>
                <h4 className="text-[#DEBF64] text-sm tracking-[0.2em] uppercase mb-3">
                  Live-Game
                </h4>
                <div className="space-y-2 text-white/90 text-base">
                  <p>Mo – Do 18:00 – 03:00 Uhr</p>
                  <p>Fr 18:00 – 05:00 Uhr</p>
                  <p>Sa 15:00 – 05:00 Uhr</p>
                  <p>So 15:00 – 03:00 Uhr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* EINLASSBESTIMMUNGEN MODAL */}
      {openRules && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4"
          onClick={() => setOpenRules(false)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl border border-[#DEBF64]/40 bg-[#111] text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenRules(false)}
              className="absolute top-4 right-4 z-10 text-[#DEBF64] text-2xl hover:scale-110 transition"
              aria-label="Schließen"
            >
              <IoClose />
            </button>

            <div className="p-6 md:p-8 border-b border-white/10">
              <h3 className="text-[#DEBF64] text-xl md:text-2xl font-semibold tracking-[0.18em] uppercase">
                Einlassbestimmungen
              </h3>
            </div>

            <div className="max-h-[70vh] overflow-y-auto px-6 md:px-8 py-6 space-y-8">
              <div>
                <h4 className="text-[#DEBF64] text-sm tracking-[0.2em] uppercase mb-3">
                  Dresscode für Damen und Herren
                </h4>
                <p className="text-white/90 leading-7">
                  Wir ersuchen Sie das Grand Casino Liechtenstein in
                  entsprechender Kleidung zu besuchen. „Come as you feel good“
                  in Büro- und Businesskleidung. Für Damen und Herren –
                  sportlich & elegant passt immer. So sind Sie richtig
                  angezogen mit Stil. Wir ersuchen unsere männlichen Gäste um
                  lange Hosen. Ebenso bitten wir um Verständnis, dass wir
                  Personen in Trainings- oder Arbeitskleidung keinen Eintritt in
                  unser Casino gewähren.
                </p>
              </div>

              <div>
                <h4 className="text-[#DEBF64] text-sm tracking-[0.2em] uppercase mb-3">
                  Hausordnung
                </h4>
              </div>

              <div>
                <h4 className="text-[#DEBF64] text-sm tracking-[0.2em] uppercase mb-3">
                  Voraussetzungen
                </h4>
                <p className="text-white/90 leading-7 mb-4">
                  Ihnen wird der Eintritt ins Grand Casino Liechtenstein ab dem
                  vollendeten 18. Lebensjahr gestattet. Ein Pass und/oder
                  Personalausweis ist ausnahmslos erforderlich.
                </p>

                <div className="space-y-5">
                  <div>
                    <h5 className="text-white font-semibold mb-2">
                      Für folgende Länder ist der Eintritt mit gültigem
                      Personalausweis und/oder Reisepass erforderlich:
                    </h5>
                    <p className="text-white/80 leading-7">
                      Fürstentum Liechtenstein, Schweiz, Österreich,
                      Deutschland, Italien, Belgien, Bulgarien, Dänemark,
                      Estland, Finnland, Frankreich, Griechenland, Irland,
                      Island, Kroatien, Lettland, Litauen, Luxemburg, Malta,
                      Niederlande, Norwegen, Polen, Portugal, Rumänien,
                      Schweden, Slowakei, Slowenien, Spanien, Tschechien,
                      Ungarn, Vereintes Königreich, Zypern
                    </p>
                  </div>

                  <div>
                    <h5 className="text-white font-semibold mb-2">
                      Für folgende Länder ist der Eintritt nur mit gültigem
                      Reisepass erforderlich:
                    </h5>
                    <p className="text-white/80 leading-7">
                      Bosnien, Montenegro, Serbien, Kosovo, Mazedonien,
                      Albanien, Türkei und alle übrigen Länder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}