"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

const konkurrenzdeponien = [
  { ort: "REESEN", km: "≈ 110 km" },
  { ort: "CHEINE", km: "≈ 100 km" },
  { ort: "GARDELEGEN", km: "≈ 105 km" },
  { ort: "DRÖLITZ", km: "≈ 120 km" },
  { ort: "DERSENOW", km: "≈ 100 km" },
  { ort: "DEETZ", km: "≈ 130 km" },
  { ort: "GROß PANKOW / OT GROß BUCHHOLZ", km: "UNSER STANDORT", highlight: true },
]

const fachgenehmigungen = [
  { label: "Abfallrecht", value: "KrWG · DepV" },
  { label: "Wasserrecht", value: "Sickerwasserkonzept gesichert" },
  { label: "Naturschutzrecht", value: "Artenschutz, Kompensationsplan" },
  { label: "Forstrecht", value: "Rodung außerhalb Schutzgebieten" },
  { label: "Immissionsschutz", value: "Unauffällig" },
  { label: "Planfeststellung", value: "Erwartet 05–06/2026" },
]

export default function BauschuttStandort() {
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a0c6e3] mb-6">
              ▲&nbsp;&nbsp;STANDORT & GENEHMIGUNG
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase text-white">
              ZENTRAL IN
              <br />
              NORDDEUTSCHLAND.
            </h2>
          </div>
          <div
            className="w-0 h-0 hidden md:block mt-2"
            style={{
              borderLeft: "20px solid transparent",
              borderRight: "20px solid transparent",
              borderBottom: "32px solid #a0c6e3",
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-gray-400 max-w-2xl leading-relaxed mb-12"
        >
          Der Standort liegt im Landkreis Prignitz, ca. 8 km südwestlich von Pritzwalk. Das Einzugsgebiet umfasst sechs Landkreise im Radius von bis zu 70 km — die nächste DK-I-Deponie liegt über 100 km entfernt.
        </motion.p>

        {/* Two-column: Konkurrenzdeponien left, Fachgenehmigungen right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

          {/* Left — distance to competing DK-I landfills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">
              DISTANZ ZU KONKURRENZ-DEPONIEN
            </p>
            <ul className="space-y-0">
              {konkurrenzdeponien.map(({ ort, km, highlight }) => (
                <li
                  key={ort}
                  className="flex items-center justify-between border-b border-[#2a2a2a] py-3"
                >
                  <span className={`text-sm font-bold flex items-center gap-3 ${highlight ? "text-[#a0c6e3]" : "text-white"}`}>
                    <span className="text-[#a0c6e3] text-xs">■</span>
                    {ort}
                  </span>
                  <span className={`text-sm ${highlight ? "text-[#a0c6e3] font-bold" : "text-gray-400"}`}>
                    {km}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Fachgenehmigungen table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18, ease }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">
              INTEGRIERTE FACHGENEHMIGUNGEN
            </p>
            <ul className="space-y-0">
              {fachgenehmigungen.map(({ label, value }) => (
                <li
                  key={label}
                  className="flex items-center justify-between border-b border-[#2a2a2a] py-3 gap-4"
                >
                  <span className="text-sm text-gray-400 shrink-0">{label}</span>
                  <span className="text-sm font-bold text-[#a0c6e3] text-right">{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Full-width photo at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="relative h-[380px] w-full rounded-br-[3.5rem] overflow-hidden flex flex-col justify-end p-8"
        >
          <Image
            src="/bauschutt-gelaende.jpg"
            alt="Gelände Deponie Luggendorf"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <p className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-[#a0c6e3]">
            GELÄNDE: DEPONIE LUGGENDORF
          </p>
          <p className="relative text-xs text-gray-400 mt-1">
            Gemarkung Groß Pankow, Flur 5 · Landkreis Prignitz
          </p>
        </motion.div>

      </div>
    </section>
  )
}
