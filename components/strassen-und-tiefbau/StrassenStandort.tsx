"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

// Regionale Kernregion des PS Verbunds — keine vermessenen Distanzen, da keine Quelle vorliegt
const einsatzgebiet = [
  { ort: "ROSTOCK" },
  { ort: "BERLIN" },
  { ort: "MAGDEBURG" },
  { ort: "LÜBECK" },
  { ort: "GROß BUCHHOLZ / GOLMER BERG", highlight: true, note: "STANDORT PS VERBUND" },
]

const leistungsfaehigkeit = [
  { label: "Fuhrpark", value: "EIGEN" },
  { label: "Bauleitung", value: "VOR ORT" },
  { label: "Einsatzradius", value: "BRANDENBURG, MECKLENBURG-VORPOMMERN, SCHLESWIG-HOLSTEIN, SACHSEN-ANHALT" },
  { label: "Auftraggeber", value: "KOMMUNAL & PRIVAT" },
]

export default function StrassenStandort() {
  return (
    <section id="standort" className="scroll-mt-20 bg-[#1a1a1a] py-24 border-t border-[#333]">
      <div className="w-full px-6">

        {/* Headline — full width on top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="flex items-start justify-between mb-12"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ebc316] mb-6">
              ▲&nbsp;&nbsp;EINSATZGEBIET
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase text-white">
              WIR SIND DA,
              <br />
              WO GEBAUT
              <br />
              WIRD.
            </h2>
          </div>
          {/* Triangle accent top-right */}
          <div
            className="w-0 h-0 hidden md:block mt-2"
            style={{
              borderLeft: "20px solid transparent",
              borderRight: "20px solid transparent",
              borderBottom: "32px solid #ebc316",
            }}
          />
        </motion.div>

        {/* Two-column: Einsatzgebiet left, Leistungsfähigkeit right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

          {/* Left — Kernregion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">
              KERNREGION
            </p>
            <ul className="space-y-0">
              {einsatzgebiet.map(({ ort, highlight, note }) => (
                <li
                  key={ort}
                  className="flex items-center justify-between border-b border-[#2a2a2a] py-3"
                >
                  <span className={`text-sm font-bold flex items-center gap-3 ${highlight ? "text-[#ebc316]" : "text-white"}`}>
                    <span className="text-[#ebc316] text-xs">■</span>
                    {ort}
                  </span>
                  {note && (
                    <span className="text-sm text-[#ebc316] font-bold">{note}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Leistungsfähigkeit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18, ease }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">
              LEISTUNGSFÄHIGKEIT
            </p>
            <ul className="space-y-0">
              {leistungsfaehigkeit.map(({ label, value }) => (
                <li
                  key={label}
                  className="flex items-center justify-between border-b border-[#2a2a2a] py-3"
                >
                  <span className="text-sm text-gray-400">{label}</span>
                  <span className="text-sm font-bold text-[#ebc316]">{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Full-width photo placeholder at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
        >
          <div className="relative h-[380px] w-full overflow-hidden">
            <Image src="/strassen-einsatzgebiet.jpg" alt="Baustelle im Einsatzgebiet" fill className="object-cover" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
