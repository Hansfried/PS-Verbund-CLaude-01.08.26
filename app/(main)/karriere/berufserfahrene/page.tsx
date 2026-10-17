import ComingSoon from "@/components/shared/ComingSoon"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Für Berufserfahrene",
  description: "Karrieremöglichkeiten für Berufserfahrene bei der PS Verbund-Gruppe.",
  path: "/karriere/berufserfahrene",
})

export default function BerufserfahrenePage() {
  return <ComingSoon eyebrow="Karriere" title="Für Berufserfahrene." />
}
