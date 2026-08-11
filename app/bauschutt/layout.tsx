import type { Metadata } from "next"
import BauschuttNavbar from "@/components/bauschutt/BauschuttNavbar"
import BauschuttComingSoon from "@/components/bauschutt/BauschuttComingSoon"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: {
    absolute: "PS Bauschutt GmbH",
    template: "%s | PS Bauschutt",
  },
  description: "PS Bauschutt GmbH – Bauschutt-Recycling und Entsorgung.",
}

// Die reale Bauschutt-Seite bleibt im Code vollständig bestehen, ist aber öffentlich
// nicht erreichbar — stattdessen erscheint die Platzhalterseite.
export default function BauschuttLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (process.env.NODE_ENV === "production") {
    return (
      <div className="flex-1 flex flex-col pt-20">
        <BauschuttNavbar />
        <BauschuttComingSoon />
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col pt-20">
      <BauschuttNavbar />
      <div className="flex-1 flex flex-col">{children}</div>
      <Footer basePath="/bauschutt" />
    </div>
  )
}
