import type { Metadata } from "next"
import RegionaleEmpfehlungenContent from "@/components/regionale-empfehlungen/RegionaleEmpfehlungenContent"

export const metadata: Metadata = {
  title: "Regionale Empfehlungen",
  description: "Die PS Gruppe empfiehlt und unterstützt regionale Klein- und Handwerksunternehmen aus der Region.",
}

export default function RegionaleEmpfehlungenPage() {
  return (
    <main className="bg-white py-24">
      <div className="w-full px-6 max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#a8c200] mb-3">▲&nbsp;&nbsp;Regionale Empfehlungen</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          Stark für die Region.
        </h1>
        <p className="text-gray-500 leading-relaxed max-w-2xl mb-4">
          Als PS Gruppe sind wir seit vielen Jahren fest in unserer Region verwurzelt. Genau deshalb ist es uns
          wichtig, kleine Unternehmen, Handwerksbetriebe und Existenzgründer vor Ort sichtbar zu machen und
          zu unterstützen.
        </p>
        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mb-16">
          An dieser Stelle stellen wir künftig regionale Betriebe vor, mit denen wir zusammenarbeiten oder die
          wir aus Überzeugung weiterempfehlen. Sie sind Kleinunternehmer aus der Region und möchten hier
          vorgestellt werden? Melden Sie sich gerne über unser Kontaktformular bei uns.
        </p>

        <RegionaleEmpfehlungenContent />
      </div>
    </main>
  )
}
