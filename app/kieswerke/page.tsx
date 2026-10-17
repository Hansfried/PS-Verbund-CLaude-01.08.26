import KieswerkeHero from "@/components/kieswerke/KieswerkeHero"
import KieswerkeOverview from "@/components/kieswerke/KieswerkeOverview"
import KieswerkeLeistungen from "@/components/kieswerke/KieswerkeLeistungen"
import KieswerkeStandort from "@/components/kieswerke/KieswerkeStandort"
import KieswerkeKennzahlen from "@/components/kieswerke/KieswerkeKennzahlen"
import KieswerkeHaltung from "@/components/kieswerke/KieswerkeHaltung"
import KieswerkeKontakt from "@/components/kieswerke/KieswerkeKontakt"
import JsonLd from "@/components/seo/JsonLd"
import { pageMetadata, businessJsonLd, subsidiaries } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Kies, Sand & Splitt aus der Prignitz | PS Kieswerke Perleberg",
  description: "PS Kieswerke GmbH in Groß Buchholz bei Perleberg: Kies- und Sandtagebau mit eigener Brech-, Wasch- und Mischanlage. Gesteinskörnungen, Frostschutz, Schottertragschicht und RC-Beton – jetzt anfragen.",
  path: "/kieswerke",
  image: "/kieswerke-luftbild-neu.jpg",
  absoluteTitle: true,
})

export default function KieswerkePage() {
  return (
    <main>
      <JsonLd data={businessJsonLd(subsidiaries.kieswerke)} />
      <KieswerkeHero />
      <KieswerkeOverview />
      <KieswerkeLeistungen />
      <KieswerkeStandort />
      <KieswerkeKennzahlen />
      <KieswerkeHaltung />
      <KieswerkeKontakt />
    </main>
  )
}
