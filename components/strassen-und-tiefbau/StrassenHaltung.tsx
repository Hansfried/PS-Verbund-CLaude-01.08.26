"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

const staerken = [
  {
    nr: "01",
    titel: "DIENSTLEISTUNGEN",
    text: "Deichbau, Windparkerschließung und Tiefbauarbeiten. Erdbau, Kanalbau, Pflasterarbeiten.",
  },
  {
    nr: "02",
    titel: "MITARBEITER",
    text: "Erfahrenes Team aus Bauleitern, Maschinisten, Facharbeitern und Verwaltung.",
  },
  {
    nr: "03",
    titel: "MASCHINENPARK",
    text: "Eigener Fuhrpark für Erd-, Kanal- und Asphaltarbeiten.",
  },
  {
    nr: "04",
    titel: "BAULEITUNG",
    text: "Durchgehende Bauleitung von der Planung bis zur Abnahme.",
  },
  {
    nr: "05",
    titel: "STANDORT",
    text: "Norddeutschland als Kernregion, angebunden an den PS Verbund.",
  },
  {
    nr: "06",
    titel: "QUALITÄT",
    text: "Ausführung nach den geltenden technischen Regelwerken.",
  },
  {
    nr: "07",
    titel: "PARTNER",
    text: "Enge Zusammenarbeit mit Kommunen, Industrie und den anderen PS Gesellschaften.",
  },
  {
    nr: "08",
    titel: "NACHHALTIGKEIT",
    text: "Einsatz von Recyclingbaustoffen aus dem PS Verbund, wo technisch möglich.",
  },
]

export default function StrassenHaltung() {
  return (
    <section id="profil" data-theme="light" className="scroll-mt-20 bg-white py-24 border-t border-gray-200">
      <div className="w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left — headline block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="md:sticky md:top-32 self-start"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ebc316] mb-6">
              ▲&nbsp;&nbsp;UNTERNEHMENSPROFIL
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase text-gray-900 mb-8">
              WIR BAUEN
              <br />
              VERLÄSSLICH.
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-sm mb-8">
              Als Straßen- und Tiefbau-Spezialist im PS Verbund übernehmen wir Bauvorhaben für Kommunen, Industrie und private Auftraggeber, von der Planung bis zur Abnahme. Kurze Wege zu Rohstoff und Recycling aus dem eigenen Verbund machen uns schnell und flexibel.
            </p>
            <div className="relative aspect-[4/3] max-w-sm overflow-hidden rounded-br-[2rem]">
              <Image src="/gesellschaften-team.jpg" alt="Team PS Straßen und Tiefbau" fill className="object-cover" />
            </div>
          </motion.div>

          {/* Right — 8 strengths, clean list layout (no card borders) */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#ebc316] mb-8"
            >
              UNSERE STÄRKEN
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              {staerken.map(({ nr, titel, text }, i) => (
                <motion.div
                  key={nr}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease }}
                  className="border-t border-gray-100 py-5"
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-lg font-black text-[#ebc316] leading-none shrink-0">
                      {nr}
                    </span>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-900">
                      {titel}
                    </p>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed pl-8">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
