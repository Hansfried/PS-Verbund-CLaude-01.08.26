import ComingSoon from "@/components/shared/ComingSoon"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Pressespiegel",
  description: "Pressespiegel der PS Verbund-Gruppe.",
  path: "/news/pressespiegel",
})

export default function PressespiegelPage() {
  return <ComingSoon eyebrow="Neuigkeiten" title="Pressespiegel." />
}
