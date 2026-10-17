import InfrabauHero from "@/components/infrabau/InfrabauHero"
import InfrabauOverview from "@/components/infrabau/InfrabauOverview"
import InfrabauLeistungen from "@/components/infrabau/InfrabauLeistungen"
import InfrabauStandort from "@/components/infrabau/InfrabauStandort"
import InfrabauKennzahlen from "@/components/infrabau/InfrabauKennzahlen"
import InfrabauHaltung from "@/components/infrabau/InfrabauHaltung"
import InfrabauKontakt from "@/components/infrabau/InfrabauKontakt"
import JsonLd from "@/components/seo/JsonLd"
import { pageMetadata, businessJsonLd, subsidiaries } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Kabel- & Rohrleitungsbau in der Prignitz | PS Infrabau",
  description: "PS Infrabau GmbH in Perleberg: Kabel- und Rohrleitungsbau sowie Tiefbauleistungen für Energie- und Versorgungsinfrastruktur.",
  path: "/infrabau",
  absoluteTitle: true,
})

export default function InfrabauPage() {
  return (
    <main>
      <JsonLd data={businessJsonLd(subsidiaries.infrabau)} />
      <InfrabauHero />
      <InfrabauOverview />
      <InfrabauLeistungen />
      <InfrabauStandort />
      <InfrabauKennzahlen />
      <InfrabauHaltung />
      <InfrabauKontakt />
    </main>
  )
}
