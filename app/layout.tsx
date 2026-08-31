import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import { GlobalNavigation } from "@/components/GlobalNavigation";
import "./globals.css";

// Only two typefaces site-wide: Inter for everything except the Hero, Anton
// for the Hero alone (below). --font-display is aliased to --font-body in
// globals.css :root rather than loaded as a second font — see that file.
const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Homepage Hero headline only — see app/page.module.css .heroTitle.
const heroFont = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hero",
  display: "swap",
});

const themeScript = `
(() => {
  try {
    const preference = localStorage.getItem("portfolio-theme") || "system";
    const resolved = preference === "system"
      ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : preference;
    document.documentElement.dataset.theme = resolved;
    document.documentElement.style.colorScheme = resolved;
  } catch (_) {}
})();`;

const siteTitle = "Ruxia Wang — Product & Experience Designer";
const siteDescription =
  "New York–based product and experience designer with 5+ years of commercial product development experience across digital products, connected experiences, and AI-assisted workflows.";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ruxia Wang",
  url: "https://ruxiawang.com",
  image: "https://ruxiawang.com/about/ruxia-wang-portrait.webp",
  jobTitle: "Product and Experience Designer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/in/ruxiawang/",
    "https://www.behance.net/ruxiawangdesign",
    "https://www.instagram.com/ruxia.art/",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ruxiawang.com"),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Ruxia Wang",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ruxia Wang — Product & Experience Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${bodyFont.variable} ${heroFont.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <GlobalNavigation />
        {children}
      </body>
    </html>
  );
}
