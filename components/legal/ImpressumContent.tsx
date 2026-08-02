import LegalPlaceholder from "./LegalPlaceholder"

const companies = [
  {
    name: "PS Holding GmbH",
    address: ["Reetzer Chaussee 1", "19348 Perleberg OT Groß Buchholz"] as string[] | null,
    geschaeftsfuehrer: "Geschäftsführende Gesellschafter: Markus Plikat, Hansfried Schmelzer",
    prokurist: null as string | null,
    handelsregister: "HRB 13596 NP, Amtsgericht Neuruppin",
    ustId: "DE345720044",
    telefon: "03876 / 300 830",
    email: "hansfried.schmelzer@psverbund.de" as string | null,
  },
  {
    name: "PS Kieswerke GmbH",
    address: ["Reetzer Chaussee 1", "19348 Perleberg OT Groß Buchholz"],
    geschaeftsfuehrer: "Markus Plikat, Hansfried Schmelzer",
    prokurist: "Thomas Wodinski",
    handelsregister: "HRB 9205 NP, Amtsgericht Neuruppin",
    ustId: "DE 275 953 346",
    telefon: "03876 / 300 830",
    email: "info-kieswerke@psverbund.de",
  },
  {
    name: "PS Bauschutt GmbH",
    address: ["Reetzer Chaussee 1", "19348 Perleberg OT Groß Buchholz"],
    geschaeftsfuehrer: "Markus Plikat",
    prokurist: "Britta Holzhauer",
    handelsregister: "HRB 11059 NP, Amtsgericht Neuruppin",
    ustId: "DE299584843",
    telefon: "+49 175 5443554",
    email: "markus.plikat@psverbund.de",
  },
  {
    name: "PS Infrabau GmbH",
    address: ["Reetzer Chaussee 1", "19348 Perleberg OT Groß Buchholz"],
    geschaeftsfuehrer: "Hansfried Schmelzer",
    prokurist: "Britta Holzhauer",
    handelsregister: "HRB 15531 NP, Amtsgericht Neuruppin",
    ustId: "DE460865798",
    telefon: "03876 / 300 830",
    email: "hansfried.schmelzer@psverbund.de",
  },
  {
    name: "PS Straßen und Tiefbau GmbH",
    address: ["Lenzenerstraße 39", "19322 Wittenberge"],
    geschaeftsfuehrer: "Thomas Wodinski",
    prokurist: "Hansfried Schmelzer, Markus Plikat",
    handelsregister: "HRB 8260 NP, Amtsgericht Neuruppin",
    ustId: "DE260285342",
    telefon: "03876 / 300 830",
    email: "info-strassenundtiefbau@psverbund.de",
  },
]

export default function ImpressumContent() {
  return (
    <div className="w-full bg-white">
    <div className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#a8c200] mb-3">▲&nbsp;&nbsp;Rechtliches</p>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Impressum</h1>
      <p className="text-gray-500 leading-relaxed mb-4">
        Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz). Dieses Impressum gilt für den gesamten Web-Auftritt der
        PS Verbund-Gruppe: psverbund.de, ps-kieswerke.de, ps-bauschutt.de, ps-infrabau.de und ps-strassentiefbau.de.
      </p>
      <p className="text-gray-500 leading-relaxed mb-12">
        &bdquo;PS Verbund&ldquo; ist dabei lediglich der Name, unter dem die nachfolgend aufgeführten Gesellschaften
        gemeinsam auftreten — keine eigenständige Gesellschaft. Dach der Gruppe ist die PS Holding GmbH.
      </p>

      <div className="space-y-12">
        {companies.map((c) => (
          <div key={c.name} className="border-t border-gray-200 pt-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">{c.name}</h2>
            <address className="not-italic text-gray-600 leading-relaxed mb-4">
              {c.address ? (
                c.address.map((line) => <p key={line}>{line}</p>)
              ) : (
                <LegalPlaceholder>wird ergänzt</LegalPlaceholder>
              )}
            </address>
            <dl className="text-sm text-gray-600 leading-relaxed space-y-1">
              <div>
                <dt className="inline font-semibold text-gray-900">Geschäftsführer: </dt>
                <dd className="inline">{c.geschaeftsfuehrer}</dd>
              </div>
              {c.prokurist && (
                <div>
                  <dt className="inline font-semibold text-gray-900">Prokurist: </dt>
                  <dd className="inline">{c.prokurist}</dd>
                </div>
              )}
              <div>
                <dt className="inline font-semibold text-gray-900">Handelsregister: </dt>
                <dd className="inline">{c.handelsregister}</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-gray-900">USt-IdNr. (§ 27a UStG): </dt>
                <dd className="inline">{c.ustId}</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-gray-900">Telefon: </dt>
                <dd className="inline">{c.telefon}</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-gray-900">E-Mail: </dt>
                <dd className="inline">
                  {c.email ? (
                    <a href={`mailto:${c.email}`} className="hover:text-[#a8c200] transition-colors">
                      {c.email}
                    </a>
                  ) : (
                    <LegalPlaceholder>wird ergänzt</LegalPlaceholder>
                  )}
                </dd>
              </div>
            </dl>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-8 mt-12">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Hansfried Schmelzer
          <br />
          PS Holding GmbH
          <br />
          Reetzer Chaussee 1
          <br />
          19348 Perleberg OT Groß Buchholz
        </p>
      </div>

      <div className="border-t border-gray-200 pt-8 mt-12">
        <h2 className="text-lg font-bold text-gray-900 mb-3">EU-Streitschlichtung</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#a8c200] transition-colors"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . Unsere E-Mail-Adresse finden Sie oben in diesem Impressum. Wir sind nicht verpflichtet und nicht bereit,
          an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    </div>
    </div>
  )
}
