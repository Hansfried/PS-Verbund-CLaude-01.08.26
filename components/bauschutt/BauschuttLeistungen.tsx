"use client"

import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

const annahmekatalog = [
  {
    code: "01 04 08–13",
    titel: "Kies, Sand, Ton",
    text: "Abfälle aus Gewinnung und Steinmetzarbeiten.",
  },
  {
    code: "10 01",
    titel: "Aschen & Schlacken",
    text: "Aschen, Schlacken und Filterstäube aus Verbrennung.",
  },
  {
    code: "17 01–08",
    titel: "Bau- & Abbruchabfälle",
    text: "Beton, Ziegel, Boden, Baggergut, Dämmmaterial, Asbest.",
  },
  {
    code: "19 12 / 13",
    titel: "Mineralien & Böden",
    text: "Mineralien, Glas, Sanierungsböden.",
  },
]

const technik = [
  {
    titel: "Basisabdichtung",
    text: "Mineralische Dichtung mit Kunststoffdichtungsbahn und Sickerwassererfassung nach DepV Anhang 1.",
  },
  {
    titel: "Einbau & Betrieb",
    text: "Gestaffelter Einbau auf 5,5 ha Fläche, ≈ 50.000 t/a Annahme, gesicherter Positivkatalog.",
  },
  {
    titel: "Rekultivierung",
    text: "Endhöhe ≈ 97 m ü. NHN nach Profilierungs- und Maßnahmenplan, Nachsorge nach DepV.",
  },
]

const zielgruppen = ["Bauwirtschaft", "Rückbau & Abbruch", "Kommunen & öffentliche Hand"]

export default function BauschuttLeistungen() {
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
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5b8bb0] mb-6">
            ▲&nbsp;&nbsp;ANNAHMEKATALOG
          </p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none uppercase text-gray-900 max-w-3xl">
            TECHNIK NACH
            <br />
            DepV-STANDARD.
          </h2>
        </motion.div>

        {/* Annahmekatalog: 4-column grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 border-t border-gray-200 py-16"
        >
          {annahmekatalog.map(({ code, titel, text }) => (
            <div key={code}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5b8bb0] mb-3">{code}</p>
              <h3 className="text-lg font-black uppercase text-gray-900 mb-2 leading-snug">
                {titel}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
            </div>
          ))}
        </motion.div>

        {/* Technisches Konzept */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08, ease }}
          className="border-t border-gray-200 py-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5b8bb0] mb-10">
            ▲&nbsp;&nbsp;TECHNISCHES KONZEPT
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-10">
            {technik.map(({ titel, text }) => (
              <div key={titel} className="border-t border-gray-100 pt-5">
                <h4 className="text-sm font-black uppercase text-gray-900 mb-2 leading-snug">
                  {titel}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Zielgruppen */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12, ease }}
          className="border-t border-b border-gray-200 py-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5b8bb0] mb-6">
            ▲&nbsp;&nbsp;ZIELGRUPPEN
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-2">
            {zielgruppen.map((z) => (
              <span key={z} className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gray-900">
                {z}
              </span>
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
            Interesse an einer Anlieferung? Wir beraten Sie gerne persönlich.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 bg-[#a0c6e3] text-black text-xs font-black uppercase tracking-[0.2em] px-8 py-4 hover:bg-[#8bb6d8] transition-colors duration-200 shrink-0"
          >
            Jetzt anfragen ▲
          </a>
        </motion.div>

      </div>
    </section>
  )
}
