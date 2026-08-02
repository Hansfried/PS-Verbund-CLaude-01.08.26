"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { submitContactForm } from "@/lib/supabase"

const ease = [0.22, 1, 0.36, 1] as const

const personen = [
  {
    name: "MARKUS PLIKAT",
    funktion: "Geschäftsführer",
    email: "markus.plikat@psverbund.de",
    tel: "+49 175 5443554",
  },
  {
    name: "BRITTA HOLZHAUER",
    funktion: "Prokuristin · Waste Management · Deponie Leitung",
    email: "britta.holzhauer@psverbund.de",
    tel: "03876 / 300 830",
  },
]

export default function BauschuttKontakt() {
  const [form, setForm] = useState({ name: "", email: "", nachricht: "" })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.nachricht) return
    setSending(true)
    setError(false)
    try {
      await submitContactForm("bauschutt", form.name, form.email, form.nachricht)
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="kontakt" className="scroll-mt-20 bg-[#1a1a1a] py-24 border-t border-[#a0c6e3]">
      <div className="w-full px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a0c6e3] mb-6">
            ▲&nbsp;&nbsp;KONTAKT
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none uppercase text-white">
            WIR FREUEN UNS
            <br />
            AUF IHR INTERESSE.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left — contact person + address */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="space-y-10"
          >
            {personen.map(({ name, funktion, email, tel }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-1">
                  {funktion}
                </p>
                <p className="text-lg font-black uppercase text-white mb-3">{name}</p>
                <a
                  href={`mailto:${email}`}
                  className="block text-lg md:text-xl font-bold text-white hover:text-[#a0c6e3] transition-colors duration-200 break-all mb-1"
                >
                  {email}
                </a>
                <a
                  href={`tel:${tel.replace(/\s/g, "")}`}
                  className="text-gray-400 hover:text-[#a0c6e3] transition-colors duration-200 text-sm font-medium"
                >
                  {tel}
                </a>
              </motion.div>
            ))}

            <div className="border-t border-[#333] pt-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">
                ADRESSE
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                PS Bauschutt GmbH
                <br />
                Reetzer Chaussee 1
                <br />
                19348 Perleberg / OT Groß Buchholz
              </p>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            {submitted ? (
              <div className="border border-[#a0c6e3] p-10 h-full flex flex-col justify-center">
                <p className="text-[#a0c6e3] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  ▲&nbsp;&nbsp;NACHRICHT ERHALTEN
                </p>
                <p className="text-white text-lg font-black uppercase leading-snug mb-3">
                  Vielen Dank,<br />{form.name}.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Wir melden uns in Kürze unter <span className="text-white">{form.email}</span> bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ihr Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#111] border border-[#333] text-white placeholder:text-gray-600 focus:border-[#a0c6e3] outline-none px-4 py-3 text-sm transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 block mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ihre@email.de"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#111] border border-[#333] text-white placeholder:text-gray-600 focus:border-[#a0c6e3] outline-none px-4 py-3 text-sm transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 block mb-2">
                    Nachricht
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Ihre Anfrage…"
                    value={form.nachricht}
                    onChange={(e) => setForm({ ...form, nachricht: e.target.value })}
                    className="w-full bg-[#111] border border-[#333] text-white placeholder:text-gray-600 focus:border-[#a0c6e3] outline-none px-4 py-3 text-sm transition-colors duration-200 resize-none"
                  />
                </div>
                {error && (
                  <p className="text-red-400 text-xs">
                    Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-[#a0c6e3] text-black text-xs font-black uppercase tracking-[0.2em] py-4 hover:bg-[#8bb6d8] transition-colors duration-200 disabled:opacity-50"
                >
                  {sending ? "Wird gesendet…" : "Absenden ▲"}
                </button>
              </form>
            )}
          </motion.div>

        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="mt-16 pt-8 border-t border-[#333] flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <p className="text-xs text-gray-600">
            © PS Bauschutt GmbH · Alle Rechte vorbehalten
          </p>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#a0c6e3]">
            PS VERBUND GRUPPE
          </p>
        </motion.div>

      </div>
    </section>
  )
}
