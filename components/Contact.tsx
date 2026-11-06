"use client";

import React from "react";
import { FormErrors, FormStatus } from "../types";
import { programs } from "../lib/content";

interface ContactProps {
  choice: string;
  setChoice: (value: string) => void;
  errors: FormErrors;
  status: FormStatus | null;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function Contact({
  choice,
  setChoice,
  errors,
  status,
  onSubmit
}: ContactProps) {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <header className="section-head reveal">
          <p className="kicker">Contact Us</p>
          <h2 className="section-title">
            Come in, or <em>send the question.</em>
          </h2>
          <p className="lede">
            WhatsApp reaches the campus mobile. You can also email the campus desk directly,
            though calling is faster when a seat is the question.
          </p>
        </header>
        <div className="contact-grid">
          <form className="form-card reveal" onSubmit={onSubmit} noValidate>
            <p className="kicker">Admissions desk</p>
            <h3>Tell us who is coming.</h3>
            <div className="fields">
              <label className={errors.name ? "field is-invalid" : "field"}>
                <span>Name</span>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="Student or parent"
                />
                <small className="err">{errors.name}</small>
              </label>
              <label className={errors.phone ? "field is-invalid" : "field"}>
                <span>Mobile</span>
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="03xx xxx xxxx"
                />
                <small className="err">{errors.phone}</small>
              </label>
              <label className={errors.program ? "field is-invalid" : "field"}>
                <span>Program</span>
                <select
                  id="program"
                  name="program"
                  value={choice}
                  onChange={(event) => setChoice(event.target.value)}
                >
                  <option value="">Select a program</option>
                  <option value="unsure">Not sure yet</option>
                  {programs.map((item) => (
                    <option value={item.id} key={item.id}>
                      {item.title}
                    </option>
                  ))}
                </select>
                <small className="err">{errors.program}</small>
              </label>
              <label className="field">
                <span>Note</span>
                <textarea
                  name="message"
                  placeholder="Last qualification, preferred visit day, or a question"
                />
              </label>
            </div>
            <div className="form-actions">
              <button className="btn btn-gold" type="submit" data-channel="whatsapp">
                WhatsApp admissions
              </button>
              <button className="btn btn-ghost" type="submit" data-channel="email">
                Email instead
              </button>
            </div>
            <p className="form-status" role="status">
              {status?.text}
              {status?.href && (
                <a href={status.href} target="_blank" rel="noopener">
                  Open WhatsApp
                </a>
              )}
            </p>
          </form>
          <div
            className="info-card reveal"
            style={{ "--d": 1 } as React.CSSProperties}
          >
            <p className="kicker">Campus</p>
            <h3>Superior College Mian Channu</h3>
            <ul className="info-list">
              <li>
                <small>Address</small>Near NADRA Office, Multan Road, Mian Channu, District Khanewal
              </li>
              <li>
                <small>Call</small>
                <a href="tel:+923330870044">0333 0870044</a>
                <br />
                <a href="tel:+923006892113">0300 6892113</a>
              </li>
              <li>
                <small>Campus email</small>
                <a href="mailto:info@superiorcollegemc.com">info@superiorcollegemc.com</a>
              </li>
              <li>
                <small>Hours</small>Monday–Saturday, 8:00 am – 6:00 pm. Sunday closed.
              </li>
            </ul>
            <p className="ask">
              <strong>Ask on the visit:</strong>
            </p>
            <ul className="ask">
              <li>Which intake is actually open</li>
              <li>The awarding body for your program</li>
              <li>The Multan Board position notice</li>
              <li>Whether a seat is still free</li>
            </ul>
            <div className="map">
              <iframe
                title="Map of Superior College Mian Channu near the NADRA office on Multan Road"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=30.428581,72.321609&z=16&output=embed"
              />
            </div>
            <p style={{ marginTop: 12 }}>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=30.428581,72.321609"
                target="_blank"
                rel="noopener"
              >
                Get directions
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

