"use client"

import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

const highlights = [
  { value: "400.000 m³", label: "Genehmigtes Volumen" },
  { value: "≈ 640.000 t", label: "Gesamtkapazität" },
  { value: "5,5 ha", label: "Ablagerungsfläche" },
]

const tags = [
  "GmbH",
  "Groß Pankow / OT Groß Buchholz",
  "DK I · Mineralstoffdeponie nach DepV",
  "≈ 50.000 t / Jahr",
  "Landkreis Prignitz",
]

const marktStats = [
  {
    value: "2,24 Mio. m³",
    label: "Restkapazität Brandenburg",
    description: "Prognostizierte Erschöpfung der DK-I-Kapazitäten ab 2026 (uec-Studie, Oetjen-Dehne 2015).",
  },
  {
    value: "1,9 Mio. m³/a",
    label: "Regionaler Bedarf",
    description: "Kontinuierlich wachsende mineralische Abfallmengen aus Bau, Rückbau und Infrastruktur.",
  },
  {
    value: "151.300 t/a",
    label: "Bedarfsprognose im Einzugsgebiet",
    description: "Über sechs Landkreise im Radius von bis zu 70 km, deutlich über unserer Jahreskapazität.",
  },
]

export default function BauschuttOverview() {
  return (
    <section id="ueberblick" className="scroll-mt-20 bg-[#1a1a1a] py-24 border-t border-[#333]">
      <div className="w-full px-6">

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a0c6e3] mb-6">
            ▲&nbsp;&nbsp;IM ÜBERBLICK
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase text-white">
            AUS STILLGELEGTER
            <br />
            KIESGRUBE WIRD
            <br />
            INFRASTRUKTUR.
          </h2>
        </motion.div>

        {/* 3 highlight blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#2a2a2a] mb-12">
          {highlights.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="bg-[#1a1a1a] px-8 py-8"
            >
              <p className="text-4xl md:text-5xl font-black text-[#a0c6e3] leading-none mb-2">
                {value}
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
                {label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Body text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="max-w-2xl space-y-4 text-gray-400 leading-relaxed mb-12"
        >
          <p>
            Der ausgebeutete Kiessandtagebau Luggendorf wird zur einzigen DK-I-Mineralstoffdeponie im Umkreis von ca. 100 km umgenutzt, ohne nennenswerte Veränderung des äußeren Erscheinungsbildes der Landschaft.
          </p>
          <p>
            Errichtung und Betrieb erfolgen vollständig nach DepV Anhang 1: Basisabdichtung, Sickerwassermanagement und Rekultivierung sind fester Bestandteil des technischen Konzepts.
          </p>
        </motion.div>

        {/* Markt: strukturelle Unterversorgung */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a0c6e3] mb-6">
            ▲&nbsp;&nbsp;MARKT. STRUKTURELLE UNTERVERSORGUNG
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {marktStats.map(({ value, label, description }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
              >
                <p className="text-3xl md:text-4xl font-black text-[#a0c6e3] leading-none mb-3">{value}</p>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-1">{label}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tags marquee */}
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0) }
            to   { transform: translateX(-50%) }
          }
        `}</style>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25, ease }}
          className="overflow-hidden"
        >
          <div
            className="flex whitespace-nowrap"
            style={{ animation: "marquee 22s linear infinite" }}
          >
            {[...tags, ...tags].map((tag, i) => (
              <span key={i} className="inline-flex items-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-600 border border-[#2a2a2a] px-3 py-1.5">
                  {tag}
                </span>
                <span className="mx-4 text-[#2a2a2a] text-xs select-none">·</span>
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
