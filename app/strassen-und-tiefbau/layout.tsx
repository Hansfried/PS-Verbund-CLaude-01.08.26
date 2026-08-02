import type { Metadata } from "next"
import StrassenNavbar from "@/components/strassen-und-tiefbau/StrassenNavbar"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  title: {
    absolute: "PS Straßen und Tiefbau GmbH",
    template: "%s | PS Straßen und Tiefbau",
  },
  description: "PS Straßen und Tiefbau GmbH – Straßenbau und Tiefbauleistungen in der Region.",
}

export default function StrassenLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex-1 flex flex-col pt-20">
      <StrassenNavbar />
      <div className="flex-1 flex flex-col">{children}</div>
      <Footer basePath="/strassen-und-tiefbau" />
    </div>
  )
}
