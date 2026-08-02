import type { Metadata } from "next"
import ComingSoon from "@/components/shared/ComingSoon"

export const metadata: Metadata = {
  title: "Die PS Gruppe als Arbeitgeber",
  description: "Was die PS Verbund-Gruppe als Arbeitgeber ausmacht.",
}

export default function ArbeitgeberPage() {
  return <ComingSoon eyebrow="Karriere" title="Die PS Gruppe als Arbeitgeber." />
}
