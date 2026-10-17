import DatenschutzContent from "@/components/legal/DatenschutzContent"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der PS Verbund-Gruppe gemäß DSGVO.",
  path: "/bauschutt/datenschutz",
})

export default function DatenschutzPage() {
  return <DatenschutzContent />
}
