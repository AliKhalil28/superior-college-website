import React from "react";
import { leaders } from "../lib/content";

export default function Executive() {
  return (
    <section className="section management" id="executive">
      <div className="wrap">
        <header className="section-head reveal">
          <p className="kicker">Executive</p>
          <h2 className="section-title">
            Five people, <em>one campus.</em>
          </h2>
          <p className="lede">
            Chairman, vice chairman, chief executive, principal, and academic director of
            Superior College Mian Channu.
          </p>
        </header>
        <div className="leaders">
          {leaders.map((person, index) => (
            <article
              className={index === 0 ? "leader chair reveal" : "leader reveal"}
              style={{ "--d": index } as React.CSSProperties}
              key={person.name}
            >
              <div className="portrait">
                {person.photo ? (
                  <img src={person.photo} alt={person.name} />
                ) : (
                  <span aria-hidden="true">{person.initials}</span>
                )}
              </div>
              <div>
                <p className="kicker">{person.role}</p>
                <h3>{person.name}</h3>
                <p>{person.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

