import type { Metadata } from "next"
import ComingSoon from "@/components/shared/ComingSoon"

export const metadata: Metadata = {
  title: "Pressespiegel",
  description: "Pressespiegel der PS Verbund-Gruppe.",
}

export default function PressespiegelPage() {
  return <ComingSoon eyebrow="Neuigkeiten" title="Pressespiegel." />
}
