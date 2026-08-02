"use client"

import { motion } from "framer-motion"
import ImagePlaceholder from "../kieswerke/ImagePlaceholder"

const ease = [0.22, 1, 0.36, 1] as const

const esg = [
  {
    buchstabe: "E",
    titel: "ENVIRONMENT",
    text: "CO₂-Vorteil durch regionale Anlieferung (70 km statt 100+ km). Kompensationsflächen aus Maßnahmenplan 2021. Nach DepV überwachtes Sickerwasser-, Boden- und Grundwasserschutzregime.",
  },
  {
    buchstabe: "S",
    titel: "SOCIAL",
    text: "Fünf lokale Arbeitsplätze mit Fachkunde nach § 4 DepV. Versorgungssicherheit für die Bauwirtschaft in sechs Landkreisen. Geringe Lärm- und Staubbelastung durch geschützte Lage außerhalb von Wohngebieten.",
  },
  {
    buchstabe: "G",
    titel: "GOVERNANCE",
    text: "Vollständige Genehmigung durch das Landesamt für Umwelt Brandenburg. Zertifizierter Entsorgungsfachbetrieb nach EfbV. Transparente Annahmesteuerung über Wiegung und Positivkatalog (AVV).",
  },
]

export default function BauschuttHaltung() {
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5b8bb0] mb-6">
              ▲&nbsp;&nbsp;ESG & NACHHALTIGKEIT
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase text-gray-900 mb-8">
              KREISLAUF-
              <br />
              INFRASTRUKTUR.
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-sm mb-8">
              Die Deponie Luggendorf hält mineralische Abfälle in einem geordneten, überwachten Stoffkreislauf. Sie ist Teil der Kreislaufwirtschaftslogik (KrWG, § 6 Abfallhierarchie) und vermeidet wilde Verkippung sowie Ferntransporte zu weiter entfernten Standorten.
            </p>
            <ImagePlaceholder label="Team & Betriebsgelände Luggendorf" className="aspect-[4/3] max-w-sm" />
          </motion.div>

          {/* Right — E/S/G blocks */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#5b8bb0] mb-8"
            >
              UNSERE VERANTWORTUNG
            </motion.p>
            <div className="space-y-0">
              {esg.map(({ buchstabe, titel, text }, i) => (
                <motion.div
                  key={buchstabe}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}
                  className="flex gap-6 border-t border-gray-100 py-8"
                >
                  <span className="text-5xl font-black text-[#a0c6e3] leading-none shrink-0">
                    {buchstabe}
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">
                      {titel}
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed">{text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
