"use client"

import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

export default function Geography() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#a8c200] mb-3">▲&nbsp;&nbsp;Standorte & Märkte</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              Mitten in Deutschlands Dreiländereck wichtigstem Bau-Korridor.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Brandenburg. Mecklenburg-Vorpommern. Sachsen-Anhalt.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Das sind unsere Märkte. Und unser Zuhause. Kurze Wege, lokales Wissen und jahrzehntelange Beziehungen machen uns zum verlässlichsten Partner in der Region.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="relative aspect-[4/3] overflow-hidden rounded-br-[3.5rem] bg-gray-200"
          >
            <iframe
              src="https://maps.google.com/maps?q=Reetzer+Chaussee+1,+19348+Perleberg&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Standort Reetzer Chaussee 1, 19348 Perleberg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
