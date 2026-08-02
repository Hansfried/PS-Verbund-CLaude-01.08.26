import type { Metadata } from "next"
import ComingSoon from "@/components/shared/ComingSoon"

export const metadata: Metadata = {
  title: "Neuigkeiten",
  description: "Aktuelle Neuigkeiten der PS Verbund-Gruppe.",
}

export default function NewsPage() {
  return <ComingSoon eyebrow="Neuigkeiten" title="Alle News." />
}
