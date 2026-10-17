import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
}

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center bg-white px-6 py-24">
      <div className="max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#a8c200] mb-3">▲&nbsp;&nbsp;Fehler 404</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          Seite nicht gefunden.
        </h1>
        <p className="text-gray-500 leading-relaxed mb-10">
          Die aufgerufene Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-700 transition-colors">
            Zur Startseite
          </Link>
          <Link href="/kontakt" className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:border-gray-900 transition-colors">
            Kontakt
          </Link>
        </div>
      </div>
    </main>
  )
}
