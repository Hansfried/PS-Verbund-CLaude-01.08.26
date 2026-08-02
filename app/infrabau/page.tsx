import InfrabauHero from "@/components/infrabau/InfrabauHero"
import InfrabauOverview from "@/components/infrabau/InfrabauOverview"
import InfrabauLeistungen from "@/components/infrabau/InfrabauLeistungen"
import InfrabauStandort from "@/components/infrabau/InfrabauStandort"
import InfrabauKennzahlen from "@/components/infrabau/InfrabauKennzahlen"
import InfrabauHaltung from "@/components/infrabau/InfrabauHaltung"
import InfrabauKontakt from "@/components/infrabau/InfrabauKontakt"

export default function InfrabauPage() {
  return (
    <main>
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
