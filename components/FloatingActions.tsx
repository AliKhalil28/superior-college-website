import React from "react";

interface FloatingActionsProps {
  showWa: boolean;
  showTop: boolean;
}

export default function FloatingActions({
  showWa,
  showTop
}: FloatingActionsProps) {
  return (
    <>
      <div className="progress" aria-hidden="true" />

      <a
        className={showWa ? "wa-float show" : "wa-float"}
        href="https://wa.me/923006892113"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp admissions"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10.1 10.1 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 13.9c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.12.1-1.81-.11-.41-.13-.94-.31-1.62-.6-2.85-1.23-4.7-4.1-4.84-4.29-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07 1-2.35.24-.26.64-.38.85-.38h.2c.18 0 .42-.07.66.5.24.6.83 2.06.9 2.21.07.15.12.32.02.52-.09.19-.14.31-.28.48-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.26.72 1.19 1.55 1.93 1.07.95 1.97 1.25 2.25 1.39.28.14.44.12.6-.07.17-.19.69-.8.87-1.08.19-.27.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.46.21.53.32.07.12.07.68-.17 1.36z"
          />
        </svg>
      </a>

      <a
        className={showTop ? "to-top show" : "to-top"}
        href="#top"
        aria-label="Back to top"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 19V6M6.5 11.5 12 6l5.5 5.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </>
  );
}

