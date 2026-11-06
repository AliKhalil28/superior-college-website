"use client";

import React, { useEffect } from "react";
import { Program } from "../types";

interface ProgramDialogProps {
  program: Program | null;
  onClose: () => void;
  onAskAbout: (program: Program) => void;
}

export default function ProgramDialog({
  program,
  onClose,
  onAskAbout
}: ProgramDialogProps) {
  useEffect(() => {
    const dialog = document.getElementById("program-dialog") as HTMLDialogElement | null;
    if (!dialog) return;
    if (program && !dialog.open) {
      dialog.showModal();
    }
    if (!program && dialog.open) {
      dialog.close();
    }
  }, [program]);

  return (
    <dialog
      id="program-dialog"
      aria-labelledby="dialog-title"
      onClose={onClose}
    >
      <div className="dialog-card">
        <div className="dialog-top">
          <p className="kicker">{program?.kicker}</p>
          <button
            className="icon-x"
            type="button"
            aria-label="Close"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <h3 id="dialog-title">{program?.title}</h3>
        <ul>
          {program?.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <button
          className="btn btn-ink"
          type="button"
          onClick={() => program && onAskAbout(program)}
        >
          Ask admissions about this program
        </button>
      </div>
    </dialog>
  );
}

