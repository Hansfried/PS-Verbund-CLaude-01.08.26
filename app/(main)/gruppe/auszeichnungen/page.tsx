import type { Metadata } from "next"
import ComingSoon from "@/components/shared/ComingSoon"

export const metadata: Metadata = {
  title: "Auszeichnungen",
  description: "Auszeichnungen und Zertifizierungen der PS Verbund-Gruppe.",
}

export default function AuszeichnungenPage() {
  return <ComingSoon eyebrow="Unsere Gruppe" title="Auszeichnungen." />
}
