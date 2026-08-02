import type { Metadata } from "next"
import ComingSoon from "@/components/shared/ComingSoon"

export const metadata: Metadata = {
  title: "PS Momente",
  description: "PS Momente der PS Verbund-Gruppe.",
}

export default function PsMomentePage() {
  return <ComingSoon eyebrow="Neuigkeiten" title="PS Momente." />
}
