# Superior College Mian Channu

Official website for **Superior College Mian Channu**, built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

## Features

- **TypeScript (`.tsx` / `.ts`)**: Fully type-safe components, data models, and configurations.
- **Tailwind CSS**: Modern utility classes coupled with custom brand tokens and animations.
- **Modular Component Structure**: 18+ clean, reusable components located in `components/`.
- **17 Academic Programs**: Intermediate (F.Sc, ICS, I.Com, F.A), Bachelor's degrees (AI, CS, SE, IT, Data Science, BBA, Psychology, English, Zoology, Chemistry, BS HND), and UK Level 3.
- **Interactive Admissions Form**: Integrated client validation with WhatsApp lead forwarding (`wa.me`) and Email fallback.
- **SEO & Social Sharing Ready**: Includes OpenGraph previews, Schema.org JSON-LD structured data, dynamic `sitemap.xml`, and `robots.txt`.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
superior-college-website/
├── app/
│   ├── globals.css          # Tailwind CSS + Design tokens + Animations
│   ├── layout.tsx           # Root layout with fonts, metadata, and JSON-LD
│   ├── page.tsx             # Entry page
│   ├── robots.ts            # Dynamic robots.txt
│   └── sitemap.ts           # Dynamic sitemap.xml
├── components/              # Modular UI components
│   ├── Admissions.tsx       # 6-step admissions guide & checklist
│   ├── Affiliation.tsx      # BISE Multan, GCUF, and IUB affiliations
│   ├── Alumni.tsx           # Career paths
│   ├── AnnouncementBanner.tsx# Dismissible notification bar
│   ├── Arrow.tsx            # Animated arrow icon
│   ├── Campus.tsx           # Facilities & lab overview
│   ├── CollegeSite.tsx      # Main coordinator client component
│   ├── Contact.tsx          # Contact desk form + map + details
│   ├── Executive.tsx        # Executive leadership profiles
│   ├── Faq.tsx              # Accordion FAQ
│   ├── FloatingActions.tsx  # WhatsApp, Back-to-Top, Progress bar
│   ├── Footer.tsx           # Footer & social links
│   ├── Hero.tsx             # Hero section
│   ├── Moments.tsx          # Convocations (2024, 2025, 2026)
│   ├── Navbar.tsx           # Sticky navigation & mobile drawer
│   ├── ProgramDialog.tsx    # Program details modal dialog
│   ├── Programs.tsx         # Filterable 17-program grid
│   ├── Ticker.tsx           # Marquee program ticker
│   └── Updates.tsx          # Important notices
├── lib/
│   └── content.ts           # Decoupled content & program data
├── types/
│   └── index.ts             # TypeScript interfaces & types
└── public/                  # Static images, logos, and management photos
```

## Production Build

To build the project for production:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```
