"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const tabs = [
  { label: "Alle Projekte", href: "/projekte" },
  { label: "Highlights", href: "/projekte/highlights" },
  { label: "Straßenbau", href: "/projekte/strassenbau" },
  { label: "Erd- und Tiefbau", href: "/projekte/erd-und-tiefbau" },
  { label: "Abriss & Recycling", href: "/projekte/abriss-recycling" },
]

export default function ProjekteTabs() {
  const pathname = usePathname()

  return (
    <div className="flex flex-wrap gap-2 mb-12">
      {tabs.map(({ label, href }) => {
        const isActive = pathname === href
        return (
          <Link
            key={href}
            href={href}
            className={[
              "px-4 py-2 text-xs font-bold uppercase tracking-wide rounded-full transition-colors",
              isActive ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200",
            ].join(" ")}
          >
            {label}
          </Link>
        )
      })}
    </div>
  )
}
