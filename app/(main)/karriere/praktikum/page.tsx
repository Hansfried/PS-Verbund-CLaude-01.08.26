import ComingSoon from "@/components/shared/ComingSoon"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Praktikum",
  description: "Praktikumsmöglichkeiten bei der PS Verbund-Gruppe.",
  path: "/karriere/praktikum",
})

export default function PraktikumPage() {
  return <ComingSoon eyebrow="Karriere" title="Praktikum." />
}
