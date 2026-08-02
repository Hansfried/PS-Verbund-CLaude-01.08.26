import BauschuttHero from "@/components/bauschutt/BauschuttHero"
import BauschuttOverview from "@/components/bauschutt/BauschuttOverview"
import BauschuttLeistungen from "@/components/bauschutt/BauschuttLeistungen"
import BauschuttStandort from "@/components/bauschutt/BauschuttStandort"
import BauschuttKennzahlen from "@/components/bauschutt/BauschuttKennzahlen"
import BauschuttHaltung from "@/components/bauschutt/BauschuttHaltung"
import BauschuttKontakt from "@/components/bauschutt/BauschuttKontakt"

export default function BauschuttPage() {
  return (
    <main>
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
