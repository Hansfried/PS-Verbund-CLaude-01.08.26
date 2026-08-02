"use client"

import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

const highlights = [
  { value: "Straße", label: "Neubau & Sanierung" },
  { value: "Tiefbau", label: "Kanal- & Rohrleitungsbau" },
  { value: "Erdbau", label: "Erschließung & Erdarbeiten" },
]

const tags = [
  "Norddeutschland",
  "Straßenbau · Tiefbau · Erdbau",
  "Kommunal & Privat",
  "Teil des PS Verbunds",
]

export default function StrassenOverview() {
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
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ebc316] mb-6">
            ▲&nbsp;&nbsp;IM ÜBERBLICK
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase text-white">
            WIR VERBINDEN,
            <br />
            WAS ZUSAMMEN-
            <br />
            GEHÖRT.
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
              <p className="text-4xl md:text-5xl font-black text-[#ebc316] leading-none mb-2">
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
            Die PS Straßen und Tiefbau GmbH ist der Straßen- und Tiefbau-Spezialist im PS Verbund — von der ersten Erdbewegung bis zur fertigen Oberfläche.
          </p>
          <p>
            Als Teil eines norddeutschen Bauverbunds aus Rohstoffgewinnung, Straßen- und Tiefbau, Infrastruktur und Recycling profitieren wir von kurzen Wegen zu Baustoffen und Maschinen — und geben diesen Vorteil an unsere Auftraggeber weiter.
          </p>
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
