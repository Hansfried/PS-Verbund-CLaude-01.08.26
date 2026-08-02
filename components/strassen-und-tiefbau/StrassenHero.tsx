"use client"

import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

export default function StrassenHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between -mt-20 pt-20 bg-black">

      {/* Full-bleed background video */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://app.vidzflow.com/v/HnNQzU7ykb?dq=576&ap=true&muted=true&loop=true&ctp=false&bv=false&piv=false&playsinline=false&bc=%234E5FFD&controls=play-large%2Cplay%2Cprogress%2Ccurrent-time%2Cmute%2Cvolume%2Csettings%2Cfullscreen"
          title="GHEI6857"
          frameBorder={0}
          scrolling="no"
          allow="fullscreen"
          className="absolute top-1/2 left-1/2 pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{ width: "100vw", height: "56.25vw", minWidth: "177.78vh", minHeight: "100vh" }}
        />
        {/* Ruhiger Verlauf statt hartem Overlay — nur so viel Kontrast wie für den Text nötig */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/65" />
      </div>

      {/* Main content */}
      <div className="relative flex-1 flex flex-col justify-between w-full px-6 py-10">

        {/* Top bar: brand */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="flex justify-end"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ebc316]">
            ▲&nbsp;&nbsp;PS STRASSEN UND TIEFBAU GMBH
          </p>
        </motion.div>

        {/* Left-aligned headline block */}
        <div className="flex flex-col items-end max-w-2xl ml-auto text-right">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-5xl md:text-7xl font-black leading-none uppercase tracking-tight text-white mb-6"
          >
            STRASSENBAU.
            <br />
            TIEFBAU.
            <br />
            INFRASTRUKTUR.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease }}
            className="text-base md:text-lg text-white mb-4 font-medium"
          >
            Verlässlicher Partner für öffentliche und private Bauvorhaben.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="text-sm text-white/90 max-w-xl leading-relaxed"
          >
            Zum Leistungsspektrum gehören zudem die fachgerechte Erschließung von Windenergieparks einschließlich Zuwegungs-, Kranstellflächen- und Kabeltrassenbau sowie der Deichbau und Deichsanierungsmaßnahmen im Küsten- und Hochwasserschutz. Von der Erschließung über den Erd- und Ingenieurbau bis zur abschließenden Asphaltbefestigung bietet die PS Straßen und Tiefbau GmbH sämtliche Leistungen effizient und zuverlässig aus einer Hand.
          </motion.p>
        </div>

        {/* Triangle pyramid motif — bottom right */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="flex items-end justify-end gap-1"
        >
          <div
            className="w-0 h-0"
            style={{
              borderLeft: "40px solid transparent",
              borderRight: "40px solid transparent",
              borderBottom: "64px solid rgba(255,255,255,0.12)",
              transform: "translateX(20px)",
            }}
          />
          <div
            className="w-0 h-0"
            style={{
              borderLeft: "60px solid transparent",
              borderRight: "60px solid transparent",
              borderBottom: "100px solid #ebc316",
            }}
          />
        </motion.div>

      </div>

    </section>
  )
}
