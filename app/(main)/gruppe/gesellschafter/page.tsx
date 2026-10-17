import ComingSoon from "@/components/shared/ComingSoon"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Gesellschafter",
  description: "Die Gesellschafter der PS Verbund-Gruppe.",
  path: "/gruppe/gesellschafter",
})

export default function GesellschafterPage() {
  return <ComingSoon eyebrow="Unsere Gruppe" title="Gesellschafter." />
}
