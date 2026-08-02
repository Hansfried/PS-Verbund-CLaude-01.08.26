"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence } from "framer-motion"
import { Menu } from "lucide-react"
import { mainNavItems, type NavSubItem } from "@/lib/navigation-data"
import MegaMenu from "./MegaMenu"
import MobileMenu from "./MobileMenu"

const logoFontFamily = '"Arial Black", "Helvetica Neue", Arial, sans-serif'

type PathishItem = { href?: string; children?: NavSubItem[] }

function isSectionActive(item: PathishItem, pathname: string): boolean {
  if (item.href && (pathname === item.href || pathname.startsWith(item.href + "/"))) return true
  return item.children?.some((child) => isSectionActive(child, pathname)) ?? false
}

export default function MainNavbar() {
  const pathname = usePathname()
  const isKieswerke = pathname.startsWith("/kieswerke")
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [prevPathname, setPrevPathname] = useState(pathname)

  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    setMobileOpen(false)
    setOpenMenu(null)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpenMenu(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 100)
  }

  const activeItem = mainNavItems.find((item) => item.label === openMenu)

  return (
    <>
      <nav
        className={[
          "fixed top-0 nav:top-14 left-0 right-0 h-16 z-40 bg-white border-b border-black/10 transition-shadow duration-300",
          scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.08)]" : "",
        ].join(" ")}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src={isKieswerke ? "/logo-kieswerke.png" : "/logo.png"}
              alt="PS Verbund"
              height={isKieswerke ? 48 : 34}
              width={isKieswerke ? 66 : 180}
              className="object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden nav:flex items-center gap-1 h-full">
            {mainNavItems.map((item) => {
              const isOpen = openMenu === item.label
              const isActive = isSectionActive(item, pathname)
              return (
                <div
                  key={item.label}
                  className="relative flex items-center h-full"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                >
                  <Link
                    href={item.href ?? "#"}
                    style={{ fontFamily: logoFontFamily }}
                    className={[
                      "flex items-center px-4 py-2 text-xs uppercase tracking-wide transition-all duration-200 rounded-full",
                      isOpen
                        ? "bg-black/[0.06] text-gray-900"
                        : isActive
                          ? "text-gray-900 bg-black/[0.03]"
                          : "text-gray-700 hover:bg-black/5 hover:text-gray-900",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 bottom-1.5 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-b-[5px] border-l-transparent border-r-transparent border-b-[#a8c200]"
                    />
                  )}
                </div>
              )
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="nav:hidden p-2.5 text-gray-700 hover:text-gray-900 transition-colors bg-black/5 hover:bg-black/10 backdrop-blur-md rounded-full border border-black/10"
            onClick={() => setMobileOpen(true)}
            aria-label="Menü öffnen"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Mega Menu – absolute inside fixed nav, spans full viewport width */}
        <AnimatePresence>
          {activeItem?.children && (
            <MegaMenu key={openMenu} items={activeItem.children} teasers={activeItem.teasers} />
          )}
        </AnimatePresence>
      </nav>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
