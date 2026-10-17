import ComingSoon from "@/components/shared/ComingSoon"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Auszeichnungen",
  description: "Auszeichnungen und Zertifizierungen der PS Verbund-Gruppe.",
  path: "/gruppe/auszeichnungen",
})

export default function AuszeichnungenPage() {
  return <ComingSoon eyebrow="Unsere Gruppe" title="Auszeichnungen." />
}
