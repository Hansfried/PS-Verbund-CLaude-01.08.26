import type { Metadata } from "next"
import KieswerkeNavbar from "@/components/kieswerke/KieswerkeNavbar"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: {
    absolute: "PS Kieswerke GmbH – Kies, Sand und Splitt aus der Prignitz",
    template: "%s | PS Kieswerke",
  },
  description: "PS Kieswerke GmbH – Gewinnung und Aufbereitung von Kies, Sand und Splitt in der Region Prignitz.",
}

export default function KieswerkeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex-1 flex flex-col pt-20">
      <KieswerkeNavbar />
      <div className="flex-1 flex flex-col">{children}</div>
      <Footer basePath="/kieswerke" />
    </div>
  )
}
