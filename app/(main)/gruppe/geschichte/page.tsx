import ComingSoon from "@/components/shared/ComingSoon"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Geschichte",
  description: "Die Geschichte der PS Verbund-Gruppe.",
  path: "/gruppe/geschichte",
})

export default function GeschichtePage() {
  return <ComingSoon eyebrow="Unsere Gruppe" title="Geschichte." />
}
