"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

export default function BauschuttHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between -mt-20 pt-20">

      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <Image
          src="/bauschutt-luftbild.jpg"
          alt="Luftbild Deponie Luggendorf"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/70" />
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
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a0c6e3]">
            ▲&nbsp;&nbsp;PS BAUSCHUTT GMBH
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
            GENEHMIGT.
            <br />
            SOFORT
            <br />
            VOLLZIEHBAR.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease }}
            className="text-base md:text-lg text-white mb-4 font-medium"
          >
            Aus stillgelegter Kiesgrube wird Infrastruktur: die Deponie Luggendorf.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="text-sm text-white/90 max-w-xl leading-relaxed"
          >
            Die PS Bauschutt GmbH entwickelt am Standort Groß Pankow / Landkreis Prignitz eine Mineralstoffdeponie der Klasse DK I, errichtet im Restloch des ausgebeuteten Kiessandtagebaus Luggendorf, ohne nennenswerte Veränderung des äußeren Landschaftsbildes.
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
              borderBottom: "100px solid #a0c6e3",
            }}
          />
        </motion.div>

      </div>

    </section>
  )
}
