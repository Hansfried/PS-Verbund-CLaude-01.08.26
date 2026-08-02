"use client"

import { motion } from "framer-motion"
import ImagePlaceholder from "../kieswerke/ImagePlaceholder"

const ease = [0.22, 1, 0.36, 1] as const

const prozesskette = [
  {
    titel: "Baggersee",
    text: "Nassabbau-Standort mit integriertem Spülfeld.",
  },
  {
    titel: "Saugbagger",
    text: "Elektrisch betrieben — emissionsarmer Nassabbau direkt im entstehenden See.",
  },
  {
    titel: "Spülfeld",
    text: "Geschlossener Wasserkreislauf für Wasser & Feinanteile.",
  },
  {
    titel: "Transport",
    text: "Kurze Wege über eine temporäre Baustellenstraße direkt zur L131.",
  },
]

const leistungsfelder = [
  {
    titel: "Rohstoffgewinnung & Seitenentnahmen",
    text: "Kiessandgewinnung für Infrastrukturprojekte, direkt am Bedarfsort.",
  },
  {
    titel: "Erdbau",
    text: "Erdarbeiten für Straßen-, Tief- und Infrastrukturbau.",
  },
  {
    titel: "Kanal- & Leitungsbau",
    text: "Ver- und Entsorgungsleitungen im Rahmen von Infrastrukturprojekten.",
  },
  {
    titel: "Rekultivierung",
    text: "Ökologische Aufwertung und Nachnutzung ehemaliger Abbauflächen.",
  },
]

export default function InfrabauLeistungen() {
  return (
    <section id="leistungen" data-theme="light" className="scroll-mt-20 bg-white border-t border-gray-200">
      <div className="w-full px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="py-20"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f97316] mb-6">
            ▲&nbsp;&nbsp;PROJEKT STAVENOW
          </p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none uppercase text-gray-900 max-w-3xl">
            NASSABBAU.
            <br />
            GESCHLOSSENER KREISLAUF.
          </h2>
        </motion.div>

        {/* Prozesskette: 4-column grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 border-t border-gray-200 py-16"
        >
          {prozesskette.map(({ titel, text }) => (
            <div key={titel}>
              <span className="block w-2.5 h-2.5 bg-[#f97316] mb-4" />
              <h3 className="text-lg font-black uppercase text-gray-900 mb-2 leading-snug">
                {titel}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
            </div>
          ))}
        </motion.div>

        {/* Photos — no real site photography yet */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08, ease }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-200 pt-16 pb-16"
        >
          <ImagePlaceholder label="Saugbagger im Einsatz" className="h-64" />
          <ImagePlaceholder label="Spülfeld & Wasserkreislauf" className="h-64" />
        </motion.div>

        {/* Weitere Leistungsfelder */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12, ease }}
          className="border-t border-b border-gray-200 py-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f97316] mb-10">
            ▲&nbsp;&nbsp;WEITERE LEISTUNGSFELDER
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {leistungsfelder.map(({ titel, text }) => (
              <div key={titel}>
                <h4 className="text-sm font-black uppercase text-gray-900 mb-2 leading-snug">
                  {titel}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-gray-100"
        >
          <p className="text-sm text-gray-400 max-w-xs">
            Interesse an unseren Leistungen? Wir beraten Sie gerne persönlich.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 bg-[#f97316] text-black text-xs font-black uppercase tracking-[0.2em] px-8 py-4 hover:bg-[#dd6510] transition-colors duration-200 shrink-0"
          >
            Jetzt anfragen ▲
          </a>
        </motion.div>

      </div>
    </section>
  )
}
