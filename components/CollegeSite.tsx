"use client";

import React, { useEffect, useState } from "react";
import { Program, ProgramTrack, FormErrors, FormStatus } from "../types";
import AnnouncementBanner from "./AnnouncementBanner";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Ticker from "./Ticker";
import Vision from "./Vision";
import Executive from "./Executive";
import Programs from "./Programs";
import ProgramDialog from "./ProgramDialog";
import Campus from "./Campus";
import Affiliation from "./Affiliation";
import Updates from "./Updates";
import Admissions from "./Admissions";
import Moments from "./Moments";
import Alumni from "./Alumni";
import Faq from "./Faq";
import Contact from "./Contact";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";

const nav: [string, string][] = [
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

export default function CollegeSite() {
  const [bannerOn, setBannerOn] = useState<boolean>(true);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [active, setActive] = useState<string>("");
  const [filter, setFilter] = useState<ProgramTrack>("all");
  const [program, setProgram] = useState<Program | null>(null);
  const [choice, setChoice] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus | null>(null);
  const [showTop, setShowTop] = useState<boolean>(false);
  const [showWa, setShowWa] = useState<boolean>(false);
  const [headerSolid, setHeaderSolid] = useState<boolean>(false);

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
      .filter(Boolean) as Element[];

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
      const bar = document.querySelector(".progress") as HTMLElement | null;
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

  function dismissBanner() {
    try {
      sessionStorage.setItem("sc-banner", "off");
    } catch (error) {
      /* ignore */
    }
    document.documentElement.classList.add("banner-off");
    setBannerOn(false);
  }

  function askAbout(item: Program) {
    setChoice(item.id);
    setProgram(null);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    document.getElementById("name")?.focus();
  }

  function submitVisit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const selected = String(data.get("program") || "");
    const message = String(data.get("message") || "").trim();
    const digits = phone.replace(/\D/g, "");
    const nextErrors: FormErrors = {};

    if (name.length < 2) nextErrors.name = "Please add the student’s or parent’s name.";
    if (digits.length < 10 || digits.length > 13) nextErrors.phone = "Enter a working mobile number.";
    if (!selected) nextErrors.program = "Choose a program, or “Not sure yet”.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus(null);
      return;
    }

    const selectElement = form.querySelector("#program") as HTMLSelectElement | null;
    const label = selectElement?.selectedOptions[0]?.textContent || selected;
    const text = [
      "Admission query — Superior College Mian Channu",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Program: ${label}`,
      message ? `Note: ${message}` : "Note: I would like counselling for the current intake."
    ].join("\n");

    const submitter = (event.nativeEvent as unknown as { submitter?: HTMLElement })?.submitter;
    const channel = submitter?.dataset?.channel || "whatsapp";

    if (channel === "email") {
      window.location.href = `mailto:info@superiorcollegemc.com?subject=${encodeURIComponent(
        "Admission query — Mian Channu"
      )}&body=${encodeURIComponent(text)}`;
      setStatus({
        text: "Your email app should open with this message. For a faster answer, call the campus."
      });
      return;
    }

    const href = `https://wa.me/923006892113?text=${encodeURIComponent(text)}`;
    const opened = window.open(href, "_blank", "noopener");
    if (opened) {
      setStatus({
        text: "WhatsApp is opening with your message. The campus confirms seats and dates in reply."
      });
      return;
    }
    setStatus({ text: "Pop-up blocked. Use this link instead: ", href });
  }

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <FloatingActions showWa={showWa} showTop={showTop} />

      <div className="top">
        <AnnouncementBanner bannerOn={bannerOn} onDismiss={dismissBanner} />
        <Navbar
          headerSolid={headerSolid}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          active={active}
          nav={nav}
        />
      </div>

      <main id="main">
        <Hero />
        <Ticker />
        <Vision />
        <Executive />
        <Programs
          filter={filter}
          setFilter={setFilter}
          onSelectProgram={(p) => setProgram(p)}
        />
        <Campus />
        <Affiliation />
        <Updates />
        <Admissions />
        <Moments />
        <Alumni />
        <Faq />
        <Contact
          choice={choice}
          setChoice={setChoice}
          errors={errors}
          status={status}
          onSubmit={submitVisit}
        />
      </main>

      <Footer />

      <ProgramDialog
        program={program}
        onClose={() => setProgram(null)}
        onAskAbout={askAbout}
      />
    </>
  );
}

