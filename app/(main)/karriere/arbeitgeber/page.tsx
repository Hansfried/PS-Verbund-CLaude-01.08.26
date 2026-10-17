import ComingSoon from "@/components/shared/ComingSoon"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Die PS Gruppe als Arbeitgeber",
  description: "Was die PS Verbund-Gruppe als Arbeitgeber ausmacht.",
  path: "/karriere/arbeitgeber",
})

export default function ArbeitgeberPage() {
  return <ComingSoon eyebrow="Karriere" title="Die PS Gruppe als Arbeitgeber." />
}
