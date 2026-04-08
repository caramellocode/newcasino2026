"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "Wie kann ich eine Promotion buchen?",
    answer:
      "Alle Promotionen können direkt online gebucht oder vor Ort an der Rezeption reserviert werden. Einige Angebote sind limitiert.",
  },
  {
    question: "Sind die Promotionen kombinierbar?",
    answer:
      "Promotionen sind grundsätzlich nicht kombinierbar, ausser es ist explizit im Angebot erwähnt.",
  },
  {
    question: "Gibt es Altersbeschränkungen?",
    answer:
      "Der Zutritt ins Casino ist ab 18 Jahren möglich. Für spezielle Events gelten die gesetzlichen Bestimmungen.",
  },
  {
    question: "Kann ich eine Promotion verschenken?",
    answer:
      "Ja, alle Promotionen eignen sich perfekt als Gutschein und können als Geschenk gebucht werden.",
  },
];

export default function PromotionAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="promo-accordion">
      {FAQS.map((item, i) => (
        <div
          key={i}
          className={`promo-accordion-item ${
            openIndex === i ? "active" : ""
          }`}
        >
          <button
            className="promo-accordion-header"
            onClick={() => toggle(i)}
          >
            <span>{item.question}</span>
            <span className="promo-accordion-icon">
              {openIndex === i ? "–" : "+"}
            </span>
          </button>

          <div className="promo-accordion-content">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}