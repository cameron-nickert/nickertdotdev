import type { Metadata } from "next";
import { Bangers, Rubik } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const display = Bangers({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400"]
});

const body = Rubik({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cameron.nickert.dev"),
  title: {
    default: "Cameron Michael Nickert | Portfolio",
    template: "%s | Cameron Michael Nickert"
  },
  description:
    "Senior Software Engineer in payments, building reliable software for small businesses.",
  openGraph: {
    title: "Cameron Michael Nickert | Portfolio",
    description:
      "Senior Software Engineer in payments, building reliable software for small businesses.",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable}`}
      data-density="comfortable"
      data-intensity="tier-2"
      data-wacky="normal"
    >
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <div className="page">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
