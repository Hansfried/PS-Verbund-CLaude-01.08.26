"use client"

import { useId, useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { searchIndex } from "@/lib/navigation-data"

interface SiteSearchProps {
  variant?: "bar" | "panel"
  onNavigate?: () => void
  className?: string
}

export default function SiteSearch({ variant = "bar", onNavigate, className = "" }: SiteSearchProps) {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)
  const listId = useId()

  const trimmed = query.trim().toLowerCase()
  const results = trimmed
    ? searchIndex.filter((item) => item.label.toLowerCase().includes(trimmed)).slice(0, 8)
    : []

  const go = (href: string) => {
    setQuery("")
    setOpen(false)
    onNavigate?.()
    router.push(href)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setQuery("")
      setOpen(false)
    } else if (e.key === "Enter" && results[0]) {
      e.preventDefault()
      go(results[0].href)
    }
  }

  return (
    <div className={["relative", className].join(" ")}>
      <div className="flex items-center gap-2 rounded-full border border-black/[0.06] bg-black/[0.03] px-4 py-1.5 transition-colors duration-300 focus-within:bg-black/[0.05]">
        <Search size={variant === "bar" ? 13 : 14} className="shrink-0 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onFocus={() => trimmed && setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          onKeyDown={handleKeyDown}
          placeholder="Suchen"
          role="combobox"
          aria-expanded={open && results.length > 0}
          aria-controls={listId}
          aria-autocomplete="list"
          className={[
            "w-full bg-transparent text-gray-900 outline-none placeholder:text-gray-400",
            variant === "bar" ? "text-xs" : "text-sm",
          ].join(" ")}
        />
      </div>

      {open && trimmed && (
        <ul
          id={listId}
          role="listbox"
          className="absolute left-0 right-0 top-full z-50 mt-2 max-h-72 overflow-y-auto rounded-2xl border border-black/[0.06] bg-white py-2 shadow-xl"
        >
          {results.length > 0 ? (
            results.map((item) => (
              <li key={item.href}>
                <button
                  type="button"
                  role="option"
                  aria-selected={false}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => go(item.href)}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 transition-colors hover:bg-black/[0.04] hover:text-gray-900"
                >
                  {item.label}
                </button>
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-sm text-gray-400">Keine Treffer für „{query}“</li>
          )}
        </ul>
      )}
    </div>
  )
}
