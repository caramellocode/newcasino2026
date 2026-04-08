"use client";

import { useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "@/styles/eventstyles.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

/* ==============================
   EVENTS DATA
================================= */

const events = [
  {
    type: "casino",
    dateLabel: "Montag 20.04.",
    title: "GENTLE MEN’S DAY",
    image: "/images/events/casino/day-06.png",
    link: "/promotions",
    description:
      "Jeden Montag erwartet unsere Gäste beim Gentle Men’s Day ein spezielles Highlight. Sichern Sie sich CHF 10 Spielguthaben sowie ein Gewinnticket und geniessen Sie einen stilvollen Abend im Grand Casino Liechtenstein.",
  },
  {
    type: "casino",
    dateLabel: "Dienstag 21.04.",
    title: "LUCKY LADIE’S DAY",
    image: "/images/events/casino/day-07.png",
    link: "/promotions",
    description:
      "Beim Lucky Ladie’s Day erwartet unsere Besucherinnen jeden Dienstag ein besonderes Special. Freuen Sie sich auf CHF 10 Spielguthaben, ein Gewinnticket und ein elegantes Casino-Erlebnis in stilvoller Atmosphäre.",
  },
  {
    type: "casino",
    dateLabel: "Mittwoch 22.05.",
    title: "LUCKY LADIE’S DAY",
    image: "/images/events/casino/day-08.png",
    link: "/promotions",
    description:
      "Beim Lucky Ladie’s Day erwartet unsere Besucherinnen jeden Dienstag ein besonderes Special. Freuen Sie sich auf CHF 10 Spielguthaben, ein Gewinnticket und ein elegantes Casino-Erlebnis in stilvoller Atmosphäre.",
  },
  {
    type: "casino",
    dateLabel: "Donnerstag 23.04.",
    title: "LUCKY LADIE’S DAY",
    image: "/images/events/casino/day-07.png",
    link: "/promotions",
    description:
      "Beim Lucky Ladie’s Day erwartet unsere Besucherinnen jeden Dienstag ein besonderes Special. Freuen Sie sich auf CHF 10 Spielguthaben, ein Gewinnticket und ein elegantes Casino-Erlebnis in stilvoller Atmosphäre.",
  },
  {
    type: "casino",
    dateLabel: "Freitag 24.05.",
    title: "GRAND GRAP",
    image: "/images/events/casino/day-10.png",
    link: "",
    description:
      "Beim Lucky Ladie’s Day erwartet unsere Besucherinnen jeden Dienstag ein besonderes Special. Freuen Sie sich auf CHF 10 Spielguthaben, ein Gewinnticket und ein elegantes Casino-Erlebnis in stilvoller Atmosphäre.",
  },
  {
    type: "casino",
    dateLabel: "Samstag 25.04.",
    title: "GRAND MYSTERY CASE",
    image: "/images/events/casino/MYSTERY1.jpg",
    imageWide: "/images/home-1/wide.png",
    link: "",
    description:
      "Das Time Buzzer Promotion-Event sorgt für zusätzliche Spannung am Pokertisch. Freuen Sie sich auf besondere Aktionen, spannende Momente und die Chance auf attraktive Gewinne.",
  },
  {
    type: "casino",
    dateLabel: "Sonntag 26.04.",
    title: "TIME BUZZER",
    image: "/images/events/casino/day-12.png",
    imageWide: "/images/home-1/wide.png",
    link: "/promotions",
    description:
      "Das Time Buzzer Promotion-Event sorgt für zusätzliche Spannung am Pokertisch. Freuen Sie sich auf besondere Aktionen, spannende Momente und die Chance auf attraktive Gewinne.",
  },
  {
    type: "poker",
    dateLabel: "Freitag 12.04.",
    title: "COMMUNITY FESTIVAL",
    image: "/images/home-1/community.jpg",
    imageWide: "/images/home-1/wide.png",
    link: "https://live.gcli.li/tournament/?id=4394",
    description:
      "THE BIGGEST COMMUNITY POKER FESTIVAL 12. April – 19. April Pokerroom präsentiert eines der spannendsten Poker-Events des Jahres: The Biggest Community Poker Festival. Vom 12. bis 19. April verwandelt sich der Pokerroom in Bendern in den Treffpunkt der internationalen Poker-Community. ",
  },
  {
    type: "poker",
    dateLabel: "Samstag 12.04.",
    title: "COMMUNITY FESTIVAL",
    image: "/images/home-1/community.jpg",
    imageWide: "/images/home-1/wide.png",
    link: "https://live.gcli.li/tournament/?id=4394",
    description:
      "THE BIGGEST COMMUNITY POKER FESTIVAL 12. April – 19. April Pokerroom präsentiert eines der spannendsten Poker-Events des Jahres: The Biggest Community Poker Festival. Vom 12. bis 19. April verwandelt sich der Pokerroom in Bendern in den Treffpunkt der internationalen Poker-Community. ",
  },
  {
    type: "poker",
    dateLabel: "Sonntag 12.04.",
    title: "COMMUNITY FESTIVAL",
    image: "/images/home-1/community.jpg",
    imageWide: "/images/home-1/wide.png",
    link: "https://live.gcli.li/tournament/?id=4394",
    description:
      "THE BIGGEST COMMUNITY POKER FESTIVAL 12. April – 19. April Pokerroom präsentiert eines der spannendsten Poker-Events des Jahres: The Biggest Community Poker Festival. Vom 12. bis 19. April verwandelt sich der Pokerroom in Bendern in den Treffpunkt der internationalen Poker-Community. ",
  },
  {
    type: "poker",
    dateLabel: "Montag 12.04.",
    title: "COMMUNITY FESTIVAL",
    image: "/images/home-1/community.jpg",
    imageWide: "/images/home-1/wide.png",
    link: "https://live.gcli.li/tournament/?id=4394",
    description:
      "THE BIGGEST COMMUNITY POKER FESTIVAL 12. April – 19. April Pokerroom präsentiert eines der spannendsten Poker-Events des Jahres: The Biggest Community Poker Festival. Vom 12. bis 19. April verwandelt sich der Pokerroom in Bendern in den Treffpunkt der internationalen Poker-Community. ",
  },
  {
    type: "poker",
    dateLabel: "Dienstag 12.04.",
    title: "COMMUNITY FESTIVAL",
    image: "/images/home-1/community.jpg",
    imageWide: "/images/home-1/wide.png",
    link: "https://live.gcli.li/tournament/?id=4394",
    description:
      "THE BIGGEST COMMUNITY POKER FESTIVAL 12. April – 19. April Pokerroom präsentiert eines der spannendsten Poker-Events des Jahres: The Biggest Community Poker Festival. Vom 12. bis 19. April verwandelt sich der Pokerroom in Bendern in den Treffpunkt der internationalen Poker-Community. ",
  },
  {
    type: "poker",
    dateLabel: "Mittwoch 12.04.",
    title: "COMMUNITY FESTIVAL",
    image: "/images/home-1/community.jpg",
    imageWide: "/images/home-1/wide.png",
    link: "https://live.gcli.li/tournament/?id=4394",
    description:
      "THE BIGGEST COMMUNITY POKER FESTIVAL 12. April – 19. April Pokerroom präsentiert eines der spannendsten Poker-Events des Jahres: The Biggest Community Poker Festival. Vom 12. bis 19. April verwandelt sich der Pokerroom in Bendern in den Treffpunkt der internationalen Poker-Community. ",
  },
  {
    type: "poker",
    dateLabel: "Freitag 12.04.",
    title: "COMMUNITY FESTIVAL",
    image: "/images/home-1/community.jpg",
    imageWide: "/images/home-1/wide.png",
    link: "https://live.gcli.li/tournament/?id=4394",
    description:
      "THE BIGGEST COMMUNITY POKER FESTIVAL 12. April – 19. April Pokerroom präsentiert eines der spannendsten Poker-Events des Jahres: The Biggest Community Poker Festival. Vom 12. bis 19. April verwandelt sich der Pokerroom in Bendern in den Treffpunkt der internationalen Poker-Community. ",
  },
  {
    type: "poker",
    dateLabel: "Freitag 12.04.",
    title: "COMMUNITY FESTIVAL",
    image: "/images/home-1/community.jpg",
    imageWide: "/images/home-1/wide.png",
    link: "https://live.gcli.li/tournament/?id=4394",
    description:
      "THE BIGGEST COMMUNITY POKER FESTIVAL 12. April – 19. April Pokerroom präsentiert eines der spannendsten Poker-Events des Jahres: The Biggest Community Poker Festival. Vom 12. bis 19. April verwandelt sich der Pokerroom in Bendern in den Treffpunkt der internationalen Poker-Community. ",
  },
  {
    type: "poker",
    dateLabel: "Freitag 12.04.",
    title: "COMMUNITY FESTIVAL",
    image: "/images/home-1/community.jpg",
    imageWide: "/images/home-1/wide.png",
    link: "https://live.gcli.li/tournament/?id=4394",
    description:
      "THE BIGGEST COMMUNITY POKER FESTIVAL 12. April – 19. April Pokerroom präsentiert eines der spannendsten Poker-Events des Jahres: The Biggest Community Poker Festival. Vom 12. bis 19. April verwandelt sich der Pokerroom in Bendern in den Treffpunkt der internationalen Poker-Community. ",
  },
  
];

const getEventKey = (ev) => `${ev.type}-${ev.title}-${ev.dateLabel}`;

export default function EventSection() {
  const [filter, setFilter] = useState("casino");
  const [flippedCards, setFlippedCards] = useState({});
  const [activeIframeEvent, setActiveIframeEvent] = useState(null);
  const swiperRef = useRef(null);

  const filteredEvents = useMemo(
    () => events.filter((ev) => ev.type === filter),
    [filter]
  );

  const toggleFlip = (key) => {
    setFlippedCards((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <section className="event-section">
        <div className="event-container">
          <div className="event-header">
            <div>
              <h2>AKTUELLE VERANSTALTUNGEN</h2>
              <span className="event-line" />
            </div>

            <div className="event-filter">
              <button
                onClick={() => setFilter("casino")}
                className={`gold-btn ${filter === "casino" ? "active" : ""}`}
              >
                Casino Events
              </button>
              <button
                onClick={() => setFilter("poker")}
                className={`gold-btn ${filter === "poker" ? "active" : ""}`}
              >
                Poker Events
              </button>
            </div>
          </div>

          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            speed={700}
            loop
            spaceBetween={20}
            slidesPerView={1.1}
            grabCursor={true}
            watchSlidesProgress={true}
            allowTouchMove
            touchStartPreventDefault={false}
            passiveListeners
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              0: { slidesPerView: 1.15 },
              640: { slidesPerView: 2.1 },
              900: { slidesPerView: 3.1 },
              1200: { slidesPerView: 4.1 },
            }}
          >
            {filteredEvents.map((ev) => {
              const eventKey = getEventKey(ev);
              const isFlipped = !!flippedCards[eventKey];

              return (
                <SwiperSlide key={eventKey}>
                  <div className="event-card-wrap">
                    <div className="event-date-top">{ev.dateLabel}</div>

                    <div
                      className={`event-card ${isFlipped ? "is-flipped" : ""}`}
                    >
                      <div className="event-card-inner">
                        <div className="event-face event-front">
                          <div className="event-frame">
                            <img
                              src={ev.image}
                              alt={ev.title}
                              className="event-flyer"
                            />
                          </div>
                        </div>

                        <div className="event-face event-back">
                          <div className="event-back-content">
                            <h3>{ev.title}</h3>
                            <p>{ev.description}</p>

                            {ev.link ? (
                              <button
                                type="button"
                                onClick={() => setActiveIframeEvent(ev)}
                                className="event-btn event-btn-small"
                              >
                                Zur Aktion
                              </button>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="event-card-actions">
                      <button
                        onClick={() => toggleFlip(eventKey)}
                        className="event-btn"
                      >
                        {isFlipped ? "Zurück" : "Mehr Infos"}
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="event-nav">
            <button
              className="event-nav-btn"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <IoChevronBack size={18} />
            </button>

            <button
              className="event-nav-btn"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <IoChevronForward size={18} />
            </button>
          </div>
        </div>
      </section>

      {activeIframeEvent && (
        <div
          className="event-iframe-modal"
          onClick={() => setActiveIframeEvent(null)}
        >
          <div
            className="event-iframe-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="event-iframe-close"
              onClick={() => setActiveIframeEvent(null)}
            >
              ✕
            </button>

            <div className="event-iframe-header">
              <h3>{activeIframeEvent.title}</h3>
              <p>{activeIframeEvent.dateLabel}</p>
            </div>

            <div className="event-iframe-wrap">
              <iframe
                src={activeIframeEvent.link}
                title={activeIframeEvent.title}
                className="event-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="event-iframe-footer">
              <a
                href={activeIframeEvent.link}
                target="_blank"
                rel="noreferrer"
                className="event-btn event-btn-small"
              >
                Im neuen Tab öffnen
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}