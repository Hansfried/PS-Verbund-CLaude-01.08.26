import ComingSoon from "@/components/shared/ComingSoon"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Nachhaltigkeit",
  description: "Nachhaltigkeit, Sponsoring, Haltung und Werte der PS Verbund-Gruppe.",
  path: "/gruppe/nachhaltigkeit",
})

export default function NachhaltigkeitPage() {
  return <ComingSoon eyebrow="Unsere Gruppe" title="Nachhaltigkeit, Sponsoring, Haltung und Werte." />
}
