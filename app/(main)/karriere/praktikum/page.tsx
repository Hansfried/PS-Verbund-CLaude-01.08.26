import type { Metadata } from "next"
import ComingSoon from "@/components/shared/ComingSoon"

export const metadata: Metadata = {
  title: "Praktikum",
  description: "Praktikumsmöglichkeiten bei der PS Verbund-Gruppe.",
}

export default function PraktikumPage() {
  return <ComingSoon eyebrow="Karriere" title="Praktikum." />
}
