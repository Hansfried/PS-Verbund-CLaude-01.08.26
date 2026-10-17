import ComingSoon from "@/components/shared/ComingSoon"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Karriere",
  description: "Karrieremöglichkeiten bei der PS Verbund-Gruppe.",
  path: "/karriere",
})

export default function KarrierePage() {
  return <ComingSoon eyebrow="Karriere" title="Karriere im PS Verbund." />
}
