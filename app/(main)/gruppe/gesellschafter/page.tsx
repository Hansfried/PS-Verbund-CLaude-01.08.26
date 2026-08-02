import type { Metadata } from "next"
import ComingSoon from "@/components/shared/ComingSoon"

export const metadata: Metadata = {
  title: "Gesellschafter",
  description: "Die Gesellschafter der PS Verbund-Gruppe.",
}

export default function GesellschafterPage() {
  return <ComingSoon eyebrow="Unsere Gruppe" title="Gesellschafter." />
}
