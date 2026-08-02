"use client"

import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

const highlights = [
  { value: "3,08 Mio. t", label: "Kiessand für die A14" },
  { value: "ca. 3", label: "Jahre Laufzeit" },
  { value: "12,4 ha", label: "Baggersee nach Abbau" },
]

const tags = [
  "GmbH",
  "Karstädt OT Stavenow",
  "Seitenentnahme A14",
  "Landkreis Prignitz",
]

const vorteile = [
  {
    value: "~115.000",
    label: "Eingesparte Lkw-Fahrten",
    description: "Direkte Seitenentnahme statt externem Rohstoffbezug.",
  },
  {
    value: "~1,2 Mio.",
    label: "Liter Diesel weniger",
    description: "Durch minimale Transportwege zur Baustelle.",
  },
  {
    value: "~3.200 t",
    label: "Vermiedenes CO₂",
    description: "Messbarer Beitrag zu Klimazielen und Anwohnerschutz.",
  },
]

export default function InfrabauOverview() {
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
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f97316] mb-6">
            ▲&nbsp;&nbsp;IM ÜBERBLICK
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase text-white">
            WIR BAUEN
            <br />
            DIE A14
            <br />
            MIT.
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
              <p className="text-4xl md:text-5xl font-black text-[#f97316] leading-none mb-2">
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
            Die PS Infrabau GmbH verantwortet am Standort Karstädt OT Stavenow (Landkreis Prignitz, Brandenburg) die Seitenentnahme Stavenow — eine Kiessandgewinnung, deren gesamtes Volumen direkt in den Ausbau der Bundesautobahn A14 fließt.
          </p>
          <p>
            Der Standort liegt rund 0,5 km von der A14-Trasse entfernt und ist damit eine der direktesten Materialquellen für dieses Infrastrukturprojekt in der Region.
          </p>
        </motion.div>

        {/* Wirtschaftliche Vorteile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f97316] mb-6">
            ▲&nbsp;&nbsp;WIRTSCHAFTLICHE VORTEILE
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {vorteile.map(({ value, label, description }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
              >
                <p className="text-4xl md:text-5xl font-black text-[#f97316] leading-none mb-3">{value}</p>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-1">{label}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
              </motion.div>
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
