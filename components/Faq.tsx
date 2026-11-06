"use client";

import React, { useState } from "react";
import { faqs } from "../lib/content";

export default function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <section className="section faq" id="questions">
      <div className="wrap">
        <header className="section-head reveal">
          <p className="kicker">Questions</p>
          <h2 className="section-title">
            Before you <em>make the trip.</em>
          </h2>
        </header>
        <div className="reveal">
          {faqs.map((item, index) => (
            <div
              className={openFaq === index ? "faq-item open" : "faq-item"}
              key={item.q}
            >
              <button
                className="faq-q"
                type="button"
                aria-expanded={openFaq === index}
                onClick={() => toggleFaq(index)}
              >
                {item.q} <i aria-hidden="true" />
              </button>
              <div className="faq-a">
                <div>
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

