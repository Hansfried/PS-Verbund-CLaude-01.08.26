import ComingSoon from "@/components/shared/ComingSoon"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Neuigkeiten",
  description: "Aktuelle Neuigkeiten der PS Verbund-Gruppe.",
  path: "/news",
})

export default function NewsPage() {
  return <ComingSoon eyebrow="Neuigkeiten" title="Alle News." />
}
