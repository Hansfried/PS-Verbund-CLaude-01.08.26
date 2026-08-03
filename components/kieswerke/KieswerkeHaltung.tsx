"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

// 8 items matching Exposé, Unternehmensprofil
const staerken = [
  {
    nr: "01",
    titel: "DIENSTLEISTUNGEN",
    text: "Rohstoffgewinnung, Schüttguttransport, Recycling, Entsorgung",
  },
  {
    nr: "02",
    titel: "MITARBEITER",
    text: "Über 40 Mitarbeiter: 8 Maschinisten, 18 Berufskraftfahrer, 4 Werkstattarbeiter, 1 Bauleiter, 5 Handarbeiter, 4 kaufmännische Angestellte",
  },
  {
    nr: "03",
    titel: "GRUNDSTÜCK",
    text: "96 ha im Eigentum, davon 77 ha mit 21 ha unverritzt. Bergwerkeigentum 47,50 ha zzgl. grundeigenem Bodenschatz auf 29,50 ha. Nassschnitt 43 ha, davon noch 33 ha abzubauen.",
  },
  {
    nr: "04",
    titel: "WERKSTATT",
    text: "600 qm mit Arbeitsgrube, Kränen und Bremsenprüfstand.",
  },
  {
    nr: "05",
    titel: "BÜROGEBÄUDE",
    text: "Vollsaniertes Bürogebäude auf 2 Etagen mit 9 Büros, 2 Küchen sowie Disposition, Waage und einer Diesel- und AdBlue-Tankstelle.",
  },
  {
    nr: "06",
    titel: "GENEHMIGUNGEN",
    text: "Alle Genehmigungen langfristig gesichert.",
  },
  {
    nr: "07",
    titel: "MASCHINEN",
    text: "Eigenfinanzierter Fuhrpark mit Raupen, Baggern, Radladern, LKWs, Dreiachsern, Transportern, Brechanlagen, Mischanlagen und mehr.",
  },
  {
    nr: "08",
    titel: "NIEDRIGE LEASING- UND FINANZIERUNGSQUOTE",
    text: "Niedrige Kapitalkosten durch eigenfinanzierte Anlagen.",
  },
]

export default function KieswerkeHaltung() {
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8c200] mb-6">
              ▲&nbsp;&nbsp;UNTERNEHMENSPROFIL
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase text-gray-900 mb-8">
              WIR BAUEN AUF
              <br />
              KLARE STRUKTUREN.
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-sm mb-8">
              Seit über 13 Jahren sind wir mitverantwortlich für den Deichbau, Windenergie-Infrastrukturprojekte und den Bau der A14. Dabei sind wir organisch gewachsen. Und wachsen bis heute weiter. Wir profitieren von einem etablierten Kundenstamm sowie starken Partnern der privaten und der öffentlichen Hand.
            </p>
            <div className="grid grid-cols-2 gap-3 max-w-sm">
              <div className="relative aspect-[4/3] overflow-hidden rounded-br-[2rem]">
                <Image
                  src="/kieswerke-buerogebaeude.jpg"
                  alt="Bürogebäude Groß Buchholz"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-br-[2rem]">
                <Image
                  src="/kieswerke-fuhrpark.jpg"
                  alt="Fuhrpark Groß Buchholz"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right — 8 strengths, clean list layout (no card borders) */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8c200] mb-8"
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
                    <span className="text-lg font-black text-[#a8c200] leading-none shrink-0">
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
