"use client"

import { useMemo, useState } from "react"
import { Search, X } from "lucide-react"
import LegalPlaceholder from "@/components/legal/LegalPlaceholder"

type JobDetail = {
  taetigkeitsfeld?: string
  voraussetzung?: string
}

const jobDetails: Record<string, JobDetail> = {
  "LKW-Fahrer": {
    taetigkeitsfeld:
      "Sie bewegen Tonnen! Dabei bleiben Sie im regionalen Umkreis von 70 km. Ihr Fahrzeug ist ein Volvo FM mit bis zu 560 PS.",
    voraussetzung: "Führerschein der Klasse CE",
  },
  "Maschinist (Bagger / Radlader)": {
    taetigkeitsfeld:
      "Sie führen Raupenbagger mit einem Einsatzgewicht von bis zu 94 Tonnen und einem Löffelfassungsvermögen von 3,9–7 m³. Je nach Einsatzgebiet und Können steigen Sie auch auf Radlader, Walzen und Raupen um.",
    voraussetzung: "Erfahrung im Umgang mit schweren Maschinen",
  },
  "Werkstattmitarbeiter": {
    taetigkeitsfeld:
      "Sie reparieren große Maschinen und LKWs und bleiben dabei überwiegend stationär in der Werkstatt. Es kann jedoch vorkommen, dass auch direkt auf der Baustelle repariert wird.",
    voraussetzung:
      "Erfahrung im Umgang mit schweren Maschinen sowie eine abgeschlossene Ausbildung als Landmaschinenschlosser, Baumaschinenmechatroniker oder Nutzfahrzeugmechatroniker.",
  },
  "Werkstattmeister": {
    taetigkeitsfeld:
      "Sie organisieren und leiten die Werkstatt sowie die Wartung und Reparatur des gesamten Maschinen- und Fuhrparks. Sie stellen sicher, dass Baumaschinen, Fahrzeuge und Anlagen jederzeit sicher, zuverlässig und wirtschaftlich einsatzbereit sind, und koordinieren dabei Mitarbeitende, Ersatzteilbeschaffung und externe Dienstleister. Darüber hinaus überwachen Sie die Einhaltung von Arbeitsschutz- und Sicherheitsvorschriften und optimieren die Werkstattabläufe.",
    voraussetzung:
      "Eine abgeschlossene Berufsausbildung, z. B. als Land- und Baumaschinenmechatroniker, Kfz-Mechatroniker (Nutzfahrzeuge), Industriemechaniker oder in einem vergleichbaren technischen Beruf. Eine Weiterbildung zum Meister (z. B. Industriemeister Metall oder Landmaschinenmechanikermeister) oder eine vergleichbare Qualifikation. Mehrjährige Berufserfahrung in der Wartung und Reparatur von Baumaschinen, Nutzfahrzeugen oder Industrieanlagen. Erfahrung in der Mitarbeiterführung sowie organisatorische Fähigkeiten. Gute Kenntnisse in Mechanik, Hydraulik, Pneumatik, Elektrik und moderner Diagnosetechnik. Selbstständige, verantwortungsbewusste und lösungsorientierte Arbeitsweise. Kenntnisse der Arbeitssicherheits- und Unfallverhütungsvorschriften. Führerschein der Klasse B; je nach Betrieb sind weitere Führerscheinklassen (z. B. C/CE) von Vorteil.",
  },
  "Brecheranlagenführer": {
    taetigkeitsfeld:
      "Sie bedienen, überwachen und steuern Brech-, Sieb- und Förderanlagen zur Aufbereitung von Kies, Sand und Gestein. Sie sorgen für einen störungsfreien Produktionsablauf, führen regelmäßige Kontrollen sowie kleinere Wartungs- und Instandhaltungsarbeiten durch und beheben einfache Störungen. Zudem achten Sie auf die Einhaltung der Qualitäts-, Sicherheits- und Umweltvorschriften.",
    voraussetzung:
      "Eine zuverlässige Arbeitsweise sowie Erfahrung im Umgang mit Maschinen und Anlagen sind von Vorteil. Teamfähigkeit, Verantwortungsbewusstsein und die Bereitschaft zur Arbeit im Freien runden Ihr Profil ab.",
  },
  "Kaufmännischer Angestellter": {
    taetigkeitsfeld:
      "Sie übernehmen allgemeine kaufmännische und administrative Aufgaben und unterstützen die täglichen Abläufe im Unternehmen. Dazu gehören die Bearbeitung von Aufträgen, Rechnungen und Schriftverkehr, die Pflege von Stammdaten sowie die Kommunikation mit Kunden, Lieferanten und Geschäftspartnern. Zudem wirken Sie bei der Organisation des Bürobetriebs mit und unterstützen die verschiedenen Fachbereiche.",
    voraussetzung:
      "Sie verfügen über eine abgeschlossene kaufmännische Berufsausbildung, beispielsweise als Kaufmann/Kauffrau für Büromanagement oder Industriekaufmann/-frau, oder über eine vergleichbare Qualifikation. Sie arbeiten selbstständig, strukturiert und zuverlässig und besitzen gute Kenntnisse in den gängigen MS-Office-Anwendungen. Teamfähigkeit, Kommunikationsstärke sowie ein freundliches und serviceorientiertes Auftreten runden Ihr Profil ab.",
  },
  "Bauleiter": {
    taetigkeitsfeld:
      "Sie planen, koordinieren und überwachen Bauprojekte von der Vorbereitung bis zur erfolgreichen Fertigstellung. Dabei steuern Sie den Personaleinsatz, koordinieren Nachunternehmer und stellen die Einhaltung von Terminen, Kosten, Qualitätsstandards sowie Arbeitssicherheitsvorschriften sicher. Zudem sind Sie Ansprechpartner für Auftraggeber, Behörden und Projektbeteiligte und dokumentieren den Baufortschritt.",
    voraussetzung:
      "Sie verfügen über eine abgeschlossene Ausbildung mit Weiterbildung zum Bautechniker oder Meister bzw. ein abgeschlossenes Studium im Bauingenieurwesen oder einer vergleichbaren Fachrichtung. Berufserfahrung in der Bauleitung, Organisationstalent, Durchsetzungsvermögen sowie eine selbstständige und verantwortungsbewusste Arbeitsweise zeichnen Sie aus. Gute Kommunikationsfähigkeiten, wirtschaftliches Denken und ein sicherer Umgang mit gängiger Büro- und Bausoftware sind von Vorteil.",
  },
  "Polier": {
    taetigkeitsfeld:
      "Sie organisieren und überwachen die täglichen Arbeitsabläufe auf der Baustelle und sorgen für eine termingerechte, qualitativ hochwertige und wirtschaftliche Ausführung der Bauarbeiten. Dabei koordinieren Sie Mitarbeitende, Nachunternehmer sowie den Einsatz von Maschinen und Materialien und achten auf die Einhaltung von Arbeitssicherheits- und Qualitätsstandards. Zudem arbeiten Sie eng mit der Bauleitung zusammen und dokumentieren den Baufortschritt.",
    voraussetzung:
      "Sie verfügen über eine abgeschlossene Ausbildung im Baugewerbe sowie eine Weiterbildung zum geprüften Polier oder eine vergleichbare Qualifikation. Mehrjährige Berufserfahrung, Führungsstärke, Organisationstalent und eine selbstständige Arbeitsweise zeichnen Sie aus. Verantwortungsbewusstsein, Durchsetzungsvermögen sowie Kenntnisse der geltenden Sicherheitsvorschriften runden Ihr Profil ab.",
  },
  "Bauhelfer": {
    taetigkeitsfeld:
      "Sie unterstützen das Baustellenteam bei allgemeinen Bauarbeiten sowie bei der Vorbereitung und Einrichtung von Baustellen. Dazu gehören Materialtransport, einfache handwerkliche Tätigkeiten, Aufräum- und Reinigungsarbeiten sowie die Unterstützung beim Bedienen von Maschinen und Geräten. Sie tragen dazu bei, dass die Arbeiten sicher, effizient und termingerecht ausgeführt werden.",
    voraussetzung:
      "Sie verfügen idealerweise über erste praktische Erfahrungen im Baugewerbe, eine Ausbildung ist jedoch nicht zwingend erforderlich. Handwerkliches Geschick, körperliche Belastbarkeit sowie eine zuverlässige und teamorientierte Arbeitsweise zeichnen Sie aus. Führerschein der Klasse B ist von Vorteil, ebenso die Bereitschaft zur Arbeit im Freien.",
  },
}

const wirBieten = [
  "Hohe Vielfalt",
  "Modernes Arbeitsumfeld",
  "Maschinenpark auf neuestem Stand",
  "Attraktives Urlaubsmodell",
  "Unbefristetes Arbeitsverhältnis in Vollzeit",
  "Leistungsgerechte Vergütung",
]

type Berufsfeld = {
  gesellschaft: string
  email: string
  jobs: string[]
}

const berufsfelder: Berufsfeld[] = [
  {
    gesellschaft: "PS Kieswerke GmbH",
    email: "Bewerbung-kieswerke@psverbund.de",
    jobs: [
      "LKW-Fahrer",
      "Maschinist (Bagger / Radlader)",
      "Werkstattmitarbeiter",
      "Werkstattmeister",
      "Brecheranlagenführer",
      "Kaufmännischer Angestellter",
    ],
  },
  {
    gesellschaft: "PS Straßen und Tiefbau GmbH",
    email: "Bewerbung-kieswerke@psverbund.de",
    jobs: ["Maschinist (Bagger / Radlader)", "Bauleiter", "Polier", "LKW-Fahrer", "Bauhelfer"],
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
