import ImpressumContent from "@/components/legal/ImpressumContent"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Impressum",
  description: "Impressum der PS Verbund-Gruppe gemäß § 5 DDG.",
  path: "/impressum",
})

export default function ImpressumPage() {
  return <ImpressumContent />
}
