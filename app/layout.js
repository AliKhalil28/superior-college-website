import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});

export const metadata = {
  metadataBase: new URL("https://superiorcollegemc.com"),
  title: "Superior College Mian Channu | Intermediate, BS & UK Level 3",
  description:
    "Superior College Mian Channu on Multan Road. Intermediate, bachelor’s, and UK Level 3. Multan Board positions, and BS convocations already held for 2024, 2025, and 2026.",
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: {
    title: "Superior College Mian Channu | Intermediate, BS & UK Level 3",
    description:
      "Superior College Mian Channu on Multan Road. Intermediate, bachelor’s, and UK Level 3. Admissions open.",
    url: "https://superiorcollegemc.com",
    siteName: "Superior College Mian Channu",
    images: [
      {
        url: "/images/campus.jpg",
        width: 1200,
        height: 630,
        alt: "Superior College Mian Channu Campus"
      }
    ],
    locale: "en_PK",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Superior College Mian Channu",
    description:
      "Intermediate, bachelor’s, and UK Level 3 on Multan Road, Mian Channu.",
    images: ["/images/campus.jpg"]
  }
};

export const viewport = {
  themeColor: "#0e6c6e"
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name: "Superior College Mian Channu",
  parentOrganization: "The Superior Group of Colleges",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near NADRA Office, Multan Road",
    addressLocality: "Mian Channu",
    addressRegion: "Punjab",
    postalCode: "58000",
    addressCountry: "PK"
  },
  telephone: ["+923330870044", "+923006892113"],
  email: "info@superiorcollegemc.com",
  openingHours: "Mo-Sa 08:00-18:00"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sourceSans.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
