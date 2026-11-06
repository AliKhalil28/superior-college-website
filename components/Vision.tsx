import React from "react";

const valuesData = [
  ["01", "Excellence", "Academic work is the center. Co-curricular effort is how that standard shows up outside the paper."],
  ["02", "Teamwork", "Sports, tours, and group work are where students learn to carry a result together."],
  ["03", "Creativity", "Skill-based projects give ideas a shape, instead of leaving them inside a notebook."],
  ["04", "Care", "The promise families hear first: teachers who know the student, not only the roll number."]
];

export default function Vision() {
  return (
    <section className="section vision" id="vision">
      <div className="wrap">
        <header className="section-head reveal">
          <p className="kicker">Vision & Mission</p>
          <h2 className="section-title">
            Study with a <em>sense of purpose.</em>
          </h2>
          <p className="lede">
            The Mian Channu campus belongs to The Superior Group. The culture here is the group’s
            culture: excellence in the classroom, teamwork beyond it, and teachers who stay involved.
          </p>
        </header>
        <div className="vision-grid">
          <article className="v-card dark reveal">
            <p className="kicker on-dark">Mission</p>
            <h3>Facilitating Superior human beings.</h3>
            <p>
              Students leave qualified, and they leave with a way of working: care for the craft,
              respect for the people beside them, and the nerve to take the next step.
            </p>
          </article>
          <article
            className="v-card reveal"
            style={{ "--d": 1 } as React.CSSProperties}
          >
            <p className="kicker">Vision</p>
            <h3>A wider future, reached from this city.</h3>
            <p>
              Mian Channu should not have to send every ambitious student away to find a serious
              college. A professional education can begin on Multan Road.
            </p>
          </article>
        </div>
        <div className="values">
          {valuesData.map(([index, title, text], i) => (
            <article
              className="value reveal"
              style={{ "--d": i } as React.CSSProperties}
              key={title}
            >
              <span>{index}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="manifesto manifesto-plain">
        <div className="wrap">
          <p className="kicker on-dark reveal">
            Part of a national group, founded in 2000
          </p>
          <p
            className="giant reveal"
            style={{ "--d": 1 } as React.CSSProperties}
          >
            Facilitating Superior human beings.
          </p>
        </div>
      </div>
    </section>
  );
}

