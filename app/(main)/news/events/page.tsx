import ComingSoon from "@/components/shared/ComingSoon"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Events",
  description: "Events der PS Verbund-Gruppe.",
  path: "/news/events",
})

export default function EventsPage() {
  return <ComingSoon eyebrow="Neuigkeiten" title="Events." />
}
