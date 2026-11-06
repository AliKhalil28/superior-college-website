import React from "react";
import Arrow from "./Arrow";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <img
        className="hero-bg"
        src="/images/campus.jpg?v=2"
        alt="College campus building and front lawn"
      />
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="pill rise d1">
            <span className="dot" aria-hidden="true" /> Mian Channu · District Khanewal
          </p>
          <h1 className="hero-title rise d2">
            <span>A Superior education,</span>
            <span className="soft">without leaving</span>
            <span>Mian Channu.</span>
          </h1>
          <p className="hero-lede rise d3">
            Intermediate, BS degrees, and a UK Level 3 qualification on Multan Road.
            No diploma. BS convocations for 2024, 2025, and 2026 have already been held.
          </p>
          <div className="hero-actions rise d4">
            <a className="btn btn-gold" href="#contact">
              Talk to admissions <Arrow />
            </a>
            <a className="btn btn-line" href="#programs">
              Explore programs
            </a>
          </div>
          <div className="hero-meta rise d4">
            <p>
              <strong>Near NADRA Office</strong>
              <span>Multan Road, Mian Channu</span>
            </p>
            <p>
              <strong>Mon–Sat, 8:00–6:00</strong>
              <span>Sunday closed</span>
            </p>
            <p>
              <strong>Admissions open</strong>
              <span>Intermediate, bachelor’s, UK Level 3</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

