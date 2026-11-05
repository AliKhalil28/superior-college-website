"use client";

import { useEffect, useMemo, useState } from "react";
import { faqs, leaders, programs, ticker } from "../lib/content";

const nav = [
  ["#vision", "Vision"],
  ["#executive", "Executive"],
  ["#programs", "Programs"],
  ["#affiliation", "Affiliation"],
  ["#updates", "Updates"],
  ["#admissions", "Admissions"],
  ["#moments", "Moments"],
  ["#alumni", "Alumni"],
  ["#contact", "Contact"]
];

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CollegeSite() {
  const [bannerOn, setBannerOn] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [filter, setFilter] = useState("all");
  const [openFaq, setOpenFaq] = useState(null);
  const [program, setProgram] = useState(null);
  const [choice, setChoice] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [showTop, setShowTop] = useState(false);
  const [showWa, setShowWa] = useState(false);
  const [headerSolid, setHeaderSolid] = useState(false);

  const visible = useMemo(
    () => programs.filter((item) => filter === "all" || item.track === filter),
    [filter]
  );

  useEffect(() => {
    try {
      if (sessionStorage.getItem("sc-banner") === "off") {
        setBannerOn(false);
        document.documentElement.classList.add("banner-off");
      }
    } catch (error) {
      /* storage can be blocked */
    }

    const nodes = document.querySelectorAll(".reveal");
    const seen = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          seen.unobserve(entry.target);
        });
      },
      { threshold: 0.14 }
    );
    nodes.forEach((node) => seen.observe(node));

    const sections = nav
      .map(([href]) => document.querySelector(href))
      .filter(Boolean);
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => spy.observe(section));

    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? window.scrollY / height : 0;
      const bar = document.querySelector(".progress");
      if (bar) bar.style.transform = `scaleX(${progress})`;
      setShowTop(window.scrollY > 700);
      setShowWa(window.scrollY > 640);
      setHeaderSolid(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      seen.disconnect();
      spy.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("lock", menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    const dialog = document.getElementById("program-dialog");
    if (!dialog) return;
    if (program && !dialog.open) dialog.showModal();
    if (!program && dialog.open) dialog.close();
  }, [program]);

  function dismissBanner() {
    try {
      sessionStorage.setItem("sc-banner", "off");
    } catch (error) {
      /* ignore */
    }
    document.documentElement.classList.add("banner-off");
    setBannerOn(false);
  }

  function askAbout(item) {
    setChoice(item.id);
    setProgram(null);
    document.getElementById("contact")?.scrollIntoView();
    document.getElementById("name")?.focus();
  }

  function submitVisit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const selected = String(data.get("program") || "");
    const message = String(data.get("message") || "").trim();
    const digits = phone.replace(/\D/g, "");
    const nextErrors = {};
    if (name.length < 2) nextErrors.name = "Please add the student’s or parent’s name.";
    if (digits.length < 10 || digits.length > 13) nextErrors.phone = "Enter a working mobile number.";
    if (!selected) nextErrors.program = "Choose a program, or “Not sure yet”.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus(null);
      return;
    }

    const label = event.currentTarget.querySelector("#program").selectedOptions[0].textContent;
    const text = [
      "Admission query — Superior College Mian Channu",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Program: ${label}`,
      message ? `Note: ${message}` : "Note: I would like counselling for the current intake."
    ].join("\n");
    const channel = event.nativeEvent.submitter?.dataset.channel || "whatsapp";

    if (channel === "email") {
      window.location.href = `mailto:info@superiorcolleges.edu.pk?subject=${encodeURIComponent("Admission query — Mian Channu")}&body=${encodeURIComponent(text)}`;
      setStatus({ text: "Your email app should open with this message. For a faster answer, call the campus." });
      return;
    }

    const href = `https://wa.me/923006892113?text=${encodeURIComponent(text)}`;
    const opened = window.open(href, "_blank", "noopener");
    if (opened) {
      setStatus({ text: "WhatsApp is opening with your message. The campus confirms seats and dates in reply." });
      return;
    }
    setStatus({ text: "Pop-up blocked. Use this link instead: ", href });
  }

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="progress" aria-hidden="true" />
      <div className="top">
        {bannerOn && (
          <div className="banner">
            <p>Multan Board positions announced. BS convocations 2024–2026 are already done.</p>
            <a href="#updates">Read it</a>
            <button className="banner-x" type="button" aria-label="Dismiss announcement" onClick={dismissBanner}>×</button>
          </div>
        )}
        <header className={headerSolid ? "site-header is-solid" : "site-header"}>
          <div className="header-inner">
            <a className="logo" href="#top">
              <img src="/logo.png" alt="" width="74" height="74" />
              <span>
                <strong>Superior</strong>
                <small>College · Mian Channu</small>
              </span>
            </a>
            <nav className={menuOpen ? "nav is-open" : "nav"} id="nav" aria-label="Primary">
              {nav.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className={active === href ? "is-active" : undefined}
                  aria-current={active === href ? "true" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </nav>
            <a className="btn btn-gold header-apply" href="#contact">Apply</a>
            <button className="nav-toggle" type="button" aria-expanded={menuOpen} aria-controls="nav" aria-label="Menu" onClick={() => setMenuOpen((open) => !open)}>
              <span />
            </button>
          </div>
        </header>
      </div>

      <main id="main">
        <section className="hero" id="top">
          <img className="hero-bg" src="/images/campus.jpg?v=2" alt="College campus building and front lawn" />
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="pill rise d1"><span className="dot" aria-hidden="true" /> Mian Channu · District Khanewal</p>
              <h1 className="hero-title rise d2">
                <span>A Superior education,</span>
                <span className="soft">without leaving</span>
                <span>Mian Channu.</span>
              </h1>
              <p className="hero-lede rise d3">Intermediate, BS degrees, and a UK Level 3 qualification on Multan Road. No diploma. BS convocations for 2024, 2025, and 2026 have already been held.</p>
              <div className="hero-actions rise d4">
                <a className="btn btn-gold" href="#contact">Talk to admissions <Arrow /></a>
                <a className="btn btn-line" href="#programs">Explore programs</a>
              </div>
              <div className="hero-meta rise d4">
                <p><strong>Near NADRA Office</strong><span>Multan Road, Mian Channu</span></p>
                <p><strong>Mon–Sat, 8:00–6:00</strong><span>Sunday closed</span></p>
                <p><strong>Admissions open</strong><span>Intermediate, bachelor’s, UK Level 3</span></p>
              </div>
            </div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[0, 1].map((copy) => (
              <div className="ticker-group" key={copy}>
                {ticker.map((item) => <span key={`${copy}-${item}`}>{item}</span>)}
              </div>
            ))}
          </div>
        </div>

        <section className="section vision" id="vision">
          <div className="wrap">
            <header className="section-head reveal">
              <p className="kicker">Vision & Mission</p>
              <h2 className="section-title">Study with a <em>sense of purpose.</em></h2>
              <p className="lede">The Mian Channu campus belongs to The Superior Group. The culture here is the group’s culture: excellence in the classroom, teamwork beyond it, and teachers who stay involved.</p>
            </header>
            <div className="vision-grid">
              <article className="v-card dark reveal">
                <p className="kicker on-dark">Mission</p>
                <h3>Facilitating Superior human beings.</h3>
                <p>Students leave qualified, and they leave with a way of working: care for the craft, respect for the people beside them, and the nerve to take the next step.</p>
              </article>
              <article className="v-card reveal" style={{ "--d": 1 }}>
                <p className="kicker">Vision</p>
                <h3>A wider future, reached from this city.</h3>
                <p>Mian Channu should not have to send every ambitious student away to find a serious college. A professional education can begin on Multan Road.</p>
              </article>
            </div>
            <div className="values">
              {[
                ["01", "Excellence", "Academic work is the center. Co-curricular effort is how that standard shows up outside the paper."],
                ["02", "Teamwork", "Sports, tours, and group work are where students learn to carry a result together."],
                ["03", "Creativity", "Skill-based projects give ideas a shape, instead of leaving them inside a notebook."],
                ["04", "Care", "The promise families hear first: teachers who know the student, not only the roll number."]
              ].map(([index, title, text], i) => (
                <article className="value reveal" style={{ "--d": i }} key={title}>
                  <span>{index}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="manifesto manifesto-plain">
            <div className="wrap">
              <p className="kicker on-dark reveal">Part of a national group, founded in 2000</p>
              <p className="giant reveal" style={{ "--d": 1 }}>Facilitating Superior human beings.</p>
            </div>
          </div>
        </section>

        <section className="section management" id="executive">
          <div className="wrap">
            <header className="section-head reveal">
              <p className="kicker">Executive</p>
              <h2 className="section-title">Five people, <em>one campus.</em></h2>
              <p className="lede">Chairman, vice chairman, chief executive, principal, and academic director of Superior College Mian Channu.</p>
            </header>
            <div className="leaders">
              {leaders.map((person, index) => (
                <article className={index === 0 ? "leader chair reveal" : "leader reveal"} style={{ "--d": index }} key={person.name}>
                  <div className="portrait">
                    {person.photo ? <img src={person.photo} alt={person.name} /> : <span aria-hidden="true">{person.initials}</span>}
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

        <section className="section programs" id="programs">
          <div className="wrap">
            <header className="section-head reveal">
              <p className="kicker">Programs Offered</p>
              <h2 className="section-title">Sixteen ways to <em>begin.</em></h2>
              <p className="lede">Five intermediate streams for the Multan Board, ten bachelor’s degrees, and a UK Level 3 qualification. There is no diploma.</p>
            </header>
            <div className="program-bar reveal">
              <div className="filters" role="group" aria-label="Filter programs">
                {[
                  ["all", "All"],
                  ["intermediate", "Intermediate"],
                  ["bachelor", "Bachelor’s"],
                  ["uk", "UK Level 3"]
                ].map(([id, label]) => (
                  <button key={id} type="button" className={filter === id ? "is-on" : undefined} aria-pressed={filter === id} onClick={() => setFilter(id)}>
                    {label}
                  </button>
                ))}
              </div>
              <p aria-live="polite">{visible.length} program{visible.length === 1 ? "" : "s"}</p>
            </div>
            <div className="program-grid">
              {visible.map((item) => (
                <article
                  className={item.feature ? "program feature" : "program"}
                  id={item.id}
                  key={item.id}
                  style={{ "--photo": `url("${item.image}")` }}
                >
                  <p className="kicker on-dark">{item.kicker}</p>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <button type="button" onClick={() => setProgram(item)}>View program</button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section campus" id="campus">
          <div className="wrap campus-grid">
            <figure className="campus-photo reveal">
              <img src="/images/lab.jpg" alt="Glass laboratory flasks on a bench" />
            </figure>
            <div className="reveal" style={{ "--d": 1 }}>
              <p className="kicker on-dark">Campus</p>
              <h2 className="section-title">Built for study, <em>not for show.</em></h2>
              <p className="lede on-dark">A workable place to learn, labs for the programs that need them, and a faculty that treats students as people.</p>
              <ul className="facility-list">
                <li><strong>Labs</strong><span>Science and computer labs for the programs that depend on practice.</span></li>
                <li><strong>Counselling</strong><span>A conversation before you lock a program, not after the fee is paid.</span></li>
                <li><strong>Projects</strong><span>Skill-based work so creativity has somewhere to go.</span></li>
                <li><strong>Sports</strong><span>Team games and the co-curricular calendar of a Superior year.</span></li>
                <li><strong>Careers</strong><span>Guidance on the next qualification, not a slogan on a banner.</span></li>
                <li><strong>Hours</strong><span>Monday to Saturday, 8:00 am to 6:00 pm. Closed Sunday.</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="affiliation">
          <div className="wrap">
            <header className="section-head reveal">
              <p className="kicker">University Affiliation</p>
              <h2 className="section-title">The board, and the <em>universities.</em></h2>
              <p className="lede">Intermediate and bachelor’s awards are not the same thing. UK Level 3 is confirmed separately, with its own awarding body, at admission.</p>
            </header>
            <div className="unis">
              <article className="uni reveal">
                <div className="uni-logo">
                  <img className="uni-word" src="/logos/bise-lockup.png" alt="BISE Multan" />
                </div>
                <h3>Board of Intermediate & Secondary Education, Multan</h3>
                <p>Mian Channu sits in Khanewal District, inside the Multan Board. F.Sc, ICS, I.Com, and F.A are examined there. The campus is announcing board positions from this board.</p>
                <p className="tag">Intermediate</p>
              </article>
              <article className="uni reveal" style={{ "--d": 1 }}>
                <div className="uni-logo">
                  <img className="uni-word" src="/logos/gcuf.png" alt="GCUF, Government College University Faisalabad" />
                </div>
                <h3>Government College University Faisalabad</h3>
                <p>GCUF’s affiliation cell lists Superior College, G.T. Road, near the NADRA office, Mian Channu, as a private affiliated college.</p>
                <p className="tag">College affiliation</p>
              </article>
              <article className="uni reveal" style={{ "--d": 2 }}>
                <div className="uni-logo">
                  <img className="uni-word" src="/logos/iub-lockup.png" alt="IUB, The Islamia University of Bahawalpur" />
                </div>
                <h3>The Islamia University of Bahawalpur</h3>
                <p>On the 2025–26 private affiliated colleges list, this campus is named for BS Artificial Intelligence.</p>
                <p className="tag">BS Artificial Intelligence</p>
              </article>
            </div>
            <p className="note reveal">A listing is not a promise that every bachelor’s program shares one university. Your admission letter names the awarding body. UK Level 3 is not a Multan Board subject and not a diploma.</p>
          </div>
        </section>

        <section className="section updates" id="updates">
          <div className="wrap">
            <header className="section-head reveal">
              <p className="kicker">Important Updates</p>
              <h2 className="section-title">What families should <em>know now.</em></h2>
            </header>
            <article className="update announce reveal">
              <p className="kicker on-dark">Announcement · Multan Board</p>
              <h3>Board positions from BISE Multan.</h3>
              <p>Superior College Mian Channu announces positions in the Board of Intermediate and Secondary Education, Multan. Ask the academics office for the position-holder notice: names, subjects, and the exam session on the current list.</p>
            </article>
            <article className="update reveal">
              <p className="kicker">Convocation</p>
              <div>
                <h3>BS convocations for 2024, 2025, and 2026 are already done</h3>
                <p>The bachelor’s ceremonies for those three years have been held. This is not an upcoming date. Families asking about convocation are asking about something the campus has already completed.</p>
              </div>
            </article>
            <article className="update reveal">
              <p className="kicker">UK Level 3</p>
              <div>
                <h3>A UK Level 3 qualification, and no diploma</h3>
                <p>The campus offers UK Level 3 alongside intermediate and BS programs. Diploma programs are not offered.</p>
              </div>
            </article>
            <article className="update reveal">
              <p className="kicker">This intake</p>
              <div>
                <h3>Admissions are open</h3>
                <p>Intermediate, bachelor’s, and UK Level 3 admissions are open. Visit the campus or message the office. The desk confirms the program, the awarding body, and the fee.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section admissions" id="admissions">
          <div className="wrap">
            <div className="admissions-grid">
              <div className="sticky-col reveal">
                <p className="kicker">Admissions</p>
                <h2 className="section-title">Admissions are <em>open.</em></h2>
                <p className="lede">Intermediate, bachelor’s, and UK Level 3 seats are open. Visit the campus on Multan Road, or call 0333 0870044 or 0300 6892113. The office confirms your program and the fee.</p>
              </div>
              <div className="admit-card reveal" style={{ "--d": 1 }}>
                <p className="kicker">Now</p>
                <h3>Come in, or message the desk</h3>
                <p>Bring the last result you have. The office will tell you which programs are taking students and what to do next.</p>
              </div>
            </div>
            <div className="apply-block">
              <ol className="steps">
                {[
                  ["01", "Choose", "Pick a program, or come in as “not sure yet.”"],
                  ["02", "Visit or message", "WhatsApp, phone, or the Multan Road campus."],
                  ["03", "Show documents", "Result, identity, photographs, equivalency if needed."],
                  ["04", "Sit the conversation", "Only if that program asks for one."],
                  ["05", "Confirm the fee", "The office states the current figure. This page does not."],
                  ["06", "Start", "Orientation, timetable, and the first week."]
                ].map(([n, title, text]) => (
                  <li className="step reveal" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></li>
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

        <section className="section moments" id="moments">
          <div className="wrap">
            <header className="section-head reveal">
              <p className="kicker">Proud Moments</p>
              <h2 className="section-title">Three convocations, <em>already held.</em></h2>
              <p className="lede">BS students of this campus have already walked for convocation in 2024, 2025, and 2026. Alongside that, the college is announcing positions in the Multan Board.</p>
            </header>
            <div className="convocations">
              {["2024", "2025", "2026"].map((year) => (
                <article className="convocation reveal" key={year}>
                  <span>BS convocation · held</span>
                  <strong>{year}</strong>
                  <p>The bachelor’s ceremony for this year has already taken place.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alumni" id="alumni">
          <div className="wrap">
            <header className="section-head reveal">
              <p className="kicker on-dark">Proud Alumni</p>
              <h2 className="section-title">Where a Superior <em>education points.</em></h2>
              <p className="lede on-dark">Portraits belong here with permission. These are the paths the programs are built to open, including graduates of the BS convocations already held.</p>
            </header>
            <div className="paths">
              {[
                ["01", "Computing & AI", "Software, data, and further study for students of ICS, CS, SE, IT, Data Science, and Artificial Intelligence."],
                ["02", "Health & science", "Medicine, allied health, and laboratory science for Pre-Medical, Zoology, and Chemistry."],
                ["03", "Business", "Enterprise, finance, and management for I.Com and BBA graduates."],
                ["04", "Public life", "Teaching, media, and community work for F.A, English, Psychology, and UK Level 3 graduates."]
              ].map(([n, title, text], i) => (
                <article className="path reveal" style={{ "--d": i }} key={n}>
                  <span>{n}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq" id="questions">
          <div className="wrap">
            <header className="section-head reveal">
              <p className="kicker">Questions</p>
              <h2 className="section-title">Before you <em>make the trip.</em></h2>
            </header>
            <div className="reveal">
              {faqs.map((item, index) => (
                <div className={openFaq === index ? "faq-item open" : "faq-item"} key={item.q}>
                  <button className="faq-q" type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                    {item.q} <i aria-hidden="true" />
                  </button>
                  <div className="faq-a"><div><p>{item.a}</p></div></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="wrap">
            <header className="section-head reveal">
              <p className="kicker">Contact Us</p>
              <h2 className="section-title">Come in, or <em>send the question.</em></h2>
              <p className="lede">WhatsApp reaches the campus mobile. Email goes to the Superior Group address, so the phone is faster when a seat is the question.</p>
            </header>
            <div className="contact-grid">
              <form className="form-card reveal" onSubmit={submitVisit} noValidate>
                <p className="kicker">Admissions desk</p>
                <h3>Tell us who is coming.</h3>
                <div className="fields">
                  <label className={errors.name ? "field is-invalid" : "field"}>
                    <span>Name</span>
                    <input id="name" name="name" autoComplete="name" placeholder="Student or parent" />
                    <small className="err">{errors.name}</small>
                  </label>
                  <label className={errors.phone ? "field is-invalid" : "field"}>
                    <span>Mobile</span>
                    <input name="phone" type="tel" autoComplete="tel" placeholder="03xx xxx xxxx" />
                    <small className="err">{errors.phone}</small>
                  </label>
                  <label className={errors.program ? "field is-invalid" : "field"}>
                    <span>Program</span>
                    <select id="program" name="program" value={choice} onChange={(event) => setChoice(event.target.value)}>
                      <option value="">Select a program</option>
                      <option value="unsure">Not sure yet</option>
                      {programs.map((item) => <option value={item.id} key={item.id}>{item.title}</option>)}
                    </select>
                    <small className="err">{errors.program}</small>
                  </label>
                  <label className="field">
                    <span>Note</span>
                    <textarea name="message" placeholder="Last qualification, preferred visit day, or a question" />
                  </label>
                </div>
                <div className="form-actions">
                  <button className="btn btn-gold" type="submit" data-channel="whatsapp">WhatsApp admissions</button>
                  <button className="btn btn-ghost" type="submit" data-channel="email">Email instead</button>
                </div>
                <p className="form-status" role="status">
                  {status?.text}
                  {status?.href && <a href={status.href} target="_blank" rel="noopener">Open WhatsApp</a>}
                </p>
              </form>
              <div className="info-card reveal" style={{ "--d": 1 }}>
                <p className="kicker">Campus</p>
                <h3>Superior College Mian Channu</h3>
                <ul className="info-list">
                  <li><small>Address</small>Near NADRA Office, Multan Road, Mian Channu, District Khanewal</li>
                  <li>
                    <small>Call</small>
                    <a href="tel:+923330870044">0333 0870044</a><br />
                    <a href="tel:+923006892113">0300 6892113</a>
                  </li>
                  <li>
                    <small>Superior Group email</small>
                    <a href="mailto:info@superiorcolleges.edu.pk">info@superiorcolleges.edu.pk</a>
                  </li>
                  <li><small>Hours</small>Monday–Saturday, 8:00 am – 6:00 pm. Sunday closed.</li>
                </ul>
                <p className="ask"><strong>Ask on the visit:</strong></p>
                <ul className="ask">
                  <li>Which intake is actually open</li>
                  <li>The awarding body for your program</li>
                  <li>The Multan Board position notice</li>
                  <li>Whether a seat is still free</li>
                </ul>
                <div className="map">
                  <iframe title="Map of Superior College Mian Channu near the NADRA office on Multan Road" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=30.428581,72.321609&z=16&output=embed" />
                </div>
                <p style={{ marginTop: 12 }}><a href="https://www.google.com/maps/dir/?api=1&destination=30.428581,72.321609" target="_blank" rel="noopener">Get directions</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <h2>Superior College Mian Channu</h2>
            <p>A campus of The Superior Group of Colleges. Intermediate, BS, and UK Level 3. No diploma.</p>
            <div className="socials" aria-label="Social">
              <span className="social" role="img" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14.5 8.5V6.8c0-.7.5-1 1.2-1H17V3h-2.2C12.2 3 11 4.4 11 6.6v1.9H9v2.8h2V21h3.2v-9.7h2.2l.4-2.8h-2.6z" /></svg>
              </span>
              <span className="social" role="img" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm8 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm-4 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zM17.4 6.6a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" /></svg>
              </span>
              <span className="social" role="img" aria-label="YouTube">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23 12.2s0-3.2-.4-4.6a3 3 0 0 0-2.1-2.1C18.9 5 12 5 12 5s-6.9 0-8.5.5a3 3 0 0 0-2.1 2.1C1 9 1 12.2 1 12.2s0 3.2.4 4.6a3 3 0 0 0 2.1 2.1C5.1 19.4 12 19.4 12 19.4s6.9 0 8.5-.5a3 3 0 0 0 2.1-2.1c.4-1.4.4-4.6.4-4.6zM9.8 15.5v-6.6l6.3 3.3z" /></svg>
              </span>
            </div>
          </div>
          <div>
            <h3>Visit</h3>
            <ul>
              <li>Near NADRA Office</li>
              <li>Multan Road, Mian Channu</li>
              <li><a href="tel:+923330870044">0333 0870044</a></li>
              <li><a href="tel:+923006892113">0300 6892113</a></li>
            </ul>
          </div>
          <div>
            <h3>Programs</h3>
            <ul>
              <li><a href="#fsc-med">Intermediate</a></li>
              <li><a href="#bs-ai">Artificial Intelligence</a></li>
              <li><a href="#uk-level-3">UK Level 3</a></li>
              <li><a href="#bba">BBA</a></li>
            </ul>
          </div>
          <div>
            <h3>Explore</h3>
            <ul>
              <li><a href="#executive">Executive</a></li>
              <li><a href="#updates">Board positions</a></li>
              <li><a href="#moments">Convocations</a></li>
              <li><a href="https://www.superiorcolleges.edu.pk/mian-channu/" target="_blank" rel="noopener">Superior Group page</a></li>
            </ul>
          </div>
        </div>
        <div className="wrap legal">
          <p>© {new Date().getFullYear()} Superior College Mian Channu. Program availability and the awarding body are confirmed by the admissions office.</p>
        </div>
      </footer>

      <a className={showWa ? "wa-float show" : "wa-float"} href="https://wa.me/923006892113" target="_blank" rel="noopener" aria-label="WhatsApp admissions">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10.1 10.1 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 13.9c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.12.1-1.81-.11-.41-.13-.94-.31-1.62-.6-2.85-1.23-4.7-4.1-4.84-4.29-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07 1-2.35.24-.26.64-.38.85-.38h.2c.18 0 .42-.07.66.5.24.6.83 2.06.9 2.21.07.15.12.32.02.52-.09.19-.14.31-.28.48-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.26.72 1.19 1.55 1.93 1.07.95 1.97 1.25 2.25 1.39.28.14.44.12.6-.07.17-.19.69-.8.87-1.08.19-.27.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.46.21.53.32.07.12.07.68-.17 1.36z" />
        </svg>
      </a>
      <a className={showTop ? "to-top show" : "to-top"} href="#top" aria-label="Back to top">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 19V6M6.5 11.5 12 6l5.5 5.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>

      <dialog id="program-dialog" aria-labelledby="dialog-title" onClose={() => setProgram(null)}>
        <div className="dialog-card">
          <div className="dialog-top">
            <p className="kicker">{program?.kicker}</p>
            <button className="icon-x" type="button" aria-label="Close" onClick={() => setProgram(null)}>×</button>
          </div>
          <h3 id="dialog-title">{program?.title}</h3>
          <ul>
            {program?.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
          <button className="btn btn-ink" type="button" onClick={() => program && askAbout(program)}>Ask admissions about this program</button>
        </div>
      </dialog>
    </>
  );
}
