import type { Metadata } from "next"
import StellenangeboteContent from "@/components/karriere/StellenangeboteContent"

export const metadata: Metadata = {
  title: "Stellenangebote",
  description: "Aktuelle Stellenangebote der PS Verbund-Gruppe.",
}

export default function StellenangebotePage() {
  return (
    <main className="bg-white py-24">
      <div className="w-full px-6 max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#a8c200] mb-3">▲&nbsp;&nbsp;Karriere</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          Alle Jobs.
        </h1>
        <p className="text-gray-500 leading-relaxed max-w-2xl mb-16">
          Diese Berufsfelder gibt es in unserem Team. Klicke auf eine Bezeichnung für mehr Details — bei Interesse
          freuen wir uns schon jetzt über eine Initiativbewerbung.
        </p>

        <StellenangeboteContent />
      </div>
    </main>
  )
}
