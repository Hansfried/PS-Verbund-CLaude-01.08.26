import type { Metadata } from "next"
import InfrabauNavbar from "@/components/infrabau/InfrabauNavbar"
import InfrabauComingSoon from "@/components/infrabau/InfrabauComingSoon"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: {
    absolute: "PS Infrabau GmbH",
    template: "%s | PS Infrabau",
  },
  description: "PS Infrabau GmbH – Kabel- und Rohrleitungsbau sowie Tiefbauleistungen.",
}

// Die reale Infrabau-Seite bleibt im Code vollständig bestehen, ist aber öffentlich
// nicht erreichbar — stattdessen erscheint die Platzhalterseite.
export default function InfrabauLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (process.env.NODE_ENV === "production") {
    return (
      <div className="flex-1 flex flex-col pt-20">
        <InfrabauNavbar />
        <InfrabauComingSoon />
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col pt-20">
      <InfrabauNavbar />
      <div className="flex-1 flex flex-col">{children}</div>
      <Footer basePath="/infrabau" />
    </div>
  )
}
