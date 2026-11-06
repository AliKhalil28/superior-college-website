import React from "react";
import { ticker } from "../lib/content";

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[0, 1].map((copy) => (
          <div className="ticker-group" key={copy}>
            {ticker.map((item) => (
              <span key={`${copy}-${item}`}>{item}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

