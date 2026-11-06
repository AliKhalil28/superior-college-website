"use client";

import React from "react";

interface AnnouncementBannerProps {
  bannerOn: boolean;
  onDismiss: () => void;
}

export default function AnnouncementBanner({
  bannerOn,
  onDismiss
}: AnnouncementBannerProps) {
  if (!bannerOn) return null;

  return (
    <div className="banner">
      <p>Multan Board positions announced. BS convocations 2024–2026 are already done.</p>
      <a href="#updates">Read it</a>
      <button
        className="banner-x"
        type="button"
        aria-label="Dismiss announcement"
        onClick={onDismiss}
      >
        ×
      </button>
    </div>
  );
}

