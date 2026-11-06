"use client";

import React, { useMemo } from "react";
import { Program, ProgramTrack } from "../types";
import { programs } from "../lib/content";

interface ProgramsProps {
  filter: ProgramTrack;
  setFilter: (track: ProgramTrack) => void;
  onSelectProgram: (program: Program) => void;
}

const filterOptions: [ProgramTrack, string][] = [
  ["all", "All"],
  ["intermediate", "Intermediate"],
  ["bachelor", "Bachelor’s"],
  ["uk", "UK Level 3"]
];

export default function Programs({
  filter,
  setFilter,
  onSelectProgram
}: ProgramsProps) {
  const visible = useMemo(
    () => programs.filter((item) => filter === "all" || item.track === filter),
    [filter]
  );

  return (
    <section className="section programs" id="programs">
      <div className="wrap">
        <header className="section-head reveal">
          <p className="kicker">Programs Offered</p>
          <h2 className="section-title">
            Seventeen ways to <em>begin.</em>
          </h2>
          <p className="lede">
            Five intermediate streams for the Multan Board, eleven bachelor’s degrees, and a
            UK Level 3 qualification. There is no diploma.
          </p>
        </header>
        <div className="program-bar reveal">
          <div className="filters" role="group" aria-label="Filter programs">
            {filterOptions.map(([id, label]) => (
              <button
                key={id}
                type="button"
                className={filter === id ? "is-on" : undefined}
                aria-pressed={filter === id}
                onClick={() => setFilter(id)}
              >
                {label}
              </button>
            ))}
          </div>
          <p aria-live="polite">
            {visible.length} program{visible.length === 1 ? "" : "s"}
          </p>
        </div>
        <div className="program-grid">
          {visible.map((item) => (
            <article
              className={item.feature ? "program feature" : "program"}
              id={item.id}
              key={item.id}
              style={{ "--photo": `url("${item.image}")` } as React.CSSProperties}
            >
              <p className="kicker on-dark">{item.kicker}</p>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <button type="button" onClick={() => onSelectProgram(item)}>
                View program
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

