"use client"

import { motion } from "framer-motion"
import ImagePlaceholder from "../kieswerke/ImagePlaceholder"

const ease = [0.22, 1, 0.36, 1] as const

// Qualitative Prinzipien — keine erfundenen Kennzahlen, da für PS Infrabau GmbH
// (anders als Kieswerke/Bauschutt) kein vollständiges Unternehmensprofil vorliegt.
const prinzipien = [
  {
    nr: "01",
    titel: "ROHSTOFF",
    text: "Direkte Gewinnung dort, wo der Bedarf entsteht, kurze Wege statt externem Zukauf.",
  },
  {
    nr: "02",
    titel: "LOGISTIK",
    text: "Minimale Transportwege durch standortnahe Seitenentnahmen für Infrastrukturprojekte.",
  },
  {
    nr: "03",
    titel: "VERANTWORTUNG",
    text: "Geschlossene Wasserkreisläufe, elektrischer Nassabbau und ökologische Rekultivierung.",
  },
  {
    nr: "04",
    titel: "PARTNERSCHAFT",
    text: "Enge Abstimmung mit Behörden und Schwestergesellschaften im PS Verbund.",
  },
]

export default function InfrabauHaltung() {
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f97316] mb-6">
              ▲&nbsp;&nbsp;UNTERNEHMENSPROFIL
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase text-gray-900 mb-8">
              ROHSTOFF. LOGISTIK.
              <br />
              VERANTWORTUNG.
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-sm mb-8">
              Die PS Infrabau GmbH bringt Rohstoffgewinnung und Infrastrukturprojekte zusammen. Aktuell mit der Seitenentnahme Stavenow für den Bau der A14. Als Teil des PS Verbunds profitieren wir von enger Abstimmung mit unseren Schwestergesellschaften entlang der gesamten Wertschöpfungskette.
            </p>
            <ImagePlaceholder label="Team & Standort Stavenow" className="aspect-[4/3] max-w-sm" />
          </motion.div>

          {/* Right — 4 principles, clean list layout */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#f97316] mb-8"
            >
              UNSERE PRINZIPIEN
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              {prinzipien.map(({ nr, titel, text }, i) => (
                <motion.div
                  key={nr}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease }}
                  className="border-t border-gray-100 py-5"
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-lg font-black text-[#f97316] leading-none shrink-0">
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
