import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import CookieConsent from "@/components/consent/CookieConsent";

const geistSans = localFont({
  src: "./fonts/geist-sans.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/geist-mono.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const montserrat = localFont({
  src: "./fonts/montserrat.woff2",
  variable: "--font-montserrat",
  weight: "700 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PS Verbund – Kieswerk, Recycling, Straßen- & Tiefbau in der Prignitz",
    template: "%s | PS Verbund",
  },
  description:
    "Die PS Verbund-Gruppe aus Perleberg: Kies, Sand und Splitt, Baustoff-Recycling, Straßen- und Tiefbau sowie Kabel- und Rohrleitungsbau in Brandenburg und Norddeutschland.",
  applicationName: SITE_NAME,
  formatDetection: { telephone: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
