import type { Metadata } from "next"
import ImpressumContent from "@/components/legal/ImpressumContent"

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der PS Verbund-Gruppe gemäß § 5 DDG.",
}

export default function ImpressumPage() {
  return <ImpressumContent />
}
