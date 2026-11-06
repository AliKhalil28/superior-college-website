import React from "react";

export default function Campus() {
  return (
    <section className="section campus" id="campus">
      <div className="wrap campus-grid">
        <figure className="campus-photo reveal">
          <img src="/images/lab.jpg" alt="Glass laboratory flasks on a bench" />
        </figure>
        <div className="reveal" style={{ "--d": 1 } as React.CSSProperties}>
          <p className="kicker on-dark">Campus</p>
          <h2 className="section-title">
            Built for study, <em>not for show.</em>
          </h2>
          <p className="lede on-dark">
            A workable place to learn, labs for the programs that need them, and a faculty that
            treats students as people.
          </p>
          <ul className="facility-list">
            <li>
              <strong>Labs</strong>
              <span>Science and computer labs for the programs that depend on practice.</span>
            </li>
            <li>
              <strong>Counselling</strong>
              <span>A conversation before you lock a program, not after the fee is paid.</span>
            </li>
            <li>
              <strong>Projects</strong>
              <span>Skill-based work so creativity has somewhere to go.</span>
            </li>
            <li>
              <strong>Sports</strong>
              <span>Team games and the co-curricular calendar of a Superior year.</span>
            </li>
            <li>
              <strong>Careers</strong>
              <span>Guidance on the next qualification, not a slogan on a banner.</span>
            </li>
            <li>
              <strong>Hours</strong>
              <span>Monday to Saturday, 8:00 am to 6:00 pm. Closed Sunday.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

