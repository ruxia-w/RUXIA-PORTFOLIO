import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { GlobalNavigation } from "@/components/GlobalNavigation";
import "./globals.css";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
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

export const metadata: Metadata = {
  title: "Ruxia Wang — Product & Experience Designer",
  description:
    "Portfolio of Ruxia Wang, a New York–based designer working across physical products, connected experiences, and intelligent systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${bodyFont.variable} ${displayFont.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <GlobalNavigation />
        {children}
      </body>
    </html>
  );
}
