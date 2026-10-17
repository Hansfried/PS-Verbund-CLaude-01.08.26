import ComingSoon from "@/components/shared/ComingSoon"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "PS Momente",
  description: "PS Momente der PS Verbund-Gruppe.",
  path: "/news/ps-momente",
})

export default function PsMomentePage() {
  return <ComingSoon eyebrow="Neuigkeiten" title="PS Momente." />
}
