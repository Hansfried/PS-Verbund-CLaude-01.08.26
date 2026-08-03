"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

function CountUp({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1800
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, target])

  return <span ref={ref}>{count.toLocaleString("de-DE")}</span>
}

const kennzahlen = [
  {
    display: null,
    countTarget: 2026,
    einheit: "PLANFESTSTELLUNG ERWARTET",
    description: "Verfahren seit 2013, Antrag, Auslegung und Prüfung vollständig durchlaufen",
  },
  {
    display: null,
    countTarget: 400000,
    einheit: "M³ GENEHMIGTES VOLUMEN",
    description: "≈ 640.000 t Gesamtkapazität auf 5,5 ha Ablagerungsfläche",
  },
  {
    display: "35,4 ha",
    countTarget: null,
    einheit: "GESAMTGRUNDSTÜCK",
    description: "Vollständig im Eigentum der PS Bauschutt GmbH",
  },
  {
    display: null,
    countTarget: 50000,
    einheit: "T / JAHR ANNAHME",
    description: "Deutlich unter der regional prognostizierten Nachfrage von 151.300 t/a",
  },
  {
    display: null,
    countTarget: 5,
    einheit: "MITARBEITER",
    description: "Geschäftsführung, kaufmännische Leitung, Maschinisten, Waage",
  },
]

export default function BauschuttKennzahlen() {
  return (
    <section id="zahlen" className="scroll-mt-20 bg-[#0f0f0f] py-24 border-t border-[#333]">
      <div className="w-full px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="flex items-start justify-between mb-2"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a0c6e3] mb-6">
              ▲&nbsp;&nbsp;ZAHLEN & SUBSTANZ
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase text-white">
              WIR LIEFERN
              <br />
              DIE ZAHLEN.
            </h2>
          </div>
          <div
            className="w-0 h-0 hidden md:block mt-2"
            style={{
              borderLeft: "20px solid transparent",
              borderRight: "20px solid transparent",
              borderBottom: "32px solid #a0c6e3",
            }}
          />
        </motion.div>

        <div className="mt-12">
          {kennzahlen.map(({ display, countTarget, einheit, description }, i) => (
            <motion.div
              key={einheit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="border-t border-[#2a2a2a] py-8 flex flex-col md:flex-row md:items-baseline gap-6 md:gap-16"
            >
              <div className="flex items-baseline gap-2 min-w-0 md:shrink-0 md:min-w-[220px]">
                <span className="text-base text-[#a0c6e3] font-bold">▲</span>
                <p className="text-5xl md:text-7xl font-black text-[#a0c6e3] leading-none tracking-tight">
                  {countTarget !== null ? <CountUp target={countTarget} /> : display}
                </p>
              </div>
              <div className="md:text-right md:ml-auto">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-1">
                  {einheit}
                </p>
                <p className="text-sm text-gray-400 max-w-lg leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
