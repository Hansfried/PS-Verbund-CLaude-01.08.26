"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

const kernleistungen = [
  {
    titel: "Windparks",
    text: "Zuwegung, Kranstellflächen und Kabeltrassenbau für die Erschließung von Windenergieparks.",
  },
  {
    titel: "Deichbau",
    text: "Neubau, Sanierung und Ertüchtigung von Deichanlagen im Küsten- und Hochwasserschutz.",
  },
  {
    titel: "Straßen",
    text: "Neubau, Sanierung und Unterhalt von Straßen, Wegen und Plätzen.",
  },
  {
    titel: "Kanal",
    text: "Kanalbau, Rohrleitungsbau und erdverlegte Infrastruktur.",
  },
  {
    titel: "Erdbau",
    text: "Erschließung, Erdarbeiten und Baugrubenherstellung.",
  },
]

const wertschoepfungskette = [
  {
    titel: "Planung & Vermessung",
    text: "Bestandsaufnahme, Vermessung und Abstimmung mit Auftraggebern und Behörden.",
    einsatz: ["Vermessungstechnik", "Bauleitung"],
  },
  {
    titel: "Erdbau & Erschließung",
    text: "Aushub, Verdichtung und Herstellung des Unterbaus.",
    einsatz: ["Bagger", "Walzen"],
  },
  {
    titel: "Kanal- & Leitungsbau",
    text: "Verlegung von Rohrleitungen und Kanälen im Tiefbau.",
    einsatz: ["Grabenfräsen", "Rohrverleger"],
  },
  {
    titel: "Ausbau & Deckschicht",
    text: "Pflaster-, Rand- und Asphaltarbeiten bis zur fertigen Oberfläche.",
    einsatz: ["Fertiger", "Walzen"],
  },
]

const zielgruppen = ["Kommunen", "Verbände", "Landkreise", "Industrie und Gewerbe"]

export default function StrassenLeistungen() {
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
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ebc316] mb-6">
            ▲&nbsp;&nbsp;KERNLEISTUNGEN
          </p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none uppercase text-gray-900 max-w-3xl">
            WIR SIND TREIBER DES
            <br />
            WINDENERGIEANLAGENBAUS.
          </h2>
        </motion.div>

        {/* Kernleistungen: 5-column grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10 border-t border-gray-200 py-16"
        >
          {kernleistungen.map(({ titel, text }) => (
            <div key={titel}>
              <span className="block w-2.5 h-2.5 bg-[#ebc316] mb-4" />
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
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ebc316] mb-10">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-64 overflow-hidden rounded-br-[3.5rem]">
              <Image src="/strassen-baustelle.jpg" alt="Baustelle" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <span className="absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-wider text-white/60">
                Foto: Baustelle
              </span>
            </div>
            <div className="relative h-64 overflow-hidden rounded-br-[3.5rem]">
              <iframe
                src="https://app.vidzflow.com/v/UwOyAB1H2O?dq=576&ap=true&muted=true&loop=true&ctp=false&bv=false&piv=false&playsinline=false&bc=%234E5FFD&controls=play-large%2Cplay%2Cprogress%2Ccurrent-time%2Cmute%2Cvolume%2Csettings%2Cfullscreen"
                title="DJI_0008"
                frameBorder={0}
                scrolling="no"
                allow="fullscreen"
                className="absolute top-1/2 left-1/2 pointer-events-none -translate-x-1/2 -translate-y-1/2"
                style={{ width: "200%", height: "200%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              <span className="absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-wider text-white/60">
                Video: Zuwegung Windpark
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
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ebc316] mb-6">
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
            className="inline-flex items-center gap-3 bg-[#ebc316] text-black text-xs font-black uppercase tracking-[0.2em] px-8 py-4 hover:bg-[#d4af14] transition-colors duration-200 shrink-0"
          >
            Jetzt anfragen ▲
          </a>
        </motion.div>

      </div>
    </section>
  )
}
