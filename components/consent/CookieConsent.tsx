"use client"

import { useEffect, useState, useSyncExternalStore } from "react"
import Link from "next/link"
import Script from "next/script"

const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const STORAGE_KEY = "ps-consent"
const CHANGE_EVENT = "ps:consent-change"
export const OPEN_CONSENT_EVENT = "ps:open-consent"

type Consent = "granted" | "denied"

// Fallback, falls localStorage gesperrt ist (z. B. privater Modus): Entscheidung gilt dann nur für diesen Seitenaufruf.
let memoryConsent: Consent | null = null

function readConsent(): Consent | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === "granted" || value === "denied" ? value : memoryConsent
  } catch {
    return memoryConsent
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange)
  window.addEventListener("storage", onChange)
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange)
    window.removeEventListener("storage", onChange)
  }
}

// GA wird erst nach ausdrücklicher Einwilligung geladen (Basic Consent Mode) —
// vorher gehen keinerlei Daten an Google (§ 25 TDDDG, Art. 6 Abs. 1 lit. a DSGVO).
export default function CookieConsent() {
  // "unknown" auf dem Server, damit der Banner nicht vor dem Auslesen aufblitzt.
  const consent = useSyncExternalStore<Consent | null | "unknown">(subscribe, readConsent, () => "unknown")
  const [reopened, setReopened] = useState(false)
  const open = consent === null || reopened

  useEffect(() => {
    const reopen = () => setReopened(true)
    window.addEventListener(OPEN_CONSENT_EVENT, reopen)
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen)
  }, [])

  function decide(value: Consent) {
    memoryConsent = value
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {}
    // Widerruf: GA-Cookies entfernen und neu laden, damit das Skript nicht weiterläuft.
    if (consent === "granted" && value === "denied") {
      document.cookie.split(";").forEach((c) => {
        const name = c.split("=")[0].trim()
        if (name.startsWith("_ga")) {
          document.cookie = `${name}=; Max-Age=0; path=/; domain=.${location.hostname.replace(/^www\./, "")}`
          document.cookie = `${name}=; Max-Age=0; path=/`
        }
      })
      location.reload()
      return
    }
    window.dispatchEvent(new Event(CHANGE_EVENT))
    setReopened(false)
  }

  if (!GA_ID) return null

  return (
    <>
      {consent === "granted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'granted' });
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
          </Script>
        </>
      )}

      {open && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie-Einstellungen"
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-xl rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#a8c200] mb-2">▲&nbsp;&nbsp;Datenschutz</p>
          <p className="text-sm text-gray-600 leading-relaxed mb-5">
            Wir möchten mit Google Analytics anonym auswerten, wie unsere Website genutzt wird, um sie zu
            verbessern. Dafür benötigen wir Ihre Einwilligung, die Sie jederzeit über „Cookie-Einstellungen“
            im Seitenfuß widerrufen können. Mehr dazu in der{" "}
            <Link href="/datenschutz" className="underline hover:text-gray-900">
              Datenschutzerklärung
            </Link>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => decide("denied")}
              className="flex-1 rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 hover:border-gray-900 transition-colors"
            >
              Ablehnen
            </button>
            <button
              type="button"
              onClick={() => decide("granted")}
              className="flex-1 rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-700 transition-colors"
            >
              Akzeptieren
            </button>
          </div>
        </div>
      )}
    </>
  )
}
