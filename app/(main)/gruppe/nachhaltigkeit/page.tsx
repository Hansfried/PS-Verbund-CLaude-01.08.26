import type { Metadata } from "next"
import ComingSoon from "@/components/shared/ComingSoon"

export const metadata: Metadata = {
  title: "Nachhaltigkeit",
  description: "Nachhaltigkeit, Sponsoring, Haltung und Werte der PS Verbund-Gruppe.",
}

export default function NachhaltigkeitPage() {
  return <ComingSoon eyebrow="Unsere Gruppe" title="Nachhaltigkeit, Sponsoring, Haltung und Werte." />
}
