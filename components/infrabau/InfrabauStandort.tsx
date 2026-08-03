"use client"

import { motion } from "framer-motion"
import ImagePlaceholder from "../kieswerke/ImagePlaceholder"

const ease = [0.22, 1, 0.36, 1] as const

const distanzen = [
  { ort: "A14-TRASSE", km: "≈ 0,5 km" },
  { ort: "L131", km: "≈ 0,8 km" },
  { ort: "KARSTÄDT", km: "≈ 4 km" },
  { ort: "KARSTÄDT OT STAVENOW", km: "UNSER STANDORT", highlight: true },
]

const verfahrensstand = [
  { label: "Status", value: "Vorprüfung abgeschlossen" },
  { label: "Einreichung Antragsunterlagen", value: "03/2026" },
  { label: "Plangenehmigung erwartet", value: "07/2026" },
  { label: "Baubeginn", value: "06–07/2026" },
  { label: "Genehmigungsbehörde", value: "Landesamt für Umwelt · Abt. W1" },
]

export default function InfrabauStandort() {
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f97316] mb-6">
              ▲&nbsp;&nbsp;STANDORT & GENEHMIGUNG
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase text-white">
              DIREKT AN DER A14.
              <br />
              SEITE AN SEITE.
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

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-gray-400 max-w-2xl leading-relaxed mb-12"
        >
          Der Standort liegt im Landkreis Prignitz, Gemeinde Karstädt, Ortsteil Stavenow. Die Abbaufläche grenzt unmittelbar an die Trasse der Bundesautobahn A14. Transportwege sinken damit auf ein Minimum.
        </motion.p>

        {/* Two-column: Distanzen left, Verfahrensstand right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

          {/* Left — distance to the A14 construction site */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">
              DISTANZ ZUR BAUSTELLE
            </p>
            <ul className="space-y-0">
              {distanzen.map(({ ort, km, highlight }) => (
                <li
                  key={ort}
                  className="flex items-center justify-between border-b border-[#2a2a2a] py-3"
                >
                  <span className={`text-sm font-bold flex items-center gap-3 ${highlight ? "text-[#f97316]" : "text-white"}`}>
                    <span className="text-[#f97316] text-xs">■</span>
                    {ort}
                  </span>
                  <span className={`text-sm ${highlight ? "text-[#f97316] font-bold" : "text-gray-400"}`}>
                    {km}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Verfahrensstand table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18, ease }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">
              VERFAHRENSSTAND
            </p>
            <ul className="space-y-0">
              {verfahrensstand.map(({ label, value }) => (
                <li
                  key={label}
                  className="flex items-center justify-between border-b border-[#2a2a2a] py-3 gap-4"
                >
                  <span className="text-sm text-gray-400 shrink-0">{label}</span>
                  <span className="text-sm font-bold text-[#f97316] text-right">{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom: site map + post-mining visualization — both placeholders (source diagrams, not raw photography) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.22, ease }}
          >
            <ImagePlaceholder label="Standortkarte Stavenow" dark className="h-72" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.28, ease }}
          >
            <ImagePlaceholder label="Visualisierung: Baggersee nach Rekultivierung" dark className="h-72" />
          </motion.div>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed mt-6 max-w-2xl">
          Nach Abschluss der Gewinnung entsteht ein ca. 12,4 ha großer Baggersee mit ökologischer Aufwertung: neue Wasser- und Uferzonen als Lebensraum, optionale Freizeit- und Naturnutzung sowie langfristige Standortwertentwicklung.
        </p>

      </div>
    </section>
  )
}
