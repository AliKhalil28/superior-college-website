import React from "react";

export default function Affiliation() {
  return (
    <section className="section" id="affiliation">
      <div className="wrap">
        <header className="section-head reveal">
          <p className="kicker">University Affiliation</p>
          <h2 className="section-title">
            The board, and the <em>universities.</em>
          </h2>
          <p className="lede">
            Intermediate and bachelor’s awards are not the same thing. UK Level 3 is confirmed
            separately, with its own awarding body, at admission.
          </p>
        </header>
        <div className="unis">
          <article className="uni reveal">
            <div className="uni-logo">
              <img className="uni-word" src="/logos/bise-lockup.png" alt="BISE Multan" />
            </div>
            <h3>Board of Intermediate & Secondary Education, Multan</h3>
            <p>
              Mian Channu sits in Khanewal District, inside the Multan Board. F.Sc, ICS, I.Com, and
              F.A are examined there. The campus is announcing board positions from this board.
            </p>
            <p className="tag">Intermediate</p>
          </article>
          <article
            className="uni reveal"
            style={{ "--d": 1 } as React.CSSProperties}
          >
            <div className="uni-logo">
              <img
                className="uni-word"
                src="/logos/gcuf.png"
                alt="GCUF, Government College University Faisalabad"
              />
            </div>
            <h3>Government College University Faisalabad</h3>
            <p>
              GCUF’s affiliation cell lists Superior College, G.T. Road, near the NADRA office, Mian
              Channu, as a private affiliated college.
            </p>
            <p className="tag">College affiliation</p>
          </article>
          <article
            className="uni reveal"
            style={{ "--d": 2 } as React.CSSProperties}
          >
            <div className="uni-logo">
              <img
                className="uni-word"
                src="/logos/iub-lockup.png"
                alt="IUB, The Islamia University of Bahawalpur"
              />
            </div>
            <h3>The Islamia University of Bahawalpur</h3>
            <p>
              On the 2025–26 private affiliated colleges list, this campus is named for BS
              Artificial Intelligence.
            </p>
            <p className="tag">BS Artificial Intelligence</p>
          </article>
        </div>
        <p className="note reveal">
          A listing is not a promise that every bachelor’s program shares one university. Your
          admission letter names the awarding body. UK Level 3 is not a Multan Board subject and not
          a diploma.
        </p>
      </div>
    </section>
  );
}

