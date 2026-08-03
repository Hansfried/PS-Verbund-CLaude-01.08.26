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

// Die reale Infrabau-Seite bleibt im Code vollständig bestehen, ist aber bis zum
// Launch-Datum nicht öffentlich erreichbar — stattdessen erscheint die Platzhalterseite.
// force-dynamic verhindert, dass diese Prüfung einmalig beim Build eingefroren wird —
// ohne das würde der Umschlag am 10.08. erst nach einem erneuten Deploy sichtbar.
export const dynamic = "force-dynamic"

const LAUNCH_DATE = new Date("2026-08-10T00:00:00")

export default function InfrabauLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Bewusste Ausnahme: force-dynamic macht dies zu einer echten Server-Anfrage-Prüfung
  // (kein eingefrorener Build-Zeitpunkt, keine Client-Hydration-Inkonsistenz möglich).
  // In der lokalen Dev-Umgebung wird die Sperre übersprungen, damit der fertige Content
  // getestet werden kann, ohne die Live-Sperre bis zum Launch-Datum zu beeinflussen.
  // eslint-disable-next-line react-hooks/purity
  if (process.env.NODE_ENV === "production" && Date.now() < LAUNCH_DATE.getTime()) {
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
