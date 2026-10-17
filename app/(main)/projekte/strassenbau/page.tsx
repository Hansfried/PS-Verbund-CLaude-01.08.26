import ProjekteListe from "@/components/projekte/ProjekteListe"
import ProjekteTabs from "@/components/projekte/ProjekteTabs"
import { projekte } from "@/lib/projekte-data"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Straßenbau",
  description: "Projekte der PS Verbund-Gruppe im Bereich Straßenbau.",
  path: "/projekte/strassenbau",
})

export default function StrassenbauPage() {
  const gefiltert = projekte.filter((p) => p.kategorie === "strassenbau")

  return (
    <main className="bg-white py-24">
      <div className="w-full px-6 max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#a8c200] mb-3">▲&nbsp;&nbsp;Projekte</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          Straßenbau.
        </h1>
        <p className="text-gray-500 leading-relaxed max-w-2xl mb-12">
          Ausführliche Projektbeschreibungen und Fotos folgen fortlaufend.
        </p>
        <ProjekteTabs />
        <ProjekteListe projekte={gefiltert} />
      </div>
    </main>
  )
}
