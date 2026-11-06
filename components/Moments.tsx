import React from "react";

const convocationYears = ["2024", "2025", "2026"];

export default function Moments() {
  return (
    <section className="section moments" id="moments">
      <div className="wrap">
        <header className="section-head reveal">
          <p className="kicker">Proud Moments</p>
          <h2 className="section-title">
            Three convocations, <em>already held.</em>
          </h2>
          <p className="lede">
            BS students of this campus have already walked for convocation in 2024, 2025, and 2026.
            Alongside that, the college is announcing positions in the Multan Board.
          </p>
        </header>
        <div className="convocations">
          {convocationYears.map((year) => (
            <article className="convocation reveal" key={year}>
              <span>BS convocation · held</span>
              <strong>{year}</strong>
              <p>The bachelor’s ceremony for this year has already taken place.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

