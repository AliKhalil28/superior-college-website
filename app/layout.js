import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});

export const metadata = {
  title: "Superior College Mian Channu | Intermediate, BS & UK Level 3",
  description:
    "Superior College Mian Channu on Multan Road. Intermediate, bachelor’s, and UK Level 3. Multan Board positions, and BS convocations already held for 2024, 2025, and 2026.",
  icons: { icon: "/logo.png" }
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
  email: "info@superiorcolleges.edu.pk",
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
