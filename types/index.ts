export interface Leader {
  name: string;
  role: string;
  initials: string;
  photo?: string;
  note: string;
}

export type ProgramTrack = "all" | "intermediate" | "bachelor" | "uk";

export interface Program {
  id: string;
  image: string;
  track: "intermediate" | "bachelor" | "uk";
  feature?: boolean;
  kicker: string;
  title: string;
  summary: string;
  points: string[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FormErrors {
  name?: string;
  phone?: string;
  program?: string;
}

export interface FormStatus {
  text: string;
  href?: string;
}

