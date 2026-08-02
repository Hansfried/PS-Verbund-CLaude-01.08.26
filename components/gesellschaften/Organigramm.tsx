import Link from "next/link"
import LegalPlaceholder from "@/components/legal/LegalPlaceholder"

type Gesellschaft = {
  name: string
  href: string
  accentColor: string
  zweck: string
  geschaeftsfuehrer: string | null
  prokurist: string | null
}

const gesellschaften: Gesellschaft[] = [
  {
    name: "PS Kieswerke GmbH",
    href: "/kieswerke",
    accentColor: "#a8c200",
    zweck: "Gewinnung von Kies und Sanden, Herstellung von Beton RC, Schottertragschicht (STS), Recycling von Betonbruch, Abfuhr und Entsorgung.",
    geschaeftsfuehrer: "Markus Plikat, Hansfried Schmelzer",
    prokurist: "Thomas Wodinski",
  },
  {
    name: "PS Straßen und Tiefbau GmbH",
    href: "/strassen-und-tiefbau",
    accentColor: "#eab308",
    zweck: "Straßen-, Erd- und Tiefbauarbeiten für öffentliche und private Auftraggeber.",
    geschaeftsfuehrer: "Thomas Wodinski",
    prokurist: "Hansfried Schmelzer, Markus Plikat",
  },
  {
    name: "PS Infrabau GmbH",
    href: "/infrabau",
    accentColor: "#f97316",
    zweck: "Infrastrukturprojekte im Kanal-, Leitungs- und Sonderbau.",
    geschaeftsfuehrer: "Hansfried Schmelzer",
    prokurist: "Britta Holzhauer",
  },
  {
    name: "PS Bauschutt GmbH",
    href: "/bauschutt",
    accentColor: "#38bdf8",
    zweck: "Professionelle Entsorgung, Endlagerung in unserer DK1 Deponie.",
    geschaeftsfuehrer: "Markus Plikat",
    prokurist: "Britta Holzhauer",
  },
]

export default function Organigramm() {
  return (
    <div className="flex flex-col items-center">
      {/* Holding */}
      <div className="bg-gray-900 text-white px-8 py-5 rounded-br-[1.5rem] text-center">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">Dachgesellschaft</p>
        <p className="font-bold mb-1">PS Holding GmbH</p>
        <p className="text-xs text-gray-400">Geschäftsführende Gesellschafter: Markus Plikat, Hansfried Schmelzer</p>
      </div>

      {/* Connector */}
      <div className="w-px h-8 bg-gray-300" />
      <div className="hidden sm:block w-full max-w-4xl h-px bg-gray-300" />

      {/* Operative Gesellschaften */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 w-full max-w-4xl mt-0 sm:mt-0">
        {gesellschaften.map(({ name, href, accentColor, zweck, geschaeftsfuehrer, prokurist }) => (
          <div key={name} className="flex flex-col items-center">
            <div className="w-px h-8 bg-gray-300 hidden sm:block" />
            <div className="group relative w-full">
              <Link
                href={href}
                className="flex flex-col items-center gap-2 border border-gray-200 rounded-br-[1.25rem] px-4 py-6 w-full hover:border-gray-400 transition-colors text-center"
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: accentColor }} />
                <span className="text-sm font-bold text-gray-900">{name}</span>
              </Link>

              {/* Info popover on hover */}
              <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-72 -translate-x-1/2 rounded-br-[1.25rem] border border-gray-200 bg-white p-5 text-left opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100">
                <p className="text-xs font-bold uppercase tracking-wide text-gray-900 mb-2">{name}</p>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{zweck}</p>
                <div className="text-xs text-gray-600 space-y-1">
                  <p>
                    <span className="font-semibold text-gray-900">Geschäftsführer: </span>
                    {geschaeftsfuehrer ?? <LegalPlaceholder>wird ergänzt</LegalPlaceholder>}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">Prokurist: </span>
                    {prokurist ?? <LegalPlaceholder>wird ergänzt</LegalPlaceholder>}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
