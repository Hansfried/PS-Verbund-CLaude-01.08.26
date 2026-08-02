import type { Metadata } from "next"
import ComingSoon from "@/components/shared/ComingSoon"

export const metadata: Metadata = {
  title: "Sponsoring",
  description: "Sponsoring-Engagement der PS Verbund-Gruppe.",
}

export default function SponsoringPage() {
  return <ComingSoon eyebrow="Neuigkeiten" title="Sponsoring." />
}
