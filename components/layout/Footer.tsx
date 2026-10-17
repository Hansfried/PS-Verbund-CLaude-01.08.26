import Link from "next/link"
import CookieSettingsButton from "@/components/consent/CookieSettingsButton"

const companies = [
  {
    name: "PS Kieswerke GmbH",
    href: "/kieswerke",
    lines: ["Reetzer Chaussee 1", "19348 Perleberg OT Groß Buchholz"],
  },
  {
    name: "PS Bauschutt GmbH",
    href: "/bauschutt",
    lines: ["Reetzer Chaussee 1", "19348 Perleberg OT Groß Buchholz"],
  },
  {
    name: "PS Infrabau GmbH",
    href: "/infrabau",
    lines: ["Reetzer Chaussee 1", "19348 Perleberg OT Groß Buchholz"],
  },
  {
    name: "PS Straßen und Tiefbau GmbH",
    href: "/strassen-und-tiefbau",
    lines: ["Lenzenerstraße 39", "19322 Wittenberge"],
  },
]

export default function Footer({ basePath = "" }: { basePath?: string }) {
  return (
    <footer className="bg-[#111111] border-t border-white/10 py-16">
      <div className="w-full px-6">
        <div className="border-b border-white/10 pb-10 mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Anfragen und weiteres</p>
          <a
            href="mailto:info-kieswerke@psverbund.de"
            className="text-xl md:text-2xl font-bold text-white hover:text-[#a8c200] transition-colors"
          >
            info-kieswerke@psverbund.de
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {companies.map(({ name, href, lines }) => (
            <div key={name}>
              <Link href={href} className="text-sm font-bold text-white hover:text-[#a8c200] transition-colors">
                {name}
              </Link>
              <address className="not-italic text-xs text-gray-500 leading-relaxed mt-2">
                {lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} PS Verbund · Alle Rechte vorbehalten
          </p>
          <div className="flex items-center gap-6">
            <Link href={`${basePath}/impressum`} className="text-xs text-gray-500 hover:text-white transition-colors">
              Impressum
            </Link>
            <Link href={`${basePath}/datenschutz`} className="text-xs text-gray-500 hover:text-white transition-colors">
              Datenschutz
            </Link>
            <CookieSettingsButton className="text-xs text-gray-500 hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  )
}
