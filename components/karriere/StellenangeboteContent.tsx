"use client"

import { useMemo, useState } from "react"
import { Search, X } from "lucide-react"
import LegalPlaceholder from "@/components/legal/LegalPlaceholder"

type JobDetail = {
  taetigkeitsfeld?: string
  voraussetzung?: string
}

// Tätigkeitsfeld/Voraussetzung noch nicht befüllt — Platzhalter bis der Nutzer die Texte liefert.
const jobDetails: Record<string, JobDetail> = {}

const wirBieten = [
  "Unbefristetes Arbeitsverhältnis in Vollzeit",
  "Leistungsgerechte Vergütung",
  "Moderne Maschinen",
  "Ein starkes Team",
  "Aufstiegschancen",
]

type Berufsfeld = {
  gesellschaft: string
  email: string
  jobs: string[]
}

const berufsfelder: Berufsfeld[] = [
  {
    gesellschaft: "PS Kieswerke GmbH",
    email: "bewerben-kieswerke@psverbund.de",
    jobs: [
      "LKW-Fahrer",
      "Maschinist (Bagger / Radlader)",
      "Werkstattmitarbeiter",
      "Werkstattmeister",
      "Brecheranlagenführer",
      "Bauleiter",
      "Disponent",
      "Kaufmännischer Angestellter",
    ],
  },
  {
    gesellschaft: "PS Straßen und Tiefbau GmbH",
    email: "info-strassenundtiefbau@psverbund.de",
    jobs: ["Maschinist (Bagger / Radlader)", "Bauleiter", "Polier", "LKW-Fahrer", "Bauarbeiter"],
  },
]

export default function StellenangeboteContent() {
  const [active, setActive] = useState<{ job: string; gesellschaft: string; email: string } | null>(null)
  const [query, setQuery] = useState("")

  const detail = active ? jobDetails[active.job] : undefined

  const gefiltert = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return berufsfelder
    return berufsfelder
      .map((feld) => ({ ...feld, jobs: feld.jobs.filter((job) => job.toLowerCase().includes(q)) }))
      .filter((feld) => feld.jobs.length > 0)
  }, [query])

  return (
    <>
      <div className="relative mb-12 max-w-md">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Job durchsuchen, z. B. Fahrer oder Bauleiter"
          className="w-full rounded-full border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 transition-colors"
        />
      </div>

      {gefiltert.length === 0 && (
        <p className="text-sm text-gray-400 mb-12">Keine Berufsfelder gefunden.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {gefiltert.map(({ gesellschaft, email, jobs }) => (
          <div key={gesellschaft} className="border-t border-gray-200 pt-8">
            <h2 className="text-lg font-bold text-gray-900 mb-5">{gesellschaft}</h2>
            <ul className="space-y-3 mb-8">
              {jobs.map((job) => (
                <li key={job}>
                  <button
                    onClick={() => setActive({ job, gesellschaft, email })}
                    className="group flex items-center gap-3 text-sm text-gray-700 hover:text-gray-900 transition-colors text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a8c200] shrink-0" />
                    <span className="group-hover:underline">{job}</span>
                  </button>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-xs font-bold uppercase tracking-wide rounded-full hover:bg-gray-700 transition-colors"
            >
              Initiativ bewerben
            </a>
          </div>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-6"
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-lg max-h-[85vh] overflow-y-auto bg-white rounded-br-[2rem] p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-6 right-6 p-1.5 text-gray-400 hover:text-gray-900 transition-colors"
              aria-label="Schließen"
            >
              <X size={20} />
            </button>

            <p className="text-xs font-semibold uppercase tracking-widest text-[#a8c200] mb-2">{active.gesellschaft}</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 pr-8">{active.job}</h3>

            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-gray-900 mb-2">Tätigkeitsfeld</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {detail?.taetigkeitsfeld ?? <LegalPlaceholder>Text wird ergänzt</LegalPlaceholder>}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-gray-900 mb-2">Voraussetzung</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {detail?.voraussetzung ?? <LegalPlaceholder>Text wird ergänzt</LegalPlaceholder>}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-gray-900 mb-2">Wir bieten</p>
                <ul className="space-y-1.5">
                  {wirBieten.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#a8c200] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`mailto:${active.email}?subject=${encodeURIComponent(`Bewerbung als ${active.job}`)}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-xs font-bold uppercase tracking-wide rounded-full hover:bg-gray-700 transition-colors"
              >
                Jetzt bewerben
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
