"use client"

import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

const highlights = [
  { value: "2025", label: "Rahmenbetriebsplan erweitert auf weitere Jahrzehnte" },
  { value: "Mio. Tonnen", label: "Gesicherte Vorräte" },
  { value: "~40", label: "Mitarbeiter" },
]

const tags = [
  "Groß Buchholz / Golmer Berg",
  "7 - 12 Mio. Tonnen Jahresertrag",
  "Rohstoff · Recycling · Transport",
]

const marktStats = [
  {
    value: "10 J.",
    label: "Typische Neu-Genehmigungsdauer",
    description: "Strukturelle Knappheit bestehender Lagerstätten.",
  },
  {
    value: "4",
    label: "Wirtschaftsräume im Lieferradius",
    description: "Hamburg, Hannover-Wolfsburg-Salzgitter, Magdeburg, A14-Korridor.",
  },
  {
    value: "+33 J.",
    label: "Unser Genehmigungshorizont",
    description: "Sonderstellung in einer unterversorgten Region Norddeutschlands.",
  },
]

const nachfragetreiber = ["A14-Ausbau", "A39-Ausbau", "Windkraftanlagenbau"]

export default function KieswerkeOverview() {
  return (
    <section id="ueberblick" className="scroll-mt-20 bg-[#1a1a1a] py-24 border-t border-[#333]">
      <div className="w-full px-6">

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8c200] mb-6">
            ▲&nbsp;&nbsp;IM ÜBERBLICK
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase text-white">
            WIR SICHERN
            <br />
            DIE BASIS –
            <br />
            GENERATIONENÜBERGREIFEND.
          </h2>
        </motion.div>

        {/* 3 highlight blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#2a2a2a] mb-12">
          {highlights.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="bg-[#1a1a1a] px-8 py-8"
            >
              <p className="text-4xl md:text-5xl font-black text-[#a8c200] leading-none mb-2">
                {value}
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
                {label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Body text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="max-w-2xl space-y-4 text-gray-400 leading-relaxed mb-12"
        >
          <p>
            Die PS Kieswerke GmbH betreibt am Standort Groß Buchholz / Golmer Berg einen Kies- und Sandtagebau mit nachhaltiger Marktposition.
          </p>
          <p>
            Drei Hebel prägen unsere Marktposition: erstens die Verfügung über Mio. Tonnen gesicherte Sand- und Kiesvorräte, zweitens der Ausbau der Wertschöpfung über zertifizierte Mischanlage und Recycling, drittens die Hebung von Synergien entlang der gesamten Wertschöpfungskette.
          </p>
          <p>
            Rahmenbetriebsplan über Generationen hinweg genehmigt, Wasserrecht gesichert.
          </p>
        </motion.div>

        {/* Markt: vier starke Wirtschaftsräume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8c200] mb-6">
            ▲&nbsp;&nbsp;MARKT
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
            {marktStats.map(({ value, label, description }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
              >
                <p className="text-4xl md:text-5xl font-black text-[#a8c200] leading-none mb-3">{value}</p>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-1">{label}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-3">
            Nachfragetreiber
          </p>
          <div className="flex flex-wrap gap-2">
            {nachfragetreiber.map((n) => (
              <span
                key={n}
                className="text-[10px] font-bold uppercase tracking-wider text-gray-400 border border-[#2a2a2a] px-3 py-1.5"
              >
                {n}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tags marquee */}
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0) }
            to   { transform: translateX(-50%) }
          }
        `}</style>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25, ease }}
          className="overflow-hidden"
        >
          <div
            className="flex whitespace-nowrap"
            style={{ animation: "marquee 22s linear infinite" }}
          >
            {[...tags, ...tags].map((tag, i) => (
              <span key={i} className="inline-flex items-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-600 border border-[#2a2a2a] px-3 py-1.5">
                  {tag}
                </span>
                <span className="mx-4 text-[#2a2a2a] text-xs select-none">·</span>
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
