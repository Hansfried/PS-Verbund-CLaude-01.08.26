import type { Metadata } from "next"
import ComingSoon from "@/components/shared/ComingSoon"

export const metadata: Metadata = {
  title: "Geschichte",
  description: "Die Geschichte der PS Verbund-Gruppe.",
}

export default function GeschichtePage() {
  return <ComingSoon eyebrow="Unsere Gruppe" title="Geschichte." />
}
