import type { Metadata } from "next"
import DatenschutzContent from "@/components/legal/DatenschutzContent"

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der PS Verbund-Gruppe gemäß DSGVO.",
}

export default function DatenschutzPage() {
  return <DatenschutzContent />
}
