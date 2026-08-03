"use client"

import { motion } from "framer-motion"
import ImagePlaceholder from "../kieswerke/ImagePlaceholder"

const ease = [0.22, 1, 0.36, 1] as const

export default function InfrabauHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between -mt-20 pt-20 bg-[#1a1a1a]">

      {/* Full-bleed background — no site photography yet */}
      <div className="absolute inset-0">
        <ImagePlaceholder label="Baustelle Seitenentnahme Stavenow" dark className="h-full w-full border-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
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
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f97316]">
            ▲&nbsp;&nbsp;PS INFRABAU GMBH
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
            3,08 MIO. T.
            <br />
            DIREKT AN
            <br />
            DER A14.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease }}
            className="text-base md:text-lg text-white mb-4 font-medium"
          >
            Rohstoff. Logistik. Verantwortung.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="text-sm text-white/90 max-w-xl leading-relaxed"
          >
            Die PS Infrabau GmbH gewinnt am Standort Karstädt OT Stavenow rund 3,08 Mio. Tonnen Kiessand als Seitenentnahme direkt für den Bau der Bundesautobahn A14, mit kurzen Transportwegen, geschlossenem Wasserkreislauf und minimaler Umweltbelastung.
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
              borderBottom: "100px solid #f97316",
            }}
          />
        </motion.div>

      </div>

    </section>
  )
}
