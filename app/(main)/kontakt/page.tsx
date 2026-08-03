import type { Metadata } from "next"
import KontaktFormular from "@/components/kontakt/KontaktFormular"

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktieren Sie die PS Verbund-Gruppe.",
}

export default function KontaktPage() {
  return (
    <main className="bg-white py-24">
      <div className="w-full px-6 max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#a8c200] mb-3">▲&nbsp;&nbsp;Kontakt</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          Sprechen wir.
        </h1>
        <p className="text-gray-500 leading-relaxed max-w-2xl mb-4">
          Schreiben Sie uns über das Formular. Wir melden uns zeitnah bei Ihnen zurück.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mb-16">
          Dieses Formular gilt für alle vier Gesellschaften der PS Gruppe. Ihre Anfrage wird intern automatisch
          an den jeweils zuständigen Ansprechpartner weitergeleitet.
        </p>

        <KontaktFormular />
      </div>
    </main>
  )
}
