import type { Metadata } from "next"
import ComingSoon from "@/components/shared/ComingSoon"

export const metadata: Metadata = {
  title: "Unsere Gruppe",
  description: "Die PS Gruppe: Geschichte, Gesellschafter, Nachhaltigkeit und Auszeichnungen.",
}

export default function GruppePage() {
  return <ComingSoon eyebrow="Unsere Gruppe" title="Die PS Gruppe." />
}
