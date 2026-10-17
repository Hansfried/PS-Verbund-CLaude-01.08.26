import ComingSoon from "@/components/shared/ComingSoon"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Unsere Gruppe",
  description: "Die PS Gruppe: Geschichte, Gesellschafter, Nachhaltigkeit und Auszeichnungen.",
  path: "/gruppe",
})

export default function GruppePage() {
  return <ComingSoon eyebrow="Unsere Gruppe" title="Die PS Gruppe." />
}
