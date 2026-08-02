import StrassenHero from "@/components/strassen-und-tiefbau/StrassenHero"
import StrassenOverview from "@/components/strassen-und-tiefbau/StrassenOverview"
import StrassenLeistungen from "@/components/strassen-und-tiefbau/StrassenLeistungen"
import StrassenStandort from "@/components/strassen-und-tiefbau/StrassenStandort"
import StrassenKennzahlen from "@/components/strassen-und-tiefbau/StrassenKennzahlen"
import StrassenHaltung from "@/components/strassen-und-tiefbau/StrassenHaltung"
import StrassenKontakt from "@/components/strassen-und-tiefbau/StrassenKontakt"

export default function StrassenPage() {
  return (
    <main>
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
