"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { brands } from "@/lib/navigation-data"
import SiteSearch from "./SiteSearch"

export default function TopBrandSwitcher() {
  const pathname = usePathname()

  return (
    <div className="hidden nav:block fixed top-0 left-0 right-0 z-50 h-14 border-b border-black/10 bg-white">
      <div className="relative flex h-full w-full items-center gap-6 px-6">
        <div className="flex h-full shrink-0 items-center gap-8 md:gap-12">
          {brands.map((brand) => {
            const isActive = pathname.startsWith(brand.href)
            return (
              <Link key={brand.href} href={brand.href} className="group relative flex h-full items-center">
                <Image
                  src={brand.logo}
                  alt={brand.label}
                  height={40}
                  width={58}
                  className={[
                    "h-8 w-auto object-contain transition-all duration-300 ease-out sm:h-9",
                    isActive ? "opacity-100 grayscale-0" : "opacity-40 grayscale group-hover:opacity-90 group-hover:grayscale-0",
                  ].join(" ")}
                />
                <span
                  className={[
                    "pointer-events-none absolute -bottom-px left-1/2 h-px -translate-x-1/2 bg-gray-900 transition-all duration-300 ease-out",
                    isActive ? "w-full" : "w-0 group-hover:w-full",
                  ].join(" ")}
                />
              </Link>
            )
          })}
        </div>

        <div className="hidden min-w-0 flex-1 justify-center sm:flex xl:absolute xl:left-1/2 xl:top-1/2 xl:w-96 xl:flex-none xl:-translate-x-1/2 xl:-translate-y-1/2">
          <SiteSearch variant="bar" className="w-full max-w-96" />
        </div>
      </div>
    </div>
  )
}
