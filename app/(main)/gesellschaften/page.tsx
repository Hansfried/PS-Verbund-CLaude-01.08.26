import Organigramm from "@/components/gesellschaften/Organigramm"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Gesellschaften",
  description: "Die Gesellschaften der PS Verbund-Gruppe im Überblick: Kieswerke, Straßen- und Tiefbau, Infrabau und Bauschutt.",
  path: "/gesellschaften",
})

export default function GesellschaftenPage() {
  return (
    <main className="bg-white py-24">
      <div className="w-full px-6 max-w-5xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#a8c200] mb-3">▲&nbsp;&nbsp;Gesellschaften</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          Vier Synergien.
          <br />
          Eine Gruppe.
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mb-16">
          &bdquo;PS Verbund&ldquo; ist dabei lediglich der Name, unter dem die Firmengruppe gemeinsam auftritt, keine
          eigenständige Gesellschaft. Dach der Gruppe ist die PS Holding GmbH.
        </p>

        <Organigramm />
      </div>
    </main>
  )
}
