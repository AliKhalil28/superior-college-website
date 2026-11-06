"use client";

import React from "react";

interface NavbarProps {
  headerSolid: boolean;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  active: string;
  nav: [string, string][];
}

export default function Navbar({
  headerSolid,
  menuOpen,
  setMenuOpen,
  active,
  nav
}: NavbarProps) {
  return (
    <header className={headerSolid ? "site-header is-solid" : "site-header"}>
      <div className="header-inner">
        <a className="logo" href="#top">
          <img src="/logo.png" alt="Superior College Mian Channu Logo" width="74" height="74" />
          <span>
            <strong>Superior</strong>
            <small>College · Mian Channu</small>
          </span>
        </a>
        <nav
          className={menuOpen ? "nav is-open" : "nav"}
          id="nav"
          aria-label="Primary"
        >
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
        <a className="btn btn-gold header-apply" href="#contact">
          Apply
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="nav"
          aria-label="Menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
        </button>
      </div>
    </header>
  );
}

