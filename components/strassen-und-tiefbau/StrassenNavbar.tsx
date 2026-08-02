"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"

const navItems = [
  { label: "Überblick", href: "#ueberblick" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Einsatzgebiet", href: "#standort" },
  { label: "Zahlen", href: "#zahlen" },
  { label: "Unternehmen", href: "#profil" },
  { label: "Kontakt", href: "#kontakt" },
]

export default function StrassenNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <nav
        className={[
          "fixed top-0 left-0 right-0 z-40 h-20 bg-white border-b border-gray-200 transition-shadow duration-300",
          scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.08)]" : "",
        ].join(" ")}
      >
        <div className="w-full h-full px-6 flex items-center justify-between">
          <Link href="/strassen-und-tiefbau" className="flex items-center flex-shrink-0">
            <Image
              src="/logo-strassen.png"
              alt="PS Straßen und Tiefbau GmbH"
              height={48}
              width={66}
              className="object-contain h-11 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wide text-gray-700 hover:text-gray-900 hover:bg-black/[0.04] rounded-full transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden sm:inline-flex items-center gap-1.5 pl-4 border-l border-gray-200 text-xs font-bold uppercase tracking-wide text-gray-500 hover:text-[#ebc316] transition-colors duration-200"
            >
              Zur PS Verbund Gruppe
              <ArrowUpRight size={14} />
            </Link>

            <button
              className="lg:hidden p-2.5 text-gray-700 hover:text-gray-900 transition-colors bg-black/5 hover:bg-black/10 rounded-full border border-black/10"
              onClick={() => setMobileOpen(true)}
              aria-label="Menü öffnen"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-[55]"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-[60] flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <Image
                  src="/logo-strassen.png"
                  alt="PS Straßen und Tiefbau GmbH"
                  height={40}
                  width={55}
                  className="object-contain h-9 w-auto"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 text-gray-400 hover:text-gray-900 transition-colors rounded"
                  aria-label="Menü schließen"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 py-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-gray-900 hover:bg-gray-50 transition-colors border-b border-gray-50"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-5 py-4 text-xs font-bold uppercase tracking-wide text-white bg-[#1a1a1a]"
              >
                Zur PS Verbund Gruppe
                <ArrowUpRight size={14} className="text-[#ebc316]" />
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
