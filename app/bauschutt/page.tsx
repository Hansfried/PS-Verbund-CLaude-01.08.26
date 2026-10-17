import BauschuttHero from "@/components/bauschutt/BauschuttHero"
import BauschuttOverview from "@/components/bauschutt/BauschuttOverview"
import BauschuttLeistungen from "@/components/bauschutt/BauschuttLeistungen"
import BauschuttStandort from "@/components/bauschutt/BauschuttStandort"
import BauschuttKennzahlen from "@/components/bauschutt/BauschuttKennzahlen"
import BauschuttHaltung from "@/components/bauschutt/BauschuttHaltung"
import BauschuttKontakt from "@/components/bauschutt/BauschuttKontakt"
import JsonLd from "@/components/seo/JsonLd"
import { pageMetadata, businessJsonLd, subsidiaries } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Bauschutt-Recycling & Entsorgung in der Prignitz | PS Bauschutt",
  description: "PS Bauschutt GmbH in Perleberg: Annahme, Aufbereitung und Recycling von Bauschutt und Betonbruch in der Prignitz.",
  path: "/bauschutt",
  image: "/bauschutt-luftbild.jpg",
  absoluteTitle: true,
})

export default function BauschuttPage() {
  return (
    <main>
      <JsonLd data={businessJsonLd(subsidiaries.bauschutt)} />
      <BauschuttHero />
      <BauschuttOverview />
      <BauschuttLeistungen />
      <BauschuttStandort />
      <BauschuttKennzahlen />
      <BauschuttHaltung />
      <BauschuttKontakt />
    </main>
  )
}
