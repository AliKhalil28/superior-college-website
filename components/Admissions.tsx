import React from "react";

const steps = [
  ["01", "Choose", "Pick a program, or come in as “not sure yet.”"],
  ["02", "Visit or message", "WhatsApp, phone, or the Multan Road campus."],
  ["03", "Show documents", "Result, identity, photographs, equivalency if needed."],
  ["04", "Sit the conversation", "Only if that program asks for one."],
  ["05", "Confirm the fee", "The office states the current figure. This page does not."],
  ["06", "Start", "Orientation, timetable, and the first week."]
];

export default function Admissions() {
  return (
    <section className="section admissions" id="admissions">
      <div className="wrap">
        <div className="admissions-grid">
          <div className="sticky-col reveal">
            <p className="kicker">Admissions</p>
            <h2 className="section-title">
              Admissions are <em>open.</em>
            </h2>
            <p className="lede">
              Intermediate, bachelor’s, and UK Level 3 seats are open. Visit the campus on Multan
              Road, or call 0333 0870044 or 0300 6892113. The office confirms your program and the
              fee.
            </p>
          </div>
          <div
            className="admit-card reveal"
            style={{ "--d": 1 } as React.CSSProperties}
          >
            <p className="kicker">Now</p>
            <h3>Come in, or message the desk</h3>
            <p>
              Bring the last result you have. The office will tell you which programs are taking
              students and what to do next.
            </p>
          </div>
        </div>
        <div className="apply-block">
          <ol className="steps">
            {steps.map(([n, title, text]) => (
              <li className="step reveal" key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
          <aside className="docs reveal">
            <h3>Bring these</h3>
            <ul>
              <li>Student CNIC or B-Form</li>
              <li>Parent or guardian CNIC</li>
              <li>Matric or intermediate result</li>
              <li>Four recent photographs</li>
              <li>Equivalency, if the last exam was outside the board</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

