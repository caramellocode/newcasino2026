"use client";

import ContactBreadcrumb from "./components/ContactBreadcrumb";
import ContactSection from "./components/ContactSection";
import KontaktHero from "./components/KontaktHero";


export default function KontaktPage() {
  return (
    <div className="bg-black text-white">
        <KontaktHero />
      <ContactBreadcrumb title="Kontakt" />

      {/* CASINO */}
      <ContactSection
        title="KONTAKT CASINO"
        phone="+423 222 77 77"
        phoneHref="tel:+4232227777"
        mail="grandcasino@gcli.li"
        mailHref="mailto:grandcasino@gcli.li"
        image="/images/home-1/eingang.jpg"
      />

      {/* POKERROOM */}
      <ContactSection
        title="KONTAKT POKERROOM"
        phone="+423 222 77 68"
        phoneHref="tel:+4232227768"
        mail="poker@gcli.li"
        mailHref="mailto:poker@gcli.li"
        image="/images/home-1/PIKER.jpg"
      />

      {/* HOTEL */}
      <ContactSection
        title="KONTAKT HOTEL"
        phone="+423 222 77 55"
        phoneHref="tel:+4232227755"
        mail="hotel@gcli.li"
        mailHref="mailto:hotel@gcli.li"
        image="/images/home-1/hotel-5.png"
      />

      {/* FLOOR FOUR */}
      <ContactSection
        title="KONTAKT FLOOR FOUR"
        phone="+423 222 77 37"
        phoneHref="tel:+4232227737"
        mail="info@floorfour.li"
        mailHref="mailto:info@floorfour.li"
        image="/images/home-1/FFFFLOOR.jpg"
      />

      {/* GOOGLE MAP */}
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.581797403026!2d9.500023276748767!3d47.205197415609604"
          height={450}
          loading="lazy"
          className="w-full border-0"
        />
      </div>
    </div>
  );
}
