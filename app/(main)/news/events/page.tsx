import type { Metadata } from "next"
import ComingSoon from "@/components/shared/ComingSoon"

export const metadata: Metadata = {
  title: "Events",
  description: "Events der PS Verbund-Gruppe.",
}

export default function EventsPage() {
  return <ComingSoon eyebrow="Neuigkeiten" title="Events." />
}
