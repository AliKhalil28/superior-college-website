import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <h2>Superior College Mian Channu</h2>
          <p>
            A campus of The Superior Group of Colleges. Intermediate, BS, and UK Level 3. No
            diploma.
          </p>
          <div className="socials" aria-label="Social">
            <a
              className="social"
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M14.5 8.5V6.8c0-.7.5-1 1.2-1H17V3h-2.2C12.2 3 11 4.4 11 6.6v1.9H9v2.8h2V21h3.2v-9.7h2.2l.4-2.8h-2.6z"
                />
              </svg>
            </a>
            <a
              className="social"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm8 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm-4 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zM17.4 6.6a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"
                />
              </svg>
            </a>
            <a
              className="social"
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M23 12.2s0-3.2-.4-4.6a3 3 0 0 0-2.1-2.1C18.9 5 12 5 12 5s-6.9 0-8.5.5a3 3 0 0 0-2.1 2.1C1 9 1 12.2 1 12.2s0 3.2.4 4.6a3 3 0 0 0 2.1 2.1C5.1 19.4 12 19.4 12 19.4s6.9 0 8.5-.5a3 3 0 0 0 2.1-2.1c.4-1.4.4-4.6.4-4.6zM9.8 15.5v-6.6l6.3 3.3z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h3>Visit</h3>
          <ul>
            <li>Near NADRA Office</li>
            <li>Multan Road, Mian Channu</li>
            <li>
              <a href="tel:+923330870044">0333 0870044</a>
            </li>
            <li>
              <a href="tel:+923006892113">0300 6892113</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Programs</h3>
          <ul>
            <li>
              <a href="#fsc-med">Intermediate</a>
            </li>
            <li>
              <a href="#bs-ai">Artificial Intelligence</a>
            </li>
            <li>
              <a href="#bs-hnd">BS HND</a>
            </li>
            <li>
              <a href="#uk-level-3">UK Level 3</a>
            </li>
            <li>
              <a href="#bba">BBA</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Explore</h3>
          <ul>
            <li>
              <a href="#executive">Executive</a>
            </li>
            <li>
              <a href="#updates">Board positions</a>
            </li>
            <li>
              <a href="#moments">Convocations</a>
            </li>
            <li>
              <a
                href="https://www.superiorcolleges.edu.pk/mian-channu/"
                target="_blank"
                rel="noopener"
              >
                Superior Group page
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap legal">
        <p>
          © {new Date().getFullYear()} Superior College Mian Channu. Program availability and
          the awarding body are confirmed by the admissions office.
        </p>
      </div>
    </footer>
  );
}

