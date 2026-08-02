"use client"

import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

const kennzahlen = [
  {
    display: "3,08 Mio. t",
    einheit: "GENEHMIGTE ROHSTOFFRESERVE",
    description: "Kiessand für den Bau der Bundesautobahn A14",
  },
  {
    display: "~1,0 Mio. t",
    einheit: "FÖRDERLEISTUNG PRO JAHR",
    description: "Bei einer Laufzeit von ca. 3 Jahren",
  },
  {
    display: "22,5 ha",
    einheit: "GESAMTFLÄCHE",
    description: "Davon 14,4 ha aktive Abbaufläche",
  },
  {
    display: "12,4 ha",
    einheit: "WASSERFLÄCHE NACH ABBAU",
    description: "Baggersee mit ökologischer Rekultivierung",
  },
]

export default function InfrabauKennzahlen() {
  return (
    <section id="zahlen" className="scroll-mt-20 bg-[#0f0f0f] py-24 border-t border-[#333]">
      <div className="w-full px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="flex items-start justify-between mb-2"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f97316] mb-6">
              ▲&nbsp;&nbsp;ZAHLEN & SUBSTANZ
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase text-white">
              WIR LIEFERN
              <br />
              DIE ZAHLEN.
            </h2>
          </div>
          <div
            className="w-0 h-0 hidden md:block mt-2"
            style={{
              borderLeft: "20px solid transparent",
              borderRight: "20px solid transparent",
              borderBottom: "32px solid #f97316",
            }}
          />
        </motion.div>

        <div className="mt-12">
          {kennzahlen.map(({ display, einheit, description }, i) => (
            <motion.div
              key={einheit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="border-t border-[#2a2a2a] py-8 flex flex-col md:flex-row md:items-baseline gap-6 md:gap-16"
            >
              <div className="flex items-baseline gap-2 shrink-0 min-w-[180px]">
                <span className="text-base text-[#f97316] font-bold">▲</span>
                <p className="text-6xl md:text-8xl font-black text-[#f97316] leading-none tracking-tight">
                  {display}
                </p>
              </div>
              <div className="md:text-right md:ml-auto">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-1">
                  {einheit}
                </p>
                <p className="text-sm text-gray-400 max-w-lg leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
