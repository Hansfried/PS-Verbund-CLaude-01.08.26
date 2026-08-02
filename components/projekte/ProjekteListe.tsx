"use client"

import { motion } from "framer-motion"
import { kategorieLabels, type Projekt } from "@/lib/projekte-data"

const ease = [0.22, 1, 0.36, 1] as const

export default function ProjekteListe({ projekte }: { projekte: Projekt[] }) {
  return (
    <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
      {projekte.map(({ name, gesellschaft, kategorie, jahr }, i) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.04, ease }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-6"
        >
          <div>
            <p className="text-base font-bold text-gray-900">{name}</p>
            <p className="text-sm text-gray-500">{gesellschaft}</p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#a8c200]">
              {kategorieLabels[kategorie]}
            </span>
            <span className="text-sm text-gray-400">{jahr}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
