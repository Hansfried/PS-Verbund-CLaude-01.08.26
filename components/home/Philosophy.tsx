"use client"

import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

export default function Philosophy() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#a8c200] mb-3">▲&nbsp;&nbsp;Unsere Haltung</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            Regional verwurzelt. Zukunft schaffen.
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-3xl">
            Als regionales Bauunternehmen stehen wir für Qualität, Verlässlichkeit und eine enge Verbundenheit mit unserer Heimat. Wir begleiten unsere Kunden über viele Jahre und sind gemeinsam mit ihnen gewachsen. Ehrlichkeit, Transparenz und eine partnerschaftliche Zusammenarbeit bilden die Grundlage unseres Handelns. Nachhaltigkeit und der verantwortungsvolle Umgang mit Ressourcen sind für uns selbstverständlich. Gemeinsam schaffen wir eine Zukunft, die Generationen verbindet und langfristige Werte schafft.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
