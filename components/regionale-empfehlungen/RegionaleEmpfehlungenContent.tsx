"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Search, X, Phone, Globe, Mail, MapPin } from "lucide-react"
import LegalPlaceholder from "@/components/legal/LegalPlaceholder"
import { betriebe, kategorien, type Betrieb } from "@/lib/regionale-empfehlungen-data"

export default function RegionaleEmpfehlungenContent() {
  const [active, setActive] = useState<Betrieb | null>(null)
  const [query, setQuery] = useState("")

  const gruppiert = useMemo(() => {
    const q = query.trim().toLowerCase()
    return kategorien.map((kategorie) => ({
      kategorie,
      betriebe: betriebe.filter(
        (betrieb) => betrieb.kategorie === kategorie && betrieb.name.toLowerCase().includes(q)
      ),
    }))
  }, [query])

  return (
    <>
      <div className="relative mb-12 max-w-md">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Betrieb durchsuchen, z. B. Elektriker"
          className="w-full rounded-full border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 transition-colors"
        />
      </div>

      <div className={`grid grid-cols-1 gap-16 ${kategorien.length > 1 ? "md:grid-cols-2" : "max-w-md"}`}>
        {gruppiert.map(({ kategorie, betriebe: gefiltert }) => (
          <div key={kategorie} className="border-t border-gray-200 pt-8">
            <div className="flex items-center gap-3 mb-5">
              <h2 className="text-lg font-bold text-gray-900">{kategorie}</h2>
              {(() => {
                const logoBetrieb = betriebe.find((betrieb) => betrieb.kategorie === kategorie && betrieb.logo)
                return logoBetrieb ? (
                  <button
                    onClick={() => setActive(logoBetrieb)}
                    aria-label={`${logoBetrieb.name} – Details öffnen`}
                    className="shrink-0 rounded-full overflow-hidden w-9 h-9 ring-1 ring-gray-200 hover:ring-gray-400 transition-all"
                  >
                    <Image src={logoBetrieb.logo!} alt={logoBetrieb.name} width={36} height={36} className="object-cover w-full h-full" />
                  </button>
                ) : null
              })()}
            </div>

            {gefiltert.length === 0 ? (
              <p className="text-sm text-gray-400 mb-8">
                <LegalPlaceholder>Betriebe werden ergänzt</LegalPlaceholder>
              </p>
            ) : (
              <ul className="space-y-3 mb-8">
                {gefiltert.map((betrieb) => (
                  <li key={betrieb.name}>
                    <button
                      onClick={() => setActive(betrieb)}
                      className="group flex items-center gap-3 text-sm text-gray-700 hover:text-gray-900 transition-colors text-left"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#a8c200] shrink-0" />
                      <span className="group-hover:underline">{betrieb.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
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

            {active.logo && (
              <Image
                src={active.logo}
                alt={active.name}
                width={72}
                height={72}
                className="rounded-full object-cover mb-4 ring-1 ring-gray-200"
              />
            )}

            <p className="text-xs font-semibold uppercase tracking-widest text-[#a8c200] mb-2">{active.kategorie}</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 pr-8">{active.name}</h3>

            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-gray-900 mb-2">Über den Betrieb</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {active.beschreibung ?? <LegalPlaceholder>Text wird ergänzt</LegalPlaceholder>}
                </p>
              </div>

              {active.leistungen && active.leistungen.length > 0 && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-gray-900 mb-2">Leistungen</p>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    {active.leistungen.map((leistung) => (
                      <li key={leistung} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#a8c200] shrink-0" />
                        {leistung}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {active.vorherNachher && active.vorherNachher.length > 0 && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-gray-900 mb-3">Vorher / Nachher</p>
                  <div className="space-y-4">
                    {active.vorherNachher.map((paar, index) => (
                      <div key={index} className={`grid gap-2 ${paar.nachher ? "grid-cols-2" : "grid-cols-1"}`}>
                        <div>
                          <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                            <Image src={paar.vorher} alt="Vorher" fill className="object-cover" />
                          </div>
                          <p className="text-xs text-gray-400 mt-1 text-center">Vorher</p>
                        </div>
                        {paar.nachher && (
                          <div>
                            <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                              <Image src={paar.nachher} alt="Nachher" fill className="object-cover" />
                            </div>
                            <p className="text-xs text-gray-400 mt-1 text-center">Nachher</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-gray-900 mb-2">Kontakt</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {active.adresse && (
                    <li className="flex items-center gap-2">
                      <MapPin size={14} className="text-gray-400 shrink-0" />
                      {active.adresse}
                    </li>
                  )}
                  {active.telefon && (
                    <li className="flex items-center gap-2">
                      <Phone size={14} className="text-gray-400 shrink-0" />
                      {active.telefon}
                    </li>
                  )}
                  {active.website && (
                    <li className="flex items-center gap-2">
                      <Globe size={14} className="text-gray-400 shrink-0" />
                      {active.website}
                    </li>
                  )}
                  {active.email && (
                    <li className="flex items-center gap-2">
                      <Mail size={14} className="text-gray-400 shrink-0" />
                      {active.email}
                    </li>
                  )}
                  {!active.adresse && !active.telefon && !active.website && !active.email && (
                    <li>
                      <LegalPlaceholder>Kontaktdaten werden ergänzt</LegalPlaceholder>
                    </li>
                  )}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                {active.website && (
                  <a
                    href={active.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-xs font-bold uppercase tracking-wide rounded-full hover:bg-gray-700 transition-colors"
                  >
                    Website besuchen
                  </a>
                )}
                {active.telefon && (
                  <a
                    href={`tel:${active.telefon.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-900 text-xs font-bold uppercase tracking-wide rounded-full hover:bg-gray-200 transition-colors"
                  >
                    Anrufen
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
