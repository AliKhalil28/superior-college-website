import React from "react";

const alumniPaths = [
  ["01", "Computing & AI", "Software, data, and further study for students of ICS, CS, SE, IT, Data Science, and Artificial Intelligence."],
  ["02", "Health & science", "Medicine, allied health, and dietary science for Pre-Medical, HND, Zoology, and Chemistry."],
  ["03", "Business", "Enterprise, finance, and management for I.Com and BBA graduates."],
  ["04", "Public life", "Teaching, media, and community work for F.A, English, Psychology, and UK Level 3 graduates."]
];

export default function Alumni() {
  return (
    <section className="section alumni" id="alumni">
      <div className="wrap">
        <header className="section-head reveal">
          <p className="kicker on-dark">Proud Alumni</p>
          <h2 className="section-title">
            Where a Superior <em>education points.</em>
          </h2>
          <p className="lede on-dark">
            Portraits belong here with permission. These are the paths the programs are built to
            open, including graduates of the BS convocations already held.
          </p>
        </header>
        <div className="paths">
          {alumniPaths.map(([n, title, text], i) => (
            <article
              className="path reveal"
              style={{ "--d": i } as React.CSSProperties}
              key={n}
            >
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

