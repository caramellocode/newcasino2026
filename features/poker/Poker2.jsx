"use client";

/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Poker2.css"; // ✨ Gold- & Glanzanimationen

export default function Poker2() {
  const [routeSelected, setRouteSelected] = useState("");

  const sliderData = [
    {
      id: 1,
      img: "/images/home-1/wsop2.jpg",
      title: "",
    },
  ];

  return (
    <div>
      {routeSelected === "" && (
        <>
          {/* ================= HEADER SLIDER ================= */}
          <Swiper
            centeredSlides
            navigation={false}
            speed={3000}
            autoplay={{
              delay: 10000,
              disableOnInteraction: true,
            }}
            loop
            pagination={{ clickable: true }}
            modules={[Navigation, Autoplay, Pagination]}
            className="mySwiper"
            style={{ "--swiper-navigation-display": "none" }}
          >
            {sliderData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div
                  className="w-full h-[350px] md:h-[550px] xl:h-[750px]
                             flex flex-col items-center justify-center
                             text-white bg-cover bg-center relative
                             bg-[rgba(240, 230, 230, 0.4)] bg-blend-multiply"
                  style={{ backgroundImage: `url(${slide.img})` }}
                >
                  {slide.title && (
                    <h1
                      className="text-5xl font-bold text-[#DEBF64]"
                      style={{ textShadow: "0.1em 0.01em 0.1em #000" }}
                    >
                      {slide.title}
                    </h1>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ================= GOLD TRANSITION ================= */}
          <div className="gold-transition" />

          {/* ================= WSOP INFO ================= */}
          <section
            className="relative w-full bg-cover bg-center bg-no-repeat py-20"
            style={{ backgroundImage: "url('/images/home-1/4.jpeg')" }}
          >
            <div className="absolute inset-0 bg-black/60" />

            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-6 lg:px-20 relative z-10">
              {/* Bild */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div
                  className="w-[320px] h-[320px] bg-white rounded-full
                             flex items-center justify-center shadow-lg
                             border-2 border-[#DEBF64]/40
                             hover:border-[#DEBF64] hover:scale-105
                             transition-all duration-500"
                >
                  <img
                    src="/images/home-1/wsop1.png"
                    alt="Poker Impression"
                    className="w-[260px] h-[260px] object-contain rounded-full"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
                <img
                  src="/images/home-1/pngwsopnummer1 und 2.png"
                  alt="WSOP Circuit"
                  className="wsop-logo mb-4"
                />

                <h2 className="text-3xl md:text-4xl 2xl:text-[42px] text-[#DEBF64] mb-4 font-Garamond uppercase">
                  WSOP Circuit 2026 im Grand Casino Liechtenstein
                </h2>

                <p className="font-Lora text-lightGray leading-relaxed text-base md:text-lg">
                  Ein neues Highlight kündigt sich an – und es wird legendär.
                  <br />
                  Vom 26. Februar bis 10. März 2026 verwandelt sich das Grand
                  Casino Liechtenstein in den Schauplatz eines der
                  prestigeträchtigsten Poker-Events der Welt:
                  <br />
                  <strong>World Series of Poker Circuit.</strong>
                </p>
              </div>
            </div>
          </section>

          {/* ================= GOLD TRANSITION ================= */}
          <div className="gold-transition" />

          {/* ================= SAVE THE DATE ================= */}
          <section
            className="relative w-full bg-cover bg-center bg-no-repeat py-20"
            style={{ backgroundImage: "url('/images/home-1/3.jpeg')" }}
          >
            <div className="absolute inset-0 bg-black/60" />

            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-20 relative z-10">
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src="/images/home-1/wsop.jpg"
                  alt="WSOP Circuit 2026"
                  className="rounded-xl shadow-lg w-[90%] lg:w-full
                             object-cover border-2 border-[#DEBF64]/40
                             hover:border-[#DEBF64] hover:scale-105
                             transition-all duration-500"
                />
              </div>

              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl 2xl:text-[42px] text-[#DEBF64] mb-4 font-Garamond uppercase">
                  Save the Date: 26.02.–10.03.2026
                </h2>

                <p className="font-Lora text-lightGray leading-relaxed text-base md:text-lg">
                  12 offizielle Ring Events, internationale Spieler,
                  unvergleichliche Turnier-Atmosphäre und Poker-Geschichte
                  live erleben.
                </p>
              </div>
            </div>
          </section>

          {/* ================= GOLD TRANSITION ================= */}
          <div className="gold-transition" />

          {/* ================= 3 IMAGES + BUTTONS ================= */}
          <section className="w-full bg-black py-20 text-center">
            <div className="container mx-auto px-6 lg:px-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                {[
                  "/images/home-1/ringev.png",
                  "/images/home-1/motel1.jpg",
                  "/images/home-1/Gruppendeal1.png",
                ].map((img, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-xl
                               border-2 border-[#DEBF64]/40
                               hover:border-[#DEBF64]
                               transition-all duration-500"
                  >
                    <img
                      src={img}
                      alt={`Poker Bild ${i + 1}`}
                      className="w-full h-[250px] object-cover
                                 hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
                {[
                  "Turnierplan coming soon...",
                  "Die besten Hoteldeals",
                  "Gruppendeals",
                ].map((text, i) => (
                  <button
                    key={i}
                    className="border-2 border-[#DEBF64] text-[#DEBF64]
                               px-8 py-3 rounded-full uppercase tracking-wide
                               font-semibold hover:bg-[#DEBF64]
                               hover:text-black transition-all duration-300"
                  >
                    {text}
                  </button>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}