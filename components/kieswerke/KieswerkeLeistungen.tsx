"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

const kernprodukte = [
  {
    titel: "Gesteinskörnung",
    text: "Sortierte Sande für Straßenbau, Hochbau, Tiefbau und mehr.",
  },
  {
    titel: "RC-Beton",
    text: "Wir recyceln Betonbruch und verwenden ihn für neue Bauvorhaben.",
  },
  {
    titel: "Frostschutzschicht",
    text: "Frostschutzkiese für Tief- und Straßenbau.",
  },
  {
    titel: "Schottertragschicht",
    text: "Aufbereitete Mischgüter aus eigener Mischanlage.",
  },
]

const wertschoepfungskette = [
  {
    titel: "Abtragung",
    text: "Gewinnung von Kies & Sanden an der Abtragungskante.",
    einsatz: ["6x Radlader", "11x Bagger", "22x LKW"],
  },
  {
    titel: "Gesteinskörnung — Herstellung",
    text: "Das Material wird gebrochen und gewaschen und über Förderbänder nach Körnung sortiert.",
    einsatz: ["4x Brechanlagen", "1x Waschanlage"],
  },
  {
    titel: "Mischplatz",
    text: "Herstellung von RC-Beton, Schottertragschicht, Frostschutzschicht.",
    einsatz: ["4x Brechanlagen", "1x Radlader"],
  },
  {
    titel: "Gesteinskörnung — Transport",
    text: "Ein Radlader belädt einen Lastkraftwagen in Rekordzeit. Dieser wird gewogen und mit dem passenden Lieferschein zu seinem Ziel geschickt.",
    einsatz: [
      "22 Lkw",
      "Mit Subunternehmen erhöhen wir unsere Schlagkraft auf bis zu 50 LKW",
      "1x Waage",
      "2x Radlader",
      "1x Bagger",
    ],
  },
]

const zielgruppen = ["Windparks", "Straßenbau", "Öffentliche Hand"]

export default function KieswerkeLeistungen() {
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
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8c200] mb-6">
            ▲&nbsp;&nbsp;KERNPRODUKTE
          </p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none uppercase text-gray-900 max-w-3xl">
            WIR LIEFERN,
            <br />
            WAS DEUTSCHLAND BAUT.
          </h2>
        </motion.div>

        {/* Kernprodukte: 4-column grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 border-t border-gray-200 py-16"
        >
          {kernprodukte.map(({ titel, text }) => (
            <div key={titel}>
              <span className="block w-2.5 h-2.5 bg-[#a8c200] mb-4" />
              <h3 className="text-lg font-black uppercase text-gray-900 mb-2 leading-snug">
                {titel}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
            </div>
          ))}
        </motion.div>

        {/* Wertschöpfungskette */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08, ease }}
          className="border-t border-gray-200 py-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8c200] mb-10">
            ▲&nbsp;&nbsp;WERTSCHÖPFUNGSKETTE
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mb-12">
            {wertschoepfungskette.map(({ titel, text, einsatz }) => (
              <div key={titel} className="border-t border-gray-100 pt-5">
                <h4 className="text-sm font-black uppercase text-gray-900 mb-2 leading-snug">
                  {titel}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{text}</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">Einsatz</p>
                <ul className="space-y-1">
                  {einsatz.map((item) => (
                    <li key={item} className="text-xs text-gray-500">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 overflow-hidden rounded-br-[3.5rem]">
              <Image src="/kieswerke-herstellung.jpg" alt="Herstellung & Aufbereitung" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <span className="absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-wider text-white/60">
                Foto: Herstellung & Aufbereitung
              </span>
            </div>
            <div className="relative h-64 overflow-hidden rounded-br-[3.5rem]">
              <Image src="/kieswerke-mischplatz.jpg" alt="Mischplatz" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <span className="absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-wider text-white/60">
                Foto: Mischplatz
              </span>
            </div>
            <div className="relative h-64 overflow-hidden rounded-br-[3.5rem]">
              <Image src="/kieswerke-transport.png" alt="Transport & Logistik" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <span className="absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-wider text-white/60">
                Foto: Transport & Logistik
              </span>
            </div>
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
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8c200] mb-6">
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
            Interesse an unseren Leistungen? Wir beraten Sie gerne persönlich.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 bg-[#a8c200] text-black text-xs font-black uppercase tracking-[0.2em] px-8 py-4 hover:bg-[#96af00] transition-colors duration-200 shrink-0"
          >
            Jetzt anfragen ▲
          </a>
        </motion.div>

      </div>
    </section>
  )
}
