import ComingSoon from "@/components/shared/ComingSoon"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Sponsoring",
  description: "Sponsoring-Engagement der PS Verbund-Gruppe.",
  path: "/news/sponsoring",
})

export default function SponsoringPage() {
  return <ComingSoon eyebrow="Neuigkeiten" title="Sponsoring." />
}
