import StrassenHero from "@/components/strassen-und-tiefbau/StrassenHero"
import StrassenOverview from "@/components/strassen-und-tiefbau/StrassenOverview"
import StrassenLeistungen from "@/components/strassen-und-tiefbau/StrassenLeistungen"
import StrassenStandort from "@/components/strassen-und-tiefbau/StrassenStandort"
import StrassenKennzahlen from "@/components/strassen-und-tiefbau/StrassenKennzahlen"
import StrassenHaltung from "@/components/strassen-und-tiefbau/StrassenHaltung"
import StrassenKontakt from "@/components/strassen-und-tiefbau/StrassenKontakt"
import JsonLd from "@/components/seo/JsonLd"
import { pageMetadata, businessJsonLd, subsidiaries } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Straßenbau & Tiefbau in Wittenberge und der Prignitz | PS Straßen und Tiefbau",
  description: "PS Straßen und Tiefbau GmbH aus Wittenberge: Straßenbau, Erdbau, Kanal- und Rohrleitungsbau, Deichbau und Windpark-Erschließung in Brandenburg und Norddeutschland.",
  path: "/strassen-und-tiefbau",
  image: "/strassen-baustelle.jpg",
  absoluteTitle: true,
})

export default function StrassenPage() {
  return (
    <main>
      <JsonLd data={businessJsonLd(subsidiaries.strassenUndTiefbau)} />
      <StrassenHero />
      <StrassenOverview />
      <StrassenLeistungen />
      <StrassenStandort />
      <StrassenKennzahlen />
      <StrassenHaltung />
      <StrassenKontakt />
    </main>
  )
}
