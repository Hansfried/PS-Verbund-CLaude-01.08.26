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

// Die reale Bauschutt-Seite bleibt im Code vollständig bestehen, ist aber bis zum
// Launch-Datum nicht öffentlich erreichbar — stattdessen erscheint die Platzhalterseite.
// force-dynamic verhindert, dass diese Prüfung einmalig beim Build eingefroren wird —
// ohne das würde der Umschlag am 10.08. erst nach einem erneuten Deploy sichtbar.
export const dynamic = "force-dynamic"

const LAUNCH_DATE = new Date("2026-08-10T00:00:00")

export default function BauschuttLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Bewusste Ausnahme: force-dynamic macht dies zu einer echten Server-Anfrage-Prüfung
  // (kein eingefrorener Build-Zeitpunkt, keine Client-Hydration-Inkonsistenz möglich).
  // eslint-disable-next-line react-hooks/purity
  if (Date.now() < LAUNCH_DATE.getTime()) {
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
