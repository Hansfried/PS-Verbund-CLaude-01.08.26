import type { Metadata } from "next"
import ComingSoon from "@/components/shared/ComingSoon"

export const metadata: Metadata = {
  title: "Bewerbungstipps",
  description: "Bewerbungstipps für eine Bewerbung bei der PS Verbund-Gruppe.",
}

export default function BewerbungstippsPage() {
  return <ComingSoon eyebrow="Karriere" title="Bewerbungstipps." />
}
