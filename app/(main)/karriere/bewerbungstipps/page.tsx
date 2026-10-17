import ComingSoon from "@/components/shared/ComingSoon"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Bewerbungstipps",
  description: "Bewerbungstipps für eine Bewerbung bei der PS Verbund-Gruppe.",
  path: "/karriere/bewerbungstipps",
})

export default function BewerbungstippsPage() {
  return <ComingSoon eyebrow="Karriere" title="Bewerbungstipps." />
}
