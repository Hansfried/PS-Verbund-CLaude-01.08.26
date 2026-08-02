import type { Metadata } from "next"
import ComingSoon from "@/components/shared/ComingSoon"

export const metadata: Metadata = {
  title: "Für Berufserfahrene",
  description: "Karrieremöglichkeiten für Berufserfahrene bei der PS Verbund-Gruppe.",
}

export default function BerufserfahrenePage() {
  return <ComingSoon eyebrow="Karriere" title="Für Berufserfahrene." />
}
