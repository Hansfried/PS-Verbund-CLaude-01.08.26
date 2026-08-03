"use client"

import Link from "next/link"
import Script from "next/script"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const ease = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[640px] overflow-hidden -mt-16 pt-16 nav:-mt-[120px] nav:pt-[120px] bg-black">
      {/* Vollflächiges Hintergrundvideo */}
      <div data-video-id="62140" className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          src="https://app.vidzflow.com/v/MeLN4YeV6M?dq=original&ap=true&muted=true&loop=true&ctp=false&bv=false&piv=true&playsinline=false&bc=%23ffffff&controls=fullscreen"
          title="PS Kieswerke - Image Film [cuttet neu]"
          frameBorder={0}
          scrolling="no"
          allow="fullscreen"
          className="absolute top-1/2 left-1/2 pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{ width: "102vw", height: "42.71vw", minWidth: "243.58dvh", minHeight: "102dvh" }}
        />
        {/* Ruhiger Verlauf statt hartem Overlay — nur so viel Kontrast wie für den Text nötig */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
      </div>
      <Script id="hero-video-autoplay" strategy="afterInteractive">
        {`window.addEventListener("message", function(e) {if (!e.origin.includes("vidzflow")) {return;}if (e.data.eventType === "videoReady") {new IntersectionObserver((entries, observer) => {entries.forEach(entry => {if (entry.isIntersecting && entry.target.getAttribute("data-video-id") === String(e.data.videoId)) {let iframe = entry.target.querySelector("iframe");if (iframe) {iframe.contentWindow.postMessage("playerPlay", "*");observer.unobserve(entry.target);}}});}).observe(document.querySelector("div[data-video-id=\\"" + e.data.videoId + "\\"]"));}});`}
      </Script>

      {/* Inhalt — ein Gedanke, klar gesetzt, viel Luft */}
      <div className="relative z-10 flex h-full w-full flex-col justify-end">
        <div className="mx-auto w-full max-w-[1400px] px-6 pb-[114px] sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease }}
            className="max-w-2xl"
          >
            <div className="mb-6 flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#9fca26]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/60">
                PS Verbund
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Kompetenz,
              <br />
              die verbindet.
            </h1>

            <p className="mt-6 max-w-md text-base font-light leading-relaxed text-white/70 sm:text-lg">
              Partnerschaftlich zum Erfolg für Brandenburg, Schleswig-Holstein, Mecklenburg-Vorpommern.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/gesellschaften"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 py-3.5 pl-6 pr-5 text-sm font-medium text-white backdrop-blur-xl transition-all duration-500 ease-out hover:border-white hover:bg-white hover:text-gray-900 active:scale-[0.97]"
              >
                Gesellschaften entdecken
                <ArrowRight
                  size={15}
                  className="transition-transform duration-500 ease-out group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/karriere/stellenangebote"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors duration-300 hover:text-white"
              >
                Karriere
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dezenter Scroll-Hinweis */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3, ease }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/45">Nach unten wischen</span>
        <motion.span
          animate={{ y: [0, 6, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-white/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
