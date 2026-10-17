import Hero from "@/components/home/Hero"
import SubsidiariesBento from "@/components/home/SubsidiariesBento"
import ValueChain from "@/components/home/ValueChain"
import Geography from "@/components/home/Geography"
import Stats from "@/components/home/Stats"
import Philosophy from "@/components/home/Philosophy"
import Sustainability from "@/components/home/Sustainability"
import CareerNews from "@/components/home/CareerNews"
import JsonLd from "@/components/seo/JsonLd"
import { pageMetadata, organizationJsonLd } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "PS Verbund – Kieswerk, Recycling, Straßen- & Tiefbau in der Prignitz",
  description: "Die PS Verbund-Gruppe aus Perleberg: Kies, Sand und Splitt, Baustoff-Recycling, Straßen- und Tiefbau sowie Kabel- und Rohrleitungsbau – alles aus einer Hand für Brandenburg und Norddeutschland.",
  path: "/",
  absoluteTitle: true,
})

export default function Home() {
  return (
    <main>
      <JsonLd data={organizationJsonLd} />
      <Hero />
      <SubsidiariesBento />
      <ValueChain />
      <Geography />
      <Stats />
      <Philosophy />
      <Sustainability />
      <CareerNews />
    </main>
  )
}
