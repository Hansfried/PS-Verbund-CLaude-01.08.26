import Hero from "@/components/home/Hero"
import SubsidiariesBento from "@/components/home/SubsidiariesBento"
import ValueChain from "@/components/home/ValueChain"
import Geography from "@/components/home/Geography"
import Stats from "@/components/home/Stats"
import Philosophy from "@/components/home/Philosophy"
import Sustainability from "@/components/home/Sustainability"
import CareerNews from "@/components/home/CareerNews"

export default function Home() {
  return (
    <main>
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
