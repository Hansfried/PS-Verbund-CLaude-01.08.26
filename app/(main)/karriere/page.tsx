import type { Metadata } from "next"
import ComingSoon from "@/components/shared/ComingSoon"

export const metadata: Metadata = {
  title: "Karriere",
  description: "Karrieremöglichkeiten bei der PS Verbund-Gruppe.",
}

export default function KarrierePage() {
  return <ComingSoon eyebrow="Karriere" title="Karriere im PS Verbund." />
}
